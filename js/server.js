var express = require('express');
var static = require('express-static');
var mysql = require('mysql');

var server = express();
server.listen(1024);
server.use(static('xueersi'));
var db = mysql.createConnection({host:'localhost',user:'root',password:'',database:'6.09'});

server.get('/login',function (req,res){
    var json = req.query;
    var sql = 'SELECT * FROM msg WHERE user="'+json.user+'"';
    db.query('sql',function (res,data){
        console.log(err,data);
        if(data[0]){
            if(data[0].pass==json.pass){
                res.send('{"error":0,"msg":"登录成功"}');
            }else{
                res.send('{"error":1,"msg":"登录失败"}');
            }
        }else{
            res.send('{"error":1,"msg":"此用户不存在"}');
        }
    })
})
