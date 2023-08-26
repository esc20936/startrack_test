"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "@/UI/Home";
const queryClient = new QueryClient();

export default function App() {
  return (
    <div className="flex flex-col w-full h-full bg-darkPurple overflow-y-scroll">
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
    </div>
  );
}
