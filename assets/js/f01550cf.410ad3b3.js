"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[1770],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=d(n),u=i,m=h["".concat(s,".").concat(u)]||h[u]||c[u]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},18033:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return d}});var a=n(83117),i=(n(67294),n(3905));const r={id:"pan-gh",title:"PanGestureHandler",sidebar_label:"Pan"},o=void 0,l={unversionedId:"gesture-handlers/api/pan-gh",id:"version-2.6.0/gesture-handlers/api/pan-gh",title:"PanGestureHandler",description:"We recently released RNGH 2.0 with new Gestures system. Check out [RNGH 2.0",source:"@site/versioned_docs/version-2.6.0/gesture-handlers/api/pan-gh.md",sourceDirName:"gesture-handlers/api",slug:"/gesture-handlers/api/pan-gh",permalink:"/react-native-gesture-handler/docs/gesture-handlers/api/pan-gh",draft:!1,tags:[],version:"2.6.0",frontMatter:{id:"pan-gh",title:"PanGestureHandler",sidebar_label:"Pan"},sidebar:"docs",previous:{title:"Common handler properties",permalink:"/react-native-gesture-handler/docs/gesture-handlers/api/common-gh"},next:{title:"Tap",permalink:"/react-native-gesture-handler/docs/gesture-handlers/api/tap-gh"}},s={},d=[{value:"Custom activation criteria",id:"custom-activation-criteria",level:2},{value:"Multi touch pan handling",id:"multi-touch-pan-handling",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>minDist</code>",id:"mindist",level:3},{value:"<code>minPointers</code>",id:"minpointers",level:3},{value:"<code>maxPointers</code>",id:"maxpointers",level:3},{value:"<code>activeOffsetX</code>",id:"activeoffsetx",level:3},{value:"<code>activeOffsetY</code>",id:"activeoffsety",level:3},{value:"<code>failOffsetY</code>",id:"failoffsety",level:3},{value:"<code>failOffsetX</code>",id:"failoffsetx",level:3},{value:"<code>maxDeltaX</code>",id:"maxdeltax",level:3},{value:"<code>maxDeltaY</code>",id:"maxdeltay",level:3},{value:"<code>minOffsetX</code>",id:"minoffsetx",level:3},{value:"<code>minOffsetY</code>",id:"minoffsety",level:3},{value:"<code>minDeltaX</code>",id:"mindeltax",level:3},{value:"<code>minDeltaY</code>",id:"mindeltay",level:3},{value:"<code>avgTouches</code> (Android only)",id:"avgtouches-android-only",level:3},{value:"<code>enableTrackpadTwoFingerGesture</code> (iOS only)",id:"enabletrackpadtwofingergesture-ios-only",level:3},{value:"Event data",id:"event-data",level:2},{value:"<code>translationX</code>",id:"translationx",level:3},{value:"<code>translationY</code>",id:"translationy",level:3},{value:"<code>velocityX</code>",id:"velocityx",level:3},{value:"<code>velocityY</code>",id:"velocityy",level:3},{value:"<code>x</code>",id:"x",level:3},{value:"<code>y</code>",id:"y",level:3},{value:"<code>absoluteX</code>",id:"absolutex",level:3},{value:"<code>absoluteY</code>",id:"absolutey",level:3},{value:"Example",id:"example",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"We recently released RNGH 2.0 with new Gestures system. Check out ",(0,i.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/#rngh-20"},"RNGH 2.0\nsection in Introduction")," for more information.")),(0,i.kt)("p",null,"A continuous gesture handler that can recognize a panning (dragging) gesture and track its movement."),(0,i.kt)("p",null,"The handler ",(0,i.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/basics/state#active"},"activates")," when a finger is placed on the screen and moved some initial distance."),(0,i.kt)("p",null,"Configurations such as a minimum initial distance, specific vertical or horizontal pan detection and ",(0,i.kt)("a",{parentName:"p",href:"#minPointers"},"number of fingers")," required for activation (allowing for multifinger swipes) may be specified."),(0,i.kt)("p",null,"Gesture callback can be used for continuous tracking of the pan gesture. It provides information about the gesture such as its XY translation from the starting point as well as its instantaneous velocity."),(0,i.kt)("p",null,"The handler is implemented using ",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/uipangesturerecognizer"},"UIPanGestureRecognizer")," on iOS and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler/blob/main/android/lib/src/main/java/com/swmansion/gesturehandler/PanGestureHandler.java"},"PanGestureHandler")," on Android."),(0,i.kt)("h2",{id:"custom-activation-criteria"},"Custom activation criteria"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"PanGestureHandler")," component exposes a number of properties that can be used to customize the criteria under which a handler will ",(0,i.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/basics/state#active"},"activate")," or ",(0,i.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/basics/state#fail"},"fail")," when recognizing a gesture."),(0,i.kt)("p",null,"When more than one of such a property is set, ",(0,i.kt)("inlineCode",{parentName:"p"},"PanGestureHandler")," expects all criteria to be met for successful recognition and at most one of the criteria to be overstepped to fail recognition.\nFor example when both ",(0,i.kt)("a",{parentName:"p",href:"#mindeltax"},(0,i.kt)("inlineCode",{parentName:"a"},"minDeltaX"))," and ",(0,i.kt)("a",{parentName:"p",href:"#mindeltay"},(0,i.kt)("inlineCode",{parentName:"a"},"minDeltaY"))," are set to 20 we expect the finger to travel by 20 points in both the X and Y axis before the handler activates.\nAnother example would be setting both ",(0,i.kt)("a",{parentName:"p",href:"#maxdeltaX"},(0,i.kt)("inlineCode",{parentName:"a"},"maxDeltaX"))," and ",(0,i.kt)("a",{parentName:"p",href:"#maxdeltay"},(0,i.kt)("inlineCode",{parentName:"a"},"maxDeltaY"))," to 20 and ",(0,i.kt)("a",{parentName:"p",href:"#mindist"},(0,i.kt)("inlineCode",{parentName:"a"},"minDist"))," to 23.\nIn such a case, if we move a finger along the X-axis by 20 points and along the Y-axis by 0 points, the handler will fail even though the finger is still within the bounds of translation along Y-axis."),(0,i.kt)("h2",{id:"multi-touch-pan-handling"},"Multi touch pan handling"),(0,i.kt)("p",null,"If your app relies on multi touch pan handling this section provides some information how the default behavior differs between the platform and how (if necessary) it can be unified."),(0,i.kt)("p",null,"The difference in multi touch pan handling lies in the way how translation properties during the event are being calculated.\nOn iOS the default behavior when more than one finger is placed on the screen is to treat this situation as if only one pointer was placed in the center of mass (average position of all the pointers).\nThis applies also to many platform native components that handle touch even if not primarily interested in multi touch interactions like for example UIScrollView component."),(0,i.kt)("p",null,"The default behavior for native components like scroll view, pager views or drawers is different and hence gesture handler defaults to that when it comes to pan handling.\nThe difference is that instead of treating the center of mass of all the fingers placed as a leading pointer it takes the latest placed finger as such.\nThis behavior can be changed on Android using ",(0,i.kt)("a",{parentName:"p",href:"#avgtouches-android-only"},(0,i.kt)("inlineCode",{parentName:"a"},"avgTouches"))," flag."),(0,i.kt)("p",null,'Note that on both Android and iOS when the additional finger is placed on the screen that translation prop is not affected even though the position of the pointer being tracked might have changed.\nTherefore it is safe to rely on translation most of the time as it only reflects the movement that happens regardless of how many fingers are placed on the screen and if that number changes over time.\nIf you wish to track the "center of mass" virtual pointer and account for its changes when the number of finger changes you can use relative or absolute position provided in the event (',(0,i.kt)("a",{parentName:"p",href:"#x"},(0,i.kt)("inlineCode",{parentName:"a"},"x"))," and ",(0,i.kt)("a",{parentName:"p",href:"#y"},(0,i.kt)("inlineCode",{parentName:"a"},"y"))," or ",(0,i.kt)("a",{parentName:"p",href:"#absolutex"},(0,i.kt)("inlineCode",{parentName:"a"},"absoluteX"))," and ",(0,i.kt)("a",{parentName:"p",href:"#absolutey"},(0,i.kt)("inlineCode",{parentName:"a"},"absoluteY")),")."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/api/common-gh#properties"},"set of properties inherited from base handler class"),". Below is a list of properties specific to ",(0,i.kt)("inlineCode",{parentName:"p"},"PanGestureHandler")," component:"),(0,i.kt)("h3",{id:"mindist"},(0,i.kt)("inlineCode",{parentName:"h3"},"minDist")),(0,i.kt)("p",null,"Minimum distance the finger (or multiple finger) need to travel before the handler ",(0,i.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/basics/state#active"},"activates"),". Expressed in points."),(0,i.kt)("h3",{id:"minpointers"},(0,i.kt)("inlineCode",{parentName:"h3"},"minPointers")),(0,i.kt)("p",null,"A number of fingers that is required to be placed before handler can ",(0,i.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/basics/state#active"},"activate"),". Should be a higher or equal to 0 integer."),(0,i.kt)("h3",{id:"maxpointers"},(0,i.kt)("inlineCode",{parentName:"h3"},"maxPointers")),(0,i.kt)("p",null,"When the given number of fingers is placed on the screen and handler hasn't yet ",(0,i.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/basics/state#active"},"activated")," it will fail recognizing the gesture. Should be a higher or equal to 0 integer."),(0,i.kt)("h3",{id:"activeoffsetx"},(0,i.kt)("inlineCode",{parentName:"h3"},"activeOffsetX")),(0,i.kt)("p",null,"Range along X axis (in points) where fingers travels without activation of handler. Moving outside of this range implies activation of handler. Range can be given as an array or a single number.\nIf range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0.\nIf only one number ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," is given a range of ",(0,i.kt)("inlineCode",{parentName:"p"},"(-inf, p)")," will be used if ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," is higher or equal to 0 and ",(0,i.kt)("inlineCode",{parentName:"p"},"(-p, inf)")," otherwise."),(0,i.kt)("h3",{id:"activeoffsety"},(0,i.kt)("inlineCode",{parentName:"h3"},"activeOffsetY")),(0,i.kt)("p",null,"Range along Y axis (in points) where fingers travels without activation of handler. Moving outside of this range implies activation of handler. Range can be given as an array or a single number.\nIf range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0.\nIf only one number ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," is given a range of ",(0,i.kt)("inlineCode",{parentName:"p"},"(-inf, p)")," will be used if ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," is higher or equal to 0 and ",(0,i.kt)("inlineCode",{parentName:"p"},"(-p, inf)")," otherwise."),(0,i.kt)("h3",{id:"failoffsety"},(0,i.kt)("inlineCode",{parentName:"h3"},"failOffsetY")),(0,i.kt)("p",null,"When the finger moves outside this range (in points) along Y axis and handler hasn't yet activated it will fail recognizing the gesture. Range can be given as an array or a single number.\nIf range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0.\nIf only one number ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," is given a range of ",(0,i.kt)("inlineCode",{parentName:"p"},"(-inf, p)")," will be used if ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," is higher or equal to 0 and ",(0,i.kt)("inlineCode",{parentName:"p"},"(-p, inf)")," otherwise."),(0,i.kt)("h3",{id:"failoffsetx"},(0,i.kt)("inlineCode",{parentName:"h3"},"failOffsetX")),(0,i.kt)("p",null,"When the finger moves outside this range (in points) along X axis and handler hasn't yet activated it will fail recognizing the gesture. Range can be given as an array or a single number.\nIf range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0.\nIf only one number ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," is given a range of ",(0,i.kt)("inlineCode",{parentName:"p"},"(-inf, p)")," will be used if ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," is higher or equal to 0 and ",(0,i.kt)("inlineCode",{parentName:"p"},"(-p, inf)")," otherwise."),(0,i.kt)("h3",{id:"maxdeltax"},(0,i.kt)("inlineCode",{parentName:"h3"},"maxDeltaX")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This method is deprecated but supported for backward compatibility. Instead of using ",(0,i.kt)("inlineCode",{parentName:"p"},"maxDeltaX={N}")," you can do ",(0,i.kt)("inlineCode",{parentName:"p"},"failOffsetX={[-N, N]}"),".")),(0,i.kt)("p",null,"When the finger travels the given distance expressed in points along X axis and handler hasn't yet ",(0,i.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/basics/state#active"},"activated")," it will fail recognizing the gesture."),(0,i.kt)("h3",{id:"maxdeltay"},(0,i.kt)("inlineCode",{parentName:"h3"},"maxDeltaY")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This method is deprecated but supported for backward compatibility. Instead of using ",(0,i.kt)("inlineCode",{parentName:"p"},"maxDeltaY={N}")," you can do ",(0,i.kt)("inlineCode",{parentName:"p"},"failOffsetY={[-N, N]}"),".")),(0,i.kt)("p",null,"When the finger travels the given distance expressed in points along Y axis and handler hasn't yet ",(0,i.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/basics/state#active"},"activated")," it will fail recognizing the gesture."),(0,i.kt)("h3",{id:"minoffsetx"},(0,i.kt)("inlineCode",{parentName:"h3"},"minOffsetX")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This method is deprecated but supported for backward compatibility. Instead of using ",(0,i.kt)("inlineCode",{parentName:"p"},"minOffsetX={N}")," you can do ",(0,i.kt)("inlineCode",{parentName:"p"},"activeOffsetX={N}"),".")),(0,i.kt)("p",null,"Minimum distance along X (in points) axis the finger (or multiple finger) need to travel before the handler ",(0,i.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/basics/state#active"},"activates"),'. If set to a lower or equal to 0 value we expect the finger to travel "left" by the given distance. When set to a higher or equal to 0 number the handler will activate on a movement to the "right". If you wish for the movement direction to be ignored use ',(0,i.kt)("a",{parentName:"p",href:"#mindeltax"},(0,i.kt)("inlineCode",{parentName:"a"},"minDeltaX"))," instead."),(0,i.kt)("h3",{id:"minoffsety"},(0,i.kt)("inlineCode",{parentName:"h3"},"minOffsetY")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This method is deprecated but supported for backward compatibility. Instead of using ",(0,i.kt)("inlineCode",{parentName:"p"},"minOffsetY={N}")," you can do ",(0,i.kt)("inlineCode",{parentName:"p"},"activeOffsetY={N}"),".")),(0,i.kt)("p",null,"Minimum distance along Y (in points) axis the finger (or multiple finger) need to travel before the handler ",(0,i.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/basics/state#active"},"activates"),'. If set to a lower or equal to 0 value we expect the finger to travel "up" by the given distance. When set to a higher or equal to 0 number the handler will activate on a movement to the "bottom". If you wish for the movement direction to be ignored use ',(0,i.kt)("a",{parentName:"p",href:"#mindeltay"},(0,i.kt)("inlineCode",{parentName:"a"},"minDeltaY"))," instead."),(0,i.kt)("h3",{id:"mindeltax"},(0,i.kt)("inlineCode",{parentName:"h3"},"minDeltaX")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This method is deprecated but supported for backward compatibility. Instead of using ",(0,i.kt)("inlineCode",{parentName:"p"},"minDeltaX={N}")," you can do ",(0,i.kt)("inlineCode",{parentName:"p"},"activeOffsetX={[-N, N]}"),".")),(0,i.kt)("p",null,"Minimum distance along X (in points) axis the finger (or multiple finger) need to travel (left or right) before the handler ",(0,i.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/basics/state#active"},"activates"),". Unlike ",(0,i.kt)("a",{parentName:"p",href:"#minoffsetx"},(0,i.kt)("inlineCode",{parentName:"a"},"minoffsetx"))," this parameter accepts only non-lower or equal to 0 numbers that represents the distance in point units. If you want for the handler to ",(0,i.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/basics/state#active"},"activate")," for the movement in one particular direction use ",(0,i.kt)("a",{parentName:"p",href:"#minoffsetx"},(0,i.kt)("inlineCode",{parentName:"a"},"minOffsetX"))," instead."),(0,i.kt)("h3",{id:"mindeltay"},(0,i.kt)("inlineCode",{parentName:"h3"},"minDeltaY")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This method is deprecated but supported for backward compatibility. Instead of using ",(0,i.kt)("inlineCode",{parentName:"p"},"minDeltaY={N}")," you can do ",(0,i.kt)("inlineCode",{parentName:"p"},"activeOffsetY={[-N, N]}"),".")),(0,i.kt)("p",null,"Minimum distance along Y (in points) axis the finger (or multiple finger) need to travel (top or bottom) before the handler ",(0,i.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/basics/state#active"},"activates"),". Unlike ",(0,i.kt)("a",{parentName:"p",href:"#minoffsety"},(0,i.kt)("inlineCode",{parentName:"a"},"minOffsetY"))," this parameter accepts only non-lower or equal to 0 numbers that represents the distance in point units. If you want for the handler to ",(0,i.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/basics/state#active"},"activate")," for the movement in one particular direction use ",(0,i.kt)("a",{parentName:"p",href:"#minoffsety"},(0,i.kt)("inlineCode",{parentName:"a"},"minOffsetY"))," instead."),(0,i.kt)("h3",{id:"avgtouches-android-only"},(0,i.kt)("inlineCode",{parentName:"h3"},"avgTouches")," (Android only)"),(0,i.kt)("h3",{id:"enabletrackpadtwofingergesture-ios-only"},(0,i.kt)("inlineCode",{parentName:"h3"},"enableTrackpadTwoFingerGesture")," (iOS only)"),(0,i.kt)("p",null,"Enables two-finger gestures on supported devices, for example iPads with trackpads. If not enabled the gesture will require click + drag, with enableTrackpadTwoFingerGesture swiping with two fingers will also trigger the gesture."),(0,i.kt)("h2",{id:"event-data"},"Event data"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/gesture-handlers/api/common-gh#event-data"},"set of event attributes from base handler class"),". Below is a list of gesture event attributes specific to ",(0,i.kt)("inlineCode",{parentName:"p"},"PanGestureHandler"),":"),(0,i.kt)("h3",{id:"translationx"},(0,i.kt)("inlineCode",{parentName:"h3"},"translationX")),(0,i.kt)("p",null,"Translation of the pan gesture along X axis accumulated over the time of the gesture. The value is expressed in the point units."),(0,i.kt)("h3",{id:"translationy"},(0,i.kt)("inlineCode",{parentName:"h3"},"translationY")),(0,i.kt)("p",null,"Translation of the pan gesture along Y axis accumulated over the time of the gesture. The value is expressed in the point units."),(0,i.kt)("h3",{id:"velocityx"},(0,i.kt)("inlineCode",{parentName:"h3"},"velocityX")),(0,i.kt)("p",null,"Velocity of the pan gesture along the X axis in the current moment. The value is expressed in point units per second."),(0,i.kt)("h3",{id:"velocityy"},(0,i.kt)("inlineCode",{parentName:"h3"},"velocityY")),(0,i.kt)("p",null,"Velocity of the pan gesture along the Y axis in the current moment. The value is expressed in point units per second."),(0,i.kt)("h3",{id:"x"},(0,i.kt)("inlineCode",{parentName:"h3"},"x")),(0,i.kt)("p",null,"X coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the handler. Expressed in point units."),(0,i.kt)("h3",{id:"y"},(0,i.kt)("inlineCode",{parentName:"h3"},"y")),(0,i.kt)("p",null,"Y coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the handler. Expressed in point units."),(0,i.kt)("h3",{id:"absolutex"},(0,i.kt)("inlineCode",{parentName:"h3"},"absoluteX")),(0,i.kt)("p",null,"X coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the window. The value is expressed in point units. It is recommended to use it instead of ",(0,i.kt)("a",{parentName:"p",href:"#x"},(0,i.kt)("inlineCode",{parentName:"a"},"x"))," in cases when the original view can be transformed as an effect of the gesture."),(0,i.kt)("h3",{id:"absolutey"},(0,i.kt)("inlineCode",{parentName:"h3"},"absoluteY")),(0,i.kt)("p",null,"Y coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the window. The value is expressed in point units. It is recommended to use it instead of ",(0,i.kt)("a",{parentName:"p",href:"#y"},(0,i.kt)("inlineCode",{parentName:"a"},"y"))," in cases when the original view can be transformed as an effect of the gesture."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler/blob/main/example/src/basic/draggable/index.tsx"},"draggable example")," from Gesture Handler Example App."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import React, { Component } from 'react';\nimport { Animated, Dimensions } from 'react-native';\nimport {\n  GestureHandlerRootView,\n  PanGestureHandler,\n} from 'react-native-gesture-handler';\n\nconst { width } = Dimensions.get('screen');\nconst circleRadius = 30;\n\nclass Circle extends Component {\n  _touchX = new Animated.Value(width / 2 - circleRadius);\n\n  _onPanGestureEvent = Animated.event([{ nativeEvent: { x: this._touchX } }], {\n    useNativeDriver: true,\n  });\n\n  render() {\n    return (\n      <GestureHandlerRootView>\n        <PanGestureHandler onGestureEvent={this._onPanGestureEvent}>\n          <Animated.View\n            style={{\n              height: 150,\n              justifyContent: 'center',\n            }}\n          >\n            <Animated.View\n              style={[\n                {\n                  backgroundColor: '#42a5f5',\n                  borderRadius: circleRadius,\n                  height: circleRadius * 2,\n                  width: circleRadius * 2,\n                },\n                {\n                  transform: [\n                    {\n                      translateX: Animated.add(\n                        this._touchX,\n                        new Animated.Value(-circleRadius),\n                      ),\n                    },\n                  ],\n                },\n              ]}\n            />\n          </Animated.View>\n        </PanGestureHandler>\n      </GestureHandlerRootView>\n    );\n  }\n}\n\nexport default function App() {\n  return <Circle />;\n}\n")))}c.isMDXComponent=!0}}]);