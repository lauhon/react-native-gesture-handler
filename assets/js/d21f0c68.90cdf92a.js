"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[7088,1443,3237,1740],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,g=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},57977:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var a=n(83117),r=(n(67294),n(3905));const o={},i=void 0,l={unversionedId:"api/gestures/base-gesture-callbacks",id:"api/gestures/base-gesture-callbacks",title:"base-gesture-callbacks",description:"Callbacks common to all gestures:",source:"@site/docs/api/gestures/base-gesture-callbacks.md",sourceDirName:"api/gestures",slug:"/api/gestures/base-gesture-callbacks",permalink:"/react-native-gesture-handler/docs/next/api/gestures/base-gesture-callbacks",draft:!1,tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Callbacks common to all gestures:",id:"callbacks-common-to-all-gestures",level:3},{value:"<code>onBegin(callback)</code>",id:"onbegincallback",level:3},{value:"<code>onStart(callback)</code>",id:"onstartcallback",level:3},{value:"<code>onEnd(callback)</code>",id:"onendcallback",level:3},{value:"<code>onFinalize(callback)</code>",id:"onfinalizecallback",level:3},{value:"<code>onTouchesDown(callback)</code>",id:"ontouchesdowncallback",level:3},{value:"<code>onTouchesMove(callback)</code>",id:"ontouchesmovecallback",level:3},{value:"<code>onTouchesUp(callback)</code>",id:"ontouchesupcallback",level:3},{value:"<code>onTouchesCancelled(callback)</code>",id:"ontouchescancelledcallback",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"callbacks-common-to-all-gestures"},"Callbacks common to all gestures:"),(0,r.kt)("h3",{id:"onbegincallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"onBegin(callback)")),(0,r.kt)("p",null,"Set the callback that is being called when given gesture handler starts receiving touches. At the moment of this callback the handler is not yet in an active state and we don't know yet if it will recognize the gesture at all."),(0,r.kt)("h3",{id:"onstartcallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"onStart(callback)")),(0,r.kt)("p",null,"Set the callback that is being called when the gesture is recognized by the handler and it transitions to the active state."),(0,r.kt)("h3",{id:"onendcallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"onEnd(callback)")),(0,r.kt)("p",null,"Set the callback that is being called when the gesture that was recognized by the handler finishes. It will be called only if the handler was previously in the active state."),(0,r.kt)("h3",{id:"onfinalizecallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"onFinalize(callback)")),(0,r.kt)("p",null,"Set the callback that is being called when the handler finalizes handling gesture - the gesture was recognized and has finished or it failed to recognize."),(0,r.kt)("h3",{id:"ontouchesdowncallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"onTouchesDown(callback)")),(0,r.kt)("p",null,"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"onTouchesDown")," callback which is called every time a finger is placed on the screen."),(0,r.kt)("h3",{id:"ontouchesmovecallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"onTouchesMove(callback)")),(0,r.kt)("p",null,"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"onTouchesMove")," callback which is called every time a finger is moved on the screen."),(0,r.kt)("h3",{id:"ontouchesupcallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"onTouchesUp(callback)")),(0,r.kt)("p",null,"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"onTouchesUp")," callback which is called every time a finger is lifted from the screen."),(0,r.kt)("h3",{id:"ontouchescancelledcallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"onTouchesCancelled(callback)")),(0,r.kt)("p",null,"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"onTouchesCancelled")," callback which is called every time a finger stops being tracked, for example when the gesture finishes."))}d.isMDXComponent=!0},50830:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var a=n(83117),r=(n(67294),n(3905));const o={},i=void 0,l={unversionedId:"api/gestures/base-gesture-config",id:"api/gestures/base-gesture-config",title:"base-gesture-config",description:"Properties common to all gestures:",source:"@site/docs/api/gestures/base-gesture-config.md",sourceDirName:"api/gestures",slug:"/api/gestures/base-gesture-config",permalink:"/react-native-gesture-handler/docs/next/api/gestures/base-gesture-config",draft:!1,tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Properties common to all gestures:",id:"properties-common-to-all-gestures",level:3},{value:"<code>enabled(value: boolean)</code>",id:"enabledvalue-boolean",level:3},{value:"<code>shouldCancelWhenOutside(value: boolean)</code>",id:"shouldcancelwhenoutsidevalue-boolean",level:3},{value:"<code>hitSlop(settings)</code>",id:"hitslopsettings",level:3},{value:"<code>withRef(ref)</code>",id:"withrefref",level:3},{value:"<code>withTestId(testID)</code>",id:"withtestidtestid",level:3},{value:"<code>cancelsTouchesInView(value)</code> (<strong>iOS only</strong>)",id:"cancelstouchesinviewvalue-ios-only",level:3},{value:"<code>runOnJS(value: boolean)</code>",id:"runonjsvalue-boolean",level:3},{value:"<code>simultaneousWithExternalGesture(otherGesture1, otherGesture2, ...)</code>",id:"simultaneouswithexternalgestureothergesture1-othergesture2-",level:3},{value:"<code>requireExternalGestureToFail(otherGesture1, otherGesture2, ...)</code>",id:"requireexternalgesturetofailothergesture1-othergesture2-",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"properties-common-to-all-gestures"},"Properties common to all gestures:"),(0,r.kt)("h3",{id:"enabledvalue-boolean"},(0,r.kt)("inlineCode",{parentName:"h3"},"enabled(value: boolean)")),(0,r.kt)("p",null,"Indicates whether the given handler should be analyzing stream of touch events or not.\nWhen set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," we can be sure that the handler's state will ",(0,r.kt)("strong",{parentName:"p"},"never")," become ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#active"},(0,r.kt)("inlineCode",{parentName:"a"},"ACTIVE")),".\nIf the value gets updated while the handler already started recognizing a gesture, then the handler's state it will immediately change to ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#failed"},(0,r.kt)("inlineCode",{parentName:"a"},"FAILED"))," or ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#cancelled"},(0,r.kt)("inlineCode",{parentName:"a"},"CANCELLED"))," (depending on its current state).\nDefault value is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h3",{id:"shouldcancelwhenoutsidevalue-boolean"},(0,r.kt)("inlineCode",{parentName:"h3"},"shouldCancelWhenOutside(value: boolean)")),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," the handler will ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#cancelled"},"cancel")," or ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#failed"},"fail")," recognition (depending on its current state) whenever the finger leaves the area of the connected view.\nDefault value of this property is different depending on the handler type.\nMost handlers' ",(0,r.kt)("inlineCode",{parentName:"p"},"shouldCancelWhenOutside")," property defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," except for the ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/next/api/gestures/long-press-gesture"},(0,r.kt)("inlineCode",{parentName:"a"},"LongPressGesture"))," and ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/next/api/gestures/tap-gesture"},(0,r.kt)("inlineCode",{parentName:"a"},"TapGesture"))," which default to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h3",{id:"hitslopsettings"},(0,r.kt)("inlineCode",{parentName:"h3"},"hitSlop(settings)")),(0,r.kt)("p",null,"This parameter enables control over what part of the connected view area can be used to ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#began"},"begin")," recognizing the gesture.\nWhen a negative number is provided the bounds of the view will reduce the area by the given number of points in each of the sides evenly."),(0,r.kt)("p",null,"Instead you can pass an object to specify how each boundary side should be reduced by providing different number of points for ",(0,r.kt)("inlineCode",{parentName:"p"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"right"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"top")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"bottom")," sides.\nYou can alternatively provide ",(0,r.kt)("inlineCode",{parentName:"p"},"horizontal")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"vertical")," instead of specifying directly ",(0,r.kt)("inlineCode",{parentName:"p"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"right")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"top")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"bottom"),".\nFinally, the object can also take ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," attributes.\nWhen ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," is set it is only allow to specify one of the sides ",(0,r.kt)("inlineCode",{parentName:"p"},"right")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"left"),".\nSimilarly when ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," is provided only ",(0,r.kt)("inlineCode",{parentName:"p"},"top")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"bottom")," can be set.\nSpecifying ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," is useful if we only want the gesture to activate on the edge of the view. In which case for example we can set ",(0,r.kt)("inlineCode",{parentName:"p"},"left: 0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"width: 20")," which would make it possible for the gesture to be recognize when started no more than 20 points from the left edge."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IMPORTANT:")," Note that this parameter is primarily designed to reduce the area where gesture can activate. Hence it is only supported for all the values (except ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"height"),") to be non positive (0 or lower). Although on Android it is supported for the values to also be positive and therefore allow to expand beyond view bounds but not further than the parent view bounds. To achieve this effect on both platforms you can use React Native's View ",(0,r.kt)("a",{parentName:"p",href:"https://facebook.github.io/react-native/docs/view.html#props"},"hitSlop")," property."),(0,r.kt)("h3",{id:"withrefref"},(0,r.kt)("inlineCode",{parentName:"h3"},"withRef(ref)")),(0,r.kt)("p",null,"Sets a ref to the gesture object, allowing for interoperability with the old\nAPI."),(0,r.kt)("h3",{id:"withtestidtestid"},(0,r.kt)("inlineCode",{parentName:"h3"},"withTestId(testID)")),(0,r.kt)("p",null,"Sets a ",(0,r.kt)("inlineCode",{parentName:"p"},"testID")," property for gesture object, allowing for querying for it in tests."),(0,r.kt)("h3",{id:"cancelstouchesinviewvalue-ios-only"},(0,r.kt)("inlineCode",{parentName:"h3"},"cancelsTouchesInView(value)")," (",(0,r.kt)("strong",{parentName:"h3"},"iOS only"),")"),(0,r.kt)("p",null,"Accepts a boolean value.\nWhen ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the gesture will cancel touches for native UI components (",(0,r.kt)("inlineCode",{parentName:"p"},"UIButton"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"UISwitch"),", etc) it's attached to when it becomes ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#active"},(0,r.kt)("inlineCode",{parentName:"a"},"ACTIVE")),".\nDefault value is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h3",{id:"runonjsvalue-boolean"},(0,r.kt)("inlineCode",{parentName:"h3"},"runOnJS(value: boolean)")),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-reanimated")," is installed, the callbacks passed to the gestures are automatically workletized and run on the UI thread when called. This option allows for changing this behavior: when ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", all the callbacks will be run on the JS thread instead of the UI thread, regardless of whether they are worklets or not.\nDefaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h3",{id:"simultaneouswithexternalgestureothergesture1-othergesture2-"},(0,r.kt)("inlineCode",{parentName:"h3"},"simultaneousWithExternalGesture(otherGesture1, otherGesture2, ...)")),(0,r.kt)("p",null,"Adds a gesture that should be recognized simultaneously with this one."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IMPORTANT:")," Note that this method only marks the relation between gestures, without ",(0,r.kt)("a",{parentName:"p",href:"../../gesture-composition"},"composing them"),". ",(0,r.kt)("a",{parentName:"p",href:"gesture-detector"},(0,r.kt)("inlineCode",{parentName:"a"},"GestureDetector"))," will not recognize the ",(0,r.kt)("inlineCode",{parentName:"p"},"otherGestures")," and it needs to be added to another detector in order to be recognized."),(0,r.kt)("h3",{id:"requireexternalgesturetofailothergesture1-othergesture2-"},(0,r.kt)("inlineCode",{parentName:"h3"},"requireExternalGestureToFail(otherGesture1, otherGesture2, ...)")),(0,r.kt)("p",null,"Adds a relation requiring another gesture to fail, before this one can activate."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IMPORTANT:")," Note that this method only marks the relation between gestures, without ",(0,r.kt)("a",{parentName:"p",href:"../../gesture-composition"},"composing them"),".",(0,r.kt)("a",{parentName:"p",href:"gesture-detector"},(0,r.kt)("inlineCode",{parentName:"a"},"GestureDetector"))," will not recognize the ",(0,r.kt)("inlineCode",{parentName:"p"},"otherGestures")," and it needs to be added to another detector in order to be recognized."))}d.isMDXComponent=!0},31403:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var a=n(83117),r=(n(67294),n(3905));const o={},i=void 0,l={unversionedId:"api/gestures/base-gesture-event-data",id:"api/gestures/base-gesture-event-data",title:"base-gesture-event-data",description:"Event attributes common to all gestures:",source:"@site/docs/api/gestures/base-gesture-event-data.md",sourceDirName:"api/gestures",slug:"/api/gestures/base-gesture-event-data",permalink:"/react-native-gesture-handler/docs/next/api/gestures/base-gesture-event-data",draft:!1,tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Event attributes common to all gestures:",id:"event-attributes-common-to-all-gestures",level:3},{value:"<code>state</code>",id:"state",level:3},{value:"<code>numberOfPointers</code>",id:"numberofpointers",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"event-attributes-common-to-all-gestures"},"Event attributes common to all gestures:"),(0,r.kt)("h3",{id:"state"},(0,r.kt)("inlineCode",{parentName:"h3"},"state")),(0,r.kt)("p",null,"Current ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events"},"state")," of the handler. Expressed as one of the constants exported under ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," object by the library."),(0,r.kt)("h3",{id:"numberofpointers"},(0,r.kt)("inlineCode",{parentName:"h3"},"numberOfPointers")),(0,r.kt)("p",null,"Represents the number of pointers (fingers) currently placed on the screen."))}d.isMDXComponent=!0},79297:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(83117),r=(n(67294),n(3905)),o=n(31403),i=n(50830),l=n(57977);const s={id:"fling-gesture",title:"Fling gesture",sidebar_label:"Fling gesture"},c=void 0,u={unversionedId:"api/gestures/fling-gesture",id:"api/gestures/fling-gesture",title:"Fling gesture",description:"A discrete gesture that activates when the movement is sufficiently long and fast.",source:"@site/docs/api/gestures/fling-gesture.md",sourceDirName:"api/gestures",slug:"/api/gestures/fling-gesture",permalink:"/react-native-gesture-handler/docs/next/api/gestures/fling-gesture",draft:!1,tags:[],version:"current",frontMatter:{id:"fling-gesture",title:"Fling gesture",sidebar_label:"Fling gesture"},sidebar:"docs",previous:{title:"Pinch gesture",permalink:"/react-native-gesture-handler/docs/next/api/gestures/pinch-gesture"},next:{title:"Force touch gesture",permalink:"/react-native-gesture-handler/docs/next/api/gestures/force-touch-gesture"}},d={},p=[{value:"Config",id:"config",level:2},{value:"Properties specific to <code>FlingGesture</code>:",id:"properties-specific-to-flinggesture",level:3},{value:"<code>direction(value: Directions)</code>",id:"directionvalue-directions",level:3},{value:"<code>numberOfPointers(value: number)</code>",id:"numberofpointersvalue-number",level:3},{value:"Callbacks",id:"callbacks",level:2},{value:"Event data",id:"event-data",level:2},{value:"Event attributes specific to <code>FlingGesture</code>:",id:"event-attributes-specific-to-flinggesture",level:3},{value:"<code>x</code>",id:"x",level:3},{value:"<code>y</code>",id:"y",level:3},{value:"<code>absoluteX</code>",id:"absolutex",level:3},{value:"<code>absoluteY</code>",id:"absolutey",level:3},{value:"Example",id:"example",level:2}],h={toc:p};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A discrete gesture that activates when the movement is sufficiently long and fast.\nGesture gets ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#active"},"ACTIVE")," when movement is sufficiently long and it does not take too much time.\nWhen gesture gets activated it will turn into ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#end"},"END")," state when finger is released.\nThe gesture will fail to recognize if the finger is lifted before being activated."),(0,r.kt)("h2",{id:"config"},"Config"),(0,r.kt)("h3",{id:"properties-specific-to-flinggesture"},"Properties specific to ",(0,r.kt)("inlineCode",{parentName:"h3"},"FlingGesture"),":"),(0,r.kt)("h3",{id:"directionvalue-directions"},(0,r.kt)("inlineCode",{parentName:"h3"},"direction(value: Directions)")),(0,r.kt)("p",null,"Expressed allowed direction of movement. Expected values are exported as constants in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Directions")," object. It's possible to pass one or many directions in one parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fling.direction(Directions.RIGHT | Directions.LEFT);\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fling.direction(Directions.DOWN);\n")),(0,r.kt)("h3",{id:"numberofpointersvalue-number"},(0,r.kt)("inlineCode",{parentName:"h3"},"numberOfPointers(value: number)")),(0,r.kt)("p",null,"Determine exact number of points required to handle the fling gesture."),(0,r.kt)(i.default,{mdxType:"BaseEventConfig"}),(0,r.kt)("h2",{id:"callbacks"},"Callbacks"),(0,r.kt)(l.default,{mdxType:"BaseEventCallbacks"}),(0,r.kt)("h2",{id:"event-data"},"Event data"),(0,r.kt)("h3",{id:"event-attributes-specific-to-flinggesture"},"Event attributes specific to ",(0,r.kt)("inlineCode",{parentName:"h3"},"FlingGesture"),":"),(0,r.kt)("h3",{id:"x"},(0,r.kt)("inlineCode",{parentName:"h3"},"x")),(0,r.kt)("p",null,"X coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/next/api/gestures/gesture-detector"},(0,r.kt)("inlineCode",{parentName:"a"},"GestureDetector")),". Expressed in point units."),(0,r.kt)("h3",{id:"y"},(0,r.kt)("inlineCode",{parentName:"h3"},"y")),(0,r.kt)("p",null,"Y coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/next/api/gestures/gesture-detector"},(0,r.kt)("inlineCode",{parentName:"a"},"GestureDetector")),". Expressed in point units."),(0,r.kt)("h3",{id:"absolutex"},(0,r.kt)("inlineCode",{parentName:"h3"},"absoluteX")),(0,r.kt)("p",null,"X coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the window. The value is expressed in point units. It is recommended to use it instead of ",(0,r.kt)("a",{parentName:"p",href:"#x"},(0,r.kt)("inlineCode",{parentName:"a"},"x"))," in cases when the original view can be transformed as an effect of the gesture."),(0,r.kt)("h3",{id:"absolutey"},(0,r.kt)("inlineCode",{parentName:"h3"},"absoluteY")),(0,r.kt)("p",null,"Y coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the window. The value is expressed in point units. It is recommended to use it instead of ",(0,r.kt)("a",{parentName:"p",href:"#y"},(0,r.kt)("inlineCode",{parentName:"a"},"y"))," in cases when the original view can be transformed as an effect of the gesture."),(0,r.kt)(o.default,{mdxType:"BaseEventData"}),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const position = useSharedValue(0);\n\nconst flingGesture = Gesture.Fling()\n  .direction(Directions.RIGHT)\n  .onStart((e) => {\n    position.value = withTiming(position.value + 10, { duration: 100 });\n  });\n\nconst animatedStyle = useAnimatedStyle(() => ({\n  transform: [{ translateX: position.value }],\n}));\n\nreturn (\n  <GestureDetector gesture={flingGesture}>\n    <Animated.View style={[styles.box, animatedStyle]} />\n  </GestureDetector>\n);\n")))}g.isMDXComponent=!0}}]);