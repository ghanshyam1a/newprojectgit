const http = require("http");
const fs = require("fs/promises");
//const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 8100;

http.createServer(async(req,res) =>{
   
    try {
        await fs.writeFile("dummy.txt","this is new file","utf-8");
        console.log("file has written has successfully");
        res.writeHead(200,{"content-type":"text/html"});
        res.end("<h1>Home Page</h1>");
    } catch (err) {
        if(err.code === "ENOENT"){
            console.log("file does not exist");
        }else{
            console.log(`error in writing file:${err}`);
        }
        console.log(err);


    }
    
}).listen(PORT,() =>{
    console.log(`server is running on port :${PORT}`);
    console.log(`http://localhost:${PORT}`);
})
