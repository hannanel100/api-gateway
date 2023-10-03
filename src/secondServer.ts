import express from "express";

const app = express();

app.get("/products", (req, res) => {
  res.send("products in proxy server");
});
app.get("/products/:productId", (req, res) => {
  console.log(req.headers);
  res.send(`product ${req.params.productId} in proxy server`);
});

app.listen(8080, () => console.log("Server running"));
