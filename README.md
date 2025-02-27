# Knowledge Extractor for Google Docs

## 📚 Overview
The **Knowledge Extractor for Google Docs** is an automated tool designed to extract structured knowledge objects from publicly shared Google Docs. It identifies **Knowledge Objects (KOs)** and their relationships, transforming unstructured human-created documents into **machine-readable knowledge graphs**.

This tool is part of the **[Half Brain, Half Bot](https://github.com/Half-Brain-Half-Bot)** project, a larger initiative focused on integrating human expertise with AI reasoning to accelerate knowledge discovery and adaptation.

---

## 🎯 The Need: Why This Exists
### **🔹 Problem**
- Experts frequently document structured knowledge in **Google Docs**, but these documents are not easily **machine-readable**.
- AI models and knowledge graph systems cannot efficiently process **hyperlinked, human-readable knowledge graphs** unless they are extracted in a structured format.

### **🔹 Solution**
The **Knowledge Extractor** automates this extraction process by:
✅ **Identifying** and extracting structured "Knowledge Objects" (KOs).  
✅ **Preserving relationships** between knowledge objects through hyperlinks.  
✅ **Transforming** human knowledge graphs into **machine-readable JSON-LD data**.  
✅ **Allowing AI models** to reason over expert-created graphs **without manual data entry**.  

---

## 🚀 Role in [Half Brain, Half Bot](https://github.com/Half-Brain-Half-Bot)
The **Half Brain, Half Bot** project aims to create a **hybrid intelligence system** where human experts collaborate with AI to accelerate knowledge discovery.  

The **Knowledge Extractor for Google Docs** plays a critical role by:
- Bridging the gap between **human-created** knowledge and **AI-driven** reasoning.
- Allowing AI models to navigate **human knowledge graphs** dynamically.
- Enabling **real-time knowledge updates** as experts expand their understanding.

By transforming knowledge objects into structured graphs, we **eliminate bottlenecks** in AI-assisted learning and research.

---

## 🛠️ Installation & Setup

### **🔹 Steps to Install & Run**
1. **Copy the Sample Google Doc**
   - Open this publicly shared document:  
     [Knowledge Object: Cardiovascular Disease KO](https://docs.google.com/document/d/1fIjefD3yYNnV0i3X9n8xL8CnOhE0BDyiZWXcGb8cRgY/edit?usp=sharing)
   - Click **File > Make a Copy** to create your own editable version.

2. **Install and Run the Google Apps Script**
   - Open the copied Google Doc.
   - Click **Extensions > Apps Script**.
   - Paste the provided Google Apps Script code (available in this repository).
   - Run the script to extract structured JSON-LD from the document.

3. **Observe the JSON-LD Output**
   - The extracted data will be shown in a dialog box.
   - This JSON-LD can be saved or integrated into external knowledge graph tools.

---

## 🏃 Future Enhancements
- ✅ **Tooling to merge and visualize the latest JSON-LD** from subject matter experts.
- ✅ **Interactive browsing of the extracted Knowledge Graph**.
- ✅ **Integration with Neo4j** for knowledge graph visualization.
- ✅ **Export to RDF/OWL** for ontology-based reasoning.

---

## 🤝 Contributing
We welcome contributions to improve this project! If you'd like to contribute:
1. **Fork the repo** on GitHub.
2. **Create a new branch** (`git checkout -b feature-branch`).
3. **Make improvements** and **commit changes**.
4. **Push to GitHub** (`git push origin feature-branch`).
5. **Create a Pull Request (PR)**.

---

## 📚 License
This project is licensed under the **MIT License**.  
See [LICENSE](LICENSE) for details.

---

## Contributors
- **[@alexryan](https://github.com/alexryan)** → Original Creator & Lead Developer

---
🚀 **Bridging Human Knowledge and AI — One Document at a Time.**

