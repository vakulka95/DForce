import { useState, useEffect } from "react";
import {useLocation,useHistory} from 'react-router-dom';

export const useLocationOnScroll = () => {
  const [position,setPosition] = useState({ y: null });
  let locate = useLocation()
  let history = useHistory()

  const handleMouseMove = (e)=> {
    console.log(position.y);
    setPosition({
      y: e.clientY
    });
    if(position.y){
        console.log(locate);  
        locate.hash = '#fuck'
        history.replace(locate.hash)
        }
}

  useEffect(()=>{

      window.addEventListener('scroll', handleMouseMove)
      return ()=> window.removeEventListener('scroll', handleMouseMove)
  })
  
  console.log(position.y);

  return position;
};
