"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
function resizeImage(oldImage, newImage, width = 200, height = 200) {
  try {
    (0, sharp_1.default)(oldImage)
      .resize({
        width: +width,
        height: +height,
      })
      .toFile(newImage);
    return true;
  } catch (err) {
    throw new Error("Error Message");
  }
}
exports.default = resizeImage;
// export default resizeImage;
