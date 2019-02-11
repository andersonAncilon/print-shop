const express = require("express");
require("dotenv-safe").load();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const UserServices = require("../services/UserServices");

module.exports = {
  async store(req, res) {
    try {
      if (await User.findOne({ userName: req.body.userName })) {
        res.status("500").send("Usuário já cadastrado!");
      }

      const userName = req.body.userName;
      const password = bcrypt.hashSync(req.body.password, 10);

      const user = await User.create({ userName, password });
      return res.json(user);
    } catch {
      res.status("500").send("Algo deu errado!");
    }
  },

  async auth(req, res, next) {
    //console.log(await UserServices.authenticate(req.body.userName, req.body.password));
    try {
      const user = await User.findOne({
        userName: req.body.userName
      });

      const { _id } = user;
       
      if (UserServices.authenticate(user.userName, req.body.password)) {
        let token = jwt.sign( { _id } , process.env.SECRET, {
          expiresIn: 800 // expires in 5min
        });
        res.status(200).send({ token: token });
      }
    } catch(err) {
      res.status(500).send("Algo deu errado! "+ err);
    }
  },

  async logout(req, res) {
    res.status(200).send({ auth: false, token: null });
  }
};
