import resizeImage from "../utilities/resizeImage";

const oldImagePath = "./assets/images/full/fjord.jpg";
const newImagePath = "./assets/images/thumb/thumb_fjord.jpg";

describe("image resize test", () => {
  it("image resize test", async () => {
    const response = await resizeImage(oldImagePath, newImagePath);
    expect(response).toEqual(true);
  });
});
