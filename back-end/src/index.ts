import "tsconfig-paths/register";
import express from "express";
import f1routes from "@routes/ergastRoutes";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use("/api", f1routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
