import './App.css';
import React, { useState } from 'react'

import CSS from './components/CSS';
import JavaScript from './components/JS';
import HTML from './components/HTML';
import OutputScreen from './components/OutputScreen';

const structureStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridTemplateRows: '50vh 700px',
	height: '100vh',
	width: '100vw',
	justifyContent: 'center',
	alignItems: 'stretch',
	color: 'white',
	backgroundColor: 'black',
	gap: '1rem',
}

const initialCSSText = 
`.frame {
	width: 400px; 
	height: 400px; 
	position: absolute; 
	top: 50%; 
	left: 50%;
	transform: translate(-50%, -50%); 
	background: white;
	box-shadow: 0 0 10px 5px rgba(0,0,0,0.5);
}`

function App() {

	const [htmlText, setHtmlText] = useState('<div class="frame"></div>')
	const [styleText, setStyleText] = useState(initialCSSText)
	const [jsText, setJsText] = useState('')
	const [currentJsText, setCurrentJsText] = useState('')

	const applyJsText = () => {
		setCurrentJsText(jsText)
	}

	return (
		<div className="App" style={structureStyle}>
			<HTML text={htmlText} onHtmlChange={(e) => setHtmlText(e.target.value)}/>
			<CSS text={styleText} onCssChange={(e) => setStyleText(e.target.value)}/>
			<JavaScript text={jsText} onJsChange={(e) => setJsText(e.target.value)} applyJsText={applyJsText}/>
			<OutputScreen htmlText={htmlText} cssText={styleText} jsText={currentJsText}/>
		</div>
	)
}

function applyStyle(styleText) {
	const styleTag = document.getElementsByTagName('style')[0]
	styleTag.innerText = styleText	
} 


export default App;
