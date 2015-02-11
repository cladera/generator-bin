/**
 * Created by cgcladera on 11/02/15.
 */

module.exports = function(parser){
  parser
    .nocommand()
    .callback(function(opts){
      console.log('My custom command');
    });
};
