const User = require("../models/User");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

require("dotenv-safe").load();


async function authenticate(userName, password) {
  const user = await User.findOne({ userName });
  let _id  = "";

  if (!user) {
    return 1;
  }

  //compara senha da requisição com o da busca no do banco
  if (!(await bcrypt.compare(password, user.password))) {
    return 2;
  }

  _id = user._id;

  let token = jwt.sign({ _id }, process.env.SECRET, {
    expiresIn: 500 // expires in 5min
  });

  return token;
}

module.exports = {
  authenticate
};
