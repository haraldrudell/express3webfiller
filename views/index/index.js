// index.js

exports.getHandler = getHandler

// render the index as the site's homepage'
function getHandler(defaults, view) {
	return function renderIndex(req, res) {
		res.render('index', {
			title: 'Webfiller on Express 3',
			bindings: {
				'': { // insert at beginning of html document
					fragment: 'header', // the header fragment
				},
				h1: {
					append: 'title',
				},
				'#list': {
					fragment: 'listentry',
				},
			}
		})
	}
}

// server fragments
exports.fragments = {
	header: { // fragment name 'header', in ./header.html
		title: 'title',	// for all title elements, insert the title data field
	}
}

// front-end and server-side fragments
exports.publicFragments = {
	listentry: {	// fragment name listentry, in './listentry.html'
		li: [	// for all li elements
			{
				addClass: 'red'	// add the red class
			},
			{
				myfunction: 5,	// execute the custom 'myfunction'
				// my function is declared as dual-side JavaScript
				// in './index_2.js'
			},
		],
	},
}