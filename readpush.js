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
        console.log("链接到 Message Server Center");
        var subId = client.subscribe('sample.quequ.jstest', function(message) {
            if (message.body) {
                document.getElementById('console-area').innerHTML = message.body;
            } else
                console.log('收到空消息');
        });
    }, function() {
        console.log("网络错误，无法链接到 Message Server Center");
    });
}