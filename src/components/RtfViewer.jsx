import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

const RtfViewer = ({ file }) => {
  const [content, setContent] = useState("Loading RTF...");

  useEffect(() => {
    file.text().then(text => {
      
      let cleaned = text
        .replace(/\\'[0-9a-fA-F]{2}/g, "")
        .replace(/\\[a-zA-Z]+\d*/g, "")
        .replace(/[{}]/g, "")
        .replace(/\n+/g, "\n");

      setContent(cleaned);
    });
  }, [file]);

  return (
    <div className="viewer-container">
      <h2>RTF Viewer</h2>
      <pre className="viewer-content" style={{ whiteSpace: "pre-wrap" }}>
        {DOMPurify.sanitize(content)}
      </pre>
    </div>
  );
};

export default RtfViewer;
