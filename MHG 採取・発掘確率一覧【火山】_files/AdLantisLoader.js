var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(){var g=function(){this.initialize.apply(this,arguments)};g.prototype={initialize:function(b){for(var a in b)this[a]=b[a];this.namespaceRoot=this.getNamespaceObject(b.NAMESPACE);for(a in b)switch(a){case "NAMESPACE":case "AUTHOR":case "VERSION":case "REQUIRES":continue;default:if(typeof this.namespaceRoot[a]=="undefined")this.namespaceRoot[a]=b[a]}this.namespaceRoot.info=b.NAMESPACE+", version: "+b.VERSION+", by "+b.AUTHOR},getNamespaceObject:function(b){b=b.split(".");for(var a=window,
c=0,e=b.length;c<e;c++){if(typeof a[b[c]]=="undefined")a[b[c]]={};a=a[b[c]];if(c==e-1)return a}}};g.Class=function(){var b={_listeners:{},extend:function(a){var c=function(){this.initialize.apply(this,arguments)};for(var e in this)c.prototype[e]=this[e];for(e in a)c.prototype[e]=a[e];for(e in b)c.prototype[e]=b[e];return c},addEventListener:function(a,c){if(typeof this._listeners[a]=="undefined")this._listeners[a]=[];this._listeners[a].push(c)},addEventListenerWithScope:function(a,c,e,j){var i=[];
i.push.apply(i,arguments);a=i.shift();if(typeof this._listeners[a]=="undefined")this._listeners[a]=[];c=i.shift();if(typeof c!="function")throw new Error("\u30ea\u30b9\u30ca\u95a2\u6570\u304c\u6b63\u3057\u304f\u30bb\u30c3\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093");e=i.shift();j=i.shift();if(typeof this._listeners[a]=="undefined")this._listeners[a]=[];this._listeners[a].push(function(){return c.apply(e,i)})},fire:function(){var a=[];a.push.apply(a,arguments);var c=a[0];if(typeof c=="string")c=
{type:c};if(!c.target)c.target=this;if(!c.type)throw new Error("Event object missing 'type' property.");if(this._listeners[c.type]instanceof Array){c=this._listeners[c.type];for(var e=0,j=c.length;e<j;e++)c[e].apply(this,a)}},removeEventListener:function(a,c){if(this._listeners[a]instanceof Array){a=this._listeners[a];for(var e=0;e<lenl;e++)if(a[e]===c){a.splice(e,1);break}}}};return function(){for(var a in b)this[a]=b[a];typeof this.initialize=="function"&&this.initialize.apply(this,arguments)}};
var s=g.Class();s.prototype={initialize:function(b){this.src=b.src||-1;if(!this.src)throw new Error("to load script, it must be requires `src` options in arguments");this.allowLoadWithSameUrl=b.allowLoadWithSameUrl||-1}};var q={NAMESPACE:"jp.atlantis.base",VERSION:1,AUTHOR:"ATLANTIS"};q.Module=g;q.ScriptLoader=s;new g(q);g=jp.atlantis.base.Module;new g({NAMESPACE:"jp.atlantis.util",VERSION:1,AUTHOR:"ATLANTIS",packager:{isAvailable:function(b){b=b.split(".");for(var a=window,c=0,e=b.length;c<e;c++){if(typeof a[b[c]]==
"undefined")return false;a=a[b[c]]}return true}},evaluateJsonText:function(b){return typeof JSON!="undefined"&&typeof JSON.parse!="undefined"?JSON.parse(b):/^[\],:{}\s]*$/.test(b.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))?eval("("+b+")"):false},getHashedKey:function(){date=new Date;r=0;for(len=date.getSeconds();r<len;r++)Math.random();return Math.floor(Math.random()*3656158444729381).toString(36)},
setProps:function(b,a){for(var c in a)b[c]=a[c];return b},sprintf:function(b){function a(d,n,h,l,k,f,t){if(t==="%")return"%";d="";f=c[t];var v;j=n?parseInt(n):e++;f&1024||(d=i[j]===void 0?"":i[j]);f&3&&(d=f&1?parseInt(d):parseFloat(d),d=isNaN(d)?"":d);f&4&&(d=((t==="s"?d:t)||"").toString());f&32&&(d=d>=0?d:d%4294967296+4294967296);f&768&&(d=d.toString(f&256?8:16));f&64&&h==="#"&&(d=(f&256?"0":"0x")+d);f&128&&k&&(d=f&2?d.toFixed(k):d.slice(0,k));f&24576&&(v=typeof d!=="number"||d<0);f&8192&&(d=v?"":
String.fromCharCode(d));f&32768&&(h=h==="0"?"":h);d=f&4096?d.toString().toUpperCase():d.toString();if(!(f&2048||l===void 0||d.length>=l)){n=Array(l-d.length+1).join(!h?" ":h==="#"?" ":h);d=f&16&&h==="0"&&!d.indexOf("-")?"-"+n+d.slice(1):n+d}return d}var c={i:32785,d:32785,u:32801,o:33121,x:33377,X:37473,f:146,c:10240,s:132},e=1,j=0,i=arguments;return b.replace(/%(?:(\d+)\$)?(#|0)?(\d+)?(?:\.(\d+))?(l)?([%iduoxXfcs])/g,a)},bind:function(){var b=[];b.push.apply(b,arguments);var a=b.shift(),c=b.shift();
return function(){return a.apply(c,arguments)}}});g=location.protocol==="https:"?"https":"http";s=document.getElementsByTagName("script");for(var r=0;r<s.length;r++){q=s[r].src;if(/AdlantisLoader/i.test(q)==true)g=/^https/.test(q)?"https":"http"}window.loaderProtocol=g;g=g+"://a.adimg.net/javascripts";var o=[{packageName:"jp.atlantis.mashiron.advertise",src:g+"/adlantis.www.js"},{packageName:"SWFObject",src:g+"/swfobject.js"}],w=/(iPhone OS|Android)/.test(navigator.userAgent)?true:false;/(Android)/.test(navigator.userAgent);
w&&o.push({packageName:"jp.atlantis.yuno",src:g+"/adlantis.sp.js?1431430555"});var u=function(){var b=jp.atlantis.yuno,a=jp.atlantis.alto;new jp.atlantis.mashiron.loader;if(w){window.SmartPhone=(new a.smartphone).detect();new b.Loader}},p=function(){var b=function(h){h=h.split(".");for(var l=window,k=0,f=h.length;k<f;k++){if(typeof l[h[k]]=="undefined")return false;l=l[h[k]]}return true};if(!window.__ld){window.__ld=true;if(o.length){for(var a=window.opera&&parseFloat(window.opera.version())<9?true:
false,c=[],e=0,j=o.length;e<j;e++)b(o[e].packageName)||c.push(o[e]);var i=c.length;for(e=0;e<c.length;e++){j=c[e];var d=document.createElement("script");d.type="text/javascript";d.charset="utf-8";d.src=j.src;if(window.ActiveXObject)d.onreadystatechange=function(){if(d.readyState=="complete"||d.readyState=="loaded"){for(var h=0,l=0,k=o.length;h<k;h++)b(o[h].packageName)&&l++;l==k&&u()}};else d.onload=function(){i--;i==0&&u.apply()};a?document.body.appendChild(d):document.documentElement.appendChild(d)}if(a){u();
var n=function(){try{u()}catch(h){setTimeout(n,99)}};n()}}}};if(window.attachEvent&&!window.opera){g=false;try{for(var m=window.parent,x=window.self;m&&m!=x;){if(m.location.host!=x.location.host){g=true;break}if(m===m.parent)break;m=m.parent}}catch(y){g=true}g?window.attachEvent("onload",function(){p(1)}):function(){try{document.documentElement.doScroll("left")}catch(b){setTimeout(arguments.callee,50);return}p(1)}()}else if(window.opera){m=parseFloat(window.opera.version());if(m<9)window.addEventListener("load",
p,false);else m<9.5?document.addEventListener("DOMContentLoaded",p,false):window.addEventListener("DOMContentLoaded",p,true)}else if(document.addEventListener)document.addEventListener("DOMContentLoaded",p,true);else window.onload=p()})();


}
/*
     FILE ARCHIVED ON 08:32:35 Apr 08, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:01:34 Jun 07, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 501.528
  exclusion.robots: 0.101
  exclusion.robots.policy: 0.088
  RedisCDXSource: 0.645
  esindex: 0.01
  LoadShardBlock: 43.701 (3)
  PetaboxLoader3.datanode: 342.264 (5)
  load_resource: 494.462 (2)
  PetaboxLoader3.resolve: 177.454 (2)
*/