class 6
8/28/17

to do:
- OSI model
- TCP
- chat server demo
- lab preview

- storage/persistence (in memory- create an object in memory)
- stacks and queues


code review:
- process.argv =>'path to node', 'path to this file', [any, args]
- switch statements

_____
OSI

- please do not throw sausage pizza away.

7. application- data
6. presentation- data
5. session- data
4. transport- segment (TCP)/datagram(UDP)
3. network - design the end point on those cables
2. data link - cables across the ocean
1. physical

layer 7: Application
http
imap
pop
ftp
ssh
bitTorrent

layer 6: Presentation


layer 5: Session

layer 4: Transport
TCP- transmission control protocol
  - http- like an answering machine- "here's who i am, if you'd like for me to get bakc to you here's what i need, name, phone number" then you formulate a response and send it back to my answering machine.
  - doesn't always guarantee that css will load
- With TCP it's open communication.- breaks down data into small packets, and get confirmation that those packets were recieved. if a packet fails, i'm going to know abotu it and try to send it again.
  - connection oriented(stateful) transmission.

layer 3: Network

layer 2: Data Link

layer 1: Physical

next week:
- unique `_id` property will prepare us for Mongo


lab 6:
npm install
start the server

in another terminal
start up a client


command-parser.js
  - ignore for this lab!

  we'll work with model client and serer.js

start: watch: 
