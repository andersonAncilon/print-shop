const User = require("../models/User");

module.exports = {

    async store(req, res) {
        const user = await User.create(req.body);

        return res.json(user);
    }

}