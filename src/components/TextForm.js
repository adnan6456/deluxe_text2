import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");

    const handleUpClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    };

    const handleLoClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
    };


    const handleCamClick = ()=>{
        let myText = text.toLowerCase().trim().split(/[ ]+/)
        .reduce((text, word) => text + word[0].toUpperCase() + word.slice(1))

        let newText =  myText.split(/[ ]+/);
        setText(newText.join("  "))
        props.showAlert("Converted to camelCase", "success")
    };
    
    const handleUpChange = (event)=>{
       
        setText(event.target.value)
    }

  return (
    <>
    <div className={`container my-3 text-${props.mde}`}>
        <h1>{props.heading} </h1>
        <div className="form-group">
            <textarea className="form-control" placeholder = "Enter text here"value = {text} onChange = {handleUpChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleCamClick}>Convert To CamleCase</button>
    </div>

    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes to read</p>
    </div>

    </>
  )
}

TextForm.defaultProps = {heading : "Enter text below to analyze"}