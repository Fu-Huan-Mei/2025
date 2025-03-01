//（1）获取ws示例
var WebSocketServer = require('ws').Server
//（2）创建ws服务器
var wss = new WebSocketServer({
    port:3000
})
//（3）数组：保存客户端连接实例
var clients = []
//（4）连接：当客户端连接上WebSocket服务器时，
//就会触发connection事件，该客户端的实例就会传入该回调函数
wss.on('connection',function(client){
    //当前客户端连接的实例保存到数组里
    clients.push(client)
    console.log(`~~当前有${clients.length}个客户端在线`)

    //（1）客户端的websocket事件：message事件：给传入的客户端连接实例绑定1个message事件
    client.on('message',function(msg){
        console.log(`~~收到的消息为:${msg}`)
        //将收到的消息推送给其它所有的客户端
        for(var c of clients){
            //除了自身客户端以外的其它客户端都需要接收该客户端的消息
            if(c !== client){
                c.send(msg.toString())
            }
        }
    })

    //（2）客户端的websocket事件：close事件：关闭连接要删除客户端连接
    client.on('close',function(){
      var index = clients.indexOf(this)
      clients.splice(index,1)
      console.log(`~~关闭连接时显示当前有${clients.length}个客户端在线`)
    })
})
console.log("ws服务器已启动")