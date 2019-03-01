/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
		var col = document.getElementById("color").value;

		switch(col){
			case "red":
				col = "#B10000";
			break;

			case 'green':
				col = "#009803";
			break;

			case 'yellow':
				col = "#B0A800";
			break;

			case 'blue':
				col = "#203A91";
			break;
		}

	  	document.body.style.backgroundColor = col;
    });



})();
