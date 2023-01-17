import resizeImage from "../utilities/resizeImage";
import request from "supertest";
import app from "./../server";

// import app from "../server";
// Link to your server file
// const request = supertest(app);

const oldImagePath = "./assets/images/full/fjord.jpg";
const newImagePath = "./assets/images/thumb/thumb_fjord.jpg";

describe("image resize test", () => {
  it("image resize test", async () => {
    const response = await resizeImage(oldImagePath, newImagePath);
    expect(response).toEqual(true);
  });
});

describe("image resize API", () => {
  it("Test End point API", async () => {
    // Sends GET Request to /test endpoint
    const res = await request(app).get(
      "/images?filename=palmtunnel.jpg&height=200&width=200"
    );
    expect(res.status).toEqual(200);
  });
});
