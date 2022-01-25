import React from 'react';

const segmentStyle = {
    width: '100%',
    color: 'black',
    height: '80%',
    backgroundColor: 'black',
    fontSize: '1rem'
}

const textAreaStyle = {
    width: '100%',
    height: '100%',
    color: '#a37800',
    resize: 'none',
    backgroundColor: '#333',
    outline: 'none',
    padding: '10px',
    fontSize: '1rem'
}

const buttonStyle = {
    background: '#fff',
    borderRadius: '50%',
    padding: 'none',
    outline: 'none',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    border: '1px solid lightgrey',
    fontWeight: 'bold'
}

const JavaScript = ({text, onJsChange, applyJsText}) => {
   
    const handleTabDown = e => {
        if (e.keyCode === 9) e.preventDefault()
        console.log(this.selectionStart)
    }
   
    return (
        <div className="javascript" style={segmentStyle}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <h2 style={{color: '#dadada'}}>JavaScript</h2>
                <button onClick={applyJsText} style={buttonStyle}>Run</button>
            </div>  
            <textarea 
                name="js" 
                id="js" 
                placeholder='JS'
                value={text}
                onChange={onJsChange}
                onKeyDown={handleTabDown}
                style={textAreaStyle}
            ></textarea>
        </div>
  )
}

export default JavaScript;
