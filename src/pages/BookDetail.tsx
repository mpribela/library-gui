import { useQuery } from "@tanstack/react-query";
import type { BookDto } from "../lib/types";
import { api } from "../lib/api";
import { useParams } from "@tanstack/react-router";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

function getBookDetail(book: BookDto) {
  return (
    <Box sx={{ maxWidth: 700 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              Book detail
            </Typography>
            <Typography variant="h5" component="div">
              {book.title}
            </Typography>
            <Typography variant="body2">{book.author}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" disabled={book.availableCopies > 0}>
              Borrow
            </Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}

function getEmptyDetail() {
  return (
    <Box sx={{ maxWidth: 700 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              Book detail
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
              Could not find the book with ISBN
            </Typography>
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}

function getLoadingDetail() {
  return (
    <Box sx={{ maxWidth: 700 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              Book detail
            </Typography>
            <CircularProgress />
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}

export default function BookDetail() {
  const { isbn } = useParams({ from: "/$isbn" });
  const { data, isSuccess, isLoading } = useQuery<BookDto>({
    queryKey: [isbn],
    queryFn: async () => {
      const response = await fetch(api.getBook(isbn));
      return response.json();
    },
  });

  return isLoading
    ? getLoadingDetail()
    : isSuccess
      ? getBookDetail(data)
      : getEmptyDetail();
}
