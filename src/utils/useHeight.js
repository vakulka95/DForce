import {useState,useCallback} from 'react';


 const useHeight = () => {
    const [rect, setRect] = useState(null);
    const ref = useCallback(node => {
      if (node !== null) {
        setTimeout(()=>{  setRect(node.getBoundingClientRect().height)},100)
      
      }
    }, []);
    return [rect, ref];
    }

    export default useHeight