(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[691],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),o=r(7067);function i(t,r,a){return o()?(e.exports=i=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=i=function(e,t,r){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return r&&n(i,r.prototype),i},e.exports.__esModule=!0,e.exports.default=e.exports),i.apply(null,arguments)}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),i=r(379),a=r(8206);e.exports=function(e){return n(e)||o(e)||i(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!i(e[l[u]],a[l[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",c),f}}},2102:function(e,t,r){var n=r(2632);e.exports={MDXRenderer:n}},2632:function(e,t,r){var n=r(9100),o=r(319),i=r(9713),a=r(7316),c=["scope","children"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r(7294),f=r(4983).mdx,p=r(6948).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,i=a(e,c),u=p(t),d=s.useMemo((function(){if(!r)return null;var e=l({React:s,mdx:f},u),t=Object.keys(e),i=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(i)))}),[r,t]);return s.createElement(d,l({},i))}},4559:function(e,t,r){"use strict";var n=r(7294),o=r(1597);t.Z=function(){return n.createElement("footer",{className:"border-t-2"},n.createElement("div",{className:"flex justify-center my-8"},n.createElement(o.Link,{className:"text-lg px-4 m-3",to:"/","aria-label":"home"},"home"),n.createElement(o.Link,{className:"text-lg px-4 m-3",to:"/privacy"},"privacy")))}},8342:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(7294);r(4694).vc.autoAddCss=!1;var o=function(e){var t=e.children;return n.createElement("div",{className:"mx-10 max-w-screen-lg lg:m-auto"},n.createElement("main",{id:"main-content"},t))}},9407:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Pe}});var n,o,i,a,c=r(7294),u=r(8342),l=r(2102),s=r(1597),f=r(8945),p=function(e){var t=e.sectionID,r=e.title,n=e.children;return c.createElement("section",{className:"py-5",id:t},c.createElement("h2",{className:"text-center text-4xl mt-3 mb-5"},r),n)},d=function(){var e=(0,s.useStaticQuery)("979446212"),t=e.mdx,r=t.frontmatter,n=t.body,o=e.mdx.frontmatter.image.childImageSharp.gatsbyImageData;return c.createElement(p,{sectionID:r.sectionID,title:r.title},c.createElement("div",{className:"text-center"},c.createElement(f.G,{className:"rounded-full w-52 z-0",image:(0,f.d)(o),alt:"aboutImage"})),c.createElement("div",{className:"my-auto prose prose-base mt-10 min-w-full"},c.createElement(l.MDXRenderer,null,n)))},m=function(){var e=(0,s.useStaticQuery)("963255281").mdx,t=e.frontmatter,r=e.body;return c.createElement(p,{sectionID:t.sectionID,title:t.title},c.createElement("div",{className:"prose min-w-full"},c.createElement(l.MDXRenderer,null,r)))},y=function(){var e=(0,s.useStaticQuery)("2434758341").mdx,t=e.frontmatter,r=e.body;return c.createElement(p,{sectionID:t.sectionID,title:t.title},c.createElement("div",{className:"prose prose-base min-w-full"},c.createElement(l.MDXRenderer,null,r)))},h=function(){var e=(0,s.useStaticQuery)("3894522081"),t=e.mdx.frontmatter,r=t.title,n=t.sectionID,o=e.allMdx.edges,i=0;return c.createElement(p,{sectionID:n,title:r},c.createElement("ul",{className:"overflow-x-scroll flex"},o.map((function(e,t){i++;var r=e.node.body;return c.createElement("li",{key:t,className:"mr-8 relative pb-4 flex-shrink-0 w-4/6 md:w-2/4 lg:w-2/5 prose prose-sm text-center",style:{order:i}},c.createElement(l.MDXRenderer,null,r))}))))},b=function(){var e=(0,s.useStaticQuery)("3839982026").mdx,t=e.frontmatter,r=e.body;return c.createElement(p,{sectionID:t.sectionID,title:t.title},c.createElement("div",{className:"my-auto prose prose-sm mt-10 min-w-full"},c.createElement(l.MDXRenderer,null,r)))},v=function(){var e=(0,s.useStaticQuery)("2312823908").mdx,t=e.frontmatter,r=e.body;return c.createElement(p,{sectionID:t.sectionID,title:t.title},c.createElement("div",{className:"prose prose-base min-w-full"},c.createElement(l.MDXRenderer,null,r)))},g=function(){var e=(0,s.useStaticQuery)("384109601").mdx,t=e.frontmatter,r=e.body;return c.createElement(p,{sectionID:t.sectionID,title:t.title},c.createElement("div",{className:"prose prose-base min-w-full"},c.createElement(l.MDXRenderer,null,r)))},T=r(4559),E=function(){var e=(0,s.useStaticQuery)("2783606816");return c.createElement("header",{className:"border-b-2 text-center"},c.createElement("nav",{className:"my-5 lg:my-8 overflow-x-auto"},e.allMdx.nodes.map((function(e,t){return c.createElement(s.Link,{className:"text-lg px-2 lg:px-4 m-0 lg:m-3",key:t,to:"/#"+e.frontmatter.sectionID},e.frontmatter.title)}))))},w=r(5697),x=r.n(w),O=r(4839),A=r.n(O),S=r(2993),C=r.n(S),j=r(6494),I=r.n(j),P="bodyAttributes",k="htmlAttributes",M="titleAttributes",D={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},N=(Object.keys(D).map((function(e){return D[e]})),"charset"),_="cssText",L="href",R="http-equiv",B="innerHTML",H="itemprop",q="name",F="property",Y="rel",U="src",X="target",Q={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},z="defaultTitle",K="defer",Z="encodeSpecialCharacters",V="onChangeClientState",W="titleTemplate",$=Object.keys(Q).reduce((function(e,t){return e[Q[t]]=t,e}),{}),G=[D.NOSCRIPT,D.SCRIPT,D.STYLE],J="data-react-helmet",ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},te=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},re=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},oe=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},ie=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},ae=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ce=function(e){var t=pe(e,D.TITLE),r=pe(e,W);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=pe(e,z);return t||n||void 0},ue=function(e){return pe(e,V)||function(){}},le=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return ne({},e,t)}),{})},se=function(e,t){return t.filter((function(e){return void 0!==e[D.BASE]})).map((function(e){return e[D.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},fe=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&be("Helmet: "+e+' should be of type "Array". Instead found type "'+ee(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||r===Y&&"canonical"===e[r].toLowerCase()||u===Y&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==B&&c!==_&&c!==H||(r=c)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][l]&&(o[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=I()({},n[c],o[c]);n[c]=u}return e}),[]).reverse()},pe=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},de=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){de(e)}),0)}),me=function(e){return clearTimeout(e)},ye="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||de:r.g.requestAnimationFrame||de,he="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||me:r.g.cancelAnimationFrame||me,be=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ve=null,ge=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;we(D.BODY,n),we(D.HTML,o),Ee(f,p);var d={baseTag:xe(D.BASE,r),linkTags:xe(D.LINK,i),metaTags:xe(D.META,a),noscriptTags:xe(D.NOSCRIPT,c),scriptTags:xe(D.SCRIPT,l),styleTags:xe(D.STYLE,s)},m={},y={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(y[e]=d[e].oldTags)})),t&&t(),u(e,m,y)},Te=function(e){return Array.isArray(e)?e.join(""):e},Ee=function(e,t){void 0!==e&&document.title!==e&&(document.title=Te(e)),we(D.TITLE,t)},we=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(J),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],l=t[u]||"";r.getAttribute(u)!==l&&r.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(J):r.getAttribute(J)!==a.join(",")&&r.setAttribute(J,a.join(","))}},xe=function(e,t){var r=document.head||document.querySelector(D.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===B)r.innerHTML=t.innerHTML;else if(n===_)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(J,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},Oe=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},Ae=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[Q[r]||r]=e[r],t}),t)},Se=function(e,t,r){switch(e){case D.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[J]=!0,o=Ae(r,n),[c.createElement(D.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=Oe(r),i=Te(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+ae(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+ae(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case P:case k:return{toComponent:function(){return Ae(t)},toString:function(){return Oe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[J]=!0,n);return Object.keys(t).forEach((function(e){var r=Q[e]||e;if(r===B||r===_){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===B||e===_)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+ae(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===G.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},Ce=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:Se(D.BASE,t,n),bodyAttributes:Se(P,r,n),htmlAttributes:Se(k,o,n),link:Se(D.LINK,i,n),meta:Se(D.META,a,n),noscript:Se(D.NOSCRIPT,c,n),script:Se(D.SCRIPT,u,n),style:Se(D.STYLE,l,n),title:Se(D.TITLE,{title:f,titleAttributes:p},n)}},je=A()((function(e){return{baseTag:se([L,X],e),bodyAttributes:le(P,e),defer:pe(e,K),encode:pe(e,Z),htmlAttributes:le(k,e),linkTags:fe(D.LINK,[Y,L],e),metaTags:fe(D.META,[q,N,R,F,H],e),noscriptTags:fe(D.NOSCRIPT,[B],e),onChangeClientState:ue(e),scriptTags:fe(D.SCRIPT,[U,B],e),styleTags:fe(D.STYLE,[_],e),title:ce(e),titleAttributes:le(M,e)}}),(function(e){ve&&he(ve),e.defer?ve=ye((function(){ge(e,(function(){ve=null}))})):(ge(e),ve=null)}),Ce)((function(){return null})),Ie=(o=je,a=i=function(e){function t(){return te(this,t),ie(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!C()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case D.SCRIPT:case D.NOSCRIPT:return{innerHTML:t};case D.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return ne({},n,((t={})[r.type]=[].concat(n[r.type]||[],[ne({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case D.TITLE:return ne({},o,((t={})[n.type]=a,t.titleAttributes=ne({},i),t));case D.BODY:return ne({},o,{bodyAttributes:ne({},i)});case D.HTML:return ne({},o,{htmlAttributes:ne({},i)})}return ne({},o,((r={})[n.type]=ne({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=ne({},t);return Object.keys(e).forEach((function(t){var n;r=ne({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[$[r]||r]=e[r],t}),t)}(oe(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case D.LINK:case D.META:case D.NOSCRIPT:case D.SCRIPT:case D.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=oe(e,["children"]),n=ne({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(o,n)},re(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:x().object,bodyAttributes:x().object,children:x().oneOfType([x().arrayOf(x().node),x().node]),defaultTitle:x().string,defer:x().bool,encodeSpecialCharacters:x().bool,htmlAttributes:x().object,link:x().arrayOf(x().object),meta:x().arrayOf(x().object),noscript:x().arrayOf(x().object),onChangeClientState:x().func,script:x().arrayOf(x().object),style:x().arrayOf(x().object),title:x().string,titleAttributes:x().object,titleTemplate:x().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=Ce({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);Ie.renderStatic=Ie.rewind;var Pe=function(){return c.createElement(u.Z,null,c.createElement(Ie,null,c.createElement("html",{lang:"ja"}),c.createElement("title",null,"Riku Tsunoda's portfolio"),c.createElement("meta",{name:"description",content:"This page is top of my portfolio."})),c.createElement(E,null),c.createElement(d,null),c.createElement(m,null),c.createElement(v,null),c.createElement(y,null),c.createElement(h,null),c.createElement(b,null),c.createElement(g,null),c.createElement(T.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-81c370f68a19e19494d0.js.map