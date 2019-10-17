const queue = 'hello';

const open = require('amqplib').connect('amqp://localhost');

// Consumer
open
.then((conn) => conn.createChannel())
.then((ch) => ch.assertQueue(queue)
.then((ok) => ch.consume(queue, (msg) => {
     if (msg !== null) {
       console.log(JSON.parse(msg.content.toString()));
       ch.ack(msg);
     }
   }))
)
.catch((err) => console.log(err));
