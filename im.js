function newMessage(msg, type) {
    var node = message(msg);
    if (type === "p2p")
        document.getElementById('p2p').appendChild = node;
    else
        document.getElementById('p2g').appendChild = node;
}

function message(msg) {
    return "<div class='row'><div class='col-1'>" +
        "<img src='./img/qq-a.png' alt='QQ' class='rounded-circle avatar'>" +
        "</div>" +
        "<div class='col-11'>" +
        "<div class='im-message'>" +
        "<p>" + msg + "</p>" +
        "</div>" +
        "</div>" +
        "</div>";
}

$(document).ready(function() {
    $("p2p").after(message("添加新元素"));
});