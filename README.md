# The-Global-Crisis-Response-Supply-Chain-Hub

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

