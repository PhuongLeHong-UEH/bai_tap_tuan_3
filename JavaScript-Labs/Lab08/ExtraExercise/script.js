/* Extra Exercise (file exercise.html trong bộ Lab 08)
   Thay các danh sách HTML viết tay bằng lời gọi hàm, dữ liệu lấy từ mảng trong ../js/travel-data.js */

// Danh sách châu lục (mảng chuỗi continents)
function outputContinents() {
    var html = "";
    for (var i = 0; i < continents.length; i++) {
        html += '<li class="list-group-item"><a href="#">' + continents[i] + '</a></li>';
    }
    return html;
}

// Danh sách quốc gia (mảng chuỗi countries); quốc gia đang chọn được tô sáng (active) và không có link
function outputCountries(selected) {
    var html = "";
    for (var i = 0; i < countries.length; i++) {
        if (countries[i] === selected) {
            html += '<li class="list-group-item active">' + countries[i] + '</li>';
        } else {
            html += '<li class="list-group-item"><a href="#">' + countries[i] + '</a></li>';
        }
    }
    return html;
}

// Một bài viết (một đối tượng trong mảng posts) -> một khối HTML
function outputPost(post) {
    var html = '<div class="row">';
    html += '<div class="col-md-2">';
    html += '<a href="#" onclick="return false;"><img src="../images/travel/' + post.thumb + '" alt="' + post.title + '" class="img-thumbnail"/></a>';
    html += '</div>';
    html += '<div class="col-md-10">';
    html += '<h2>' + post.title + '</h2>';
    html += '<div class="details">Posted by ' + post.user + ' <span class="pull-right">' + post.postdate + '</span></div>';
    html += '<p class="excerpt">' + post.excerpt + '</p>';
    html += '<p><a href="#" class="btn btn-primary btn-sm" onclick="return false;">Read more</a></p>';
    html += '</div>';
    html += '</div>';
    return html;
}

// Duyệt mảng posts, mỗi bài viết cách nhau bằng đường kẻ <hr/>
function outputPosts() {
    var html = "";
    for (var i = 0; i < posts.length; i++) {
        html += outputPost(posts[i]);
        if (i < posts.length - 1) {
            html += "<hr/>";
        }
    }
    return html;
}

// Thanh phân trang: current là trang đang xem, total là tổng số trang
function outputPagination(current, total) {
    var html = '<ul class="pagination">';
    html += '<li><a href="#">&laquo;</a></li>';
    for (var page = 1; page <= total; page++) {
        if (page === current) {
            html += '<li class="active"><a href="#">' + page + '</a></li>';
        } else {
            html += '<li><a href="#">' + page + '</a></li>';
        }
    }
    html += '<li><a href="#">&raquo;</a></li>';
    html += '</ul>';
    return html;
}
