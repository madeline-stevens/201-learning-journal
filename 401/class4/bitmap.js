'use strict';

//constructor
//pass a buffer in from readfile and it's used to , in order for us to tear that buffer appart we need to know what byte to start from and how many bytes to read.

"THIS IS WHAT YOU NEED IN THE BITMAP MODULE"...DUH...
USE BUFFER.FROM NOT BUFFER.NEW

module.exports = function(buffer) {
  this.allData = buffer
  this.type = buffer.toString('utf-8', 0, 2); //get me two numbers, start at 0..
  this.fileSize = buffer.readInt32LE(2);
  this.offset = buffer.readInt32LE(10); //start at 10th byte
  this.width = buffer.readInt32L(22);
  this.pixelArray = buffer.slice(54, this.offset)//start at 54 and stop at offset. here we are workign with just hte pixels to modify our ...buffer? to then be able to had it back to our read/write...We use offset to get hte pixel array.

}

//run node index.js in terminal and you will see hex values...
//think of pixels as
//grayscale- take the average of your colors...?

//rgba- red, green, blue, alpha (red channel will start at the 54th byte)each channel is 4 bytes.

//transform module-

//iterate over hte array, the red green and blu
//hand pizel array off to a transform modle with a callback that says heres the data do something with it and when you're done hand it to the callback

1. grayscale
2. invert
3. ???? your choice


//switch statements???
//callback pattern ...s
//README - WHAT IS IT AND HOW DO I USE IT
