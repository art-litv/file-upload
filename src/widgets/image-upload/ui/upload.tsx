import type { FileWithPath } from "@mantine/dropzone";
import React from "react";
import { Text, Button, FileButton } from "@mantine/core";

import { ImageDropzone } from "@shared/ui/ImageDropzone";
import { Card } from "@shared/ui/Card";

type UploadImageProps = {
  onUpload: (imageFile: FileWithPath) => void;
};

const Upload: React.FC<UploadImageProps> = ({ onUpload }) => {
  return (
    <Card w="100%">
      <Text weight={500} size="lg">
        Upload your image
      </Text>
      <Text size="sm" color="dimmed">
        File should be Jpeg, Png, ...
      </Text>
      <ImageDropzone
        multiple={false}
        onDrop={([imageFile]) => onUpload(imageFile as FileWithPath)}
      />
      <Text size="sm" color="dimmed">
        Or
      </Text>
      <FileButton
        onChange={onUpload}
        multiple={false}
        accept="image/png,image/jpeg"
      >
        {(props) => (
          <Button color="blue" fullWidth radius="md" w="fit-content" {...props}>
            Choose a file
          </Button>
        )}
      </FileButton>
    </Card>
  );
};

export default Upload;
