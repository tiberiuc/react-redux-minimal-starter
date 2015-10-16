var getConfig = require('hjs-webpack');

module.exports = getConfig({
    in : 'src/index.js',

    out: 'public',

    isDev : process.env.NODE_ENV !== 'production',

    output : {
        hash: true
    },

    devServer: {
      hot: true,
      historyApiFallback: true,
      info: true
    },

    clearBeforeBuild: true,

     html: function (data) {
        // here we return an object where each key is a file to be generated
        return {
          'index.html': [
            '<html>',
              '<head>',
                '<link href="' + data.css + '" rel="stylesheet" type="text/css" />',
                '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">',
              '</head>',
              '<body>',
                '<div id="root"></div>',
                '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>',
                '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>',
                '<script src="' + data.main + '"></script>',
              '</body>',
            '</html>'
          ].join('')
        }
      }
});
