import express from "express";
import path from "path";

// import sharp from 'sharp';
import resizeImage from "./utilities/resizeImage";
import fs from "fs";

const PORT = 3000;
const app = express();
const statusValidationError = 422;

app.get("/ok", (req: express.Request, res: express.Response) => {
  res.send("ok").status(200);
});

app.get("/images", async (req: express.Request, res: express.Response) => {
  var filename: string = "";
  var height: number = 0;
  var width: number = 0;

  if (req.query.filename) {
    filename = req.query.filename as string;
  } else {
    res.send("Invalid file name").status(statusValidationError);
  }

  if (
    req.query.height &&
    Number.isInteger(Number(req.query.height)) &&
    Number(req.query.height) > 0
  ) {
    height = req.query.height as unknown as number;
  } else {
    res.send("Invalid height").status(statusValidationError);
  }

  if (
    req.query.width &&
    Number.isInteger(Number(req.query.width)) &&
    Number(req.query.width) > 0
  ) {
    width = req.query.width as unknown as number;
  } else {
    res.send("Invalid width").status(statusValidationError);
  }

  var oldImagePath = "./assets/images/full/" + filename;
  var newImagePath = "./assets/images/thumb/thumb_" + filename;

  try {
    fs.exists(oldImagePath, async function (doesExist) {
      if (!doesExist) {
        res.send("image not found");
      } else {
        try {
          var status = await resizeImage(
            oldImagePath,
            newImagePath,
            width,
            height
          );
          if (status) {
            let newImagePathTemp = path.join(__dirname, `../${newImagePath}`);

            res.status(200).sendFile(newImagePathTemp);
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

export default app;
