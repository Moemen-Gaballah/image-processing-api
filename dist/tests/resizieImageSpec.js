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
const resizeImage_1 = __importDefault(require("../utilities/resizeImage"));
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("./../server"));
// import app from "../server";
// Link to your server file
// const request = supertest(app);
const oldImagePath = "./assets/images/full/fjord.jpg";
const newImagePath = "./assets/images/thumb/thumb_fjord.jpg";
describe("image resize test", () => {
    it("image resize test", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, resizeImage_1.default)(oldImagePath, newImagePath);
        expect(response).toEqual(true);
    }));
});
describe("image resize API", () => {
    it("Test End point API", () => __awaiter(void 0, void 0, void 0, function* () {
        // Sends GET Request to /test endpoint
        const res = yield (0, supertest_1.default)(server_1.default).get("/images?filename=palmtunnel.jpg&height=200&width=200");
        expect(res.status).toEqual(200);
    }));
});
