import React from "react";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

const Policy = () => {
  const docs = [
    { uri: "./demo.pdf", fileType: "pdf", fileName: "demo.pdf" }, // Local File
    // { uri: "./demo.docx", fileType: "docx", fileName: "demo.docx" }, // Local File
  ];

  return (
    <div>
      <DocViewer
        documents={docs}
        pluginRenderers={DocViewerRenderers}
        style={{ height: 500 }}
        config={{
          header: {
            disableHeader: true,
          },
          pdfZoom: {
            defaultZoom: 1.1, // 1 as default,
            zoomJump: 0.2, // 0.1 as default,
          },
          pdfVerticalScrollByDefault: true, // false as default
        }}
      />
    </div>
  );
};

export default Policy;
