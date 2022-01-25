import React, { useState } from 'react';

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


const HTML = ({text, onHtmlChange}) => {
    
    const handleTabDown = e => {
        if (e.keyCode === 9) e.preventDefault()
    }

    return (
        <div className="structure" style={segmentStyle}>
            <h2 style={{color: '#dadada'}}>HTML</h2>
            <textarea 
                name="html" 
                id="html" 
                placeholder='HTML'
                style={textAreaStyle}
                value={text}
                onChange={onHtmlChange}
                onKeyDown={handleTabDown}
            ></textarea>
        </div>
  )
}

export default HTML;
