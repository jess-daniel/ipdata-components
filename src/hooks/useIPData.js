import { useState, useEffect } from "react";
import Cookies from "js-cookie";

import getIPData from "../../utils/getIPData";

export const useIPData = (apiKey) => {
  const [ipData, setIpData] = useState({});
  const [error, setError] = useState("");

  const ipCookie = Cookies.get("ipdata");

  useEffect(() => {
    if (!ipCookie) {
      getIPData(apiKey)
        .then((res) => {
          console.log("IP Data", res);
          setIpData(res);
          Cookies.set("ipdata", JSON.stringify(res), { expires: 14 });
        })
        .catch((err) => setError(err.message));
    } else {
      setIpData(JSON.parse(ipCookie));
    }
  }, []);

  return [ipData, error];
};
