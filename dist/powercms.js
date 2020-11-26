var siteId = "f39c571155b943890155b9444459000b";//powercms站点Id,需自行修改
var progid = "";
var vid = "";
var serverHttp = "";
var serverIp = "202.61.89.201";//powercms服务器,需自行修改
var serverPort = "8888";//powercms端口,需自行修改

window.onload = function() {
    var powercms = document.getElementsByName("powercms");
    var powlength = powercms.length;
    var autostart = 1;
    if (powlength > 1) {
        autostart = 0;
    }
    for (var i = 0; i < powlength; i++) {
        var p_src = powercms[i].src;
        var p_style = powercms[i].style;
        var p_align = powercms[i].align;
        var p_style_width = parseInt(powercms[i].style.width);
        var p_style_height = parseInt(powercms[i].style.height);
        var params = p_src.split("powercms")[1].split("/");
        progid = params[2];
        vid = params[3];
        serverHttp = p_src.split("powercms")[0];
        var s_div = "s_div" + i;
        var powercms_src = 'http://' + serverIp + ':' + serverPort + '/powercms/web/player/powerplayer6/loadplayer.js?siteId=' + siteId + '&progid=' + progid + '&autostart' +
            '=' + autostart + '&vid=' + vid + '&serverIp=' + serverIp + '&serverPort=' + serverPort + '&width=550px&height=300px';
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = powercms_src;
        var p = document.createElement("div");
        p.id = s_div;
        p.appendChild(script);
        powercms[i].parentNode.replaceChild(p, powercms[i]);
		//var parnode = powercms[i].parentNode;
		//parnode.parentNode.replaceChild(p, parnode);
        var s_obj = document.getElementById(s_div);
        s_obj.style.width = (p_style_width ? p_style_width : 550) + 'px';
        s_obj.style.height = (p_style_height ? p_style_height : 380) + 'px';
        if (p_align != "" || undefined || null) {
            s_obj.style.margin = "0 auto";
        }
    }
}