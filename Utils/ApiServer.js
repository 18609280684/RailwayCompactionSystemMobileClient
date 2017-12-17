/**
 * Created by Administrator on 2017/11/22.
 */
var ServiceApi = {
    socket: null,
    socketState: 0,
    sendTimerId: 0,

    socketInit: function() {
        if (ServiceApi.socket != null) return;
        var host = "192.168.0.35";
        // window.location.host;
        ServiceApi.socket = new WebSocket("ws://" + host + ":1224");
        ServiceApi.socket.onopen = function() {
            console.log("socket connected");
            ServiceApi.socketState = 1;
            ServiceApi.sendTimerId = window.setInterval(function() {
                if (ServiceApi.sendTaskList.length == 0) return;
                var $task = ServiceApi.sendTaskList.shift();
                var $request = $task.request;
                ServiceApi.socket.send(JSON.stringify($request));

                if ($task.callback && $task.callback instanceof Function) {
                    ServiceApi.replyTaskList[$request.seq] = $task;
                } else if ($task.interval && $task.interval > 0) {
                    window.setTimeout(function() {
                        $task.request.seq = ServiceApi.newSeq();
                        ServiceApi.sendTaskList.push($task);
                    }, $task.interval);
                }
            }, 10);
        };

        ServiceApi.socket.onmessage = function($evt) {
            var $reply = JSON.parse($evt.data);
            var $task = ServiceApi.replyTaskList[$reply.seq];

            if ($task.callback && $task.callback instanceof Function) {
                $task.callback($reply.seq, $reply.result, $reply.info, $reply.data);
            }

            if ($task.interval && $task.interval > 0) {
                window.setTimeout(function() {
                    $task.request.seq = ServiceApi.newSeq();
                    ServiceApi.sendTaskList.push($task);
                }, $task.interval);
            }

            delete ServiceApi.replyTaskList[$reply.seq];
        };

        ServiceApi.socket.onclose = function() {
            console.log("socket closed");
            ServiceApi.socketState = 0;
            ServiceApi.socket = null;
            window.clearInterval(ServiceApi.sendTimerId);
            window.setTimeout(function() {
                console.log("socket reconnect");
                ServiceApi.socketInit();
            }, 500);
        };
    },

    newSeq: function() {
        return (new Date().valueOf() * 1000 + parseInt(Math.random() * 1000)).toString()
    },

    replyTaskList: {},

    sendTaskList: [],

    request: function($action, $params, $callback, $interval) {
        ServiceApi.socketInit();
        var $request = {
            "seq": ServiceApi.newSeq(),
            "action": $action,
            "params": $params
        };
        ServiceApi.sendTaskList.push({
            "request": $request,
            "callback": $callback,
            "interval": $interval
        });
        return $request.seq;
    }
};

export {ServiceApi};