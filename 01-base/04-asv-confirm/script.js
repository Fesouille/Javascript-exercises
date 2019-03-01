/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
	
	while (questions()=="non"){
		alert("dommage");
	}

	alert("Merci!");

	function questions(){
		var age=prompt("Quel est ton âge?");
		var sex=prompt("Quel est ton sex?");
		var city=prompt("Quel est ta ville?");
		alert("Tu as donc "+ age+", tu es de sexe "+sex+" et tu viens de "+city);
		var answer=prompt("Confirmes-tu? Réponds par 'oui' ou 'non'");
		return answer;
	}
	
})();
