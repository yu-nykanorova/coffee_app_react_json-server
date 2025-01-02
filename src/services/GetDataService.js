const GetDataService = () => {

  const fetchData = async (itemsName) => {
      try {
        const response = await fetch(`http://localhost:3000/${itemsName}`);
        if(!response.ok) {
          throw new Error(`Failed to fetch ${itemsName} data`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
          throw new Error(error.message);
      } 
  };

  return { fetchData };
  
}

export default GetDataService;