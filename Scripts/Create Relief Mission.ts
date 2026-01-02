import { Function, Edits, Integer, OntologyEditFunction, Timestamp } from "@foundry/functions-api";
import { Objects, DisasterEvent, ReliefMissions } from "@foundry/ontology-api";
import { Uuid } from "@foundry/functions-utils";

export class MissionActions {
    @Edits(ReliefMissions)
    @OntologyEditFunction()
    public async createReliefMission(
        targetDisaster: DisasterEvent,
        organization: string,
        PersonnelCount: Integer,
        missionStatus: string,
        priorityLevel: string,
        suppliesShipped: string,
        missionNotes: string,
        lastUpdatedBy: string,
        lastUpdatedOn: Timestamp,
    ): Promise<void> {

        // 1. Generate Primary Key
        const missionId = Uuid.random();

        // 2. Create the new Mission object
        const newMission = Objects.create().reliefMissions(missionId);

        // 3. LOGIC: Mission Name Generation
        // Checks if displayName exists to match your Python logic:
        // f"{org} Response - {display_name}" if display_name else f"{org} Response"

        // Note: Verify 'displayName' matches the exact API property name on your Disaster object
        const disasterName = targetDisaster.displayName;

        if (disasterName) {
            newMission.missionName = `${organization} Response - ${disasterName}`;
        } else {
            newMission.missionName = `${organization} Response`;
        }

        // 4. Assign other properties
        // We map the ID purely for data reference
        newMission.disasterId = targetDisaster.disasterId;
        newMission.country = targetDisaster.country;
        newMission.organization = organization;
        newMission.personnelCount = PersonnelCount;
        newMission.missionStatus = missionStatus;
        newMission.priorityLevel = priorityLevel;
        newMission.suppliesShipped = suppliesShipped;
        newMission.missionNotes = missionNotes;
        newMission.lastUpdatedBy = lastUpdatedBy;
        newMission.lastUpdatedOn = lastUpdatedOn;

        // 5. DYNAMIC UPDATE (The Link)
        // This effectively "pulls" the ontology relationship. 
        // It creates the graph edge between the new Mission and the existing Disaster.
        // Replace 'disasterEvent' with the specific Link API Name from your Ontology.
        //newMission.disasterEvent.set(targetDisaster);
    }
}

