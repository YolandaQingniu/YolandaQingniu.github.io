var ghpages = require('gh-pages');

ghpages.publish('_book',{
    branch:"master",
    repo:"git@github_yolanda.com:YolandaQingniu/YolandaQingniu.github.io.git",
}, function(err) {
    console.log(err)
});