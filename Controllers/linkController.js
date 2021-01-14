
const Link = require('../models/Link')


const redirect = async (req, res) =>{

    let title = req.params.title

    try{
        let doc = await Link.findOne({title:title})

    console.log(doc)

   // res.send(doc)

   res.redirect(doc.url)


} catch(err){
        console.log(err)
    }
    
}


const addLink = async (req, res) =>{

 try{
    let doc =  await new Link(req.body).save()

    res.redirect('/all')

 }catch(err){
     console.log(err)
 }   
    

}


const getAll = async (req, res) =>{

    try{
        let links =  await Link.find({})
    
       res.render('all', {links})
    
     }catch(err){
         console.log(err)
     }   
}

const loadLink =  async (req, res)=>{

    
   let id = req.params.id

   // console.log(id)


    let doc = await Link.findById(id)


    res.render('edit', {link : doc})
    
}

const delLink = async (req, res) =>{

    try{
       
    let id = req.params.id

    console.log(id)

    let doc =  await Link.findByIdAndDelete(id)
    

    console.log("im doc ",doc)

    res.send(doc)
    
   // res.redirect('/all')
    
     }catch(err){
         res.send(err)
     }   


}


const editLink = async (req, res) =>{

    try{
        let doc = {}
        
        doc =   req.body

        console.log(doc)
    


       await Link.findOneAndUpdate({title: doc.title}, {$set:{
        
    title: doc.title, url:doc.url, description: doc.description}})

    
        res.redirect('/all')
    
     }catch(err){
         console.log(err)
     }   
        
}
module.exports = {redirect, addLink, getAll, delLink, loadLink, editLink}