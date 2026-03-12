export default async function handler(req, res) {
  const { category,q } = req.query;

  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${q||category || "india"}&apiKey=${process.env.NEWS_API_KEY}`
  );

  const data = await response.json();
  res.status(200).json(data);
}