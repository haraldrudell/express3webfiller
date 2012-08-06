// index_2.js
;(function () {

	var isNode = typeof module == 'object' && !!module.exports
	if (isNode) WF = require('webfiller').WF

	// declare some custom dual-side JavaScript
	WF.functions.myfunction = function myfunction(params) {

		// add red class to the tag
		var t = this.getTagClone()
		if (t.classes.indexOf('red') == -1) t.classes.push('red')
		this.printTag(t)

		// output present element content
		this.print(this.content)

		// append out own stuff
		this.print(isNode ? 'on the server' : 'in the browser')
		this.content = null
	}
})()