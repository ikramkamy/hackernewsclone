const mongoose=require('mongoose');


mongoose.connect("mongodb://localhost:27017/",{

    useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
},(err)=>{
if(err)
console.log("ERROR IN CONNECTION WITH SERVER IS",err)
else 
console.log("Tout est bien base de de donnée connectée pour Hacker-news clone projet")
})
module.exports=mongoose.connection;