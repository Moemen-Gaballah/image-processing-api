import sharp from "sharp";

export default async function resizeImage(
  oldImage: string,
  newImage: string,
  width: number = 200,
  height: number = 200
): Promise<string | boolean> {
  try {
    await sharp(oldImage)
      .resize({
        width: +width,
        height: +height,
      })
      .toFile(newImage);

    return true;
  } catch (err: unknown) {
    throw new Error("Error Message" + err);
  }
}

// export default resizeImage;
