import { useCallback } from "react";

const DeleteDataService = () => {
    const deleteData = useCallback(async (id) => {
        try {
            const result = await fetch(`${import.meta.env.VITE_API_URL}/cart/${id}`, {
                method: "DELETE",
            });
            // const result = await fetch(`http://localhost:3000/cart/${id}`, {
            //     method: "DELETE",
            // });

            if (result.ok) {
                alert("Item removed from cart!");
            } else {
                throw new Error(`Failed to fetch ${itemsName} data`);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }, []);
  
    return { deleteData };
};

export default DeleteDataService;