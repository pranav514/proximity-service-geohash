import express from "express";
import { ParsedQs } from "qs";
import { prisma } from "../config";
import ngeohash from "ngeohash";
const router = express.Router();
function Float(latitude: string | ParsedQs | (string | ParsedQs)[]): string | number {
    throw new Error("Function not implemented.");
}
router.get('/search' , async(req , res) : Promise<any> => {
    const {latitude , longitude , radius} = req.body;
    if(!latitude || !longitude || !radius){
        return res.status(400).send("Please provide all the required fields");
    }
    const hash = ngeohash.encode(parseFloat(latitude) , parseFloat(longitude) , 12);
    let subhash;
    if(radius > 20){
        return res.status(400).send("Radius cannot be greater than 20");
    }
    switch (radius) {
        case "0.5":
             subhash = hash.substring(0 , 6);
            break;
        case "1":
             subhash = hash.substring(0 , 5);
            break;
        case "2":
             subhash = hash.substring(0 , 5);
            break;
        case "5":
             subhash = hash.substring(0 , 4);
            break;
        case "20":
                subhash = hash.substring(0 , 4);
                break;
        
    
        default:
            break;
    }
    const geohash = await prisma.geohashIndex.findMany({
        where : {
            geohash : {
                startsWith : subhash
            }
        }
    })
    const businessIds = geohash.map((hash) => hash.businessId);
    const businesses = await prisma.business.findMany({
        where : {
            id : {
                in : businessIds
            }
        }
    })
    return res.status(200).json({
        businesses})
})

export default router;


