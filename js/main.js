var myFullpage = new fullpage('#fullpage', {
    menu: '#menu',
    anchors: ['section1', 'section2', 'section3' , 'section4', 'section5','section6','section7'],
    scrollBar:true,
});






$(document).ready(function(){
	
    $("#skillbar_pho").animate({width:'93%'},1500);
    $("#skillbar_html").animate({width:'83%'},1500);
    $("#skillbar_css").animate({width:'83%'},1500);
    $("#skillbar_js").animate({width:'65%'},1500);
});
/*skill bar*/

new WOW().init();
/*페이지 내림과 동시에 애니메이션 작동 */


$('.slider_clock').EasySlides({
    'show': 15,
    'autoplay':true,
    })

    
function winOpen(){
    window.open('https://leehb0927.github.io/sfw_mobile/','popup','width=515, height=900, left=100, top=20')
}
/*mobile site vie 창 넓이 */