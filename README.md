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
✅ **Transforming** human knowledge graphs into **machine-readable JSON data**.  
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

### **🔹 Prerequisites**
Ensure you have the following installed:
- **Python 3.10+**
- **Google Chrome or Brave** (for JavaScript execution)
- **Node.js** (for browser automation via Puppeteer)
- **Git** (for version control)

### **🔹 Clone the Repository**
```bash
git clone https://github.com/Half-Brain-Half-Bot/Knowledge-Extractor-for-Google-Docs.git
cd Knowledge-Extractor-for-Google-Docs
```

### **🔹 Install Python Dependencies**
```bash
pip install -r requirements.txt
```

### **🔹 Install Node.js Dependencies**
```bash
npm install
```

---

## 🏃 Running the Knowledge Extractor
### **🔹 Extract Knowledge from a Public Google Doc**
```bash
python extract.py --url "https://docs.google.com/document/d/1fIjefD3yYNnV0i3X9n8xL8CnOhE0BDyiZWXcGb8cRgY/edit?usp=sharing"
```
🔹 The extracted knowledge will be output as **JSON**.  

🔹 A sample publicly shared Google Doc for testing:  
[Knowledge Object: Cardiovascular Disease KO](https://docs.google.com/document/d/1fIjefD3yYNnV0i3X9n8xL8CnOhE0BDyiZWXcGb8cRgY/edit?usp=sharing)

---

## 📈 Expected JSON Output
```json
{
  "name": "Knowledge Object: Cardiovascular Disease KO",
  "permalink": "https://docs.google.com/open?id=1fIjefD3yYNnV0i3X9n8xL8CnOhE0BDyiZWXcGb8cRgY",
  "knowledge_objects": [
    {
      "name": "Knowledge Object: Cardiovascular Disease, Zeta-Potential, and Thymic Involution KO",
      "permalink": "https://docs.google.com/document/d/1FJo96kOlxj5PB_5fkZxH7ZMfyV7ceZaL5fIIqwNexqA/edit?usp=sharing"
    },
    {
      "name": "Knowledge Object: Cardiovascular Disease and the Protective Gel Layer Hypothesis KO",
      "permalink": "https://docs.google.com/document/d/18-9eRjuHT24PWWzEsnIm9Txv1YCQh8Sw4bkYfrEHA40/edit?usp=sharing"
    }
  ]
}
```

---

## 🔧 Troubleshooting

### **🔹 No Knowledge Objects Found**
- Ensure the document follows the **Knowledge Object Naming Convention**:
  - `Knowledge Object: <Name> KO`
- The "Related Knowledge Objects" section must be a **Heading 3**.

### **🔹 Permission Errors**
- Ensure the document is **publicly shared**:  
  1. Open the Google Doc.
  2. Click **Share** (📎).
  3. Change permissions to **"Anyone with the link" → Viewer**.

---

## 📚 Future Enhancements
- ✅ **GUI Interface** for non-technical users.
- ✅ **Automated document sharing prompt** before extraction.
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

## 🔗 Related Projects
- **[Half Brain, Half Bot](https://github.com/Half-Brain-Half-Bot)**  
- **[Knowledge Graph Extraction API](https://github.com/Half-Brain-Half-Bot/Knowledge-Graph-API)**  

---

## 📜 License
This project is licensed under the **MIT License**.  
See [LICENSE](LICENSE) for details.

---
🚀 **Bridging Human Knowledge and AI — One Document at a Time.**

