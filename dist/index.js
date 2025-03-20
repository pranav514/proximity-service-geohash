"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const businessRoute_1 = __importDefault(require("./routes/businessRoute"));
const proximityRoute_1 = __importDefault(require("./routes/proximityRoute"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/v1', businessRoute_1.default);
app.use('/api/v1', proximityRoute_1.default);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
// tes3wf2r6
// tes3wf2pw
// tes3wf2pw5j4
//  tes3wf2r6wuc
// tek9080egjsf     
