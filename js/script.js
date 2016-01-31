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
			playerLocation = $("#hero").css("left");
			switch(e.which) {
				case 39:
					$("#hero").animate({ 
						left: "+=5%" 
					});
					console.log(playerLocation);
					break;
				case 37:
					$("#hero").animate({ 
						left: "-=5%" 
					});
					console.log(playerLocation);
					break;
				default:
					return;
			}
		});
	});
});

