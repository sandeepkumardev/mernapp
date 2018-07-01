const userModel = require('../models/Users');
const user = new userModel();

class usersController {
    async showUsers(req, res){
        try {

            let usersList = await user.show(req, res);
            res.json({
                "response" :usersList
            })
        } catch(e){
            console.log(e);
        }

    }
}

module.exports = usersController;