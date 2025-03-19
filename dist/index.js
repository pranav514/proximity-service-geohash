"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const ngeohash_1 = __importDefault(require("ngeohash"));
app.post('/submit', (req, res) => {
    const { lat, long } = req.body;
    const hash = ngeohash_1.default.encode(lat, long, 12);
    res.send(hash);
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
// tes3wf2r6
// tes3wf2pw
// tes3wf2pw5j4
//  tes3wf2r6wuc
