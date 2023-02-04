import { type NextPage } from "next";

import { ImageUpload } from "@widgets/image-upload";

const Home: NextPage = () => {
  //const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <ImageUpload />
    </>
  );
};

export default Home;
