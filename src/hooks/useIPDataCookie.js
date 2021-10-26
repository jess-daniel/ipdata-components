import { useState, useEffect } from "react";
import Cookies from "js-cookie";

import getIPData from "../../utils/getIPData";

export const useIPDataCookie = (apiKey, { expires } = { expires: 14 }) => {
  const [ipData, setIpData] = useState({});
  const [error, setError] = useState("");
  console.log("expires", expires);
  const ipCookie = Cookies.get("ipdata");
  const cookieConsentGiven = Cookies.get("cookieConsentGiven");

  useEffect(() => {
    if (!ipCookie && cookieConsentGiven) {
      getIPData(apiKey)
        .then((res) => {
          setIpData(res);
          Cookies.set("ipdata", JSON.stringify(res), { expires });
        })
        .catch((err) => setError(err.message));
    } else {
      setIpData(JSON.parse(ipCookie));
    }
  }, []);

  return [ipData, error];
};
