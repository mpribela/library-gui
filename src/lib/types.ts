export type Book = {
  title: string;
  author: string;
  ISBN: string;
  availableCopies: number;
  isBorrowedByUser: boolean;
};

export type BookListDto = {
  books: Book[];
};
