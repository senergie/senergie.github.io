/*------------------
.		MENU	
------------------*/
jQuery('#language').click(function(e) {
	var path = location.origin + location.pathname;
	var lang = document.getElementsByTagName("html")[0].getAttribute("lang");
	if (lang == "en"){
		location.href = path+"?lang=fr";
	} else {
		location.href = path+"?lang=en";
	}
});

/*------------------
.		TAB TRACKING	
------------------*/
(function ($) {
	// $('#myTab a').click(function (e) {
	// 	e.preventDefault()
	// 	$(this).tab('show')
	// 	try {
	// 		_gaq.push(['_trackEvent', 'solution', 'display tab', $(this).find(".caption h3").text(),, false]);

	// 	} catch (err) {
	// 		console.log("could not push to ga: "+err.message);
	// 	}
	// })
	$('.se-product-elements a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		console.log($(this).text().trim());
		try {
				_gaq.push(['_trackEvent', 'solution', 'display tab', $(this).text().trim(),, false]);

			} catch (err) {
				console.log("could not push to ga: "+err.message);
			}
	})

	$('.se-squad a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		console.log($(this).text().trim());
		try {
				_gaq.push(['_trackEvent', 'team', 'display tab', $(this).text().trim(),, false]);

			} catch (err) {
				console.log("could not push to ga: "+err.message);
			}
	})
}(jQuery));


/*------------------
.		TEAM	
------------------*/
(function ($) {
	$('.se-member').hover(
		function(){
			// fade in 
			try {
				_gaq.push(['_trackEvent', 'team', 'display caption', $(this).find(".caption h3").text(),, false]);

			} catch (err) {
				console.log("could not push to ga: "+err.message);
			}
			$(this).find('.caption').fadeIn(250);
		},
		function(){
			$(this).find('.caption').fadeOut(250); 
		}
		); 
}(jQuery));


/*------------------
.		CONTACT FORM	
------------------*/

function successSent() {
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var message = document.getElementById('message').value;

	var payload = {
		username: "Website",
		icon_url: "http://senergie.academicsfordevelopment.be/wp-content/uploads/2015/02/Logo-Senergie-leeuw.png",
		text: "_New website message:_ \n*Name:* "+name+"\n*Email:* "+email+"\n*Message:* "+message
	}
	console.log(payload);
	var slackResponse = new XMLHttpRequest();
	slackResponse.open("POST", "https://hooks.slack.com/services/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", true);
	slackResponse.send(JSON.stringify(payload));
}