true              &&(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
}());

var n,l$1,t$1,i$1,r$1,o$1,e$1,f$2,c$1,s$1,a$1,p$1={},v$1=[],y$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,d$1=Array.isArray;function w$1(n,l){for(var t in l)n[t]=l[t];return n}function g(n){n&&n.parentNode&&n.parentNode.removeChild(n);}function _(l,t,u){var i,r,o,e={};for(o in t)"key"==o?i=t[o]:"ref"==o?r=t[o]:e[o]=t[o];if(arguments.length>2&&(e.children=arguments.length>3?n.call(arguments,2):u),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps) void 0===e[o]&&(e[o]=l.defaultProps[o]);return m$1(l,e,i,r,null)}function m$1(n,u,i,r,o){var e={type:n,props:u,key:i,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==o?++t$1:o,__i:-1,__u:0};return null==o&&null!=l$1.vnode&&l$1.vnode(e),e}function k$1(n){return n.children}function x(n,l){this.props=n,this.context=l;}function S(n,l){if(null==l)return n.__?S(n.__,n.__i+1):null;for(var t;l<n.__k.length;l++)if(null!=(t=n.__k[l])&&null!=t.__e)return t.__e;return "function"==typeof n.type?S(n):null}function C$1(n){var l,t;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(t=n.__k[l])&&null!=t.__e){n.__e=n.__c.base=t.__e;break}return C$1(n)}}function M(n){(!n.__d&&(n.__d=true)&&i$1.push(n)&&!$.__r++||r$1!==l$1.debounceRendering)&&((r$1=l$1.debounceRendering)||o$1)($);}function $(){for(var n,t,u,r,o,f,c,s=1;i$1.length;)i$1.length>s&&i$1.sort(e$1),n=i$1.shift(),s=i$1.length,n.__d&&(u=void 0,o=(r=(t=n).__v).__e,f=[],c=[],t.__P&&((u=w$1({},r)).__v=r.__v+1,l$1.vnode&&l$1.vnode(u),O(t.__P,u,r,t.__n,t.__P.namespaceURI,32&r.__u?[o]:null,f,null==o?S(r):o,!!(32&r.__u),c),u.__v=r.__v,u.__.__k[u.__i]=u,z$1(f,u,c),u.__e!=o&&C$1(u)));$.__r=0;}function I(n,l,t,u,i,r,o,e,f,c,s){var a,h,y,d,w,g,_=u&&u.__k||v$1,m=l.length;for(f=P(t,l,_,f,m),a=0;a<m;a++)null!=(y=t.__k[a])&&(h=-1===y.__i?p$1:_[y.__i]||p$1,y.__i=a,g=O(n,y,h,i,r,o,e,f,c,s),d=y.__e,y.ref&&h.ref!=y.ref&&(h.ref&&q(h.ref,null,y),s.push(y.ref,y.__c||d,y)),null==w&&null!=d&&(w=d),4&y.__u||h.__k===y.__k?f=A$1(y,f,n):"function"==typeof y.type&&void 0!==g?f=g:d&&(f=d.nextSibling),y.__u&=-7);return t.__e=w,f}function P(n,l,t,u,i){var r,o,e,f,c,s=t.length,a=s,h=0;for(n.__k=new Array(i),r=0;r<i;r++)null!=(o=l[r])&&"boolean"!=typeof o&&"function"!=typeof o?(f=r+h,(o=n.__k[r]="string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?m$1(null,o,null,null,null):d$1(o)?m$1(k$1,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?m$1(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o).__=n,o.__b=n.__b+1,e=null,-1!==(c=o.__i=L(o,t,f,a))&&(a--,(e=t[c])&&(e.__u|=2)),null==e||null===e.__v?(-1==c&&(i>s?h--:i<s&&h++),"function"!=typeof o.type&&(o.__u|=4)):c!=f&&(c==f-1?h--:c==f+1?h++:(c>f?h--:h++,o.__u|=4))):n.__k[r]=null;if(a)for(r=0;r<s;r++)null!=(e=t[r])&&0==(2&e.__u)&&(e.__e==u&&(u=S(e)),B$1(e,e));return u}function A$1(n,l,t){var u,i;if("function"==typeof n.type){for(u=n.__k,i=0;u&&i<u.length;i++)u[i]&&(u[i].__=n,l=A$1(u[i],l,t));return l}n.__e!=l&&(l&&n.type&&!t.contains(l)&&(l=S(n)),t.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling;}while(null!=l&&8==l.nodeType);return l}function L(n,l,t,u){var i,r,o=n.key,e=n.type,f=l[t];if(null===f&&null==n.key||f&&o==f.key&&e===f.type&&0==(2&f.__u))return t;if(u>(null!=f&&0==(2&f.__u)?1:0))for(i=t-1,r=t+1;i>=0||r<l.length;){if(i>=0){if((f=l[i])&&0==(2&f.__u)&&o==f.key&&e===f.type)return i;i--;}if(r<l.length){if((f=l[r])&&0==(2&f.__u)&&o==f.key&&e===f.type)return r;r++;}}return  -1}function T$1(n,l,t){"-"==l[0]?n.setProperty(l,null==t?"":t):n[l]=null==t?"":"number"!=typeof t||y$1.test(l)?t:t+"px";}function j$1(n,l,t,u,i){var r;n:if("style"==l)if("string"==typeof t)n.style.cssText=t;else {if("string"==typeof u&&(n.style.cssText=u=""),u)for(l in u)t&&l in t||T$1(n.style,l,"");if(t)for(l in t)u&&t[l]===u[l]||T$1(n.style,l,t[l]);}else if("o"==l[0]&&"n"==l[1])r=l!=(l=l.replace(f$2,"$1")),l=l.toLowerCase()in n||"onFocusOut"==l||"onFocusIn"==l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=t,t?u?t.t=u.t:(t.t=c$1,n.addEventListener(l,r?a$1:s$1,r)):n.removeEventListener(l,r?a$1:s$1,r);else {if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==t?"":t;break n}catch(n){}"function"==typeof t||(null==t||false===t&&"-"!=l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==t?"":t));}}function F(n){return function(t){if(this.l){var u=this.l[t.type+n];if(null==t.u)t.u=c$1++;else if(t.u<u.t)return;return u(l$1.event?l$1.event(t):t)}}}function O(n,t,u,i,r,o,e,f,c,s){var a,h,p,v,y,_,m,b,S,C,M,$,P,A,H,L,T,j=t.type;if(void 0!==t.constructor)return null;128&u.__u&&(c=!!(32&u.__u),o=[f=t.__e=u.__e]),(a=l$1.__b)&&a(t);n:if("function"==typeof j)try{if(b=t.props,S="prototype"in j&&j.prototype.render,C=(a=j.contextType)&&i[a.__c],M=a?C?C.props.value:a.__:i,u.__c?m=(h=t.__c=u.__c).__=h.__E:(S?t.__c=h=new j(b,M):(t.__c=h=new x(b,M),h.constructor=j,h.render=D$1),C&&C.sub(h),h.props=b,h.state||(h.state={}),h.context=M,h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),S&&null==h.__s&&(h.__s=h.state),S&&null!=j.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=w$1({},h.__s)),w$1(h.__s,j.getDerivedStateFromProps(b,h.__s))),v=h.props,y=h.state,h.__v=t,p)S&&null==j.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),S&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(S&&null==j.getDerivedStateFromProps&&b!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(b,M),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(b,h.__s,M)||t.__v==u.__v)){for(t.__v!=u.__v&&(h.props=b,h.state=h.__s,h.__d=!1),t.__e=u.__e,t.__k=u.__k,t.__k.some(function(n){n&&(n.__=t);}),$=0;$<h._sb.length;$++)h.__h.push(h._sb[$]);h._sb=[],h.__h.length&&e.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(b,h.__s,M),S&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,y,_);});}if(h.context=M,h.props=b,h.__P=n,h.__e=!1,P=l$1.__r,A=0,S){for(h.state=h.__s,h.__d=!1,P&&P(t),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[];}else do{h.__d=!1,P&&P(t),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++A<25);h.state=h.__s,null!=h.getChildContext&&(i=w$1(w$1({},i),h.getChildContext())),S&&!p&&null!=h.getSnapshotBeforeUpdate&&(_=h.getSnapshotBeforeUpdate(v,y)),L=a,null!=a&&a.type===k$1&&null==a.key&&(L=N(a.props.children)),f=I(n,d$1(L)?L:[L],t,u,i,r,o,e,f,c,s),h.base=t.__e,t.__u&=-161,h.__h.length&&e.push(h),m&&(h.__E=h.__=null);}catch(n){if(t.__v=null,c||null!=o)if(n.then){for(t.__u|=c?160:128;f&&8==f.nodeType&&f.nextSibling;)f=f.nextSibling;o[o.indexOf(f)]=null,t.__e=f;}else for(T=o.length;T--;)g(o[T]);else t.__e=u.__e,t.__k=u.__k;l$1.__e(n,t,u);}else null==o&&t.__v==u.__v?(t.__k=u.__k,t.__e=u.__e):f=t.__e=V(u.__e,t,u,i,r,o,e,c,s);return (a=l$1.diffed)&&a(t),128&t.__u?void 0:f}function z$1(n,t,u){for(var i=0;i<u.length;i++)q(u[i],u[++i],u[++i]);l$1.__c&&l$1.__c(t,n),n.some(function(t){try{n=t.__h,t.__h=[],n.some(function(n){n.call(t);});}catch(n){l$1.__e(n,t.__v);}});}function N(n){return "object"!=typeof n||null==n?n:d$1(n)?n.map(N):w$1({},n)}function V(t,u,i,r,o,e,f,c,s){var a,h,v,y,w,_,m,b=i.props,k=u.props,x=u.type;if("svg"==x?o="http://www.w3.org/2000/svg":"math"==x?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=e)for(a=0;a<e.length;a++)if((w=e[a])&&"setAttribute"in w==!!x&&(x?w.localName==x:3==w.nodeType)){t=w,e[a]=null;break}if(null==t){if(null==x)return document.createTextNode(k);t=document.createElementNS(o,x,k.is&&k),c&&(l$1.__m&&l$1.__m(u,e),c=false),e=null;}if(null===x)b===k||c&&t.data===k||(t.data=k);else {if(e=e&&n.call(t.childNodes),b=i.props||p$1,!c&&null!=e)for(b={},a=0;a<t.attributes.length;a++)b[(w=t.attributes[a]).name]=w.value;for(a in b)if(w=b[a],"children"==a);else if("dangerouslySetInnerHTML"==a)v=w;else if(!(a in k)){if("value"==a&&"defaultValue"in k||"checked"==a&&"defaultChecked"in k)continue;j$1(t,a,null,w,o);}for(a in k)w=k[a],"children"==a?y=w:"dangerouslySetInnerHTML"==a?h=w:"value"==a?_=w:"checked"==a?m=w:c&&"function"!=typeof w||b[a]===w||j$1(t,a,w,b[a],o);if(h)c||v&&(h.__html===v.__html||h.__html===t.innerHTML)||(t.innerHTML=h.__html),u.__k=[];else if(v&&(t.innerHTML=""),I("template"===u.type?t.content:t,d$1(y)?y:[y],u,i,r,"foreignObject"==x?"http://www.w3.org/1999/xhtml":o,e,f,e?e[0]:i.__k&&S(i,0),c,s),null!=e)for(a=e.length;a--;)g(e[a]);c||(a="value","progress"==x&&null==_?t.removeAttribute("value"):void 0!==_&&(_!==t[a]||"progress"==x&&!_||"option"==x&&_!==b[a])&&j$1(t,a,_,b[a],o),a="checked",void 0!==m&&m!==t[a]&&j$1(t,a,m,b[a],o));}return t}function q(n,t,u){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==t||(n.__u=n(t));}else n.current=t;}catch(n){l$1.__e(n,u);}}function B$1(n,t,u){var i,r;if(l$1.unmount&&l$1.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||q(i,null,t)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$1.__e(n,t);}i.base=i.__P=null;}if(i=n.__k)for(r=0;r<i.length;r++)i[r]&&B$1(i[r],t,u||"function"!=typeof n.type);u||g(n.__e),n.__c=n.__=n.__e=void 0;}function D$1(n,l,t){return this.constructor(n,t)}function E(t,u,i){var r,o,e,f;u==document&&(u=document.documentElement),l$1.__&&l$1.__(t,u),o=(r="function"=="undefined")?null:u.__k,e=[],f=[],O(u,t=(u).__k=_(k$1,null,[t]),o||p$1,p$1,u.namespaceURI,o?null:u.firstChild?n.call(u.childNodes):null,e,o?o.__e:u.firstChild,r,f),z$1(e,t,f);}n=v$1.slice,l$1={__e:function(n,l,t,u){for(var i,r,o;l=l.__;)if((i=l.__c)&&!i.__)try{if((r=i.constructor)&&null!=r.getDerivedStateFromError&&(i.setState(r.getDerivedStateFromError(n)),o=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,u||{}),o=i.__d),o)return i.__E=i}catch(l){n=l;}throw n}},t$1=0,x.prototype.setState=function(n,l){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=w$1({},this.state),"function"==typeof n&&(n=n(w$1({},t),this.props)),n&&w$1(t,n),null!=n&&this.__v&&(l&&this._sb.push(l),M(this));},x.prototype.forceUpdate=function(n){this.__v&&(this.__e=true,n&&this.__h.push(n),M(this));},x.prototype.render=k$1,i$1=[],o$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,e$1=function(n,l){return n.__v.__b-l.__v.__b},$.__r=0,f$2=/(PointerCapture)$|Capture$/i,c$1=0,s$1=F(false),a$1=F(true);

var f$1=0;function u$1(e,t,n,o,i,u){t||(t={});var a,c,p=t;if("ref"in p)for(c in p={},t)"ref"==c?a=t[c]:p[c]=t[c];var l={type:e,props:p,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--f$1,__i:-1,__u:0,__source:i,__self:u};if("function"==typeof e&&(a=e.defaultProps))for(c in a) void 0===p[c]&&(p[c]=a[c]);return l$1.vnode&&l$1.vnode(l),l}

var t,r,u,i,o=0,f=[],c=l$1,e=c.__b,a=c.__r,v=c.diffed,l=c.__c,m=c.unmount,s=c.__;function p(n,t){c.__h&&c.__h(r,n,o||t),o=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function d(n){return o=1,h(D,n)}function h(n,u,i){var o=p(t++,2);if(o.t=n,!o.__c&&(o.__=[D(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.__f)){var f=function(n,t,r){if(!o.__c.__H)return  true;var u=o.__c.__H.__.filter(function(n){return !!n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=o.__c.props!==n;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=true);}}),c&&c.call(this,n,t,r)||i};r.__f=true;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r.shouldComponentUpdate=f;}return o.__N||o.__}function y(n,u){var i=p(t++,3);!c.__s&&C(i.__H,u)&&(i.__=n,i.u=u,r.__H.__h.push(i));}function A(n){return o=5,T(function(){return {current:n}},[])}function T(n,r){var u=p(t++,7);return C(u.__H,r)&&(u.__=n(),u.__H=r,u.__h=n),u.__}function j(){for(var n;n=f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z),n.__H.__h.forEach(B),n.__H.__h=[];}catch(t){n.__H.__h=[],c.__e(t,n.__v);}}c.__b=function(n){r=null,e&&e(n);},c.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),s&&s(n,t);},c.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0;})):(i.__h.forEach(z),i.__h.forEach(B),i.__h=[],t=0)),u=r;},c.diffed=function(n){v&&v(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f.push(t)&&i===c.requestAnimationFrame||((i=c.requestAnimationFrame)||w)(j)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0;})),u=r=null;},c.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(n){return !n.__||B(n)});}catch(r){t.some(function(n){n.__h&&(n.__h=[]);}),t=[],c.__e(r,n.__v);}}),l&&l(n,t);},c.unmount=function(n){m&&m(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z(n);}catch(n){t=n;}}),r.__H=void 0,t&&c.__e(t,r.__v));};var k="function"==typeof requestAnimationFrame;function w(n){var t,r=function(){clearTimeout(u),k&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);k&&(t=requestAnimationFrame(r));}function z(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function B(n){var t=r;n.__c=n.__(),r=t;}function C(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D(n,t){return "function"==typeof t?t(n):t}

const Generatefront = ({ nameStr, nationStr, addrStr, idStr, headImgUrl }) => {
  const [cellSize] = d(6);
  const getGenderFromID = (id) => {
    if (!/^\d{17}[\dXx]$/.test(id)) return "";
    const genderCode = parseInt(id[16], 10);
    return genderCode % 2 === 1 ? "男" : "女";
  };
  const getBirthYear = (id) => id.slice(6, 10) || "";
  const getBirthMonth = (id) => {
    const mm = id.slice(10, 12);
    return mm.startsWith("0") ? mm[1] : mm;
  };
  const getBirthDay = (id) => {
    const dd = id.slice(12, 14);
    return dd.startsWith("0") ? dd[1] : dd;
  };
  const baseURL = "/idcard/";
  const headImageSrc = headImgUrl ? headImgUrl : getGenderFromID(idStr) === "男" ? `${baseURL.replace(/\/$/, "")}/id_img_head_man.png` : `${baseURL.replace(/\/$/, "")}/id_img_head_woman.png`;
  y(() => {
    const el = document.querySelector(".generate-text-address");
    if (!el || !addrStr) return;
    el.innerHTML = "";
    const span = document.createElement("span");
    span.textContent = addrStr;
    el.appendChild(span);
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
    const nodesToReplace = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.nodeValue.includes("-")) {
        nodesToReplace.push(node);
      }
    }
    for (const node of nodesToReplace) {
      const parts = node.nodeValue.split(/(-)/);
      const frag = document.createDocumentFragment();
      for (const part of parts) {
        if (part === "-") {
          const span2 = document.createElement("span");
          span2.className = "latin hyphen";
          span2.textContent = part;
          frag.appendChild(span2);
        } else {
          frag.appendChild(document.createTextNode(part));
        }
      }
      node.parentNode.replaceChild(frag, node);
    }
    const latinRegex = /[\x20-\x7e\u3000-\u303F\uFF00-\uFFEF]/;
    const walker2 = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
    const nodesToReplace2 = [];
    while (walker2.nextNode()) {
      const node = walker2.currentNode;
      if (latinRegex.test(node.nodeValue)) {
        nodesToReplace2.push(node);
      }
    }
    for (const node of nodesToReplace2) {
      const parts = node.nodeValue.split(/([\x20-\x7e\u3000-\u303F\uFF00-\uFFEF]+)/g);
      const frag = document.createDocumentFragment();
      for (const part of parts) {
        if (latinRegex.test(part)) {
          const span2 = document.createElement("span");
          span2.className = "latin";
          span2.textContent = part;
          frag.appendChild(span2);
        } else {
          frag.appendChild(document.createTextNode(part));
        }
      }
      node.parentNode.replaceChild(frag, node);
    }
  }, [addrStr]);
  y(() => {
    const el = document.querySelector(".generate-text-address span");
    if (el) {
      el.style.backgroundImage = `url("${"/idcard/"}noise.png")`;
    }
  }, [addrStr]);
  y(() => {
    const canvas = document.getElementById("generate-head-img-canvas");
    const ctx = canvas.getContext("2d");
    const img = document.getElementById("generate-head-img-head-src");
    if (!canvas || !ctx || !img.complete) return;
    const w = canvas.width;
    const h2 = canvas.height;
    const gap = 2;
    const shrink = gap / Math.sqrt(2);
    const render = () => {
      ctx.clearRect(0, 0, w, h2);
      ctx.drawImage(img, 0, 0, w, h2);
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = w;
      tempCanvas.height = h2;
      const tempCtx = tempCanvas.getContext("2d");
      tempCtx.filter = "blur(3px)";
      tempCtx.drawImage(canvas, 0, 0, w, h2);
      const imageData = tempCtx.getImageData(0, 0, w, h2);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const rand = (Math.random() - 0.5) * 50;
        data[i] = Math.min(255, Math.max(0, data[i] + rand));
        data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + rand));
        data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + rand));
      }
      ctx.putImageData(imageData, 0, 0);
      for (let y = 0; y < h2 + cellSize; y += cellSize) {
        for (let x = 0; x < w + cellSize; x += cellSize) {
          const up = (x / cellSize + y / cellSize) % 2 === 2;
          const centerX = x + cellSize / 2;
          const centerY = y + cellSize / 2;
          const px = Math.min(Math.floor(centerX), w - 1);
          const py = Math.min(Math.floor(centerY), h2 - 1);
          const i0 = (py * w + px) * 4;
          const r = data[i0], g = data[i0 + 1], b = data[i0 + 2], a = data[i0 + 3];
          ctx.beginPath();
          if (up) {
            ctx.moveTo(x + gap / 2, y + cellSize - shrink);
            ctx.lineTo(x + cellSize / 2, y + shrink);
            ctx.lineTo(x + cellSize - gap / 2, y + cellSize - shrink);
          } else {
            ctx.moveTo(x + gap / 2, y + shrink);
            ctx.lineTo(x + cellSize / 2, y + cellSize - shrink);
            ctx.lineTo(x + cellSize - gap / 2, y + shrink);
          }
          ctx.closePath();
          ctx.fillStyle = `rgba(${r},${g},${b},${a / 255})`;
          ctx.fill();
        }
      }
    };
    img.onload = () => {
      render();
    };
    img.onerror = () => {
      console.warn("图片加载失败");
    };
  }, [cellSize, headImageSrc]);
  y(() => {
    const img = document.getElementById("generate-head-img-head-src");
    if (img && headImageSrc) {
      img.src = headImageSrc;
    }
  }, [headImageSrc]);
  return /* @__PURE__ */ u$1("div", { children: /* @__PURE__ */ u$1("div", { className: "generate-list-wrapper", children: [
    /* @__PURE__ */ u$1("div", { className: "generator-list", children: [
      /* @__PURE__ */ u$1("div", { className: "generate-text-name", children: /* @__PURE__ */ u$1("p", { style: {
        backgroundImage: `url("${"/idcard/"}noise.png")`,
        letterSpacing: nameStr.length === 2 ? "80px" : "2px"
      }, children: nameStr }) }),
      /* @__PURE__ */ u$1("div", { className: "generate-text-gender", children: [
        /* @__PURE__ */ u$1(
          "p",
          {
            style: {
              backgroundImage: `url("${"/idcard/"}noise.png")`
            },
            children: getGenderFromID(idStr)
          }
        ),
        /* @__PURE__ */ u$1("p", { style: {
          backgroundImage: `url("${"/idcard/"}noise.png")`
        }, children: nationStr })
      ] }),
      /* @__PURE__ */ u$1("div", { className: "generate-text-born", children: [
        /* @__PURE__ */ u$1(
          "p",
          {
            style: {
              backgroundImage: `url("${"/idcard/"}noise.png")`
            },
            children: getBirthYear(idStr)
          }
        ),
        /* @__PURE__ */ u$1("div", { className: "generate-text-born-month", children: /* @__PURE__ */ u$1(
          "p",
          {
            style: {
              backgroundImage: `url("${"/idcard/"}noise.png")`
            },
            children: getBirthMonth(idStr)
          }
        ) }),
        /* @__PURE__ */ u$1("div", { className: "generate-text-born-month", children: /* @__PURE__ */ u$1(
          "p",
          {
            style: {
              backgroundImage: `url("${"/idcard/"}noise.png")`
            },
            children: getBirthDay(idStr)
          }
        ) })
      ] }),
      /* @__PURE__ */ u$1("div", { className: "generate-text-address" }),
      /* @__PURE__ */ u$1(
        "div",
        {
          className: "generate-text-number",
          children: /* @__PURE__ */ u$1(
            "p",
            {
              style: {
                backgroundImage: `url("${"/idcard/"}noise.png")`
              },
              children: idStr
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ u$1("div", { className: "generate-head-img-wrapper", children: /* @__PURE__ */ u$1("div", { className: "generate-head-img", children: [
      /* @__PURE__ */ u$1("canvas", { id: "generate-head-img-canvas", className: "generate-head-img-canvas", width: "960", height: "1200" }),
      /* @__PURE__ */ u$1(
        "img",
        {
          id: "generate-head-img-head-src",
          src: headImageSrc,
          alt: "",
          style: "visibility: hidden; position: absolute; width: 0; height: 0;"
        }
      )
    ] }) }),
    /* @__PURE__ */ u$1(
      "div",
      {
        className: "generate-bg-img",
        style: {
          backgroundImage: `url("${"/idcard/"}id_img_front.png")`
        }
      }
    )
  ] }) });
};

const Generateback = ({ issueStr, startDate, endDate }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    return dateStr.replace(/-/g, ".");
  };
  return /* @__PURE__ */ u$1("div", { children: /* @__PURE__ */ u$1("div", { className: "generate-list-wrapper", children: [
    /* @__PURE__ */ u$1("div", { className: "generator-list", children: [
      /* @__PURE__ */ u$1(
        "div",
        {
          className: "generate-text-office",
          children: /* @__PURE__ */ u$1("p", { style: {
            backgroundImage: `url("${"/idcard/"}noise.png")`
          }, children: issueStr })
        }
      ),
      /* @__PURE__ */ u$1("div", { className: "generate-text-period", children: [
        /* @__PURE__ */ u$1(
          "p",
          {
            className: "generate-text-period-p",
            style: {
              backgroundImage: `url("${"/idcard/"}noise.png")`
            },
            children: formatDate(startDate)
          }
        ),
        /* @__PURE__ */ u$1(
          "p",
          {
            className: "generate-text-period-hyphen",
            style: {
              backgroundImage: `url("${"/idcard/"}noise.png")`
            },
            children: "-"
          }
        ),
        /* @__PURE__ */ u$1(
          "p",
          {
            className: formatDate(endDate) === "长期" ? "generate-text-period-p-long" : "generate-text-period-p",
            style: {
              backgroundImage: `url("${"/idcard/"}noise.png")`
            },
            children: formatDate(endDate)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ u$1(
      "div",
      {
        className: "generate-bg-img-back",
        style: {
          backgroundImage: `url("${"/idcard/"}id_img_back.png")`
        }
      }
    )
  ] }) });
};

function resolveUrl(url, baseUrl) {
    // url is absolute already
    if (url.match(/^[a-z]+:\/\//i)) {
        return url;
    }
    // url is absolute already, without protocol
    if (url.match(/^\/\//)) {
        return window.location.protocol + url;
    }
    // dataURI, mailto:, tel:, etc.
    if (url.match(/^[a-z]+:/i)) {
        return url;
    }
    const doc = document.implementation.createHTMLDocument();
    const base = doc.createElement('base');
    const a = doc.createElement('a');
    doc.head.appendChild(base);
    doc.body.appendChild(a);
    if (baseUrl) {
        base.href = baseUrl;
    }
    a.href = url;
    return a.href;
}
const uuid = (() => {
    // generate uuid for className of pseudo elements.
    // We should not use GUIDs, otherwise pseudo elements sometimes cannot be captured.
    let counter = 0;
    // ref: http://stackoverflow.com/a/6248722/2519373
    const random = () => 
    // eslint-disable-next-line no-bitwise
    `0000${((Math.random() * 36 ** 4) << 0).toString(36)}`.slice(-4);
    return () => {
        counter += 1;
        return `u${random()}${counter}`;
    };
})();
function toArray(arrayLike) {
    const arr = [];
    for (let i = 0, l = arrayLike.length; i < l; i++) {
        arr.push(arrayLike[i]);
    }
    return arr;
}
let styleProps = null;
function getStyleProperties(options = {}) {
    if (styleProps) {
        return styleProps;
    }
    if (options.includeStyleProperties) {
        styleProps = options.includeStyleProperties;
        return styleProps;
    }
    styleProps = toArray(window.getComputedStyle(document.documentElement));
    return styleProps;
}
function px(node, styleProperty) {
    const win = node.ownerDocument.defaultView || window;
    const val = win.getComputedStyle(node).getPropertyValue(styleProperty);
    return val ? parseFloat(val.replace('px', '')) : 0;
}
function getNodeWidth(node) {
    const leftBorder = px(node, 'border-left-width');
    const rightBorder = px(node, 'border-right-width');
    return node.clientWidth + leftBorder + rightBorder;
}
function getNodeHeight(node) {
    const topBorder = px(node, 'border-top-width');
    const bottomBorder = px(node, 'border-bottom-width');
    return node.clientHeight + topBorder + bottomBorder;
}
function getImageSize(targetNode, options = {}) {
    const width = options.width || getNodeWidth(targetNode);
    const height = options.height || getNodeHeight(targetNode);
    return { width, height };
}
function getPixelRatio() {
    let ratio;
    let FINAL_PROCESS;
    try {
        FINAL_PROCESS = process;
    }
    catch (e) {
        // pass
    }
    const val = FINAL_PROCESS && FINAL_PROCESS.env
        ? FINAL_PROCESS.env.devicePixelRatio
        : null;
    if (val) {
        ratio = parseInt(val, 10);
        if (Number.isNaN(ratio)) {
            ratio = 1;
        }
    }
    return ratio || window.devicePixelRatio || 1;
}
// @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas#maximum_canvas_size
const canvasDimensionLimit = 16384;
function checkCanvasDimensions(canvas) {
    if (canvas.width > canvasDimensionLimit ||
        canvas.height > canvasDimensionLimit) {
        if (canvas.width > canvasDimensionLimit &&
            canvas.height > canvasDimensionLimit) {
            if (canvas.width > canvas.height) {
                canvas.height *= canvasDimensionLimit / canvas.width;
                canvas.width = canvasDimensionLimit;
            }
            else {
                canvas.width *= canvasDimensionLimit / canvas.height;
                canvas.height = canvasDimensionLimit;
            }
        }
        else if (canvas.width > canvasDimensionLimit) {
            canvas.height *= canvasDimensionLimit / canvas.width;
            canvas.width = canvasDimensionLimit;
        }
        else {
            canvas.width *= canvasDimensionLimit / canvas.height;
            canvas.height = canvasDimensionLimit;
        }
    }
}
function createImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            img.decode().then(() => {
                requestAnimationFrame(() => resolve(img));
            });
        };
        img.onerror = reject;
        img.crossOrigin = 'anonymous';
        img.decoding = 'async';
        img.src = url;
    });
}
async function svgToDataURL(svg) {
    return Promise.resolve()
        .then(() => new XMLSerializer().serializeToString(svg))
        .then(encodeURIComponent)
        .then((html) => `data:image/svg+xml;charset=utf-8,${html}`);
}
async function nodeToDataURL(node, width, height) {
    const xmlns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(xmlns, 'svg');
    const foreignObject = document.createElementNS(xmlns, 'foreignObject');
    svg.setAttribute('width', `${width}`);
    svg.setAttribute('height', `${height}`);
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    foreignObject.setAttribute('width', '100%');
    foreignObject.setAttribute('height', '100%');
    foreignObject.setAttribute('x', '0');
    foreignObject.setAttribute('y', '0');
    foreignObject.setAttribute('externalResourcesRequired', 'true');
    svg.appendChild(foreignObject);
    foreignObject.appendChild(node);
    return svgToDataURL(svg);
}
const isInstanceOfElement = (node, instance) => {
    if (node instanceof instance)
        return true;
    const nodePrototype = Object.getPrototypeOf(node);
    if (nodePrototype === null)
        return false;
    return (nodePrototype.constructor.name === instance.name ||
        isInstanceOfElement(nodePrototype, instance));
};

function formatCSSText(style) {
    const content = style.getPropertyValue('content');
    return `${style.cssText} content: '${content.replace(/'|"/g, '')}';`;
}
function formatCSSProperties(style, options) {
    return getStyleProperties(options)
        .map((name) => {
        const value = style.getPropertyValue(name);
        const priority = style.getPropertyPriority(name);
        return `${name}: ${value}${priority ? ' !important' : ''};`;
    })
        .join(' ');
}
function getPseudoElementStyle(className, pseudo, style, options) {
    const selector = `.${className}:${pseudo}`;
    const cssText = style.cssText
        ? formatCSSText(style)
        : formatCSSProperties(style, options);
    return document.createTextNode(`${selector}{${cssText}}`);
}
function clonePseudoElement(nativeNode, clonedNode, pseudo, options) {
    const style = window.getComputedStyle(nativeNode, pseudo);
    const content = style.getPropertyValue('content');
    if (content === '' || content === 'none') {
        return;
    }
    const className = uuid();
    try {
        clonedNode.className = `${clonedNode.className} ${className}`;
    }
    catch (err) {
        return;
    }
    const styleElement = document.createElement('style');
    styleElement.appendChild(getPseudoElementStyle(className, pseudo, style, options));
    clonedNode.appendChild(styleElement);
}
function clonePseudoElements(nativeNode, clonedNode, options) {
    clonePseudoElement(nativeNode, clonedNode, ':before', options);
    clonePseudoElement(nativeNode, clonedNode, ':after', options);
}

const WOFF = 'application/font-woff';
const JPEG = 'image/jpeg';
const mimes = {
    woff: WOFF,
    woff2: WOFF,
    ttf: 'application/font-truetype',
    eot: 'application/vnd.ms-fontobject',
    png: 'image/png',
    jpg: JPEG,
    jpeg: JPEG,
    gif: 'image/gif',
    tiff: 'image/tiff',
    svg: 'image/svg+xml',
    webp: 'image/webp',
};
function getExtension(url) {
    const match = /\.([^./]*?)$/g.exec(url);
    return match ? match[1] : '';
}
function getMimeType(url) {
    const extension = getExtension(url).toLowerCase();
    return mimes[extension] || '';
}

function getContentFromDataUrl(dataURL) {
    return dataURL.split(/,/)[1];
}
function isDataUrl(url) {
    return url.search(/^(data:)/) !== -1;
}
function makeDataUrl(content, mimeType) {
    return `data:${mimeType};base64,${content}`;
}
async function fetchAsDataURL(url, init, process) {
    const res = await fetch(url, init);
    if (res.status === 404) {
        throw new Error(`Resource "${res.url}" not found`);
    }
    const blob = await res.blob();
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onloadend = () => {
            try {
                resolve(process({ res, result: reader.result }));
            }
            catch (error) {
                reject(error);
            }
        };
        reader.readAsDataURL(blob);
    });
}
const cache = {};
function getCacheKey(url, contentType, includeQueryParams) {
    let key = url.replace(/\?.*/, '');
    if (includeQueryParams) {
        key = url;
    }
    // font resource
    if (/ttf|otf|eot|woff2?/i.test(key)) {
        key = key.replace(/.*\//, '');
    }
    return contentType ? `[${contentType}]${key}` : key;
}
async function resourceToDataURL(resourceUrl, contentType, options) {
    const cacheKey = getCacheKey(resourceUrl, contentType, options.includeQueryParams);
    if (cache[cacheKey] != null) {
        return cache[cacheKey];
    }
    // ref: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
    if (options.cacheBust) {
        // eslint-disable-next-line no-param-reassign
        resourceUrl += (/\?/.test(resourceUrl) ? '&' : '?') + new Date().getTime();
    }
    let dataURL;
    try {
        const content = await fetchAsDataURL(resourceUrl, options.fetchRequestInit, ({ res, result }) => {
            if (!contentType) {
                // eslint-disable-next-line no-param-reassign
                contentType = res.headers.get('Content-Type') || '';
            }
            return getContentFromDataUrl(result);
        });
        dataURL = makeDataUrl(content, contentType);
    }
    catch (error) {
        dataURL = options.imagePlaceholder || '';
        let msg = `Failed to fetch resource: ${resourceUrl}`;
        if (error) {
            msg = typeof error === 'string' ? error : error.message;
        }
        if (msg) {
            console.warn(msg);
        }
    }
    cache[cacheKey] = dataURL;
    return dataURL;
}

async function cloneCanvasElement(canvas) {
    const dataURL = canvas.toDataURL();
    if (dataURL === 'data:,') {
        return canvas.cloneNode(false);
    }
    return createImage(dataURL);
}
async function cloneVideoElement(video, options) {
    if (video.currentSrc) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = video.clientWidth;
        canvas.height = video.clientHeight;
        ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataURL = canvas.toDataURL();
        return createImage(dataURL);
    }
    const poster = video.poster;
    const contentType = getMimeType(poster);
    const dataURL = await resourceToDataURL(poster, contentType, options);
    return createImage(dataURL);
}
async function cloneIFrameElement(iframe, options) {
    var _a;
    try {
        if ((_a = iframe === null || iframe === void 0 ? void 0 : iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.body) {
            return (await cloneNode(iframe.contentDocument.body, options, true));
        }
    }
    catch (_b) {
        // Failed to clone iframe
    }
    return iframe.cloneNode(false);
}
async function cloneSingleNode(node, options) {
    if (isInstanceOfElement(node, HTMLCanvasElement)) {
        return cloneCanvasElement(node);
    }
    if (isInstanceOfElement(node, HTMLVideoElement)) {
        return cloneVideoElement(node, options);
    }
    if (isInstanceOfElement(node, HTMLIFrameElement)) {
        return cloneIFrameElement(node, options);
    }
    return node.cloneNode(isSVGElement(node));
}
const isSlotElement = (node) => node.tagName != null && node.tagName.toUpperCase() === 'SLOT';
const isSVGElement = (node) => node.tagName != null && node.tagName.toUpperCase() === 'SVG';
async function cloneChildren(nativeNode, clonedNode, options) {
    var _a, _b;
    if (isSVGElement(clonedNode)) {
        return clonedNode;
    }
    let children = [];
    if (isSlotElement(nativeNode) && nativeNode.assignedNodes) {
        children = toArray(nativeNode.assignedNodes());
    }
    else if (isInstanceOfElement(nativeNode, HTMLIFrameElement) &&
        ((_a = nativeNode.contentDocument) === null || _a === void 0 ? void 0 : _a.body)) {
        children = toArray(nativeNode.contentDocument.body.childNodes);
    }
    else {
        children = toArray(((_b = nativeNode.shadowRoot) !== null && _b !== void 0 ? _b : nativeNode).childNodes);
    }
    if (children.length === 0 ||
        isInstanceOfElement(nativeNode, HTMLVideoElement)) {
        return clonedNode;
    }
    await children.reduce((deferred, child) => deferred
        .then(() => cloneNode(child, options))
        .then((clonedChild) => {
        if (clonedChild) {
            clonedNode.appendChild(clonedChild);
        }
    }), Promise.resolve());
    return clonedNode;
}
function cloneCSSStyle(nativeNode, clonedNode, options) {
    const targetStyle = clonedNode.style;
    if (!targetStyle) {
        return;
    }
    const sourceStyle = window.getComputedStyle(nativeNode);
    if (sourceStyle.cssText) {
        targetStyle.cssText = sourceStyle.cssText;
        targetStyle.transformOrigin = sourceStyle.transformOrigin;
    }
    else {
        getStyleProperties(options).forEach((name) => {
            let value = sourceStyle.getPropertyValue(name);
            if (name === 'font-size' && value.endsWith('px')) {
                const reducedFont = Math.floor(parseFloat(value.substring(0, value.length - 2))) - 0.1;
                value = `${reducedFont}px`;
            }
            if (isInstanceOfElement(nativeNode, HTMLIFrameElement) &&
                name === 'display' &&
                value === 'inline') {
                value = 'block';
            }
            if (name === 'd' && clonedNode.getAttribute('d')) {
                value = `path(${clonedNode.getAttribute('d')})`;
            }
            targetStyle.setProperty(name, value, sourceStyle.getPropertyPriority(name));
        });
    }
}
function cloneInputValue(nativeNode, clonedNode) {
    if (isInstanceOfElement(nativeNode, HTMLTextAreaElement)) {
        clonedNode.innerHTML = nativeNode.value;
    }
    if (isInstanceOfElement(nativeNode, HTMLInputElement)) {
        clonedNode.setAttribute('value', nativeNode.value);
    }
}
function cloneSelectValue(nativeNode, clonedNode) {
    if (isInstanceOfElement(nativeNode, HTMLSelectElement)) {
        const clonedSelect = clonedNode;
        const selectedOption = Array.from(clonedSelect.children).find((child) => nativeNode.value === child.getAttribute('value'));
        if (selectedOption) {
            selectedOption.setAttribute('selected', '');
        }
    }
}
function decorate(nativeNode, clonedNode, options) {
    if (isInstanceOfElement(clonedNode, Element)) {
        cloneCSSStyle(nativeNode, clonedNode, options);
        clonePseudoElements(nativeNode, clonedNode, options);
        cloneInputValue(nativeNode, clonedNode);
        cloneSelectValue(nativeNode, clonedNode);
    }
    return clonedNode;
}
async function ensureSVGSymbols(clone, options) {
    const uses = clone.querySelectorAll ? clone.querySelectorAll('use') : [];
    if (uses.length === 0) {
        return clone;
    }
    const processedDefs = {};
    for (let i = 0; i < uses.length; i++) {
        const use = uses[i];
        const id = use.getAttribute('xlink:href');
        if (id) {
            const exist = clone.querySelector(id);
            const definition = document.querySelector(id);
            if (!exist && definition && !processedDefs[id]) {
                // eslint-disable-next-line no-await-in-loop
                processedDefs[id] = (await cloneNode(definition, options, true));
            }
        }
    }
    const nodes = Object.values(processedDefs);
    if (nodes.length) {
        const ns = 'http://www.w3.org/1999/xhtml';
        const svg = document.createElementNS(ns, 'svg');
        svg.setAttribute('xmlns', ns);
        svg.style.position = 'absolute';
        svg.style.width = '0';
        svg.style.height = '0';
        svg.style.overflow = 'hidden';
        svg.style.display = 'none';
        const defs = document.createElementNS(ns, 'defs');
        svg.appendChild(defs);
        for (let i = 0; i < nodes.length; i++) {
            defs.appendChild(nodes[i]);
        }
        clone.appendChild(svg);
    }
    return clone;
}
async function cloneNode(node, options, isRoot) {
    if (!isRoot && options.filter && !options.filter(node)) {
        return null;
    }
    return Promise.resolve(node)
        .then((clonedNode) => cloneSingleNode(clonedNode, options))
        .then((clonedNode) => cloneChildren(node, clonedNode, options))
        .then((clonedNode) => decorate(node, clonedNode, options))
        .then((clonedNode) => ensureSVGSymbols(clonedNode, options));
}

const URL_REGEX = /url\((['"]?)([^'"]+?)\1\)/g;
const URL_WITH_FORMAT_REGEX = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g;
const FONT_SRC_REGEX = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function toRegex(url) {
    // eslint-disable-next-line no-useless-escape
    const escaped = url.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
    return new RegExp(`(url\\(['"]?)(${escaped})(['"]?\\))`, 'g');
}
function parseURLs(cssText) {
    const urls = [];
    cssText.replace(URL_REGEX, (raw, quotation, url) => {
        urls.push(url);
        return raw;
    });
    return urls.filter((url) => !isDataUrl(url));
}
async function embed(cssText, resourceURL, baseURL, options, getContentFromUrl) {
    try {
        const resolvedURL = baseURL ? resolveUrl(resourceURL, baseURL) : resourceURL;
        const contentType = getMimeType(resourceURL);
        let dataURL;
        if (getContentFromUrl) ;
        else {
            dataURL = await resourceToDataURL(resolvedURL, contentType, options);
        }
        return cssText.replace(toRegex(resourceURL), `$1${dataURL}$3`);
    }
    catch (error) {
        // pass
    }
    return cssText;
}
function filterPreferredFontFormat(str, { preferredFontFormat }) {
    return !preferredFontFormat
        ? str
        : str.replace(FONT_SRC_REGEX, (match) => {
            // eslint-disable-next-line no-constant-condition
            while (true) {
                const [src, , format] = URL_WITH_FORMAT_REGEX.exec(match) || [];
                if (!format) {
                    return '';
                }
                if (format === preferredFontFormat) {
                    return `src: ${src};`;
                }
            }
        });
}
function shouldEmbed(url) {
    return url.search(URL_REGEX) !== -1;
}
async function embedResources(cssText, baseUrl, options) {
    if (!shouldEmbed(cssText)) {
        return cssText;
    }
    const filteredCSSText = filterPreferredFontFormat(cssText, options);
    const urls = parseURLs(filteredCSSText);
    return urls.reduce((deferred, url) => deferred.then((css) => embed(css, url, baseUrl, options)), Promise.resolve(filteredCSSText));
}

async function embedProp(propName, node, options) {
    var _a;
    const propValue = (_a = node.style) === null || _a === void 0 ? void 0 : _a.getPropertyValue(propName);
    if (propValue) {
        const cssString = await embedResources(propValue, null, options);
        node.style.setProperty(propName, cssString, node.style.getPropertyPriority(propName));
        return true;
    }
    return false;
}
async function embedBackground(clonedNode, options) {
    (await embedProp('background', clonedNode, options)) ||
        (await embedProp('background-image', clonedNode, options));
    (await embedProp('mask', clonedNode, options)) ||
        (await embedProp('-webkit-mask', clonedNode, options)) ||
        (await embedProp('mask-image', clonedNode, options)) ||
        (await embedProp('-webkit-mask-image', clonedNode, options));
}
async function embedImageNode(clonedNode, options) {
    const isImageElement = isInstanceOfElement(clonedNode, HTMLImageElement);
    if (!(isImageElement && !isDataUrl(clonedNode.src)) &&
        !(isInstanceOfElement(clonedNode, SVGImageElement) &&
            !isDataUrl(clonedNode.href.baseVal))) {
        return;
    }
    const url = isImageElement ? clonedNode.src : clonedNode.href.baseVal;
    const dataURL = await resourceToDataURL(url, getMimeType(url), options);
    await new Promise((resolve, reject) => {
        clonedNode.onload = resolve;
        clonedNode.onerror = options.onImageErrorHandler
            ? (...attributes) => {
                try {
                    resolve(options.onImageErrorHandler(...attributes));
                }
                catch (error) {
                    reject(error);
                }
            }
            : reject;
        const image = clonedNode;
        if (image.decode) {
            image.decode = resolve;
        }
        if (image.loading === 'lazy') {
            image.loading = 'eager';
        }
        if (isImageElement) {
            clonedNode.srcset = '';
            clonedNode.src = dataURL;
        }
        else {
            clonedNode.href.baseVal = dataURL;
        }
    });
}
async function embedChildren(clonedNode, options) {
    const children = toArray(clonedNode.childNodes);
    const deferreds = children.map((child) => embedImages(child, options));
    await Promise.all(deferreds).then(() => clonedNode);
}
async function embedImages(clonedNode, options) {
    if (isInstanceOfElement(clonedNode, Element)) {
        await embedBackground(clonedNode, options);
        await embedImageNode(clonedNode, options);
        await embedChildren(clonedNode, options);
    }
}

function applyStyle(node, options) {
    const { style } = node;
    if (options.backgroundColor) {
        style.backgroundColor = options.backgroundColor;
    }
    if (options.width) {
        style.width = `${options.width}px`;
    }
    if (options.height) {
        style.height = `${options.height}px`;
    }
    const manual = options.style;
    if (manual != null) {
        Object.keys(manual).forEach((key) => {
            style[key] = manual[key];
        });
    }
    return node;
}

const cssFetchCache = {};
async function fetchCSS(url) {
    let cache = cssFetchCache[url];
    if (cache != null) {
        return cache;
    }
    const res = await fetch(url);
    const cssText = await res.text();
    cache = { url, cssText };
    cssFetchCache[url] = cache;
    return cache;
}
async function embedFonts(data, options) {
    let cssText = data.cssText;
    const regexUrl = /url\(["']?([^"')]+)["']?\)/g;
    const fontLocs = cssText.match(/url\([^)]+\)/g) || [];
    const loadFonts = fontLocs.map(async (loc) => {
        let url = loc.replace(regexUrl, '$1');
        if (!url.startsWith('https://')) {
            url = new URL(url, data.url).href;
        }
        return fetchAsDataURL(url, options.fetchRequestInit, ({ result }) => {
            cssText = cssText.replace(loc, `url(${result})`);
            return [loc, result];
        });
    });
    return Promise.all(loadFonts).then(() => cssText);
}
function parseCSS(source) {
    if (source == null) {
        return [];
    }
    const result = [];
    const commentsRegex = /(\/\*[\s\S]*?\*\/)/gi;
    // strip out comments
    let cssText = source.replace(commentsRegex, '');
    // eslint-disable-next-line prefer-regex-literals
    const keyframesRegex = new RegExp('((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})', 'gi');
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const matches = keyframesRegex.exec(cssText);
        if (matches === null) {
            break;
        }
        result.push(matches[0]);
    }
    cssText = cssText.replace(keyframesRegex, '');
    const importRegex = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi;
    // to match css & media queries together
    const combinedCSSRegex = '((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]' +
        '*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})';
    // unified regex
    const unifiedRegex = new RegExp(combinedCSSRegex, 'gi');
    // eslint-disable-next-line no-constant-condition
    while (true) {
        let matches = importRegex.exec(cssText);
        if (matches === null) {
            matches = unifiedRegex.exec(cssText);
            if (matches === null) {
                break;
            }
            else {
                importRegex.lastIndex = unifiedRegex.lastIndex;
            }
        }
        else {
            unifiedRegex.lastIndex = importRegex.lastIndex;
        }
        result.push(matches[0]);
    }
    return result;
}
async function getCSSRules(styleSheets, options) {
    const ret = [];
    const deferreds = [];
    // First loop inlines imports
    styleSheets.forEach((sheet) => {
        if ('cssRules' in sheet) {
            try {
                toArray(sheet.cssRules || []).forEach((item, index) => {
                    if (item.type === CSSRule.IMPORT_RULE) {
                        let importIndex = index + 1;
                        const url = item.href;
                        const deferred = fetchCSS(url)
                            .then((metadata) => embedFonts(metadata, options))
                            .then((cssText) => parseCSS(cssText).forEach((rule) => {
                            try {
                                sheet.insertRule(rule, rule.startsWith('@import')
                                    ? (importIndex += 1)
                                    : sheet.cssRules.length);
                            }
                            catch (error) {
                                console.error('Error inserting rule from remote css', {
                                    rule,
                                    error,
                                });
                            }
                        }))
                            .catch((e) => {
                            console.error('Error loading remote css', e.toString());
                        });
                        deferreds.push(deferred);
                    }
                });
            }
            catch (e) {
                const inline = styleSheets.find((a) => a.href == null) || document.styleSheets[0];
                if (sheet.href != null) {
                    deferreds.push(fetchCSS(sheet.href)
                        .then((metadata) => embedFonts(metadata, options))
                        .then((cssText) => parseCSS(cssText).forEach((rule) => {
                        inline.insertRule(rule, inline.cssRules.length);
                    }))
                        .catch((err) => {
                        console.error('Error loading remote stylesheet', err);
                    }));
                }
                console.error('Error inlining remote css file', e);
            }
        }
    });
    return Promise.all(deferreds).then(() => {
        // Second loop parses rules
        styleSheets.forEach((sheet) => {
            if ('cssRules' in sheet) {
                try {
                    toArray(sheet.cssRules || []).forEach((item) => {
                        ret.push(item);
                    });
                }
                catch (e) {
                    console.error(`Error while reading CSS rules from ${sheet.href}`, e);
                }
            }
        });
        return ret;
    });
}
function getWebFontRules(cssRules) {
    return cssRules
        .filter((rule) => rule.type === CSSRule.FONT_FACE_RULE)
        .filter((rule) => shouldEmbed(rule.style.getPropertyValue('src')));
}
async function parseWebFontRules(node, options) {
    if (node.ownerDocument == null) {
        throw new Error('Provided element is not within a Document');
    }
    const styleSheets = toArray(node.ownerDocument.styleSheets);
    const cssRules = await getCSSRules(styleSheets, options);
    return getWebFontRules(cssRules);
}
function normalizeFontFamily(font) {
    return font.trim().replace(/["']/g, '');
}
function getUsedFonts(node) {
    const fonts = new Set();
    function traverse(node) {
        const fontFamily = node.style.fontFamily || getComputedStyle(node).fontFamily;
        fontFamily.split(',').forEach((font) => {
            fonts.add(normalizeFontFamily(font));
        });
        Array.from(node.children).forEach((child) => {
            if (child instanceof HTMLElement) {
                traverse(child);
            }
        });
    }
    traverse(node);
    return fonts;
}
async function getWebFontCSS(node, options) {
    const rules = await parseWebFontRules(node, options);
    const usedFonts = getUsedFonts(node);
    const cssTexts = await Promise.all(rules
        .filter((rule) => usedFonts.has(normalizeFontFamily(rule.style.fontFamily)))
        .map((rule) => {
        const baseUrl = rule.parentStyleSheet
            ? rule.parentStyleSheet.href
            : null;
        return embedResources(rule.cssText, baseUrl, options);
    }));
    return cssTexts.join('\n');
}
async function embedWebFonts(clonedNode, options) {
    const cssText = options.fontEmbedCSS != null
        ? options.fontEmbedCSS
        : options.skipFonts
            ? null
            : await getWebFontCSS(clonedNode, options);
    if (cssText) {
        const styleNode = document.createElement('style');
        const sytleContent = document.createTextNode(cssText);
        styleNode.appendChild(sytleContent);
        if (clonedNode.firstChild) {
            clonedNode.insertBefore(styleNode, clonedNode.firstChild);
        }
        else {
            clonedNode.appendChild(styleNode);
        }
    }
}

async function toSvg(node, options = {}) {
    const { width, height } = getImageSize(node, options);
    const clonedNode = (await cloneNode(node, options, true));
    await embedWebFonts(clonedNode, options);
    await embedImages(clonedNode, options);
    applyStyle(clonedNode, options);
    const datauri = await nodeToDataURL(clonedNode, width, height);
    return datauri;
}
async function toCanvas(node, options = {}) {
    const { width, height } = getImageSize(node, options);
    const svg = await toSvg(node, options);
    const img = await createImage(svg);
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const ratio = options.pixelRatio || getPixelRatio();
    const canvasWidth = options.canvasWidth || width;
    const canvasHeight = options.canvasHeight || height;
    canvas.width = canvasWidth * ratio;
    canvas.height = canvasHeight * ratio;
    if (!options.skipAutoScale) {
        checkCanvasDimensions(canvas);
    }
    canvas.style.width = `${canvasWidth}`;
    canvas.style.height = `${canvasHeight}`;
    if (options.backgroundColor) {
        context.fillStyle = options.backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas;
}
async function toPng(node, options = {}) {
    const canvas = await toCanvas(node, options);
    return canvas.toDataURL();
}

const isValidHanzi = (char) => {
  const excluded = "乀乚乙乁一乛丿亅丨丶厂了𠃌〇丆丩丷丄丂七乄丅乂乜凵冂廴讠匸亠厶亻冖勹匕冫卜刂二匚阝几卩厂";
  const code = char.charCodeAt(0);
  return code >= 19968 && code <= 40959 && !excluded.includes(char);
};
const countValidHanzi = (text) => Array.from(text).filter(isValidHanzi).length;
const isValidID = (val) => /^[0-9]{17}[0-9Xx]$/.test(val);
const App = () => {
  const fileInputRef = A(null);
  const [nameVal, setNameVal] = d("");
  const [nationVal, setNationVal] = d("");
  const [addrVal, setAddrVal] = d("");
  const [idVal, setIdVal] = d("");
  const [canGenerate, setCanGenerate] = d(false);
  const [issueVal, setIssueVal] = d("");
  const [startDate, setStartDate] = d("");
  const [endDate, setEndDate] = d("");
  const [showPopup, setShowPopup] = d(false);
  const [uploading, setUploading] = d(false);
  const [uploadSuccess, setUploadSuccess] = d(false);
  const [isGenerating, setIsGenerating] = d(false);
  const [showResultPopup, setShowResultPopup] = d(false);
  const generateTimeoutRef = A(null);
  const [generatedFrontImageUrl, setGeneratedFrontImageUrl] = d(null);
  const [generatedBackImageUrl, setGeneratedBackImageUrl] = d(null);
  const [isShowingBack, setIsShowingBack] = d(false);
  const [uploadedImageURL, setUploadedImageURL] = d(
    sessionStorage.getItem("uploadedImageURL") || ""
  );
  y(() => {
    const validName = countValidHanzi(nameVal) >= 2;
    const validNation = countValidHanzi(nationVal) >= 1;
    const validAddr = countValidHanzi(addrVal) >= 7;
    const validID = isValidID(idVal);
    const requiredValid = validName && validNation && validAddr && validID;
    const issueFilled = issueVal.trim() !== "";
    const issueValid = countValidHanzi(issueVal) >= 6;
    const hasStart = startDate.trim() !== "";
    const hasEnd = endDate.trim() !== "";
    const startValid = startDate.length === 10;
    const endValid = endDate.length === 10 || endDate === "长期";
    const optionalGroupValid = !issueFilled && !hasStart && !hasEnd || issueValid && hasStart && hasEnd && startValid && endValid;
    setCanGenerate(requiredValid && optionalGroupValid);
  }, [nameVal, nationVal, addrVal, idVal, issueVal, startDate, endDate]);
  y(() => {
    const url = sessionStorage.getItem("uploadedImageURL");
    if (url) {
      const img = document.getElementById("head-src");
      if (img) img.src = url;
    }
  }, []);
  y(() => {
    sessionStorage.removeItem("uploadedImageURL");
    setUploadedImageURL("");
  }, []);
  y(() => {
    const handleCancel = (e) => {
      if (isGenerating && !e.target.closest(".button")) {
        setIsGenerating(false);
        clearTimeout(generateTimeoutRef.current);
        generateTimeoutRef.current = null;
        console.log("生成已取消");
      }
    };
    if (isGenerating) {
      document.addEventListener("click", handleCancel);
    }
    return () => {
      document.removeEventListener("click", handleCancel);
    };
  }, [isGenerating]);
  y(() => {
    const baseURL = "/idcard/";
    const buildFontURL = (file) => `${baseURL.replace(/\/$/, "")}/${file}`;
    const fontCSS = `
    @font-face {
      font-family: "font_name";
      src: url("${buildFontURL("font_name.ttf")}") format("truetype");
      font-display: swap;
    }
    @font-face {
      font-family: "font_born";
      src: url("${buildFontURL("font_born.ttf")}") format("truetype");
      font-display: swap;
    }
    @font-face {
      font-family: "font_number";
      src: url("${buildFontURL("font_number.ttf")}") format("truetype");
      font-display: swap;
    }
  `;
    const style = document.createElement("style");
    style.innerText = fontCSS;
    document.head.appendChild(style);
  }, []);
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };
  return /* @__PURE__ */ u$1("div", { children: [
    /* @__PURE__ */ u$1("meta", { name: "apple-mobile-web-app-capable", content: "yes" }),
    /* @__PURE__ */ u$1("meta", { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" }),
    /* @__PURE__ */ u$1("meta", { name: "theme-color", content: "#FECF40" }),
    /* @__PURE__ */ u$1("img", { id: "head-src", style: "display: none;", alt: "" }),
    showPopup && /* @__PURE__ */ u$1("div", { className: "input-popup-overlay", onClick: () => setShowPopup(false), children: /* @__PURE__ */ u$1("div", { className: "input-popup", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ u$1("h2", { className: "input-popup-title", children: "裁剪/五官位置参考" }),
      /* @__PURE__ */ u$1("img", { className: "input-popup-image", src: `${"/idcard/"}id_img_head_woman.png`, alt: "" }),
      /* @__PURE__ */ u$1("p", { className: "input-popup-text", children: "建议使用 400*500 透明背景PNG格式" }),
      /* @__PURE__ */ u$1("button", { className: "button", onClick: () => handleUploadClick(), children: /* @__PURE__ */ u$1("p", { children: "上传" }) })
    ] }) }),
    showResultPopup && /* @__PURE__ */ u$1(
      "div",
      {
        className: "input-popup-overlay",
        onClick: () => {
          setShowResultPopup(false);
          setIsShowingBack(false);
        },
        children: /* @__PURE__ */ u$1("div", { className: "input-popup", onClick: (e) => e.stopPropagation(), children: [
          /* @__PURE__ */ u$1("div", { className: "input-popup-title-generate", children: [
            /* @__PURE__ */ u$1("div", { className: "input-popup-title-generate-svg" }),
            /* @__PURE__ */ u$1("p", { children: "仅用于软件开发相关功能测试使用，请勿用于任何非法用途，且自行承担后果和责任" })
          ] }),
          isShowingBack ? /* @__PURE__ */ u$1(
            "img",
            {
              className: "input-popup-image-generate",
              src: generatedBackImageUrl,
              alt: "背面"
            }
          ) : /* @__PURE__ */ u$1(
            "img",
            {
              className: "input-popup-image-generate",
              src: generatedFrontImageUrl,
              alt: "正面"
            }
          ),
          generatedBackImageUrl && /* @__PURE__ */ u$1("div", { className: "input-popup-text-generate", onClick: () => {
            setIsShowingBack(!isShowingBack);
          }, children: /* @__PURE__ */ u$1("p", { children: isShowingBack ? "查看正面" : "查看背面" }) }),
          /* @__PURE__ */ u$1(
            "button",
            {
              className: "button-generated",
              onClick: () => {
                const currentImageUrl = isShowingBack ? generatedBackImageUrl : generatedFrontImageUrl;
                const filename = isShowingBack ? "身份证背面.png" : "身份证正面.png";
                if (!currentImageUrl) {
                  alert("当前图像未生成");
                  return;
                }
                const a = document.createElement("a");
                a.href = currentImageUrl;
                a.download = filename;
                a.click();
              },
              children: /* @__PURE__ */ u$1("p", { children: "保存" })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ u$1("div", { className: "input-list-nav", children: /* @__PURE__ */ u$1("span", { className: "nav-icon", children: " " }) }),
    /* @__PURE__ */ u$1("div", { className: "input-list", children: [
      /* @__PURE__ */ u$1("div", { className: "input-horizon", children: [
        /* @__PURE__ */ u$1("div", { className: "input-box-upload-vertical", children: [
          /* @__PURE__ */ u$1("div", { className: "input-horizon", children: [
            /* @__PURE__ */ u$1(
              "input",
              {
                className: "input-box name",
                placeholder: "姓名",
                value: nameVal,
                onInput: (e) => setNameVal(e.target.value)
              }
            ),
            /* @__PURE__ */ u$1(
              "input",
              {
                className: "input-box nation",
                placeholder: "民族",
                value: nationVal,
                onInput: (e) => setNationVal(e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ u$1(
            "input",
            {
              className: "input-box",
              placeholder: "身份证号码",
              value: idVal,
              onInput: (e) => setIdVal(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ u$1("div", { className: uploadSuccess ? "input-box-upload-success" : "input-box-upload", onClick: () => !uploading && setShowPopup(true), children: [
          uploading ? /* @__PURE__ */ u$1(
            "svg",
            {
              className: "input-loading-spinner",
              width: "24",
              height: "24",
              viewBox: "0 0 50 50",
              children: /* @__PURE__ */ u$1(
                "circle",
                {
                  className: "path",
                  cx: "25",
                  cy: "25",
                  r: "20",
                  fill: "none",
                  strokeWidth: "5"
                }
              )
            }
          ) : /* @__PURE__ */ u$1("p", { children: uploadSuccess ? "上传成功" : "上传照片" }),
          /* @__PURE__ */ u$1(
            "input",
            {
              className: "input-box-upload-input",
              type: "file",
              accept: "image/*",
              ref: fileInputRef,
              onChange: (e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = () => {
                    const dataUrl = (
                      /** @type {string} */
                      reader.result
                    );
                    sessionStorage.setItem("uploadedImageURL", dataUrl);
                    setUploadedImageURL(dataUrl);
                    console.log("图片 DataURL：", dataUrl);
                    setShowPopup(false);
                    setUploading(false);
                    setUploadSuccess(true);
                  };
                  reader.readAsDataURL(file);
                  setShowPopup(false);
                  setUploading(false);
                  setUploadSuccess(true);
                }
              }
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ u$1(
        "input",
        {
          className: "input-box",
          placeholder: "住址",
          value: addrVal,
          onInput: (e) => setAddrVal(e.target.value)
        }
      ),
      /* @__PURE__ */ u$1("div", { className: "input-box-line" }),
      /* @__PURE__ */ u$1(
        "input",
        {
          className: "input-box",
          placeholder: "签发机关",
          value: issueVal,
          onInput: (e) => setIssueVal(e.target.value)
        }
      ),
      /* @__PURE__ */ u$1("div", { className: "input-horizon-term", children: [
        /* @__PURE__ */ u$1(
          "input",
          {
            className: "input-box period",
            placeholder: "有效期限",
            value: startDate,
            onInput: (e) => setStartDate(e.target.value)
          }
        ),
        /* @__PURE__ */ u$1("p", { children: " - " }),
        /* @__PURE__ */ u$1(
          "input",
          {
            className: "input-box period",
            placeholder: "结束期限",
            value: endDate,
            onInput: (e) => setEndDate(e.target.value)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ u$1("div", { className: "button-footer", children: /* @__PURE__ */ u$1(
      "button",
      {
        className: "button",
        disabled: !canGenerate || isGenerating,
        onClick: async () => {
          setIsGenerating(true);
          setGeneratedFrontImageUrl(null);
          setGeneratedBackImageUrl(null);
          try {
            const frontTarget = document.querySelector(".generate-list-wrapper");
            if (!frontTarget) {
              console.error("找不到正面 generate-list-wrapper 元素");
              setIsGenerating(false);
              return;
            }
            const headImg = frontTarget.querySelector("#generate-head-img-head-src");
            if (!headImg || !headImg.complete) {
              await new Promise((resolve) => {
                if (!headImg) {
                  console.warn("找不到头像图像元素");
                  resolve();
                  return;
                }
                headImg.onload = resolve;
                headImg.onerror = () => {
                  console.warn("头像图片加载失败");
                  resolve();
                };
              });
            }
            const frontImage = await toPng(frontTarget, {
              cacheBust: true,
              backgroundColor: null
            });
            console.log("✅ 正面截图完成");
            let backImage = null;
            if (issueVal.trim()) {
              const backTarget = document.querySelectorAll(".generate-list-wrapper")[1];
              if (backTarget) {
                backImage = await toPng(backTarget, {
                  cacheBust: true,
                  backgroundColor: null
                });
                console.log("✅ 背面截图完成");
              } else {
                console.warn("未找到背面 generate-list-wrapper 元素");
              }
            }
            setGeneratedFrontImageUrl(frontImage);
            setGeneratedBackImageUrl(backImage);
            setShowResultPopup(true);
          } catch (err) {
            console.error("生成失败", err);
          } finally {
            setIsGenerating(false);
          }
        },
        children: isGenerating ? /* @__PURE__ */ u$1("div", { className: "button-loading", children: /* @__PURE__ */ u$1("p", { children: "生成" }) }) : /* @__PURE__ */ u$1("p", { children: "生成" })
      }
    ) }),
    /* @__PURE__ */ u$1("div", { style: "position: absolute; left: -9999px; top: 0;", children: /* @__PURE__ */ u$1(
      Generatefront,
      {
        nameStr: nameVal,
        nationStr: nationVal,
        addrStr: addrVal,
        idStr: idVal,
        headImgUrl: uploadedImageURL
      }
    ) }),
    /* @__PURE__ */ u$1("div", { style: "position: absolute; left: -14999px; top: 0;", children: /* @__PURE__ */ u$1(
      Generateback,
      {
        issueStr: issueVal,
        startDate,
        endDate
      }
    ) })
  ] });
};

E(/* @__PURE__ */ u$1(App, {}), document.getElementById("app"));
