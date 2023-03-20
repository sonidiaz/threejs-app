"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"three\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three__WEBPACK_IMPORTED_MODULE_2__]);\nthree__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction HomePage() {\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n        const renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGL1Renderer({\n            antialias: true,\n            canvas: document.getElementById(\"bg\")\n        });\n        const camara = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);\n        // mover camara\n        camara.position.z = 6;\n        // crear cubo\n        const geometria = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(1, 1, 1);\n        const material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshBasicMaterial({\n            color: 0xffffff\n        });\n        const cubo = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometria, material);\n        console.log(0xffffff);\n        scene.add(cubo);\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        function animate() {\n            cubo.rotation.x += 0.01;\n            cubo.rotation.y += 0.01;\n            renderer.render(scene, camara);\n            requestAnimationFrame(animate);\n        }\n        animate();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        id: \"bg\"\n    }, void 0, false, {\n        fileName: \"/Volumes/NachoHD/dev/threejs-app/pages/index.tsx\",\n        lineNumber: 49,\n        columnNumber: 12\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBaUM7QUFRbkI7QUFHZCxTQUFTTyxRQUFRLEdBQUc7SUFDaEJQLGdEQUFTLENBQUMsSUFBTTtRQUNaLE1BQU1RLEtBQUssR0FBRyxJQUFJUCx3Q0FBSyxFQUFFO1FBQ3pCLE1BQU1RLFFBQVEsR0FBSSxJQUFJUCxpREFBYyxDQUFDO1lBQ2pDUSxTQUFTLEVBQUUsSUFBSTtZQUNmQyxNQUFNLEVBQUVDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLElBQUksQ0FBQztTQUN4QyxDQUFDO1FBQ0YsTUFBTUMsTUFBTSxHQUFHLElBQUlYLG9EQUFpQixDQUNoQyxFQUFFLEVBQ0ZZLE1BQU0sQ0FBQ0MsVUFBVSxHQUFJRCxNQUFNLENBQUNFLFdBQVcsRUFDdkMsR0FBRyxFQUNILElBQUksQ0FDUDtRQUVELGVBQWU7UUFDZkgsTUFBTSxDQUFDSSxRQUFRLENBQUNDLENBQUMsR0FBRyxDQUFDO1FBRXJCLGFBQWE7UUFDYixNQUFNQyxTQUFTLEdBQUcsSUFBSWQsOENBQVcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUN4QyxNQUFNZSxRQUFRLEdBQUcsSUFBSWhCLG9EQUFpQixDQUFDO1lBQUVpQixLQUFLLEVBQUUsUUFBUTtTQUFFLENBQUM7UUFDM0QsTUFBTUMsSUFBSSxHQUFHLElBQUluQix1Q0FBSSxDQUFDZ0IsU0FBUyxFQUFFQyxRQUFRLENBQUM7UUFDMUNHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUNyQmpCLEtBQUssQ0FBQ2tCLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDO1FBRWZkLFFBQVEsQ0FBQ2tCLE9BQU8sQ0FBQ1osTUFBTSxDQUFDQyxVQUFVLEVBQUVELE1BQU0sQ0FBQ0UsV0FBVyxDQUFDO1FBRXZELFNBQVNXLE9BQU8sR0FBRztZQUNmTCxJQUFJLENBQUNNLFFBQVEsQ0FBQ0MsQ0FBQyxJQUFJLElBQUk7WUFDdkJQLElBQUksQ0FBQ00sUUFBUSxDQUFDRSxDQUFDLElBQUksSUFBSTtZQUV2QnRCLFFBQVEsQ0FBQ3VCLE1BQU0sQ0FBQ3hCLEtBQUssRUFBRU0sTUFBTSxDQUFDO1lBQzlCbUIscUJBQXFCLENBQUNMLE9BQU8sQ0FBQztTQUNqQztRQUNEQSxPQUFPLEVBQUU7S0FDWixFQUFFLEVBQUUsQ0FBQztJQUdOLHFCQUFPLDhEQUFDakIsUUFBTTtRQUFDdUIsRUFBRSxFQUFDLElBQUk7Ozs7O1lBQUc7Q0FDNUI7QUFHRCxpRUFBZTNCLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2tlbW9uLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFxuICAgIFNjZW5lLFxuICAgIFdlYkdMMVJlbmRlcmVyLFxuICAgIFBlcnNwZWN0aXZlQ2FtZXJhLFxuICAgIE1lc2gsXG4gICAgTWVzaEJhc2ljTWF0ZXJpYWwsXG4gICAgQm94R2VvbWV0cnlcbn0gZnJvbSBcInRocmVlXCJcblxuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBzY2VuZSA9IG5ldyBTY2VuZSgpXG4gICAgICAgIGNvbnN0IHJlbmRlcmVyID0gIG5ldyBXZWJHTDFSZW5kZXJlcih7XG4gICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXG4gICAgICAgICAgICBjYW52YXM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmdcIilcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgY2FtYXJhID0gbmV3IFBlcnNwZWN0aXZlQ2FtZXJhKFxuICAgICAgICAgICAgNTAsIFxuICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggLyAgd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICAgICAgMC4xLFxuICAgICAgICAgICAgMTAwMFxuICAgICAgICApXG5cbiAgICAgICAgLy8gbW92ZXIgY2FtYXJhXG4gICAgICAgIGNhbWFyYS5wb3NpdGlvbi56ID0gNlxuXG4gICAgICAgIC8vIGNyZWFyIGN1Ym9cbiAgICAgICAgY29uc3QgZ2VvbWV0cmlhID0gbmV3IEJveEdlb21ldHJ5KDEsMSwxKVxuICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBNZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAweGZmZmZmZiB9KVxuICAgICAgICBjb25zdCBjdWJvID0gbmV3IE1lc2goZ2VvbWV0cmlhLCBtYXRlcmlhbClcbiAgICAgICAgY29uc29sZS5sb2coMHhmZmZmZmYpXG4gICAgICAgIHNjZW5lLmFkZChjdWJvKVxuXG4gICAgICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcblxuICAgICAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICAgICAgY3Viby5yb3RhdGlvbi54ICs9IDAuMDFcbiAgICAgICAgICAgIGN1Ym8ucm90YXRpb24ueSArPSAwLjAxXG5cbiAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtYXJhKVxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXG4gICAgICAgIH1cbiAgICAgICAgYW5pbWF0ZSgpXG4gICAgfSwgW10pXG5cblxuICAgIHJldHVybiA8Y2FudmFzIGlkPVwiYmdcIiAvPlxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIlNjZW5lIiwiV2ViR0wxUmVuZGVyZXIiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIk1lc2giLCJNZXNoQmFzaWNNYXRlcmlhbCIsIkJveEdlb21ldHJ5IiwiSG9tZVBhZ2UiLCJzY2VuZSIsInJlbmRlcmVyIiwiYW50aWFsaWFzIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbWFyYSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBvc2l0aW9uIiwieiIsImdlb21ldHJpYSIsIm1hdGVyaWFsIiwiY29sb3IiLCJjdWJvIiwiY29uc29sZSIsImxvZyIsImFkZCIsInNldFNpemUiLCJhbmltYXRlIiwicm90YXRpb24iLCJ4IiwieSIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "three" ***!
  \************************/
/***/ ((module) => {

module.exports = import("three");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();