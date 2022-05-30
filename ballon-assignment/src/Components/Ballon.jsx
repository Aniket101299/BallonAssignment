import { useEffect, useState } from 'react';
import './Ballon.css'

const Balloon = () => {

  const[inputValue , setInputValue] = useState([]);
  const [colors, setColor] = useState([]);
  const[show, setShow] = useState(false);
  
useEffect (() => {
 
  let  div = new Array(5).fill(0) 
  div =div.map((e,i) =>{
    return { key:i, color: getRandomColor()}
  })

  setColor(div);

},[])


function getRandomColor() {

  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return  color;
}


const handleShoot= () => {
  
for(let i=1;i<6;i++) {
  if(inputValue.length === 0) {
    alert("Please Enter a valid number");
  }
   if(inputValue[0] === 1) {
    alert(`circle ${inputValue} disabled`);
  }
   if(inputValue[1] === 2) {
    alert(`circle ${inputValue} disabled`);
 }
  if(inputValue[2] === 3) {
    alert(`circle ${inputValue} disabled`);
 }
  if(inputValue[3] === 4) {
     alert(`circle ${inputValue} disabled`);
 }
  if(inputValue[4] === 5) {
    alert(`circle ${inputValue} disabled`);
 }
}
 if(inputValue.length>5 ) {
  alert( `You  can't enter more than 5 value at a time`);
}


inputValue.map((e) => {
      
    if(inputValue[0]==1) {
      alert(` Cirlce  ${inputValue} disabled` );
    }
    if(inputValue[1]==2) {
      alert(` Cirlce  ${inputValue} disabled` );
    } 
    
  })
  
}



const handleInput = (e) => {
 setInputValue([...e.target.value])
}


const displayOutput = (inputValue) => {

}

displayOutput();
  return (
    <div>
      <h5>Ballon Game</h5>
      <div className="shadow-box">

{/* empty div */}

          <div className='main-empty-div'>1

             <div className='sqaure-div'> Empty Div 
      
            </div>

          </div>


{/* ballon div */}

          <div  className='main-ballon-div'> <h6>Circle</h6>

                 {
                   colors.map((e,i) =>{
                     return(
                      <div   style={{backgroundColor:e.color}}  className='main-ballon-div-1' key={i}> circle </div>     
                     )
                   })
                 }

          </div>


{/* takinginput and button div  start here */}

     <div className='input-button-div'>

        <div className='inside-input-button-div'>
  
        <input
          className="ib"
          onChange={handleInput} 
          id="outlined-number"
          label="Enter Number"
          type="number"
        />

        <br/>
        <br/>

         <button onClick={handleShoot} variant="outlined">Shoot</button>

        </div>
    </div>

      {/* takinginput and button div  end here */}

  </div>
</div>
  )
}

export default Balloon;