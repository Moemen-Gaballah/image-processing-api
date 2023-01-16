"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const resizeImage_1 = __importDefault(require("../utilities/resizeImage"));
const oldImagePath = "./assets/images/full/fjord.jpg";
const newImagePath = "./assets/images/thumb/thumb_fjord.jpg";
// describe("image resize test", () => {
//   it("done resize success", async (done) => {
//     const response = await resizeImage(oldImagePath, newImagePath);
//     expect(response).toEqual(newImagePath);
//     done();
//   });
// });
it("image resize test", () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, resizeImage_1.default)(
      oldImagePath,
      newImagePath
    );
    expect(response).toEqual(newImagePath);
  }));
