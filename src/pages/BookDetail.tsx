import { Link, useParams } from "react-router-dom";
import { useLibraryContext } from "../lib/hooks";

export default function BookDetail() {
  const { ISBN } = useParams();
  const { books } = useLibraryContext();
  const bookDetail = books.filter((book) => book.ISBN === ISBN)[0];

  return bookDetail ? (
    <section>
      <h1>{bookDetail.title}</h1>
      <h2>Author: {bookDetail.author}</h2>
      <h2>Available copies: {bookDetail.availableCopies}</h2>
      {bookDetail.availableCopies > 0 ? (
        <p>
          <button className="border-1 p-1 m-1">Borrow</button>
        </p>
      ) : null}
      <Link to="/" className="border-1 p-1 m-1">
        Back to list
      </Link>
    </section>
  ) : (
    <p>Could not find the book with ISBN {ISBN}</p>
  );
}
