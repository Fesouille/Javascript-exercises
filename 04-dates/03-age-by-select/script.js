/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
	var current_date=new Date();
	var birth_date= new Date();
	var age;

	document.getElementById("run").addEventListener("click", function() {
		var birth_day=document.getElementById("dob-day").value;
		var birth_month=document.getElementById("dob-month").value;
		var birth_year=document.getElementById("dob-year").value;

		birth_date.setFullYear(birth_year);
		birth_date.setMonth(birth_month);
		birth_date.setDate(birth_day);

		if (current_date.getFullYear()>birth_date.getFullYear()){
			if((current_date.getMonth()==birth_date.getMonth() && current_date.getDate()>=birth_date.getDate())){
				
				age=current_date.getFullYear()-birth_date.getFullYear();

				if(age>1){
					if(current_date.getDate()==birth_date.getDate()){
						alert("Vous avez "+age+" ans. Bon anniversaire !");
					}
					else{
						alert("Vous avez "+age+" ans.");
					}
				}
				else{
					if(current_date.getDate()==birth_date.getDate()){
						alert("Vous avez "+age+" an. Bon anniversaire !");
					}
					else{
						alert("Vous avez "+age+" an.");
					}
				}
			}
			else if(current_date.getMonth()>birth_date.getMonth()){

				age=current_date.getFullYear()-birth_date.getFullYear();

				if(age>1){
					alert("Vous avez "+age+" ans.");
				}
				else{
					alert("Vous avez "+age+" an.");
				}
			}
			else{
				age=(current_date.getFullYear()-birth_date.getFullYear())-1;
				
				if(age>1){
					alert("Vous avez "+age+" ans.");
				}
				else{
					alert("Vous avez "+age+" an.");
				}	
			}
		}
		else{
			alert("Vous avez moins d'un an. Revenez plus tard");
		}
		console.log(age);
		console.log(birth_date, current_date);
	})
})();
