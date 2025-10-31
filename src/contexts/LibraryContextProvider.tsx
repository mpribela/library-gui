// import { createContext, useEffect, useState } from "react";
// import type { Book, BookListDto } from "../lib/types";

// type LibraryContextProviderProps = {
//   children: React.ReactNode;
// };

// type TLibraryContext = {
//   books: Book[];
//   selectedBook?: number;
// };

// export const LibraryContext = createContext<TLibraryContext | null>(null);

// export default function LibraryContextProvider({
//   children,
// }: LibraryContextProviderProps) {
//   const [books, setBooks] = useState<Book[]>([]);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       const response = await fetch("http://localhost:8080/public/v1/books");
//       const bookListDto: BookListDto = await response.json();
//       setBooks(bookListDto.books);
//     };
//     fetchBooks();
//   }, []);

//   return (
//     <LibraryContext.Provider
//       value={{
//         books,
//       }}
//     >
//       {children}
//     </LibraryContext.Provider>
//   );
// }
