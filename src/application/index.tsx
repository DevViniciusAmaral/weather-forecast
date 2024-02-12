import React from "react";
import MainNavigator from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <MainNavigator />
  </QueryClientProvider>
);
