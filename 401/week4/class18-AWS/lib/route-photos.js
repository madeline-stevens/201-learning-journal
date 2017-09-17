
const upload = multer({dest: tempDir})//telling multer where to place that parsed file


module.exports = function(router){
  router.post('api/photo', bearerAuth, upload.single('image') ) //key: image, value: file
}
