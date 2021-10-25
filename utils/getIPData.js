export default async (apiKey) => {
  const rawData = await fetch(`https://api.ipdata.co/?api-key=${apiKey}`);

  const jsonData = await rawData.json();

  return jsonData;
};
