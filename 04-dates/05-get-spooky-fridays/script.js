/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
	const monthNames = [" January", " February", " March", " April", " May", " June",
  " July", " August", " September", " October", " November", " December"];

    document.getElementById("run").addEventListener("click", function(){
    	var date=new Date();
    	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    	date.setFullYear(document.getElementById("year").value);
    	var year=date.getFullYear();
    	var months=[];
    	var month=date.getMonth();

    	for(var i=0;i<=11;i++){
    		date.setMonth(i);
    		date.setDate(13);

    		if(date.getDay()==5){
    			months.push(monthNames[date.getMonth(i)]);
    		}
    		console.log(months);
    	}
        
    	alert("En "+year+", les mois contenants un vendredi 13 sont: "+months);
    })
})();
