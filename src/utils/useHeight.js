import {useState,useCallback} from 'react';


 const useHeight = () => {
    const [rect, setRect] = useState(null);
    const ref = useCallback(node => {
      if (node !== null) {
        setRect(node.getBoundingClientRect().height);
      }
    }, []);
    return [rect, ref];
    }

    export default useHeight