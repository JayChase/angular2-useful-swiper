//set the start directory and file the middleware override will then ensure that all non file routes get redirected back to the SPA
var startDir = '/demo';
var startFile = 'index.html';
var startPath = startDir + '/' + startFile;

module.exports = {
    logLevel: 'silent',
    browser: 'chrome',
    startPath: startPath,
    server: {
        middleware: {
            0: null, //to add back in logging comment this line out
            1: function (req, res, next) {            
                if(req.url.indexOf('.') === -1 && req.url.indexOf(startDir) > -1){
                    req.url = startPath;
                }
                
                return next();
            }
        }
    }
};