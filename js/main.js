$(document).ready(function(){
 $(".navbar a").click(function(){
 	$("body,html").animate({
 		scrollTop:$("#" + $(this).data('value')).offset().top
 	},1000)
 })
});


function doSomething() {
	console.log("do something with some tolk")
}