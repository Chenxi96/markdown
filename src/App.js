import React, { useEffect } from 'react';
import { useState } from 'react';
import { marked } from 'marked';
import {hello} from './features/counter/test'
import './App.css';


function App() {
  const [previewString, setPreviewString] = useState(hello)
  
  useEffect(() => {


    document.getElementById('preview').innerHTML = marked.parse(previewString, {gfm: true, breaks: true});
  }, [previewString])

  
  const print = (event) => {
    
    setPreviewString(event.target.value);
  }

  


  return (
    <>
    {/* make two div to imitate two browser have one browser edit and the other preview */}
      <div id='content' >
        <p>Editor</p>
        <hr></hr>
        <textarea id='editor' onChange={print} defaultValue={previewString}/>
      </div>
      <div id='block'>
        <h4>Preview</h4>
        <p id='preview'></p>
      </div>
      
    </>
  );
}

export default App;
