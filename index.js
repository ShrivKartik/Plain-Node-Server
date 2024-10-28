const http = require('http');

const PORT = 3000;

const server = http.createServer((req,res) => {

    // console.log("request received");

    // console.log(req);
    // console.log(res);

    if(req.url == '/'){
        res.write("Home");
    }

    else if(req.url == '/ping'){
        res.write("Pong")
    }

    else{
        res.write("Hi!!! there...");
    }



    // res.write("Hello! world");
    res.end();

})

server.listen(PORT, () => {
    console.log("Server is listening....");
})