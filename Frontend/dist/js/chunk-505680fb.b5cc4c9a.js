(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-505680fb"],{"16ae":function(e,t,i){"use strict";t.__esModule=!0,t.default=void 0;var n=u(i("f0bd")),o=u(i("f8bb")),r=u(i("cab0")),s=i("bb2f"),a=i("1611"),l=i("0d5a");function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function f(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(i,!0).forEach(function(t){h(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function h(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,i){return t&&d(e.prototype,t),i&&d(e,i),e}var m="tooltip",g="bs-tooltip",b=new RegExp("\\b".concat(g,"\\S+"),"g"),y=150,$="bv::modal::hidden",T=".modal-content",O="dropdown",w=".dropdown-menu.show",E={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left",TOPLEFT:"top",TOPRIGHT:"top",RIGHTTOP:"right",RIGHTBOTTOM:"right",BOTTOMLEFT:"bottom",BOTTOMRIGHT:"bottom",LEFTTOP:"left",LEFTBOTTOM:"left"},C={AUTO:0,TOPLEFT:-1,TOP:0,TOPRIGHT:1,RIGHTTOP:-1,RIGHT:0,RIGHTBOTTOM:1,BOTTOMLEFT:-1,BOTTOM:0,BOTTOMRIGHT:1,LEFTTOP:-1,LEFT:0,LEFTBOTTOM:1},P={SHOW:"show",OUT:"out"},k={FADE:"fade",SHOW:"show"},_={TOOLTIP:".tooltip",TOOLTIP_INNER:".tooltip-inner",ARROW:".arrow"},S={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,placement:"top",offset:0,arrowPadding:6,container:!1,fallbackPlacement:"flip",callbacks:{},boundary:"scrollParent",boundaryPadding:5,variant:null,customClass:null},j={WebkitTransition:["webkitTransitionEnd"],MozTransition:["transitionend"],OTransition:["otransitionend","oTransitionEnd"],transition:["transitionend"]},D={passive:!0,capture:!1},A=1,H=function(e){return"__BV_".concat(e,"_").concat(A++,"__")},L=function(){function e(t,i,n){v(this,e),this.$isEnabled=!0,this.$fadeTimeout=null,this.$hoverTimeout=null,this.$visibleInterval=null,this.$hoverState="",this.$activeTrigger={},this.$popper=null,this.$element=t,this.$tip=null,this.$id=H(this.constructor.NAME),this.$parent=n||null,this.$root=n&&n.$root?n.$root:null,this.$routeWatcher=null,this.$forceHide=this.forceHide.bind(this),this.$doHide=this.doHide.bind(this),this.$doShow=this.doShow.bind(this),this.$doDisable=this.doDisable.bind(this),this.$doEnable=this.doEnable.bind(this),this._noop=r.default.bind(this),this.updateConfig(i),n&&n.$once("hook:beforeDestroy",this.destroy.bind(this))}return p(e,[{key:"updateConfig",value:function(e){var t=f({},this.constructor.Default,{},e);e.delay&&(0,l.isNumber)(e.delay)&&(t.delay={show:e.delay,hide:e.delay}),e.title&&(0,l.isNumber)(e.title)&&(t.title=e.title.toString()),e.content&&(0,l.isNumber)(e.content)&&(t.content=e.content.toString()),this.fixTitle(),this.$config=t,this.unListen(),this.listen()}},{key:"destroy",value:function(){this.unListen(),this.setWhileOpenListeners(!1),clearTimeout(this.$hoverTimeout),this.$hoverTimeout=null,clearTimeout(this.$fadeTimeout),this.$fadeTimeout=null,this.$popper&&this.$popper.destroy(),this.$popper=null,this.$tip&&this.$tip.parentElement&&this.$tip.parentElement.removeChild(this.$tip),this.$tip=null,this.$id=null,this.$isEnabled=null,this.$parent=null,this.$root=null,this.$element=null,this.$config=null,this.$hoverState=null,this.$activeTrigger=null,this.$forceHide=null,this.$doHide=null,this.$doShow=null,this.$doDisable=null,this.$doEnable=null}},{key:"enable",value:function(){var e=new o.default("enabled",{cancelable:!1,target:this.$element,relatedTarget:null});this.$isEnabled=!0,this.emitEvent(e)}},{key:"disable",value:function(){var e=new o.default("disabled",{cancelable:!1,target:this.$element,relatedTarget:null});this.$isEnabled=!1,this.emitEvent(e)}},{key:"toggle",value:function(e){this.$isEnabled&&(this.dropdownOpen()||(e?(this.$activeTrigger.click=!this.$activeTrigger.click,this.isWithActiveTrigger()?this.enter(null):this.leave(null)):(0,a.hasClass)(this.getTipElement(),k.SHOW)?this.leave(null):this.enter(null)))}},{key:"show",value:function(){var e=this;if(document.body.contains(this.$element)&&(0,a.isVisible)(this.$element)&&!this.dropdownOpen()){var t=this.getTipElement();if(this.fixTitle(),this.setContent(t),this.isWithContent(t)){(0,a.setAttr)(t,"id",this.$id),this.addAriaDescribedby(),this.$config.animation?(0,a.addClass)(t,k.FADE):(0,a.removeClass)(t,k.FADE);var i=this.getPlacement(),r=this.constructor.getAttachment(i);this.addAttachmentClass(r);var s=new o.default("show",{cancelable:!0,target:this.$element,relatedTarget:t});if(this.emitEvent(s),s.defaultPrevented)this.$tip=null;else{var l=this.getContainer();document.body.contains(t)||l.appendChild(t),this.removePopper(),this.$popper=new n.default(this.$element,t,this.getPopperConfig(i,t));var u=function(){e.$config.animation&&e.fixTransition(t);var i=e.$hoverState;e.$hoverState=null,i===P.OUT&&e.leave(null);var n=new o.default("shown",{cancelable:!1,target:e.$element,relatedTarget:t});e.emitEvent(n)};this.setWhileOpenListeners(!0),(0,a.addClass)(t,k.SHOW),this.transitionOnce(t,u)}}else this.$tip=null}}},{key:"visibleCheck",value:function(e){var t=this;clearInterval(this.$visibleInterval),this.$visibleInterval=null,e&&(this.$visibleInterval=setInterval(function(){var e=t.$tip;e&&!(0,a.isVisible)(t.$element)&&(0,a.hasClass)(e,k.SHOW)&&t.forceHide()},100))}},{key:"setWhileOpenListeners",value:function(e){this.setModalListener(e),this.setDropdownListener(e),this.visibleCheck(e),this.setOnTouchStartListener(e),e&&/(focus|blur)/.test(this.$config.trigger)?(0,a.eventOn)(this.$tip,"focusout",this,D):(0,a.eventOff)(this.$tip,"focusout",this,D)}},{key:"forceHide",value:function(){this.$tip&&(0,a.hasClass)(this.$tip,k.SHOW)&&(this.setWhileOpenListeners(!1),clearTimeout(this.$hoverTimeout),this.$hoverTimeout=null,this.$hoverState="",this.$activeTrigger={},this.hide(null,!0))}},{key:"hide",value:function(e,t){var i=this,n=this.$tip;if(n){var r=new o.default("hide",{cancelable:!t,target:this.$element,relatedTarget:n});if(this.emitEvent(r),!r.defaultPrevented){var s=function(){i.$hoverState!==P.SHOW&&n.parentNode&&(n.parentNode.removeChild(n),i.removeAriaDescribedby(),i.removePopper(),i.$tip=null),e&&e();var t=new o.default("hidden",{cancelable:!1,target:i.$element,relatedTarget:null});i.emitEvent(t)};this.setWhileOpenListeners(!1),t&&(0,a.removeClass)(n,k.FADE),(0,a.removeClass)(n,k.SHOW),this.$activeTrigger={},this.transitionOnce(n,s),this.$hoverState=""}}}},{key:"emitEvent",value:function(e){var t=e.type,i=this.$root;i&&i.$emit&&i.$emit("bv::".concat(this.constructor.NAME,"::").concat(t),e);var n=this.$config.callbacks||{};(0,l.isFunction)(n[t])&&n[t](e)}},{key:"getContainer",value:function(){var e=this.$config.container,t=document.body;return!1===e?(0,a.closest)(T,this.$element)||t:(0,a.select)(e,t)||t}},{key:"addAriaDescribedby",value:function(){var e=(0,a.getAttr)(this.$element,"aria-describedby")||"";e=e.split(/\s+/).concat(this.$id).join(" ").trim(),(0,a.setAttr)(this.$element,"aria-describedby",e)}},{key:"removeAriaDescribedby",value:function(){var e=this,t=(0,a.getAttr)(this.$element,"aria-describedby")||"";t=t.split(/\s+/).filter(function(t){return t!==e.$id}).join(" ").trim(),t?(0,a.setAttr)(this.$element,"aria-describedby",t):(0,a.removeAttr)(this.$element,"aria-describedby")}},{key:"removePopper",value:function(){this.$popper&&this.$popper.destroy(),this.$popper=null}},{key:"transitionOnce",value:function(e,t){var i=this,n=this.getTransitionEndEvents(),o=!1;clearTimeout(this.$fadeTimeout),this.$fadeTimeout=null;var r=function r(){o||(o=!0,clearTimeout(i.$fadeTimeout),i.$fadeTimeout=null,n.forEach(function(t){(0,a.eventOff)(e,t,r,D)}),t())};(0,a.hasClass)(e,k.FADE)?(n.forEach(function(t){(0,a.eventOn)(e,t,r,D)}),this.$fadeTimeout=setTimeout(r,y)):r()}},{key:"getTransitionEndEvents",value:function(){for(var e in j)if(!(0,l.isUndefined)(this.$element.style[e]))return j[e];return[]}},{key:"update",value:function(){(0,l.isNull)(this.$popper)||this.$popper.scheduleUpdate()}},{key:"isWithContent",value:function(e){return e=e||this.$tip,!!e&&Boolean(((0,a.select)(_.TOOLTIP_INNER,e)||{}).innerHTML)}},{key:"addAttachmentClass",value:function(e){(0,a.addClass)(this.getTipElement(),"".concat(g,"-").concat(e))}},{key:"getTipElement",value:function(){return this.$tip||(this.$tip=this.compileTemplate(this.$config.template)||this.compileTemplate(this.constructor.Default.template)),this.$tip.tabIndex=-1,this.$config.variant&&(0,a.addClass)(this.$tip,"b-".concat(this.constructor.NAME,"-").concat(this.$config.variant)),this.$config.customClass&&(0,a.addClass)(this.$tip,String(this.$config.customClass)),this.$tip}},{key:"compileTemplate",value:function(e){if(!e||!(0,l.isString)(e))return null;var t=document.createElement("div");t.innerHTML=e.trim();var i=t.firstElementChild?t.removeChild(t.firstElementChild):null;return t=null,i}},{key:"setContent",value:function(e){this.setElementContent((0,a.select)(_.TOOLTIP_INNER,e),this.getTitle()),(0,a.removeClass)(e,k.FADE),(0,a.removeClass)(e,k.SHOW)}},{key:"setElementContent",value:function(e,t){if(e){var i=this.$config.html;(0,l.isObject)(t)&&t.nodeType?i?t.parentElement!==e&&(e.innerHTML="",e.appendChild(t)):e.innerText=t.innerText:e[i?"innerHTML":"innerText"]=t}}},{key:"getTitle",value:function(){var e=this.$config.title||"";return(0,l.isFunction)(e)&&(e=e(this.$element)),(0,l.isObject)(e)&&e.nodeType&&!e.innerHTML.trim()&&(e=""),(0,l.isString)(e)&&(e=e.trim()),e||(e=(0,a.getAttr)(this.$element,"title")||(0,a.getAttr)(this.$element,"data-original-title")||"",e=e.trim()),e}},{key:"listen",value:function(){var e=this,t=this.$element;if(t){var i=this.$config.trigger.trim().split(/\s+/);this.setRootListener(!0),i.forEach(function(i){"click"===i?(0,a.eventOn)(t,"click",e,D):"focus"===i?((0,a.eventOn)(t,"focusin",e,D),(0,a.eventOn)(t,"focusout",e,D)):"blur"===i?(0,a.eventOn)(t,"focusout",e,D):"hover"===i&&((0,a.eventOn)(t,"mouseenter",e,D),(0,a.eventOn)(t,"mouseleave",e,D))},this)}}},{key:"unListen",value:function(){var e=this,t=this.$element;if(t){var i=["click","focusin","focusout","mouseenter","mouseleave"];i.forEach(function(i){(0,a.eventOff)(t,i,e,D)},this),this.setRootListener(!1)}}},{key:"handleEvent",value:function(e){if(!(0,a.isDisabled)(this.$element)&&this.$isEnabled&&!this.dropdownOpen()){var t=e.type,i=e.target,n=e.relatedTarget,o=this.$element,r=this.$tip;if("click"===t)this.toggle(e);else if("focusin"===t||"mouseenter"===t)this.enter(e);else if("focusout"===t){if(r&&o&&o.contains(i)&&r.contains(n))return;if(r&&o&&r.contains(i)&&o.contains(n))return;if(r&&r.contains(i)&&r.contains(n))return;if(o&&o.contains(i)&&o.contains(n))return;this.leave(e)}else"mouseleave"===t&&this.leave(e)}}},{key:"setModalListener",value:function(e){var t=this.$element;if(t&&this.$root){var i=(0,a.closest)(T,t);i&&this.$root[e?"$on":"$off"]($,this.$forceHide)}}},{key:"setDropdownListener",value:function(e){var t=this.$element;t&&this.$root&&(0,a.hasClass)(t,O)&&t&&t.__vue__&&t.__vue__[e?"$on":"$off"]("shown",this.$forceHide)}},{key:"setRootListener",value:function(e){var t=this.$root;if(t){var i=e?"$on":"$off";t[i]("bv::hide::".concat(this.constructor.NAME),this.$doHide),t[i]("bv::show::".concat(this.constructor.NAME),this.$doShow),t[i]("bv::disable::".concat(this.constructor.NAME),this.$doDisable),t[i]("bv::enable::".concat(this.constructor.NAME),this.$doEnable)}}},{key:"dropdownOpen",value:function(){return(0,a.hasClass)(this.$element,O)&&(0,a.select)(w,this.$element)}},{key:"doHide",value:function(e){e?this.$element&&this.$element.id&&this.$element.id===e&&this.hide():this.forceHide()}},{key:"doShow",value:function(e){e?e&&this.$element&&this.$element.id&&this.$element.id===e&&this.show():this.show()}},{key:"doDisable",value:function(e){e?this.$element&&this.$element.id&&this.$element.id===e&&this.disable():this.disable()}},{key:"doEnable",value:function(e){e?this.$element&&this.$element.id&&this.$element.id===e&&this.enable():this.enable()}},{key:"setOnTouchStartListener",value:function(e){var t=this;"ontouchstart"in document.documentElement&&(0,s.from)(document.body.children).forEach(function(i){e?(0,a.eventOn)(i,"mouseover",t._noop):(0,a.eventOff)(i,"mouseover",t._noop)})}},{key:"fixTitle",value:function(){var e=this.$element;!(0,a.getAttr)(e,"title")&&(0,l.isString)((0,a.getAttr)(e,"data-original-title"))||((0,a.setAttr)(e,"data-original-title",(0,a.getAttr)(e,"title")||""),(0,a.setAttr)(e,"title",""))}},{key:"enter",value:function(e){var t=this;e&&(this.$activeTrigger["focusin"===e.type?"focus":"hover"]=!0),(0,a.hasClass)(this.getTipElement(),k.SHOW)||this.$hoverState===P.SHOW?this.$hoverState=P.SHOW:(clearTimeout(this.$hoverTimeout),this.$hoverState=P.SHOW,this.$config.delay&&this.$config.delay.show?this.$hoverTimeout=setTimeout(function(){t.$hoverState===P.SHOW&&t.show()},this.$config.delay.show):this.show())}},{key:"leave",value:function(e){var t=this;e&&(this.$activeTrigger["focusout"===e.type?"focus":"hover"]=!1,"focusout"===e.type&&/blur/.test(this.$config.trigger)&&(this.$activeTrigger.click=!1,this.$activeTrigger.hover=!1)),this.isWithActiveTrigger()||(clearTimeout(this.$hoverTimeout),this.$hoverState=P.OUT,this.$config.delay&&this.$config.delay.hide?this.$hoverTimeout=setTimeout(function(){t.$hoverState===P.OUT&&t.hide()},this.$config.delay.hide):this.hide())}},{key:"getPopperConfig",value:function(e,t){var i=this;return{placement:this.constructor.getAttachment(e),modifiers:{offset:{offset:this.getOffset(e,t)},flip:{behavior:this.$config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{padding:this.$config.boundaryPadding,boundariesElement:this.$config.boundary}},onCreate:function(e){e.originalPlacement!==e.placement&&i.handlePopperPlacementChange(e)},onUpdate:function(e){i.handlePopperPlacementChange(e)}}}},{key:"getOffset",value:function(e,t){if(!this.$config.offset){var i=(0,a.select)(_.ARROW,t),n=parseFloat((0,a.getCS)(i).width)+parseFloat(this.$config.arrowPadding);switch(C[e.toUpperCase()]){case 1:return"+50%p - ".concat(n,"px");case-1:return"-50%p + ".concat(n,"px");default:return 0}}return this.$config.offset}},{key:"getPlacement",value:function(){var e=this.$config.placement;return(0,l.isFunction)(e)?e.call(this,this.$tip,this.$element):e}},{key:"isWithActiveTrigger",value:function(){for(var e in this.$activeTrigger)if(this.$activeTrigger[e])return!0;return!1}},{key:"cleanTipClass",value:function(){var e=this.getTipElement(),t=e.className.match(b);!(0,l.isNull)(t)&&t.length>0&&t.forEach(function(t){(0,a.removeClass)(e,t)})}},{key:"handlePopperPlacementChange",value:function(e){this.cleanTipClass(),this.addAttachmentClass(this.constructor.getAttachment(e.placement))}},{key:"fixTransition",value:function(e){var t=this.$config.animation||!1;(0,l.isNull)((0,a.getAttr)(e,"x-placement"))&&((0,a.removeClass)(e,k.FADE),this.$config.animation=!1,this.hide(),this.show(),this.$config.animation=t)}}],[{key:"getAttachment",value:function(e){return E[e.toUpperCase()]}},{key:"Default",get:function(){return S}},{key:"NAME",get:function(){return m}}]),e}(),N=L;t.default=N},5764:function(e,t,i){"use strict";t.__esModule=!0,t.default=t.VBPopover=void 0;var n=c(i("f0bd")),o=c(i("daa8")),r=c(i("93e0")),s=i("eb60"),a=i("4565"),l=i("0d5a"),u=i("24e2");function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function h(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?f(i,!0).forEach(function(t){v(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):f(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function v(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var d="__BV_PopOver__",p={focus:!0,hover:!0,click:!0,blur:!0},m=/^html$/,g=/^nofade$/i,b=/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/,y=/^(window|viewport|scrollParent)$/,$=/^d\d+$/,T=/^o-?\d+$/,O=/^v-.+$/,w=function(e){var t="BPopover",i={delay:(0,s.getComponentConfig)(t,"delay"),boundary:String((0,s.getComponentConfig)(t,"boundary")),boundaryPadding:parseInt((0,s.getComponentConfig)(t,"boundaryPadding"),10)||0,variant:(0,s.getComponentConfig)(t,"variant"),customClass:(0,s.getComponentConfig)(t,"customClass")};(0,l.isString)(e.value)?i.content=e.value:(0,l.isFunction)(e.value)?i.content=e.value:(0,l.isObject)(e.value)&&(i=h({},i,{},e.value)),e.arg&&(i.container="#".concat(e.arg)),(0,u.keys)(e.modifiers).forEach(function(e){if(m.test(e))i.html=!0;else if(g.test(e))i.animation=!1;else if(b.test(e))i.placement=e;else if(y.test(e))i.boundary=e;else if($.test(e)){var t=parseInt(e.slice(1),10)||0;t&&(i.delay=t)}else if(T.test(e)){var n=parseInt(e.slice(1),10)||0;n&&(i.offset=n)}else O.test(e)&&(i.variant=e.slice(2)||null)});var n={},o=(0,l.isString)(i.trigger)?i.trigger.trim().split(/\s+/):[];return o.forEach(function(e){p[e]&&(n[e]=!0)}),(0,u.keys)(p).forEach(function(t){e.modifiers[t]&&(n[t]=!0)}),i.trigger=(0,u.keys)(n).join(" "),"blur"===i.trigger&&(i.trigger="focus"),i.trigger||delete i.trigger,i},E=function(e,t,i){if(a.isBrowser)if(n.default){var s=w(t);e[d]?e[d].updateConfig(s):e[d]=new o.default(e,s,i.context)}else(0,r.default)("v-b-popover: Popper.js is required for PopOvers to work")},C=function(e){e[d]&&(e[d].destroy(),e[d]=null,delete e[d])},P={bind:function(e,t,i){E(e,t,i)},inserted:function(e,t,i){E(e,t,i)},update:function(e,t,i){t.value!==t.oldValue&&E(e,t,i)},componentUpdated:function(e,t,i){t.value!==t.oldValue&&E(e,t,i)},unbind:function(e){C(e)}};t.VBPopover=P;var k=P;t.default=k},"8b16":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-6"},[i("small",{staticClass:"d-block text-uppercase font-weight-bold mb-3"},[e._v("Tooltips")]),i("base-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"btn-tooltip",attrs:{size:"sm",type:"primary",title:"Tooltip on left"}},[e._v("On left\n        ")]),i("base-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",modifiers:{hover:!0,top:!0}}],staticClass:"btn-tooltip",attrs:{size:"sm",type:"primary",title:"Tooltip on top"}},[e._v("On top\n        ")]),i("base-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",modifiers:{hover:!0,bottom:!0}}],staticClass:"btn-tooltip",attrs:{size:"sm",type:"primary",title:"Tooltip on bottom"}},[e._v("On bottom\n        ")]),i("base-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],staticClass:"btn-tooltip",attrs:{size:"sm",type:"primary",title:"Tooltip on right"}},[e._v("On right\n        ")])],1),i("div",{staticClass:"col-lg-6 mt-4 mt-lg-0"},[i("small",{staticClass:"d-block text-uppercase font-weight-bold mb-3"},[e._v("Popovers")]),i("base-button",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.left",value:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",expression:"'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'",modifiers:{hover:!0,left:!0}}],attrs:{size:"sm",type:"default",title:"Popover On Left"}},[e._v("On left\n        ")]),i("base-button",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.left",value:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",expression:"'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'",modifiers:{hover:!0,left:!0}}],attrs:{size:"sm",type:"default",title:"Popover On Left"}},[e._v("On left\n        ")]),i("base-button",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.top",value:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",expression:"'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'",modifiers:{hover:!0,top:!0}}],attrs:{size:"sm",type:"default",title:"Popover On Top"}},[e._v("On top\n        ")]),i("base-button",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.right",value:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",expression:"'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'",modifiers:{hover:!0,right:!0}}],attrs:{size:"sm",type:"default",title:"Popover On right"}},[e._v("On right\n        ")]),i("base-button",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.bottom",value:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",expression:"'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'",modifiers:{hover:!0,bottom:!0}}],attrs:{size:"sm",type:"default",title:"Popover On bottom"}},[e._v("On bottom\n        ")])],1)])},o=[],r=i("91b6"),s=i.n(r),a=i("5764"),l=i.n(a),u={directives:{BTooltip:s.a,BPopover:l.a}},c=u,f=i("2877"),h=Object(f["a"])(c,n,o,!1,null,null,null);t["default"]=h.exports},"91b6":function(e,t,i){"use strict";t.__esModule=!0,t.default=t.VBTooltip=void 0;var n=c(i("f0bd")),o=c(i("16ae")),r=c(i("93e0")),s=i("eb60"),a=i("4565"),l=i("0d5a"),u=i("24e2");function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function h(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?f(i,!0).forEach(function(t){v(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):f(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function v(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var d="__BV_ToolTip__",p={focus:!0,hover:!0,click:!0,blur:!0},m=/^html$/,g=/^nofade$/i,b=/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/,y=/^(window|viewport|scrollParent)$/,$=/^d\d+$/,T=/^o-?\d+$/,O=/^v-.+$/,w=function(e){var t="BTooltip",i={delay:(0,s.getComponentConfig)(t,"delay"),boundary:String((0,s.getComponentConfig)(t,"boundary")),boundaryPadding:parseInt((0,s.getComponentConfig)(t,"boundaryPadding"),10)||0,variant:(0,s.getComponentConfig)(t,"variant"),customClass:(0,s.getComponentConfig)(t,"customClass")};(0,l.isString)(e.value)?i.title=e.value:(0,l.isFunction)(e.value)?i.title=e.value:(0,l.isObject)(e.value)&&(i=h({},i,{},e.value)),e.arg&&(i.container="#".concat(e.arg)),(0,u.keys)(e.modifiers).forEach(function(e){if(m.test(e))i.html=!0;else if(g.test(e))i.animation=!1;else if(b.test(e))i.placement=e;else if(y.test(e))i.boundary=e;else if($.test(e)){var t=parseInt(e.slice(1),10)||0;t&&(i.delay=t)}else if(T.test(e)){var n=parseInt(e.slice(1),10)||0;n&&(i.offset=n)}else O.test(e)&&(i.variant=e.slice(2)||null)});var n={},o=(0,l.isString)(i.trigger)?i.trigger.trim().split(/\s+/):[];return o.forEach(function(e){p[e]&&(n[e]=!0)}),(0,u.keys)(p).forEach(function(t){e.modifiers[t]&&(n[t]=!0)}),i.trigger=(0,u.keys)(n).join(" "),"blur"===i.trigger&&(i.trigger="focus"),i.trigger||delete i.trigger,i},E=function(e,t,i){if(a.isBrowser)if(n.default){var s=w(t);e[d]?e[d].updateConfig(s):e[d]=new o.default(e,s,i.context)}else(0,r.default)("v-b-tooltip: Popper.js is required for ToolTips to work")},C=function(e){e[d]&&(e[d].destroy(),e[d]=null,delete e[d])},P={bind:function(e,t,i){E(e,t,i)},inserted:function(e,t,i){E(e,t,i)},update:function(e,t,i){t.value!==t.oldValue&&E(e,t,i)},componentUpdated:function(e,t,i){t.value!==t.oldValue&&E(e,t,i)},unbind:function(e){C(e)}};t.VBTooltip=P;var k=P;t.default=k},daa8:function(e,t,i){"use strict";t.__esModule=!0,t.default=void 0;var n=s(i("16ae")),o=i("1611"),r=i("0d5a");function s(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,i){return t&&u(e.prototype,t),i&&u(e,i),e}function f(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function d(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function m(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function g(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?m(i,!0).forEach(function(t){b(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):m(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function b(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var y="popover",$="bs-popover",T=new RegExp("\\b".concat($,"\\S+"),"g"),O=g({},n.default.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),w={FADE:"fade",SHOW:"show"},E={TITLE:".popover-header",CONTENT:".popover-body"},C=function(e){function t(){return l(this,t),f(this,v(t).apply(this,arguments))}return d(t,e),c(t,[{key:"isWithContent",value:function(e){if(e=e||this.$tip,!e)return!1;var t=Boolean(((0,o.select)(E.TITLE,e)||{}).innerHTML),i=Boolean(((0,o.select)(E.CONTENT,e)||{}).innerHTML);return t||i}},{key:"addAttachmentClass",value:function(e){(0,o.addClass)(this.getTipElement(),"".concat($,"-").concat(e))}},{key:"setContent",value:function(e){this.setElementContent((0,o.select)(E.TITLE,e),this.getTitle()),this.setElementContent((0,o.select)(E.CONTENT,e),this.getContent()),(0,o.removeClass)(e,w.FADE),(0,o.removeClass)(e,w.SHOW)}},{key:"cleanTipClass",value:function(){var e=this.getTipElement(),t=e.className.match(T);!(0,r.isNull)(t)&&t.length>0&&t.forEach(function(t){(0,o.removeClass)(e,t)})}},{key:"getTitle",value:function(){var e=this.$config.title||"";return(0,r.isFunction)(e)&&(e=e(this.$element)),(0,r.isObject)(e)&&e.nodeType&&!e.innerHTML.trim()&&(e=""),(0,r.isString)(e)&&(e=e.trim()),e||(e=(0,o.getAttr)(this.$element,"title")||(0,o.getAttr)(this.$element,"data-original-title")||"",e=e.trim()),e}},{key:"getContent",value:function(){var e=this.$config.content||"";return(0,r.isFunction)(e)&&(e=e(this.$element)),(0,r.isObject)(e)&&e.nodeType&&!e.innerHTML.trim()&&(e=""),(0,r.isString)(e)&&(e=e.trim()),e}}],[{key:"Default",get:function(){return O}},{key:"NAME",get:function(){return y}}]),t}(n.default),P=C;t.default=P},f8bb:function(e,t,i){"use strict";t.__esModule=!0,t.default=t.BvEvent=void 0;var n=i("24e2");function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),e}var a=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o(this,e),!t)throw new TypeError("Failed to construct '".concat(this.constructor.name,"'. 1 argument required, ").concat(arguments.length," given."));(0,n.assign)(this,e.Defaults,this.constructor.Defaults,i,{type:t}),(0,n.defineProperties)(this,{type:(0,n.readonlyDescriptor)(),cancelable:(0,n.readonlyDescriptor)(),nativeEvent:(0,n.readonlyDescriptor)(),target:(0,n.readonlyDescriptor)(),relatedTarget:(0,n.readonlyDescriptor)(),vueTarget:(0,n.readonlyDescriptor)(),componentId:(0,n.readonlyDescriptor)()});var r=!1;this.preventDefault=function(){this.cancelable&&(r=!0)},(0,n.defineProperty)(this,"defaultPrevented",{enumerable:!0,get:function(){return r}})}return s(e,null,[{key:"Defaults",get:function(){return{type:"",cancelable:!0,nativeEvent:null,target:null,relatedTarget:null,vueTarget:null,componentId:null}}}]),e}();t.BvEvent=a;var l=a;t.default=l}}]);
//# sourceMappingURL=chunk-505680fb.b5cc4c9a.js.map