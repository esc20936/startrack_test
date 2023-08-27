"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "../Store/Store";
import { Provider } from "react-redux";
import Home from "@/UI/Home";

const queryClient = new QueryClient();

export default function App() {
  return (
    <div className="flex flex-col w-full h-full bg-darkPurple overflow-y-scroll">
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </Provider>
    </div>
  );
}
