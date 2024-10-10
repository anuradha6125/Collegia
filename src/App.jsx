import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import logo from './assets/logo.png'; 

function App() {
  const [ question, setQuestion]=useState("");
  const [ answer, setAnswer]=useState("");
  
  async function generateAnswer(){
    const response=await axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDJVinu35sqNxpVllZ25mqU93z3rVBSCCk",
      method:"post",
      data:{"contents":[{"parts":[{"text":question}]}]}
    });
    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
  }
  return (
    <>
      <div className="App">
      <header className="App-header">
        <img src={logo} alt="Collegia Logo" className="App-logo" />
        <h1>Welcome to Collegia</h1>
      </header>
    </div>
    <div className="input-container">
      <textarea value={question} onChange={(e)=>setQuestion(e.target.value)} cols={100} rows={3} placeholder='ask anything'></textarea>
      <button onClick={generateAnswer}>Generate</button>
      <pre>{answer}</pre>
      </div>
    </>
  )
}

export default App
