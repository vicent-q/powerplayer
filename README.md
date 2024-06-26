# powerplayer

## 特性：
1. 支持HTML5/Flash自动切换；
2. 支持mp4/flv/hls/dash/webrtc/sip格式；
3. 支持http-flv、hls、dash直播流；
4. 支持flv+h265、hls+h265解析并播放(360极速浏览器、Chromium)；
5. 支持VR；
6. 支持跳过片头片尾；
7. 支持多码率平滑切换；
8. 支持webp2p(html5/flash);
9. 支持字幕（srt/vtt）；
10. 支持弹幕；
11. 支持视频广告（片头、片尾、暂停）；
12. 支持直播插播广告；
13. 支持服务器集群、负载均衡；
14. 支持ID跑马灯；
15. 支持直播时移、NVR时移；
16. 可禁止浏览器小窗口录制、开发工具;

## 更新日志：
2024-01-10 6.0.29
1. 支持Enhanced RTMP格式接收http-flv
2. 集群IP支持端口
3. flv格式点播时取消3秒连接超时发出异常，兼容低版本奇安信浏览器；
4. 修复在weburlparam为空时，可向statisticServer汇报；

2022-11-18 6.0.28
1. 修复url路径不带端口时汇总时服务器ip解析问题
   
2022-11-11 6.0.27
1. 支持画中画设置

2022-10-25 6.0.26k
1. 修改http-flv读取超时时限为3秒；

2022-10-12 6.0.26j
1. 设置禁止拖拽(seekdisabled)启用时，不可调整播放倍速；

2022-08-13 6.0.26i
1. 修复drm解密时，切片大于5M时导致内存分配失败的问题

2022-06-20 6.0.26h
1. 完善onTime进度事件，可获取跳转时间seektime

2022-05-31 6.0.26f
1. 支持SIP协议带播放认证参数sip://36.138.173.254:1936/play?id=34020000001110000001&chid=34020000001320000001&t=1653965803650&k=16203d28c1d56191a982622a1ab289d2&h=4

2022-04-26 6.0.26c
1. 支持webrtc直播流（webrtc://demo.powercom.net.cn:9000/live/livestream）
2. 支持NVR设备录像直播及时移回放（sip://demo.powercom.net.cn:1936/play?id=34020000001110000001&chid=34020000001320000001&begintimeabs=1650524893）
3. 支持NV4设备按区间回放点播（sip://demo.powercom.net.cn:1936/play?id=34020000001110000001&chid=34020000001320000001&begintimeabs=1650528000&endtimeabs=1650531600
4. 修复时移控制栏接近23点时错位的问题

2022-01-28 6.0.25
1. 支持禁止在打开开发工具跟踪(nosmallwin:true)

2021-11-17 6.0.24f
1. 修复Safari下日期解析Invalid Date的问题
2. 修复部分hls格式解析hevc部分单元（0x13）异常的问题
3. 直播模式下不从服务器获取多清晰度、广告、标记、缩略图信息

2021-10-15 6.0.24d
1. 修复直播时移服务器时间及节目单jsonp回调函数
2. 直播模式下，取消自动播放超时检测

2021-09-29 6.0.24b
1. 修复实时弹幕对象时间解析,时间小于等于0时立即显示
2. 直播模式下为实时弹幕
3. 播放器属性增加设置弹幕滚动速度(danmuscale)，数字越大越慢

2021-09-09 6.0.24a
1. 倍速播放按钮默认显示“倍速”
2. 增加全屏弹幕工具栏，设置颜色、大小
3. 支持控制栏直播时移，显示节目单
4. 支持隐藏控制面板，可设置是否允许鼠标、键盘控制

2021-06-24 6.0.23e
1. flv直播延迟阈值可配置，默认1.5秒，超出该数值则跳帧追赶；
2. 延迟阈值<=2时，默认是超低延迟模式；阈值大于2时，开启IO缓冲区，避免网络抖动影响；

2021-06-02 6.0.23d
1. 对累积延时进行主动发现、跳帧追赶

2021-05-31 6.0.23c
1. 修改flv直播流读取超时时间(=6s)，减少断点续连时延(<9s)；
2. 修复ie8下js出错的问题；

2021-05-28 6.0.23b
1. 增加ID跑马灯（视频指纹），可左右横向滚动，随机出现
2. 插入跑马灯（左右横向，循环次数）
3. (Html5版)flv直播流tag解析异常时自动重连；
4. (flash版6.1.7869)修复flv直播时，如果tag解析失败时不重新连接的问题；

2020-12-17 6.0.22
1. flv扩展支持h.265

2020-12-10 6.0.21
1. 增加flv点播时，集群断点续播功能；

2020-11-25 6.0.20
1. 修复p2phls模式时，多码率集群环境下，无法启用p2p
2. 修复hls集群环境时，断点续播功能；

## Getting Started
```html
<script type='text/javascript' src='./dist/powerplayer.js'></script>
<div id="preview" style="width: 100%; height: 100%; margin:0 auto; background-color: #000000"></div>
<script>
    powerplayer('preview').setup({
        baseUrl: './dist',
        modes: [
        {type: "html5"},
        {type: "flash", src: "dist/powerplayer.swf"}
        ],
        skin: 'dist/skin.zip',
        plugins: 'dist/shortcuts.swf,dist/captions.swf',
        file: 'http://example.com/video.mp4',
        width: '100%',
        height: '100%',
        backcolor: '161616',
        autostart: true,
        provider: 'http',
        title: 'powerplayer',
        bulletscreen: true
    });
</script>
```

### Config

| Field                            | Type      | Default                      | Description                              |
| -------------------------------- | --------- | ---------------------------- | ---------------------------------------- |
| `provider?`                      | `string`  | `''`                         | http,hls,sound,p2p,p2plive,rtmp,flvlive  |
| `backupservers?`                 | `string`  | `''`                         | 集群服务器，如192.168.0.3,192.168.0.4     |
| `video360?`                      | `number`  | `0`                          | 0就是不是全景   1代表全景                  |
| `seamless?`                      | `boolean` | `true`                       | 是否无缝切换，默认true启用                 |
| `lastplayposition?`              | `number`  | ``                           | 用户播放记录                |
| `seekdisabled?`                  | `boolean` | `true`                       | 是否允许拖拽进度                |
| `showthumbnails?`                | `boolean` | `true`                       | 是否显示预览图                |
| `bulletscreen?`                  | `boolean` | `true`                       | 是否显示弹幕                |
| `levels?`                        | `string`  | `''`                         | 直播清晰度数组[{bitrate:900000,file:"http://192.168.0.1:9000/live/rf94xjdq6.flv",width:720,height:480},{bitrate:113100,file:"http://192.168.0.1:9000/live/rf94xjdq6.flv",width:1280,height:720}]             


### React调用
```html
import React from "react";
import { useImperativeHandle, useState, forwardRef } from "react";

export type PlayerProps = {
    file: string;
    autostart: boolean;
    provider: string;
    seekdisabled: string;
    preview: boolean;
    prviewTime: boolean;
    bulletscreen: boolean;
    showthumbnails: boolean;
    backtosee: boolean;
    danmuscale: boolean;
    gettimeurl: string;
    marquees: [];
    levels: [];
    liveopened: boolean;
    playbacktype: string;
    hasAudio: boolean;
    lastplayposition: number;
    noactiontime: number;
    pip: boolean;
    title: string;
    width: string;
    height: string;
    backupservers: string;
    duration: number;
    filesize: number;
    weburlparam: string;
    stretching: string;
    logo: {};
    controls: boolean;
    powerdrmurl: string;
    'controlbar.position': string;
    'shortcuts.step': number;
    'http.startparam': string;
    siteid: string;
    contentid: string;
    fileid: string;
    streamid: string;
    code: string;
    username: string;
    rid: string;
    headtime: number;
    bottomtime: number;
    starttime: number;
    endtime: number;
    tracker: string;
    wstrackers: [];
    rtmfpserver: string;
    iceservers: [];
    visible: boolean;
};

const PowerPlayer = forwardRef((props: PlayerProps, ref) => {
    React.useEffect(() => {
        //这是模拟componentDidMount钩子函数
        if (props.visible) {
            if (window.powerplayer('player') && props.file && props.file !== '') {
                window.powerplayer('player').setup({
                    modes: [{ type: "html5" }],
                    baseUrl: '/powerplayer6/',
                    file: props.file,
                    playbacktype: 'LIVE',
                    autostart: true,
                    width: props.width,
                    height: props.height,
                });
            }
        }
        return () => {//return出来的函数本来就是更新前，销毁前执行的函数，现在不监听任何状态，所以只在销毁前执行
            //这是模拟componentWillUnmount钩子函数
            removePlayer();
        }
    }, [])//第二个参数一定是一个空数组，因为如果不写会默认监听所有状态，这样写就不会监听任何状态，只在初始化时执行一次。

    const removePlayer = () => {
        if (window.powerplayer('player')) {
            window.powerplayer('player').remove();
        }
    }
    const stop = () => {
        if (window.powerplayer('player')) {
            window.powerplayer('player').stop();
        }
    }
    const load = (url:string) => {
        if (window.powerplayer('player') && url && url !== '') {
            window.powerplayer('player').setup({
                modes: [{ type: "html5" }],
                baseUrl: '/powerplayer6/',
                file: url,
                playbacktype: 'LIVE',
                autostart: true,
                width: props.width,
                height: props.height,
            });
        }       
    }
    // 给父组件返回方法
    useImperativeHandle(ref, () => ({
        removePlayer: removePlayer,
        stop: stop,
        load: load,
    }));

    return (
        <>
            <div id="player" style={{ width: '100%', height: '100%', margin: '0 auto', backgroundColor: '#000000' }}></div>
        </>
    );
});

export default PowerPlayer
```
