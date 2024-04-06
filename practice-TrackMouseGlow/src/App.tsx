
import './App.scss'
import * as React from "react";

function App() {

  let curX: number = 0;
  let curY: number = 0;
  let tgX: number = 0;
  let tgY: number = 0;

  const interBubble = React.useRef<HTMLElement>(); 

  const mouseEvent = (e:MouseEvent) => {
    tgX = e.clientX;
    tgY = e.clientY;
  }
  
  const move = () => {
    curX += (tgX - curX) / 10 ;
    curY += (tgY - curY) / 10 ;
    if (interBubble.current) {
      interBubble.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      // this allows to ease the animation for our mouse cursor
      // and loops the function so the browser can handle running it
      requestAnimationFrame(move)
    }
  }

  React.useEffect(()=> {

    window.addEventListener('mousemove', mouseEvent);
    move();
    ()=> {
      window.removeEventListener('mousemove', mouseEvent);
    }
  },[])

  return (
    <div className='gradientBackground'>
      <svg xmlns='https://www.w3.org/2000/svg'>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className='gradient-container'>
        <div className='g1'></div>
        <div className='g2'></div>
        <div className='g3'></div>
        <div className='g4'></div>
        <div className='g5'></div>
        <div ref={interBubble as React.RefObject<HTMLDivElement>} className='interactive'></div>
      </div> 
    </div>
  )
}

export default App
