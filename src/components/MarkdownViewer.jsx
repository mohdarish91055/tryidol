import React from "react";
import { useEffect,useState } from "react";
import { marked } from "marked";

const MarkdownViewer = ({file}) => {
    const [html,setHtml] = useState('');

    useEffect(()=>{
        file.text().then(text=>{
            setHtml(marked(text));
        })
    },[file])
    return (
       
            <div className="viewer-content" dangerouslySetInnerHTML={{__html:html}} />
       
    );
};

export default MarkdownViewer;