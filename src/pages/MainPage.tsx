import Header from "../components/Header";
import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";
import type { BookListDto } from "../lib/types";
import { Link } from "@tanstack/react-router";
import BookRecord from "../components/BookRecord";

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
              <Link key={book.ISBN} to="/$isbn" params={{ isbn: book.ISBN }}>
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
