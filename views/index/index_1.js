// index_1.js
// add a bullet browser side

;(function () {
	var otherOnload = window.onload
	window.onload = function webfillerReady() {

		var fragment = 'listentry'
		var data = WF.render({}, fragment)
		console.log('data(' + data + ')')
		if (!data) alert('Fragment not found:' + fragment)

		var tag = document.getElementById('list')
		if (!tag) alert('document element with list id missing')

		if (tag && data) {
			var temp = document.createElement('div')
			temp.innerHTML = data.trim()
			temp = temp.firstChild
			tag.appendChild(temp)
		}

		if (otherOnload) otherOnload()
	}
})()