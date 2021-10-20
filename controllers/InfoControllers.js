
const Mypost= require('../models/info');

//# create a post
exports.create =  (req, res) => {

  
   const postcreated=new Mypost({
    text:req.body.text,
    name:req.body.name,
    auteur:req.body.auteur,
    article:req.body.article
  
});

postcreated.save((error, post)=>{
   if (error) {
     console.log("we are having an error")
       return res.status(400).json({
         message: (error),
         
       });
       
     }
     if (Mypost) {
       
       const {text,name,auteur} =Mypost;
       console.log('ROUTE SUCCEED',postcreated)
       return res.status(201).json({
         
        Mypost: {text,name,auteur},
       });
     } 
})
}
exports.getinfos =(req,res)=>{
    Mypost.find().then((data) => {

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
Mypost.findByIdAndUpdate({_id:req.params._id},{
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





exports.Delete=(req,res)=>{
    post.findOneAndDelete({ "_id": req.params._id},(err, doc) => {
      if (err) {
          console.log("Something wrong when DELETING data!");
      }
  
      console.log(doc);
      return res.status(201).json({
        message: ' Gout DELETED '
    })
  });
  
  
  
  }