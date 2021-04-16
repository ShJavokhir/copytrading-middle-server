import zmq from "zeromq";

var sub = zmq.socket('sub');
 sub.connect('tcp://192.168.1.103:3000');

 sub.subscribe('');  //herein lies the question

 sub.on('message',function(msg){
        console.log('Received msg:',msg.toString());
 });
