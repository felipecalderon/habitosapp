import { app } from "./src/app";
import { env } from "./src/config/dotenv";

app.listen(env.PORT, () => {
    console.log("running in port " + env.PORT);
});
