const {User} = require('../models')

exports.getUser = async (req, res) => {
    try{
        const data = await User.findAll()
        res.send({
            status: true,
            data: data
        })
    }
    catch(err){
        res.send({
            status: false,
            message: err
        })
    }   
};

exports.createUser = async(req,res) => {
    try{
        const body = req.body
        const data = await User.create(body)
        res.send({
            status: true,
            data: data
        })
    }
    catch(err){
        res.send({
            status: false,
            message: err
        })
    }   
}

exports.findUser = async(req,res) => {
    try{
        const id = req.query.id
        const findUser = await User.findOne({where:{id:id}})
        if(findUser){
            res.send({
                status: true,
                data: findUser
            })
        }else{
            res.send({
                status: true,
                message: 'User not found'
            })
        }
    }
    catch(err){
        res.send({
            status:false,
            message:err
        })
    }
}

exports.updateUser = async(req,res) => {
    try{
        const id = req.query.id
        const body = req.body
        const findUser = await User.findOne({where:{id:id}})
        if(findUser){
            const data = await User.update(body,{where:{id:id}})
            if(data){
                res.send({
                    status: true,
                    message: 'User updated'
                })
            }
            else{
                res.send({
                    status: true,
                    message: 'User not updated'
                })
            }
        }else{
            res.send({
                status: true,
                message: 'User not found'
            })
        }
    }
    catch(err){
        res.send({
            status:false,
            message:err
        })
    }
}

exports.deleteUser = async(req,res) => {
    try{
        const id = req.query.id
        const findUser = await User.findOne({where:{id:id}})
        if(findUser){
            const data = await User.destroy({where:{id:id}})
            if(data){
                res.send({
                    status: true,
                    message: 'User deleted'
                })
            }else{
                res.send({
                    status: true,
                    message: 'User not deleted'
                })
            }
        }else{
            res.send({
                status: true,
                message: 'User not found'
            })
        }
    }
    catch(err){
        res.send({
            status:false,
            message:err
        })
    }
}