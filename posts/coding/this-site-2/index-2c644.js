!function(){"use strict";var e,t,n,l,o,r={},_=[],i=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function u(e,t){for(var n in t)e[n]=t[n];return e}function s(e){var t=e.parentNode;t&&t.removeChild(e)}function c(e,t,n){var l,o=arguments,r={};for(l in t)"key"!==l&&"ref"!==l&&(r[l]=t[l]);if(arguments.length>3)for(n=[n],l=3;l<arguments.length;l++)n.push(o[l]);if(null!=n&&(r.children=n),"function"==typeof e&&null!=e.defaultProps)for(l in e.defaultProps)void 0===r[l]&&(r[l]=e.defaultProps[l]);return p(e,r,t&&t.key,t&&t.ref)}function p(t,n,l,o){var r={type:t,props:n,key:l,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0};return e.vnode&&e.vnode(r),r}function a(e){return e.children}function f(e,t){this.props=e,this.context=t}function d(e,t){if(null==t)return e.__?d(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?d(e):null}function h(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return h(e)}}function y(o){(!o.__d&&(o.__d=!0)&&1===t.push(o)||l!==e.debounceRendering)&&((l=e.debounceRendering)||n)(v)}function v(){var e,n,l,o,r,_,i;for(t.sort((function(e,t){return t.__v.__b-e.__v.__b}));e=t.pop();)e.__d&&(l=void 0,o=void 0,_=(r=(n=e).__v).__e,(i=n.__P)&&(l=[],o=b(i,r,u({},r),n.__n,void 0!==i.ownerSVGElement,null,l,null==_?d(r):_),x(l,r),o!=_&&h(r)))}function Q(e,t,n,l,o,i,u,c,p){var a,f,h,y,v,Q,L,k=n&&n.__k||_,g=k.length;if(c==r&&(c=null!=i?i[0]:g?d(n,0):null),a=0,t.__k=m(t.__k,(function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(h=k[a])||h&&n.key==h.key&&n.type===h.type)k[a]=void 0;else for(f=0;f<g;f++){if((h=k[f])&&n.key==h.key&&n.type===h.type){k[f]=void 0;break}h=null}if(y=b(e,n,h=h||r,l,o,i,u,c,p),(f=n.ref)&&h.ref!=f&&(L||(L=[]),h.ref&&L.push(h.ref,null,n),L.push(f,n.__c||y,n)),null!=y){var _;if(null==Q&&(Q=y),void 0!==n.__d)_=n.__d,n.__d=void 0;else if(i==h||y!=c||null==y.parentNode){e:if(null==c||c.parentNode!==e)e.appendChild(y),_=null;else{for(v=c,f=0;(v=v.nextSibling)&&f<g;f+=2)if(v==y)break e;e.insertBefore(y,c),_=c}"option"==t.type&&(e.value="")}c=void 0!==_?_:y.nextSibling,"function"==typeof t.type&&(t.__d=c)}else c&&h.__e==c&&c.parentNode!=e&&(c=d(h))}return a++,n})),t.__e=Q,null!=i&&"function"!=typeof t.type)for(a=i.length;a--;)null!=i[a]&&s(i[a]);for(a=g;a--;)null!=k[a]&&S(k[a],k[a]);if(L)for(a=0;a<L.length;a++)M(L[a],L[++a],L[++a])}function m(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var l=0;l<e.length;l++)m(e[l],t,n);else n.push(t?t("string"==typeof e||"number"==typeof e?p(null,e,null,null):null!=e.__e||null!=e.__c?p(e.type,e.props,e.key,null):e):e);return n}function L(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===i.test(t)?n+"px":null==n?"":n}function k(e,t,n,l,o){var r,_,i,u,s;if(o?"className"===t&&(t="class"):"class"===t&&(t="className"),"key"===t||"children"===t);else if("style"===t)if(r=e.style,"string"==typeof n)r.cssText=n;else{if("string"==typeof l&&(r.cssText="",l=null),l)for(_ in l)n&&_ in n||L(r,_,"");if(n)for(i in n)l&&n[i]===l[i]||L(r,i,n[i])}else"o"===t[0]&&"n"===t[1]?(u=t!==(t=t.replace(/Capture$/,"")),s=t.toLowerCase(),t=(s in e?s:t).slice(2),n?(l||e.addEventListener(t,g,u),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,g,u)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function g(t){this.l[t.type](e.event?e.event(t):t)}function b(t,n,l,o,r,_,i,s,c){var p,d,h,y,v,m,L,k,g,b,x=n.type;if(void 0!==n.constructor)return null;(p=e.__b)&&p(n);try{e:if("function"==typeof x){if(k=n.props,g=(p=x.contextType)&&o[p.__c],b=p?g?g.props.value:p.__:o,l.__c?L=(d=n.__c=l.__c).__=d.__E:("prototype"in x&&x.prototype.render?n.__c=d=new x(k,b):(n.__c=d=new f(k,b),d.constructor=x,d.render=P),g&&g.sub(d),d.props=k,d.state||(d.state={}),d.context=b,d.__n=o,h=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=x.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=u({},d.__s)),u(d.__s,x.getDerivedStateFromProps(k,d.__s))),y=d.props,v=d.state,h)null==x.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==x.getDerivedStateFromProps&&k!==y&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(k,b),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(k,d.__s,b)){for(d.props=k,d.state=d.__s,d.__d=!1,d.__v=n,n.__e=l.__e,n.__k=l.__k,d.__h.length&&i.push(d),p=0;p<n.__k.length;p++)n.__k[p]&&(n.__k[p].__=n);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(k,d.__s,b),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(y,v,m)}))}d.context=b,d.props=k,d.state=d.__s,(p=e.__r)&&p(n),d.__d=!1,d.__v=n,d.__P=t,p=d.render(d.props,d.state,d.context),n.__k=null!=p&&p.type==a&&null==p.key?p.props.children:Array.isArray(p)?p:[p],null!=d.getChildContext&&(o=u(u({},o),d.getChildContext())),h||null==d.getSnapshotBeforeUpdate||(m=d.getSnapshotBeforeUpdate(y,v)),Q(t,n,l,o,r,_,i,s,c),d.base=n.__e,d.__h.length&&i.push(d),L&&(d.__E=d.__=null),d.__e=!1}else n.__e=w(l.__e,n,l,o,r,_,i,c);(p=e.diffed)&&p(n)}catch(t){e.__e(t,n,l)}return n.__e}function x(t,n){e.__c&&e.__c(n,t),t.some((function(n){try{t=n.__h,n.__h=[],t.some((function(e){e.call(n)}))}catch(t){e.__e(t,n.__v)}}))}function w(e,t,n,l,o,i,u,s){var c,p,a,f,d,h=n.props,y=t.props;if(o="svg"===t.type||o,null!=i)for(c=0;c<i.length;c++)if(null!=(p=i[c])&&((null===t.type?3===p.nodeType:p.localName===t.type)||e==p)){e=p,i[c]=null;break}if(null==e){if(null===t.type)return document.createTextNode(y);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,y.is&&{is:y.is}),i=null}if(null===t.type)h!==y&&e.data!=y&&(e.data=y);else if(t!==n){if(null!=i&&(i=_.slice.call(e.childNodes)),a=(h=n.props||r).dangerouslySetInnerHTML,f=y.dangerouslySetInnerHTML,!s){if(h===r)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(f||a)&&(f&&a&&f.__html==a.__html||(e.innerHTML=f&&f.__html||""))}(function(e,t,n,l,o){var r;for(r in n)r in t||k(e,r,null,n[r],l);for(r in t)o&&"function"!=typeof t[r]||"value"===r||"checked"===r||n[r]===t[r]||k(e,r,t[r],n[r],l)})(e,y,h,o,s),t.__k=t.props.children,f||Q(e,t,n,l,"foreignObject"!==t.type&&o,i,u,r,s),s||("value"in y&&void 0!==y.value&&y.value!==e.value&&(e.value=null==y.value?"":y.value),"checked"in y&&void 0!==y.checked&&y.checked!==e.checked&&(e.checked=y.checked))}return e}function M(t,n,l){try{"function"==typeof t?t(n):t.current=n}catch(t){e.__e(t,l)}}function S(t,n,l){var o,r,_;if(e.unmount&&e.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||M(o,null,n)),l||"function"==typeof t.type||(l=null!=(r=t.__e)),t.__e=t.__d=void 0,null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(t){e.__e(t,n)}o.base=o.__P=null}if(o=t.__k)for(_=0;_<o.length;_++)o[_]&&S(o[_],n,l);null!=r&&s(r)}function P(e,t,n){return this.constructor(e,n)}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e={__e:function(e,t){for(var n,l;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(l=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(l=!0,n.componentDidCatch(e)),l)return y(n.__E=n)}catch(t){e=t}throw e}},f.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=u({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&u(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),y(this))},f.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),y(this))},f.prototype.render=a,t=[],n="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,o=r;const E=document.getElementById("preact-logo");!function(t,n,l){var i,u,s;e.__&&e.__(t,n),u=(i=l===o)?null:l&&l.__k||n.__k,t=c(a,null,[t]),s=[],b(n,(i?n:l||n).__k=t,u||r,r,void 0!==n.ownerSVGElement,l&&!i?[l]:u?null:_.slice.call(n.childNodes),s,l||r,i),x(s,t)}(c(class extends f{constructor(...e){super(...e),D(this,"state",{i:0}),D(this,"increment",()=>this.setState({i:this.state.i+1}))}componentDidMount(){this.componentDidUpdate()}componentDidUpdate(){(requestAnimationFrame||setTimeout)(this.increment)}renderEllipse(e,t,n){let l=30*Math.sin(n/500*Math.PI)+60;return c("ellipse",{cx:"0",cy:"0","stroke-dasharray":`${447-l} ${l}`,"stroke-dashoffset":10*n+200*Math.sin(n/100*Math.PI),"stroke-width":"16px",rx:"75px",ry:"196px",fill:"none",stroke:e,transform:`rotate(${t})`})}render({background:e,fill:t,border:n,fg:l,text:o},{i:r}){return c("svg",{id:"preact-logo",width:"100%",viewBox:"-256 -286 1820 572",style:{background:e}},c("path",{style:`transition:all 1s ease; transform:rotate(${60*Math.floor(r/60/10)}deg);`,fill:t,stroke:n,"stroke-width":n&&"16px",d:"M0,-256 221.7025033688164,-128 221.7025033688164,128 0,256 -221.7025033688164,128 -221.7025033688164,-128z"}),this.renderEllipse(l,52,r),this.renderEllipse(l,-52,-.7*r),c("circle",{cx:"0",cy:"0",r:"34",fill:l}),c("path",{fill:o,d:"M289.85 25.25L289.85 125L272 125L272-122.63L335.88-122.63Q379.45-122.63 401.59-103.55Q423.73-84.48 423.73-49.13Q423.73-32.85 417.69-19.20Q411.65-5.55 400.27 4.34Q388.90 14.22 372.63 19.74Q356.35 25.25 335.88 25.25L289.85 25.25M289.85 10.90L335.88 10.90Q352.33 10.90 365.27 6.35Q378.23 1.80 387.24-6.25Q396.25-14.30 401.06-25.24Q405.88-36.18 405.88-49.13Q405.88-77.65 388.29-93.05Q370.70-108.45 335.88-108.45L289.85-108.45L289.85 10.90ZM497.58 13.00L497.58 125L479.73 125L479.73-122.63L542.90-122.63Q585.78-122.63 606.95-106.09Q628.13-89.55 628.13-57.53Q628.13-43.35 623.23-31.63Q618.33-19.90 609.14-11.06Q599.95-2.23 587 3.46Q574.05 9.15 557.78 10.90Q561.98 13.52 565.30 17.90L650.53 125L634.95 125Q632.15 125 630.14 123.95Q628.13 122.90 626.20 120.45L546.93 20.00Q543.95 16.15 540.54 14.57Q537.13 13.00 529.95 13.00L497.58 13.00M497.58-0.30L540.63-0.30Q557.08-0.30 570.11-4.24Q583.15-8.18 592.16-15.53Q601.18-22.88 605.90-33.20Q610.63-43.53 610.63-56.48Q610.63-82.90 593.30-95.68Q575.98-108.45 542.90-108.45L497.58-108.45L497.58-0.30ZM843.73-122.63L843.73-107.75L713.35-107.75L713.35-7.65L821.85-7.65L821.85 6.87L713.35 6.87L713.35 110.13L843.73 110.13L843.73 125L695.33 125L695.33-122.63L843.73-122.63ZM1088.55 125L1074.73 125Q1072.28 125 1070.70 123.69Q1069.13 122.38 1068.25 120.28L1039.03 48.35L917.40 48.35L888.35 120.28Q887.65 122.20 885.90 123.60Q884.15 125 881.70 125L868.05 125L969.38-122.63L987.23-122.63L1088.55 125M922.83 35.05L1033.78 35.05L983.20-90.08Q981.98-93.05 980.75-96.81Q979.53-100.58 978.30-104.78Q977.08-100.58 975.85-96.81Q974.63-93.05 973.40-89.90L922.83 35.05ZM1302.40 83.35Q1304.15 83.35 1305.38 84.57L1312.38 92.10Q1304.67 100.33 1295.58 106.89Q1286.47 113.45 1275.71 118.09Q1264.95 122.72 1252.09 125.26Q1239.22 127.80 1223.83 127.80Q1198.10 127.80 1176.66 118.79Q1155.22 109.78 1139.91 93.24Q1124.60 76.70 1116.03 53.25Q1107.45 29.80 1107.45 1.10Q1107.45-27.08 1116.29-50.35Q1125.13-73.63 1141.14-90.34Q1157.15-107.05 1179.46-116.24Q1201.78-125.43 1228.72-125.43Q1242.20-125.43 1253.40-123.41Q1264.60-121.40 1274.31-117.64Q1284.03-113.88 1292.60-108.28Q1301.17-102.68 1309.40-95.33L1303.97-87.45Q1302.58-85.35 1299.60-85.35Q1298.03-85.35 1295.58-87.19Q1293.13-89.03 1289.36-91.74Q1285.60-94.45 1280.26-97.69Q1274.92-100.93 1267.58-103.64Q1260.22-106.35 1250.60-108.19Q1240.97-110.03 1228.72-110.03Q1206.15-110.03 1187.25-102.24Q1168.35-94.45 1154.70-80.01Q1141.05-65.58 1133.44-45.01Q1125.83-24.45 1125.83 1.10Q1125.83 27.35 1133.35 48.00Q1140.88 68.65 1154.17 82.91Q1167.47 97.17 1185.59 104.79Q1203.70 112.40 1224.88 112.40Q1238.17 112.40 1248.59 110.65Q1259 108.90 1267.75 105.40Q1276.50 101.90 1284.03 96.82Q1291.55 91.75 1298.90 84.92Q1299.78 84.22 1300.56 83.79Q1301.35 83.35 1302.40 83.35ZM1530.42-122.63L1530.42-107.40L1443.45-107.40L1443.45 125L1425.60 125L1425.60-107.40L1338.10-107.40L1338.10-122.63L1530.42-122.63Z"}))}}),E,E)}();