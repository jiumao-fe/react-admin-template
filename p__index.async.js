(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"0PAB":function(e,t,a){e.exports={toolbar:"toolbar___38Dnw",left:"left___1KPCE",right:"right___dgz4g"}},QeBL:function(e,t,a){"use strict";var l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var r=l(a("2/Rp")),n=l(a("lwsE")),o=l(a("W8MJ")),i=l(a("a1gu")),u=l(a("Nsbk")),d=l(a("7W2i")),s=l(a("q1tI")),f=l(a("iPF4")),c=function(e){function t(e){return(0,n.default)(this,t),(0,i.default)(this,(0,u.default)(t).call(this,e))}return(0,d.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return s.default.createElement("div",null,"hello, \u6b22\u8fce\u52a0\u5165\u4e5d\u6bdb\u79d1\u6280\u3002",s.default.createElement(f.default,{extra:"extra information"},s.default.createElement(r.default,null,"Cancel"),s.default.createElement(r.default,{type:"primary"},"Submit")))}}]),t}(s.default.Component),v=c;t.default=v},iPF4:function(e,t,a){"use strict";var l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("lwsE")),n=l(a("W8MJ")),o=l(a("a1gu")),i=l(a("Nsbk")),u=l(a("7W2i")),d=l(a("q1tI")),s=l(a("TSYQ")),f=l(a("0PAB")),c=function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&(a[l[r]]=e[l[r]])}return a},v=function(e){function t(e){var a;return(0,r.default)(this,t),a=(0,o.default)(this,(0,i.default)(t).call(this,e)),a.resizeFooterToolbar=function(){var e=document.querySelector(".ant-layout-sider");if(null!=e){var t=e.clientWidth,l=a.state.width;console.log(t),l!==t&&a.setState({width:t})}},a.state={width:void 0},a}return(0,u.default)(t,e),(0,n.default)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resizeFooterToolbar),this.resizeFooterToolbar()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resizeFooterToolbar)}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.children,l=e.extra,r=c(e,["className","children","extra"]),n=this.state.width,o=(0,s.default)(t,f.default.toolbar);return d.default.createElement("div",Object.assign({className:o,style:{width:n}},r),d.default.createElement("div",{className:f.default.left},l),d.default.createElement("div",{className:f.default.right},a))}}]),t}(d.default.Component);v.defaultProps={className:""};var h=v;t.default=h}}]);