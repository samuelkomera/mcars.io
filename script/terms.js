$windowHeight=$(window).height();
$windowWidth=$(window).width();
// $section=$('section').height();
$footer=$('footer').height();
$header=$('header').height();

$content=$('#content').height();

$row1=$('.row-1').height();
if($windowWidth > 900){
    $('.block-content .section').height($content-$header-$header);
}

