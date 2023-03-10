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
const path_1 = __importDefault(require("path"));
// import sharp from 'sharp';
const resizeImage_1 = __importDefault(require("./utilities/resizeImage"));
const fs_1 = __importDefault(require("fs"));
const PORT = 3000;
const app = (0, express_1.default)();
const statusValidationError = 422;
app.get("/ok", (req, res) => {
    res.send("ok").status(200);
});
app.get("/images", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var filename = "";
    var height = 0;
    var width = 0;
    if (req.query.filename) {
        filename = req.query.filename;
    }
    else {
        res.send("Invalid file name").status(statusValidationError);
    }
    if (req.query.height &&
        Number.isInteger(Number(req.query.height)) &&
        Number(req.query.height) > 0) {
        height = req.query.height;
    }
    else {
        res.send("Invalid height").status(statusValidationError);
    }
    if (req.query.width &&
        Number.isInteger(Number(req.query.width)) &&
        Number(req.query.width) > 0) {
        width = req.query.width;
    }
    else {
        res.send("Invalid width").status(statusValidationError);
    }
    var oldImagePath = "./assets/images/full/" + filename;
    var newImagePath = "./assets/images/thumb/thumb_" + filename;
    try {
        fs_1.default.exists(oldImagePath, function (doesExist) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!doesExist) {
                    res.send("image not found");
                }
                else {
                    try {
                        var status = yield (0, resizeImage_1.default)(oldImagePath, newImagePath, width, height);
                        if (status) {
                            let newImagePathTemp = path_1.default.join(__dirname, `../${newImagePath}`);
                            res.status(200).sendFile(newImagePathTemp);
                        }
                    }
                    catch (error) {
                        console.log(error);
                    }
                }
            });
        });
    }
    catch (err) {
        console.error(err);
    }
}));
app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
});
exports.default = app;
