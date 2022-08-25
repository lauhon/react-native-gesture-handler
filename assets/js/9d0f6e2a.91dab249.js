"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[6926],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),h=r,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},46519:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return d}});var n=a(83117),r=(a(67294),a(3905));const i={id:"tap-gh",title:"TapGestureHandler",sidebar_label:"Tap"},s=void 0,o={unversionedId:"gesture-handlers/api/tap-gh",id:"version-2.6.0/gesture-handlers/api/tap-gh",title:"TapGestureHandler",description:"We recently released RNGH 2.0 with new Gestures system. Check out [RNGH 2.0",source:"@site/versioned_docs/version-2.6.0/gesture-handlers/api/tap-gh.md",sourceDirName:"gesture-handlers/api",slug:"/gesture-handlers/api/tap-gh",permalink:"/react-native-gesture-handler/docs/gesture-handlers/api/tap-gh",draft:!1,tags:[],version:"2.6.0",frontMatter:{id:"tap-gh",title:"TapGestureHandler",sidebar_label:"Tap"},sidebar:"docs",previous:{title:"Pan",permalink:"/react-native-gesture-handler/docs/gesture-handlers/api/pan-gh"},next:{title:"Long press",permalink:"/react-native-gesture-handler/docs/gesture-handlers/api/longpress-gh"}},l={},d=[{value:"Properties",id:"properties",level:2},{value:"<code>minPointers</code>",id:"minpointers",level:3},{value:"<code>maxDurationMs</code>",id:"maxdurationms",level:3},{value:"<code>maxDelayMs</code>",id:"maxdelayms",level:3},{value:"<code>numberOfTaps</code>",id:"numberoftaps",level:3},{value:"<code>maxDeltaX</code>",id:"maxdeltax",level:3},{value:"<code>maxDeltaY</code>",id:"maxdeltay",level:3},{value:"<code>maxDist</code>",id:"maxdist",level:3},{value:"Event data",id:"event-data",level:2},{value:"<code>x</code>",id:"x",level:3},{value:"<code>y</code>",id:"y",level:3},{value:"<code>absoluteX</code>",id:"absolutex",level:3},{value:"<code>absoluteY</code>",id:"absolutey",level:3},{value:"Example",id:"example",level:2}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We recently released RNGH 2.0 with new Gestures system. Check out ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/#rngh-20"},"RNGH 2.0\nsection in Introduction")," for more information.")),(0,r.kt)("p",null,"A discrete gesture handler that recognizes one or many taps."),(0,r.kt)("p",null,"Tap gestures detect one or more fingers briefly touching the screen.\nThe fingers involved in these gestures must not move significantly from their initial touch positions.\nThe required number of taps and allowed distance from initial position may be configured.\nFor example, you might configure tap gesture recognizers to detect single taps, double taps, or triple taps."),(0,r.kt)("p",null,"In order for a handler to ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/basics/state#active"},"activate"),", specified gesture requirements such as minPointers, numberOfTaps, maxDist, maxDurationMs, and maxDelayMs (explained below) must be met. Immediately after the handler ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/basics/state#active"},"activates"),", it will ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/basics/state#end"},"END"),"."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/api/common-gh#properties"},"set of properties inherited from base handler class"),". Below is a list of properties specific to the ",(0,r.kt)("inlineCode",{parentName:"p"},"TapGestureHandler")," component:"),(0,r.kt)("h3",{id:"minpointers"},(0,r.kt)("inlineCode",{parentName:"h3"},"minPointers")),(0,r.kt)("p",null,"Minimum number of pointers (fingers) required to be placed before the handler ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/basics/state#active"},"activates"),". Should be a positive integer. The default value is 1."),(0,r.kt)("h3",{id:"maxdurationms"},(0,r.kt)("inlineCode",{parentName:"h3"},"maxDurationMs")),(0,r.kt)("p",null,"Maximum time, expressed in milliseconds, that defines how fast a finger must be released after a touch. The default value is 500."),(0,r.kt)("h3",{id:"maxdelayms"},(0,r.kt)("inlineCode",{parentName:"h3"},"maxDelayMs")),(0,r.kt)("p",null,"Maximum time, expressed in milliseconds, that can pass before the next tap \u2014 if many taps are required. The default value is 500."),(0,r.kt)("h3",{id:"numberoftaps"},(0,r.kt)("inlineCode",{parentName:"h3"},"numberOfTaps")),(0,r.kt)("p",null,"Number of tap gestures required to ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/basics/state#active"},"activate")," the handler. The default value is 1."),(0,r.kt)("h3",{id:"maxdeltax"},(0,r.kt)("inlineCode",{parentName:"h3"},"maxDeltaX")),(0,r.kt)("p",null,"Maximum distance, expressed in points, that defines how far the finger is allowed to travel along the X axis during a tap gesture. If the finger travels further than the defined distance along the X axis and the handler hasn't yet ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/basics/state#active"},"activated"),", it will fail to recognize the gesture."),(0,r.kt)("h3",{id:"maxdeltay"},(0,r.kt)("inlineCode",{parentName:"h3"},"maxDeltaY")),(0,r.kt)("p",null,"Maximum distance, expressed in points, that defines how far the finger is allowed to travel along the Y axis during a tap gesture. If the finger travels further than the defined distance along the Y axis and the handler hasn't yet ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/basics/state#active"},"activated"),", it will fail to recognize the gesture."),(0,r.kt)("h3",{id:"maxdist"},(0,r.kt)("inlineCode",{parentName:"h3"},"maxDist")),(0,r.kt)("p",null,"Maximum distance, expressed in points, that defines how far the finger is allowed to travel during a tap gesture. If the finger travels further than the defined distance and the handler hasn't yet ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/basics/state#active"},"activated"),", it will fail to recognize the gesture."),(0,r.kt)("h2",{id:"event-data"},"Event data"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/api/common-gh#event-data"},"set of event attributes from base handler class"),". Below is a list of gesture event attributes specific to the ",(0,r.kt)("inlineCode",{parentName:"p"},"TapGestureHandler")," component:"),(0,r.kt)("h3",{id:"x"},(0,r.kt)("inlineCode",{parentName:"h3"},"x")),(0,r.kt)("p",null,"X coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the handler."),(0,r.kt)("h3",{id:"y"},(0,r.kt)("inlineCode",{parentName:"h3"},"y")),(0,r.kt)("p",null,"Y coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the handler."),(0,r.kt)("h3",{id:"absolutex"},(0,r.kt)("inlineCode",{parentName:"h3"},"absoluteX")),(0,r.kt)("p",null,"X coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the window. It is recommended to use ",(0,r.kt)("inlineCode",{parentName:"p"},"absoluteX")," instead of ",(0,r.kt)("a",{parentName:"p",href:"#x"},(0,r.kt)("inlineCode",{parentName:"a"},"x"))," in cases when the view attached to the handler can be transformed as an effect of the gesture."),(0,r.kt)("h3",{id:"absolutey"},(0,r.kt)("inlineCode",{parentName:"h3"},"absoluteY")),(0,r.kt)("p",null,"Y coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the window. It is recommended to use ",(0,r.kt)("inlineCode",{parentName:"p"},"absoluteY")," instead of ",(0,r.kt)("a",{parentName:"p",href:"#y"},(0,r.kt)("inlineCode",{parentName:"a"},"y"))," in cases when the view attached to the handler can be transformed as an effect of the gesture."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler/blob/main/example/src/basic/multitap/index.tsx"},"multitap example")," from GestureHandler Example App."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export class PressBox extends Component {\n  doubleTapRef = React.createRef();\n  render() {\n    return (\n      <TapGestureHandler\n        onHandlerStateChange={this._onSingleTap}\n        waitFor={this.doubleTapRef}>\n        <TapGestureHandler ref={this.doubleTapRef} numberOfTaps={2}>\n          <View style={styles.box} />\n        </TapGestureHandler>\n      </TapGestureHandler>\n    );\n  }\n}\n")))}u.isMDXComponent=!0}}]);