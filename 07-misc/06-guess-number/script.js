/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var random=parseInt(Math.random()*100);
    var i=0;
    console.log(random);
    var guess=prompt("Choisissez un nombre entre 1 et 100");
    
    check(guess);

    function check(guess){
    	i++
    	if(guess==random){
    		if(i==1){
    			i=i+"er";
    		}
    		else{
    			i=i+"ème";
    		}
    		alert("Bravo! Vous avez réussi au "+i+" essai");
	    }
	    else if(guess<random){
	    	guess=prompt("Plus grand... Réessayez");
	    	check(guess);
	    }
	    else{
	    	guess=prompt("Plus petit... Réessayez");
	    	check(guess);
	    }
    }

})();
