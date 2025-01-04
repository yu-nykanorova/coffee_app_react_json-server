
const PostDataService = () => {
  
    const postData = async (item) => {
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
                alert("Error");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return { postData };
}

export default PostDataService;
