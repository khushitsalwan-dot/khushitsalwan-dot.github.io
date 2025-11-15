// server .mjs
import { create server }  from "node:http";

const server = createserver ((req,res) =>{
    res.writehead(200,('content-type': 'text plain')
};
res.end("hellow world!\n");
)

server.listen (3000, '//127.0.0.1/' ,() ->{
  console.log('listening  on //127.0.0.1/:3000");
))}

// run with node server.mjs