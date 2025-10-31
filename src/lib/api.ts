const BASE_URL = "http://localhost:8080";

export const api = {
  getBook: (ISBN: string) => `${BASE_URL}/public/v1/books/${ISBN}`,
  getAllBook: () => `${BASE_URL}/public/v1/books`,
  searchBooks: (
    title: string | undefined = undefined,
    ISBN: string | undefined = undefined,
    author: string | undefined = undefined
  ) => {
    var paramQuery = "";
    paramQuery = title ? paramQuery + `title=${title}&` : paramQuery;
    paramQuery = author ? paramQuery + `author=${author}&` : paramQuery;
    paramQuery = ISBN ? paramQuery + `ISBN=${ISBN}` : paramQuery;
    if (paramQuery.endsWith("&")) {
      paramQuery = paramQuery.substring(0, paramQuery.length - 2);
    }
    return `${BASE_URL}/public/v1/books/search?`;
  },
};
