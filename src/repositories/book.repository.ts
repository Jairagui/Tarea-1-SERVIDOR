import type { Book } from "../types/book.js";

let books: Book[] = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2008,
  },
  {
    id: 2,
    title: "Design Patterns",
    author: "Erich Gamma",
    year: 1994,
  },
];

// Repository es solamente para trabajar con los datos (queries, etc)

// GET all books query, con filtro opcional por autor
export function findAll(author?: string): Book[] {
  if (!author) return books;
  return books.filter((book) =>
      book.author.toLowerCase().includes(author.toLowerCase()),
  );
}

// buscar libro
export const findById = (id: number) => books.find((book) => book.id === id);

//  nuevo libor
export const create = (book: Book) => {
  books.push(book);
  return book;
};

// updateal libro
export const update = (id: number, data: Partial<Book>) => {
  const book = books.find((book) => book.id === id);
  if (!book) return undefined;
  // solo cambio lo que si vino en el body
  if (data.title !== undefined) book.title = data.title;
  if (data.author !== undefined) book.author = data.author;
  if (data.year !== undefined) book.year = data.year;
  return book;
};

// borrar libro
export const remove = (id: number) => {
  const exists = books.some((book) => book.id === id);
  if (!exists) return false;
  books = books.filter((book) => book.id !== id);
  return true;
};