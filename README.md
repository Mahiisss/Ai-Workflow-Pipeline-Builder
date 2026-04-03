# AI Workflow Pipeline Builder 🚀

A visual workflow builder that allows users to design, connect, and validate pipelines using an interactive node-based interface.

The application combines a **React-based frontend** for building workflows visually with a **FastAPI backend** that validates pipeline structures. The backend ensures that the workflow forms a **Directed Acyclic Graph (DAG)**, preventing cyclic dependencies.

This project demonstrates core concepts used in modern **workflow orchestration systems** and **AI pipeline tools**.

---

## 🎥 Demo

▶️ **Project Walkthrough**
https://drive.google.com/file/d/1kYPZP2pNhYjL3BfiEaYOjUGBIlDCTQiu/view?usp=drive_link

**Includes:**

* Running the application
* Drag-and-drop node creation
* Connecting nodes to build pipelines
* Dynamic TextNode behavior
* Backend pipeline validation
* DAG detection results

---

## ✨ Features

### 🧩 Visual Workflow Editor

Users can build workflows by dragging nodes onto a canvas and connecting them with edges.
Built using **React Flow** for interactive graph visualization and real-time updates.

---

### ♻️ Reusable Node Architecture

A reusable **BaseNode component** eliminates duplication across node types.

Each node supports:

* Configurable inputs
* Connection handles
* Dynamic parameters
* Custom styling

---

### 🔌 Custom Node Types

* **Math Node** – performs arithmetic operations
* **Condition Node** – handles logic branching
* **Database Node** – simulates DB operations
* **API Node** – represents external API calls
* **Transform Node** – processes text transformations

All nodes follow a consistent **BaseNode abstraction**.

---

### 🧠 Dynamic Text Node

Example:

```
Hello {{input}}
```

Features:

* Extracts variables using regex
* Validates variable names
* Removes duplicates
* Dynamically creates input handles
* Auto-resizes based on content

---

### 🔗 Interactive Pipeline Connections

* Build **directed workflows**
* Managed using **React Flow**
* Global state handled via **Zustand**

---

### ⚙️ Backend Pipeline Validation

When submitted, the pipeline is analyzed by the backend:

* Node count
* Edge count
* **DAG validation**

Cycle detection is implemented using **Kahn’s Topological Sorting Algorithm**.

---

## 🏗️ System Architecture

```
Frontend (React + React Flow + Zustand)
            ↓
        REST API
            ↓
Backend (FastAPI)
            ↓
Graph Validation Logic
            ↓
DAG Detection Algorithm
```

This ensures a modular and scalable design.

---

## 🛠️ Tech Stack

### Frontend

* React
* React Flow
* Zustand
* JavaScript

### Backend

* Python
* FastAPI
* Pydantic

### Concepts

* Graph Algorithms
* Directed Acyclic Graphs (DAG)
* Topological Sorting

---

## ▶️ Running the Project

### Run Frontend

```bash
cd frontend
npm install
npm start
```

Runs on: http://localhost:3000

---

### Run Backend

```bash
cd backend
uvicorn main:app --reload
```

Runs on: http://localhost:8000

---

## 🔍 Example Pipeline

```
Input → Transform → API → Output
```

✅ Valid DAG

If a cycle is introduced (e.g., Output → Input), the backend detects it and marks it invalid.

---

## 🎯 What This Project Demonstrates

* Visual workflow systems
* Scalable component architecture
* Graph-based pipeline design
* Dynamic UI behavior
* DAG validation using graph algorithms
* Frontend–backend integration

---

## 🚀 Future Improvements

* Pipeline execution engine
* Save/load workflows
* Authentication system
* Real-time collaboration
* AI nodes (LLMs, embeddings, etc.)

