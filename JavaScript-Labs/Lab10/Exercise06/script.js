/* Exercise 10.6 - Simple jQuery animation */
$(function () {
    // Bước 2: hiện dần ảnh trong 1000 mili giây
    $("#btnFadeIn").click(function () {
        $("figure").fadeIn(1000);
    });

    // Bước 3: mờ dần rồi ẩn trong 1000 mili giây
    $("#btnFadeOut").click(function () {
        $("figure").fadeOut(1000);
    });

    // Bước 4: tự chuyển qua lại giữa hiện/ẩn dạng mờ dần
    $("#btnFade").click(function () {
        $("figure").fadeToggle(500);
    });

    // Bước 5: hiệu ứng trượt
    $("#btnSlideDown").click(function () {
        $("figure").slideDown("slow");
    });
    $("#btnSlideUp").click(function () {
        $("figure").slideUp("slow");
    });
    $("#btnSlide").click(function () {
        $("figure").slideToggle(2000);
    });
});
