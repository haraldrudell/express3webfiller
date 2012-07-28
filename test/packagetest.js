// packagetest.js
// test javascript and json syntax

// http://nodejs.org/docs/latest/api/fs.html
var fs = require('fs')
// http://nodejs.org/api/path.html
var path = require('path')

module.exports = {
	testJsSyntax: testJsSyntax,
	parsePackageJson: parsePackageJson,
	parseGitignore: parseGitignore,
}

function testJsSyntax(test) {
	scanFolder(path.join(__dirname, '/../lib'))
	var routes = path.join(__dirname, '/../routes')
	if (getType(routes) === false) scanFolder(routes)
	test.done()

	function scanFolder(folder) {
		//console.log('folder', folder)
		fs.readdirSync(folder).forEach(function (jsFile) {
			fqpath = path.join(folder, jsFile)
			//console.log('fq', fqpath)
			if (getType(fqpath) === false) {
				// it is a folder
				scanFolder(fqpath)
			} else if (jsFile.indexOf('.js') != -1) {
				// if there is a syntax error, an exception will happen here
				var jsModule = require(fqpath)
				// { mailconstructor: [Function: constructor] }
				// console.log(jsModule)
				test.ok(!!jsModule)
			}
		})
	}
}
function parsePackageJson(test) {
	var data = fs.readFileSync(__dirname + '/../package.json')
	var obj = JSON.parse(data)
	test.ok(!!obj)
	test.done()
}
function parseGitignore(test) {
	var expected = '/node_modules'
	var data = fs.readFileSync(__dirname + '/../.gitignore', 'utf-8')
	
	test.ok(data.indexOf(expected) != -1, '.gitignore missing:' + expected)
	test.done()
}
// determine what path1 is
// return value:
// undefined: does not exist
// false: is a directory
// true: is a file
function getType(path1) {
	var result
	var stats
	try {
		stats = fs.statSync(path1)
	} catch (e) {
		var bad = true
		if (e instanceof Error && e.code == 'ENOENT') bad = false
		if (bad) {
			console.log('Exception for:', typeof path1, path1, path1 && path1.length)
			throw e
		}
	}
	if (stats) {
		if (stats.isFile()) result = true
		if (stats.isDirectory()) result = false
	}
	return result
}