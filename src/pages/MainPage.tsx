import Header from "../components/Header";
import { useLibraryContext } from "../lib/hooks";
import BookRecord from "../components/BookRecord";
import { Link } from "react-router-dom";

export default function MainPage() {
  const { books } = useLibraryContext();
  return (
    <div>
      <main>
        <Header />
        <ul>
          {books.length == 0 && <li>No book available</li>}
          {books.map((book) => (
            <Link to={`/${book.ISBN}`} id={book.ISBN}>
              <li>
                <BookRecord book={book} />
              </li>
            </Link>
          ))}
        </ul>
      </main>
      <footer></footer>
    </div>
  );
}
