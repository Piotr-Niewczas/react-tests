import { useEffect, useState } from "react";

interface fetchResult<T> {
    data: T | null,
    isPending: boolean,
    error: string | null;
}

function useFetch<T = any>(url: string): fetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal })
            .then((response) => {
                if (!response.ok)
                    throw Error("Could not fetch the data for that resource!");
                return response.json();
            })
            .then((data: T) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted.');
                }
                else {
                    setError(err.message);
                    setIsPending(false);
                    console.error(err.name + ":  " + err.message);
                }
            });

        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;



