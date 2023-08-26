"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "@/UI/Home";
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}
