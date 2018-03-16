const http = require('http');
const userList = require('./Users').getUsers;

const port = 8080;
const host = '127.0.0.1';
try {
    const server = http.createServer((req, res)=>{
        if(req.url=='/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Using the Node js server</h1>');
        res.write("<a href = 'Users'>Show Users</a>");
        res.end();
        }
        if(req.url=='/Users'){
            res.setHeader('Content-Type', 'application/json');
            res.write('<h1>Welcome to User page</h1>');
            console.log(JSON.stringify(Array.from(userList())));
            res.write(JSON.stringify(Array.from(userList())));
            // userList().forEach(element =>{
            //     res.write(JSON.stringify(element));
            // })
            
            
        }
    });
    server.listen(port, host, ()=>{
        console.log(`Server listening in http://${host}:${port}`)
    });
} catch (error) {
    console.log(error);
}