/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        var x=document.getElementById("op-one").value;
        var y=document.getElementById("op-two").value;
        var sum=Number(x)+Number(y);
        alert("("+x+"+"+y+")= ... "+sum);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        var x=document.getElementById("op-one").value;
        var y=document.getElementById("op-two").value;
        var sub=Number(x)-Number(y);
        alert("("+x+"-"+y+")= ... "+sub);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        var x=document.getElementById("op-one").value;
        var y=document.getElementById("op-two").value;
        var prod=Number(x)*Number(y);
        alert("("+x+"*"+y+")= ... "+prod);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        var x=document.getElementById("op-one").value;
        var y=document.getElementById("op-two").value;
        var div=Number(x)/Number(y);
        alert("("+x+"/"+y+")= ... "+div);
    });
})();
