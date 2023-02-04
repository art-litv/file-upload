import type { FileWithPath } from "@mantine/dropzone";
import React, { useState } from "react";
import { Container } from "@mantine/core";

import { supabase } from "@shared/lib/supabase/client";

import Uploading from "./uploading";
import Uploaded from "./uploaded";
import Upload from "./upload";

const ImageUpload: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [imagePath, setImagePath] = useState("");

  const uploadImage = async (imageFile: File | FileWithPath) => {
    setLoading(true);

    const path =
      ((imageFile as FileWithPath).path || imageFile.name) +
      new Date().toISOString();

    try {
      const { data } = await supabase.storage
        .from("images")
        .upload(path, imageFile);

      setLoading(false);
      setImagePath(data?.path as string);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      size="xs"
      sx={{ display: "flex", alignItems: "center", height: "100vh" }}
    >
      {!loading && !imagePath && (
        <Upload onUpload={uploadImage as (imageFile: FileWithPath) => void} />
      )}
      {loading && <Uploading />}
      {imagePath && <Uploaded imagePath={imagePath} />}
    </Container>
  );
};

export default ImageUpload;
