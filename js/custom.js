$(document).ready(function () {
    /* Sample function that returns boolean in case the browser is Internet Explorer*/
    //브라우저가 익스인 경우 boolean을 반환 하는 샘플 함수
    function isIE() {
        ua = navigator.userAgent;
        /* MSIE used to detect old browsers and Trident used to newer ones*/
        // MSIE는 기존 브라우저를 감지하는데 사용되고 Trident는 최신 브라우저를 사용하는데 사용
        var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

        return is_ie;
    }
    /* Create an alert to show if the browser is IE or not */
    if (isIE()){
        $('body').addClass('is-ie');
    }else{
        $('body').removeClass('is-ie');
    }

    // if (is.ie()) {
    //     $('body').addClass('.is-ie');
    // };



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
    //var pos5 = $("#wrap").find(".section").eq(4).offset().top;

    //브라우저 스크롤
    $(window).on("scroll", function () {
        var scroll = $(this).scrollTop();

        if (scroll >= pos1 - 400 && scroll < pos2 - 400) {
            $("#wrap").find(".section1").find(".title_animate").find("span:even").stop().animate({
                now: 0
            }, {
                duration: 1000,
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
                duration: 1000,
                step: function (now) {
                    $(this).css({
                        transform: 'translateY(' + now + '%)'
                    });
                }
            });
        }

        $(".section2").find(".half.first .animate_txt").removeClass("on");
        $(".section2").find(".img_bg").removeClass("on");
        if (scroll >= pos2 - 600 && scroll < pos3 - 200) {
            $(".section2").find(".half.first .animate_txt").addClass("on");
            $(".section2").find(".img_bg").addClass("on");
        }

        $(".section2").find(".half.last .animate_txt").removeClass("on");
        $(".section2").find(".half.last .animate_btn").removeClass("on");
        $(".section3").find(".keynote").removeClass("on");

        if (scroll >= pos2 + 200) {
            $(".section2").find(".half.last .animate_txt").addClass("on");
            $(".section2").find(".half.last .animate_btn").addClass("on");
        }

        $(".section3").removeClass("on");
        if (scroll >= pos3 - 500 && scroll < pos4 - 300) {
            $(".section3").addClass("on");

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

                $(".section3").find(".keynote").addClass("on");
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
        // if(scroll>=pos5-500) {

        // }
    });


});