import Header from "../components/Header";
import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";
import type { BookListDto } from "../lib/types";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

type TableBookDefinition = {
  id: string;
  author: string;
  title: string;
};

const columns: GridColDef[] = [
  { field: "id", headerName: "ISBN", width: 200 },
  { field: "author", headerName: "Author", width: 200 },
  {
    field: "title",
    headerName: "Title",
    width: 1000,
    renderCell: (param) => (
      <Link key={param.id} to="/$isbn" params={{ isbn: param.id.toString() }}>
        {param.value}
      </Link>
    ),
  },
];

export default function MainPage() {
  const [rows, setRows] = useState<TableBookDefinition[]>([]);
  const { data, isSuccess } = useQuery<BookListDto>({
    queryKey: ["books"],
    queryFn: async () => {
      const response = await fetch(api.getAllBook());
      return response.json();
    },
  });

  useEffect(() => {
    if (isSuccess) {
      setRows(
        data.books.map((book) => {
          var bookDefinition: TableBookDefinition = {
            id: book.ISBN,
            author: book.author,
            title: book.title,
          };
          return bookDefinition;
        })
      );
    }
  }, [isSuccess]);

  return (
    <div>
      <main>
        <Header />
        <Paper sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSizeOptions={[5, 10]}
            sx={{ border: 0 }}
          />
        </Paper>
      </main>
      <footer></footer>
    </div>
  );
}
