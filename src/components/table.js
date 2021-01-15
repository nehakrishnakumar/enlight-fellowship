import React from "react";
//import { Link } from "gatsby";

 function Welcome() {
	return (
		<section className="max-w-lg">
			<h1 className="font-bold tracking-tight text-2xl my-8 text-gray-900">
				Completion Data for Cohort Projects
                        </h1>
			    <input type='button' onclick='createTable()'
    				value='Create Table from JSON data' />
    				<p id='showData'></p>
    				<p id='msg'></p>
		<script>
			function createTable() {
				var completions = require("./completions.json");
				var newcomptable = document.createElement("table");
				var divShowData; //container for the table
				var tr = table.insertRow(-1);
				var headers = [];
        			for (var i = 0; i < completions.length; i++) {
            				for (var key in completions[i]) {
                				if (headers.indexOf(key) === -1) {
                    					headers.push(key);
						}
          				}
        			}
				for (var i = 0; i < headers.length; i++) {
            				var th = document.createElement("th");
            				th.innerHTML = headers[i];
            				tr.appendChild(th);
        			}
				for (var i = 0; i < completions.length; i++) {
            				tr = newcomptable.insertRow(-1);
            				for (var j = 0; j < col.length; j++) {
                				var tabCell = tr.insertCell(-1);
                				tabCell.innerHTML = completions[i][headers[j]];
            				}
        			}
				divShowData = document.getElementById('showData');
        			divShowData.innerHTML = "";
        			divShowData.appendChild(newcomptable);
			}
		</script>
	</section>
	);

}
export default Welcome;
  
