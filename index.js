
var ghpages = require("gh-pages");

ghpages.publish(
  "_book",
  {
    branch: "master",
    repo: "https://github.com/YolandaQingniu/YolandaQingniu.github.io.git"
  },
  function(err) {
    if (err) {
      console.error("GitHub 更新失败:", err);
    } else {
      console.log("GitHub 更新成功！");
    }
  }
);
