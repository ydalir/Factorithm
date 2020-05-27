marked = require("marked");
fs = require("fs");

const markdown = fs.readFileSync("guide.md", "utf-8");

const page = `<!DOCTYPE html>
<head>
	<meta charset="UTF-8">
	<title>Factorithm - Guide</title>
	<link rel="stylesheet" type="text/css" href="guide.css">
</head>
<body>
<div class="content">
${marked(markdown)}
</div>
</body>`

fs.writeFile("guide.html", page, (err)=>{
	if (err) return console.log(err)
	console.log("File written");
})
