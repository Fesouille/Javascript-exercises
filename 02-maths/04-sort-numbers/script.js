/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var x=document.getElementById("numbers").value;
    var y=x.split(',').map(Number);
    alert(y);
    var new_array=[];
    var index=y.length;
    
    document.getElementById("run").addEventListener("click", function() {
	    for(var i=0; i<index; i++){
		    var a=Math.min.apply(null,y);
		    new_array.push(a);
		    y.splice(y.indexOf(a),1);
    	}
    	alert(new_array);
    });

})();
