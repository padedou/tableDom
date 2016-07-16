var TableDom = function(){
	var instance = {};

	var table;
	var trHead;
	var trHeadCompany;
	var trHeadContact;
	var trHeadCountry;
	var tableClass = "";
	var tdClass = "";
	var thClass = "";

	table = document.createElement("table");
	trHead = document.createElement("tr");

	table.appendChild(trHead);

	// Gets an array of strings, concats the strings using space inbetween
	function concatStringArray(_stringsArray){
		var resultString = "";

		for(var i = 0; i < _stringsArray.length - 1; i++){
			resultString += _stringsArray[i] + " ";
		}
		resultString += _stringsArray[_stringsArray.length - 1];

		return resultString;
	}

	instance.getDom = function(){
		return table;
	};

	// Gets an array of css classes
	// Sets this table element class
	instance.setTableClass = function(_classes){
		tableClass = concatStringArray(_classes);
		table.className = tableClass;
	};

	instance.setThClass = function(_classes){
		thClass = concatStringArray(_classes);
	};

	instance.setTdClass = function(_classes){
		tdClass = concatStringArray(_classes);
	};

	// Gets an array of strings
	instance.setHead = function(colTitles){
		for(var i = 0; i < colTitles.length; i++){
			var currentTitle = document.createElement("th");
			currentTitle.className = thClass;
			currentTitle.innerHTML = colTitles[i];
			trHead.appendChild(currentTitle);
		}
	};

	// Appends a row to the table's body
	// Gets an array
	instance.appendRowData = function(data){
		var currentRow = document.createElement("tr");

		for(var i = 0; i < data.length; i++){
			var currentCell = document.createElement("td");
			currentCell.className = tdClass;
			currentCell.innerHTML = data[i];
			currentRow.appendChild(currentCell);
		}

		table.appendChild(currentRow);
	};

	return instance;
};
