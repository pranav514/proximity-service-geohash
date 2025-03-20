"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("../config");
const ngeohash_1 = __importDefault(require("ngeohash"));
const router = express_1.default.Router();
function Float(latitude) {
    throw new Error("Function not implemented.");
}
router.get('/search', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { latitude, longitude, radius } = req.body;
    if (!latitude || !longitude || !radius) {
        return res.status(400).send("Please provide all the required fields");
    }
    const hash = ngeohash_1.default.encode(parseFloat(latitude), parseFloat(longitude), 12);
    let subhash;
    switch (radius) {
        case "0.5":
            subhash = hash.substring(0, 6);
            break;
        case "1":
            subhash = hash.substring(0, 5);
            break;
        case "2":
            subhash = hash.substring(0, 5);
            break;
        case "5":
            subhash = hash.substring(0, 4);
            break;
        case "20":
            subhash = hash.substring(0, 4);
            break;
        default:
            break;
    }
    const geohash = yield config_1.prisma.geohashIndex.findMany({
        where: {
            geohash: {
                startsWith: subhash
            }
        }
    });
    const businessIds = geohash.map((hash) => hash.businessId);
    const businesses = yield config_1.prisma.business.findMany({
        where: {
            id: {
                in: businessIds
            }
        }
    });
    return res.status(200).json({
        businesses
    });
}));
exports.default = router;
