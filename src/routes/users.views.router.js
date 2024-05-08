import { Router } from "express";
import { getAllUsers } from "../controllers/sessions.controller.js";

const router = Router();

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/premium/:uid", (req, res) => {
  res.render("isItPremium")
})

router.get("/:uid", (req, res) => {
  res.render("isItPremium")
})

router.get("/", getAllUsers)

router.delete("/inactive", )

router.delete("/:uid", )

export default router;
