import React from "react";

const ImageViewer = ({file}) => {
    return (
        <div className="viewer-container image-viewer-container">
           
            <img 
                src={URL.createObjectURL(file)} 
                alt={file.name} 
                className="image-viewer-img"
            />
        </div>
    );
};

export default ImageViewer;