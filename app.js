var fs = require('fs');
var dirname = "E:/2.Repo/blackie1019.github.io/source/_posts/";
changeFileNameToLowerCase(dirname);

function changeFileNameToLowerCase(dirname) {
    fs.readdir(dirname, function(err, filenames) {
        if (err) {
            console.log("dir error:" + err);
            return;
        }
        try {
            filenames.forEach(function(filename) {
                fs.rename(dirname + filename, dirname + filename.toLowerCase(), function(err) {
                    if (err) {
                        console.log("file error:" + err);
                    }
                });
            });
        } catch (e) {
            throw e;
        }
    });
}