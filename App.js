import Keypad from "./Keypad"
import './App.css'
import { useState } from "react"

function App() {

      const [input,setInput]=useState("")
      function handleClick(value){
            setInput(input+value)

      }
      function handleClear(){
            setInput("")
      }
      function Calculate(){
            let outputval=eval(input)
            setInput(outputval)
      }
      return (
            <div className="container">
                  <h1>Calculator App using react</h1>
                  <div className="caculator">
                        <input type="text"  className="output"  value={input} readOnly/>
                       <Keypad handleClick={handleClick} handleClear={handleClear} Calculate={Calculate}/>

                  </div>

            </div>
      )
}

export default App