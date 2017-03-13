$(function(){
	$('.main-right .canaan').mouseenter(function(){
		$(this).find('.canaantop').css({'background':'#fff'});
		$(this).find('.candropdown').show();
	});
	$('.main-right .canaan').mouseleave(function(){
		$(this).find('.canaantop').css({
			'background':'#f2f2f2'
		});
		$(this).find('.candropdown').hide();
		
		
	});
	$('.top .main a').not('.candropdown a').mousemove(function(){
			$(this).css({'text-decoration':'underline',
						'color':'red'
		});
	});
	$('.top .main a').not('.candropdown a').mouseout(function(){
		$(this).css({'text-decoration':'none',
					'color':'#888'
		});
	});
	$('.candropdown li').mouseenter(function(){
			$(this).css({'background':'#ccc'}).siblings().css({'background':'#fff'});
		});
		
	$('.div3 .left-menu').mouseenter(function(){
		$(this).css({'background':'#eee'});
		$(this).find('span').css({'color':'gray'});
		//$('.div3 li').not($(this)).css({'background':'#fff'});
		
		$(this).find('.right').show();
		$('.div3 .right').not($(this).find('.right')).hide();
	});
	$('.div3 .left-menu').mouseleave(function(){
		$(this).css({'background':'#fff'});
		$(this).find('.right').hide();
		$(this).find('span').css({'color':'dimgray'});
	});
	//幻灯片
	//第一步
		$('.carousel .paging').show();
		$('.paging a:first').addClass('active');
		
		var imageWidth = $('.window').width();
		var imageSum = $('.image_reel img').size();
		var imageReelWidth = imageWidth*imageSum;
		
		$('.image_reel').css({'width':imageReelWidth});
		//第二步
		rotate = function(end){
			if(end){
				var triggerID = imageSum-1;
				var image_reelPosition = triggerID*imageWidth;
				
				$('.paging a').removeClass('active');
				$active.addClass('active');
				
				$('.paging a').removeClass('active');
				$active.addClass('active');
				
				$('.image_reel').animate({
					left:-image_reelPosition
				},500,function(){
					$(this).css({'left':'0px'});
				});
			}else{
				
				var triggerID = $active.attr('rel') - 1;
				var image_reelPosition = triggerID*imageWidth;
				
				$('.paging a').removeClass('active');
				$active.addClass('active');
				
				$('.image_reel').animate({
					left: -image_reelPosition
				},500);
			}
		};
		
		rotateSwitch = function(){
			play = setInterval(function(){
				
				$active = $('.paging a.active').next();
				rel = $('.paging a.active').attr('rel');
				//document.title=rel; //不要
				if(rel==3){
					$active = $('.paging a:first');
					end = true;
				}else{
					end=false;
				}
				rotate(end);
			},2000);
		};
		
		rotateSwitch();
		//第三步
		//on hover
		$(".image_reel a").hover(function(){
			clearInterval(play);
		},function(){
			rotateSwitch();
		});
		$('.paging a').click(function(){
			$active = $(this);
			clearInterval(play);
			rotate();
			rotateSwitch();
			return false;
		});
});
