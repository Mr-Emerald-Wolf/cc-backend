const {products} = require('../models')

exports.getProduct = async (req, res) => {
    try{
        const data = await products.findAll()
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

exports.createProduct = async(req,res) => {
    try{
        const body = req.body
        const data = await products.create(body)
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

exports.findProduct = async(req,res) => {
    try{
        const email = req.email
        console.log(email);
        const findproduct = await products.findOne({where:{id:id}})
        if(findproduct){
            res.send({
                status: true,
                data: findproduct
            })
        }else{
            res.send({
                status: true,
                message: 'product not found'
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

exports.updateProduct = async(req,res) => {
    try{
        const id = req.query.id
        const body = req.body
        const findproduct = await products.findOne({where:{id:id}})
        if(findproduct){
            const data = await products.update(body,{where:{id:id}})
            if(data){
                res.send({
                    status: true,
                    message: 'product updated'
                })
            }
            else{
                res.send({
                    status: true,
                    message: 'product not updated'
                })
            }
        }else{
            res.send({
                status: true,
                message: 'product not found'
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

exports.deleteProduct = async(req,res) => {
    try{
        const productName = req.query.productName
        const findproduct = await products.findOne({where:{productName:productName}})
        if(findproduct){
            const data = await products.destroy({where:{productName:productName}})
            if(data){
                res.send({
                    status: true,
                    message: 'product deleted'
                })
            }else{
                res.send({
                    status: true,
                    message: 'product not deleted'
                })
            }
        }else{
            res.send({
                status: true,
                message: 'product not found'
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