console.log("here")

var msg = "Hover over an image below.";



	
$('img').mouseover(function(e){
			$('#image').css("background-image",'url("'+this.src+'")');	 	
			$('#image').css("overflow",'auto');
			$('#image').html(this.alt);
			console.log(e);

		})
	

		$('img').focus(function(e) {
			$('#image').css('background-image', 'url("'+this.src+'")');	
			$('#image').html(this.alt);
 	
		 console.log(e);
	 })

	 $('img').mouseleave(function() {
		$('#image').css('background-image', 'url(" ")');
		$('#image').html(msg);
	 })

	 $('img').blur(function() {
		$('#image').css('background-image', 'url(" ")');
		$('#image').html(msg);
	 })
	
	
