var socket;

if (window.WebSocket) {
    socket = new WebSocket("ws://139.224.251.185:9998/test")
    console.log("连接开启")

    //相当于连接开启

} else {
    alert("浏览器不支持websocket");
}