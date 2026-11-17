/* Exercise 10.8 - Complex animations: animate() */
$(function () {
    $("button").click(function () {
        /* Bước 2: chỉ animate thuộc tính left
        $("#box").animate({left: '495px'});

           Bước 3: animate cùng lúc 3 thuộc tính CSS: left, opacity, height */

        // Bước 4: nối nhiều animation, mỗi animation chạy sau khi animation trước kết thúc
        $("#box")
            .animate({
                left: '495px',
                opacity: '1',
                height: '50px'
            })
            .animate({top: '400px', opacity: '0.2'})
            .animate({height: '200px'}, 2000);
    });
});
