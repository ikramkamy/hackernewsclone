
const post= require('../models/info');

//# create a post
exports.create =  (req, res) => {

  
   const postcreated=new post({
    text:req.body.text,
    name:req.body.name,
    auteur:req.body.auteur,
    article:req.body.article
  
});
console.log('ROUTE SUCCEED',postcreated)
postcreated.save((error, post)=>{
   if (error) {
     
       return res.status(400).json({
         message: (error),
         
       });
       
     }
     if (post) {
       
       const {text,name,auteur} = post;
       return res.status(201).json({
         
        post: {text,name,auteur},
       });
     } 
})
}
exports.getinfos =(req,res)=>{
    post.find().then((data) => {

  res.json(data)
  console.log("FETCH SUCCED")
  })
  .catch((err) => {
    console.log("FETCH FAILED",err)
    res.json({
      err: err,
      message: "Une erreur c'est produite",
    });
  });
}

//#update a info

exports.update= (req, res) => {
console.log("WE ARE UPDATING info")
const name=req.body.name;
const text=req.body.name;
const auteur=req.body.auteur;
post.findByIdAndUpdate({_id:req.params._id},{
    text:req.body.text,
    name:req.body.name,
    auteur:req.body.auteur
}
   ).then((data)=>{
const postupdated={text, name, auteur}
    res.json(postupdated)
    console.log("UPDATE SUCCED",postupdated)
})

    .catch((err) => {
      console.log("UPDATE FAILED",err)
      res.json({
        err: err,
        message: "Une erreur c'est produite",
      });
    });

}





