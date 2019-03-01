/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

	//Creates an array made of each letters of the innerHTML as element
    var text=document.getElementById("target").innerHTML.split("");
    //The delete the current innerHTML (before creating the new one)
    document.getElementById("target").innerHTML="";
	var i=0;
	seconds=random_time_interval();
	var timeout=setTimeout(print_letter, seconds);	
	
	//Creates a span element for each letter, and insert it in the HTML
    function print_letter(){
    	var span=document.createElement("span");
    	document.getElementById("target").appendChild(span);
    	span.innerHTML=text[i];
    	i++;
    	console.log(seconds, text[i-1]);
		seconds=random_time_interval();	
    	timeout=setTimeout(print_letter, seconds);	
    	if(i==text.length){
    		clearTimeout(timeout);
    	}
    }

    function random_time_interval(){
    	return Math.floor((Math.random()*1000));
    }
    
})();
