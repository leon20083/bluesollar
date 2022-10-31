$(function() {
	$(".toggle-mnu").click(function(e){
		$(this).toggleClass("on");
		$(".main-menu").slideToggle();
		e.preventDefault();
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


	if($(".section-2 .s2-content .services-button .button").hasClass('active')){
			$('.section-2 .s2-content .services-button .button').removeClass('off');
			
		};
	$(".section-2 .s2-content .services-button .button").click(function(e){
		e.preventDefault();
			let id_click = $(this).attr("id");
			//alert(id_click);
		$(".section-2 .s2-content .services-button .button").removeClass('active');
		$(this).addClass('active');
		let txt = $(this).text().trim().toLowerCase();
		//alert(txt)
		$(".section-2 .s2-item-wrap .s2-items").removeClass('active').addClass('off');
		$(".section-2 .s2-item-wrap ." + id_click).removeClass('off').addClass('active').animated("fadeInRight");
	});



	$(".section-3 .our-services .serv .serv-cont").equalHeights();


	$(".section-5").waypoint(function(){
		$(".section-5 .s5-content .project").each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.removeClass("project-off").addClass("project-on");
			}, 150*index);
		});
			
	}, {
		offset : "10%"
	});
	$(".owl-carousel").owlCarousel({
		loop: true,
		items: 1,
		nav: true,
		navText: ["<i class='fa fa-chevron-left' aria-hidden='true'></i>", "<i class='fa fa-chevron-right' aria-hidden='true'></i>"]
	});


	$(".clients").owlCarousel({
		loop: true,
		items: 4,
		nav: false,
		autoWidth: false
	});

	//section 9 viev more

	/*$(".section-9 .s9-item .s9-item-title a").click(function(e){
		e.preventDefault();
		$(".section-9 .s9-item .s9-item-title p.hidden").removeClass('hidden');
	})*/
	$('.section-9 .s9-item-left .s9-item-title a').on('click', function(e){
		e.preventDefault();
		if ($(".section-9 .s9-item-left .s9-item-title p:nth-child(3)").hasClass('hidden')){ // если класса нет
			$(".section-9 .s9-item-left .s9-item-title p:nth-child(3)").removeClass('hidden').animated("fadeInDown"); // добавляем класс
			console.log('First click'); // код для первого клика
		} else { // если есть
			$(".section-9 .s9-item-left .s9-item-title p:nth-child(3)").addClass('hidden'); // убираем класс
			console.log('Second click'); // код для второго клика
		}
	});
	$('.section-9 .s9-item-right .s9-item-title a').on('click', function(e){
		e.preventDefault();
		if ($(".section-9 .s9-item-right .s9-item-title p:nth-child(3)").hasClass('hidden')){ // если класса нет
			$(".section-9 .s9-item-right .s9-item-title p:nth-child(3)").removeClass('hidden').animated("fadeInDown"); // добавляем класс
			console.log('First click'); // код для первого клика
		} else { // если есть
			$(".section-9 .s9-item-right .s9-item-title p:nth-child(3)").addClass('hidden'); // убираем класс
			console.log('Second click'); // код для второго клика
		}
	});
	$(".section-3").waypoint(function(){
		$(".section-3 .our-services .serv-off").each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.removeClass("serv-off").addClass("serv-on");
			}, 150*index);
		});
			
	}, {
		offset : "10%"
	});

	$(".s-title").animated("zoomIn");
	$(".section-1 .s1-left").animated("zoomIn");
	$("div.price-container:nth-child(1)").animated("fadeInTopLeft");
	$("div.price-container:nth-child(2)").animated("zoomIn");
	$("div.price-container:nth-child(3)").animated("fadeInRight");
	$(".commercial > div:nth-child(2) > div:nth-child(1)").animated("fadeInRight");
	$(".s4-left").animated("zoomIn");

	$(".section-9").waypoint(function(){
		$(".s9-item-left").show(1000);
	});
	$(".section-9").waypoint(function(){
		$(".s9-item-right").show(1000);
	});
	
	let heightImg = $(".why-choose-us .layer .layer-1 .layer-1-2 img").height()
	$(window).resize(function(){
		let heightImg = $(".why-choose-us .layer .layer-1 .layer-1-2 img").height();
		$(".why-choose-us .layer .layer-1").height(heightImg);
	});

});
