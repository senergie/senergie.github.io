/*------------------
.		MENU
------------------*/
jQuery('#language').click(function(e) {
	var path = location.origin + location.pathname;
	var lang = document.getElementsByTagName("html")[0].getAttribute("lang");
	if (lang == "en"){
		location.href = "/fr.html";
	} else {
		location.href = "/";
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
