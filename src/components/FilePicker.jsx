import React from 'react';

const FilePicker = ({onFile}) => {
    return (
        <div className="file-picker-container">
            <label className="file-picker-label">
                <input 
                    type="file" 
                    className="file-picker-input" 
                    onChange={(e)=>onFile(e.target.files[0])}
                />
                <span className="file-picker-text">Choose a file to view</span>
            </label>
        </div>
    );
};

export default FilePicker;