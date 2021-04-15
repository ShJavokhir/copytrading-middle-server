import zmq from "zeromq";

var sub = zmq.socket('sub');
 sub.connect('tcp://127.0.0.1:3000');

 sub.subscribe('');  //herein lies the question

 sub.on('message',function(msg){
        console.log('Received msg:',msg);
 });
