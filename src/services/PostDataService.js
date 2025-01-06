import { useCallback } from "react";

const PostDataService = () => {
  
    const postData = useCallback(async (item) => {
        try {
            const result = await fetch("http://localhost:3000/cart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(item),
            });

            if (result.ok) {
                alert("Added");
            } else {
                throw new Error(`Failed to post data`);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }, []);

    return { postData };
};

export default PostDataService;
