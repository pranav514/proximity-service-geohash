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
const businessRoute_1 = __importDefault(require("./routes/businessRoute"));
const proximityRoute_1 = __importDefault(require("./routes/proximityRoute"));
const redis_1 = require("redis");
const app = (0, express_1.default)();
const client = (0, redis_1.createClient)();
app.use(express_1.default.json());
app.use('/api/v1', businessRoute_1.default);
app.use('/api/v1', proximityRoute_1.default);
app.listen(3000, () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    console.log("Server is running on port 3000");
}));
// tes3wf2r6
// tes3wf2pw
// tes3wf2pw5j4
//  tes3wf2r6wuc
// tek9080egjsf     
