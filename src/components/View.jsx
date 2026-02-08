import React from "react";
import PdfViewer from "./PdfViewer";
import DocxViewer from "./DocxViewer";
import ImageViewer from "./ImageViewer";
import ExcelViewer from "./ExcelViewer";
import MarkdownViewer from "./MarkdownViewer";
import RtfViewer from "./RtfViewer";

const View = ({file}) => {
    const type = file.name.split('.').pop().toLowerCase();


    if(type === 'jpg' || type === 'png' || type === 'jpeg') return <ImageViewer file={file}/>
    if(type === 'pdf') return <PdfViewer file={file}/>
    if(type === 'docx') return <DocxViewer file={file}/>
    if(type === 'xlsx'|| 'xls') return <ExcelViewer file={file}/>
    if(type === 'md') return <MarkdownViewer file={file}/>
    if(type === 'rtf') return <RtfViewer file={file}/>


    return (
        
            <h2>{file.name} file not supported.</h2>
    );
};

export default View;