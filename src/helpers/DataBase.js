const mongoose = require("mongoose");

require("dotenv-safe").load();


module.exports = {
  conection() {
    try {
      const cnct = mongoose.connect(
        `mongodb://${process.env.USER}:${process.env.PSWD}@ds225205.mlab.com:25205/printshop`,
        {
          useNewUrlParser: true,
          useCreateIndex: true
        }
      );
      console.log("Conexão com o DB bem sucedida!");
    } catch (err) {
      console.log("Conexão com o DB mal sucedida!");
    }
  }
};
