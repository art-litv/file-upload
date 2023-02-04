import { Group, Text } from "@mantine/core";
import { IconUpload, IconX, IconPhoto } from "@tabler/icons-react";
import {
  type DropzoneProps,
  Dropzone,
  IMAGE_MIME_TYPE,
} from "@mantine/dropzone";

import { MAX_SIZE } from "../constants/image-dropzone";

type ImageDropzoneProps = Omit<DropzoneProps, "children">;

const ImageDropzone: React.FC<ImageDropzoneProps> = (props) => (
  <Dropzone
    maxSize={MAX_SIZE}
    accept={IMAGE_MIME_TYPE}
    activateOnClick={false}
    {...props}
  >
    <Group
      position="center"
      spacing="xl"
      noWrap
      style={{
        minHeight: 180,
        pointerEvents: "none",
        gap: 12,
        padding: "0 24px",
      }}
    >
      <Dropzone.Accept>
        <IconUpload size={50} stroke={1.5} />
      </Dropzone.Accept>
      <Dropzone.Reject>
        <IconX size={50} stroke={1.5} />
      </Dropzone.Reject>
      <Dropzone.Idle>
        <IconPhoto size={50} stroke={1.5} />
      </Dropzone.Idle>
      <div>
        <Text size="xl" inline>
          Drag images here
        </Text>
        <Text size="sm" color="dimmed" inline mt={7}>
          Attach any valid image file, maximum size is 5mb
        </Text>
      </div>
    </Group>
  </Dropzone>
);

export default ImageDropzone;
