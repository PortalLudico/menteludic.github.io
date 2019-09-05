/*!
 * # Semantic UI 2.4.2 - Dimmer
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(e,i,n,t){"use strict";i=void 0!==i&&i.Math==Math?i:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.dimmer=function(i){var o,a=e(this),r=(new Date).getTime(),s=[],m=arguments[0],d="string"==typeof m,c=[].slice.call(arguments,1);return a.each(function(){var l,u,f,g=e.isPlainObject(i)?e.extend(!0,{},e.fn.dimmer.settings,i):e.extend({},e.fn.dimmer.settings),p=g.selector,b=g.namespace,v=g.className,h=g.error,y="."+b,C="module-"+b,w=a.selector||"",S="ontouchstart"in n.documentElement?"touchstart":"click",x=e(this),F=this,T=x.data(C);f={preinitialize:function(){f.is.dimmer()?(u=x.parent(),l=x):(u=x,l=f.has.dimmer()?g.dimmerName?u.find(p.dimmer).filter("."+g.dimmerName):u.find(p.dimmer):f.create())},initialize:function(){f.debug("Initializing dimmer",g),f.bind.events(),f.set.dimmable(),f.instantiate()},instantiate:function(){f.verbose("Storing instance of module",f),T=f,x.data(C,T)},destroy:function(){f.verbose("Destroying previous module",l),f.unbind.events(),f.remove.variation(),u.off(y)},bind:{events:function(){"hover"==g.on?u.on("mouseenter"+y,f.show).on("mouseleave"+y,f.hide):"click"==g.on&&u.on(S+y,f.toggle),f.is.page()&&(f.debug("Setting as a page dimmer",u),f.set.pageDimmer()),f.is.closable()&&(f.verbose("Adding dimmer close event",l),u.on(S+y,p.dimmer,f.event.click))}},unbind:{events:function(){x.removeData(C),u.off(y)}},event:{click:function(i){f.verbose("Determining if event occured on dimmer",i),(0===l.find(i.target).length||e(i.target).is(p.content))&&(f.hide(),i.stopImmediatePropagation())}},addContent:function(i){var n=e(i);f.debug("Add content to dimmer",n),n.parent()[0]!==l[0]&&n.detach().appendTo(l)},create:function(){var i=e(g.template.dimmer());return g.dimmerName&&(f.debug("Creating named dimmer",g.dimmerName),i.addClass(g.dimmerName)),i.appendTo(u),i},show:function(i){i=e.isFunction(i)?i:function(){},f.debug("Showing dimmer",l,g),f.set.variation(),f.is.dimmed()&&!f.is.animating()||!f.is.enabled()?f.debug("Dimmer is already shown or disabled"):(f.animate.show(i),g.onShow.call(F),g.onChange.call(F))},hide:function(i){i=e.isFunction(i)?i:function(){},f.is.dimmed()||f.is.animating()?(f.debug("Hiding dimmer",l),f.animate.hide(i),g.onHide.call(F),g.onChange.call(F)):f.debug("Dimmer is not visible")},toggle:function(){f.verbose("Toggling dimmer visibility",l),f.is.dimmed()?f.hide():f.show()},animate:{show:function(i){i=e.isFunction(i)?i:function(){},g.useCSS&&e.fn.transition!==t&&l.transition("is supported")?(g.useFlex?(f.debug("Using flex dimmer"),f.remove.legacy()):(f.debug("Using legacy non-flex dimmer"),f.set.legacy()),"auto"!==g.opacity&&f.set.opacity(),l.transition({displayType:g.useFlex?"flex":"block",animation:g.transition+" in",queue:!1,duration:f.get.duration(),useFailSafe:!0,onStart:function(){f.set.dimmed()},onComplete:function(){f.set.active(),i()}})):(f.verbose("Showing dimmer animation with javascript"),f.set.dimmed(),"auto"==g.opacity&&(g.opacity=.8),l.stop().css({opacity:0,width:"100%",height:"100%"}).fadeTo(f.get.duration(),g.opacity,function(){l.removeAttr("style"),f.set.active(),i()}))},hide:function(i){i=e.isFunction(i)?i:function(){},g.useCSS&&e.fn.transition!==t&&l.transition("is supported")?(f.verbose("Hiding dimmer with css"),l.transition({displayType:g.useFlex?"flex":"block",animation:g.transition+" out",queue:!1,duration:f.get.duration(),useFailSafe:!0,onStart:function(){f.remove.dimmed()},onComplete:function(){f.remove.variation(),f.remove.active(),i()}})):(f.verbose("Hiding dimmer with javascript"),f.remove.dimmed(),l.stop().fadeOut(f.get.duration(),function(){f.remove.active(),l.removeAttr("style"),i()}))}},get:{dimmer:function(){return l},duration:function(){return"object"==typeof g.duration?f.is.active()?g.duration.hide:g.duration.show:g.duration}},has:{dimmer:function(){return g.dimmerName?x.find(p.dimmer).filter("."+g.dimmerName).length>0:x.find(p.dimmer).length>0}},is:{active:function(){return l.hasClass(v.active)},animating:function(){return l.is(":animated")||l.hasClass(v.animating)},closable:function(){return"auto"==g.closable?"hover"!=g.on:g.closable},dimmer:function(){return x.hasClass(v.dimmer)},dimmable:function(){return x.hasClass(v.dimmable)},dimmed:function(){return u.hasClass(v.dimmed)},disabled:function(){return u.hasClass(v.disabled)},enabled:function(){return!f.is.disabled()},page:function(){return u.is("body")},pageDimmer:function(){return l.hasClass(v.pageDimmer)}},can:{show:function(){return!l.hasClass(v.disabled)}},set:{opacity:function(e){var i=l.css("background-color"),n=i.split(","),t=n&&3==n.length,o=n&&4==n.length;e=0===g.opacity?0:g.opacity||e,t||o?(n[3]=e+")",i=n.join(",")):i="rgba(0, 0, 0, "+e+")",f.debug("Setting opacity to",e),l.css("background-color",i)},legacy:function(){l.addClass(v.legacy)},active:function(){l.addClass(v.active)},dimmable:function(){u.addClass(v.dimmable)},dimmed:function(){u.addClass(v.dimmed)},pageDimmer:function(){l.addClass(v.pageDimmer)},disabled:function(){l.addClass(v.disabled)},variation:function(e){(e=e||g.variation)&&l.addClass(e)}},remove:{active:function(){l.removeClass(v.active)},legacy:function(){l.removeClass(v.legacy)},dimmed:function(){u.removeClass(v.dimmed)},disabled:function(){l.removeClass(v.disabled)},variation:function(e){(e=e||g.variation)&&l.removeClass(e)}},setting:function(i,n){if(f.debug("Changing setting",i,n),e.isPlainObject(i))e.extend(!0,g,i);else{if(n===t)return g[i];e.isPlainObject(g[i])?e.extend(!0,g[i],n):g[i]=n}},internal:function(i,n){if(e.isPlainObject(i))e.extend(!0,f,i);else{if(n===t)return f[i];f[i]=n}},debug:function(){!g.silent&&g.debug&&(g.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,g.name+":"),f.debug.apply(console,arguments)))},verbose:function(){!g.silent&&g.verbose&&g.debug&&(g.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),f.verbose.apply(console,arguments)))},error:function(){g.silent||(f.error=Function.prototype.bind.call(console.error,console,g.name+":"),f.error.apply(console,arguments))},performance:{log:function(e){var i,n,t;g.performance&&(i=(new Date).getTime(),t=r||i,n=i-t,r=i,s.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:F,"Execution Time":n})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500)},display:function(){var i=g.name+":",n=0;r=!1,clearTimeout(f.performance.timer),e.each(s,function(e,i){n+=i["Execution Time"]}),i+=" "+n+"ms",w&&(i+=" '"+w+"'"),a.length>1&&(i+=" ("+a.length+")"),(console.group!==t||console.table!==t)&&s.length>0&&(console.groupCollapsed(i),console.table?console.table(s):e.each(s,function(e,i){console.log(i.Name+": "+i["Execution Time"]+"ms")}),console.groupEnd()),s=[]}},invoke:function(i,n,a){var r,s,m,d=T;return n=n||c,a=F||a,"string"==typeof i&&d!==t&&(i=i.split(/[\. ]/),r=i.length-1,e.each(i,function(n,o){var a=n!=r?o+i[n+1].charAt(0).toUpperCase()+i[n+1].slice(1):i;if(e.isPlainObject(d[a])&&n!=r)d=d[a];else{if(d[a]!==t)return s=d[a],!1;if(!e.isPlainObject(d[o])||n==r)return d[o]!==t?(s=d[o],!1):(f.error(h.method,i),!1);d=d[o]}})),e.isFunction(s)?m=s.apply(a,n):s!==t&&(m=s),e.isArray(o)?o.push(m):o!==t?o=[o,m]:m!==t&&(o=m),s}},f.preinitialize(),d?(T===t&&f.initialize(),f.invoke(m)):(T!==t&&T.invoke("destroy"),f.initialize())}),o!==t?o:this},e.fn.dimmer.settings={name:"Dimmer",namespace:"dimmer",silent:!1,debug:!1,verbose:!1,performance:!0,useFlex:!0,dimmerName:!1,variation:!1,closable:"auto",useCSS:!0,transition:"fade",on:!1,opacity:"auto",duration:{show:500,hide:500},onChange:function(){},onShow:function(){},onHide:function(){},error:{method:"The method you called is not defined."},className:{active:"active",animating:"animating",dimmable:"dimmable",dimmed:"dimmed",dimmer:"dimmer",disabled:"disabled",hide:"hide",legacy:"legacy",pageDimmer:"page",show:"show"},selector:{dimmer:"> .ui.dimmer",content:".ui.dimmer > .content, .ui.dimmer > .content > .center"},template:{dimmer:function(){return e("<div />").attr("class","ui dimmer")}}}}(jQuery,window,document);