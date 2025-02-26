function onOpen() {
    var ui = DocumentApp.getUi();
    ui.createMenu("Knowledge Graph")
        .addItem("Export as JSON-LD", "exportAsJsonLd")
        .addToUi();
}

function exportAsJsonLd() {
    var doc = DocumentApp.getActiveDocument();
    var body = doc.getBody();
    var paragraphs = body.getParagraphs();

    // ✅ Task 1: Validate Document Name as KO
    var docTitle = doc.getName().trim();
    var koMatch = docTitle.match(/^Knowledge Object: (.+?) KO$/);

    if (!koMatch) {
        DocumentApp.getUi().alert("❌ ERROR: Document title must match 'Knowledge Object: <name> KO'.\nFix it and try again.");
        return;
    }

    var mainNode = {
        "@id": "urn:ko:" + koMatch[1].replace(/\s+/g, "_"),
        "@type": "KnowledgeObject",
        "name": koMatch[1]
    };

    var relatedNodes = new Set();
    var insideRelatedSection = false;
    var relatedHeadingLevel = null;

    // ✅ Task 2: Locate "Related Knowledge Objects" Section
    for (var i = 0; i < paragraphs.length; i++) {
        var text = paragraphs[i].getText().trim();
        var paragraphType = paragraphs[i].getHeading();

        // Start capturing when we find "Related Knowledge Objects" heading
        if (text === "Related Knowledge Objects" && paragraphType !== DocumentApp.ParagraphHeading.NORMAL) {
            insideRelatedSection = true;
            relatedHeadingLevel = paragraphType;
            continue;
        }

        // Stop capturing when encountering another heading of same or higher level
        if (insideRelatedSection && paragraphType !== DocumentApp.ParagraphHeading.NORMAL) {
            if (paragraphType <= relatedHeadingLevel) {
                break;
            }
        }

        // Capture Knowledge Objects in this section
        if (insideRelatedSection) {
            var matches = text.match(/Knowledge Object: (.+?) KO/g);
            if (matches) {
                matches.forEach(match => {
                    relatedNodes.add({
                        "@id": "urn:ko:" + match.replace("Knowledge Object: ", "").replace(" KO", "").replace(/\s+/g, "_"),
                        "@type": "KnowledgeObject",
                        "name": match.replace("Knowledge Object: ", "").replace(" KO", "")
                    });
                });
            }
        }
    }

    // ✅ Error if no "Related Knowledge Objects" found
    if (!insideRelatedSection) {
        DocumentApp.getUi().alert("❌ ERROR: 'Related Knowledge Objects' section not found.\nEnsure it is correctly formatted as a heading.");
        return;
    }

    // ✅ Build JSON-LD Graph
    var jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            mainNode,
            ...Array.from(relatedNodes).map(related => ({
                "@id": related["@id"],
                "@type": "KnowledgeObject",
                "name": related["name"],
                "relatedTo": {
                    "@id": mainNode["@id"]
                }
            }))
        ]
    };

    // ✅ Convert JSON to a readable format
    var jsonString = JSON.stringify(jsonLd, null, 2);

    // ✅ Display JSON-LD to the user in a modal dialog
    showJsonInDialog(jsonString);

    Logger.log(jsonString);
}

/**
 * Displays JSON-LD in a Google Docs Dialog for easy copying.
 */
function showJsonInDialog(jsonString) {
    var htmlOutput = HtmlService.createHtmlOutput(
        `<p><b>JSON-LD Output</b></p>
         <textarea style="width:100%;height:300px;">${jsonString}</textarea>
         <p>Copy and save this JSON-LD.</p>`
    ).setWidth(600).setHeight(400);

    DocumentApp.getUi().showModalDialog(htmlOutput, "Knowledge Graph Export");
}

