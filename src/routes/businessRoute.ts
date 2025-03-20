import express from "express"
const router = express.Router();
import ngeohash = require("ngeohash");
import { prisma } from "../config";
router.post("/business" , async (req , res) : Promise<any> => {
    const {name  , latitiude , longitude} = req.body;
    if(!name  || !latitiude || !longitude){
        return res.status(400).send("Please provide all the required fields");
    }
    const hash = ngeohash.encode(parseFloat(latitiude) , parseFloat(longitude) , 12);
    const business = await prisma.business.create({
        data : {
            name,
            latitude : parseFloat(latitiude),
            longitude : parseFloat(longitude),
        }
    })
    const geohash = await prisma.geohashIndex.create({
        data : {
            geohash : hash,
            businessId : business.id
        }
    })
    return res.status(201).json({
        business,
        geohash
    })

})
export default router;