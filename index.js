var ghpages = require("gh-pages");

ghpages.publish(
  "_book",
  {
    branch: "master",
    repo: "https://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@github.com/YolandaQingniu/YolandaQingniu.github.io.git"
  },
  function(err) {
    console.log("github更新" + err);
  }
);

ghpages.publish(
  "_book",
  {
    branch: "master",
    repo: "https://gitee.com/yolandaqingniu/sdk-doc.git"
  },
  function(err) {
    console.log("gitee更新" + err);
  }
);
