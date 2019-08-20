const express = require('express');
const app = express();
var bodyParser = require('body-parser')
const exphbs = require('express-handlebars');
const members = require('./Members');
var fs = require('fs');
const router = express.Router();

router.get('/',(req,res)=>{res.json(members)});

var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.get('/', (request, res) =>
 res.render('', {
   title: 'Member App',
   members
 })
);

app.post('/',urlencodedParser,(req,res)=>{
    
  const newMember = {
  
  name:req.body.name,
  email:req.body.email,
  
} 
if(!newMember.name || !newMember.email){
  return res.status(400).json({msg:"Invalid Name and E-mail"});
}
members.push(newMember);
res.redirect("/");
});