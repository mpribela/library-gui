import Header from "../components/Header";
import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";
import type { BookListDto, TableBookDefinition } from "../lib/types";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";

const columns: GridColDef[] = [
  { field: "id", headerName: "ISBN", width: 200 },
  { field: "author", headerName: "Author", width: 200 },
  {
    field: "title",
    headerName: "Title",
    width: 1000,
  },
];

export default function MainPage() {
  const navigate = useNavigate();
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
            onRowClick={(param) => {
              navigate({
                to: "/$isbn",
                params: { isbn: param.id.toString() },
              });
            }}
          />
        </Paper>
      </main>
      <footer></footer>
    </div>
  );
}
