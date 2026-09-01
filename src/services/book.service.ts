import {
  findAll,
  findById,
  create,
  update,
  remove,
} from "../repositories/book.repository.js";
import type { Book } from "../types/book.js";
import { ValidationError } from "../errors/ValidationError.js";

// hice que revisra si vien con las csaos necesrasi 
const validateData = (data: Partial<Book>) => {
  if (data.title !== undefined && data.title.trim() === "") {
    throw new ValidationError("title cannot be empty");
  }
  if (data.author !== undefined && data.author.trim() === "") {
    throw new ValidationError("author cannot be empty");
  }
  if (data.year !== undefined && isNaN(Number(data.year))) {
    throw new ValidationError("year must be a valid number");
  }
};

export function getBooks(author?: string) {
  return findAll(author);
}

export const getBook = (id: number) => {
  return findById(id);
};

export const createBook = (book: Book) => {
  validateData(book);
  const newBook = {
    ...book,
    id: Date.now(),
  };
  return create(newBook);
};

export const updateBook = (id: number, data: Partial<Book>) => {
  validateData(data);
  return update(id, data);
};

export const deleteBook = (id: number) => {
  return remove(id);
};