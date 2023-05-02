const http=require('http');
const fs=require('fs');
const server=http.createServer(function(req,res){
    if(req.url=='/' || req.url=='/home'){
        fs.readFile('./public/home.html',function(err,data){
            if(err){
                res.writeHead(404,{'contentType':'text/html'});
                res.write(err);
                res.end();
            }else{
                res.writeHead(200,{'contentType':'text/html'});
                res.write(data);
                res.end();
            }
        })
    }else if(req.url=='/about'){
        fs.readFile('./public/about.html',function(err,data){
            if(err){
                res.writeHead(404,{'contentType':'text/html'});
                res.write(err);
                res.end();
            }else{
                res.writeHead(200,{'contentType':'text/html'});
                res.write(data);
                res.end();
            }
        })
    }else if(req.url=='/contact'){
        fs.readFile('./public/contact.html',function(err,data){
            if(err){
                res.writeHead(404,{'contentType':'text/html'});
                res.write(err);
                res.end();
            }else{
                res.writeHead(200,{'contentType':'text/html'});
                res.write(data);
                res.end();
            }
        })
    }
    
    else{
        fs.readFile('./public/404.html',function(err,data){
            if(err){
                res.writeHead(404,{'contentType':'text/html'});
                res.write(err);
                res.end();
            }else{
                res.writeHead(200,{'contentType':'text/html'});
                res.write(data);
                res.end();
            }
        })
    }

});
server.listen(3000,function(){
    console.log("Server is running on port 3000")
})