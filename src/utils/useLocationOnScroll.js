import { useState, useEffect } from "react";
import {useLocation,useHistory} from 'react-router-dom';

export const useLocationOnScroll = () => {
  const [position,setPosition] = useState({ y: null });
  let locate = useLocation()
  let history = useHistory()

  const handleMouseMove = (e)=> {
    setPosition({
      y: e.clientY
    });
    if(position.y){  
        locate.hash = '#fuck'
        history.replace(locate.hash)
        }
}

  useEffect(()=>{

      window.addEventListener('scroll', handleMouseMove)
      return ()=> window.removeEventListener('scroll', handleMouseMove)
  })
  

  return position;
};
