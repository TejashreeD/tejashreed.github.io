//Install express server
const express = require("express");
const path = require("path");

const app = express();

// Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/sr-portfolio'));
app.use(express.static(`${__dirname}/sr-portfolio/dist`));
// ${__dirname}/front-end/dist
app.get("/*", function (req, res) {
    // res.sendFile('index.html', {
    //     root: 'dist/sr-portfolio/'
    // });
    // res.sendFile(path.join(__dirname, '/dist/sr-portfolio/index.html'));
    res.sendFile(`./sr-portfolio/dist/index.html`); // load the single view file (angular will handle the page changes on the front-end)

});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
