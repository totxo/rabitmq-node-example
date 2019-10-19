## POC 
### Rabbit + Node

```bash
$ docker run -d --name ${container_name} -p 5672:5672 rabbitmq
$ npm install
```

##### Terminal 1
```bash
$ node consumer/index.js
```

##### Terminal 1
```bash
$ node publisher/index.js
```
