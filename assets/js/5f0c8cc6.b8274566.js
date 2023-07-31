"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[4747],{7923:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"1.10.3","label":"1.10.3","banner":"unmaintained","badge":true,"noIndex":false,"className":"docs-version-1.10.3","isLast":false,"docsSidebars":{"version-1.10.3/docs":[{"collapsed":true,"type":"category","label":"Basics","items":[{"type":"link","label":"Getting Started","href":"/react-native-gesture-handler/docs/1.10.3/","docId":"getting-started"},{"type":"link","label":"About Gesture Handlers","href":"/react-native-gesture-handler/docs/1.10.3/about-handlers","docId":"about-handlers"},{"type":"link","label":"Handler State","href":"/react-native-gesture-handler/docs/1.10.3/state","docId":"state"},{"type":"link","label":"Cross handler interactions","href":"/react-native-gesture-handler/docs/1.10.3/interactions","docId":"interactions"},{"type":"link","label":"Running Example App","href":"/react-native-gesture-handler/docs/1.10.3/example","docId":"example"}],"collapsible":true},{"collapsed":true,"type":"category","label":"API reference","items":[{"collapsed":true,"type":"category","label":"Gesture handlers","items":[{"type":"link","label":"Common handler properties","href":"/react-native-gesture-handler/docs/1.10.3/api/gesture-handlers/common-gh","docId":"api/gesture-handlers/common-gh"},{"type":"link","label":"Pan","href":"/react-native-gesture-handler/docs/1.10.3/api/gesture-handlers/pan-gh","docId":"api/gesture-handlers/pan-gh"},{"type":"link","label":"Tap","href":"/react-native-gesture-handler/docs/1.10.3/api/gesture-handlers/tap-gh","docId":"api/gesture-handlers/tap-gh"},{"type":"link","label":"Long press","href":"/react-native-gesture-handler/docs/1.10.3/api/gesture-handlers/longpress-gh","docId":"api/gesture-handlers/longpress-gh"},{"type":"link","label":"Rotation","href":"/react-native-gesture-handler/docs/1.10.3/api/gesture-handlers/rotation-gh","docId":"api/gesture-handlers/rotation-gh"},{"type":"link","label":"Fling","href":"/react-native-gesture-handler/docs/1.10.3/api/gesture-handlers/fling-gh","docId":"api/gesture-handlers/fling-gh"},{"type":"link","label":"Pinch","href":"/react-native-gesture-handler/docs/1.10.3/api/gesture-handlers/pinch-gh","docId":"api/gesture-handlers/pinch-gh"},{"type":"link","label":"Force touch","href":"/react-native-gesture-handler/docs/1.10.3/api/gesture-handlers/force-gh","docId":"api/gesture-handlers/force-gh"},{"type":"link","label":"NativeView","href":"/react-native-gesture-handler/docs/1.10.3/api/gesture-handlers/nativeview-gh","docId":"api/gesture-handlers/nativeview-gh"},{"type":"link","label":"createNativeWrapper()","href":"/react-native-gesture-handler/docs/1.10.3/api/gesture-handlers/create-native-wrapper","docId":"api/gesture-handlers/create-native-wrapper"}],"collapsible":true},{"collapsed":true,"type":"category","label":"Components","items":[{"type":"link","label":"Buttons","href":"/react-native-gesture-handler/docs/1.10.3/api/components/buttons","docId":"api/components/buttons"},{"type":"link","label":"Swipeable","href":"/react-native-gesture-handler/docs/1.10.3/api/components/swipeable","docId":"api/components/swipeable"},{"type":"link","label":"Touchables","href":"/react-native-gesture-handler/docs/1.10.3/api/components/touchables","docId":"api/components/touchables"},{"type":"link","label":"DrawerLayout","href":"/react-native-gesture-handler/docs/1.10.3/api/components/drawer-layout","docId":"api/components/drawer-layout"}],"collapsible":true}],"collapsible":true},{"collapsed":true,"type":"category","label":"Other","items":[{"type":"link","label":"Contributing","href":"/react-native-gesture-handler/docs/1.10.3/contributing","docId":"contributing"},{"type":"link","label":"Troubleshooting","href":"/react-native-gesture-handler/docs/1.10.3/troubleshooting","docId":"troubleshooting"},{"type":"link","label":"Learning Resources","href":"/react-native-gesture-handler/docs/1.10.3/resources","docId":"resources"},{"type":"link","label":"Credits","href":"/react-native-gesture-handler/docs/1.10.3/credits","docId":"credits"}],"collapsible":true}]},"docs":{"about-handlers":{"id":"about-handlers","title":"About Gesture Handlers","description":"Gesture handlers are the core building blocks of this library.","sidebar":"version-1.10.3/docs"},"api/components/buttons":{"id":"api/components/buttons","title":"Buttons","description":"Gesture handler library provides native components that can act as buttons. These can be treated as a replacement to TouchableHighlight or TouchableOpacity from RN core. Gesture handler\'s buttons recognize touches in native which makes the recognition process deterministic, allows for rendering ripples on Android in highly performant way (TouchableNativeFeedback requires that touch event does a roundtrip to JS before we can update ripple effect, which makes ripples lag a bit on older phones), and provides native and platform default interaction for buttons that are placed in a scrollable container (in which case the interaction is slightly delayed to prevent button from highlighting when you fling).","sidebar":"version-1.10.3/docs"},"api/components/drawer-layout":{"id":"api/components/drawer-layout","title":"Drawer Layout","description":"This is a cross-platform replacement for React Native\'s DrawerLayoutAndroid component. It provides a compatible API but allows for the component to be used on both Android and iOS. Please refer to React Native docs for the detailed usage for standard parameters.","sidebar":"version-1.10.3/docs"},"api/components/swipeable":{"id":"api/components/swipeable","title":"Swipeable","description":"This component allows for implementing swipeable rows or similar interaction. It renders its children within a panable container allows for horizontal swiping left and right. While swiping one of two \\"action\\" containers can be shown depends on whether user swipes left or right (containers can be rendered by renderLeftActions or renderRightActions props).","sidebar":"version-1.10.3/docs"},"api/components/touchables":{"id":"api/components/touchables","title":"Touchables","description":"Gesture Handler library provides an implementation of RN\'s touchable components that are based on native buttons and does not rely on JS responder system utilized by RN. Our touchable implementation follows the same API and aims to be a drop-in replacement for touchables available in React Native.","sidebar":"version-1.10.3/docs"},"api/gesture-handlers/common-gh":{"id":"api/gesture-handlers/common-gh","title":"Common handler properties","description":"This page covers the common set of properties all gesture handler components expose.","sidebar":"version-1.10.3/docs"},"api/gesture-handlers/create-native-wrapper":{"id":"api/gesture-handlers/create-native-wrapper","title":"createNativeWrapper","description":"Creates provided component with NativeViewGestureHandler, allowing it to be part of RNGH\'s","sidebar":"version-1.10.3/docs"},"api/gesture-handlers/fling-gh":{"id":"api/gesture-handlers/fling-gh","title":"FlingGestureHandler","description":"A discrete gesture handler that activates when the movement is sufficiently long and fast.","sidebar":"version-1.10.3/docs"},"api/gesture-handlers/force-gh":{"id":"api/gesture-handlers/force-gh","title":"ForceTouchGestureHandler (iOS only)","description":"A continuous gesture handler that recognizes force of a touch. It allows for tracking pressure of touch on some iOS devices.","sidebar":"version-1.10.3/docs"},"api/gesture-handlers/longpress-gh":{"id":"api/gesture-handlers/longpress-gh","title":"LongPressGestureHandler","description":"A discrete gesture handler that activates when the corresponding view is pressed for a sufficiently long time.","sidebar":"version-1.10.3/docs"},"api/gesture-handlers/nativeview-gh":{"id":"api/gesture-handlers/nativeview-gh","title":"NativeViewGestureHandler","description":"A gesture handler that allows other touch handling components to participate in","sidebar":"version-1.10.3/docs"},"api/gesture-handlers/pan-gh":{"id":"api/gesture-handlers/pan-gh","title":"PanGestureHandler","description":"A continuous gesture handler that can recognize a panning (dragging) gesture and track its movement.","sidebar":"version-1.10.3/docs"},"api/gesture-handlers/pinch-gh":{"id":"api/gesture-handlers/pinch-gh","title":"PinchGestureHandler","description":"A continuous gesture handler that recognizes pinch gesture. It allows for tracking the distance between two fingers and use that information to scale or zoom your content.","sidebar":"version-1.10.3/docs"},"api/gesture-handlers/rotation-gh":{"id":"api/gesture-handlers/rotation-gh","title":"RotationGestureHandler","description":"A continuous gesture handler that can recognize a rotation gesture and track its movement.","sidebar":"version-1.10.3/docs"},"api/gesture-handlers/tap-gh":{"id":"api/gesture-handlers/tap-gh","title":"TapGestureHandler","description":"A discrete gesture handler that recognizes one or many taps.","sidebar":"version-1.10.3/docs"},"contributing":{"id":"contributing","title":"Contributing","description":"If you are interested in the project and want to contribute or support it in other ways don\'t hesitate to contact me on Twitter!","sidebar":"version-1.10.3/docs"},"credits":{"id":"credits","title":"Credits","description":"This project is supported by amazing people from Expo.io and Software Mansion","sidebar":"version-1.10.3/docs"},"example":{"id":"example","title":"Running Example App","description":"Example app code is located under Example/ folder in the repo.","sidebar":"version-1.10.3/docs"},"getting-started":{"id":"getting-started","title":"Getting Started","description":"Gesture Handler aims to replace React Native\'s built in touch system called Gesture Responder System.","sidebar":"version-1.10.3/docs"},"interactions":{"id":"interactions","title":"Cross handler interactions","description":"Gesture handlers can \\"communicate\\" with each other to support complex gestures and control how they activate in certain scenarios.","sidebar":"version-1.10.3/docs"},"resources":{"id":"resources","title":"Learning Resources","description":"Apps","sidebar":"version-1.10.3/docs"},"state":{"id":"state","title":"Handler State","description":"As described in \\"About Gesture Handlers\\", gesture handlers can be treated as \\"state machines\\".","sidebar":"version-1.10.3/docs"},"troubleshooting":{"id":"troubleshooting","title":"Troubleshooting","description":"Troubleshooting","sidebar":"version-1.10.3/docs"}}}')}}]);