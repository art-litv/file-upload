import { Loader, Text } from "@mantine/core";
import React from "react";

import { Card } from "@shared/ui/Card";

const Uploading: React.FC = () => (
  <Card w="100%">
    <Text weight={500} size="lg">
      Uploading your image
    </Text>
    <Loader variant="bars" />
  </Card>
);

export default Uploading;
