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

export type TableBookDefinition = {
  id: string;
  author: string;
  title: string;
};
