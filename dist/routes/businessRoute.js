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
const router = express_1.default.Router();
const ngeohash = require("ngeohash");
const config_1 = require("../config");
router.post("/business", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, latitiude, longitude } = req.body;
    if (!name || !latitiude || !longitude) {
        return res.status(400).send("Please provide all the required fields");
    }
    const hash = ngeohash.encode(parseFloat(latitiude), parseFloat(longitude), 12);
    const business = yield config_1.prisma.business.create({
        data: {
            name,
            latitude: parseFloat(latitiude),
            longitude: parseFloat(longitude),
        }
    });
    const geohash = yield config_1.prisma.geohashIndex.create({
        data: {
            geohash: hash,
            businessId: business.id
        }
    });
    return res.status(201).json({
        business,
        geohash
    });
}));
exports.default = router;
