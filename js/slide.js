var fade;
function slide(i){
	fade = setInterval(function(){
		$('#banner_arrow a').attr('data-cur', i);
		$('.banner ul li').fadeOut(800);
		$('.banner ul li').eq(i).fadeIn(800);
		if(i<3){
			i++;
		}else{
			i=0;
		}
	}, 5000)
}
slide(1);

function toggle(i){
	$('#banner_arrow a').attr('data-cur', i);
	$('.banner ul li').fadeOut(800);
	$('.banner ul li').eq(i).fadeIn(800);
	slide(i+1);
}

$('.bx-next').click(function(){
	var next = parseInt($(this).attr('data-cur')) + 1 > 3 ? 0 : parseInt($(this).attr('data-cur')) + 1;
	clearInterval(fade);
	toggle(next);
})

$('.bx-prev').click(function(){
	var next = parseInt($(this).attr('data-cur')) - 1 < 0 ? 3 : parseInt($(this).attr('data-cur')) - 1;
	clearInterval(fade);
	toggle(next);
})

$('.banner').on('mouseover', function(){
	$('.banner_arrow').css('opacity','.5');
})

$('.banner').on('mouseout', function(){
	$('.banner_arrow').css('opacity','0');
})