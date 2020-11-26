import {useState,useCallback} from 'react';


 const useHeight = () => {
    const [rect, setRect] = useState(null);
    const ref = useCallback(node => {
      if (node !== null) {
        setTimeout(()=>{  setRect(node.getBoundingClientRect().height);
          console.log(rect);},500)
      
      }
    }, [rect, setRect]);
    return [rect, ref];
    }

    export default useHeight