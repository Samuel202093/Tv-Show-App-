const express = require('express');
const axios = require('axios');
const path = require('path');

const PORT = process.env.PORT||5050;

const app = express();

const movKey = '0da47dd54caa34bc4edf96963f77a39c'
const movUrl = `https://api.themoviedb.org/3/tv/airing_today?api_key=${movKey}&language=en-US&page=1`;
const popUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${movKey}&language=en-US&page=1`;
const onairUrl= `https://api.themoviedb.org/3/tv/on_the_air?api_key=${movKey}&language=en-US&page=1`;

app.set('view engine', 'ejs'); // setting the view engine as ejs

app.use('/css', express.static(path.join(__dirname,'public/css'))); // accessing the css file through the css folder or directory
app.use('/img', express.static(path.join(__dirname,'public/img'))); // accessing the img files through the img directory or folder
app.use('/js', express.static(path.join(__dirname, 'public/js'))) // accessing the js file through the js directory or folder

app.get('/', async (req, res)=>{
    try {
        const movieShow = await axios.get(movUrl);
        // console.log(movieShow);
        let showMovies = movieShow.data.results
        console.log(showMovies);
        let imgUrl ='https://image.tmdb.org/t/p/w500';

        res.render('pages/index',{showMovies, imgUrl})

    } catch (error) {
        console.log(error);
      res.end('Api not found');  
    }
   
})

// app.get('/', (req,res)=>{
//     res.render('pages/index')
// });

app.get('/practice', (req,res)=>{
    res.render('pages/practice')
});
// app.get('/pages/popular', (req,res)=>{
//     res.render('pages/popular')
// });

// app.get('/pages/onair', (req,res)=>{
//     res.render('pages/onair')
// });

app.get('/pages/popular', async(req,res)=>{
    try {
       const popShow = await axios.get(popUrl);
    //    console.log(popShow);
       let showPop = popShow.data.results;
    //    console.log(showPop);
       let picUrl = 'https://image.tmdb.org/t/p/w500';

       res.render("pages/popular",{showPop, picUrl})
       
    } catch (error) {
        console.log(error);
        res.end("Error fetching Api")
    }
        
})

app.get('/pages/onair', async(req, res)=>{
    try {
        const onairShow = await axios.get(onairUrl);
        // console.log(onairShow);
        let showonAir = onairShow.data.results;
        // console.log(showonAir);
        let imageUrl = 'https://image.tmdb.org/t/p/w500';
 
        res.render("pages/onair",{showonAir, imageUrl})
        
     } catch (error) {
        //  console.log(error);
         res.end("Error fetching Api")
     }
})

app.listen(PORT, ()=>{
    console.log(`server running on port: ${PORT}`);
})


