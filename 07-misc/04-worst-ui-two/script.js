/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
	var performOperation = function(operation) {
		
		var button_max=document.getElementById(operation).getAttribute("data-max");
		var button_min=document.getElementById(operation).getAttribute("data-min");
		var button_value=document.getElementById(operation).innerHTML;
		
		console.log(button_value);
		button_value++;
		console.log(button_value);
		document.getElementById(operation).innerHTML=pad2(button_value);
		
		if(button_value==parseInt(button_max)+1){
			document.getElementById(operation).innerHTML=button_min;
		}

		var value_one=document.getElementById("part-one").innerHTML;
		var value_two=document.getElementById("part-two").innerHTML;
		var value_three=document.getElementById("part-three").innerHTML;
		var value_four=document.getElementById("part-four").innerHTML;
		document.getElementById("target").innerHTML="+"+value_one+value_two+value_three+value_four;
	}

    Array.from(document.querySelectorAll("button")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);  
        });
    });
    
    function pad2(number) {
    	return (number < 10 ? '0' : '') + number;
	}
})();