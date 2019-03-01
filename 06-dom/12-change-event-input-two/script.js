/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
	var i=0;
    var input=document.querySelector("input");
    input.setAttribute("maxlength","10");
	input.addEventListener("input", function(){
		var word=input.value.split("");
		var y=0;
		for(var i=0;i<word.length;i++){
			if(!isNaN(word[i])){
				y++;
			}
		}

		if(word.length>=8 && y>1 ){
			document.getElementById("validity").innerHTML="Ok";
		}
		else{
			document.getElementById("validity").innerHTML="Pas ok";
		}
	})

})();
