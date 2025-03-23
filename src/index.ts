import  express  from "express";
import businessRoute from "./routes/businessRoute";
import proximityRoute from "./routes/proximityRoute";
import redis, { createClient } from "redis";
const app  = express();
export const client = createClient();
app.use(express.json());

app.use('/api/v1' , businessRoute);
app.use('/api/v1' , proximityRoute);

app.listen(3000, async() => {
    await client.connect()
    console.log("Server is running on port 3000");
}) 

// tes3wf2r6
// tes3wf2pw
// tes3wf2pw5j4
//  tes3wf2r6wuc
// tek9080egjsf     