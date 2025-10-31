import type { BookDto } from "../lib/types";

export interface BookProps {
  book: BookDto;
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
