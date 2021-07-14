var Userdb = require('../model/model');

exports.create = (req,res)=>{
if(!req.body){
    res.status(400).send({massage:"contenet mustnot be empty"});
return;
}

const user = new Userdb({
    name:req.body.name,
    email:req.body.email,
    gender:req.body.gender,
    status:req.body.status
});
user
.save(user).then(data =>{
   // res.send(data)
    res.redirect('/')
})
.catch(err=>{
res.status(500).send({
massage:err.massage || "an error acured"
});
})

}




exports.find = (req,res)=>{
    if(req.query.id){
        const id = req.query.id;
        Userdb.findById(id)
        .then(data=>{
                if(!data){
                    res.status(404).send({massage : "not found"+ id})
                }else{
                    res.send(data)
                }
        })
        .catch(err=>{
            res.status(500).send({ massage : "error retrive user + id"})
        })
    }
    else{
        Userdb.find()
        .then(user=>{
       res.send(user)

})
        .catch(err=>{
            res.status(500).send({massage: err.massage ||"error acued" })
        })        
    }
}

exports.update = (req,res)=>{
if(!req.body){
    return res.status(400).send({massage:"error empty"})
}
const id = req.params.id;
Userdb.findByIdAndUpdate(id,req.body,{ useFindAndModify:false})
.then(data=>{
    if(!data){
        res.status(400).send({massage : `can't update user with ${id} may not found` })
    }
    else{
        res.send(data)
        
    }
})
.catch(err=>{
    rea.status(500).send({ massage: "error in update" })
})
}

exports.delete = (req,res)=>{
    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({massage : `can't delete user with ${id} may not found` })
        }
        else{
            res.send({massage : `deleted` })
        }
    })
    .catch(err=>{
        rea.status(500).send({ massage: "can`t in delete" });
    });
    
}