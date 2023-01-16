"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
// import sharp from 'sharp';
const resizeImage_1 = __importDefault(require("./utilities/resizeImage"));
const fs_1 = __importDefault(require("fs"));
const PORT = 3000;
const app = (0, express_1.default)();
app.get("/ok", (req, res) => {
  res.send("ok").status(200);
});
app.get("/images", (req, res) => {
  var filename = "404.png";
  var height = 200;
  var width = 200;
  if (req.query.filename) filename = req.query.filename;
  if (req.query.height) height = req.query.height;
  if (req.query.width) width = req.query.width;
  var oldImagePath = "./assets/images/full/" + filename;
  var newImagePath = "./assets/images/thumb/thumb_" + filename;
  try {
    fs_1.default.exists(oldImagePath, function (doesExist) {
      if (!doesExist) {
        let newImagePathTemp = path_1.default.join(
          __dirname,
          `../assets/images/thumb/404.jpg`
        );
        res.sendFile(newImagePathTemp);
      } else {
        try {
          if (
            (0, resizeImage_1.default)(
              oldImagePath,
              newImagePath,
              width,
              height
            )
          ) {
            let newImagePathTemp = path_1.default.join(
              __dirname,
              `../${newImagePath}`
            );
            res.sendFile(newImagePathTemp);
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  } catch (err) {
    console.error(err);
  }
});
app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
