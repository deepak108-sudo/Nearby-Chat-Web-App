import passport from "passport";
import express from "express";

const router = express.Router();

//Take the user to get permission from google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

//Google confirm and send user's profile and email
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/auth/failed",
  })
);

//In case of user failed to login
router.get("/failed", (req, res) => {
  res.status(401).send("Login failed");
});

router.get("/me", (req, res) => {
  if (req.user) {
    res.status(200).json(req.user);
  } else {
    res.status(401).json("Not Authenticated");
  }
});

//Logout and redirect to home using process.env
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).send("Logout error");
    res.redirect(process.env, CLIENT_URL);
  });
});

export default router;
