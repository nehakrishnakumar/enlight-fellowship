function Table() {
	var completions = require('./completions.json');
	var tr, td;
	tbody = matchData.querySelector('tbody');
	for (var i = 0; i < completions.length; i++) {
		tr = tbody.insertRow(tbody.rows.length);
		td = tr.insertCell(tr.cells.length);
       		td.innerHTML = completions[i].name;
       		td = tr.insertCell(tr.cells.length);
       		td.innerHTML = completions[i].username;
       		td = tr.insertCell(tr.cells.length);
       		td.innerHTML = completions[i].milestones;
       		td = tr.insertCell(tr.cells.length);
   
	 }




}
