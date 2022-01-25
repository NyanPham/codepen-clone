import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async'

const screenContainerStyle = {
    gridColumn: 'span 3',
    gridRow: '2 / 3',
    marginTop: '1rem',
    color: "#dadada",
    display: 'flex',
    flexDirection: 'column'
}

const screenStyle = {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    position: 'relative'
}

const OutputScreen = ({htmlText, cssText, jsText}) => {
    return (
        <div className="output-screen-container" style={screenContainerStyle}>
            <h2 style={{color: '#dadada'}}>Result</h2>
            <div 
                className="output-screen" 
                dangerouslySetInnerHTML={{__html: htmlText}} 
                style={screenStyle}
            /> 
            <Helmet>
                 <script>{jsText}</script>
                <style>{cssText}</style>
            </Helmet>
        </div>
    )
};

export default OutputScreen;
