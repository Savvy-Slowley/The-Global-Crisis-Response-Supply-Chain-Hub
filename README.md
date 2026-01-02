# The-Global-Crisis-Response-Supply-Chain-Hub


https://github.com/user-attachments/assets/dfebd765-b0ad-4b5a-93c7-91bac3c8f340



## Overview
<img width="1106" height="670" alt="image" src="https://github.com/user-attachments/assets/05bcaf6e-32a1-42e2-91e7-8688c14de69d" />
This project demonstrates how enterprise data platforms are designed to move beyond simple data storage into active operational intelligence. It simulates a humanitarian command center that coordinates global disaster relief logistics.
By leveraging Palantir Foundry, I have built a system that bridges the gap between raw data engineering and real-time decision-making. This workflow mirrors the capabilities of industry leaders like AWS and GCP, but within a unified, ontology-driven environment.

## Section 1: Synthetic Generation
<img width="1854" height="1125" alt="image" src="https://github.com/user-attachments/assets/378e78a8-f3c0-4a9e-b35f-e988b55614f1" />
Using Jupyter Notebooks, I wrote Python scripts (utilizing Pandas and Faker) to generate Synthetic Relief Mission data.

## Section 2: Production Engineering (ETL / ELT)
<img width="1856" height="1125" alt="image" src="https://github.com/user-attachments/assets/42fedaf2-9c84-4c48-bec3-bf71510f9f0a" />

- **Pipeline Orchestration & Lineage**  
  - Implemented production-grade ETL using **Pipeline Builder**, providing visual workflows, version control, and full data lineage—comparable to **AWS Glue Studio** or **GCP Dataflow**.

- **Data Ingestion**  
  - Integrated the **EM-DAT Global Disaster Database**, ingesting **16,000+ historical disaster records** into a governed data pipeline.

- **Data Transformation & Quality**  
  - Cleansed, normalized, and cast **47 raw source columns** into **40 high-integrity operational properties**, ensuring consistency and analytical readiness.

- **Geospatial Processing**  
  - Enriched datasets with coordinate-based geospatial attributes to enable map-driven filtering and spatial analysis, mirroring capabilities of **AWS Location Service**.

## Section 3: The Semantic Layer (The Ontology)
*Modeling in the Ontology Manager*

<p align="center">
  <img src="https://github.com/user-attachments/assets/5db0604a-46c3-4d50-9db6-bd818f593216" width="45%" />
  <img src="https://github.com/user-attachments/assets/aab27c07-fd3f-49c2-9878-0459b0a66e9d" width="45%" />
</p>

The core differentiator of this system is the **Ontology**, which replaces traditional relational modeling with **Digital Twin–based representations**. Instead of relying solely on SQL tables and foreign keys, real-world entities are modeled as governed, semantic objects.

- **Disaster Events**  
  - Modeled as Digital Twins representing real-world impact, including **fatalities, magnitude, geographic location, and temporal context**.

- **Relief Missions:** Represents the Response (Personnel, Status).
  
- **Relationships:** Established a 1:Many semantic link. The system understands that a mission is an active response to a specific crisis event, similar to a Knowledge Graph in AWS Neptune or GCP Data Lexicon.

## Section 4: Application Logic and CRUD Operations
*TypeScript logic implementation*
<img width="1848" height="1125" alt="image" src="https://github.com/user-attachments/assets/061b9bbe-53b1-4bad-b584-0afee0c82a72" />

**Code Repositories** were used to implement logic—functionally equivalent to **AWS Lambda** or **GCP Cloud Functions**.

- **CRUD Action Implementation**  
  - Developed a TypeScript function for the `createReliefMission` action to handle mission creation logic.

- **Data Inheritance & Integrity**  
  - When a new relief mission is created, the function automatically inherits the **Disaster ID** and **Country** from the parent disaster object.
  - This enforces **100% data integrity**, eliminates manual data entry, and prevents orphaned or inconsistent records.
 
## Section 6: Operational Command Center (Workshop)
*The Disaster Hub UI*

<p align="center">
  <img src="https://github.com/user-attachments/assets/bee4ded9-7894-4688-aaaf-eb097df58a53" width="48%" />
  <img src="https://github.com/user-attachments/assets/a6167656-368c-4dba-98f9-7ab1c883f2bd" width="48%" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/534b96f3-4f0d-456d-add2-9e0e5695812e" width="48%" />
  <img src="https://github.com/user-attachments/assets/85fe771c-9ffb-41b1-a733-48bd6b463daa" width="48%" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/bf7d3af3-165f-4435-926a-f7078b7f246c" width="48%" />
  <img src="https://github.com/user-attachments/assets/659152d4-1a8c-4796-b024-d403687b7725" width="48%" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/cbd2ed67-0770-4284-8c64-644651ebb041" width="48%" />
  <img src="https://github.com/user-attachments/assets/2937397a-751b-4bbb-9e84-b7c98ae531a2" width="48%" />
</p>

The **Disaster Hub UI** was built in **Workshop** to serve as a centralized single pane for crisis coordinators and operational decision-makers, enabling rapid situational awareness and real-time response execution.

- **Disaster Intelligence Tab**  
  - Integrates a **geospatial map** with object-linked data tables to provide visibility into disaster events, affected regions, and impact metrics.

- **Response Operations Tab**  
  - Delivers a **logistics-focused operational view** of active relief missions.
  - Includes interactive controls that trigger **TypeScript-backed Actions** to **create, edit, and delete missions**, enabling direct operational control without engineering intervention.
 
## Section 7: AI Integration — Beacon (AIP)
*Generative AI for decision support*

<p align="center">
  <img src="https://github.com/user-attachments/assets/552daf59-1495-4cc4-a2b2-6bf34a9b29de" width="48%" />
  <img src="https://github.com/user-attachments/assets/6d6a74c0-98bb-44bd-aead-eec1cf7ce1af" width="48%" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/65eba2d5-47c0-4c47-a7d8-6c0b7149f0a3" width="48%" />
  <img src="https://github.com/user-attachments/assets/95dec3b7-287c-485c-84d1-76f07be5e892" width="48%" />
</p>

To augment operational decision-making, **Palantir AIP** was integrated through a custom AI assistant named **Beacon**, enabling natural-language interaction with **live, governed operational data**.

- **Agentic Workflows**  
  - Beacon functions as an **AI Agent** equipped with SQL-based tools that query the live **Ontology**, ensuring responses are grounded in real-time, authoritative data rather than static context.

- **Decision Support**  
  - Comparable to **AWS Bedrock Agents**, Beacon can summarize disaster impact, surface critical metrics, and identify **personnel or resource deployment gaps**, supporting faster and more informed operational decisions.


