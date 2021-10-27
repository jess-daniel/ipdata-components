export const CountryBlocked = ({ blockedCountries, ipData, children }) => {
  const { country_code } = ipData;

  if (blockedCountries.length > 0) {
    const blocked = blockedCountries.some((code) => {
      return country_code === code;
    });

    return blocked ? (
      <div
        style={{ backgroundColor: "coral", height: "500px", width: "500px" }}
      >
        <p>This content is not available in your geo-location</p>
      </div>
    ) : (
      children
    );
  }

  return children;
};
