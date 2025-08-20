import type { Book } from "../lib/types";

export interface BookProps {
  book: Book;
}

export default function BookRecord({ book }: BookProps) {
  return (
    <section>
      <p>
        {book.title} <small>by {book.author}</small>
      </p>
    </section>
  );
}
