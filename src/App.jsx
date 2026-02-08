import FilePicker from './components/FilePicker'
import View from './components/View'
import './App.css'
import { useState } from 'react'

function App() {
  const [file, setFile] = useState(null)

  return (
    <>
   <div className="app-main">
      <div className="app-header">
        <h1>Document Viewer</h1>
       
      </div>
      
      <div className="app-controls">
        <FilePicker onFile={setFile}/>
      </div>

      {file && (
        <div className="app-workspace">
           <h3 className="file-info">Selected: {file.name}</h3>
           <View file={file}/>
        </div>
      )}
    </div>
    </>
  )
}

export default App
