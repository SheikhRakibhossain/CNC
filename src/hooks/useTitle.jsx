import { useEffect } from 'react';

const useTitle = title => {
    useEffect(()=>{
        document.title = `${title} - CNC `;
    },[title])
   
};

export default useTitle;