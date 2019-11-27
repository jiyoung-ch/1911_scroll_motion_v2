$(document).ready(function () {
    //브라우저가 익스인 경우 boolean을 반환 하는 함수
    function isIE() {
        ua = navigator.userAgent;
        // MSIE는 기존 브라우저를 감지하는데 사용되고 Trident는 최신 브라우저를 사용하는데 사용
        var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

        return is_ie;
    }

    if (isIE()) {
        $('body').addClass('is-ie');
    } else {
        $('body').removeClass('is-ie');
    }

    //열리자마자 텍스트 모션 활성화
    (function () {
        $("#wrap").find(".section1").find(".title_animate").find("span").css({
            "top": 0,
            "opacity": 1
        });
    })();

    //전역변수 설정
    var pos1 = $("#wrap").find(".section").eq(0).offset().top;
    var pos2 = $("#wrap").find(".section").eq(1).offset().top;
    var pos3 = $("#wrap").find(".section").eq(2).offset().top;
    var pos4 = $("#wrap").find(".section").eq(3).offset().top;
    var pos5 = $("#wrap").find(".section").eq(4).offset().top;
    var pos6 = $("#wrap").find(".section").eq(5).offset().top;

    //브라우저 스크롤
    $(window).on("scroll", function () {
        var scroll = $(this).scrollTop();

        if (scroll >= pos1 - 400 && scroll < pos2 - 400) {
            $("#wrap").find(".section1").find(".title_animate").find("span:even").stop().animate({
                now: 0
            }, {
                duration: 500,
                step: function (now) {
                    $(this).css({
                        transform: 'translateY(' + now + '%)'
                    });
                }
            });
        } else {
            $("#wrap").find(".section1").find(".title_animate").find("span:even").stop().animate({
                now: 50
            }, {
                duration: 500,
                step: function (now) {
                    $(this).css({
                        transform: 'translateY(' + now + '%)'
                    });
                }
            });
        }

        if (scroll >= pos2 - 600 && scroll < pos3 - 200) {
            $(".section2").find(".half.first .animate_txt").css({
                "transform": "translate(0, 0)",
                "opacity": 1
            });

            $(".section2").find(".img_bg").addClass("on");
        }

        if (scroll >= pos2 + 200) {
            $(".section2").find(".half.last .animate_txt").css({
                "transform": "translate(0, 0)",
                "opacity": 1
            });
            $(".section2").find(".half.last .animate_btn").addClass("on");
        }

        //슬라이드
        var cnt = 0;
        var preCnt = 0;
        var imgBg = $(".img_group").find(".img_bg");
        var imgKeynote = $(".img_group").find(".keynote");
        var length = imgBg.length;

        $("#arrowBtn").find(".btn").on("click",function(e){
            e.preventDefault();

            preCnt = cnt;
            if( $(this).is(".btn_next") ){
                cnt++;
                if(cnt >= length){
                    cnt = 0;
                };
                next();
            }else{
                cnt--;

                if(cnt < 0){
                    cnt = length-1;
                };
                prev();
            };
            keynote();
        });

        function next() {
            imgBg.eq(preCnt).stop().animate({left:"-100%"},500,function(){
                $(this).css("left","100%");
            });

            imgBg.eq(cnt).stop().animate({left:"0"},500).addClass("on").siblings().removeClass("on");
        }

        function prev() {
            imgBg.eq(cnt).css("left",'-100%').stop().animate({left:"0"},500).addClass("on").siblings().removeClass("on");
            imgBg.eq(preCnt).stop().animate({left:"100%"},500);
        }

        function keynote() {
            imgKeynote.removeClass("on");
            imgKeynote.eq(cnt).addClass("on").siblings().removeClass("on");
        }

        if (scroll >= pos3 - 500 && scroll < pos4 - 300) {
            $(".section3").find(".mini").css({
                "transform": "translateY(0)",
                "opacity": 1
            });
            $(".section3").find(".title_animate span").css({
                "top": 0,
                "opacity": 1
            });
            $(".section3").find(".img_bg.first").addClass("on");

            if (scroll >= pos3 - 50) {
                $(".section3").find(".title_animate").find("span:even").stop().animate({
                    now: 50
                }, {
                    step: function (now) {
                        $(this).css({
                            transform: 'translateY(' + now + '%)'
                        });
                    },
                    duration: 1000
                });

                $(".section3").find(".img_bg.first").find(".keynote").addClass("on");
            }
        }
        if (scroll >= pos4 - 500) {
            $(".section4").find(".title_animate").find("span").css({
                "opacity": 1
            });
            $(".section4").find(".animate_txt").css({
                "transform": "translate(0, 0)",
                "opacity": 1
            });
            $(".section4").find(".animate_btn").addClass("on");
        }
        if(scroll>=pos5-800) {
            $(".section5").find(".icon_list li").css({
                "opacity": 1
            });
        }

        if(scroll>=pos6-700) {
            $(".section6").find(".social li").css({
                "transform": "translateY(0)",
                "opacity": 1
            });
        }
    });


});

