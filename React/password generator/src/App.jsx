import { useCallback, useEffect, useState, useRef } from "react"
function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copy, setCopy] = useState("Copy")

  // useCallback() is reponsible for memoization and caching
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "~@#$%^&*"

    for (let i = 0; i < length; i++) {
      const index = Math.round(Math.random() * (str.length - 1))
      pass += str[index]
    }
    setPassword(pass)
  }, [length, numberAllowed, characterAllowed])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed])

  const passwordref = useRef(null)

  const copyPasswordToClipBoard = useCallback((text) => {
    if (text == "Copy") {
      setCopy("Copied")
    }
    setTimeout(() => {
      setCopy("Copy")
    }, 1000)

    // To select elemnet
    passwordref.current?.select()

    // To select within range
    // passwordref.current?.setSelectionRange(0, 10)

    // To opy password on clipboard
    window.navigator.clipboard.writeText(password)
  }, [password])

  // This method is also works on button click and doesn't depend on anything
  // const copyPasswordToClipBoard=function(text){
  //   if(text=="Copy"){
  //     setCopy("Copied")
  //   }
  //   setTimeout(()=>{
  //     setCopy("Copy")
  //   },1000)
  //   window.navigator.clipboard.writeText(password)
  // }

  return (
    <>
      <h1 className="text-white text-center text-3xl mt-6">Password Generator</h1>

      <div className="flex justify-center items-center mt-4 rounded">

        <div className="bg-slate-700 flex flex-col justify-center items-center py-4 rounded">

          <div className="flex justify-center items-center">
            <input className="rounded-l w-72 focus:outline-none h-8" type="text" name="" id="" value={password} readOnly  ref={passwordref}/>
            <button onClick={(e)=>copyPasswordToClipBoard(e.target.innerText)} className="text-white bg-blue-600 rounded-r h-8 px-2 py-1">{copy}</button>
          </div>

          <div className="flex justify-center items-center gap-x-1 mt-4">
            <input className="w-3/12" type="range" name="" id="" value={length} min={8} max={30} onChange={(e) => setLength(e.target.value)} />
            <span className="text-orange-400  ">Length({length})</span>
            <label className="text-orange-400" htmlFor="numbers">Numbers</label>
            <input className="text-white" type="checkbox" name="" id="numbers" onClick={() => setNumberAllowed(!numberAllowed)} />
            <label className="text-orange-400" htmlFor="characters">Characters</label>
            <input type="checkbox" name="" id="characters" onClick={() => setCharacterAllowed(!characterAllowed)} />
          </div>

        </div>

      </div>

    </>
  )
}

export default App

