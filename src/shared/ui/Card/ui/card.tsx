import {
  type CardProps as MantineCardProps,
  Card as MantineCard,
} from "@mantine/core";

type CardProps = MantineCardProps;

const Card: React.FC<CardProps> = (props) => (
  <MantineCard
    shadow="sm"
    p="lg"
    radius="md"
    withBorder
    sx={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      gap: 18,
    }}
    {...props}
  />
);

export default Card;
