require("dotenv-safe").load();

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
    } catch(err) {
      res.status("500").send("Algo deu errado! "+err);
    }
  },

  async auth(req, res, next) {
    //console.log(await UserServices.authenticate(req.body.userName, req.body.password));
    try {
      let token = await UserServices.authenticate(
        req.body.userName,
        req.body.password
      );

      if (token == 1) res.status(403).send("O nome de usuário não existe!");
      else if (token == 2) res.status(403).send("Senha incorreta!");
      else res.status(200).send({ token: token });
    } catch (err) {
      res.status(500).send("Algo deu errado! " + err);
    }
  },

  async logout(req, res) {
    res.status(200).send({ auth: false, token: null });
  }
};
