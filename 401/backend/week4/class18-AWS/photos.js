'use strict';


Photo.statics.upload = function(req){ //photo schema ? with a .statics(built in mongoose ), passing in the req as an argument.


let params = {// get this syntax from S3 documentation. we need the following 4 things
   ACL: 'public read',
   Bucket: process.env.AWS_Bucket,  //what bucket are we sending this photo object to
   key: `${req.fil.filename}${path.extname(req.file.originalname)}` //path is a node module build in. extname is a way to pass a file in and get just hte file extension. multer will parse this?
   Body: fs.createReadStream (req.file.path)//creating a readable streamable from the object which gets it to S3 much faster when we break it down into chunks.

}

return s3UploadProm(params) //pass in params to get that promise back. this will take care of the upload request to s3. Get something back in teh form of a promise
  .then(s3Data)=> //meta data when we post to an s3 bucket. Once we do this, we're done with that temp binary file... We're packagign all the meta data adn seding it out in this s3Data file and using it in the aws-s3.js
    del([`${tempDir}/*`]) //we still need the tempDir but delete everythign in it.

    let photoData = { //a new object. this will match up with our object above. Mong.....
      name: req.body.name,
      desc: req.body.desc,
      objectKey: s3Data.Key,
      imageURI: s3Data.Location,
      userId: req.user._id,
      galleryId: req.body.galleryId
    }
    resolve(photoData) //
  }
  .catch(reject)
