import { useState } from "react";
import Cookies from "js-cookie";

import { useIPData } from "../hooks/useIPData";

export const CookieNotice = ({ apiKey, showNotice, expires }) => {
  const [display, setDisplay] = useState(showNotice);
  const [consentResponse, setConsentResponse] = useState(false);

  const [ipData, error] = useIPData(apiKey);

  const acceptCookies = () => {
    Cookies.set("cookieConsentGiven", "true", { expires });
    Cookies.set("ipdata", JSON.stringify(ipData), { expires });
    setDisplay(false);
    setConsentResponse(true);
  };

  const rejectCookies = () => {
    setDisplay(false);
    setConsentResponse(true);
  };

  if (error) {
    return (
      <div>
        <p>IP Data error</p>
        <p>{error}</p>
      </div>
    );
  } else if (
    (ipData.is_eu && consentResponse === false) ||
    (display && consentResponse === false)
  ) {
    return (
      <div>
        <p>Cookie notice</p>
        <button onClick={acceptCookies}>Accept Cookies</button>
        <button onClick={rejectCookies}>Reject Cookies</button>
      </div>
    );
  }

  return null;
};
