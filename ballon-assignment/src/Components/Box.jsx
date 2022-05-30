import './Ballon.css'
import {useState} from "react";


function Box() {

    const [input, setInput] = useState();
    const [CircleOne, setCircleOne] = useState(true);
    const [CircleTwo, setCircleTwo] = useState(true);
    const [CircleThree, setCircleThree] = useState(true);
    const [CircleFour, setCircleFour] = useState(true);
    const [CircleFive, setCircleFive] = useState(true);
    const funShow1 = () => {
    
        setCircleOne(false)
        
      }
      const funfunsShow11 = () => {
    
        setCircleOne(true)
        
      }
      const circle2 = () => {
    
        setCircleTwo(false)
        
      }
      const funShow12 = () => {
    
        setCircleTwo(true)
        
      }
      const circle3 = () => {
    
        setCircleThree(false)
        
      }
      const funShow13 = () => {
    
        setCircleThree(true)
        
      }
      const circle4 = () => {
    
        setCircleFour(false)
        
      }
      const funShow14 = () => {
    
        setCircleFour(true)
        
      }
      const circle5 = () => {
    
        setCircleFive(false)
        
      }
      const funShow15 = () => {
    
        setCircleFive(true)
        
      }
    const handleShoot = () => {
        
if(input==="1"){

  funShow1()
}else if(input==="2"){
 
    circle2() 
}
else if(input==="3"){
  
    circle3()  
}
else if(input==="4"){
   
    circle4()  
}
else if(input==="5"){
    
    circle5() 
}else{
    alert("Please Enter Correct Number");   
}

}
  return (

  <div >
    <div className="shadow-box">
        <div className='main-empty-div'>
          
            {
              CircleOne? null: <div className="div-1" onClick={funfunsShow11} ></div>
            }
              {
              CircleTwo? null: <div className="div-2" onClick={funShow12}></div>
            }
              {
              CircleThree? null: <div className="div-3" onClick={funShow13}></div>
            }
              {
              CircleFour?null:  <div className="div-4" onClick={funShow14}></div>
            }
              {
              CircleFive? null:  <div className="div-5" onClick={funShow15}></div>
            }
     
        </div>

        <div className="main-div-2">
            {
              CircleOne? <div className="div-1"></div>:null
            }
              {
              CircleTwo? <div className="div-2"></div>:null
            }
              {
              CircleThree? <div className="div-3"></div>:null
            }
              {
              CircleFour? <div className="div-4"></div>:null
            }
              {
              CircleFive? <div className="div-5"></div>:null
            }
           
        </div>

        <div className="main-div-3">
            
         <input
          onChange={(el) => {
            setInput(el.target.value);

          }}
            id="outlined-number"
            label="Enter Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <br /> <br />
            <button onClick={handleShoot} variant="outlined"> Shoot </button>
        </div>

    </div>
  </div>
 );
}
  
export default Box;