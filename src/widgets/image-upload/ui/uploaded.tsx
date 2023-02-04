import React from "react";
import { IconCircleCheck } from "@tabler/icons-react";
import { Text, Image, CopyButton, Button } from "@mantine/core";

import { Card } from "@shared/ui/Card";

type UploadedProps = {
  imagePath: string;
};

const Uploaded: React.FC<UploadedProps> = ({ imagePath }) => {
  const imageSrc = `${
    process.env.SUPABASE_URL as string
  }/storage/v1/object/public/images/${imagePath}`;

  return (
    <Card w="100%">
      <IconCircleCheck size={50} color="green" />
      <Text size="lg">Uploaded successfully!</Text>
      <CopyButton value={imageSrc}>
        {({ copied, copy }) => (
          <Button color={copied ? "teal" : "blue"} onClick={copy}>
            {copied ? "Copied" : "Copy link"}
          </Button>
        )}
      </CopyButton>
      <Image
        radius="md"
        height={300}
        width="auto"
        src={imageSrc}
        alt="Your image"
      />
    </Card>
  );
};

export default Uploaded;
