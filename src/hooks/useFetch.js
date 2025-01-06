import { useState, useEffect } from "react";
import GetDataService from "../services/GetDataService";
import PostDataService from "../services/PostDataService";
import PutDataService from "../services/PutDataService";
import DeleteDataService from "../services/DeleteDataService";

export const useFetch = (itemsName, method) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { getData } = GetDataService();
    const { postData } = PostDataService();
    const { updateData } = PutDataService();
    const { deleteData } = DeleteDataService();

    const loadData = async (id = null, body = null) => {
        try {
            setLoading(true);
            setError(null);

            let result;
            switch (method) {
                case "GET":
                    result = await getData(itemsName);
                    break;
                case "POST":
                    result = await postData(body);
                    break;
                case "PUT":
                    result = await updateData(id, body);
                    break;
                case "DELETE":
                    result = await deleteData(id);
                    break;
                default:
                    throw new Error(`Unsupported request method: ${method}`);
            }

            setData(result);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (method === "GET") {
            const controller = new AbortController();
            loadData(controller.signal).catch(() => {});
            return () => controller.abort();
        }
    }, [itemsName, method]);

    return { data, loading, error, loadData };
};