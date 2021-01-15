import React from "react";
import { Link } from "gatsby";
function Table() {
	return (
		var table = document.createElement("table");
		var tr = table.insertRow(-1);
		for (var i = 0; i < cols.length; i++) { 
                  
                // Create the table header th element 
                	var theader = document.createElement("th"); 
                	theader.innerHTML = cols[i]; 
                  
                // Append columnName to the table row 
                	tr.appendChild(theader); 
           	}
		// Adding the data to the table 
            	for (var i = 0; i < list.length; i++) { 
                  
                // Create a new row 
                	trow = table.insertRow(-1); 
                	for (var j = 0; j < cols.length; j++) { 
                    		var cell = trow.insertCell(-1); 
                      
                    // Inserting the cell at particular place 
                    		cell.innerHTML = list[i][cols[j]]; 
               		 } 
            } 
              
            // Add the newely created table containing json data 
            var el = document.getElementById("table"); 
            el.innerHTML = ""; 
            el.appendChild(table); 
	);
}
export default Table;
