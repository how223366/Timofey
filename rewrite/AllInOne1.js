hostname = biz.caiyunapp.com, testflight.apple.com, ap*.intsig.net, *.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com, app.bilibili.com,api.bilibili.com, manga.bilibili.com, grpc.biliapi.net,api.biliapi.net, -broadcast.chat.bilibili.com, -*cdn*.biliapi.net, -*tracker*.biliapi.net,www.zhihu.com,api.zhihu.com,zhuanlan.zhihu.com,appcloud2.zhihu.com,103.41.167.236,103.41.167.234,103.41.167.235,103.41.167.226, mp.weixin.qq.com,*api.weibo*,sdkapp.uve.weibo.com,api.weibo.cn, mapi.weibo.com, *.uve.weibo.com, new.vip.weibo.cn,sofire.baidu.com,ndstatic.cdn.bcebos.com,pan.baidu.com,staticsns.cdn.bcebos.com,issuecdn.baidupcs.com,*.tieba.baidu.com,*.bdstatic.com, rich.kuwo.cn,*.kwcdn.kuwo.cn,mobilead.kuwo.cn,m.ads.8le8le.com,iadmusicmat.music.com,ma-adx.ctrip.com,m.ctrip.com,act.vip.iqiyi.com,appconf.mail.163.com,analytics.163.com, ios-*.prod.ftl.netflix.com,ios.prod.ftl.netflix.com

*.iqiyipic.com, *.iqiyi.com, gw.alicdn.com, heic.alicdn.com,*.baidu.com,-imerres.baidu.com,weixin110.qq.com,dss0.bdstatic.com,api.rr.tv,apic.musixmatch.com,api.m.jd.com,trade-acs.m.taobao.com,*.kuwo.cn



# > 彩云天气SVIP解锁(By Tartarus)需开启QuanX资源解析器
彩云天气SVIP = type=http-response,requires-body=1,max-size=0,pattern=https?:\/\/biz\.caiyunapp\.com\/(membership_rights|v2\/user),script-path=https://raw.githubusercontent.com/Tartarus2014/Script/master/CaiYun.js


# > Testflight下载修正
^https?:\/\/testflight\.apple\.com\/v2\/accounts\/.*\/apps\/\d*/builds/\d*/install url request-body storefrontId" : ".*", request-body storefrontId" : "143441-1,29",


# > 全能扫描王(By NobyDa)
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/CamScanner.js


# > BiliBili去广告
# 屏蔽广告浮窗
^https?:\/\/api\.bilibili\.com\/pgc\/activity\/deliver\/material\/receive url reject-dict
# 屏蔽IP请求
^https?:\/\/app\.bilibili\.com\/x\/resource\/ip url reject
# 屏蔽DefaultWord
^https?:\/\/app\.bilibili\.com\/bilibili\.app\.interface\.v1\.Search\/Default url reject
# 屏蔽首页右上活动[卸载重装]
^https?:\/\/app\.bilibili\.com\/x\/resource\/top\/activity url reject-dict
# 观影页面去广告
^https?:\/\/api\.(bilibili|biliapi)\.(com|net)\/pgc\/page\/cinema\/tab\? url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_json.js
# 开屏去广告
^https://app.bilibili.com/x/v2/splash/show url reject-dict
^https?:\/\/app\.bilibili\.com\/x\/v2\/splash\/list url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 哔哩哔哩番剧开启1080P+ （by NobyDa）
^https:\/\/ap(p|i)\.bilibili\.com\/((pgc\/player\/api\/playurl)|(x\/v2\/account\/myinfo\?)|(x\/v2\/account/mine\?)) url script-response-body https://raw.githubusercontent.com/zqzess/rule_for_quantumultX/master/js/backup/bilifj.js
哔哩哔哩_1080P高码率+4K画质(番剧和影视除外)
^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/myinfo\? url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_json.js
# 推荐去广告
^https?:\/\/app\.bilibili\.com\/x\/v2\/feed\/index url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 追番去广告
^https?:\/\/api\.bilibili\.com\/pgc\/page\/bangumi url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 直播去广告
^https?:\/\/api\.live\.bilibili\.com\/xlive\/app-room\/v1\/index\/getInfoByRoom url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 动态去广告
^https?:\/\/api\.vc\.bilibili\.com\/dynamic_svr\/v1\/dynamic_svr\/dynamic_(history|new)\? url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 漫画去广告
^https?:\/\/manga\.bilibili\.com\/twirp\/comic\.v\d\.Comic\/Flash url reject-dict
^https?:\/\/manga\.bilibili\.com\/twirp\/comic\.v\d\.Comic\/ListFlash url reject-dict
# Proto去广告
^https:\/\/app\.bilibili\.com\/bilibili\.app\.(view\.v1\.View\/View|dynamic\.v2\.Dynamic\/DynAll)$ url script-response-body https://raw.githubusercontent.com/app2smile/rules/master/js/bilibili-proto.js
# 可能的一些推广(beta)
^https?:\/\/api\.bilibili\.com\/pgc\/season\/app\/related\/recommend\? url reject-dict
# 标签页处理
^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/tab url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 我的页面处理
^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/mine url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 去除动态中的话题
^https?:\/\/api\.vc\.bilibili\.com\/topic_svr\/v1\/topic_svr url reject-dict
# 去除动态中的最常访问
^https?:\/\/api\.vc\.bilibili\.com\/dynamic_svr\/v1\/dynamic_svr\/mix_uplist url reject-dict


# > 知乎去广告+优化
# 知乎处理用户信息
^https?:\/\/api\.zhihu\.com\/people\/ url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zhihu/zhihu.js
# 知乎信息流去广告
^https?:\/\/api\.zhihu\.com\/(moments|topstory)(\/|\?)?(recommend|action=|feed_type=)(?!\/people) url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zhihu/zhihu.js
# 知乎回答列表去广告
^https?:\/\/api\.zhihu\.com\/(v4\/)?questions\/\d+ url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zhihu/zhihu.js
# 知乎获取黑名单
^https?:\/\/api\.zhihu\.com\/settings\/blocked_users url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zhihu/zhihu.js
# 知乎官方消息去广告
^https?:\/\/api\.zhihu\.com\/notifications\/v3\/(message|timeline\/entry\/system_message) url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zhihu/zhihu.js
# 知乎预置关键词去广告
^https?:\/\/api\.zhihu\.com\/search\/preset_words\? url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zhihu/zhihu.js
# 优化软件配置
^https?:\/\/appcloud2\.zhihu\.com\/v\d+\/config url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zhihu/zhihu.js
# 知乎热搜去广告
^https?:\/\/api\.zhihu\.com\/search\/top_search\/tabs\/hot\/items url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zhihu/zhihu.js
# 知乎热榜去广告
^https?:\/\/api\.zhihu\.com\/topstory\/hot-lists?(\?|\/) url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zhihu/zhihu.js
# 知乎评论去广告
^https?:\/\/api\.zhihu\.com\/(comment_v5\/)?(answers|comments?|articles|pins)\/\d+\/(root_|child_)?comments? url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zhihu/zhihu.js
# 知乎回答列表去广告
^https?:\/\/www\.zhihu\.com\/appview\/v2\/answer\/.*(entry=(?!(preload-topstory|preload-search|preload-subscription)))? url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zhihu/zhihu.js
# 知乎屏蔽关键词解锁
^https?:\/\/api\.zhihu\.com\/feed-root\/block url script-analyze-echo-response https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zhihu/zhihu.js
# 知乎8.3.0移除推荐页顶部项
^https?:\/\/api\.zhihu\.com\/feed-root\/sections\/query\/v2 url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zhihu/zhihu.js
# 拦截知乎开屏广告
URL-REGEX,^https?:\/\/api\.zhihu\.com\/commercial_api\/launch_v2\? url reject-dict
# 知乎去除最常访问
^https?:\/\/api\.zhihu\.com\/moments\/recent url reject-dict
# 知乎去除回答下的广告
^https?:\/\/www\.zhihu\.com\/api\/v4\/answers\/\d+\/recommendations url reject-dict
# 知乎其他广告拦截
^https?:\/\/api\.zhihu\.com\/(notifications\/v\d\/count|v\d\/package|me\/guides|drama\/living-info|ad|fringe|commercial|market\/popovers|.*featured-comment-ad|ad-style-service) url reject-dict
# 知乎拦截部分预加载
# ^https?:\/\/www\.zhihu\.com\/appview\/(p|v2\/answer|zvideo)\/.*entry=(preload-topstory|preload-search|preload-subscription) url reject-dict
# 知乎网页版去广告
^https?:\/\/www\.zhihu\.com\/api\/v4/(questions|anwsers)\/\d+/related-readings url reject-dict
^https?:\/\/www\.zhihu\.com\/api\/v4\/hot_recommendation url reject-dict
^https?:\/\/www\.zhihu\.com\/commercial_api\/banners_v3\/mobile_banner url reject-dict
^https?:\/\/zhuanlan\.zhihu\.com\/api\/articles\/\d+\/recommendation url reject-dict
# 知乎品牌提问广告
^https?:\/\/api\.zhihu\.com\/brand\/question\/\d+/card\? url reject-dict
^https?:\/\/www\.zhihu\.com\/api\/v\d+\/brand\/question/\d+/card\? url reject-dict
# 屏蔽消息页面上拉的用户精选
^https?:\/\/api\.zhihu\.com/moments/hybrid\? url reject-dict
# 知乎下发的配置，如皮肤等
^https?:\/\/api\.zhihu\.com\/ab\/api\/v1\/products\/zhihu\/platforms\/ios\/config url reject-200
# 屏蔽知乎“我的”页面推荐开通会员的卡片
^https?:\/\/api\.zhihu\.com\/people\/self\/new_user_card url reject-200
# 知乎去除Tab页关注人头像
^https?:\/\/api\.zhihu\.com\/moments\/tab_v2 url reject-dict
# 屏蔽知乎8.3.0版本首页顶部的视频角标
^https?:\/\/api\.zhihu\.com\/explore\/entry\/tips url reject
# >> 知乎去广告 (onewayticket255)
https://api.zhihu.com/(ad|drama|fringe|commercial|market/popover|search/(top|preset|tab)|.*featured-comment-ad) url reject-200


# > 微信公众号去广告
^(http|https):\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url response-body "advertisement_num":\d,"advertisement_info":\[.+\], response-body "advertisement_num":0,"advertisement_info":[],
^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/Wechat.js

# > 酷我音乐SVIP (By yxiaocai)
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Kuwo.js

# > 百度网盘 解除在线视频倍率/清晰度
^https:\/\/pan\.baidu\.com\/rest\/\d\.\d\/membership\/user url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/BaiduCloud.js

# > 微博去广告
# >> 国际版
# WeiboLite_微博国际版_sdkad@ddgksf2013
^https?:\/\/sdkapp\.uve\.weibo\.com\/interface\/sdk\/sdkad\.php  url reject
# WeiboLite_微博国际版_推荐tab|热门tab去广告@ddgksf2013
^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/statuses\/unread_hot_timeline url script-response-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Script/weibo_json.js
# WeiboLite_微博国际版_关注tab去广告@ddgksf2013 
^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/statuses\/friends_timeline url script-response-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Script/weibo_json.js
# WeiboLite_微博国际版_趋势tab@ddgksf2013 
^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/cardlist url script-response-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Script/weibo_json.js
# WeiboLite_微博国际版_屏蔽search_suggest@ddgksf2013 
^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/page\/get_search_suggest url reject-dict
# WeiboLite_微博国际版_趋势tab去广告@ddgksf2013 
^https?:\/\/weibointl\.api\.weibo\.c(n|om)\/portal\.php.*feed&a=trends url script-response-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Script/weibo_json.js
# WeiboLite_微博国际版_屏蔽searching_info@ddgksf2013 
^ttps?:\/\/weibointl\.api\.weibo\.c(n|om)\/portal\.php.*user&a=get_searching_info url reject
# WeiboLite_微博国际版_屏蔽search_topic@ddgksf2013 
^https?:\/\/weibointl\.api\.weibo\.c(n|om)\/portal\.php.*feed&a=search_topic url reject
# WeiboLite_微博国际版_屏蔽开屏广告@ddgksf2013 
^https?:\/\/weibointl\.api\.weibo\.c(n|om)\/portal\.php.*ads url reject

# >> 微博去广告最新
# 微博去广告以及去除各部分推广模块 - cherish
^https?://m?api\.weibo\.c(n|om)/2/(cardlist|searchall|page|messageflow|statuses/(unread_)?friends(/|_)timeline|groups/timeline|statuses/(unread_hot_timeline|extend|video_mixtimeline|unread_topic_timeline)|profile/(me|statuses)|video/(community_tab|remind_info|tiny_stream_video_list)|checkin/show|\!/live/media_homelist|comments/build_comments|container/get_item|search/(finder|container_timeline|container_discover)) url script-response-body https://raw.githubusercontent.com/zmqcherish/proxy-script/main/weibo_main.js

# 删除微博开屏广告 - cherish
^https?://(sdk|wb)app\.uve\.weibo\.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) url script-response-body https://raw.githubusercontent.com/zmqcherish/proxy-script/main/weibo_launch.js

# 自定义tab皮肤
^https://api.weibo.cn/2/!/client/light_skin url script-response-body https://raw.githubusercontent.com/zmqcherish/proxy-script/main/weibo_main.js

# 非会员设置tab皮肤 - cherish
^https://new.vip.weibo.cn/littleskin/preview url script-response-body https://raw.githubusercontent.com/zmqcherish/proxy-script/main/weibo_main.js

# >> 去微博应用内广告 (yichahucha)
^https?://(sdk|wb)app\.uve\.weibo\.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/wb_launch.js
^https?://m?api\.weibo\.c(n|om)/2/(statuses/(unread|extend|positives/get|(friends|video)(/|_)(mix)?timeline)|stories/(video_stream|home_list)|(groups|fangle)/timeline|profile/statuses|comments/build_comments|photo/recommend_list|service/picfeed|searchall|cardlist|page|!/(photos/pic_recommend_status|live/media_homelist)|video/tiny_stream_video_list|photo/info|remind/unread_count) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/wb_ad.js

# > 百度网盘广告屏蔽(会员卖卡赚钱)
^https:\/\/pan\.baidu\.com\/pmall\/order\/privilege\/info url reject
^https:\/\/pan\.baidu\.com\/rest\/.+\/pcs\/adx url reject
^https:\/\/pan\.baidu\.com\/api\/useractivity\/activity url reject
^http:\/\/pan\.baidu\.com\/act\/.+\/bchannel\/list url reject
#^https:\/\/pan\.baidu\.com\/api\/certuser\/get url reject
^https:\/\/pan\.baidu\.com\/component\/view\/1510\?from url reject
^https:\/\/sofire\.baidu\.com\/ios\/.+ url reject
^https:\/\/ndstatic\.cdn\.bcebos\.com\/activity\/welfare\/js\/.+\.js url reject
^https:\/\/ndstatic\.cdn\.bcebos\.com\/activity\/welfare\/index\.html url reject
^https:\/\/pan\.baidu\.com\/pmall\/order\/privilege\/info url reject
^https:\/\/staticsns\.cdn\.bcebos\.com\/amis\/.+/banner.png url reject
^http:\/\/rp\.hpplay\.cn\/logouts url reject
#^https:\/\/issuecdn\.baidupcs\.com\/issue\/netdisk\/ts_ad\/guanggao\/.+ url reject
https:\/\/issuecdn\.baidupcs\.com\/issue\/netdisk\/ts_ad\/ url reject
https:\/\/pan\.baidu\.com\/rest\/2.0\/pcs\/adv\? url reject
# https://pan\.baidu\.com\/act\/api\/activityentry\? - reject
https:\/\/pan\.baidu\.com\/component\/view\/(1510|1130)\?vip url reject


# > 百度输入法
^http:\/\/r6\.mo\.baidu\.com\/res\/file/advertisement\/files\/.+\.jpg url reject
^http:\/\/res\.mi\.baidu\.com\/imeres\/ime-res\/advertisement\/files\/.+\.jpg url reject
^https:\/\/mime\.baidu\.com\/v5\/activity\/advertisementnonrealtime url reject
^https:\/\/mime\.baidu\.com\/v5\/start_screen_ads\/list url reject
^https:\/\/mime\.baidu\.com\/v5\/hotpatch\/check\?hotpatch url reject

# > 百度贴吧(TributePaulWalker搬运)
^https?:\/\/c\.tieba\.baidu\.com\/c\/s\/splashSchedule url reject
^https?:\/\/c\.tieba\.baidu\.com\/c\/f\/forum\/getAdInfo url reject
^https?:\/\/c\.tieba\.baidu\.com\/\w+\/\w+\/(sync|newRnSync|mlog) url reject
^https?:\/\/((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\/\w+\/\w+\/(sync|newRnSync|mlog) url reject
^https?:\/\/((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\/c\/s\/splashSchedule url reject
#mine
https:\/\/pn\.baidu\.com\/iad\/.+\.json url reject
^https:\/\/feed-image\.baidu\.com\/0\/pic\/ url reject
http:\/\/.+\/c\/s\/(trackConfig|dashengVideo|splashSchedule) url reject

# > 百度地图开屏广告
#^https?:\/\/.+\.bdstatic\.com\/-0U0bnSm1A5BphGlnYG\/tam-ogel\/.+\.jpg url reject
^https:\/\/dss0\.bdstatic\.com\/.+/tam-ogel\/.+\.jpg url reject

# > 酷我音乐去开屏广告
^https?:\/\/rich\.kuwo\.cn\/AdService\/kaiping\/.+ url reject
#^https?:\/\/img4\.kwcdn\.kuwo\.cn\/star\/upload\/.+ url reject
^https?:\/\/.+\.kwcdn\.kuwo\.cn\/star\/upload\/.+ url reject
^https?:\/\/mobilead\.kuwo\.cn\/EcomResourceServer\/adBubble\/.+ url reject

# > 酷我音乐SVIP (By yxiaocai)
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Kuwo.js
^https?:\/\/musicpay\.kuwo\.cn\/music\.pay\?uid\=\d+ url 302 http://musicpay.kuwo.cn/music.pay?uid=1

# > 酷我音乐解除下载权限 (2022-01-25) by ddgksf2013
^https?:\/\/musicpay\.kuwo\.cn\/music\.pay\?newver=\d url script-request-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Crack/kuwodl.js

# > 网易云广告
^https?:\/\/iadmusicmat\.music\.126\.net\/.+\.jpg url reject
^http:\/\/interface\.music\.163\.com\/eapi\/ad\/config\/get url reject
^https?:\//m\.ads\.8le8le\.com\/adShow url reject

# > 高德地图广告
^http:\/\/ems\.youku\.com\/imp\? url reject
^http:\/\/optimus-ads\.amap\.com\/uploadimg\/.+ url reject
# > 携程广告
^https:\/\/ma-adx\.ctrip\.com\/_ma\.gif url reject
^https:\/\/m\.ctrip\.com\/restapi\/.+\/json\/tripAds url reject
^https:\/\/m\.ctrip\.com\/html5\/webresource\/js\/iscroll\.js$ url reject

^https:\/\/mbd\.baidu\.com\/newspage\/api\/getmobads\?page\=landingshare url reject

# > qq空间广告屏蔽
^http:\/\/c\.gdt\.qq\.com\/gdt_clickwap\.fcg\?viewid url reject
^http:\/\/pgdt\.gtimg\.cn\/gdt\/0\/.+\.jpg url reject
^http:\/\/v\.gdt\.qq\.com\/gdt_stats\.fcg\?viewid url reject
^http:\/\/rpt\.gdt\.qq\.com\/creative_view\?viewid url reject
^http:\/\/pgdt\.gtimg\.cn\/gdt\/.+\.png url reject
^http:\/\/pgdt\.gtimg\.cn\/gdt\/.+\.jpg url reject
^http:\/\/pgdt\.gtimg\.cn\/.+\/snscosdownload\/SH\/reserved\/.+ url reject

# > 腾讯视频广告屏蔽
^http:\/\/.+/\?tk=9901afb195dcf9a34db6088a4a221dba38b3d980e4db86009f8a08be4d4099ee323f6e7f03b881db21133b1bf2ae5bc5 url reject
^http:\/\/video\.dispatch\.tc\.qq\.com\/.+\.mp4 url reject
^http:\/\/.+\/vmind\.qqvideo\.tc\.qq\.com\/.+\.mp4 url reject
^http:\/\/wa\.gtimg\.com\/adxcdn\/.+\.jpg url reject

# > 爱奇艺广告屏蔽
^http:\/\/.+\.iqiyipic\.com\/image\/.+\/ad\/.+\.jpg url reject
^http:\/\/static-s\.iqiyi\.com\/common\/.+\/Small_video\/a2\/af\/.+\.png url reject
^http:\/\/msga/.cupid/.iqiyi/.com\/scp2\.gif url reject
https?:\/\/ssports\.iqiyi\.com/app\/ url reject
https?:\/\/ssports\.iqiyi\.com/json\/shop\/shopInfo  url reject
https?:\/\/.+\.iqiyi\.com\/videos\/other\/20$ url reject
https?:\/\/.+\.iqiyipic\.com\/image\/20*_100000 url reject
#https?:\/\/static\.iqiyi\.com\/js\/common\/.+\.js url reject
https?:\/\/t7z\.cupid\.iqiyi\.com\/show url reject
# >> 搬运爱奇艺(by gitee-木剑)
^https?:\/\/iface\.iqiyi\.com\/api\/getNewAdInfo url reject
^https?:\/\/act\.vip\.iqiyi\.com\/interact\/api\/show\.do url reject
^https?:\/\/act\.vip\.iqiyi\.com\/interact\/api\/v\d\/show url reject

# > 网易邮箱
https:\/\/appconf\.mail\.163\.com\/mmad\/get\.do url reject
http:\/\/analytics\.163\.com\/ntes url reject

# > 奈飞显示IMDB评分
#Netflix获取评分(by yichahucha)
^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-request-header https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
# 单集评分
^https?://ios\.prod\.ftl\.netflix\.com/iosui/warmer/.+type=show-ath url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating_season.js

# > 京东开屏广告屏蔽(改写自surge)
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=start$ url reject-array

# > 京东比价 (by yichahucha)
^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) url script-response-body https://service.2ti.st/QuanX/Script/jd_tb_price/main.js

# > 淘宝比价 (by yichahucha)
^http://.+/amdc/mobileDispatch url script-request-body https://raw.githubusercontent.com/yichahucha/surge/master/tb_price.js
^https?://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.getdetail url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/tb_price.js

# > 解除微信屏蔽（支持淘宝、天猫、支付宝等平台）(by HotKids)
^https?:\/\/weixin110\.qq\.com\/cgi-bin\/mmspamsupport-bin\/newredirectconfirmcgi url script-response-body https://raw.githubusercontent.com/zqzess/rule_for_quantumultX/master/js/backup/weixin110.js








