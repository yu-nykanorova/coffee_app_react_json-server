import { useState, useEffect } from "react";
import GetDataService from "../services/GetDataService";

export const useFetch = (itemsName) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { fetchData } = GetDataService();

    useEffect(() => {
        const loadData = async () => {
            try {
                const result = await fetchData(itemsName);
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [itemsName]);

    return { data, loading, error };
};