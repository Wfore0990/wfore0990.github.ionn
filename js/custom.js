/*jshint devel:true */

function flyIt() {
	var viewHeight = $(window).height();
	console.log("success!");
    $('#name-e').velocity({rotateZ: "-20deg", translateX: "-6.5px", translateY: "-3px"},
    	{
    	duration: 800, 
    	easing: "spring"
	});
	setTimeout( function(){ 
		$('#name-i').velocity({rotateZ: "20deg", translateX: "5px", translateY: "-1px"},
	    	{
	    	duration: 500, 
	    	easing: "spring" }); }  , 1400 );

	setTimeout( function(){ 
		$('#title-d').velocity({rotateZ: "-180deg", translateY: "-13px", translateX: "-3px"},
	    	{
	    	duration: 1500, 
	    	easing: "spring" }); }  , 1000 );

	setTimeout( function(){ 
		$('#title-o').velocity({translateX: "-4px"},
	    	{
	    	duration: 1500, 
	    	easing: "spring" }); }  , 2000 );
	setTimeout( function(){ 
		$('#title-d-two').velocity({rotateZ: "-10deg", translateX: "-1px", translateY: "-2px"},
	    	{
	    	duration: 250, 
	    	easing: "easeIn" });
	    	$('#title-d-two').velocity("reverse"); }  , 2200 );

	setTimeout( function(){ 
		$('#title-d').velocity({translateY: -viewHeight},
	    	{
	    	duration: 2000, 
	    	easing: "easeOut" }); }  , 1200 );
}


$( document ).ready(function() {
	$("body").emailSpamProtection("email");
	setTimeout( function(){ 
    flyIt(); 
  }  , 2000 );
});

(function($) {
	$.fn.emailSpamProtection = function(className) {
		return $(this).find("." + className).each(function() {
			var $this = $(this);
			var s = $this.text().replace(" [at] ", "&#64;");
			$this.html("<a href=\"mailto:" + s + "\">" + s + "</a>");
		});
	};
})(jQuery);