/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
	var input=document.querySelector("input");
    input.setAttribute("maxlength","10");
	input.addEventListener("input", function(){
		var word=input.value;
		document.getElementById("counter").innerHTML=word.length+"/10";
	})
})();
