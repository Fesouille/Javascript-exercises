/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click",function(){
    	var pass_one=document.getElementById("pass-one").value;
    	var pass_two=document.getElementById("pass-two").value;
    	var inputs=document.getElementsByTagName("input");
    	if(pass_one!=pass_two){
    		for(var i=0;i<inputs.length;i++){
    			inputs[i].style.borderColor="red";
    		}
    	}
    	else{
    		for(var i=0;i<inputs.length;i++){
    			inputs[i].style.borderColor="#5AD900";
    		}
  			console.log("User connected")
    	}
    })

})();
