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


	// const apiEndpoint = 'http://spreadsheet.glitch.me/?key=1c448_yKoiWrK6sf4cHVYv-KV29bzCOQO7EJlVDxDzgM';
	//
	// let header = new Headers({
	// 	'Access-Control-Allow-Origin':'*'
	// });
	//
	// let sentData={
	// 	method: 'GET',
	// 	mode: 'no-cors',
	// 	header: header
	// };
	//
	// fetch(apiEndpoint, sentData)
	// 	.then(function(response) {
	// 		if (!response.ok) {
	// 			console.log(response.statusText);
	// 			throw Error(response.statusText);
	// 		}
	// 		return response;
	// 	}).then(function(response) {
	// 		console.log(response);
	// 		var tableOptions = {
	// 			"data": response.data,
	// 			"pagination": 10,
	// 			"tableDiv": "#siteTable",
	// 			"filterDiv": "#siteTableFilter",
	// 			"templateID": "tableTemplate"
	// 		}
	// 		Sheetsee.makeTable(tableOptions)
	// 		Sheetsee.initiateTableFilter(tableOptions)
	//
	// 	});
	window.addEventListener('DOMContentLoaded', init);


});
