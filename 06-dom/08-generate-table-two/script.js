/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var tab=document.createElement("table");

	for(var i=0;i<10;i++){
		var row=tab.insertRow(i);
		for(var y=0;y<10;y++){
			var col=row.insertCell(y).innerHTML=(y+1)*(i+1);
		}
	}
	document.getElementById("target").appendChild(tab);

})();
