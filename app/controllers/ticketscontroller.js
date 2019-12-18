const Ticket =require('../models/ticket')

module.exports.list=(req,res)=>{
    Ticket.find({userid:req.user._id}) /*.populate(['customer','department','employees.id'])*/
    .then((tickets)=>{
        res.json(tickets)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.create=(req,res)=>{
    const body=req.body
    const ticket=new Ticket(body)
    ticket.userid=req.user._id
    ticket.save()
    .then((ticket)=>{
        res.json(ticket)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    Ticket.findOne({_id:id,userid:req.user._id})/*.populate(['customer','department','employees.id'])*/
    .then((ticket)=>{
       ticket?res.json(ticket):res.json({})
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Ticket.findOneAndUpdate({_id:id,userid:req.user._id},body,{new:true,runValidators:true})
    .then((ticket)=>{
        ticket?res.json(ticket):res.json({})
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.remove=(req,res)=>{
    const id=req.params.id
    Ticket.findOneAndDelete({_id:id,userid:req.user._id})
    .then((ticket)=>{
        ticket?res.json(ticket):res.json({})
    })
    .catch((err)=>{
        res.json(err)
    })
}

