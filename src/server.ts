import app from "./app";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);4
	console.log(`Swagger documentation available at http://localhost:${PORT}/api-docs`);
});
