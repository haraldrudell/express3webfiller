// index.js

exports.getHandler = getHandler

// render the index as the site's homepage'
function getHandler(defaults, view) {
	return function renderIndex(req, res) {
		res.render('index', {
			title: 'Webfiller',
			bindings: {
				'': {
					fragment: 'header',
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

exports.fragments = {
	header: {
		title: 'title',
	}
}

exports.publicFragments = {
	listentry: {
		li: {
			myfunction: 5,
		}
	}
}