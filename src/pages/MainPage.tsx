import Header from "../components/Header";
import BookRecord from "../components/BookRecord";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";
import type { BookListDto } from "../lib/types";

export default function MainPage() {
  const { data, isSuccess, isError } = useQuery<BookListDto>({
    queryKey: ["books"],
    queryFn: async () => {
      const response = await fetch(api.getAllBook());
      return response.json();
    },
  });
  return (
    <div>
      <main>
        <Header />
        <ul>
          {isSuccess &&
            data.books.map((book) => (
              <Link to={`/${book.ISBN}`} id={book.ISBN}>
                <li>
                  <BookRecord book={book} />
                </li>
              </Link>
            ))}
          {isError && <li>No book available</li>}
        </ul>
      </main>
      <footer></footer>
    </div>
  );
}
