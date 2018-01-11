﻿/* **************************************************

Name: common.js

Description: Common Settings

Create: 2014.02.13
Update: XXXX.XX.XX

Copyright 2014 Hitachi, Ltd.

***************************************************** */



/* content===========================================

[-] Use Agent
[-] Base Setting
[-] Skip Link
[-] Pop-up Window
[-] Smooth Scroll
[-] Link Box
[-] jQuery Easing

===================================================== */



/* 1: Use Agent
=========================================================================================== */

var nut = navigator.userAgent.toLowerCase();
var uaCheck = {
	"ie"		:nut.indexOf("msie") != -1,
	"ie6"		:nut.indexOf("msie 6") != -1,
	"ie7"		:nut.indexOf("msie 7") != -1,
	"ie8"		:nut.indexOf("msie 8") != -1,
	"ff"		:nut.indexOf("firefox") != -1,
	"safari"	:nut.indexOf("safari") != -1,
	"chrome"	:nut.indexOf("chrome") != -1,
	"opera"		:nut.indexOf("opera") != -1,
	"iphone"	:nut.indexOf("iphone") != -1,
	"ipad"		:nut.indexOf("ipad") != -1,
	"ipod"		:nut.indexOf("ipod") != -1,
	"android"	:nut.indexOf("android") != -1,
	"xp"		:nut.indexOf("nt 5.1") != -1,
	"win"		:navigator.appVersion.indexOf ("Win") != -1,
	"mac"		:navigator.appVersion.indexOf ("Macintosh") != -1,
	"ios"		:nut.indexOf("iphone") != -1 || nut.indexOf("ipad") != -1 || nut.indexOf("ipod") != -1,
	"sp"		:nut.indexOf("iphone") != -1 || nut.indexOf("ipad") != -1 || nut.indexOf("ipod") != -1 || nut.indexOf("android") != -1
};

function hitachi_ua(target) {
	return uaCheck[target];
}



/* 2: Base Setting
=========================================================================================== */

if(hitachi_ua("sp")) $("html").addClass("SP");



/* 3: Skip Link
=========================================================================================== */

function skiplink(target_id) {

	function focusIn(event) {
		var focus_class = 'focus';
		this.className = focus_class;
		window.scroll(document.documentElement.scrollTop || document.body.scrollTop, 0);
	}
	function focusOut(event) {
		this.className = '';
	}
	function jumpTo(event) {
		var VK_ENTER = 13;
		if ((event.type == 'keydown') && (event.keyCode != VK_ENTER)) return;
		this.className = '';
		var hrefID = this.getAttribute('href').replace(/.*#/g,'');
		window.location.hash = '#' + hrefID;
		var timeID = setTimeout(function(){
			clearTimeout(timeID);
			var target = document.getElementById(hrefID);
			target.setAttribute('href','');
			target.focus();
			target.removeAttribute('href');
		}, 100);
	}

	function setListeners(e) {
		var targetAnchor = document.getElementById(target_id).getElementsByTagName('a');

		if (targetAnchor.length > 0) {
			targetAnchor = targetAnchor[0];
			addListener(targetAnchor, 'focus', focusIn, false);
			addListener(targetAnchor, 'blur', focusOut, false);
			addListener(targetAnchor, 'keydown', jumpTo, false);
			addListener(targetAnchor, 'mousedown', jumpTo, false);
		}
	}

	function addListener(elem, eventType, func, cap) {
		if (elem.addEventListener) {
			elem.addEventListener(eventType, func, cap);
		} else if (elem.attachEvent) {
			elem.attachEvent('on' + eventType, function() {
				func.call(elem, window.event);
			});
		} else {
			return false;
		}
	}

	addListener(window, 'load', setListeners, false);

};

skiplink('top');



/* 4: Pop-up Window
=========================================================================================== */

function openWindow()
{
		/*
		 * for pop-up window
		 *
		 *  1. url
		 *  2. window name
		 *  3. width
		 *  4. height
		 *  5. resizable
		 *  6. toolbar
		 *  7. scrollbars
		 *  8. location
		 *  9. menubar
		 * 10. status
		 *
		 */
		var args = arguments;
		var win_set = '';
		win_set += 'width=' + ((args[2])? args[2] : screen.width-30) 
		win_set += ',height=' + ((args[3])? args[3] : screen.height-30) 
		win_set += ',resizable=' + ((args[4])? 1 : 0) 
		win_set += ',toolbar=' + ((args[5])? 1 : 0) 
		win_set += ',scrollbars=' + ((args[6])? 1 : 0) 
		win_set += ',location=' + ((args[7])? 1 : 0) 
		win_set += ',menubar=' + ((args[8])? 1 : 0) 
		win_set += ',status=' + ((args[9])? 1 : 0);
		swin = window.open(args[0],args[1],win_set);
		swin.focus();
}

function openNormalWindow(url,wname)
{
		/*
		 * Pop-up - normal
		 */
		swin = window.open(url,wname, "width=600, height=550, resizable=yes, toolbar=no, scrollbars=yes, location=no, menubar=yes, status=yes");
		swin.focus();
}

function openLargeWindow(url,wname)
{
		/*
		 * Pop-up - large
		 */
		swin = window.open(url,wname, "width=800, height=550, resizable=yes, toolbar=no, scrollbars=yes, location=no, menubar=yes, status=yes");
		swin.focus();
}

function openBlankWindow(url,wname)
{
		/*
		 * The target pseudo-class ="_blank"
		 */
		swin = window.open(url,wname);
		swin.focus();
}



(function($){

/* 5: Smooth Scroll
=========================================================================================== */

$(document).ready(function() {
	
	var topID = (hitachi_ua("safari")) ? "body" : "html";
	
	$(".SmoothScroll").click(function(){
		var link = $(this).attr("href");
		if(link.charAt(0)=="#" && link.charAt(1)!="") {
			var offset = $(link).offset();
			$(topID).stop().animate({scrollTop: offset.top}, 800, "easeInOutCubic", function() {
				location.href = link;
			});
			return false;
		}
	});
	
});



/* 6: Link Box
=========================================================================================== */

$(document).ready(function() {
	
	$(".Link").mouseover(function() {
		$(this).addClass("hover");
	}).mouseout(function() {
		$(this).removeClass("hover");
	}).click(function(){
		location.href = $(this).find("a").attr("href");
	});
	
});



})(jQuery);



/* 7: jQuery Easing
=========================================================================================== */
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright c 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});



/* Mickey 04/30/2015: Added for tabbed structures */
/* http://www.menucool.com/tabbed-content Free to use. Version 2013.7.6 */
(function(){var g=function(a){if(a&&a.stopPropagation)a.stopPropagation();else window.event.cancelBubble=true;var b=a?a:window.event;b.preventDefault&&b.preventDefault()},d=function(a,c,b){if(a.addEventListener)a.addEventListener(c,b,false);else a.attachEvent&&a.attachEvent("on"+c,b)},a=function(c,a){var b=new RegExp("(^| )"+a+"( |$)");return b.test(c.className)?true:false},j=function(b,c,d){if(!a(b,c))if(b.className=="")b.className=c;else if(d)b.className=c+" "+b.className;else b.className+=" "+c},h=function(a,b){var c=new RegExp("(^| )"+b+"( |$)");a.className=a.className.replace(c,"$1");a.className=a.className.replace(/ $/,"")},e=function(){var b=window.location.pathname;if(b.indexOf("/")!=-1)b=b.split("/");var a=b[b.length-1]||"root";if(a.indexOf(".")!=-1)a=a.substring(0,a.indexOf("."));if(a>20)a=a.substring(a.length-19);return a},c="mi"+e(),b=function(b,a){this.g(b,a)};b.prototype={h:function(){var b=new RegExp(c+this.a+"=(\\d+)"),a=document.cookie.match(b);return a?a[1]:this.i()},i:function(){for(var b=0,c=this.b.length;b<c;b++)if(a(this.b[b].parentNode,"selected"))return b;return 0},j:function(b,d){var c=document.getElementById(b.TargetId);if(!c)return;this.l(c);for(var a=0;a<this.b.length;a++)if(this.b[a]==b){j(b.parentNode,"selected");d&&this.d&&this.k(this.a,a)}else h(this.b[a].parentNode,"selected")},k:function(a,b){document.cookie=c+a+"="+b+"; path=/"},l:function(b){for(var a=0;a<this.c.length;a++)this.c[a].style.display=this.c[a].id==b.id?"block":"none"},m:function(){this.c=[];for(var c=this,a=0;a<this.b.length;a++){var b=document.getElementById(this.b[a].TargetId);if(b){this.c.push(b);d(this.b[a],"click",function(b){var a=this;if(a===window)a=window.event.srcElement;c.j(a,1);g(b);return false})}}},g:function(f,h){this.a=h;this.b=[];for(var e=f.getElementsByTagName("a"),i=/#([^?]+)/,a,b,c=0;c<e.length;c++){b=e[c];a=b.getAttribute("href");if(a.indexOf("#")==-1)continue;else{var d=a.match(i);if(d){a=d[1];b.TargetId=a;this.b.push(b)}else continue}}var g=f.getAttribute("data-persist")||"";this.d=g.toLowerCase()=="true"?1:0;this.m();this.n()},n:function(){var a=this.d?parseInt(this.h()):this.i();if(a>=this.b.length)a=0;this.j(this.b[a],0)}};var k=[],i=function(e){var b=false;function a(){if(b)return;b=true;setTimeout(e,4)}if(document.addEventListener)document.addEventListener("DOMContentLoaded",a,false);else if(document.attachEvent){try{var f=window.frameElement!=null}catch(g){}if(document.documentElement.doScroll&&!f){function c(){if(b)return;try{document.documentElement.doScroll("left");a()}catch(d){setTimeout(c,10)}}c()}document.attachEvent("onreadystatechange",function(){document.readyState==="complete"&&a()})}d(window,"load",a)},f=function(){for(var d=document.getElementsByTagName("ul"),c=0,e=d.length;c<e;c++)a(d[c],"tabs")&&k.push(new b(d[c],c))};i(f);return{}})()
