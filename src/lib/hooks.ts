import { useContext } from "react";
import { LibraryContext } from "../contexts/LibraryContextProvider";

export function useLibraryContext() {
  const context = useContext(LibraryContext);
  if (!context) {
    throw new Error("Forgot to add provider.");
  }
  return context;
}
