import './App.css';
import React, { useState, useEffect } from 'react'

import OutputScreen from './components/OutputScreen';
import TextEditor from './components/TextEditor';
import useLocalStorage from './hooks/useLocalStorage'

function App() {

	const [htmlText, setHtmlText] = useLocalStorage('html','<p>Let\'s hack!</p>')
	const [cssText, setCssText] = useLocalStorage('css','p { \n\tcolor: white;\n\tfont-size: 1.5rem;\n}')
	const [jsText, setJsText] = useLocalStorage('javascript','document.querySelector("p").style.backgroundColor = "hsl(200, 100%, 50%)"')
	const [sourceDoc, setSourceDoc] = useState('')

	useEffect(() => {
		const timeout = setTimeout(() => {
			setSourceDoc(`
			<html>
				<body>${htmlText}</body>
				<style>${cssText}</style>
				<script>${jsText}</script>
			</html>
		`)
		}, 300)

		return () => clearTimeout(timeout)
	}, [htmlText, cssText, jsText])

	return (
		<div className="App">
			<div className="editors">
				<TextEditor 
					languageName="HTML"
					value={htmlText}
					onChange={(editor, data, value) => {
						setHtmlText(value)
					}}
					language="xml"
				/>
				<TextEditor 
					languageName="CSS"
					value={cssText}
					onChange={(editor, data, value) => {
						setCssText(value)
					}}
					language="css"
				/>
				<TextEditor 
					languageName="JS"
					value={jsText}
					onChange={(editor, data, value) => {
						setJsText(value)
					}}
					language="javascript"
				/>
			</div>
			<OutputScreen source={sourceDoc}/>
		</div>
	)
}

export default App;
