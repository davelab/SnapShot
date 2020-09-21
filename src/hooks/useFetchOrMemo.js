import  { useState, useEffect } from "react";
import fetchGallery from "../repository/fetchGallery";

const cache = {};

const useFetchOrMemo = (query) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!query) return;

        const fetchData = async () => {
          setIsLoading(true);
            if (cache[query]) {
                const data = cache[query];
                setData(data);
                setIsLoading(false);
            } else {
              try {
                const data = await fetchGallery(query);
                cache[query] = data; // set response in cache;
                setData(data);
                setIsLoading(false);
              } catch (e) {
                console.log('some error', e);
              }
            }
        };

        fetchData();
    }, [query]);

    return [isLoading, data];
};

export default useFetchOrMemo;