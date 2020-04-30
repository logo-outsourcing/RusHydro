'use strict';

//test question
var questions = {
    1: 2,
    2: 1,
    3: 2,
    4: 4,
    5: 3,
    6: 1,
    7: 1,
    8: 2,
    9: 3,
    10: 4,
    11: 3,
    12: 3,
};
var results = [];

function answer(questionNumber, answerValue) {
    $("#explanations-" + questionNumber).addClass("interactive__info--open");

    $("#picture-" + questionNumber).attr('src', 'img/test/changed' + questionNumber + '.png');

    if (results[questionNumber] !== undefined) {

        return;
    } else {
        $("#description-" + questionNumber + "-option-" + answerValue).addClass("interactive__info--open");
    }
    let result;
    if (questions[questionNumber] === answerValue) {
        result = 1;
    } else {
        result = 0;
    }
    let selector = '#question-' + questionNumber + '-option-' + answerValue;
    if (result === 1) {
        $(selector).addClass('interactive__button--true interactive__button--check')
    } else {
        $(selector).addClass('interactive__button--false interactive__button--wron')
    }
    results[questionNumber] = result;

};

function size(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

//sum of correct answers
function getResults() {
    let summary = 0;
    results.map(function (value, key) {
        summary += value;
    });
    if (summary <= 3) {
        $("#result-1").addClass("interactive__info--open");
    } else if (summary <= 6) {
        $("#result-2").addClass("interactive__info--open");
    }
    else if (summary <= 9) {
        $("#result-3").addClass("interactive__info--open");
    }
    else if (summary <= 12) {
        $("#result-4").addClass("interactive__info--open");
    }

    $('.interactive__result--number').text(summary);
}

$(document).ready(function () {

    // setTimeout(function () {
    //     $('.container-fluid').addClass('loaded');
    // }, 1000);
    // setTimeout(function () {
    //     $('.circle').hide();
    // }, 1000);
    // setTimeout(function () {
    //     $("#preloader").removeClass('preload__animate');
    // }, 2000);
    setTimeout(function () {
        $("#preloader").addClass('preload__animate');
        setTimeout(function () {

            $("#preloader").addClass('preload__hidden');
            $(".container-fluid").addClass('preload__hidden');

        }, 1000);
    }, 3000);
    setTimeout(function () {
        document.querySelector(".header__film--fragment").setAttribute("src", "https://logo-outsourcing.github.io/Hydro/video/saver.mp4");
    }, 2900);

    //header video
    // setTimeout(function () {
    //     $('.header__film').addClass('header__film--visible');
    //     $('.header__video').addClass('header__video--small');
    //     $('.header').addClass('header__block');
    // }, 5000);
    $('.header__film').click(function () {
        $('.header__film--open').addClass('header__film--play');
        var film = " <iframe class=\"header__iframe\"  src=\"https://www.youtube.com/embed/hEOD_4Cf1ao?controls=0&autoplay=1\"\n" +
            "                        frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n" +
            "                        allowfullscreen></iframe>";
        $('.header__film--wrap').html(film);
    });
    $('.header__film--mobile').click(function () {
        $('.header__film--small').addClass('header__film--play');
        var film = " <iframe class=\"header__iframe\"  src=\"https://www.youtube.com/embed/hEOD_4Cf1ao?controls=0&autoplay=1\"\n" +
            "                        frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n" +
            "                        allowfullscreen></iframe>";
        $('.header__film--wrap').html(film);
    });
    $('.header__film--close').on("click", function (e) {
        e.preventDefault();
        $('.header__film--wrap').html("");
        $('.header__film--open').removeClass('header__film--play');
        $('.header__film--small').removeClass('header__film--play');
    });
    var bLazy = new Blazy();

    //Animation scroll

    $('.header__navigation--scroll[href^="#"]').click(function () {
        $('.header__box').toggleClass('header__box--open');
        $('.header__open').removeClass('header__hidden');
        $('.header__close').removeClass('header__visible');
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false;
    });
    $('.header__navigation--test').click(function () {
        $('.header__box').toggleClass('header__box--open');
        $('.header__open').removeClass('header__hidden');
        $('.header__close').removeClass('header__visible');
    });
    //Open gallery

    $("a.single_image").fancybox();
    $("a.zoom").fancybox({
        buttons: [
            "close",
        ],
        touch: {
            vertical: true, // Allow to drag content vertically
            momentum: false // Continue movement after releasing mouse/touch when panning
        },
    });

// Open burger menu

    $('.header__open').click(function (e) {
        e.preventDefault();
        $('.header__box').toggleClass('header__box--open');
        $('.header__open').toggleClass('is-active');
    });

//Close burger menu


//Fixed menu when scrolling
    $(window).scroll(function () {

        if ($(window).scrollTop() > 1200) {
            if ($('.header__wrap').addClass('header__wrap--fixed')) {
            }
        } else {
            if ($('.header__wrap').removeClass('header__wrap--fixed')) {
            }
        }
    });

//Open more details

    $(".main__button--open").on("click", function () {
        $(".main__info--mobile").addClass('main__info--open');
        $(".main__button--open").toggleClass('main__button--hidden');
        $(".main__button--close").toggleClass('main__button--visible');
    });

//Close more details

    $(".main__button--close").on("click", function () {
        $(".main__info--mobile").removeClass('main__info--open');
        $(".main__button--open").toggleClass('main__button--hidden');
        $(".main__button--close").toggleClass('main__button--visible');
    });

//Slider
    $('.contemporary__slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        adaptiveHeight: true,
        swipe: false,
        slidesToShow: 1,
        slide: "div",
        dotsClass: ' slick-dots contemporary__dots',
        prevArrow: ".contemporary__prev",
        nextArrow: ".contemporary__next",
    });
    $('.contemporary__transformer--slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        adaptiveHeight: true,
        swipe: false,
        slidesToShow: 1,
        slide: "div",
        dotsClass: ' slick-dots contemporary__dots',
        prevArrow: ".contemporary__transformer--prev",
        nextArrow: ".contemporary__transformer--next",
    });
    $(".modal").each(function () {
        $(this).wrap('<div class="overlay"></div>')
    });
//open modal test

    $(".open-modal").on('click', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation;

        var $this = $(this),
            modal = $($this).data("modal");

        $(modal).parents(".overlay").addClass("open");
        setTimeout(function () {
            $(modal).addClass("open");
        }, 350);

        $(document).on('click', function (e) {
            var target = $(e.target);

            if ($(target).hasClass("overlay")) {
                $(target).find(".modal").each(function () {
                    $(this).removeClass("open");
                });
                setTimeout(function () {
                    $(target).removeClass("open");
                }, 350);
            }

        });

    });

    $(".close-modal").on('click', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation;

        var $this = $(this),
            modal = $($this).data("modal");

        $(modal).removeClass("open");
        setTimeout(function () {
            $(modal).parents(".overlay").removeClass("open");
        }, 350);

    });


    $(".interactive__farther").click(function () {
        var question = $(this).attr('data-src');
        if (question < 13) {
            var current = '#question_' + question;
            var next = '#question_' + (parseInt(question) + 1);
            $(current).addClass('interactive__item--hidden');
            $(next).removeClass('interactive__item--hidden');
            setTimeout(function () {
                $('.overlay').scrollTop(0);
            }, 100);
        }
    });
});