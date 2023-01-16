import express from "express";
import path from "path";

// import sharp from 'sharp';
import resizeImage from "./utilities/resizeImage";
import fs from "fs";

const PORT = 3000;
const app = express();

app.get("/ok", (req, res) => {
  res.send("ok").status(200);
});

app.get("/images", async (req, res) => {
  var filename: string = "404.png";
  var height: number = 200;
  var width: number = 200;

  if (req.query.filename) filename = req.query.filename as string;

  if (req.query.height) height = req.query.height as unknown as number;

  if (req.query.width) width = req.query.width as unknown as number;

  var oldImagePath = "./assets/images/full/" + filename;
  var newImagePath = "./assets/images/thumb/thumb_" + filename;

  try {
    fs.exists(oldImagePath, async function (doesExist) {
      if (!doesExist) {
        let newImagePathTemp = path.join(
          __dirname,
          `../assets/images/thumb/404.jpg`
        );

        res.sendFile(newImagePathTemp);
      } else {
        try {
          var status = await resizeImage(oldImagePath, newImagePath, width, height)
          if (status) {
            let newImagePathTemp = path.join(__dirname, `../${newImagePath}`);

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
