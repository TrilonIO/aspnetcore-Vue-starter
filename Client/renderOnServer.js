process.env.VUE_ENV = 'server';

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../wwwroot/dist/server.js')
const code = fs.readFileSync(filePath, 'utf8');

const bundleRenderer = require('vue-server-renderer').createBundleRenderer(code)

module.exports = function (params) {
    return new Promise(function (resolve, reject) {
        console.log(params);
        bundleRenderer.renderToString(params.data, (err, resultHtml) => { // params.data is the store's initial state
            if (err) {
                reject(err.message);
            }
            resolve({
                html: resultHtml,
                globals: {
                    data: params.data 
                    /*
                        public IActionResult Index()
                        {
                            // "data" comes from the .NET View Controller
                            return View(new { Something = "This came from .NET Controller before the View loaded" }); 
                        }
                    */
                }
            });
        });
    });
};