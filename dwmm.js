document.addEventListener('DOMContentLoaded', function() {


	var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1c448_yKoiWrK6sf4cHVYv-KV29bzCOQO7EJlVDxDzgM/pubhtml';

	function init () {
		Tabletop.init({
			key: publicSpreadsheetUrl,
			callback: showInfo,
			simpleSheet: true
		});
	}

	function showInfo(data, tabletop) {
		// alert('Successfully processed!');
		var tableOptions = {
			"data": data,
			"pagination": 10,
			"tableDiv": "#siteTable",
			"filterDiv": "#siteTableFilter",
			"templateID": "tableTemplate"
		}
		Sheetsee.makeTable(tableOptions)
		Sheetsee.initiateTableFilter(tableOptions)
		console.log(data);
	}

	window.addEventListener('DOMContentLoaded', init);


});
