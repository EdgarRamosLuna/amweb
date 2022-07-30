import React, {useState} from 'react';
import { Button } from '../../styles/HomeStyle';

  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100){
      setVisible(true)
    } 
    else if (scrolled <= 100){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button>
     <div className="btnScroll" onClick={scrollToTop} 
     style={{display: visible ? 'flex' : 'none'}}>
      <i className="fa-solid fa-camera"></i>
     </div>
    </Button>
  );
}
  
export default ScrollButton;