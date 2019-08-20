const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const quotes = require('./quotes');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const PORT = 7000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

function getRandomQuote()
{
const pageSize=15;
const quoteSize=quotes.length;
let data=[];

for(let i=0;i<pageSize;i++)
{
   const random=Math.floor(Math.random() * quoteSize);
   data.push(quotes[random]);
}
return data;

}


app.get('/', (req, res) =>
  res.render('index', {
    title: 'Quotes',
    quotes : getRandomQuote(),
  })
);
