import { app } from "./src/app";
import {env} from "./src/config/dotenv"
app.listen(env.PORT || 3001,()=>{
    console.log("running in port "+env.PORT);
    
})