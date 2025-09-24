import React, { use, useState } from 'react'

function Form() {
    const [todos,Settodos] = useState([
        {id:1,title:"fuck u",date:"0",isComplete:false},
    ]); 
    const [Title,SetTitle]= useState("")
    const [Check,SetCheck]= useState(false);
    const [Gender, setGender] = useState(false);

    const submitHandler =(e)=>{
        e.preventDefault();
        
    }


  return( <div>
    <h1>Create Tasks </h1>
    <form onSubmit={submitHandler}>
        <input onChange={(e)=>SetTitle(e.target.value)} value={Title} type="text" placeholder="title" />

        <input type="date" placeholder='date' />
        <br />

        <input onChange={(e)=>SetCheck(e.target.checked)} checked={Check} type="checkbox" />completed
        <br />

        <input type="radio" value="male" onChange={(e)=>setGender(e.target.value)} checked={Gender=="male"&&true} />Male
        <input type="radio" value="female" onChange={(e)=>setGender(e.target.value)} checked={Gender=="female"&&true} />Female
        <br /><br />
        <button>Create Todo</button>
    </form>
    </div>
  );
}

export default Form;