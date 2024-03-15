var ghpages = require("gh-pages");

ghpages.publish(
  "_book",
  {
    branch: "master",
    repo: "https://github.com/YolandaQingniu/YolandaQingniu.github.io.git"
  },
  function(err) {
    console.log("github更新" + err);
  }
);
