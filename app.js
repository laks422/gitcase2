const Express=require('express');
var app=new Express();
app.set('view engine','ejs');
app.use(Express.static(__dirname+"/public"));
var nav=[{
    title:'Books',
    link:'/books'
},
{title:'Authors',
link:'/authors'

}];
var books=[{Name:"Revolution Twenty 20",
Author:"Chethan Bhagat",
img:"/images/revolution.jpg",
Date_of_publication:"2011",
Publisher:"Rupa publications",
Price:"240 Rs.",
Description:"novel"

},
{
Name:"The Perfect Us",
Author:"Durjoy Datta",
img:"/images/perfect.jpg",
Date_of_publication:2018,
Publisher:"Penguin Metro Reads",
Price:"119 Rs.",
Description:"Novel"

},
{Name:"Like It Happened Yesterday",
Author:"Ravindher Singh",
img:"/images/likeit.jpg",
Date_of_publication:2011,
Publisher:"Penguin Random House India",
Price:"199 Rs.",
Description:"Novel"

},
{Name:"It Happens for a Reason",
Author:"Preethy Shenoy",
img:"/images/ithappens.jpg",
Date_of_publication:2014,
Publisher:"Srishti Publishers",
Price:"160 Rs.",
Description:"Fiction Novel"

},
{Name:"The Alchemist",
Author:"Paulo Koylo",
img:"/images/alci.jpg",
Date_of_publication:1988,
Publisher:"Harper Publishers",
Price:"280 Rs.",
Description:"Fiction Novel"

},

{Name:"Manju",
Author:"M.T Vasudevan Nair",
img:"/images/manju.jpg",
Date_of_publication:1964,
Publisher:"Dc Publishers",
Price:"150 Rs.",
Description:"Novel"



},
{Name:"The Theory Of Everything: The Origin and Fate of the Universe ",
Author:"Stephen Hawking",
img:"/images/theory.jpg",
Date_of_publication:2002,
Publisher:"Jaico Publishing House",
Price:"180 Rs.",
Description:"Science fiction"

},
{Name:"The Secret of the Nagas",
Author:"Amish Tripathi",
img:"/images/naga.jpg",
Date_of_publication:2011,
Publisher:"Westland publications",
Price:"240 Rs.",
Description:"Fairy tale"

},

{Name:"Mayyazhippuzhayude Theerangalil",
Author:"M.Mukunthan",
img:"/images/mayyazhi.jpg",
Date_of_publication:1974,
Publisher:" DC publications",
Price:"290 Rs.",
Description:"Fiction"
},
{Name:"I Am Malala: The Girl Who Stood Up for Education and Was Shot by the Taliban",
Author:"Malala Yousafsai",
img:"/images/taliba.jpg",
Date_of_publication:2013,
Publisher:" Brown and Company publications",
Price:"260 Rs.",
Description:"Autobiography"




}];
var authors=[{Name:"Chethan Bhagat",
Place:"New Delhi",
Dob:"22-april-1974",
img:"/images/chetu.jpg"
},
{Name:"Durjoy Datta",
Place:"Delhi",
Dob:"7-February-1987",
img:"/images/durjoy.jpg"
},

{Name:"Ravindher Singh",
Place:"Odisha",
Dob:"4-February-1982",
img:"/images/ravindher.jpg"
},
{Name:"Preethi Shenoy",
Place:"Mumbai",
Dob:"21-december-1971",
img:"/images/preethi.jpg"
},
{Name:"Paulo Coelho",
Place:"Brazil",
Dob:"24-August-1974",
img:"/images/palo.jpg"
},
{Name:"M.T Vasudevan Nair",
Place:"Calicut",
Dob:"9-August-1933",
img:"/images/mt.jpg"
},
{Name:"Stephen Hawking",
Place:"England",
Dob:"8-January-1942",
img:"/images/stephu.jpg"
},
{Name:"Amish Tripathi",
Place:"Mumbai",
Dob:"18-October-1974",
img:"/images/amish.jpg"
},
{Name:"M.Mukunthan",
Place:"Mayyazhi",
Dob:"10-September-1942",
img:"/images/muku.jpg"
},

{Name:"Malala Yousafsai",
Place:"Pakistan",
Dob:"12-July-1997",
img:"/images/malu.jpg"


}];








app.get('/',(req,res)=>{
    res.render('index',{nav});


});
app.get('/books',(req,res)=>{
    res.render('books',{nav,books,title:"Books"});
    

});
app.get('/authors',(req,res)=>{
    res.render('authors',{nav,authors,title:"Authors"});
    

});
app.get('/bookssingle/:id',(req,res)=>{
    const x=req.params.id;
    res.render('bookssingle',{nav,books,"book":books[x]});
    

});
app.get('/authorsingle/:id',(req,res)=>{
    const x=req.params.id;
    res.render('authorsingle',{nav,authors,"author":authors[x]});
    

});
app.listen(process.env.PORT || 3000,()=>{
    console.log("server is ruuing on 3000");
});