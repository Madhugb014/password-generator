import {useState} from 'react'

export const StrongPassword = () => {

    const [length,setLength] = useState(0);
    const [includeUpper,setIncludeUpper] = useState(false);
    const [includeLower,setIncludeLower] = useState(false);
    const [includeNumber,setIncludeNumber] = useState(false);
    const [includeSymbol,setIncludeSymbol] = useState(false);
    const [password,setPassword] = useState("");

    const generatePassword= ()=>{
        let charset="";
        if(includeUpper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(includeLower) charset += "abcdefghijklmnopqrstuvwxzy";
        if(includeNumber) charset += "0123456789";
        if(includeSymbol) charset += "!@#$%^&*()-_=+";
        let generatorPassWord ="";
        for(let i=0; i< length; i++){ 
          const randomIndex = Math.floor(Math.random() * charset.length);
          generatorPassWord += charset[randomIndex];
        }
        setPassword(generatorPassWord);
    };

    const copyToClipborad = () =>{
      navigator.clipboard.writeText(password);
      alert("Password Copied");

    }


    

  return (

    <div className='password-generator'>
        <h2>Strong Password Generator</h2>

       <div className="input-group">
        <label htmlFor="num">Password Length: </label>
        <input type="number"  id="num" value={length} 
        onChange={(e)=> setLength(parseInt(e.target.value))} />
       </div>

       <div className="checkbox-group">
        <input type='checkbox' id='upper' checked={includeUpper}
        onChange={(e)=> setIncludeUpper(e.target.checked)}/>
        <label htmlFor="upper">Include UpperCase</label>
       </div>
       <div className="checkbox-group">
        <input type='checkbox' id='lower' checked={includeLower} 
        onChange={(e)=> setIncludeLower(e.target.checked)}/>
        <label htmlFor="lower">Include LowerCase</label>
       </div>
       <div className="checkbox-group">
        <input type='checkbox' id='numbers' checked={includeNumber} 
        onChange={(e)=> setIncludeNumber(e.target.checked)}/>
        <label htmlFor="numbers">Include Number</label>
        </div>
        <div className="checkbox-group">
        <input type='checkbox' id='symbol' checked={includeSymbol}
        onChange={(e)=> setIncludeSymbol(e.target.checked)}/>
        <label htmlFor="symbol">Include Symbol</label>
       </div>

       <button className='generate-btn' onClick={generatePassword}>Generate Password</button>

       <div className="generate-password">
        <input type="text" readOnly value={password} />
        <button className='copy-btn'onClick={copyToClipborad} >Copy</button>
       </div>

       </div>
       
 
  );
}
