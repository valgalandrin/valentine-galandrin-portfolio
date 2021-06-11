$(document).mousemove(function(event) 
{
  windowWidth = $(window).width();
  windowHeight = $(window).height();
  
  mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
  mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
  
  $('.accueil').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #FFC2A5, #f5cac3)');


});

$(document).ready(function()
{
	$('#projects').click(function()
	{
		$('.accueil').children().stop(true, true).slideUp("slow");
		$('.pp_tourne').css('display', 'none');  
		$('.accueil').stop(true, true).slideUp("slow");
    	$('.projects').css('display', 'grid');

	})

	$('#contact').click(function()
	{
		$('.accueil').children().stop(true, true).slideUp("slow");
		$('.pp_tourne').css('display', 'none');
		$('.accueil').stop(true, true).slideUp("slow");
    	$('.contact').css('display', 'grid');
	});
	$('#hobbies').click(function()
	{
		$('.accueil').children().stop(true, true).slideUp("slow");
		$('.pp_tourne').css('display', 'none');
		$('.accueil').stop(true, true).slideUp("slow");
    	$('.hobbies').css('display', 'grid');
	});

	
 	$('.projects, .contact, .hobbies').mousewheel(function(event, s) 
 	{
		if (event.deltaY > 0)
			$('.projects, .contact, .hobbies').css('display', 'none');
        	$('.accueil').slideDown('normal');
        	$('.accueil').children().slideDown('normal');
        	$('.pp_tourne').css('display', 'flex');
   	});

   	$('#404').mouseover(function()
   	{
   		$(this).attr('src', './assets/img/404hover.png')
   	})
   	$('#quizz').mouseover(function()
   	{
   		$(this).attr('src', './assets/img/quizzhover.png')
   	})
   	$('#puissance').mouseover(function()
   	{
   		$(this).attr('src', './assets/img/puissance4hover.png')
   	})
   	$('#local').mouseover(function()
   	{
   		$(this).attr('src', './assets/img/localhosthover.png')
   	})
   	$('#twitter').mouseover(function()
   	{
   		$(this).attr('src', './assets/img/twitterhover.png')
   	})
   	$('#meetic').mouseover(function()
   	{
   		$(this).attr('src', './assets/img/meetichover.png')
   	});


   	$('#404').mouseout(function()
   	{
   		$(this).attr('src', './assets/img/404.png')
   	})
   	$('#quizz').mouseout(function()
   	{
   		$(this).attr('src', './assets/img/quizz.png')
   	})
   	$('#puissance').mouseout(function()
   	{
   		$(this).attr('src', './assets/img/puissance4.png')
   	})
   	$('#local').mouseout(function()
   	{
   		$(this).attr('src', './assets/img/localhost.png')
   	})
   	$('#twitter').mouseout(function()
   	{
   		$(this).attr('src', './assets/img/twitter.png')
   	})
   	$('#meetic').mouseout(function()
   	{
   		$(this).attr('src', './assets/img/meetic.png')
   	});

   	$('.img_pres').click(function()
   	{
   		if ($(this).hasClass('.img_pres'))
   		{
   			$(this).attr('class', 'img_pres_big')
   			$(this).css('width', '60vw')
   			$(this).css('height', 'auto')
   			$(this).css('position', 'absolute')
   			$(this).css('z-index', '2')
   		}
   		else
   		{
   			$(this).css('width', '20vw')
   			$(this).css('height', 'auto')
   			$(this).css('position', 'relative')
   			$(this).css('z-index', '1')
   		}
   	})

   	$('.design').mouseover(function()
   	{
   		$('.design>img').attr('src', './assets/img/design.gif')
   	})
   	$('.jeux').mouseover(function()
   	{
   		$('.jeux>img').attr('src', './assets/img/videogames.gif')
   	})
   	$('.voyages').mouseover(function()
   	{
   		$('.voyages>img').attr('src', './assets/img/paperplane.gif')
   	})


   	$('.design').mouseout(function()
   	{
   		$('.design>img').attr('src', './assets/img/design.jpg')
   	})
   	$('.jeux').mouseout(function()
   	{
   		$('.jeux>img').attr('src', './assets/img/videogames.jpg')
   	})
   	$('.voyages').mouseout(function()
   	{
   		$('.voyages>img').attr('src', './assets/img/paperplane.jpg')
   	});


   	$('.title').click(function()
   	{
   		$(this).parent().css('filter', 'drop-shadow(15px 15px 0px #000000)');
   		for (let i=0; i<100; i++)
   		{
   			  $(this).parent().css('z-index', 10 + i);
   		}
   	})

});


$(document).ready(function(event)
{
	var mouseX = 0, mouseY = 0;
  	var xp = 0, yp = 0;
   
  	$('.contact').mousemove(function(e)
  	{
    	mouseX = e.pageX - 250;
    	mouseY = e.pageY - 250; 
    	xp += ((mouseX - xp) / 6);
    	yp += ((mouseY - yp) / 6);
    	if (xp <= ($(window).width() - 350) && xp > 0 )
    	{
    		$(".circle").css({left: xp +'px'});
    	}
    	if (yp <= ($(window).height()- 350) && yp >= 0)
    	{
    		$(".circle").css({top: yp +'px'});
    	}
  	});

  	$('.projects').mousemove(function(e)
  	{
    	mouseX = e.pageX - 30;
    	mouseY = e.pageY - 30; 
    	xp += ((mouseX - xp) / 6);
    	yp += ((mouseY - yp) / 6);
    	if (xp <= ($(window).width()) && xp > 0 )
    	{
    		$(".circle_projects").css({left: xp +'px'});
    	}
    	if (yp <= ($(window).height()) && yp >= 0)
    	{
    		$(".circle_projects").css({top: yp +'px'});
    	}
  	});
})
