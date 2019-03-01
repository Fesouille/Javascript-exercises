/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    var performOperation = function(operation) {
        // perform the operation
        switch(operation){
        	case "addition":
        		var x=document.getElementById("op-one").value;
        		var y=document.getElementById("op-two").value;
        		var sum=Number(x)+Number(y);
        		alert("("+x+"+"+y+")= "+sum);
            break;
        	case "substraction":
	        	var x=document.getElementById("op-one").value;
		        var y=document.getElementById("op-two").value;
		        var sub=Number(x)-Number(y);
		        alert("("+x+"-"+y+")= "+sub);
            break;
            case "multiplication":
                var x=document.getElementById("op-one").value;
                var y=document.getElementById("op-two").value;
                var prod=Number(x)*Number(y);
                alert("("+x+"*"+y+")= "+prod);
		    break;
            case "division":
                var x=document.getElementById("op-one").value;
                var y=document.getElementById("op-two").value;
                var div=Number(x)/Number(y);
                alert("("+x+"/"+y+")= "+div);
            break;
		    default: alert("Sorry, I screwed up :/");
        }
    };
    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
