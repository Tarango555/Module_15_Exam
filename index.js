const express= require('express');
const multer= require('multer');
const app= express();

const storage= multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './uploads')
    },

    filename: function(req, file, callback){
        callback(null, file.originalname)
    }
});

const upload= multer({storage: storage}).single('myfile');

app.post('/api/upload', function(req, res){
    upload(req, res, function(err){
        if(err){
            res.send("File upload failed!")
        }else{
            res.send("File upload Success!")
        }
    })
});

const port= process.env.PORT || 5600;
app.listen(port, ()=>{
    console.log(`App is running on port ${port}...`);
});