/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
	var sum;
	var mean;

    document.getElementById("run").addEventListener("click",function(){
       var numbers=[];
       for (i=1;i<=10;i++){
       	numbers.push(Math.floor(Math.random()*100));
       	document.getElementsByTagName("td")[i-1].innerHTML=numbers[i-1];
       }

       sum=numbers.reduce(function(total, number){
       	console.log(total, number);
       		return total+number;
       })
       mean=sum/numbers.length;

       document.getElementById("max").innerHTML=Math.max(...numbers);
       document.getElementById("min").innerHTML=Math.min(...numbers);
       document.getElementById("sum").innerHTML=sum;
       document.getElementById("average").innerHTML=mean;
    })

})();
