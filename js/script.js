var userName = "";
var playerLocation;
$(".firstScreen").hide();
$(document).ready(function() {
	//Add event listener to get user's userName
	$("form").on("submit", function() {
		if ($("input").val() != '') {	
			userName = $("input").val();
			$("input").val('');
			$("form").hide(1000);
			$("#userName").text(userName + '.');
		}
		$(".firstScreen").fadeIn(2000);
		$(document).on("keydown", function(e) {
			switch(e.which) {
				case 39:
					playerLocation = $("#hero").offset().left;
					if (playerLocation >= $("div.firstScreen div").width()/2) {
						$(".firstScreen").animate({
							left: "-=5%"
						}, 250);
						$(".backgrounds").animate({
							left: "-=5%"
						}, 250);
					} else {
						$("#hero").animate({ 
							left: "+=5%" 
						}, 250);
					}
					break;
				case 37:
					swal("You must go forward in your quest");
					break;
				default:
					return;
			}
		});
	});
});

