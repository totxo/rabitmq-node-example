const queue = 'hello';
const msg = {
  message: 'json message'
};

const open = require('amqplib').connect('amqp://localhost');

// Publisher
open
.then((conn) => conn.createChannel())
.then((ch) => ch.assertQueue(queue)
.then((ok) => ch.sendToQueue(queue, Buffer.from(JSON.stringify(msg)))))
.catch((err) => console.log(err));
