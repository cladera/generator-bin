module.exports = function(parser){
  parser.command('<%= name %>')
    .option('option', {
      abbr: 'o',
      default: 'awesome!!',
      help: 'Some option help'
    })
    .callback(function(opts){
      console.log('<%= name %> is %s', opts.option);
    });
};
