import { MantineProvider } from "@mantine/core";
import React from "react";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      colorScheme: "light",
      fontFamily: "Roboto, sans-serif",
    }}
  >
    {children}
  </MantineProvider>
);

export default AppProvider;
