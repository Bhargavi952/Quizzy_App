
const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model.js");

const newToken = (user) => {
  return jwt.sign({ user }, "arun");
};

const register = async (req, res) => {
  let user = await User.findOne({ email: req.body.email }).exec();
  if (user)
    return res
      .status(400)
      .send({ status: "failed", message: "user already exists" });

  user = await User.create(req.body);
  const token = newToken(user);
  res.status(201).json({ user, token });
};

const login = async (req, res) => {
  let user = await User.findOne({ email: req.body.email }).exec();

  if (!user)
    return res
      .status(400)
      .send({ status: "failed", message: "Incorrect email or password" });

  const match = await user.checkPassword(req.body.password);

  if (!match)
    return res
      .status(400)
      .send({ status: "failed", message: "Incorrect email or password" });

  const token = newToken(user);

  res.status(201).json({ user, token });
};

module.exports = { login, register };