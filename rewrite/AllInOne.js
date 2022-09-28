hostname = biz.caiyunapp.com, testflight.apple.com, ap*.intsig.net, *.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com, www.zhihu.com,api.zhihu.com,zhuanlan.zhihu.com,appcloud2.zhihu.com,103.41.167.236,103.41.167.234,103.41.167.235,103.41.167.226, ios.prod.ftl.netflix.com, api.m.jd.com

# > 彩云天气SVIP解锁(By Tartarus)
# 需开启QuanX资源解析器
彩云天气SVIP = type=http-response,requires-body=1,max-size=0,pattern=https?:\/\/biz\.caiyunapp\.com\/(membership_rights|v2\/user),script-path=https://raw.githubusercontent.com/Tartarus2014/Script/master/CaiYun.js

# > Testflight下载修正
^https?:\/\/testflight\.apple\.com\/v2\/accounts\/.*\/apps\/\d*/builds/\d*/install url request-body storefrontId" : ".*", request-body storefrontId" : "143441-1,29",

# > 全能扫描王(By NobyDa)
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/CamScanner.js

# > BiliBili去广告
# 去除动态中的话题
^https?:\/\/api\.vc\.bilibili\.com\/topic_svr\/v1\/topic_svr url reject-dict
# 去除动态中的最常访问
^https?:\/\/api\.vc\.bilibili\.com\/dynamic_svr\/v1\/dynamic_svr\/mix_uplist url reject-dict
# 可能的一些推广(beta)
^https?:\/\/api\.bilibili\.com\/pgc\/season\/app\/related\/recommend\? url reject-dict
# 推荐去广告
^https?:\/\/app\.bilibili\.com\/x\/v2\/feed\/index url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 追番去广告
^https?:\/\/api\.bilibili\.com\/pgc\/page\/bangumi url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 直播去广告
^https?:\/\/api\.live\.bilibili\.com\/xlive\/app-room\/v1\/index\/getInfoByRoom url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 动态去广告
^https?:\/\/api\.vc\.bilibili\.com\/dynamic_svr\/v1\/dynamic_svr\/dynamic_(history|new)\? url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 开屏去广告
^https?:\/\/app\.bilibili\.com\/x\/v2\/splash\/list url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 标签页处理
^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/tab url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 我的页面处理
^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/mine url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 漫画去广告
^https?:\/\/manga\.bilibili\.com\/twirp\/comic\.v\d\.Comic\/Flash url reject-dict
^https?:\/\/manga\.bilibili\.com\/twirp\/comic\.v\d\.Comic\/ListFlash url reject-dict

# > 哔哩哔哩动画去广告 (onewayticket255)
https://app.bilibili.com/x/v2/(splash|search/square) url reject-200
https://api.bilibili.com/x/v2/dm/ad url reject-200

# > 哔哩哔哩番剧开启1080P+
^https:\/\/ap(p|i)\.bilibili\.com\/((pgc\/player\/api\/playurl)|(x\/v2\/account\/myinfo\?)|(x\/v2\/account/mine\?)) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/bilifj.js

# > 知乎去广告+优化
# 知乎处理用户信息
^https?:\/\/api\.zhihu\.com\/people\/ url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 知乎信息流去广告
^https?:\/\/api\.zhihu\.com\/(moments|topstory)(\/|\?)?(recommend|action=|feed_type=)(?!\/people) url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 知乎回答列表去广告
^https?:\/\/api\.zhihu\.com\/v4\/questions url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 知乎获取黑名单
^https?:\/\/api\.zhihu\.com\/settings\/blocked_users url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 知乎官方消息去广告
^https?:\/\/api\.zhihu\.com\/notifications\/v3\/(message|timeline\/entry\/system_message) url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 知乎预置关键词去广告
^https?:\/\/api\.zhihu\.com\/search\/preset_words\? url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 优化软件配置
^https?:\/\/appcloud2\.zhihu\.com\/v\d+\/config url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 知乎热搜去广告
^https?:\/\/api\.zhihu\.com\/search\/top_search\/tabs\/hot\/items url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 知乎热榜去广告
^https?:\/\/api\.zhihu\.com\/topstory\/hot-lists?(\?|\/) url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 知乎评论去广告
^https?:\/\/api\.zhihu\.com\/(comment_v5\/)?(answers|comments?|articles|pins)\/\d+\/(root_|child_)?comments? url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 知乎回答列表去广告
^https?:\/\/www\.zhihu\.com\/appview\/v2\/answer\/.*(entry=(?!(preload-topstory|preload-search|preload-subscription)))? url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 知乎屏蔽关键词解锁
^https?:\/\/api\.zhihu\.com\/feed-root\/block url script-analyze-echo-response https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 拦截知乎开屏广告
URL-REGEX,^https?:\/\/api\.zhihu\.com\/commercial_api\/launch_v2\? url reject-dict
# 知乎去除最常访问
^https?:\/\/api\.zhihu\.com\/moments\/recent url reject-dict
# 知乎去除回答下的广告
^https?:\/\/www\.zhihu\.com\/api\/v4\/answers\/\d+\/recommendations url reject-dict
# 知乎其他广告拦截
^https?:\/\/api\.zhihu\.com\/(notifications\/v3\/count|v3\/package|me\/guides|drama\/living-info|ad|fringe|commercial|market\/popovers|.*featured-comment-ad) url reject-dict
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

# > 知乎去广告 (onewayticket255)
https://api.zhihu.com/(ad|drama|fringe|commercial|market/popover|search/(top|preset|tab)|.*featured-comment-ad) url reject-200


# > Netflix评分 (yichahucha)
^https?://ios[-\w]*\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-request-header https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
^https?://ios[-\w]*\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
# >> 单集评分
# ^https?://ios\.prod\.ftl\.netflix\.com/iosui/warmer/.+type=show-ath url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating_season.js

# > 京东比价
^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) url script-response-body https://service.2ti.st/QuanX/Script/jd_tb_price/main.js