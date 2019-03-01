/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
	var img=document.querySelector("img");
	var normal_link=img.getAttribute("src");
    var hover_link=img.getAttribute("data-hover");
    
    img.addEventListener("mouseover",function(){
    	img.setAttribute("src",hover_link);
    })
    img.addEventListener("mouseout",function(){
    	img.setAttribute("src",normal_link);
    })
    

})();
