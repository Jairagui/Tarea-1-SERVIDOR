import { Router } from "express";
import {
  getAllBooks,
  getOne,
  create,
  update,
  remove,
} from "../controllers/book.controller.js";
import { validateBook } from "../middleware/validateBook.middleware.js";

const router = Router();

router.get("/", getAllBooks);
router.get("/:id", getOne);
router.post("/", validateBook, create);
router.patch("/:id", update);
router.delete("/:id", remove);

export default router;