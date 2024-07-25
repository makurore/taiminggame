import React from 'react';
import './App.css';


let score :number=0;


function App() {
  function handleClick (event: React.MouseEvent<HTMLButtonElement>): void {
      function updateGauge() {
        progress=(progress+1)
        if(progress>50){
          progress=1
        }
      }
    
      setInterval(updateGauge, 5);
    
    let elements = document.getElementsByClassName("alertButton");
    elements[0].classList.toggle("active");
      let elemen = document.getElementsByClassName("e-rin");
      elemen[0].classList.toggle("active");
      rin ()
    setTimeout(() => {
      let elemen = document.getElementsByClassName("e-rin");
      elemen[0].classList.toggle("active");
      rin ()
    }, 500);
    setTimeout(() => {
      let elemen = document.getElementsByClassName("e-rin");
      elemen[0].classList.toggle("active");
      rin ()
    }, 1000);
    setTimeout(() => {
      let elemen = document.getElementsByClassName("e-rin");
      elemen[0].classList.toggle("active");
      rin ()
      count=0
    }, 1500);
    setTimeout(() => {
      let elemen = document.getElementsByClassName("in");
      elemen[0].classList.toggle("active");
      
    
    }, 1500);
    setTimeout(()=>{
     count=0
    },2000)
    setTimeout(() => {
      let elemen = document.getElementsByClassName("in");
      elemen[0].classList.toggle("active");
      count=0
    }, 2500);
    setTimeout(() => {
      count=0
    }, 3000);

    setTimeout(() => {
      let elemen = document.getElementsByClassName("e-rin");
      elemen[0].classList.toggle("active");
      rin ()
    }, 3500);
    setTimeout(() => {
      let elemen = document.getElementsByClassName("e-rin");
      elemen[0].classList.toggle("active");
      rin ()
    }, 4000);

    setTimeout(() => {
      let elemen = document.getElementsByClassName("e-rin");
      elemen[0].classList.toggle("active");
      rin ()
    }, 4500);
    setTimeout(() => {let elemen = document.getElementsByClassName("e-rin");
    elemen[0].classList.toggle("active");
      rin ()
    }, 5000);
    setTimeout(() => {
      let elemen = document.getElementsByClassName("in");
      elemen[0].classList.toggle("active");
      count=0
    }, 5000);
    setTimeout(() => {
      count=0
    }, 5500);
    setTimeout(() => {
      let elemen = document.getElementsByClassName("in");
      elemen[0].classList.toggle("active");
     count=1;
    }, 6000);
 
    setTimeout(() => {
      let elemen = document.getElementsByClassName("e-rin");
      elemen[0].classList.toggle("active");
      rin ()
    }, 6500);
    setTimeout(() => {
      let elemen = document.getElementsByClassName("e-rin");
      elemen[0].classList.toggle("active");
      rin ()
    }, 7000);
    setTimeout(() => {
      let elemen = document.getElementsByClassName("e-rin");
      elemen[0].classList.toggle("active");
      rin ()
    }, 7500);
    setTimeout(() => {let elemen = document.getElementsByClassName("e-rin");
    elemen[0].classList.toggle("active");
      rin ()
    }, 8000);
    setTimeout(() => {
      let elemen = document.getElementsByClassName("in");
      elemen[0].classList.toggle("active");
      count=0
    }, 8000);
    setTimeout(() => {
      count=0
    }, 8500);
    setTimeout(() => {
      let elemen = document.getElementsByClassName("in");
      elemen[0].classList.toggle("active");
     count=1
    }, 9000);
    setTimeout(() => {
      let elemen = document.getElementsByClassName("help");
      elemen[0].classList.toggle("active");
      rin ()
    }, 9500);
    setTimeout(() => {
      rin ()
    }, 10000);
    setTimeout(() => {
      let elemen = document.getElementsByClassName("help");
      elemen[0].classList.toggle("active");
      
    
  }, 10500);
  setTimeout(() => {
    let elemen = document.getElementsByClassName("in");
    elemen[0].classList.toggle("active");
      count=0
      last=1
  }, 10500);
  setTimeout(() => {
      count=0
  }, 11000);
  setTimeout(() => {
    let elemen = document.getElementsByClassName("in");
    elemen[0].classList.toggle("active");
   
  }, 11000);
    setTimeout(() => {
      let elemea = document.getElementsByClassName("mein");
      elemea[0].classList.toggle("active");
      let eleme = document.getElementsByClassName("last");
      eleme[0].classList.toggle("active");
      const content = `${score}`;
      let tyoto = document.getElementsByClassName("target");
      tyoto[0].insertAdjacentHTML('beforeend', content);
      count=1
    }, 11500);
    

      
  }
  function handle (event: React.MouseEvent<HTMLButtonElement>): void {
   window.location.reload()
  } 
 let count:Number=1
 let last:number=0
  function click (event: React.MouseEvent<HTMLButtonElement>): void {
    if(0===count){
   console.log(progress);
   score=score+progress
   console.log(score)
   count=+1
   if(last===0){
    let elements = document.getElementsByClassName("e-rin");
    elements[0].classList.toggle("active");
    setTimeout(() => {
      elements[0].classList.toggle("active");
    }, 300);
   }else{
    let elements = document.getElementsByClassName("help");
    elements[0].classList.toggle("active");
    setTimeout(() => {
      elements[0].classList.toggle("active");
    }, 300);
   }

    if (progress > 40) {
      let elements = document.getElementsByClassName("checkryou");
  elements[0].classList.toggle("active");
  setTimeout(() => {
    elements[0].classList.toggle("active");
  }, 200);
    } else if (progress > 30) {
      let elements = document.getElementsByClassName("checknami");
      elements[0].classList.toggle("active");
      setTimeout(() => {
        elements[0].classList.toggle("active");
      }, 200);
    } else {
      let elements = document.getElementsByClassName("checkge");
      elements[0].classList.toggle("active");
      setTimeout(() => {
        elements[0].classList.toggle("active");
      }, 200);
    }
  
    }
    
  } 
  
  
  return (
   
        <>
        
        <div className='alertButton'>
          <h1>
            スマホなら横向きじゃないとおかしなことになるかも</h1>
            <h1>
            タイミングよくボタンを押してハイスコアを目指してみよう！
            </h1>
            <h1>
            STARTをおして始めよう！
          </h1>
          <button onClick={handleClick}>start</button>
        </div>
        <div className='mein'>
        <div className='fukidasi'><img src="fukidashi-6.png"alt="吹き出し" /> <div className='e-rin active'>えーりん</div><div className='help active' >助けて<br></br>えーりん</div></div>

        
        <div className='tuki'>
      
        </div>
        <div className='body'>
        <img src="イラスト(胴体).png" alt="うどんげ" />
        </div>
        <div className="down active">
        <img src="イラスト2.png" alt="腕さげ" />
        </div>
        <div className="age">
        <img src="イラスト23.png" alt="腕あげ" />
        </div>
         <div className='gauge'>
         <div className='in'></div>
         </div>
         <h1 className='checkryou'>良</h1> <h1 className='checknami'>並</h1> <h1 className='checkge'>悪</h1>
         <button className='timing' onClick={click}>ボタン</button>
         </div>

         <div className='last'>
          score <p className="target"></p>
          <button id="tri" onClick={handle}>リトライ</button>
         </div>
        </>
       
  );
}




function rin (){
  
  let elements = document.getElementsByClassName("down");
  elements[0].classList.toggle("active");
  let element = document.getElementsByClassName("age");
  element[0].classList.toggle("active");
 
}
let progress = 50;
function start_timing(){
  function updateGauge() {
    progress=(progress+10)
    if(progress<50){
      progress=0
    }
  }

  function evaluate(progress: number) {
    if (progress > 40) {
      return "良";
    } else if (progress > 30) {
      return "並";
    } else {
      return "下";
    }
  }
  console.log(evaluate);

  setInterval(updateGauge, 50);
}
export default App;

