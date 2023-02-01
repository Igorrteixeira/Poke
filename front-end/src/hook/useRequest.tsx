import { useEffect, useState } from "react";
import axios from "axios";

function useRequestData<T = unknown>(url: string) {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(url)
        .then((response) => {
          setLoading(true);
          setData(response.data);
        })
        .catch((error) => {
          setLoading(true);
          setData(error.response);
        })
        .finally(() => setLoading(true));
    }, 1000);
  }, [url]);

  return { data, loading };
}

export default useRequestData;
