import { uploadImageService } from "./uploadService.js";

export const uploadImage = async (req, res) => {

  try {

    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const imageUrl = await uploadImageService(file.path);

    res.status(200).json({
      image: imageUrl
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};