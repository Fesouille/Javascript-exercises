/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var msg;
	var d = new Date();
	d.setHours(13);
	d.setMinutes(45);
	var h = d.getHours();
	var min =d.getMinutes();

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    
    if(h<=17){
    	if(h<=17 || min<30){
    		msg= "Bonjour";
    	}
    	else{
    		msg= "Bonsoir";
    	}
	}
	else {
		msg = "Bonsoir";
	}
	document.getElementById("target").innerHTML = msg;

})();
