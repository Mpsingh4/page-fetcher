const request = require('request');
const fs = require('fs');
const http = require('http')
//const localDest = "/Users/manpreetsingh/lighthouse/Notes";
 
const getResource = (url, localDest) => {
  http.get(url, function(result) {
    let download = "";

    result.on('data', function(material) {
      download += material;
    });

    result.on('end', function() {
      fs.writeFile(localDest, download, function(error) {
        if (error) {
          console.log(error);
          process.exit();
        } else {
          console.log(`Downloaded and saved ${download} to ${localDest}`);
        }
      });
    });
  }).on('error', function (error) {
    console.error(`Got error: ${error.message}`);
    process.exit()
  });
};

getResource();