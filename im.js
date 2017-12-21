$(document).ready(function() {});

/**
 *
 * @param msg the message
 * @type the box class
 *
 */
function appendMessage(msg, type, id) {
    var message = nodeInstance(msg);
    $(message).appendTo(type);
    var div = document.getElementById(id);
    var box = document.getElementById(id + "-box");
    box.scrollTop = div.scrollHeight;
}

function nodeInstance(msg) {
    return "<div class='row'><div class='col-1'>" +
        "<img src='./img/qq-a.png' alt='QQ' class='rounded-circle avatar'>" +
        "</div>" +
        "<div class='col-11'>" +
        "<div>" +
        "<span class='badge badge-light'>赵雨航 13:32:32 PM</span>" +
        "</div>" +
        "<div class='im-message'>" +
        "<p>" + msg + "</p>" +
        "</div>" +
        "</div>" +
        "</div>";
}



window.onload = function() {
    var header = {
        login: 'admin',
        passcode: 'admin'
    };
    init(header);
}

function init(header) {
    var url = "ws://localhost:61614/stomp";
    var client = Stomp.client(url);
    client.heartbeat.outgoing = 20000;
    client.heartbeat.incoming = 0;
    client.connect(header, function() {
        var subId = client.subscribe('sample.quequ.jstest', function(message) {
            if (message.body) {
                appendMessage(message.body, ".im-body-center-inner", "p2p");
            } else
                console.log('收到空消息');
        });
    }, function() {
        console.log("网络错误，无法链接到服务器");
    });
}