import cloudinary from "../../config/cloudinary.js";

export const uploadImageService = async (filePath) => {

  const result = await cloudinary.uploader.upload(filePath, {
    folder: "products"
  });

  return result.secure_url;

};