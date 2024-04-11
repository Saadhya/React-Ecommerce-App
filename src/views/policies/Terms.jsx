import React from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const Terms = () => {
  const docs = [
    {
      uri: "./demo.docx",
      fileType: "docx",
      fileName: "demo.docx",
    },
    // {
    //   uri:require("./Privacy-Policy.pdf"),
    //   fileType:"pdf",
    //   fileName:"Privacy-Policy.pdf"
    // },
    {
      uri: "./demo.pdf",
      fileType: "pdf",
      fileName: "demo.pdf",
    },
  ];
  return (
    <div>
      <DocViewer
        documents={docs}
        pluginRenderers={DocViewerRenderers}
        style={{ height: 1000, overflow: "auto" }}
      />
    </div>
  );
};

export default Terms;
