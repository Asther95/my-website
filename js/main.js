$(document).ready(function(){
 $(".navbar a").click(function(){
 	$("body,html").animate({
 		scrollTop:$("#" + $(this).data('value')).offset().top
 	},1000)
 })
});


function doSomething() {
	alert("hahahahah")
	console.log("do something with no that much tolk")

}