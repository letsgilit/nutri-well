(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow');
            } else {
                $('.fixed-top').removeClass('shadow');
            }
        } else {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow').css('top', -55);
            } else {
                $('.fixed-top').removeClass('shadow').css('top', 0);
            }
        } 
    });
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // vegetable carousel
    $(".vegetable-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });
    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });
    //main 검색기능
    $('#searchButton').on('click', function ()  {
        var queryValue = $('#query').val();
        if (queryValue === null || queryValue.trim() === '') {
               alert('검색어를 입력하세요');
               return;
        }
        sessionStorage.removeItem('nutrients');
        // 파라미터들을 객체(map)로 구성
        var params = {
            query: queryValue,
            page: 0,
            size: 12
        };
        // URLSearchParams 객체를 사용하여 파라미터를 URL 형식으로 변환
        var searchParams = new URLSearchParams(params);
        var url = '/search?' + searchParams.toString();
        location.href = url;
    });

    // 로그인 체크
    $(document).ready(function() {
        var loginError = /*[[${loginError != null ? loginError : false}]]*/ false;
        if (loginError) {
            alert("로그인이 필요합니다.");
            window.location.href = document.referrer; // 이전 페이지로 돌아감
        }
    });
    //검색 자동완성 *별로라서 안쓰는게 나을듯
//    $(document).ready(function() {
//        $("#query").on("input", function() {
//            let query = $(this).val();
//            if (query.length > 1) {
//                $.ajax({
//                    url: 'api/auto/search',
//                    type: 'GET',
//                    data: { query: query },
//                    success: function(data) {
//                        let suggestions = $("#suggestions");
//                        suggestions.empty();
//                        data.forEach(function(food) {
//                            suggestions.append('<div class="suggestion-item" data-query="' + food.name + '">' + food.name + '</div>');
//                        });
//                        // 새로 추가된 제안 항목에 클릭 이벤트 핸들러 바인딩
//                        $(".suggestion-item").on("click", function() {
//                            let selectedQuery = $(this).data("query");
//                            search(selectedQuery);
//                        });
//                    },
//                    error: function(error) {
//                        console.log("Error: ", error);
//                    }
//                });
//            } else {
//                $("#suggestions").empty();
//            }
//        });
//    });
//    function search(query){
//        var params = {
//            query: query,
//            page: 0,
//            size: 12
//        };
//        // URLSearchParams 객체를 사용하여 파라미터를 URL 형식으로 변환
//        var searchParams = new URLSearchParams(params);
//        var url = '/search?' + searchParams.toString();
//        location.href = url;
//    }
})(jQuery);

