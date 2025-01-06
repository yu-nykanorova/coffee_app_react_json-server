import { useCallback } from "react";

const PutDataService = () => {
    const updateData = useCallback(async (id, updatedItem) => {
        try {
            const result = await fetch(`http://localhost:3000/cart/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedItem),
            });

            if (result.ok) {
                alert("Item updated successfully!");
            } else {
                throw new Error(`Failed to fetch data`);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }, []); 

    return { updateData };
};

export default PutDataService;
