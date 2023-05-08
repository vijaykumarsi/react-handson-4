import React, { useState } from 'react';




function Form() {
  const [name,setName] = useState("");
  const [department, setDepartment] = useState("");
  const [rating, setRating] = useState("");

  const [data, setdata] = useState(true);
  const [formdata, setformdata] = useState(false);
  const [Back, setBack] = useState(false);

  const [allEntry, setAllEntry] = useState([]);

  const submitForm=(e)=>{
    e.preventDefault();
    setdata(false);
    setBack(true);
    const newEntry = { name:name, department:department , rating:rating };
    setAllEntry([... allEntry , newEntry]);
    console.log(allEntry);
    setformdata(true);
  }
   const back =()=>{
    setdata(true)
    setBack(false)
    setformdata(false)
   }
  return (
    <div>
     {data && <div>
        <form action="" onSubmit={submitForm} className="formName">
        <div>   
            <label htmlFor="name">Name :</label>
            <input type="text" name='name' id='name' autoComplete='off' value={name} onChange={(e)=>setName(e.target.value)}/>
        </div> 
        <div>
            <label htmlFor="department">Department :</label>
             <input type="text" name='department' id='department' autoComplete='off' value={department} onChange={(e)=>setDepartment(e.target.value)}/>
        </div> 
        
        <div>
              <label htmlFor="rating">Rating :</label>
            <select name="rating" id="rating" value={rating} onChange={(e)=>setRating(e.target.value)}>
            <option hidden value={0}>Hit the Rating</option>
               <option value={1}>1</option>
               <option value={2}>2</option>
               <option value={3}>3</option>
               <option value={4}>4</option>
                <option value={5}>5</option>
               
           </select>

         </div> 
        <div>
            <button className='btn1'>Submit</button>
        </div>
      </form>
      </div>
}
{formdata && <div>
      <div className='storeData'>
        {
          allEntry.map((curElem)=>{
              return(
                <div className ="showDataStyle">
                  <label htmlFor="">Name&nbsp;=&nbsp;</label>
                  <p>{curElem.name}</p>&nbsp;|&nbsp;
                  <br />
                  <label htmlFor="">Depatment&nbsp;=&nbsp;</label>
                  <p>{curElem.department}</p>&nbsp;|&nbsp;
                  <br />
                  <label htmlFor="">Rating&nbsp;=&nbsp;</label>
                  <p>{curElem.rating}</p>
                </div>
              )
          })
        }
      </div>
</div>}
{Back &&<div>
<button className="dynamic_button" onClick={back}>Go back</button>
</div>
}
    </div>
  )
}

export default Form
