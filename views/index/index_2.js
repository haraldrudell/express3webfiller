// index_2.js
;(function (isNode, WF) {

	// declare some custom dual-side JavaScript
	WF.functions.myfunction = function myfunction(params) {

		// output available element content
		this.print(this.content)
		// indicate that content has already been printed
		this.suppressContent()

		// append some cool text
		this.print(isNode ? 'on the server' : 'in the browser')
	}
})(typeof module == 'object' && !!module.exports, // isNode
typeof module == 'object' && !!module.exports ? require('webfiller').WF : WF) // WF