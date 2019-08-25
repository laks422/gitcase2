const Express=require('express');
var app=new Express();
app.set('view engine','ejs');
var request=require('request');
app.use(Express.static(__dirname+"/public"));
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
// mongoose.connect("mongodb://localhost:27017/librarymon");
 mongoose.connect("mongodb+srv://2ammuammu:<password>@cluster0-zdx0e.mongodb.net/test?retryWrites=true&w=majority");
var BooktableModel=mongoose.model("booktable",{
    name:String,
    author:String,
    publisher:String,
    date_of_publication:String,
    price:String,
    description:String,
    img:String

});
var AuthortableModel=mongoose.model("authortable",{
           name:String,
           place:String,
           dob:String,
           img:String
});


var nav=[{
    title:'Books',
    link:'/books'
},
{title:'Authors',
link:'/authors'
},

{title:'Addbooks',
link:'/addbook'

},
{title:'Addauthor',
 link:'/addauthor'
 }
 ];
// var books=[{Name:"Revolution Twenty 20",
// Author:"Chethan Bhagat",
// img:"/images/revolution.jpg",
// Date_of_publication:"2011",
// Publisher:"Rupa publications",
// Price:"240 Rs.",
// Description:"novel"

// },
// {
// Name:"The Perfect Us",
// Author:"Durjoy Datta",
// img:"/images/perfect.jpg",
// Date_of_publication:2018,
// Publisher:"Penguin Metro Reads",
// Price:"119 Rs.",
// Description:"Novel"

// },
// {Name:"Like It Happened Yesterday",
// Author:"Ravindher Singh",
// img:"/images/likeit.jpg",
// Date_of_publication:2011,
// Publisher:"Penguin Random House India",
// Price:"199 Rs.",
// Description:"Novel"

// },
// {Name:"It Happens for a Reason",
// Author:"Preethy Shenoy",
// img:"/images/ithappens.jpg",
// Date_of_publication:2014,
// Publisher:"Srishti Publishers",
// Price:"160 Rs.",
// Description:"Fiction Novel"

// },
// {Name:"The Alchemist",
// Author:"Paulo Koylo",
// img:"/images/alci.jpg",
// Date_of_publication:1988,
// Publisher:"Harper Publishers",
// Price:"280 Rs.",
// Description:"Fiction Novel"

// },

// {Name:"Manju",
// Author:"M.T Vasudevan Nair",
// img:"/images/manju.jpg",
// Date_of_publication:1964,
// Publisher:"Dc Publishers",
// Price:"150 Rs.",
// Description:"Novel"



// },
// {Name:"The Theory Of Everything: The Origin and Fate of the Universe ",
// Author:"Stephen Hawking",
// img:"/images/theory.jpg",
// Date_of_publication:2002,
// Publisher:"Jaico Publishing House",
// Price:"180 Rs.",
// Description:"Science fiction"

// },
// {Name:"The Secret of the Nagas",
// Author:"Amish Tripathi",
// img:"/images/naga.jpg",
// Date_of_publication:2011,
// Publisher:"Westland publications",
// Price:"240 Rs.",
// Description:"Fairy tale"

// },

// {Name:"Mayyazhippuzhayude Theerangalil",
// Author:"M.Mukunthan",
// img:"/images/mayyazhi.jpg",
// Date_of_publication:1974,
// Publisher:" DC publications",
// Price:"290 Rs.",
// Description:"Fiction"
// },
// {Name:"I Am Malala: The Girl Who Stood Up for Education and Was Shot by the Taliban",
// Author:"Malala Yousafsai",
// img:"/images/taliba.jpg",
// Date_of_publication:2013,
// Publisher:" Brown and Company publications",
// Price:"260 Rs.",
// Description:"Autobiography"




// }];
// var authors=[{Name:"Chethan Bhagat",
// Place:"New Delhi",
// Dob:"22-april-1974",
// img:"/images/chetu.jpg"
// },
// {Name:"Durjoy Datta",
// Place:"Delhi",
// Dob:"7-February-1987",
// img:"/images/durjoy.jpg"
// },

// {Name:"Ravindher Singh",
// Place:"Odisha",
// Dob:"4-February-1982",
// img:"/images/ravindher.jpg"
// },
// {Name:"Preethi Shenoy",
// Place:"Mumbai",
// Dob:"21-december-1971",
// img:"/images/preethi.jpg"
// },
// {Name:"Paulo Coelho",
// Place:"Brazil",
// Dob:"24-August-1974",
// img:"/images/palo.jpg"
// },
// {Name:"M.T Vasudevan Nair",
// Place:"Calicut",
// Dob:"9-August-1933",
// img:"/images/mt.jpg"
// },
// {Name:"Stephen Hawking",
// Place:"England",
// Dob:"8-January-1942",
// img:"/images/stephu.jpg"
// },
// {Name:"Amish Tripathi",
// Place:"Mumbai",
// Dob:"18-October-1974",
// img:"/images/amish.jpg"
// },
// {Name:"M.Mukunthan",
// Place:"Mayyazhi",
// Dob:"10-September-1942",
// img:"/images/muku.jpg"
// },

// {Name:"Malala Yousafsai",
// Place:"Pakistan",
// Dob:"12-July-1997",
// img:"/images/malu.jpg"


// }];

app.get('/',(req,res)=>{
    res.render('index',{nav,title:"Library"});
});

app.get('/index',(req,res)=>{
    res.render('index',{nav,title:"Library"});
});
app.get('/books',(req,res)=>{
    
   //const bookslink="http://localhost:3000/getdataApi";
   const bookslink="https://ictcasestudy2.herokuapp.com/getdataApi";
   
   
 

    request(bookslink,(error,response,body)=>
{
   var books=JSON.parse(body);
   res.render('books',{nav,title:"Books",books:books});

})
    
});
app.get('/bookssingle/:id',(req,res)=>{

    const x=req.params.id;
    //const booksinglelink="http://localhost:3000/getsinglebookApi/"+x;
    const booksinglelink="https://ictcasestudy2.herokuapp.com/getsinglebookApi/"+x;

    request(booksinglelink,(error,response,body)=>
{
   var books=JSON.parse(body);
   console.log(books);
   res.render('bookssingle',{nav,title:"Books",books:books[0]});

})
    
});
app.get('/authors',(req,res)=>{
     
    //const authorlink="http://localhost:3000/getauthorApi";
    const authorlink="https://ictcasestudy2.herokuapp.com/getauthorApi";
  
    request(authorlink,(error,response,body)=>{
        var authors=JSON.parse(body);
        if(error)
        {
            throw error;
        }
        else{
            res.render('authors',{nav,title:"Authors",authors:authors});
        }
        
    });
});
app.get('/authorsingle/:id',(req,res)=>{

    const x=req.params.id;
 //const authorsinglelink="http://localhost:3000/getsingleauthorApi/"+x;
 const authorsinglelink="https://ictcasestudy2.herokuapp.com/getsingleauthorApi/"+x;


    request(authorsinglelink,(error,response,body)=>
{
   var authors=JSON.parse(body);
   console.log(authors);
   res.render('authorsingle',{nav,title:"Authors",authors:authors[0]});

});

});
app.get('/addbook',(req,res)=>
{
    res.render('addbook',{nav,title:"Books"});
})
 app.post('/readbookApi',(req,res)=>
 {
     var book=new BooktableModel(req.body);
          var result=book.save((error)=>
 {
     if(error)
     {
         throw error;
    }
     else{
         res.send(book);
     }
 });


 });




app.get('/getdataApi',(req,res)=>
{
  BooktableModel.find((error,data)=>
{
    if(error)
    {
        throw error;
        res.send(error);
    }
    else{
        res.send(data);
    }
});
});


app.get('/getsinglebookApi/:id',(req,res)=>{
    var id=req.params.id;
    BooktableModel.find({_id:id},(error,data)=>{
        if(error)
        {
            throw error;
        }
        else{
            res.send(data);
        }
    });
});




app.get('/getsingleauthorApi/:id',(req,res)=>{
    var id=req.params.id;
    AuthortableModel.find({_id:id},(error,data)=>{
        if(error)
        {
            throw error;
        }
        else{
            res.send(data);
        }
    });
});


app.get('/addauthor',(req,res)=>
{
    res.render('addauthor',{nav,title:"Authors"});
});

app.post('/readauthorApi',(req,res)=>
{
    var author=new AuthortableModel(req.body);
    var result=author.save((error)=>{
        if(error)
        {
            throw error;
        }
        else{
            res.send(author);
        }
    });
  
});
app.get('/getauthorApi',(req,res)=>
{
    AuthortableModel.find((error,data)=>
{
    if(error)
    {
        throw error;
    }
    else{
        res.send(data);
    }
});

});


app.listen(process.env.PORT || 3000,()=>
{
    console.log("Server is running");
});



 


