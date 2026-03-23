import React, { useState } from "react";

function ImageUpload() {

  const [imageUrl, setImageUrl] = useState("");

  const uploadImage = async (file) => {

    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch(
      "http://localhost:5000/api/upload/image-upload",
      {
        method: "POST",
        body: formData
      }
    );

    const data = await res.json();

    setImageUrl(data.image);

  };

  const handleFileChange = (e) => {

    const file = e.target.files[0];
    uploadImage(file);

  };

  return (
    <div>

      <input type="file" onChange={handleFileChange} />

      {imageUrl && (
        <img src={imageUrl} width="200" />
      )}

    </div>
  );
}

export default ImageUpload;