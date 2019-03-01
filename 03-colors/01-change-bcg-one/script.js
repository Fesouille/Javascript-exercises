/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

	var performOperation = function(operation) {
		//perform the color change
		switch(operation){
			case "red":
				document.body.style.backgroundColor = "#B10000";
			break;

			case 'green':
				document.body.style.backgroundColor = "#009803";
			break;

			case 'yellow':
				document.body.style.backgroundColor = "#B0A800";
			break;

			case 'blue':
				document.body.style.backgroundColor = "#203A91";
			break;
		}
	};

	Array.from(document.querySelectorAll("button.color")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });

})();
