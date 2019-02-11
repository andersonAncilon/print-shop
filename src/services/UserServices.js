const User = require("../models/User");
const bcrypt = require("bcrypt");

async function authenticate( userName, password ) {
    const user = await User.findOne({ userName });
    
    if ( user && await bcrypt.compareSync(password, user.password) ) {
        return true; 
    }

    return false;
}

module.exports = {
    authenticate
}
