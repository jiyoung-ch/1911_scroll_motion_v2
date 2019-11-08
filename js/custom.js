$(document).ready(function(){
    //열리자마자 텍스트 모션 활성화
    (function () {
		$("#wrap").find(".section1").find(".title_animate").find("span").css({"top": 0 ,"opacity": 1});
	})();

    //전역변수 설정
    var pos1 = $("#wrap").find(".section").eq(0).offset().top;
    var pos2 = $("#wrap").find(".section").eq(1).offset().top;
    var pos3 = $("#wrap").find(".section").eq(2).offset().top;
    var pos4 = $("#wrap").find(".section").eq(3).offset().top;
    //var pos5 = $("#wrap").find(".section").eq(4).offset().top;

    //브라우저 스크롤
    $(window).on("scroll",function(){
        var scroll = $(this).scrollTop();

        if(scroll>=pos1-400 && scroll<pos2-400) {
            $("#wrap").find(".section1").find(".title_animate").find("span:even").stop().animate({
                now : 0
            },{
                duration: 1000,
                step: function(now) {
                    $(this).css({ transform: 'translateY(' + now + '%)' });
                }
                //Animation complete.
                // complete: function(){
                //     $(this).css({transform: 'translateY(' + 0 + '%)' });
                //     console.log($(this));
                // }
            });
        } else {
            $("#wrap").find(".section1").find(".title_animate").find("span:even").stop().animate({
                now : 50
            },{
                duration: 1000,
                step: function(now) {
                    $(this).css({ transform: 'translateY(' + now + '%)' });
                }
                //Animation complete.
                // complete: function(){
                //     $(this).css({transform: 'translateY(' + 0 + '%)' });
                //     console.log($(this));
                // }
            });
        }

        $(".section2").find(".half.first .animate_txt").removeClass("on");
        $(".section2").find(".img_bg").removeClass("on");
        if(scroll>=pos2-600 && scroll<pos3-200) {
            $(".section2").find(".half.first .animate_txt").addClass("on");
            $(".section2").find(".img_bg").addClass("on");
        }

        $(".section2").find(".half.last .animate_txt").removeClass("on");
        $(".section2").find(".half.last .animate_btn").removeClass("on");
        $(".section3").find(".keynote").removeClass("on");

        if(scroll>=pos2+200) {
            $(".section2").find(".half.last .animate_txt").addClass("on");
            $(".section2").find(".half.last .animate_btn").addClass("on");
        }

        $(".section3").removeClass("on");
        if(scroll>=pos3-500 && scroll<pos4-300) {
            $(".section3").addClass("on");

            if(scroll>= pos3-50){
                $(".section3").find(".title_animate").find("span:even").stop().animate({
                    now : 50
                },{
                    step: function(now) {
                        $(this).css({ transform: 'translateY(' + now + '%)' });
                    },
                    duration: 1000
                });

                $(".section3").find(".keynote").addClass("on");
            }
        }
        if(scroll>=pos4-500) {
            $(".section4").find(".title_animate").find("span").css({"opacity": 1});
            $(".section4").find(".animate_txt").css({"transform": "translate(0, 0)", "opacity": 1});
            $(".section4").find(".animate_btn").addClass("on");
        }
        // if(scroll>=pos5-500) {

        // }
    });


});
