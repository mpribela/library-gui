import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import type { BookDto } from "../lib/types";
import { api } from "../lib/api";

export default function BookDetail() {
  const { ISBN } = useParams();
  const { data, isSuccess } = useQuery<BookDto>({
    queryKey: [ISBN],
    queryFn: async () => {
      const response = await fetch(api.getBook(ISBN!));
      return response.json();
    },
  });

  return isSuccess ? (
    <section>
      <h1>{data.title}</h1>
      <h2>Author: {data.author}</h2>
      <h2>Available copies: {data.availableCopies}</h2>
      {data.availableCopies > 0 ? (
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
