# AI Workflow Pipeline Builder

A visual workflow builder that allows users to design and validate pipelines by connecting nodes in an interactive interface.

The application combines a **React-based frontend** for visually constructing workflows with a **FastAPI backend** that analyzes the pipeline structure. When a pipeline is submitted, the backend checks whether the graph forms a **Directed Acyclic Graph (DAG)**, ensuring that workflows do not contain cyclic dependencies.

This project demonstrates concepts used in modern **workflow orchestration systems and AI pipeline tools**.

---
## 🎥 Demo

▶️ **Project Walkthrough**  
[Watch Demo Video](https://drive.google.com/file/d/1kYPZP2pNhYjL3BfiEaYOjUGBIlDCTQiu/view?usp=drive_link)

* Running the application
* Drag-and-drop node creation
* Connecting nodes to build pipelines
* Dynamic TextNode behavior
* Backend pipeline validation
* DAG detection results

---

# Features

## Visual Workflow Editor

Users can build workflows visually by dragging nodes onto a canvas and connecting them with edges. The interface is built using **React Flow**, enabling interactive graph visualization and real-time connections.

---

## Reusable Node Architecture

A reusable **BaseNode component** was implemented to eliminate duplication across node implementations.

Each node supports:

* configurable input fields
* connection handles
* dynamic parameters
* customizable styling

This design allows new node types to be added easily.

---

## Custom Node Types

Several nodes demonstrate the flexibility of the pipeline system:

* **Math Node** – performs arithmetic operations
* **Condition Node** – represents conditional logic
* **Database Node** – simulates database operations
* **API Node** – represents external API requests
* **Transform Node** – performs text transformations

All nodes reuse the **BaseNode abstraction**, ensuring a consistent architecture.

---

## Dynamic Text Node

The **TextNode** supports dynamic variable inputs.

Example:

Hello {{input}}

The system automatically:

* extracts variables using regular expressions
* validates variables as JavaScript identifiers
* removes duplicate variables
* dynamically generates input handles

The node also **automatically resizes based on the text content**.

---

## Interactive Pipeline Connections

Nodes can be connected to form **directed workflow pipelines**.

Connections are managed using **React Flow**, while global state is handled through **Zustand**.

---

## Backend Pipeline Validation

When a pipeline is submitted, the frontend sends the graph structure to the backend.

The **FastAPI backend** performs:

* node count calculation
* edge count calculation
* **Directed Acyclic Graph (DAG) validation**

Cycle detection is implemented using **Kahn’s Topological Sorting Algorithm**, a standard graph algorithm used to detect cycles in directed graphs.

---

# System Architecture

Frontend
React + React Flow + Zustand

↓

REST API

↓

Backend
FastAPI

↓

Graph Validation Logic

↓

DAG Detection Algorithm

This architecture separates **UI rendering, state management, and graph validation**, making the system modular and scalable.

---

# Tech Stack

## Frontend

React
React Flow
Zustand
JavaScript

## Backend

Python
FastAPI
Pydantic

## Concepts

Graph Algorithms
Directed Acyclic Graphs (DAG)
Topological Sorting

---

# Running the Project

## Run Frontend

cd frontend
npm install
npm start

Frontend runs at:

http://localhost:3000

---

## Run Backend

cd backend
uvicorn main:app --reload

Backend runs at:

http://localhost:8000

---

# Example Pipeline

Example workflow:

Input Node → Transform Node → API Node → Output Node

This forms a valid **Directed Acyclic Graph (DAG)**.

If a cycle is introduced (for example Output → Input), the backend detects it and marks the pipeline as invalid.

---

# What This Project Demonstrates

* Visual workflow design systems
* Scalable UI component architecture
* Graph-based pipeline modeling
* Dynamic UI behavior
* DAG validation using graph algorithms
* Frontend–backend API integration

---

# Future Improvements

Possible extensions include:

* pipeline execution engine
* saving and loading workflows
* authentication and user management
* real-time collaboration
* AI workflow nodes (LLM, embeddings, etc.)
























































