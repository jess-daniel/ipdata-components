export default async (apiKey) => {
  try {
    const rawData = await fetch(`https://api.ipdata.co/?api-key=${apiKey}`);
    const jsonData = await rawData.json();
    return jsonData;
  } catch (error) {
    throw error;
  }
};
