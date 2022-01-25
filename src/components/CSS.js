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


const CSS = ({text, onCssChange}) => {

    const handleTabDown = e => {
        if (e.keyCode === 9) e.preventDefault()
    }
    
    return (
        <div className="styles" style={segmentStyle}>
            <h2 style={{color: '#dadada'}}>CSS</h2>
            <textarea 
                name="css" id="css" 
                placeholder='CSS'
                style={textAreaStyle}
                value={text}
                onChange={onCssChange}
                onKeyDown={handleTabDown}
            ></textarea>
        </div>
  )
}

export default CSS;
