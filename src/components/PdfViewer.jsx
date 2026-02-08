import React from "react";

const PdfViewer = ({file}) => {
    return (
        <div className="viewer-container">
           
            <iframe src={URL.createObjectURL(file)} className="pdf-frame" title="PDF Document" />
        </div>
    );
};

export default PdfViewer;