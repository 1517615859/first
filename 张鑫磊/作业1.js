/**
 * Created by 或彼此 on 2017/6/29.
 */
var http=require("http");
var fs=require("fs");
http.createServer(function (req,res) {
    var url = req.url;
    switch(url){
        case "/index.html":{
            fs.readFile("index.html","utf-8",function (err,data) {
                if(err){
                    console.log("读取失败");
                    console.log(err)
                }else{
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"});
                    res.end(data)
                }
            });
            break;
        }
        case "/index.css":{
            fs.readFile("index.css","utf-8",function (err,data) {
                if(err){
                    console.log(err);
                    res.end("读取失败")
                }else{
                    res.writeHead(200,{"content-type":"text/css;charset=utf8"});
                    res.end(data)
                }
            });
            break;
        }
        case "/1.jpg":{
            fs.readFile("1.jpg",function (err,data) {
                if(err){
                    console.log(err);
                    res.end("读取图片失败")
                }else{
                    res.writeHead(200,{"content-type":"image/jpeg"});
                    res.end(data)
                }
            });
            break;
        }
        case "/index.js":{
            fs.readFile("index.js","utf-8",function (err,data) {
                if(err){
                    console.log("读取失败");
                    console.log(err)
                }else{
                    res.writeHead(200,{"content-type":"text/javascript;charset=utf8"});
                    res.end(data)
                }
            });
            break;
        }
        case "/index2.html":{
            fs.readFile("index2.html","utf-8",function (err,data) {
                if(err){
                    console.log("读取失败");
                    console.log(err)
                }else{
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"});
                    res.end(data)
                }
            });
            break;
        }
        case "/index3.html":{
            fs.readFile("index3.html","utf-8",function (err,data) {
                if(err){
                    console.log("读取失败");
                    console.log(err)
                }else{
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"});
                    res.end(data)
                }
            });
            break;
        }
        default:
            fs.readFile("bad.html","utf-8",function (err,data) {
                if(err){
                    console.log("读取失败");
                    console.log(err)
                }else{
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"});
                    res.end(data)
                }
            });
    }
}).listen(8888)