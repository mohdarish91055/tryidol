import React, { useEffect ,useState} from "react";
import mammoth from "mammoth";

const DocxViewer = ({file}) => {
    const [html,setHtml] = useState('');

    useEffect(()=>{
        file.arrayBuffer().then((buffer)=>{
            mammoth.convertToHtml({ arrayBuffer: buffer })
            .then(result => setHtml(result.value));
        })
    },[file]);
    return (
        <div className="viewer-container">
            <h2>DOCX Viewer</h2>
            <div className="viewer-content" dangerouslySetInnerHTML={{__html:html}} />
        </div>
    );
};

export default DocxViewer;