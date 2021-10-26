import Cookies from "js-cookie";

export const CountryBlocked = ({ blockedCountries }) => {
  const { country_code } = Cookies.get("ipdata");

  const blocked = blockedCountries.some((code) => {
    return country_code === code;
  });

  blocked ? (
    <div>
      <p>This content is not available in your geo-location</p>
    </div>
  ) : null;
};
