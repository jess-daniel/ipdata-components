import { useState, useEffect } from "react";

import getIPData from "../../utils/getIPData";

export const useIPData = (apiKey) => {
  const [ipData, setIpData] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    getIPData(apiKey)
      .then((res) => {
        setIpData(res);
      })
      .catch((err) => setError(err.message));
  }, []);

  return [ipData, error];
};
