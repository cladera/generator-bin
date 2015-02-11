module.exports = function(parser){
  parser
    .nocommand()
    .callback(function(opts){
      console.log('My custom command');
    });
};
