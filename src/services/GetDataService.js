import { useCallback } from "react";

const GetDataService = () => {

  const getData = useCallback (async (itemsName) => {
      try {
        const result = await fetch(`http://localhost:3000/${itemsName}`);
        if(!result.ok) {
          throw new Error(`Failed to fetch ${itemsName} data`);
        }
        const data = await result.json();
        return data;
      } catch (error) {
          throw new Error(error.message);
      } 
  }, []);

  return { getData };
  
};

export default GetDataService;