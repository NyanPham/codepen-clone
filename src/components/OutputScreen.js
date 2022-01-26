import React from 'react';

const OutputScreen = ({source}) => {
    return (
        <div className="output-screen">
            <iframe
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                srcDoc={source}
            >
            </iframe>
        </div>
    )
};

export default OutputScreen;
