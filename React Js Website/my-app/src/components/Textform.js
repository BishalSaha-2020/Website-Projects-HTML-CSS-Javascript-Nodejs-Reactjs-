import React ,{ useState } from 'react'

export default function Textform(props) {
    const handleUpClick =()=>{
        console.log("Uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Upper Case","success")
    }
    const handleLowClick =()=>{
        console.log("Uppercase was clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Lower Case","success")
    }
    const handleClearClick =()=>{
        console.log("Clear was clicked"+ text);
        let newText="";
        setText(newText)
        props.showAlert("Upper Case","warning")
    }
    const handleOnChange =(event)=>{
        console.log("Uppercase was clicked");
        setText(event.target.value)
        
    }
    
    const [text,setText] = useState("Enter Something");
   
    return (
        <>
        <div>
          <div className="mb-3">
            <h1 className="hy">{props.heading}</h1>
           <div className="hii">
            
             <textarea className="form-control" value= {text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
             </div>
         </div> 
         <button type="button" className="btn btn-primary mx-5" onClick={handleUpClick}>Convert To Uppercase</button>
         <button type="button" className="btn btn-success mx-5" onClick={handleLowClick}>Convert To Lowercase</button>
         <button type="button" className="btn btn-danger mx-5" onClick={handleClearClick}>Clear</button>
        </div>
        <div className="container my-4" >
            <h2>Your Text Summary</h2>
            
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
  
}
