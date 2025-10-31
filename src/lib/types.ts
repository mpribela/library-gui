export type BookDto = {
  title: string;
  author: string;
  ISBN: string;
  availableCopies: number;
  isBorrowedByUser: boolean;
};

export type BookListDto = {
  books: BookDto[];
};
