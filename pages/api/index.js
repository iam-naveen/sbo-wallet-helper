export default function handler(req, res) {
  res.status(200).json({ message: "You forgot to mention the SBO-ID in the Request-URL" });
}
