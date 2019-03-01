/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 - improved by joseph@BeCode on 01/02/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
	//Creates an array made of the desired sizes of text
	var letter_size=create_size_range(5,110,70);
	//Creates an array made of each letters of the innerHTML as element
    var text_before_wave=document.getElementById("target").innerHTML.split("");
    //The delete the current innerHTML (before creating the new one)
    document.getElementById("target").innerHTML="";
	//This parameter will initiate the function for changing sizes of the letters
	var y=0;
	//Creates a span element for each letter, and changes its font-size according to the make_wave function
    for(var i=0;i<text_before_wave.length;i++){
    	var span=document.createElement("span");
    	document.getElementById("target").appendChild(span);
    	span.innerHTML=text_before_wave[i];
    	//console.log(span.innerHTML,letter_size[y]);
    	make_wave(span);	
    }

	function make_wave(letter){
    	letter.style.fontSize=letter_size[y];
    	y++;
    	/*When end of letter_size array reached, we reverse the array to go backwards.
    	We then set the index to 1 in order not reuse the last size used (which became index-0 after the reverse)
    	*/
    	if(y==letter_size.length){
    		letter_size.reverse();
    		y=1;
    	}
    }
    /*function to create an array of different sizes in PERCENT.
    - length is the length of the array
    - size is the start size of the array
    - increment is the value to increment the size
    ==> for example create_size_function(4,100,15) will return an array such as:
    	["100%","115%","130%","145%"]
    */
    function create_size_range(length, size, increment){
    	var ans=[];
    	for(var i=0;i<length;i++){
    		if(i!=0){
    			size+=increment;
    		}
    		ans.push(size+"%");
    	}
    	return ans;
    }

})();
