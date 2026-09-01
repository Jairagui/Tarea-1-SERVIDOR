import type { Request, Response } from "express";
import {
  getBooks,
  createBook,
  deleteBook,
  getBook,
  updateBook,
} from "../services/book.service.js";

export function getAllBooks(req: Request, res: Response) {
  const author = req.query.author as string | undefined;
  res.json(getBooks(author));
}

export const getOne = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const book = getBook(id);
  if (!book) {
    return res.status(404).json({
      message: "Book not found",
    });
  }
  res.json(book);
};

export const create = (req: Request, res: Response) => {
  const book = createBook(req.body);
  res.status(201).json(book);
};

export const update = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const book = updateBook(id, req.body);
  if (!book) {
    return res.status(404).json({
      message: "Book not found",
    });
  }
  res.json(book);
};

export const remove = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const deleted = deleteBook(id);
  if (!deleted) {
    return res.status(404).json({
      message: "Book not found",
    });
  }
  res.status(204).send();
};