module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/defautSettings.ts":
/*!*******************************!*\
  !*** ./src/defautSettings.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultMenuStyle = {
  alignItems: 'center',
  display: 'flex',
  userSelect: 'none'
};
exports.defaultMenuStyle = defaultMenuStyle;
var defaultWrapperStyle = {
  overflow: 'hidden',
  userSelect: 'none'
};
exports.defaultWrapperStyle = defaultWrapperStyle;
var defaultInnerWrapperStyle = {
  textAlign: 'left',
  userSelect: 'none',
  whiteSpace: 'nowrap'
};
var defaultItemWrapperStyle = {
  display: 'inline-block'
};
var defaultProps = {
  alignCenter: true,
  alignOnResize: true,
  arrowClass: 'scroll-menu-arrow',
  arrowDisabledClass: 'scroll-menu-arrow--disabled',
  arrowLeft: null,
  arrowRight: null,
  clickWhenDrag: false,
  data: [],
  dragging: true,
  hideArrows: false,
  hideSingleArrow: false,
  inertiaScrolling: false,
  inertiaScrollingSlowdown: 0.25,
  innerWrapperClass: 'menu-wrapper--inner',
  innerWrapperStyle: defaultInnerWrapperStyle,
  itemClass: 'menu-item-wrapper',
  itemClassActive: 'active',
  itemStyle: defaultItemWrapperStyle,
  menuClass: 'horizontal-menu',
  menuStyle: defaultMenuStyle,
  onSelect: function onSelect() {
    return false;
  },
  onUpdate: function onUpdate() {
    return false;
  },
  scrollBy: 0,
  scrollToSelected: false,
  selected: '',
  transition: 0.4,
  translate: 0.0,
  useButtonRole: true,
  wrapperClass: 'menu-wrapper',
  wrapperStyle: defaultWrapperStyle,
  wheel: true,
  xPoint: 0
};
exports.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CZWxsL0RldmVsb3BtZW50L3JlYWN0LWhvcml6b250YWwtc2Nyb2xsaW5nLW1lbnUvc3JjL2RlZmF1dFNldHRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBTUEsSUFBTSxnQkFBZ0IsR0FBa0I7QUFDdEMsRUFBQSxVQUFVLEVBQUUsUUFEMEI7QUFFdEMsRUFBQSxPQUFPLEVBQUUsTUFGNkI7QUFHdEMsRUFBQSxVQUFVLEVBQUU7QUFIMEIsQ0FBeEM7QUFvR1EsT0FBQSxDQUFBLGdCQUFBLEdBQUEsZ0JBQUE7QUEzRlIsSUFBTSxtQkFBbUIsR0FBa0I7QUFDekMsRUFBQSxRQUFRLEVBQUUsUUFEK0I7QUFFekMsRUFBQSxVQUFVLEVBQUU7QUFGNkIsQ0FBM0M7QUEyRndDLE9BQUEsQ0FBQSxtQkFBQSxHQUFBLG1CQUFBO0FBbkZ4QyxJQUFNLHdCQUF3QixHQUFrQjtBQUM5QyxFQUFBLFNBQVMsRUFBRSxNQURtQztBQUU5QyxFQUFBLFVBQVUsRUFBRSxNQUZrQztBQUc5QyxFQUFBLFVBQVUsRUFBRTtBQUhrQyxDQUFoRDtBQVNBLElBQU0sdUJBQXVCLEdBQWtCO0FBQzdDLEVBQUEsT0FBTyxFQUFFO0FBRG9DLENBQS9DO0FBT0EsSUFBTSxZQUFZLEdBQWM7QUFFOUIsRUFBQSxXQUFXLEVBQUUsSUFGaUI7QUFJOUIsRUFBQSxhQUFhLEVBQUUsSUFKZTtBQU05QixFQUFBLFVBQVUsRUFBRSxtQkFOa0I7QUFROUIsRUFBQSxrQkFBa0IsRUFBRSw2QkFSVTtBQVU5QixFQUFBLFNBQVMsRUFBRSxJQVZtQjtBQVc5QixFQUFBLFVBQVUsRUFBRSxJQVhrQjtBQWE5QixFQUFBLGFBQWEsRUFBRSxLQWJlO0FBZ0I5QixFQUFBLElBQUksRUFBRSxFQWhCd0I7QUFpQjlCLEVBQUEsUUFBUSxFQUFFLElBakJvQjtBQW9COUIsRUFBQSxVQUFVLEVBQUUsS0FwQmtCO0FBc0I5QixFQUFBLGVBQWUsRUFBRSxLQXRCYTtBQXdCOUIsRUFBQSxnQkFBZ0IsRUFBRSxLQXhCWTtBQTBCOUIsRUFBQSx3QkFBd0IsRUFBRSxJQTFCSTtBQTRCOUIsRUFBQSxpQkFBaUIsRUFBRSxxQkE1Qlc7QUE4QjlCLEVBQUEsaUJBQWlCLEVBQUUsd0JBOUJXO0FBZ0M5QixFQUFBLFNBQVMsRUFBRSxtQkFoQ21CO0FBa0M5QixFQUFBLGVBQWUsRUFBRSxRQWxDYTtBQW9DOUIsRUFBQSxTQUFTLEVBQUUsdUJBcENtQjtBQXFDOUIsRUFBQSxTQUFTLEVBQUUsaUJBckNtQjtBQXVDOUIsRUFBQSxTQUFTLEVBQUUsZ0JBdkNtQjtBQXlDOUIsRUFBQSxRQUFRLEVBQUUsb0JBQUE7QUFBTSxXQUFBLEtBQUE7QUFBSyxHQXpDUztBQTJDOUIsRUFBQSxRQUFRLEVBQUUsb0JBQUE7QUFBTSxXQUFBLEtBQUE7QUFBSyxHQTNDUztBQTZDOUIsRUFBQSxRQUFRLEVBQUUsQ0E3Q29CO0FBK0M5QixFQUFBLGdCQUFnQixFQUFFLEtBL0NZO0FBaUQ5QixFQUFBLFFBQVEsRUFBRSxFQWpEb0I7QUFtRDlCLEVBQUEsVUFBVSxFQUFFLEdBbkRrQjtBQXFEOUIsRUFBQSxTQUFTLEVBQUUsR0FyRG1CO0FBdUQ5QixFQUFBLGFBQWEsRUFBRSxJQXZEZTtBQXlEOUIsRUFBQSxZQUFZLEVBQUUsY0F6RGdCO0FBMkQ5QixFQUFBLFlBQVksRUFBRSxtQkEzRGdCO0FBOEQ5QixFQUFBLEtBQUssRUFBRSxJQTlEdUI7QUFnRTlCLEVBQUEsTUFBTSxFQUFFO0FBaEVzQixDQUFoQztBQW1FMEIsT0FBQSxDQUFBLFlBQUEsR0FBQSxZQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ1NTUHJvcGVydGllcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1lbnVQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIERlZmF1bHQgc3R5bGVzIGZvciBTY3JvbGxNZW51IGNvbXBvbmVudFxuICovXG5jb25zdCBkZWZhdWx0TWVudVN0eWxlOiBDU1NQcm9wZXJ0aWVzID0ge1xuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICB1c2VyU2VsZWN0OiAnbm9uZScsXG59O1xuXG4vKipcbiAqIERlZmF1bHQgc3R5bGVzIGZvciBPdXRlcldyYXBwZXIgY29tcG9uZW50XG4gKi9cbmNvbnN0IGRlZmF1bHRXcmFwcGVyU3R5bGU6IENTU1Byb3BlcnRpZXMgPSB7XG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgdXNlclNlbGVjdDogJ25vbmUnLFxufTtcblxuLyoqXG4gKiBEZWZhdWx0IHN0eWxlcyBmb3IgSW5lcldyYXBwZXIgY29tcG9uZW50XG4gKi9cbmNvbnN0IGRlZmF1bHRJbm5lcldyYXBwZXJTdHlsZTogQ1NTUHJvcGVydGllcyA9IHtcbiAgdGV4dEFsaWduOiAnbGVmdCcsXG4gIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG59O1xuXG4vKipcbiAqIERlZmF1bHQgc3R5bGVzIGZvciBpdGVtIFdyYXBwZXIgY29tcG9uZW50XG4gKi9cbmNvbnN0IGRlZmF1bHRJdGVtV3JhcHBlclN0eWxlOiBDU1NQcm9wZXJ0aWVzID0ge1xuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbn07XG5cbi8qKlxuICogRGVmYXVsdCBwcm9wcyBmb3IgU2Nyb2xsTWVudSBjb21wb25lbnRcbiAqL1xuY29uc3QgZGVmYXVsdFByb3BzOiBNZW51UHJvcHMgPSB7XG4gIC8qKiBhbGlnbiBtZW51IGl0ZW1zIHRvIGNlbnRlciwgc28gaW4gbGVmdCBhbmQgcmlnaHQgd2lsbCBiZSBlbXB0eSBzcGFjZSAqL1xuICBhbGlnbkNlbnRlcjogdHJ1ZSxcbiAgLyoqIGFsaWduIGl0ZW1zIGFmdGVyIHdpbmRvdyByZXNpemUgKi9cbiAgYWxpZ25PblJlc2l6ZTogdHJ1ZSxcbiAgLyoqIGNsYXNzIGZvciBBcnJvdyBjb21wb25lbnQgKi9cbiAgYXJyb3dDbGFzczogJ3Njcm9sbC1tZW51LWFycm93JyxcbiAgLyoqIGNsYXNzIGZvciBhcnJvdyB3aGVuIGl0J3MgZGlzYWJsZWQgKi9cbiAgYXJyb3dEaXNhYmxlZENsYXNzOiAnc2Nyb2xsLW1lbnUtYXJyb3ctLWRpc2FibGVkJyxcbiAgLyoqIEFycm93cyBjb21wb25lbnRzICovXG4gIGFycm93TGVmdDogbnVsbCxcbiAgYXJyb3dSaWdodDogbnVsbCxcbiAgLyoqIHdoZW4gZHJhZyBpdGVtIGFuZCBtb3VzZSBidXR0b24gbW91c2V1cCBjaG9vc2UgbWVudSBpdGVtIHVuZGVyIGN1cnNvciAgKi9cbiAgY2xpY2tXaGVuRHJhZzogZmFsc2UsXG4gIC8qKiBlbmFibGUvZGlzYWJsZSBkcmFnZ2luZyB3aXRoIG1vdXNlICovXG4gIC8qKiBhcnJheSBvZiBNZW51SXRlbSBlbGVtZW50cyAqL1xuICBkYXRhOiBbXSxcbiAgZHJhZ2dpbmc6IHRydWUsXG4gIC8qKiBlbmFibGUvZGlzYWJsZSBpbmVydGlhIHNjcm9sbGluZyAqL1xuICAvKiogYWRkIGRpc2FibGVkIGNsYXNzIHRvIGFycm93cyAqL1xuICBoaWRlQXJyb3dzOiBmYWxzZSxcbiAgLyoqIGhpZGUgbGVmdC9yaWdodCBhcnJvdyBvbiBsZWZ0L3JpZ2h0IGVkZ2UgKi9cbiAgaGlkZVNpbmdsZUFycm93OiBmYWxzZSxcbiAgLyoqIGNsYXNzIGZvciBTY3JvbGxNZW51ICovXG4gIGluZXJ0aWFTY3JvbGxpbmc6IGZhbHNlLFxuICAvKiogc2xvdyBkb3duIGZhY3RvciBmb3IgaW5lcnRpYSBzY3JvbGxpbmcgKi9cbiAgaW5lcnRpYVNjcm9sbGluZ1Nsb3dkb3duOiAwLjI1LFxuICAvKiogY2xhc3MgZm9yIElubmVyV3JhcHBlciAqL1xuICBpbm5lcldyYXBwZXJDbGFzczogJ21lbnUtd3JhcHBlci0taW5uZXInLFxuICAvKiogc3R5bGVzIGZvciBJbm5lcldyYXBwZXIgKi9cbiAgaW5uZXJXcmFwcGVyU3R5bGU6IGRlZmF1bHRJbm5lcldyYXBwZXJTdHlsZSxcbiAgLyoqIGNsYXNzIGZvciBNZW51SXRlbSAqL1xuICBpdGVtQ2xhc3M6ICdtZW51LWl0ZW0td3JhcHBlcicsXG4gIC8qKiBjbGFzcyBmb3Igc2VsZWN0ZWQgTWVudUl0ZW0gKi9cbiAgaXRlbUNsYXNzQWN0aXZlOiAnYWN0aXZlJyxcbiAgLyoqIHN0eWxlcyBmb3IgbWVudUl0ZW0gKi9cbiAgaXRlbVN0eWxlOiBkZWZhdWx0SXRlbVdyYXBwZXJTdHlsZSxcbiAgbWVudUNsYXNzOiAnaG9yaXpvbnRhbC1tZW51JyxcbiAgLyoqIHN0eWxlcyBmb3IgU2Nyb2xsTWVudSAqL1xuICBtZW51U3R5bGU6IGRlZmF1bHRNZW51U3R5bGUsXG4gIC8qKiBjYiB3aGVuIGl0ZW0gc2VsZWN0ZWQgKi9cbiAgb25TZWxlY3Q6ICgpID0+IGZhbHNlLFxuICAvKiogY2Igd2hlbiBwb3NpdGlvbiB1cGRhdGVkICovXG4gIG9uVXBkYXRlOiAoKSA9PiBmYWxzZSxcbiAgLyoqIGhvdyBtYW55IGl0ZW1zIHRvIHNjcm9sbCwgMCBmb3IgYWxsIHZpc2libGUgKi9cbiAgc2Nyb2xsQnk6IDAsXG4gIC8qKiBhdXRvbWF0aWNhbGx5IHNjcm9sbCB0byBzZWxlY3RlZCBpdGVtIG9uIGluaXRpYWxpemF0aW9uICovXG4gIHNjcm9sbFRvU2VsZWN0ZWQ6IGZhbHNlLFxuICAvKiogc2VsZWN0ZWQgbWVudSBpdGVtICovXG4gIHNlbGVjdGVkOiAnJyxcbiAgLyoqIGFuaW1hdGlvbiBzcGVlZCAqL1xuICB0cmFuc2l0aW9uOiAwLjQsXG4gIC8qKiBwb3NpdGlvbiBvZiBlbGVtZW50cyAqL1xuICB0cmFuc2xhdGU6IDAuMCxcbiAgLyoqIHVzZSBidXR0b24gcm9sZSBmb3IgaXRlbXMgKi9cbiAgdXNlQnV0dG9uUm9sZTogdHJ1ZSxcbiAgLyoqIGNsYXNzIGZvciB3cmFwcGVyICovXG4gIHdyYXBwZXJDbGFzczogJ21lbnUtd3JhcHBlcicsXG4gIC8qKiBzdHlsZXMgZm9yIHdyYXBwZXIgKi9cbiAgd3JhcHBlclN0eWxlOiBkZWZhdWx0V3JhcHBlclN0eWxlLFxuICAvKiogc2Nyb2xsIHdpdGggbW91c2Ugd2hlZWwgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICB3aGVlbDogdHJ1ZSxcbiAgLyoqIHRoaXMgbm90IHVzZWQgKi9cbiAgeFBvaW50OiAwLFxufTtcblxuZXhwb3J0IHtkZWZhdWx0TWVudVN0eWxlLCBkZWZhdWx0UHJvcHMsIGRlZmF1bHRXcmFwcGVyU3R5bGV9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var scrollMenu_1 = __importDefault(__webpack_require__(/*! ./scrollMenu */ "./src/scrollMenu.tsx"));

exports["default"] = scrollMenu_1["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CZWxsL0RldmVsb3BtZW50L3JlYWN0LWhvcml6b250YWwtc2Nyb2xsaW5nLW1lbnUvc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQUEsWUFBQSxHQUFBLGVBQUEsQ0FBQSxPQUFBLENBQUEsY0FBQSxDQUFBLENBQUE7O0FBRUEsT0FBQSxXQUFBLEdBQWUsWUFBQSxXQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNjcm9sbE1lbnUgZnJvbSAnLi9zY3JvbGxNZW51JztcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsTWVudTtcbiJdLCJzb3VyY2VSb290IjoiIn0=

/***/ }),

/***/ "./src/scrollMenu.tsx":
/*!****************************!*\
  !*** ./src/scrollMenu.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "react"));

var defautSettings_1 = __webpack_require__(/*! ./defautSettings */ "./src/defautSettings.ts");

var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");

var wrapper_1 = __webpack_require__(/*! ./wrapper */ "./src/wrapper.tsx");

var ScrollMenu = function (_super) {
  __extends(ScrollMenu, _super);

  function ScrollMenu(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      dragging: false,
      firstItemVisible: true,
      lastItemVisible: false,
      leftArrowVisible: false,
      rightArrowVisible: true,
      startDragTranslate: 0,
      translate: _this.props.translate,
      xDraggedDistance: 0,
      xPoint: 0
    };

    _this.setRef = function (ref) {
      var _a = Object.entries(ref)[0],
          key = _a[0],
          value = _a[1];

      if (value.elem) {
        _this.ref[key] = value;
      }
    };

    _this.setMenuInnerRef = function (ref) {
      _this.menuInner = ref;
    };

    _this.setWrapperRef = function (ref) {
      _this.menuWrapper = ref;
    };

    _this.checkFirstLastItemVisibility = function (_a) {
      var _b = _a.translate,
          translate = _b === void 0 ? _this.state.translate : _b;
      var menuItems = _this.menuItems;
      var firstItemVisible = true;
      var lastItemVisible = false;

      if (menuItems) {
        var visibleItems = _this.getVisibleItems({
          offset: translate
        });

        firstItemVisible = visibleItems.includes(menuItems[0]);
        lastItemVisible = visibleItems.includes(menuItems.slice(-1)[0]);
      }

      return {
        firstItemVisible: firstItemVisible,
        lastItemVisible: lastItemVisible
      };
    };

    _this.setFirstLastItemVisibility = function () {
      var _a = _this.state,
          firstItemVisibleOld = _a.firstItemVisible,
          lastItemVisibleOld = _a.lastItemVisible;

      var _b = _this.checkFirstLastItemVisibility({}),
          firstItemVisible = _b.firstItemVisible,
          lastItemVisible = _b.lastItemVisible;

      if (firstItemVisibleOld !== firstItemVisible || lastItemVisibleOld !== lastItemVisible) {
        var leftArrowVisible = !firstItemVisible;
        var rightArrowVisible = !lastItemVisible;

        _this.setState({
          firstItemVisible: firstItemVisible,
          lastItemVisible: lastItemVisible,
          leftArrowVisible: leftArrowVisible,
          rightArrowVisible: rightArrowVisible
        });
      }
    };

    _this.onLoad = function () {
      _this.setInitial();

      _this.mounted = true;
    };

    _this.resizeHandler = function () {
      var alignOnResize = _this.props.alignOnResize;

      if (!alignOnResize) {
        return false;
      }

      clearTimeout(_this.resizeTimer);
      _this.resizeTimer = setTimeout(function () {
        return _this.resize();
      }, 250);
    };

    _this.resize = function () {
      var alignCenter = _this.props.alignCenter;

      _this.updateWidth({});

      var visibleItems = _this.getVisibleItems({});

      var offset = _this.getOffsetToItemByIndex({
        index: visibleItems[0] && visibleItems[0][1].index || 0
      });

      var align = alignCenter ? _this.getCenterOffset({
        items: visibleItems
      }) : 0;

      _this.setState({
        translate: -offset + align
      });
    };

    _this.setInitial = function () {
      var _a = _this.props,
          selected = _a.selected,
          data = _a.data,
          translateProp = _a.translate,
          scrollToSelected = _a.scrollToSelected,
          alignCenter = _a.alignCenter;
      var translateState = _this.state.translate;

      if (!data || !data.length) {
        return false;
      }

      if (!_this.menuItems.length || data !== _this.data) {
        _this.menuItems = _this.getMenuItems();
        _this.data = data;
      }

      _this.updateWidth({});

      var newState = __assign({}, _this.state);

      var firstMountAndDefaultTranslate = !_this.mounted && translateProp === defautSettings_1.defaultProps.translate;

      if (firstMountAndDefaultTranslate || !utils_1.translateIsValid(translateProp) && !utils_1.translateIsValid(translateState)) {
        newState.translate = alignCenter ? _this.firstPageOffset : defautSettings_1.defaultProps.translate;
      }

      var _b = _this.checkFirstLastItemVisibility({
        translate: translateProp
      }),
          firstItemVisible = _b.firstItemVisible,
          lastItemVisible = _b.lastItemVisible;

      newState.firstItemVisible = firstItemVisible;
      newState.lastItemVisible = lastItemVisible;
      newState.leftArrowVisible = !firstItemVisible;
      newState.rightArrowVisible = !lastItemVisible;

      if (scrollToSelected) {
        var needScroll = _this.isScrollNeeded({
          itemId: selected,
          translate: newState.translate
        });

        if (needScroll) {
          newState.translate = _this.getOffsetToItemByKey(selected);
        }
      }

      _this.setState(__assign({}, newState));
    };

    _this.isScrollNeeded = function (_a) {
      var itemId = _a.itemId,
          _b = _a.translate,
          translate = _b === void 0 ? _this.state.translate : _b;

      var item = _this.getItemByKey(itemId);

      var visibleItems = _this.getVisibleItems({
        offset: translate
      });

      return !visibleItems.includes(item);
    };

    _this.scrollTo = function (itemKey) {
      var translate = _this.state.translate;

      var newTranslate = _this.getOffsetToItemByKey(itemKey);

      _this.selected = itemKey;

      if (translate === newTranslate) {
        return false;
      }

      _this.setState({
        translate: newTranslate
      });
    };

    _this.getMenuItems = function () {
      return Object.entries(_this.ref).slice(0, _this.props.data.length || 0);
    };

    _this.getItemsWidth = function (_a) {
      var _b = _a.items,
          items = _b === void 0 ? _this.menuItems : _b;
      return items.map(function (el) {
        return el[1].elem;
      }).filter(Boolean).reduce(function (acc, el) {
        return acc += utils_1.getClientRect(el).width;
      }, 0);
    };

    _this.getWidth = function (_a) {
      var items = _a.items;
      var wWidth = window && window.innerWidth;

      var _b = utils_1.getClientRect(_this.menuWrapper),
          menuPos = _b.x,
          menuWidth = _b.width;

      var allItemsWidth = _this.getItemsWidth({
        items: items
      });

      return {
        wWidth: wWidth,
        menuPos: menuPos,
        menuWidth: menuWidth,
        allItemsWidth: allItemsWidth
      };
    };

    _this.updateWidth = function (_a) {
      var _b = _a.items,
          items = _b === void 0 ? _this.menuItems : _b;

      var _c = _this.getWidth({
        items: items
      }),
          wWidth = _c.wWidth,
          menuPos = _c.menuPos,
          menuWidth = _c.menuWidth,
          allItemsWidth = _c.allItemsWidth;

      var _d = _this.getPagesOffsets({
        allItemsWidth: allItemsWidth,
        items: items,
        menuPos: menuPos,
        menuWidth: menuWidth,
        wWidth: wWidth
      }),
          firstPageOffset = _d.firstPageOffset,
          lastPageOffset = _d.lastPageOffset;

      _this.menuPos = menuPos;
      _this.wWidth = wWidth;
      _this.allItemsWidth = allItemsWidth;
      _this.menuWidth = menuWidth;
      _this.firstPageOffset = firstPageOffset;
      _this.lastPageOffset = lastPageOffset;
    };

    _this.getFirstPageOffset = function (_a) {
      var _b = _a.items,
          items = _b === void 0 ? _this.menuItems : _b,
          _c = _a.offset,
          offset = _c === void 0 ? _this.state.translate : _c,
          _d = _a.menuWidth,
          menuWidth = _d === void 0 ? _this.menuWidth : _d;

      var visibleItemsStart = _this.getVisibleItems({
        items: items,
        menuWidth: menuWidth,
        offset: offset
      });

      var firstPageOffset = _this.getCenterOffset({
        items: visibleItemsStart,
        menuWidth: menuWidth
      });

      return firstPageOffset;
    };

    _this.getLastPageOffset = function (_a) {
      var _b = _a.items,
          items = _b === void 0 ? _this.menuItems : _b,
          _c = _a.allItemsWidth,
          allItemsWidth = _c === void 0 ? _this.allItemsWidth : _c,
          _d = _a.wWidth,
          wWidth = _d === void 0 ? _this.wWidth : _d,
          _e = _a.menuPos,
          menuPos = _e === void 0 ? _this.menuPos : _e,
          _f = _a.menuWidth,
          menuWidth = _f === void 0 ? _this.menuWidth : _f;

      var visibleItemsEnd = _this.getVisibleItems({
        items: items,
        menuWidth: menuWidth,
        offset: -allItemsWidth + menuWidth
      });

      var lastPageOffset = _this.getCenterOffset({
        items: visibleItemsEnd,
        menuWidth: menuWidth
      });

      return lastPageOffset;
    };

    _this.getPagesOffsets = function (_a) {
      var _b = _a.items,
          items = _b === void 0 ? _this.menuItems : _b,
          _c = _a.allItemsWidth,
          allItemsWidth = _c === void 0 ? _this.allItemsWidth : _c,
          _d = _a.wWidth,
          wWidth = _d === void 0 ? _this.wWidth : _d,
          _e = _a.menuPos,
          menuPos = _e === void 0 ? _this.menuPos : _e,
          _f = _a.menuWidth,
          menuWidth = _f === void 0 ? _this.menuWidth : _f,
          _g = _a.offset,
          offset = _g === void 0 ? _this.state.translate : _g;

      var firstPageOffset = _this.getFirstPageOffset({
        items: items,
        menuPos: menuPos,
        menuWidth: menuWidth,
        offset: offset,
        wWidth: wWidth
      });

      var lastPageOffset = _this.getLastPageOffset({
        allItemsWidth: allItemsWidth,
        items: items,
        menuPos: menuPos,
        menuWidth: menuWidth,
        wWidth: wWidth
      });

      return {
        firstPageOffset: firstPageOffset,
        lastPageOffset: lastPageOffset
      };
    };

    _this.onItemClick = function (id) {
      var _a = _this.props,
          clickWhenDrag = _a.clickWhenDrag,
          onSelect = _a.onSelect;
      var xDraggedDistance = _this.state.xDraggedDistance;
      var afterScroll = xDraggedDistance > 5;

      if (afterScroll && !clickWhenDrag) {
        return false;
      }

      _this.selected = id;

      if (onSelect) {
        onSelect(id);
      }
    };

    _this.getVisibleItems = function (_a) {
      var _b = _a.items,
          items = _b === void 0 ? _this.menuItems : _b,
          _c = _a.menuWidth,
          menuWidth = _c === void 0 ? _this.menuWidth : _c,
          _d = _a.offset,
          offset = _d === void 0 ? _this.state.translate : _d,
          _e = _a.translate,
          translate = _e === void 0 ? _this.state.translate || defautSettings_1.defaultProps.translate : _e;
      return items.filter(function (el) {
        var elWidth = utils_1.getClientRect(el[1].elem).width;

        var id = _this.getItemInd(items, el);

        var x = _this.getOffsetToItemByIndex({
          index: id,
          menuItems: items,
          translate: translate
        });

        return _this.elemVisible({
          elWidth: elWidth,
          menuWidth: menuWidth,
          offset: offset,
          x: x
        });
      });
    };

    _this.elemVisible = function (_a) {
      var x = _a.x,
          _b = _a.offset,
          offset = _b === void 0 ? 0 : _b,
          elWidth = _a.elWidth,
          _c = _a.menuWidth,
          menuWidth = _c === void 0 ? _this.menuWidth : _c;
      var leftEdge = -1;
      var rightEdge = menuWidth + 1;
      var pos = x + offset;
      var posWithWidth = pos + elWidth;
      return pos >= leftEdge && posWithWidth <= rightEdge;
    };

    _this.getItemInd = function (menuItems, item) {
      if (menuItems === void 0) {
        menuItems = _this.menuItems;
      }

      if (!menuItems || !item) {
        return 0;
      }

      return menuItems.findIndex(function (el) {
        return el[0] === item[0];
      });
    };

    _this.getNextItemInd = function (left, visibleItems) {
      var menuItems = _this.menuItems;

      if (left) {
        if (!visibleItems.length) {
          return 0;
        }
      } else {
        if (!visibleItems.length) {
          return menuItems.length;
        }
      }

      var ind = left ? _this.getItemInd(menuItems, visibleItems[0]) - 1 : _this.getItemInd(menuItems, visibleItems.slice(-1)[0]) + 1;
      return ind < 0 ? 0 : ind;
    };

    _this.getOffsetToItemByKey = function (key) {
      var translate = _this.state.translate;

      var itemIndex = _this.getItemIndexByKey(key);

      if (itemIndex === -1) {
        return translate;
      }

      var alignCenter = _this.props.alignCenter;
      translate = _this.getOffsetToItemByIndex({
        index: itemIndex
      });

      var visibleItemsWithNewTranslate = _this.getVisibleItems({
        offset: -translate
      });

      var offset = alignCenter ? _this.getCenterOffset({
        items: visibleItemsWithNewTranslate
      }) : defautSettings_1.defaultProps.translate;
      translate = -(translate - offset);

      if (_this.itBeforeStart(translate)) {
        translate = _this.getOffsetAtStart();
      } else if (_this.itAfterEnd(translate)) {
        translate = _this.getOffsetAtEnd();
      }

      return translate;
    };

    _this.getItemByKey = function (key) {
      return _this.menuItems.find(function (el) {
        return el[1].key === key;
      }) || ['', {
        key: 'n',
        elem: null,
        index: -1
      }];
    };

    _this.getItemIndexByKey = function (itemKey) {
      if (!itemKey) {
        return -1;
      }

      return _this.menuItems.findIndex(function (el) {
        return el[1].key === itemKey;
      });
    };

    _this.getOffsetToItemByIndex = function (_a) {
      var index = _a.index,
          _b = _a.menuItems,
          menuItems = _b === void 0 ? _this.menuItems : _b,
          _c = _a.translate,
          translate = _c === void 0 ? _this.state.translate : _c;

      if (!menuItems.length) {
        return 0;
      }

      var ind = index >= menuItems.length ? menuItems.length - 1 : index;
      var x = utils_1.getClientRect(menuItems[ind][1].elem).x;
      var position = +x - translate - _this.menuPos;
      return position;
    };

    _this.getScrollRightOffset = function (visibleItems, items) {
      if (items === void 0) {
        items = _this.menuItems;
      }

      var scrollBy = _this.props.scrollBy;
      var nextItemIndex = scrollBy ? visibleItems[0][1].index + scrollBy : _this.getNextItem((visibleItems.slice(-1)[0] && visibleItems.slice(-1) || items.slice(-1))[0][1].key)[1].index;
      var newOffset = -_this.getOffsetToItemByIndex({
        index: nextItemIndex,
        menuItems: items
      });
      return newOffset;
    };

    _this.getScrollLeftOffset = function (visibleItems, items) {
      if (items === void 0) {
        items = _this.menuItems;
      }

      var scrollBy = _this.props.scrollBy;

      var prevItem = _this.getPrevItem((visibleItems[0] && visibleItems[0][1] || items[0][1]).key);

      var prevItemIndex = prevItem[1].index - (scrollBy ? scrollBy - 1 : visibleItems.length);
      var newOffset = -_this.getOffsetToItemByIndex({
        index: prevItemIndex < 0 ? 0 : prevItemIndex,
        menuItems: items
      });
      return newOffset;
    };

    _this.getNextItem = function (key) {
      var menuItems = _this.menuItems;
      var itemIndex = menuItems.findIndex(function (el) {
        return el[1].key === key;
      });
      var nextItemIndex = itemIndex + 1;
      var nextItem = menuItems[nextItemIndex] || menuItems.slice(-1)[0];
      return nextItem;
    };

    _this.getPrevItem = function (key) {
      var menuItems = _this.menuItems;
      var itemIndex = menuItems.findIndex(function (el) {
        return el[1].key === key;
      });
      var prevItemIndex = itemIndex - 1;
      var prevItem = menuItems[prevItemIndex] || menuItems[0];
      return prevItem;
    };

    _this.getOffset = function (left, items) {
      if (items === void 0) {
        items = _this.menuItems;
      }

      var visibleItems = _this.getVisibleItems({
        items: items
      });

      var newOffset = left ? _this.getScrollLeftOffset(visibleItems, items) : _this.getScrollRightOffset(visibleItems, items);
      return newOffset;
    };

    _this.getCenterOffset = function (_a) {
      var _b = _a.items,
          items = _b === void 0 ? _this.menuItems : _b,
          _c = _a.menuWidth,
          menuWidth = _c === void 0 ? _this.menuWidth : _c;

      if (!items.length) {
        return 0;
      }

      var itemsWidth = _this.getItemsWidth({
        items: items
      });

      var offset = (menuWidth - itemsWidth) / 2;
      return offset;
    };

    _this.handleWheel = function (e) {
      var wheel = _this.props.wheel;

      if (!wheel) {
        return false;
      }

      if (e.deltaY < 0) {
        _this.handleArrowClick();
      } else {
        _this.handleArrowClick(false);
      }
    };

    _this.getOffsetAtStart = function () {
      var firstPageOffset = _this.firstPageOffset;
      var alignCenter = _this.props.alignCenter;
      return alignCenter ? firstPageOffset : defautSettings_1.defaultProps.translate;
    };

    _this.getOffsetAtEnd = function () {
      var alignCenter = _this.props.alignCenter;
      var _a = _this,
          allItemsWidth = _a.allItemsWidth,
          menuWidth = _a.menuWidth,
          lastPageOffset = _a.lastPageOffset;
      var offset = allItemsWidth - menuWidth;
      return alignCenter ? -offset - lastPageOffset : -offset;
    };

    _this.handleArrowClickRight = function () {
      _this.handleArrowClick(false);
    };

    _this.handleArrowClick = function (left) {
      if (left === void 0) {
        left = true;
      }

      var alignCenter = _this.props.alignCenter;
      var _a = _this,
          allItemsWidth = _a.allItemsWidth,
          menuWidth = _a.menuWidth;

      if (!alignCenter && !left && allItemsWidth < menuWidth) {
        return false;
      }

      var newTranslate = 0;

      var visibleItems = _this.getVisibleItems({});

      var firstItemVisible = visibleItems[0] && visibleItems[0][1].index === 0;
      var lastItemVisible = visibleItems.slice(-1)[0] && visibleItems.slice(-1)[0][1].index === _this.menuItems.length - 1;

      var transl = _this.getOffset(left);

      if (left && (firstItemVisible || _this.itBeforeStart(transl))) {
        newTranslate = _this.getOffsetAtStart();
      } else if (!left && (lastItemVisible || _this.itAfterEnd(transl))) {
        newTranslate = _this.getOffsetAtEnd();
      } else {
        var visibleItems_1 = function visibleItems_1() {
          return _this.getVisibleItems({
            offset: transl
          });
        };

        var centerOffset = alignCenter ? _this.getCenterOffset({
          items: visibleItems_1()
        }) : 0;
        newTranslate = transl + centerOffset;
      }

      _this.setState({
        startDragTranslate: 0,
        translate: newTranslate,
        xDraggedDistance: 0,
        xPoint: defautSettings_1.defaultProps.xPoint
      });
    };

    _this.itBeforeStart = function (trans) {
      var alignCenter = _this.props.alignCenter;
      var _a = _this,
          menuWidth = _a.menuWidth,
          allItemsWidth = _a.allItemsWidth,
          firstPageOffset = _a.firstPageOffset;

      if (allItemsWidth < menuWidth) {
        return true;
      }

      return alignCenter ? trans > firstPageOffset : trans > defautSettings_1.defaultProps.translate;
    };

    _this.itAfterEnd = function (trans) {
      var alignCenter = _this.props.alignCenter;
      var _a = _this,
          menuWidth = _a.menuWidth,
          allItemsWidth = _a.allItemsWidth,
          lastPageOffset = _a.lastPageOffset;

      if (allItemsWidth < menuWidth) {
        return true;
      }

      return alignCenter ? trans < defautSettings_1.defaultProps.translate && Math.abs(trans) > allItemsWidth - menuWidth + lastPageOffset : trans < defautSettings_1.defaultProps.translate && Math.abs(trans) > allItemsWidth - menuWidth;
    };

    _this.getPoint = function (ev) {
      if ('touches' in ev) {
        return ev.touches[0].clientX;
      } else if ('clientX' in ev) {
        return ev.clientX;
      } else {
        return 0;
      }
    };

    _this.handleDragStart = function (ev) {
      if (ev && 'buttons' in ev && ev.buttons === 2) {
        return false;
      }

      var draggingEnable = _this.props.dragging;

      if (!draggingEnable) {
        return false;
      }

      var startDragTranslate = _this.state.translate;
      _this.dragHistory = [{
        time: Date.now(),
        position: startDragTranslate
      }];

      _this.setState({
        dragging: true,
        startDragTranslate: startDragTranslate,
        xDraggedDistance: 0,
        xPoint: 0
      });
    };

    _this.handleDrag = function (e) {
      var draggingEnable = _this.props.dragging;
      var _a = _this.state,
          translate = _a.translate,
          dragging = _a.dragging,
          xPoint = _a.xPoint,
          xDraggedDistance = _a.xDraggedDistance;

      if (!draggingEnable || !dragging) {
        return false;
      }

      var point = _this.getPoint(e);

      var diff = xPoint === defautSettings_1.defaultProps.xPoint ? defautSettings_1.defaultProps.xPoint : xPoint - point;
      var result = translate - diff;

      if (_this.itBeforeStart(result)) {
        result = result - Math.abs(diff) / 2;
      } else if (_this.itAfterEnd(result)) {
        result = result + Math.abs(diff) / 2;
      }

      if (diff !== 0) {
        _this.dragHistory.push({
          time: Date.now(),
          position: result
        });
      }

      var newTranslate = result;

      _this.setState({
        translate: newTranslate,
        xDraggedDistance: xDraggedDistance + Math.abs(diff),
        xPoint: point
      });
    };

    _this.handleDragStop = function (e) {
      var _a = _this,
          allItemsWidth = _a.allItemsWidth,
          menuWidth = _a.menuWidth;
      var _b = _this.state,
          translate = _b.translate,
          _c = _b.xPoint,
          xPoint = _c === void 0 ? _this.getPoint(e) : _c;
      var _d = _this.state,
          dragging = _d.dragging,
          startDragTranslate = _d.startDragTranslate;
      var _e = _this.props,
          draggingEnable = _e.dragging,
          alignCenter = _e.alignCenter;

      if (!draggingEnable || !dragging) {
        return false;
      }

      if (_this.props.inertiaScrolling) {
        var currentTime_1 = Date.now();

        var recentEntries = _this.dragHistory.filter(function (entry) {
          return currentTime_1 - entry.time < 150;
        });

        if (recentEntries.length > 2) {
          var first = recentEntries[0];
          var last = recentEntries[recentEntries.length - 1];
          var speed = (last.position - first.position) / (last.time - first.time);
          speed *= _this.props.inertiaScrollingSlowdown;
          translate += speed * (_this.props.transition * 1000);
        }
      }

      var newTranslate = translate;

      if (_this.itBeforeStart(translate)) {
        newTranslate = _this.getOffsetAtStart();
        xPoint = defautSettings_1.defaultProps.xPoint;
      } else if (_this.itAfterEnd(translate)) {
        newTranslate = _this.getOffsetAtEnd();
        xPoint = defautSettings_1.defaultProps.xPoint;
      }

      if (!alignCenter && allItemsWidth <= menuWidth) {
        newTranslate = defautSettings_1.defaultProps.translate;
        xPoint = defautSettings_1.defaultProps.xPoint;
      }

      _this.setState({
        dragging: false,
        translate: newTranslate,
        xPoint: xPoint
      }, function () {
        return _this.onUpdate({
          translate: newTranslate,
          translateOld: startDragTranslate
        });
      });
    };

    _this.isArrowsVisible = function () {
      var _a = _this,
          allItemsWidth = _a.allItemsWidth,
          menuWidth = _a.menuWidth,
          hideArrows = _a.props.hideArrows;
      var hide = Boolean(hideArrows && allItemsWidth <= menuWidth);
      return !hide;
    };

    _this.onUpdate = function (_a) {
      var _b = _a.translate,
          translate = _b === void 0 ? _this.state.translate : _b,
          _c = _a.translateOld,
          translateOld = _c === void 0 ? _this.state.translate : _c;
      var onUpdate = _this.props.onUpdate;
      var lastTranslateUpdate = _this.lastTranslateUpdate;

      if (translate !== translateOld && translate !== lastTranslateUpdate) {
        _this.lastTranslateUpdate = translate;

        if (typeof onUpdate === 'function') {
          onUpdate({
            translate: translate
          });
        }
      }
    };

    _this.ref = {};
    _this.menuWrapper = null;
    _this.menuInner = null;
    _this.mounted = false;
    _this.needUpdate = false;
    _this.allItemsWidth = 0;
    _this.menuPos = 0;
    _this.menuWidth = 0;
    _this.wWidth = 0;
    _this.firstPageOffset = 0;
    _this.lastPageOffset = 0;
    _this.lastTranslateUpdate = 0;
    _this.menuItems = [];
    _this.selected = String(props.selected) || '';
    _this.onLoadTimer = 0;
    _this.rafTimer = 0;
    _this.resizeTimer = 0;
    _this.frameId = 0;
    _this.data = null;
    _this.dragHistory = [];
    checkVersion(_this);
    return _this;
  }

  ScrollMenu.prototype.componentDidMount = function () {
    var _this = this;

    this.setInitial();

    window.requestAnimationFrame = window.requestAnimationFrame || function () {
      return false;
    };

    var passiveEvents = utils_1.testPassiveEventSupport();
    var optionsCapture = passiveEvents ? {
      passive: true,
      capture: true
    } : true;
    var optionsNoCapture = passiveEvents ? {
      passive: true,
      capture: false
    } : false;
    window.addEventListener('load', this.onLoad, optionsNoCapture);
    window.addEventListener('resize', this.resizeHandler, optionsNoCapture);
    document.addEventListener('mousemove', this.handleDrag, optionsCapture);
    document.addEventListener('mouseup', this.handleDragStop, optionsCapture);
    this.onLoadTimer = setTimeout(function () {
      return _this.onLoad(), _this.forceUpdate();
    }, 0);
  };

  ScrollMenu.prototype.shouldComponentUpdate = function (nextProps, nextState) {
    var _a = this.state,
        translate = _a.translate,
        dragging = _a.dragging,
        firstItemVisible = _a.firstItemVisible,
        lastItemVisible = _a.lastItemVisible;
    var translateNew = nextState.translate,
        draggingNew = nextState.dragging,
        firstItemVisibleNew = nextState.firstItemVisible,
        lastItemVisibleNew = nextState.lastItemVisible;
    var _b = this.props,
        translateProps = _b.translate,
        selectedProps = _b.selected,
        scrollToSelected = _b.scrollToSelected;
    var translatePropsNew = nextProps.translate,
        selectedPropsNew = nextProps.selected;
    var translatePropsNotNull = utils_1.notUndefOrNull(translatePropsNew);
    var translateStateDiff = translate !== translateNew;
    var translatePropsDiff = translatePropsNotNull && translateProps !== translatePropsNew;
    var translateDiff = translatePropsNew !== translateNew || translateStateDiff || translatePropsDiff;
    var selectedPropsDiff = utils_1.notUndefOrNull(selectedPropsNew) && selectedProps !== selectedPropsNew;
    var selectedDiff = selectedPropsDiff || this.selected !== selectedPropsNew;
    var propsDiff = translateDiff || selectedDiff;
    var firstItemVisibleDiff = firstItemVisible !== firstItemVisibleNew;
    var lastItemVisibleDiff = lastItemVisible !== lastItemVisibleNew;
    var translateResult = translateNew;
    var newMenuItems = this.props.data !== nextProps.data || this.props.data.length !== nextProps.data.length;
    var newTranslateProps = utils_1.translateIsValid(translatePropsNew) && translatePropsDiff && !newMenuItems;

    if (newMenuItems || scrollToSelected && selectedPropsDiff) {
      this.needUpdate = true;
    }

    if (propsDiff) {
      if (selectedPropsDiff) {
        this.selected = selectedPropsNew;
      }

      if (newTranslateProps) {
        translateResult = translatePropsNew;
      }
    }

    if (newTranslateProps) {
      this.setState({
        translate: +translateResult
      });
    }

    return newMenuItems || translateDiff || dragging !== draggingNew || propsDiff || firstItemVisibleDiff || lastItemVisibleDiff;
  };

  ScrollMenu.prototype.componentDidUpdate = function (prevProps, prevState) {
    var _this = this;

    if (this.needUpdate) {
      this.needUpdate = false;
      this.onLoad();
    }

    var translateOld = prevState.translate;
    var _a = this.state,
        translate = _a.translate,
        dragging = _a.dragging;

    if (!dragging && translateOld !== translate) {
      this.onUpdate({
        translate: translate,
        translateOld: translateOld
      });
    }

    var _b = this.props,
        hideSingleArrow = _b.hideSingleArrow,
        transition = _b.transition;

    if (hideSingleArrow) {
      cancelAnimationFrame(this.frameId);
      clearTimeout(this.rafTimer);
      this.frameId = requestAnimationFrame(this.setFirstLastItemVisibility);
      this.rafTimer = setTimeout(function () {
        cancelAnimationFrame(_this.frameId);
        _this.frameId = requestAnimationFrame(_this.setFirstLastItemVisibility);
      }, transition * 1000 + 10);
    }
  };

  ScrollMenu.prototype.componentWillUnmount = function () {
    window.removeEventListener('resize', this.resizeHandler);
    document.removeEventListener('mousemove', this.handleDrag);
    document.removeEventListener('mouseup', this.handleDragStop);
    clearTimeout(this.rafTimer);
    clearTimeout(this.onLoadTimer);
    clearTimeout(this.resizeTimer);
    cancelAnimationFrame(this.frameId);
  };

  ScrollMenu.prototype.render = function () {
    var _a = this.props,
        arrowClass = _a.arrowClass,
        arrowDisabledClass = _a.arrowDisabledClass,
        arrowLeft = _a.arrowLeft,
        arrowRight = _a.arrowRight,
        data = _a.data,
        inertiaScrolling = _a.inertiaScrolling,
        innerWrapperStyle = _a.innerWrapperStyle,
        innerWrapperClass = _a.innerWrapperClass,
        itemStyle = _a.itemStyle,
        itemClass = _a.itemClass,
        itemClassActive = _a.itemClassActive,
        menuStyle = _a.menuStyle,
        menuClass = _a.menuClass,
        transition = _a.transition,
        useButtonRole = _a.useButtonRole,
        wrapperClass = _a.wrapperClass,
        wrapperStyle = _a.wrapperStyle;
    var _b = this.state,
        translate = _b.translate,
        dragging = _b.dragging,
        leftArrowVisible = _b.leftArrowVisible,
        rightArrowVisible = _b.rightArrowVisible;

    var _c = this,
        selected = _c.selected,
        mounted = _c.mounted;

    if (!data || !data.length) {
      return null;
    }

    var arrowsVisible = mounted ? this.isArrowsVisible() : true;

    var menuStyles = __assign({}, defautSettings_1.defaultMenuStyle, menuStyle);

    var wrapperStyles = __assign({}, defautSettings_1.defaultWrapperStyle, wrapperStyle);

    var itemWrapperStyle = __assign({}, defautSettings_1.defaultProps.itemStyle, itemStyle);

    var arrowProps = {
      className: arrowClass,
      disabledClass: arrowDisabledClass
    };
    return React.createElement("div", {
      className: menuClass,
      style: menuStyles,
      onWheel: this.handleWheel
    }, arrowLeft && React.createElement(wrapper_1.ArrowWrapper, __assign({}, arrowProps, {
      isDisabled: !arrowsVisible || !leftArrowVisible,
      onClick: this.handleArrowClick
    }), arrowLeft), React.createElement("div", {
      className: wrapperClass,
      style: wrapperStyles,
      ref: this.setWrapperRef,
      onMouseDown: this.handleDragStart,
      onTouchStart: this.handleDragStart,
      onTouchEnd: this.handleDragStop,
      onMouseMove: this.handleDrag,
      onTouchMove: this.handleDrag
    }, React.createElement(wrapper_1.InnerWrapper, {
      data: data,
      translate: translate,
      dragging: dragging,
      mounted: mounted,
      transition: mounted ? transition : 0,
      selected: selected,
      setRef: this.setRef,
      setMenuInnerRef: this.setMenuInnerRef,
      onClick: this.onItemClick,
      innerWrapperStyle: innerWrapperStyle,
      innerWrapperClass: innerWrapperClass,
      itemStyle: itemWrapperStyle,
      itemClass: itemClass,
      itemClassActive: itemClassActive,
      inertiaScrolling: inertiaScrolling,
      useButtonRole: useButtonRole
    })), arrowRight && React.createElement(wrapper_1.ArrowWrapper, __assign({}, arrowProps, {
      isDisabled: !arrowsVisible || !rightArrowVisible,
      onClick: this.handleArrowClickRight
    }), arrowRight));
  };

  ScrollMenu.defaultProps = defautSettings_1.defaultProps;
  return ScrollMenu;
}(React.Component);

exports.ScrollMenu = ScrollMenu;

var checkVersion = function checkVersion(that) {
  var version = React.version.match(/^(\d{1,2})\./);

  if (+version[1] >= 16) {
    that.componentDidCatch = function (err, info) {
      console.log('ScrollMenu catched error: ', err, info);
    };
  }
};

exports["default"] = ScrollMenu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CZWxsL0RldmVsb3BtZW50L3JlYWN0LWhvcml6b250YWwtc2Nyb2xsaW5nLW1lbnUvc3JjL3Njcm9sbE1lbnUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBLEtBQUEsR0FBQSxZQUFBLENBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBOztBQUdBLElBQUEsZ0JBQUEsR0FBQSxPQUFBLENBQUEsa0JBQUEsQ0FBQTs7QUFNQSxJQUFBLE9BQUEsR0FBQSxPQUFBLENBQUEsU0FBQSxDQUFBOztBQU1BLElBQUEsU0FBQSxHQUFBLE9BQUEsQ0FBQSxXQUFBLENBQUE7O0FBbUJBLElBQUEsVUFBQSxHQUFBLFVBQUEsTUFBQSxFQUFBO0FBQWdDLEVBQUEsU0FBQSxDQUFBLFVBQUEsRUFBQSxNQUFBLENBQUE7O0FBNEI5QixXQUFBLFVBQUEsQ0FBWSxLQUFaLEVBQTRCO0FBQTVCLFFBQUEsS0FBQSxHQUNFLE1BQUEsQ0FBQSxJQUFBLENBQUEsSUFBQSxFQUFNLEtBQU4sS0FBWSxJQURkOztBQTJCTyxJQUFBLEtBQUEsQ0FBQSxLQUFBLEdBQVE7QUFDYixNQUFBLFFBQVEsRUFBRSxLQURHO0FBRWIsTUFBQSxnQkFBZ0IsRUFBRSxJQUZMO0FBR2IsTUFBQSxlQUFlLEVBQUUsS0FISjtBQUliLE1BQUEsZ0JBQWdCLEVBQUUsS0FKTDtBQUtiLE1BQUEsaUJBQWlCLEVBQUUsSUFMTjtBQU1iLE1BQUEsa0JBQWtCLEVBQUUsQ0FOUDtBQU9iLE1BQUEsU0FBUyxFQUFFLEtBQUksQ0FBQyxLQUFMLENBQVcsU0FQVDtBQVFiLE1BQUEsZ0JBQWdCLEVBQUUsQ0FSTDtBQVNiLE1BQUEsTUFBTSxFQUFFO0FBVEssS0FBUjs7QUFnS0EsSUFBQSxLQUFBLENBQUEsTUFBQSxHQUFTLFVBQUMsR0FBRCxFQUFlO0FBQ3ZCLFVBQUEsRUFBQSxHQUFBLE1BQUEsQ0FBQSxPQUFBLENBQUEsR0FBQSxFQUFBLENBQUEsQ0FBQTtBQUFBLFVBQUMsR0FBQSxHQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUQ7QUFBQSxVQUFNLEtBQUEsR0FBQSxFQUFBLENBQUEsQ0FBQSxDQUFOOztBQUNOLFVBQUksS0FBSyxDQUFDLElBQVYsRUFBZ0I7QUFDZCxRQUFBLEtBQUksQ0FBQyxHQUFMLENBQVMsR0FBVCxJQUFnQixLQUFoQjtBQUNEO0FBQ0YsS0FMTTs7QUFPQSxJQUFBLEtBQUEsQ0FBQSxlQUFBLEdBQWtCLFVBQUMsR0FBRCxFQUFTO0FBQ2hDLE1BQUEsS0FBSSxDQUFDLFNBQUwsR0FBaUIsR0FBakI7QUFDRCxLQUZNOztBQUtBLElBQUEsS0FBQSxDQUFBLGFBQUEsR0FBZ0IsVUFBQyxHQUFELEVBQVM7QUFDOUIsTUFBQSxLQUFJLENBQUMsV0FBTCxHQUFtQixHQUFuQjtBQUNELEtBRk07O0FBS0EsSUFBQSxLQUFBLENBQUEsNEJBQUEsR0FBK0IsVUFBQyxFQUFELEVBSXJDO1VBSEMsRUFBQSxHQUFBLEVBQUEsQ0FBQSxTO1VBQUEsU0FBQSxHQUFBLEVBQUEsS0FBQSxLQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLFNBQUEsR0FBQSxFO0FBSVEsVUFBQSxTQUFBLEdBQUEsS0FBQSxDQUFBLFNBQUE7QUFFUixVQUFJLGdCQUFnQixHQUFHLElBQXZCO0FBQ0EsVUFBSSxlQUFlLEdBQUcsS0FBdEI7O0FBQ0EsVUFBSSxTQUFKLEVBQWU7QUFDYixZQUFNLFlBQVksR0FBRyxLQUFJLENBQUMsZUFBTCxDQUFxQjtBQUFFLFVBQUEsTUFBTSxFQUFFO0FBQVYsU0FBckIsQ0FBckI7O0FBQ0EsUUFBQSxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsUUFBYixDQUFzQixTQUFTLENBQUMsQ0FBRCxDQUEvQixDQUFuQjtBQUNBLFFBQUEsZUFBZSxHQUFHLFlBQVksQ0FBQyxRQUFiLENBQXNCLFNBQVMsQ0FBQyxLQUFWLENBQWdCLENBQUMsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBdEIsQ0FBbEI7QUFDRDs7QUFFRCxhQUFPO0FBQUUsUUFBQSxnQkFBZ0IsRUFBQSxnQkFBbEI7QUFBb0IsUUFBQSxlQUFlLEVBQUE7QUFBbkMsT0FBUDtBQUNELEtBaEJNOztBQW1CQSxJQUFBLEtBQUEsQ0FBQSwwQkFBQSxHQUE2QixZQUFBO0FBQzVCLFVBQUEsRUFBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBO0FBQUEsVUFDSixtQkFBQSxHQUFBLEVBQUEsQ0FBQSxnQkFESTtBQUFBLFVBRUosa0JBQUEsR0FBQSxFQUFBLENBQUEsZUFGSTs7QUFJQSxVQUFBLEVBQUEsR0FBQSxLQUFBLENBQUEsNEJBQUEsQ0FBQSxFQUFBLENBQUE7QUFBQSxVQUNKLGdCQUFBLEdBQUEsRUFBQSxDQUFBLGdCQURJO0FBQUEsVUFFSixlQUFBLEdBQUEsRUFBQSxDQUFBLGVBRkk7O0FBSU4sVUFDRSxtQkFBbUIsS0FBSyxnQkFBeEIsSUFDQSxrQkFBa0IsS0FBSyxlQUZ6QixFQUdFO0FBQ0EsWUFBTSxnQkFBZ0IsR0FBRyxDQUFDLGdCQUExQjtBQUNBLFlBQU0saUJBQWlCLEdBQUcsQ0FBQyxlQUEzQjs7QUFDQSxRQUFBLEtBQUksQ0FBQyxRQUFMLENBQWM7QUFDWixVQUFBLGdCQUFnQixFQUFBLGdCQURKO0FBRVosVUFBQSxlQUFlLEVBQUEsZUFGSDtBQUdaLFVBQUEsZ0JBQWdCLEVBQUEsZ0JBSEo7QUFJWixVQUFBLGlCQUFpQixFQUFBO0FBSkwsU0FBZDtBQU1EO0FBQ0YsS0F0Qk07O0FBd0JBLElBQUEsS0FBQSxDQUFBLE1BQUEsR0FBUyxZQUFBO0FBQ2QsTUFBQSxLQUFJLENBQUMsVUFBTDs7QUFDQSxNQUFBLEtBQUksQ0FBQyxPQUFMLEdBQWUsSUFBZjtBQUNELEtBSE07O0FBTUEsSUFBQSxLQUFBLENBQUEsYUFBQSxHQUFnQixZQUFBO0FBQ2IsVUFBQSxhQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxhQUFBOztBQUNSLFVBQUksQ0FBQyxhQUFMLEVBQW9CO0FBQ2xCLGVBQU8sS0FBUDtBQUNEOztBQUVELE1BQUEsWUFBWSxDQUFDLEtBQUksQ0FBQyxXQUFOLENBQVo7QUFDQSxNQUFBLEtBQUksQ0FBQyxXQUFMLEdBQW1CLFVBQVUsQ0FBQyxZQUFBO0FBQU0sZUFBQSxLQUFJLENBQUosTUFBQSxFQUFBO0FBQWEsT0FBcEIsRUFBc0IsR0FBdEIsQ0FBN0I7QUFDRCxLQVJNOztBQVdBLElBQUEsS0FBQSxDQUFBLE1BQUEsR0FBUyxZQUFBO0FBQ04sVUFBQSxXQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxXQUFBOztBQUNSLE1BQUEsS0FBSSxDQUFDLFdBQUwsQ0FBaUIsRUFBakI7O0FBQ0EsVUFBTSxZQUFZLEdBQUcsS0FBSSxDQUFDLGVBQUwsQ0FBcUIsRUFBckIsQ0FBckI7O0FBRUEsVUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLHNCQUFMLENBQTRCO0FBQ3pDLFFBQUEsS0FBSyxFQUFHLFlBQVksQ0FBQyxDQUFELENBQVosSUFBbUIsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQixDQUFoQixFQUFtQixLQUF2QyxJQUFpRDtBQURmLE9BQTVCLENBQWY7O0FBR0EsVUFBTSxLQUFLLEdBQUcsV0FBVyxHQUNyQixLQUFJLENBQUMsZUFBTCxDQUFxQjtBQUFFLFFBQUEsS0FBSyxFQUFFO0FBQVQsT0FBckIsQ0FEcUIsR0FFckIsQ0FGSjs7QUFHQSxNQUFBLEtBQUksQ0FBQyxRQUFMLENBQWM7QUFBRSxRQUFBLFNBQVMsRUFBRSxDQUFDLE1BQUQsR0FBVTtBQUF2QixPQUFkO0FBQ0QsS0FaTTs7QUFlQSxJQUFBLEtBQUEsQ0FBQSxVQUFBLEdBQWEsWUFBQTtBQUNaLFVBQUEsRUFBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBO0FBQUEsVUFDSixRQUFBLEdBQUEsRUFBQSxDQUFBLFFBREk7QUFBQSxVQUVKLElBQUEsR0FBQSxFQUFBLENBQUEsSUFGSTtBQUFBLFVBR0osYUFBQSxHQUFBLEVBQUEsQ0FBQSxTQUhJO0FBQUEsVUFJSixnQkFBQSxHQUFBLEVBQUEsQ0FBQSxnQkFKSTtBQUFBLFVBS0osV0FBQSxHQUFBLEVBQUEsQ0FBQSxXQUxJO0FBT0UsVUFBQSxjQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxTQUFBOztBQUNSLFVBQUksQ0FBQyxJQUFELElBQVMsQ0FBQyxJQUFJLENBQUMsTUFBbkIsRUFBMkI7QUFDekIsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFMLENBQWUsTUFBaEIsSUFBMEIsSUFBSSxLQUFLLEtBQUksQ0FBQyxJQUE1QyxFQUFrRDtBQUNoRCxRQUFBLEtBQUksQ0FBQyxTQUFMLEdBQWlCLEtBQUksQ0FBQyxZQUFMLEVBQWpCO0FBQ0EsUUFBQSxLQUFJLENBQUMsSUFBTCxHQUFZLElBQVo7QUFDRDs7QUFHRCxNQUFBLEtBQUksQ0FBQyxXQUFMLENBQWlCLEVBQWpCOztBQUVBLFVBQU0sUUFBUSxHQUFBLFFBQUEsQ0FBQSxFQUFBLEVBQVEsS0FBSSxDQUFDLEtBQWIsQ0FBZDs7QUFHQSxVQUFNLDZCQUE2QixHQUNqQyxDQUFDLEtBQUksQ0FBQyxPQUFOLElBQWlCLGFBQWEsS0FBSyxnQkFBQSxDQUFBLFlBQUEsQ0FBYSxTQURsRDs7QUFFQSxVQUNFLDZCQUE2QixJQUM1QixDQUFDLE9BQUEsQ0FBQSxnQkFBQSxDQUFpQixhQUFqQixDQUFELElBQW9DLENBQUMsT0FBQSxDQUFBLGdCQUFBLENBQWlCLGNBQWpCLENBRnhDLEVBR0U7QUFDQSxRQUFBLFFBQVEsQ0FBQyxTQUFULEdBQXFCLFdBQVcsR0FDNUIsS0FBSSxDQUFDLGVBRHVCLEdBRTVCLGdCQUFBLENBQUEsWUFBQSxDQUFhLFNBRmpCO0FBR0Q7O0FBR0ssVUFBQSxFQUFBLEdBQUEsS0FBQSxDQUFBLDRCQUFBLENBQUE7QUFBQSxRQUFBLFNBQUEsRUFBQTtBQUFBLE9BQUEsQ0FBQTtBQUFBLFVBQ0osZ0JBQUEsR0FBQSxFQUFBLENBQUEsZ0JBREk7QUFBQSxVQUVKLGVBQUEsR0FBQSxFQUFBLENBQUEsZUFGSTs7QUFJTixNQUFBLFFBQVEsQ0FBQyxnQkFBVCxHQUE0QixnQkFBNUI7QUFDQSxNQUFBLFFBQVEsQ0FBQyxlQUFULEdBQTJCLGVBQTNCO0FBQ0EsTUFBQSxRQUFRLENBQUMsZ0JBQVQsR0FBNEIsQ0FBQyxnQkFBN0I7QUFDQSxNQUFBLFFBQVEsQ0FBQyxpQkFBVCxHQUE2QixDQUFDLGVBQTlCOztBQUdBLFVBQUksZ0JBQUosRUFBc0I7QUFDcEIsWUFBTSxVQUFVLEdBQUcsS0FBSSxDQUFDLGNBQUwsQ0FBb0I7QUFDckMsVUFBQSxNQUFNLEVBQUUsUUFENkI7QUFFckMsVUFBQSxTQUFTLEVBQUUsUUFBUSxDQUFDO0FBRmlCLFNBQXBCLENBQW5COztBQUlBLFlBQUksVUFBSixFQUFnQjtBQUNkLFVBQUEsUUFBUSxDQUFDLFNBQVQsR0FBcUIsS0FBSSxDQUFDLG9CQUFMLENBQTBCLFFBQTFCLENBQXJCO0FBQ0Q7QUFDRjs7QUFFRCxNQUFBLEtBQUksQ0FBQyxRQUFMLENBQWEsUUFBQSxDQUFBLEVBQUEsRUFBTSxRQUFOLENBQWI7QUFDRCxLQXpETTs7QUE0REEsSUFBQSxLQUFBLENBQUEsY0FBQSxHQUFpQixVQUFDLEVBQUQsRUFNdkI7VUFMQyxNQUFBLEdBQUEsRUFBQSxDQUFBLE07VUFDQSxFQUFBLEdBQUEsRUFBQSxDQUFBLFM7VUFBQSxTQUFBLEdBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsU0FBQSxHQUFBLEU7O0FBS0EsVUFBTSxJQUFJLEdBQUcsS0FBSSxDQUFDLFlBQUwsQ0FBa0IsTUFBbEIsQ0FBYjs7QUFFQSxVQUFNLFlBQVksR0FBRyxLQUFJLENBQUMsZUFBTCxDQUFxQjtBQUN4QyxRQUFBLE1BQU0sRUFBRTtBQURnQyxPQUFyQixDQUFyQjs7QUFHQSxhQUFPLENBQUMsWUFBWSxDQUFDLFFBQWIsQ0FBc0IsSUFBdEIsQ0FBUjtBQUNELEtBYk07O0FBZ0JBLElBQUEsS0FBQSxDQUFBLFFBQUEsR0FBVyxVQUFDLE9BQUQsRUFBZ0I7QUFDeEIsVUFBQSxTQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxTQUFBOztBQUNSLFVBQU0sWUFBWSxHQUFHLEtBQUksQ0FBQyxvQkFBTCxDQUEwQixPQUExQixDQUFyQjs7QUFDQSxNQUFBLEtBQUksQ0FBQyxRQUFMLEdBQWdCLE9BQWhCOztBQUNBLFVBQUksU0FBUyxLQUFLLFlBQWxCLEVBQWdDO0FBQzlCLGVBQU8sS0FBUDtBQUNEOztBQUVELE1BQUEsS0FBSSxDQUFDLFFBQUwsQ0FBYztBQUFFLFFBQUEsU0FBUyxFQUFFO0FBQWIsT0FBZDtBQUNELEtBVE07O0FBWUEsSUFBQSxLQUFBLENBQUEsWUFBQSxHQUFlLFlBQUE7QUFDcEIsYUFBQSxNQUFNLENBQUMsT0FBUCxDQUFlLEtBQUksQ0FBQyxHQUFwQixFQUF5QixLQUF6QixDQUErQixDQUEvQixFQUFrQyxLQUFJLENBQUMsS0FBTCxDQUFXLElBQVgsQ0FBZ0IsTUFBaEIsSUFBMEIsQ0FBNUQsQ0FBQTtBQUE4RCxLQUR6RDs7QUFJQSxJQUFBLEtBQUEsQ0FBQSxhQUFBLEdBQWdCLFVBQUMsRUFBRCxFQUl0QjtVQUhDLEVBQUEsR0FBQSxFQUFBLENBQUEsSztVQUFBLEtBQUEsR0FBQSxFQUFBLEtBQUEsS0FBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLFNBQUEsR0FBQSxFO0FBSUEsYUFBTyxLQUFLLENBQ1QsR0FESSxDQUNBLFVBQUEsRUFBQSxFQUFFO0FBQUksZUFBQSxFQUFFLENBQUMsQ0FBRCxDQUFGLENBQUEsSUFBQTtBQUFVLE9BRGhCLEVBRUosTUFGSSxDQUVHLE9BRkgsRUFHSixNQUhJLENBR0csVUFBQyxHQUFELEVBQU0sRUFBTixFQUFRO0FBQUssZUFBQyxHQUFHLElBQUksT0FBQSxDQUFBLGFBQUEsQ0FBYyxFQUFkLEVBQVIsS0FBQTtBQUFnQyxPQUhoRCxFQUdrRCxDQUhsRCxDQUFQO0FBSUQsS0FUTTs7QUFZQSxJQUFBLEtBQUEsQ0FBQSxRQUFBLEdBQVcsVUFBQyxFQUFELEVBSWpCO1VBSEMsS0FBQSxHQUFBLEVBQUEsQ0FBQSxLO0FBU0EsVUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxVQUFoQzs7QUFDTSxVQUFBLEVBQUEsR0FBQSxPQUFBLENBQUEsYUFBQSxDQUFBLEtBQUEsQ0FBQSxXQUFBLENBQUE7QUFBQSxVQUFFLE9BQUEsR0FBQSxFQUFBLENBQUEsQ0FBRjtBQUFBLFVBQWMsU0FBQSxHQUFBLEVBQUEsQ0FBQSxLQUFkOztBQUNOLFVBQU0sYUFBYSxHQUFHLEtBQUksQ0FBQyxhQUFMLENBQW1CO0FBQUUsUUFBQSxLQUFLLEVBQUE7QUFBUCxPQUFuQixDQUF0Qjs7QUFDQSxhQUFPO0FBQUUsUUFBQSxNQUFNLEVBQUEsTUFBUjtBQUFVLFFBQUEsT0FBTyxFQUFBLE9BQWpCO0FBQW1CLFFBQUEsU0FBUyxFQUFBLFNBQTVCO0FBQThCLFFBQUEsYUFBYSxFQUFBO0FBQTNDLE9BQVA7QUFDRCxLQWRNOztBQWlCQSxJQUFBLEtBQUEsQ0FBQSxXQUFBLEdBQWMsVUFBQyxFQUFELEVBSXBCO1VBSEMsRUFBQSxHQUFBLEVBQUEsQ0FBQSxLO1VBQUEsS0FBQSxHQUFBLEVBQUEsS0FBQSxLQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsU0FBQSxHQUFBLEU7O0FBSU0sVUFBQSxFQUFBLEdBQUEsS0FBQSxDQUFBLFFBQUEsQ0FBQTs7QUFBQSxPQUFBLENBQUE7QUFBQSxVQUFFLE1BQUEsR0FBQSxFQUFBLENBQUEsTUFBRjtBQUFBLFVBQVUsT0FBQSxHQUFBLEVBQUEsQ0FBQSxPQUFWO0FBQUEsVUFBbUIsU0FBQSxHQUFBLEVBQUEsQ0FBQSxTQUFuQjtBQUFBLFVBQThCLGFBQUEsR0FBQSxFQUFBLENBQUEsYUFBOUI7O0FBR0EsVUFBQSxFQUFBLEdBQUEsS0FBQSxDQUFBLGVBQUEsQ0FBQTtvQ0FBQTtvQkFBQTt3QkFBQTs0QkFBQTs7QUFBQSxPQUFBLENBQUE7QUFBQSxVQUFFLGVBQUEsR0FBQSxFQUFBLENBQUEsZUFBRjtBQUFBLFVBQW1CLGNBQUEsR0FBQSxFQUFBLENBQUEsY0FBbkI7O0FBT04sTUFBQSxLQUFJLENBQUMsT0FBTCxHQUFlLE9BQWY7QUFDQSxNQUFBLEtBQUksQ0FBQyxNQUFMLEdBQWMsTUFBZDtBQUNBLE1BQUEsS0FBSSxDQUFDLGFBQUwsR0FBcUIsYUFBckI7QUFDQSxNQUFBLEtBQUksQ0FBQyxTQUFMLEdBQWlCLFNBQWpCO0FBQ0EsTUFBQSxLQUFJLENBQUMsZUFBTCxHQUF1QixlQUF2QjtBQUNBLE1BQUEsS0FBSSxDQUFDLGNBQUwsR0FBc0IsY0FBdEI7QUFDRCxLQXJCTTs7QUF3QkEsSUFBQSxLQUFBLENBQUEsa0JBQUEsR0FBcUIsVUFBQyxFQUFELEVBVTNCO1VBVEMsRUFBQSxHQUFBLEVBQUEsQ0FBQSxLO1VBQUEsS0FBQSxHQUFBLEVBQUEsS0FBQSxLQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsU0FBQSxHQUFBLEU7VUFDQSxFQUFBLEdBQUEsRUFBQSxDQUFBLE07VUFBQSxNQUFBLEdBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsU0FBQSxHQUFBLEU7VUFDQSxFQUFBLEdBQUEsRUFBQSxDQUFBLFM7VUFBQSxTQUFBLEdBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxTQUFBLEdBQUEsRTs7QUFRQSxVQUFNLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxlQUFMLENBQXFCO0FBQzdDLFFBQUEsS0FBSyxFQUFBLEtBRHdDO0FBRTdDLFFBQUEsU0FBUyxFQUFBLFNBRm9DO0FBRzdDLFFBQUEsTUFBTSxFQUFBO0FBSHVDLE9BQXJCLENBQTFCOztBQUtBLFVBQU0sZUFBZSxHQUFHLEtBQUksQ0FBQyxlQUFMLENBQXFCO0FBQzNDLFFBQUEsS0FBSyxFQUFFLGlCQURvQztBQUUzQyxRQUFBLFNBQVMsRUFBQTtBQUZrQyxPQUFyQixDQUF4Qjs7QUFJQSxhQUFPLGVBQVA7QUFDRCxLQXJCTTs7QUF3QkEsSUFBQSxLQUFBLENBQUEsaUJBQUEsR0FBb0IsVUFBQyxFQUFELEVBWTFCO1VBWEMsRUFBQSxHQUFBLEVBQUEsQ0FBQSxLO1VBQUEsS0FBQSxHQUFBLEVBQUEsS0FBQSxLQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsU0FBQSxHQUFBLEU7VUFDQSxFQUFBLEdBQUEsRUFBQSxDQUFBLGE7VUFBQSxhQUFBLEdBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxhQUFBLEdBQUEsRTtVQUNBLEVBQUEsR0FBQSxFQUFBLENBQUEsTTtVQUFBLE1BQUEsR0FBQSxFQUFBLEtBQUEsS0FBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLE1BQUEsR0FBQSxFO1VBQ0EsRUFBQSxHQUFBLEVBQUEsQ0FBQSxPO1VBQUEsT0FBQSxHQUFBLEVBQUEsS0FBQSxLQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsT0FBQSxHQUFBLEU7VUFDQSxFQUFBLEdBQUEsRUFBQSxDQUFBLFM7VUFBQSxTQUFBLEdBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxTQUFBLEdBQUEsRTs7QUFRQSxVQUFNLGVBQWUsR0FBRyxLQUFJLENBQUMsZUFBTCxDQUFxQjtBQUMzQyxRQUFBLEtBQUssRUFBQSxLQURzQztBQUUzQyxRQUFBLFNBQVMsRUFBQSxTQUZrQztBQUczQyxRQUFBLE1BQU0sRUFBRSxDQUFDLGFBQUQsR0FBaUI7QUFIa0IsT0FBckIsQ0FBeEI7O0FBS0EsVUFBTSxjQUFjLEdBQUcsS0FBSSxDQUFDLGVBQUwsQ0FBcUI7QUFDMUMsUUFBQSxLQUFLLEVBQUUsZUFEbUM7QUFFMUMsUUFBQSxTQUFTLEVBQUE7QUFGaUMsT0FBckIsQ0FBdkI7O0FBSUEsYUFBTyxjQUFQO0FBQ0QsS0F2Qk07O0FBMEJBLElBQUEsS0FBQSxDQUFBLGVBQUEsR0FBa0IsVUFBQyxFQUFELEVBT3hCO1VBTkMsRUFBQSxHQUFBLEVBQUEsQ0FBQSxLO1VBQUEsS0FBQSxHQUFBLEVBQUEsS0FBQSxLQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsU0FBQSxHQUFBLEU7VUFDQSxFQUFBLEdBQUEsRUFBQSxDQUFBLGE7VUFBQSxhQUFBLEdBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxhQUFBLEdBQUEsRTtVQUNBLEVBQUEsR0FBQSxFQUFBLENBQUEsTTtVQUFBLE1BQUEsR0FBQSxFQUFBLEtBQUEsS0FBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLE1BQUEsR0FBQSxFO1VBQ0EsRUFBQSxHQUFBLEVBQUEsQ0FBQSxPO1VBQUEsT0FBQSxHQUFBLEVBQUEsS0FBQSxLQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsT0FBQSxHQUFBLEU7VUFDQSxFQUFBLEdBQUEsRUFBQSxDQUFBLFM7VUFBQSxTQUFBLEdBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxTQUFBLEdBQUEsRTtVQUNBLEVBQUEsR0FBQSxFQUFBLENBQUEsTTtVQUFBLE1BQUEsR0FBQSxFQUFBLEtBQUEsS0FBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxTQUFBLEdBQUEsRTs7QUFLQSxVQUFNLGVBQWUsR0FBRyxLQUFJLENBQUMsa0JBQUwsQ0FBd0I7QUFDOUMsUUFBQSxLQUFLLEVBQUEsS0FEeUM7QUFFOUMsUUFBQSxPQUFPLEVBQUEsT0FGdUM7QUFHOUMsUUFBQSxTQUFTLEVBQUEsU0FIcUM7QUFJOUMsUUFBQSxNQUFNLEVBQUEsTUFKd0M7QUFLOUMsUUFBQSxNQUFNLEVBQUE7QUFMd0MsT0FBeEIsQ0FBeEI7O0FBT0EsVUFBTSxjQUFjLEdBQUcsS0FBSSxDQUFDLGlCQUFMLENBQXVCO0FBQzVDLFFBQUEsYUFBYSxFQUFBLGFBRCtCO0FBRTVDLFFBQUEsS0FBSyxFQUFBLEtBRnVDO0FBRzVDLFFBQUEsT0FBTyxFQUFBLE9BSHFDO0FBSTVDLFFBQUEsU0FBUyxFQUFBLFNBSm1DO0FBSzVDLFFBQUEsTUFBTSxFQUFBO0FBTHNDLE9BQXZCLENBQXZCOztBQVFBLGFBQU87QUFDTCxRQUFBLGVBQWUsRUFBQSxlQURWO0FBRUwsUUFBQSxjQUFjLEVBQUE7QUFGVCxPQUFQO0FBSUQsS0E5Qk07O0FBaUNBLElBQUEsS0FBQSxDQUFBLFdBQUEsR0FBYyxVQUFDLEVBQUQsRUFBVztBQUN4QixVQUFBLEVBQUEsR0FBQSxLQUFBLENBQUEsS0FBQTtBQUFBLFVBQUUsYUFBQSxHQUFBLEVBQUEsQ0FBQSxhQUFGO0FBQUEsVUFBaUIsUUFBQSxHQUFBLEVBQUEsQ0FBQSxRQUFqQjtBQUNFLFVBQUEsZ0JBQUEsR0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLGdCQUFBO0FBRVIsVUFBTSxXQUFXLEdBQUcsZ0JBQWdCLEdBQUcsQ0FBdkM7O0FBRUEsVUFBSSxXQUFXLElBQUksQ0FBQyxhQUFwQixFQUFtQztBQUNqQyxlQUFPLEtBQVA7QUFDRDs7QUFFRCxNQUFBLEtBQUksQ0FBQyxRQUFMLEdBQWdCLEVBQWhCOztBQUNBLFVBQUksUUFBSixFQUFjO0FBQ1osUUFBQSxRQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0Q7QUFDRixLQWRNOztBQWlCQSxJQUFBLEtBQUEsQ0FBQSxlQUFBLEdBQWtCLFVBQUMsRUFBRCxFQUt4QjtVQUpDLEVBQUEsR0FBQSxFQUFBLENBQUEsSztVQUFBLEtBQUEsR0FBQSxFQUFBLEtBQUEsS0FBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLFNBQUEsR0FBQSxFO1VBQ0EsRUFBQSxHQUFBLEVBQUEsQ0FBQSxTO1VBQUEsU0FBQSxHQUFBLEVBQUEsS0FBQSxLQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsU0FBQSxHQUFBLEU7VUFDQSxFQUFBLEdBQUEsRUFBQSxDQUFBLE07VUFBQSxNQUFBLEdBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsU0FBQSxHQUFBLEU7VUFDQSxFQUFBLEdBQUEsRUFBQSxDQUFBLFM7VUFBQSxTQUFBLEdBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsU0FBQSxJQUFBLGdCQUFBLENBQUEsWUFBQSxDQUFBLFNBQUEsR0FBQSxFO0FBRUEsYUFBTyxLQUFLLENBQUMsTUFBTixDQUFhLFVBQUEsRUFBQSxFQUFFO0FBQ1osWUFBQSxPQUFBLEdBQUEsT0FBQSxDQUFBLGFBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxFQUFBLEtBQUE7O0FBQ1IsWUFBTSxFQUFFLEdBQUcsS0FBSSxDQUFDLFVBQUwsQ0FBZ0IsS0FBaEIsRUFBdUIsRUFBdkIsQ0FBWDs7QUFDQSxZQUFNLENBQUMsR0FBRyxLQUFJLENBQUMsc0JBQUwsQ0FBNEI7QUFDcEMsVUFBQSxLQUFLLEVBQUUsRUFENkI7QUFFcEMsVUFBQSxTQUFTLEVBQUUsS0FGeUI7QUFHcEMsVUFBQSxTQUFTLEVBQUE7QUFIMkIsU0FBNUIsQ0FBVjs7QUFNQSxlQUFPLEtBQUksQ0FBQyxXQUFMLENBQWlCO0FBQ3RCLFVBQUEsT0FBTyxFQUFBLE9BRGU7QUFFdEIsVUFBQSxTQUFTLEVBQUEsU0FGYTtBQUd0QixVQUFBLE1BQU0sRUFBQSxNQUhnQjtBQUl0QixVQUFBLENBQUMsRUFBQTtBQUpxQixTQUFqQixDQUFQO0FBTUQsT0FmTSxDQUFQO0FBZ0JELEtBdEJNOztBQXlCQSxJQUFBLEtBQUEsQ0FBQSxXQUFBLEdBQWMsVUFBQyxFQUFELEVBVXBCO1VBVEMsQ0FBQSxHQUFBLEVBQUEsQ0FBQSxDO1VBQ0EsRUFBQSxHQUFBLEVBQUEsQ0FBQSxNO1VBQUEsTUFBQSxHQUFBLEVBQUEsS0FBQSxLQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsRTtVQUNBLE9BQUEsR0FBQSxFQUFBLENBQUEsTztVQUNBLEVBQUEsR0FBQSxFQUFBLENBQUEsUztVQUFBLFNBQUEsR0FBQSxFQUFBLEtBQUEsS0FBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLFNBQUEsR0FBQSxFO0FBT0EsVUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFsQjtBQUNBLFVBQU0sU0FBUyxHQUFHLFNBQVMsR0FBRyxDQUE5QjtBQUNBLFVBQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxNQUFoQjtBQUNBLFVBQU0sWUFBWSxHQUFHLEdBQUcsR0FBRyxPQUEzQjtBQUNBLGFBQU8sR0FBRyxJQUFJLFFBQVAsSUFBbUIsWUFBWSxJQUFJLFNBQTFDO0FBQ0QsS0FoQk07O0FBbUJBLElBQUEsS0FBQSxDQUFBLFVBQUEsR0FBYSxVQUNsQixTQURrQixFQUVsQixJQUZrQixFQUVKO0FBRGQsVUFBQSxTQUFBLEtBQUEsS0FBQSxDQUFBLEVBQUE7QUFBQSxRQUFBLFNBQUEsR0FBdUIsS0FBSSxDQUFDLFNBQTVCO0FBQXFDOztBQUdyQyxVQUFJLENBQUMsU0FBRCxJQUFjLENBQUMsSUFBbkIsRUFBeUI7QUFDdkIsZUFBTyxDQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxTQUFTLENBQUMsU0FBVixDQUFvQixVQUFBLEVBQUEsRUFBRTtBQUFJLGVBQUEsRUFBRSxDQUFDLENBQUQsQ0FBRixLQUFVLElBQUksQ0FBZCxDQUFjLENBQWQ7QUFBaUIsT0FBM0MsQ0FBUDtBQUNELEtBUk07O0FBV0EsSUFBQSxLQUFBLENBQUEsY0FBQSxHQUFpQixVQUFDLElBQUQsRUFBZ0IsWUFBaEIsRUFBdUM7QUFDckQsVUFBQSxTQUFBLEdBQUEsS0FBQSxDQUFBLFNBQUE7O0FBQ1IsVUFBSSxJQUFKLEVBQVU7QUFDUixZQUFJLENBQUMsWUFBWSxDQUFDLE1BQWxCLEVBQTBCO0FBQ3hCLGlCQUFPLENBQVA7QUFDRDtBQUNGLE9BSkQsTUFJTztBQUNMLFlBQUksQ0FBQyxZQUFZLENBQUMsTUFBbEIsRUFBMEI7QUFDeEIsaUJBQU8sU0FBUyxDQUFDLE1BQWpCO0FBQ0Q7QUFDRjs7QUFDRCxVQUFNLEdBQUcsR0FBRyxJQUFJLEdBQ1osS0FBSSxDQUFDLFVBQUwsQ0FBZ0IsU0FBaEIsRUFBMkIsWUFBWSxDQUFDLENBQUQsQ0FBdkMsSUFBOEMsQ0FEbEMsR0FFWixLQUFJLENBQUMsVUFBTCxDQUFnQixTQUFoQixFQUEyQixZQUFZLENBQUMsS0FBYixDQUFtQixDQUFDLENBQXBCLEVBQXVCLENBQXZCLENBQTNCLElBQXdELENBRjVEO0FBR0EsYUFBTyxHQUFHLEdBQUcsQ0FBTixHQUFVLENBQVYsR0FBYyxHQUFyQjtBQUNELEtBZk07O0FBa0JBLElBQUEsS0FBQSxDQUFBLG9CQUFBLEdBQXVCLFVBQUMsR0FBRCxFQUFZO0FBQ2xDLFVBQUEsU0FBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsU0FBQTs7QUFFTixVQUFNLFNBQVMsR0FBRyxLQUFJLENBQUMsaUJBQUwsQ0FBdUIsR0FBdkIsQ0FBbEI7O0FBQ0EsVUFBSSxTQUFTLEtBQUssQ0FBQyxDQUFuQixFQUFzQjtBQUNwQixlQUFPLFNBQVA7QUFDRDs7QUFFTyxVQUFBLFdBQUEsR0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLFdBQUE7QUFFUixNQUFBLFNBQVMsR0FBRyxLQUFJLENBQUMsc0JBQUwsQ0FBNEI7QUFBRSxRQUFBLEtBQUssRUFBRTtBQUFULE9BQTVCLENBQVo7O0FBRUEsVUFBTSw0QkFBNEIsR0FBRyxLQUFJLENBQUMsZUFBTCxDQUFxQjtBQUN4RCxRQUFBLE1BQU0sRUFBRSxDQUFDO0FBRCtDLE9BQXJCLENBQXJDOztBQUdBLFVBQU0sTUFBTSxHQUFHLFdBQVcsR0FDdEIsS0FBSSxDQUFDLGVBQUwsQ0FBcUI7QUFBRSxRQUFBLEtBQUssRUFBRTtBQUFULE9BQXJCLENBRHNCLEdBRXRCLGdCQUFBLENBQUEsWUFBQSxDQUFhLFNBRmpCO0FBSUEsTUFBQSxTQUFTLEdBQUcsRUFBRSxTQUFTLEdBQUcsTUFBZCxDQUFaOztBQUVBLFVBQUksS0FBSSxDQUFDLGFBQUwsQ0FBbUIsU0FBbkIsQ0FBSixFQUFtQztBQUNqQyxRQUFBLFNBQVMsR0FBRyxLQUFJLENBQUMsZ0JBQUwsRUFBWjtBQUNELE9BRkQsTUFFTyxJQUFJLEtBQUksQ0FBQyxVQUFMLENBQWdCLFNBQWhCLENBQUosRUFBZ0M7QUFDckMsUUFBQSxTQUFTLEdBQUcsS0FBSSxDQUFDLGNBQUwsRUFBWjtBQUNEOztBQUNELGFBQU8sU0FBUDtBQUNELEtBM0JNOztBQThCQSxJQUFBLEtBQUEsQ0FBQSxZQUFBLEdBQWUsVUFBQyxHQUFELEVBQXFCO0FBQ3pDLGFBQ0UsS0FBSSxDQUFDLFNBQUwsQ0FBZSxJQUFmLENBQW9CLFVBQUEsRUFBQSxFQUFFO0FBQUksZUFBQSxFQUFFLENBQUMsQ0FBRCxDQUFGLENBQU0sR0FBTixLQUFBLEdBQUE7QUFBaUIsT0FBM0MsS0FBZ0QsQ0FDOUMsRUFEOEMsRUFFOUM7QUFBRSxRQUFBLEdBQUcsRUFBRSxHQUFQO0FBQVksUUFBQSxJQUFJLEVBQUUsSUFBbEI7QUFBd0IsUUFBQSxLQUFLLEVBQUUsQ0FBQztBQUFoQyxPQUY4QyxDQURsRDtBQU1ELEtBUE07O0FBVUEsSUFBQSxLQUFBLENBQUEsaUJBQUEsR0FBb0IsVUFBQyxPQUFELEVBQWdCO0FBQ3pDLFVBQUksQ0FBQyxPQUFMLEVBQWM7QUFDWixlQUFPLENBQUMsQ0FBUjtBQUNEOztBQUNELGFBQU8sS0FBSSxDQUFDLFNBQUwsQ0FBZSxTQUFmLENBQXlCLFVBQUEsRUFBQSxFQUFFO0FBQUksZUFBQSxFQUFFLENBQUMsQ0FBRCxDQUFGLENBQU0sR0FBTixLQUFBLE9BQUE7QUFBcUIsT0FBcEQsQ0FBUDtBQUNELEtBTE07O0FBUUEsSUFBQSxLQUFBLENBQUEsc0JBQUEsR0FBeUIsVUFBQyxFQUFELEVBUS9CO1VBUEMsS0FBQSxHQUFBLEVBQUEsQ0FBQSxLO1VBQ0EsRUFBQSxHQUFBLEVBQUEsQ0FBQSxTO1VBQUEsU0FBQSxHQUFBLEVBQUEsS0FBQSxLQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsU0FBQSxHQUFBLEU7VUFDQSxFQUFBLEdBQUEsRUFBQSxDQUFBLFM7VUFBQSxTQUFBLEdBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsU0FBQSxHQUFBLEU7O0FBTUEsVUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFmLEVBQXVCO0FBQ3JCLGVBQU8sQ0FBUDtBQUNEOztBQUNELFVBQU0sR0FBRyxHQUFHLEtBQUssSUFBSSxTQUFTLENBQUMsTUFBbkIsR0FBNEIsU0FBUyxDQUFDLE1BQVYsR0FBbUIsQ0FBL0MsR0FBbUQsS0FBL0Q7QUFDUSxVQUFBLENBQUEsR0FBQSxPQUFBLENBQUEsYUFBQSxDQUFBLFNBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLENBQUE7QUFDUixVQUFNLFFBQVEsR0FBRyxDQUFDLENBQUQsR0FBSyxTQUFMLEdBQWlCLEtBQUksQ0FBQyxPQUF2QztBQUNBLGFBQU8sUUFBUDtBQUNELEtBaEJNOztBQW1CQSxJQUFBLEtBQUEsQ0FBQSxvQkFBQSxHQUF1QixVQUM1QixZQUQ0QixFQUU1QixLQUY0QixFQUVLO0FBQWpDLFVBQUEsS0FBQSxLQUFBLEtBQUEsQ0FBQSxFQUFBO0FBQUEsUUFBQSxLQUFBLEdBQW1CLEtBQUksQ0FBQyxTQUF4QjtBQUFpQzs7QUFFekIsVUFBQSxRQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxRQUFBO0FBRVIsVUFBTSxhQUFhLEdBQUcsUUFBUSxHQUMxQixZQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCLENBQWhCLEVBQW1CLEtBQW5CLEdBQTJCLFFBREQsR0FFMUIsS0FBSSxDQUFDLFdBQUwsQ0FDRSxDQUFFLFlBQVksQ0FBQyxLQUFiLENBQW1CLENBQUMsQ0FBcEIsRUFBdUIsQ0FBdkIsS0FBNkIsWUFBWSxDQUFDLEtBQWIsQ0FBbUIsQ0FBQyxDQUFwQixDQUE5QixJQUNDLEtBQUssQ0FBQyxLQUFOLENBQVksQ0FBQyxDQUFiLENBREYsRUFDbUIsQ0FEbkIsRUFDc0IsQ0FEdEIsRUFDeUIsR0FGM0IsRUFHRSxDQUhGLEVBR0ssS0FMVDtBQU9BLFVBQU0sU0FBUyxHQUFHLENBQUMsS0FBSSxDQUFDLHNCQUFMLENBQTRCO0FBQzdDLFFBQUEsS0FBSyxFQUFFLGFBRHNDO0FBRTdDLFFBQUEsU0FBUyxFQUFFO0FBRmtDLE9BQTVCLENBQW5CO0FBSUEsYUFBTyxTQUFQO0FBQ0QsS0FsQk07O0FBcUJBLElBQUEsS0FBQSxDQUFBLG1CQUFBLEdBQXNCLFVBQzNCLFlBRDJCLEVBRTNCLEtBRjJCLEVBRU07QUFBakMsVUFBQSxLQUFBLEtBQUEsS0FBQSxDQUFBLEVBQUE7QUFBQSxRQUFBLEtBQUEsR0FBbUIsS0FBSSxDQUFDLFNBQXhCO0FBQWlDOztBQUV6QixVQUFBLFFBQUEsR0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLFFBQUE7O0FBRVIsVUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLFdBQUwsQ0FDZixDQUFFLFlBQVksQ0FBQyxDQUFELENBQVosSUFBbUIsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQixDQUFoQixDQUFwQixJQUEyQyxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVMsQ0FBVCxDQUE1QyxFQUF5RCxHQUQxQyxDQUFqQjs7QUFHQSxVQUFNLGFBQWEsR0FDakIsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZLEtBQVosSUFBcUIsUUFBUSxHQUFHLFFBQVEsR0FBRyxDQUFkLEdBQWtCLFlBQVksQ0FBQyxNQUE1RCxDQURGO0FBR0EsVUFBTSxTQUFTLEdBQUcsQ0FBQyxLQUFJLENBQUMsc0JBQUwsQ0FBNEI7QUFDN0MsUUFBQSxLQUFLLEVBQUUsYUFBYSxHQUFHLENBQWhCLEdBQW9CLENBQXBCLEdBQXdCLGFBRGM7QUFFN0MsUUFBQSxTQUFTLEVBQUU7QUFGa0MsT0FBNUIsQ0FBbkI7QUFJQSxhQUFPLFNBQVA7QUFDRCxLQWpCTTs7QUFvQkEsSUFBQSxLQUFBLENBQUEsV0FBQSxHQUFjLFVBQUMsR0FBRCxFQUFZO0FBQ3ZCLFVBQUEsU0FBQSxHQUFBLEtBQUEsQ0FBQSxTQUFBO0FBQ1IsVUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVYsQ0FBb0IsVUFBQSxFQUFBLEVBQUU7QUFBSSxlQUFBLEVBQUUsQ0FBQyxDQUFELENBQUYsQ0FBTSxHQUFOLEtBQUEsR0FBQTtBQUFpQixPQUEzQyxDQUFsQjtBQUNBLFVBQU0sYUFBYSxHQUFHLFNBQVMsR0FBRyxDQUFsQztBQUNBLFVBQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxhQUFELENBQVQsSUFBNEIsU0FBUyxDQUFDLEtBQVYsQ0FBZ0IsQ0FBQyxDQUFqQixFQUFvQixDQUFwQixDQUE3QztBQUNBLGFBQU8sUUFBUDtBQUNELEtBTk07O0FBU0EsSUFBQSxLQUFBLENBQUEsV0FBQSxHQUFjLFVBQUMsR0FBRCxFQUFZO0FBQ3ZCLFVBQUEsU0FBQSxHQUFBLEtBQUEsQ0FBQSxTQUFBO0FBQ1IsVUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVYsQ0FBb0IsVUFBQSxFQUFBLEVBQUU7QUFBSSxlQUFBLEVBQUUsQ0FBQyxDQUFELENBQUYsQ0FBTSxHQUFOLEtBQUEsR0FBQTtBQUFpQixPQUEzQyxDQUFsQjtBQUNBLFVBQU0sYUFBYSxHQUFHLFNBQVMsR0FBRyxDQUFsQztBQUNBLFVBQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxhQUFELENBQVQsSUFBNEIsU0FBUyxDQUFDLENBQUQsQ0FBdEQ7QUFDQSxhQUFPLFFBQVA7QUFDRCxLQU5NOztBQVNBLElBQUEsS0FBQSxDQUFBLFNBQUEsR0FBWSxVQUNqQixJQURpQixFQUVqQixLQUZpQixFQUVnQjtBQUFqQyxVQUFBLEtBQUEsS0FBQSxLQUFBLENBQUEsRUFBQTtBQUFBLFFBQUEsS0FBQSxHQUFtQixLQUFJLENBQUMsU0FBeEI7QUFBaUM7O0FBRWpDLFVBQU0sWUFBWSxHQUFHLEtBQUksQ0FBQyxlQUFMLENBQXFCO0FBQUUsUUFBQSxLQUFLLEVBQUE7QUFBUCxPQUFyQixDQUFyQjs7QUFDQSxVQUFNLFNBQVMsR0FBRyxJQUFJLEdBQ2xCLEtBQUksQ0FBQyxtQkFBTCxDQUF5QixZQUF6QixFQUF1QyxLQUF2QyxDQURrQixHQUVsQixLQUFJLENBQUMsb0JBQUwsQ0FBMEIsWUFBMUIsRUFBd0MsS0FBeEMsQ0FGSjtBQUdBLGFBQU8sU0FBUDtBQUNELEtBVE07O0FBY0EsSUFBQSxLQUFBLENBQUEsZUFBQSxHQUFrQixVQUFDLEVBQUQsRUFNeEI7VUFMQyxFQUFBLEdBQUEsRUFBQSxDQUFBLEs7VUFBQSxLQUFBLEdBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxTQUFBLEdBQUEsRTtVQUNBLEVBQUEsR0FBQSxFQUFBLENBQUEsUztVQUFBLFNBQUEsR0FBQSxFQUFBLEtBQUEsS0FBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLFNBQUEsR0FBQSxFOztBQUtBLFVBQUksQ0FBQyxLQUFLLENBQUMsTUFBWCxFQUFtQjtBQUNqQixlQUFPLENBQVA7QUFDRDs7QUFDRCxVQUFNLFVBQVUsR0FBRyxLQUFJLENBQUMsYUFBTCxDQUFtQjtBQUFFLFFBQUEsS0FBSyxFQUFBO0FBQVAsT0FBbkIsQ0FBbkI7O0FBQ0EsVUFBTSxNQUFNLEdBQUcsQ0FBQyxTQUFTLEdBQUcsVUFBYixJQUEyQixDQUExQztBQUNBLGFBQU8sTUFBUDtBQUNELEtBYk07O0FBaUJBLElBQUEsS0FBQSxDQUFBLFdBQUEsR0FBYyxVQUFDLENBQUQsRUFBYztBQUN6QixVQUFBLEtBQUEsR0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLEtBQUE7O0FBQ1IsVUFBSSxDQUFDLEtBQUwsRUFBWTtBQUNWLGVBQU8sS0FBUDtBQUNEOztBQUNELFVBQUksQ0FBQyxDQUFDLE1BQUYsR0FBVyxDQUFmLEVBQWtCO0FBQ2hCLFFBQUEsS0FBSSxDQUFDLGdCQUFMO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsUUFBQSxLQUFJLENBQUMsZ0JBQUwsQ0FBc0IsS0FBdEI7QUFDRDtBQUNGLEtBVk07O0FBYUEsSUFBQSxLQUFBLENBQUEsZ0JBQUEsR0FBbUIsWUFBQTtBQUNoQixVQUFBLGVBQUEsR0FBQSxLQUFBLENBQUEsZUFBQTtBQUNBLFVBQUEsV0FBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsV0FBQTtBQUNSLGFBQU8sV0FBVyxHQUFHLGVBQUgsR0FBcUIsZ0JBQUEsQ0FBQSxZQUFBLENBQWEsU0FBcEQ7QUFDRCxLQUpNOztBQU9BLElBQUEsS0FBQSxDQUFBLGNBQUEsR0FBaUIsWUFBQTtBQUNkLFVBQUEsV0FBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsV0FBQTtBQUNGLFVBQUEsRUFBQSxHQUFBLEtBQUE7QUFBQSxVQUFFLGFBQUEsR0FBQSxFQUFBLENBQUEsYUFBRjtBQUFBLFVBQWlCLFNBQUEsR0FBQSxFQUFBLENBQUEsU0FBakI7QUFBQSxVQUE0QixjQUFBLEdBQUEsRUFBQSxDQUFBLGNBQTVCO0FBQ04sVUFBTSxNQUFNLEdBQUcsYUFBYSxHQUFHLFNBQS9CO0FBQ0EsYUFBTyxXQUFXLEdBQUcsQ0FBQyxNQUFELEdBQVUsY0FBYixHQUE4QixDQUFDLE1BQWpEO0FBQ0QsS0FMTTs7QUFRQSxJQUFBLEtBQUEsQ0FBQSxxQkFBQSxHQUF3QixZQUFBO0FBQzdCLE1BQUEsS0FBSSxDQUFDLGdCQUFMLENBQXNCLEtBQXRCO0FBQ0QsS0FGTTs7QUFLQSxJQUFBLEtBQUEsQ0FBQSxnQkFBQSxHQUFtQixVQUFDLElBQUQsRUFBWTtBQUFYLFVBQUEsSUFBQSxLQUFBLEtBQUEsQ0FBQSxFQUFBO0FBQUEsUUFBQSxJQUFBLEdBQUEsSUFBQTtBQUFXOztBQUM1QixVQUFBLFdBQUEsR0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLFdBQUE7QUFDRixVQUFBLEVBQUEsR0FBQSxLQUFBO0FBQUEsVUFBRSxhQUFBLEdBQUEsRUFBQSxDQUFBLGFBQUY7QUFBQSxVQUFpQixTQUFBLEdBQUEsRUFBQSxDQUFBLFNBQWpCOztBQUVOLFVBQUksQ0FBQyxXQUFELElBQWdCLENBQUMsSUFBakIsSUFBeUIsYUFBYSxHQUFHLFNBQTdDLEVBQXdEO0FBQ3RELGVBQU8sS0FBUDtBQUNEOztBQUNELFVBQUksWUFBWSxHQUFHLENBQW5COztBQUVBLFVBQU0sWUFBWSxHQUFHLEtBQUksQ0FBQyxlQUFMLENBQXFCLEVBQXJCLENBQXJCOztBQUNBLFVBQU0sZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLENBQUQsQ0FBWixJQUFtQixZQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCLENBQWhCLEVBQW1CLEtBQW5CLEtBQTZCLENBQXpFO0FBQ0EsVUFBTSxlQUFlLEdBQ25CLFlBQVksQ0FBQyxLQUFiLENBQW1CLENBQUMsQ0FBcEIsRUFBdUIsQ0FBdkIsS0FDQSxZQUFZLENBQUMsS0FBYixDQUFtQixDQUFDLENBQXBCLEVBQXVCLENBQXZCLEVBQTBCLENBQTFCLEVBQTZCLEtBQTdCLEtBQXVDLEtBQUksQ0FBQyxTQUFMLENBQWUsTUFBZixHQUF3QixDQUZqRTs7QUFJQSxVQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsU0FBTCxDQUFlLElBQWYsQ0FBZjs7QUFFQSxVQUFJLElBQUksS0FBSyxnQkFBZ0IsSUFBSSxLQUFJLENBQUMsYUFBTCxDQUFtQixNQUFuQixDQUF6QixDQUFSLEVBQThEO0FBQzVELFFBQUEsWUFBWSxHQUFHLEtBQUksQ0FBQyxnQkFBTCxFQUFmO0FBQ0QsT0FGRCxNQUVPLElBQUksQ0FBQyxJQUFELEtBQVUsZUFBZSxJQUFJLEtBQUksQ0FBQyxVQUFMLENBQWdCLE1BQWhCLENBQTdCLENBQUosRUFBMkQ7QUFDaEUsUUFBQSxZQUFZLEdBQUcsS0FBSSxDQUFDLGNBQUwsRUFBZjtBQUNELE9BRk0sTUFFQTtBQUVMLFlBQU0sY0FBWSxHQUFHLFNBQWYsY0FBZSxHQUFBO0FBQU0saUJBQUEsS0FBSSxDQUFDLGVBQUwsQ0FBcUI7QUFBRSxZQUFBLE1BQU0sRUFBN0I7QUFBcUIsV0FBckIsQ0FBQTtBQUF3QyxTQUFuRTs7QUFDQSxZQUFNLFlBQVksR0FBRyxXQUFXLEdBQzVCLEtBQUksQ0FBQyxlQUFMLENBQXFCO0FBQUUsVUFBQSxLQUFLLEVBQUUsY0FBWTtBQUFyQixTQUFyQixDQUQ0QixHQUU1QixDQUZKO0FBSUEsUUFBQSxZQUFZLEdBQUcsTUFBTSxHQUFHLFlBQXhCO0FBQ0Q7O0FBRUQsTUFBQSxLQUFJLENBQUMsUUFBTCxDQUFjO0FBQ1osUUFBQSxrQkFBa0IsRUFBRSxDQURSO0FBRVosUUFBQSxTQUFTLEVBQUUsWUFGQztBQUdaLFFBQUEsZ0JBQWdCLEVBQUUsQ0FITjtBQUlaLFFBQUEsTUFBTSxFQUFFLGdCQUFBLENBQUEsWUFBQSxDQUFhO0FBSlQsT0FBZDtBQU1ELEtBckNNOztBQXdDQSxJQUFBLEtBQUEsQ0FBQSxhQUFBLEdBQWdCLFVBQUMsS0FBRCxFQUFjO0FBQzNCLFVBQUEsV0FBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsV0FBQTtBQUNGLFVBQUEsRUFBQSxHQUFBLEtBQUE7QUFBQSxVQUFFLFNBQUEsR0FBQSxFQUFBLENBQUEsU0FBRjtBQUFBLFVBQWEsYUFBQSxHQUFBLEVBQUEsQ0FBQSxhQUFiO0FBQUEsVUFBNEIsZUFBQSxHQUFBLEVBQUEsQ0FBQSxlQUE1Qjs7QUFDTixVQUFJLGFBQWEsR0FBRyxTQUFwQixFQUErQjtBQUM3QixlQUFPLElBQVA7QUFDRDs7QUFDRCxhQUFPLFdBQVcsR0FDZCxLQUFLLEdBQUcsZUFETSxHQUVkLEtBQUssR0FBRyxnQkFBQSxDQUFBLFlBQUEsQ0FBYSxTQUZ6QjtBQUdELEtBVE07O0FBV0EsSUFBQSxLQUFBLENBQUEsVUFBQSxHQUFhLFVBQUMsS0FBRCxFQUFjO0FBQ3hCLFVBQUEsV0FBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsV0FBQTtBQUNGLFVBQUEsRUFBQSxHQUFBLEtBQUE7QUFBQSxVQUFFLFNBQUEsR0FBQSxFQUFBLENBQUEsU0FBRjtBQUFBLFVBQWEsYUFBQSxHQUFBLEVBQUEsQ0FBQSxhQUFiO0FBQUEsVUFBNEIsY0FBQSxHQUFBLEVBQUEsQ0FBQSxjQUE1Qjs7QUFDTixVQUFJLGFBQWEsR0FBRyxTQUFwQixFQUErQjtBQUM3QixlQUFPLElBQVA7QUFDRDs7QUFDRCxhQUFPLFdBQVcsR0FDZCxLQUFLLEdBQUcsZ0JBQUEsQ0FBQSxZQUFBLENBQWEsU0FBckIsSUFDRSxJQUFJLENBQUMsR0FBTCxDQUFTLEtBQVQsSUFBa0IsYUFBYSxHQUFHLFNBQWhCLEdBQTRCLGNBRmxDLEdBR2QsS0FBSyxHQUFHLGdCQUFBLENBQUEsWUFBQSxDQUFhLFNBQXJCLElBQ0UsSUFBSSxDQUFDLEdBQUwsQ0FBUyxLQUFULElBQWtCLGFBQWEsR0FBRyxTQUp4QztBQUtELEtBWE07O0FBY0EsSUFBQSxLQUFBLENBQUEsUUFBQSxHQUFXLFVBQ2hCLEVBRGdCLEVBQytCO0FBRS9DLFVBQUksYUFBYSxFQUFqQixFQUFxQjtBQUNuQixlQUFPLEVBQUUsQ0FBQyxPQUFILENBQVcsQ0FBWCxFQUFjLE9BQXJCO0FBQ0QsT0FGRCxNQUVPLElBQUksYUFBYSxFQUFqQixFQUFxQjtBQUMxQixlQUFPLEVBQUUsQ0FBQyxPQUFWO0FBQ0QsT0FGTSxNQUVBO0FBQ0wsZUFBTyxDQUFQO0FBQ0Q7QUFDRixLQVZNOztBQWFBLElBQUEsS0FBQSxDQUFBLGVBQUEsR0FBa0IsVUFBQyxFQUFELEVBQXdDO0FBRS9ELFVBQUksRUFBRSxJQUFJLGFBQWEsRUFBbkIsSUFBeUIsRUFBRSxDQUFDLE9BQUgsS0FBZSxDQUE1QyxFQUErQztBQUM3QyxlQUFPLEtBQVA7QUFDRDs7QUFDTyxVQUFBLGNBQUEsR0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLFFBQUE7O0FBQ1IsVUFBSSxDQUFDLGNBQUwsRUFBcUI7QUFDbkIsZUFBTyxLQUFQO0FBQ0Q7O0FBQ08sVUFBQSxrQkFBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsU0FBQTtBQUdSLE1BQUEsS0FBSSxDQUFDLFdBQUwsR0FBbUIsQ0FBQztBQUFFLFFBQUEsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFMLEVBQVI7QUFBb0IsUUFBQSxRQUFRLEVBQUU7QUFBOUIsT0FBRCxDQUFuQjs7QUFFQSxNQUFBLEtBQUksQ0FBQyxRQUFMLENBQWM7QUFDWixRQUFBLFFBQVEsRUFBRSxJQURFO0FBRVosUUFBQSxrQkFBa0IsRUFBQSxrQkFGTjtBQUdaLFFBQUEsZ0JBQWdCLEVBQUUsQ0FITjtBQUlaLFFBQUEsTUFBTSxFQUFFO0FBSkksT0FBZDtBQU1ELEtBcEJNOztBQXVCQSxJQUFBLEtBQUEsQ0FBQSxVQUFBLEdBQWEsVUFDbEIsQ0FEa0IsRUFDNEI7QUFFdEMsVUFBQSxjQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxRQUFBO0FBQ0YsVUFBQSxFQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUE7QUFBQSxVQUFFLFNBQUEsR0FBQSxFQUFBLENBQUEsU0FBRjtBQUFBLFVBQWEsUUFBQSxHQUFBLEVBQUEsQ0FBQSxRQUFiO0FBQUEsVUFBdUIsTUFBQSxHQUFBLEVBQUEsQ0FBQSxNQUF2QjtBQUFBLFVBQStCLGdCQUFBLEdBQUEsRUFBQSxDQUFBLGdCQUEvQjs7QUFDTixVQUFJLENBQUMsY0FBRCxJQUFtQixDQUFDLFFBQXhCLEVBQWtDO0FBQ2hDLGVBQU8sS0FBUDtBQUNEOztBQUVELFVBQU0sS0FBSyxHQUFHLEtBQUksQ0FBQyxRQUFMLENBQWMsQ0FBZCxDQUFkOztBQUNBLFVBQU0sSUFBSSxHQUNSLE1BQU0sS0FBSyxnQkFBQSxDQUFBLFlBQUEsQ0FBYSxNQUF4QixHQUFpQyxnQkFBQSxDQUFBLFlBQUEsQ0FBYSxNQUE5QyxHQUF1RCxNQUFNLEdBQUcsS0FEbEU7QUFFQSxVQUFJLE1BQU0sR0FBRyxTQUFTLEdBQUcsSUFBekI7O0FBR0EsVUFBSSxLQUFJLENBQUMsYUFBTCxDQUFtQixNQUFuQixDQUFKLEVBQWdDO0FBQzlCLFFBQUEsTUFBTSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBTCxDQUFTLElBQVQsSUFBaUIsQ0FBbkM7QUFDRCxPQUZELE1BRU8sSUFBSSxLQUFJLENBQUMsVUFBTCxDQUFnQixNQUFoQixDQUFKLEVBQTZCO0FBQ2xDLFFBQUEsTUFBTSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBTCxDQUFTLElBQVQsSUFBaUIsQ0FBbkM7QUFDRDs7QUFFRCxVQUFJLElBQUksS0FBSyxDQUFiLEVBQWdCO0FBQ2QsUUFBQSxLQUFJLENBQUMsV0FBTCxDQUFpQixJQUFqQixDQUFzQjtBQUFFLFVBQUEsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFMLEVBQVI7QUFBb0IsVUFBQSxRQUFRLEVBQUU7QUFBOUIsU0FBdEI7QUFDRDs7QUFFRCxVQUFNLFlBQVksR0FBRyxNQUFyQjs7QUFFQSxNQUFBLEtBQUksQ0FBQyxRQUFMLENBQWM7QUFDWixRQUFBLFNBQVMsRUFBRSxZQURDO0FBRVosUUFBQSxnQkFBZ0IsRUFBRSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsR0FBTCxDQUFTLElBQVQsQ0FGekI7QUFHWixRQUFBLE1BQU0sRUFBRTtBQUhJLE9BQWQ7QUFLRCxLQWhDTTs7QUFtQ0EsSUFBQSxLQUFBLENBQUEsY0FBQSxHQUFpQixVQUN0QixDQURzQixFQUN3QjtBQUV4QyxVQUFBLEVBQUEsR0FBQSxLQUFBO0FBQUEsVUFBRSxhQUFBLEdBQUEsRUFBQSxDQUFBLGFBQUY7QUFBQSxVQUFpQixTQUFBLEdBQUEsRUFBQSxDQUFBLFNBQWpCO0FBQ0YsVUFBQSxFQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUE7QUFBQSxVQUFFLFNBQUEsR0FBQSxFQUFBLENBQUEsU0FBRjtBQUFBLFVBQWEsRUFBQSxHQUFBLEVBQUEsQ0FBQSxNQUFiO0FBQUEsVUFBYSxNQUFBLEdBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBYjtBQUNFLFVBQUEsRUFBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBO0FBQUEsVUFBRSxRQUFBLEdBQUEsRUFBQSxDQUFBLFFBQUY7QUFBQSxVQUFZLGtCQUFBLEdBQUEsRUFBQSxDQUFBLGtCQUFaO0FBQ0EsVUFBQSxFQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUE7QUFBQSxVQUFFLGNBQUEsR0FBQSxFQUFBLENBQUEsUUFBRjtBQUFBLFVBQTRCLFdBQUEsR0FBQSxFQUFBLENBQUEsV0FBNUI7O0FBQ04sVUFBSSxDQUFDLGNBQUQsSUFBbUIsQ0FBQyxRQUF4QixFQUFrQztBQUNoQyxlQUFPLEtBQVA7QUFDRDs7QUFHRCxVQUFJLEtBQUksQ0FBQyxLQUFMLENBQVcsZ0JBQWYsRUFBaUM7QUFDL0IsWUFBTSxhQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUwsRUFBcEI7O0FBQ0EsWUFBTSxhQUFhLEdBQUcsS0FBSSxDQUFDLFdBQUwsQ0FBaUIsTUFBakIsQ0FDcEIsVUFBQSxLQUFBLEVBQUs7QUFBSSxpQkFBQSxhQUFXLEdBQUcsS0FBSyxDQUFDLElBQXBCLEdBQUEsR0FBQTtBQUE4QixTQURuQixDQUF0Qjs7QUFHQSxZQUFJLGFBQWEsQ0FBQyxNQUFkLEdBQXVCLENBQTNCLEVBQThCO0FBQzVCLGNBQU0sS0FBSyxHQUFHLGFBQWEsQ0FBQyxDQUFELENBQTNCO0FBQ0EsY0FBTSxJQUFJLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFkLEdBQXVCLENBQXhCLENBQTFCO0FBQ0EsY0FBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBTCxHQUFnQixLQUFLLENBQUMsUUFBdkIsS0FBb0MsSUFBSSxDQUFDLElBQUwsR0FBWSxLQUFLLENBQUMsSUFBdEQsQ0FBWjtBQUNBLFVBQUEsS0FBSyxJQUFJLEtBQUksQ0FBQyxLQUFMLENBQVcsd0JBQXBCO0FBQ0EsVUFBQSxTQUFTLElBQUksS0FBSyxJQUFJLEtBQUksQ0FBQyxLQUFMLENBQVcsVUFBWCxHQUF3QixJQUE1QixDQUFsQjtBQUNEO0FBQ0Y7O0FBRUQsVUFBSSxZQUFZLEdBQUcsU0FBbkI7O0FBRUEsVUFBSSxLQUFJLENBQUMsYUFBTCxDQUFtQixTQUFuQixDQUFKLEVBQW1DO0FBQ2pDLFFBQUEsWUFBWSxHQUFHLEtBQUksQ0FBQyxnQkFBTCxFQUFmO0FBQ0EsUUFBQSxNQUFNLEdBQUcsZ0JBQUEsQ0FBQSxZQUFBLENBQWEsTUFBdEI7QUFDRCxPQUhELE1BR08sSUFBSSxLQUFJLENBQUMsVUFBTCxDQUFnQixTQUFoQixDQUFKLEVBQWdDO0FBQ3JDLFFBQUEsWUFBWSxHQUFHLEtBQUksQ0FBQyxjQUFMLEVBQWY7QUFDQSxRQUFBLE1BQU0sR0FBRyxnQkFBQSxDQUFBLFlBQUEsQ0FBYSxNQUF0QjtBQUNEOztBQUVELFVBQUksQ0FBQyxXQUFELElBQWdCLGFBQWEsSUFBSSxTQUFyQyxFQUFnRDtBQUM5QyxRQUFBLFlBQVksR0FBRyxnQkFBQSxDQUFBLFlBQUEsQ0FBYSxTQUE1QjtBQUNBLFFBQUEsTUFBTSxHQUFHLGdCQUFBLENBQUEsWUFBQSxDQUFhLE1BQXRCO0FBQ0Q7O0FBRUQsTUFBQSxLQUFJLENBQUMsUUFBTCxDQUNFO0FBQ0UsUUFBQSxRQUFRLEVBQUUsS0FEWjtBQUVFLFFBQUEsU0FBUyxFQUFFLFlBRmI7QUFHRSxRQUFBLE1BQU0sRUFBQTtBQUhSLE9BREYsRUFNRSxZQUFBO0FBQ0UsZUFBQSxLQUFJLENBQUMsUUFBTCxDQUFjO0FBQ1osVUFBQSxTQUFTLEVBQUUsWUFEQztBQUVaLFVBQUEsWUFBWSxFQUFFO0FBRkYsU0FBZCxDQUFBO0FBR0UsT0FWTjtBQVlELEtBckRNOztBQXdEQSxJQUFBLEtBQUEsQ0FBQSxlQUFBLEdBQWtCLFlBQUE7QUFDakIsVUFBQSxFQUFBLEdBQUEsS0FBQTtBQUFBLFVBQ0osYUFBQSxHQUFBLEVBQUEsQ0FBQSxhQURJO0FBQUEsVUFFSixTQUFBLEdBQUEsRUFBQSxDQUFBLFNBRkk7QUFBQSxVQUdLLFVBQUEsR0FBQSxFQUFBLENBQUEsS0FBQSxDQUFBLFVBSEw7QUFLTixVQUFNLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxJQUFJLGFBQWEsSUFBSSxTQUFoQyxDQUFwQjtBQUNBLGFBQU8sQ0FBQyxJQUFSO0FBQ0QsS0FSTTs7QUFXQSxJQUFBLEtBQUEsQ0FBQSxRQUFBLEdBQVcsVUFBQyxFQUFELEVBTWpCO1VBTEMsRUFBQSxHQUFBLEVBQUEsQ0FBQSxTO1VBQUEsU0FBQSxHQUFBLEVBQUEsS0FBQSxLQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLFNBQUEsR0FBQSxFO1VBQ0EsRUFBQSxHQUFBLEVBQUEsQ0FBQSxZO1VBQUEsWUFBQSxHQUFBLEVBQUEsS0FBQSxLQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLFNBQUEsR0FBQSxFO0FBS1EsVUFBQSxRQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxRQUFBO0FBQ0EsVUFBQSxtQkFBQSxHQUFBLEtBQUEsQ0FBQSxtQkFBQTs7QUFDUixVQUFJLFNBQVMsS0FBSyxZQUFkLElBQThCLFNBQVMsS0FBSyxtQkFBaEQsRUFBcUU7QUFDbkUsUUFBQSxLQUFJLENBQUMsbUJBQUwsR0FBMkIsU0FBM0I7O0FBRUEsWUFBSSxPQUFPLFFBQVAsS0FBb0IsVUFBeEIsRUFBb0M7QUFDbEMsVUFBQSxRQUFRLENBQUM7QUFBRSxZQUFBLFNBQVMsRUFBQTtBQUFYLFdBQUQsQ0FBUjtBQUNEO0FBQ0Y7QUFDRixLQWhCTTs7QUE1OUJMLElBQUEsS0FBSSxDQUFDLEdBQUwsR0FBVyxFQUFYO0FBQ0EsSUFBQSxLQUFJLENBQUMsV0FBTCxHQUFtQixJQUFuQjtBQUNBLElBQUEsS0FBSSxDQUFDLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxJQUFBLEtBQUksQ0FBQyxPQUFMLEdBQWUsS0FBZjtBQUNBLElBQUEsS0FBSSxDQUFDLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxJQUFBLEtBQUksQ0FBQyxhQUFMLEdBQXFCLENBQXJCO0FBQ0EsSUFBQSxLQUFJLENBQUMsT0FBTCxHQUFlLENBQWY7QUFDQSxJQUFBLEtBQUksQ0FBQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsSUFBQSxLQUFJLENBQUMsTUFBTCxHQUFjLENBQWQ7QUFDQSxJQUFBLEtBQUksQ0FBQyxlQUFMLEdBQXVCLENBQXZCO0FBQ0EsSUFBQSxLQUFJLENBQUMsY0FBTCxHQUFzQixDQUF0QjtBQUNBLElBQUEsS0FBSSxDQUFDLG1CQUFMLEdBQTJCLENBQTNCO0FBQ0EsSUFBQSxLQUFJLENBQUMsU0FBTCxHQUFpQixFQUFqQjtBQUNBLElBQUEsS0FBSSxDQUFDLFFBQUwsR0FBZ0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFQLENBQU4sSUFBMEIsRUFBMUM7QUFFQSxJQUFBLEtBQUksQ0FBQyxXQUFMLEdBQW1CLENBQW5CO0FBQ0EsSUFBQSxLQUFJLENBQUMsUUFBTCxHQUFnQixDQUFoQjtBQUNBLElBQUEsS0FBSSxDQUFDLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSxJQUFBLEtBQUksQ0FBQyxPQUFMLEdBQWUsQ0FBZjtBQUVBLElBQUEsS0FBSSxDQUFDLElBQUwsR0FBWSxJQUFaO0FBQ0EsSUFBQSxLQUFJLENBQUMsV0FBTCxHQUFtQixFQUFuQjtBQUNBLElBQUEsWUFBWSxDQUFDLEtBQUQsQ0FBWjs7QUFDRDs7QUFjTSxFQUFBLFVBQUEsQ0FBQSxTQUFBLENBQUEsaUJBQUEsR0FBUCxZQUFBO0FBQUEsUUFBQSxLQUFBLEdBQUEsSUFBQTs7QUFDRSxTQUFLLFVBQUw7O0FBRUEsSUFBQSxNQUFNLENBQUMscUJBQVAsR0FDRSxNQUFNLENBQUMscUJBQVAsSUFBaUMsWUFBQTtBQUFNLGFBQUEsS0FBQTtBQUFLLEtBRDlDOztBQUdBLFFBQU0sYUFBYSxHQUFHLE9BQUEsQ0FBQSx1QkFBQSxFQUF0QjtBQUNBLFFBQU0sY0FBYyxHQUFHLGFBQWEsR0FDaEM7QUFBRSxNQUFBLE9BQU8sRUFBRSxJQUFYO0FBQWlCLE1BQUEsT0FBTyxFQUFFO0FBQTFCLEtBRGdDLEdBRWhDLElBRko7QUFHQSxRQUFNLGdCQUFnQixHQUFHLGFBQWEsR0FDbEM7QUFBRSxNQUFBLE9BQU8sRUFBRSxJQUFYO0FBQWlCLE1BQUEsT0FBTyxFQUFFO0FBQTFCLEtBRGtDLEdBRWxDLEtBRko7QUFJQSxJQUFBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxLQUFLLE1BQXJDLEVBQTZDLGdCQUE3QztBQUNBLElBQUEsTUFBTSxDQUFDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLEtBQUssYUFBdkMsRUFBc0QsZ0JBQXREO0FBQ0EsSUFBQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsS0FBSyxVQUE1QyxFQUF3RCxjQUF4RDtBQUNBLElBQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLEtBQUssY0FBMUMsRUFBMEQsY0FBMUQ7QUFHQSxTQUFLLFdBQUwsR0FBbUIsVUFBVSxDQUFDLFlBQUE7QUFBTSxhQUFDLEtBQUksQ0FBQyxNQUFMLElBQWUsS0FBSSxDQUFwQixXQUFnQixFQUFoQjtBQUFtQyxLQUExQyxFQUE0QyxDQUE1QyxDQUE3QjtBQUNELEdBckJNOztBQXVCQSxFQUFBLFVBQUEsQ0FBQSxTQUFBLENBQUEscUJBQUEsR0FBUCxVQUNFLFNBREYsRUFFRSxTQUZGLEVBRXNCO0FBSWQsUUFBQSxFQUFBLEdBQUEsS0FBQSxLQUFBO0FBQUEsUUFDSixTQUFBLEdBQUEsRUFBQSxDQUFBLFNBREk7QUFBQSxRQUVKLFFBQUEsR0FBQSxFQUFBLENBQUEsUUFGSTtBQUFBLFFBR0osZ0JBQUEsR0FBQSxFQUFBLENBQUEsZ0JBSEk7QUFBQSxRQUlKLGVBQUEsR0FBQSxFQUFBLENBQUEsZUFKSTtBQU9KLFFBQUEsWUFBQSxHQUFBLFNBQUEsQ0FBQSxTQUFBO0FBQUEsUUFDQSxXQUFBLEdBQUEsU0FBQSxDQUFBLFFBREE7QUFBQSxRQUVBLG1CQUFBLEdBQUEsU0FBQSxDQUFBLGdCQUZBO0FBQUEsUUFHQSxrQkFBQSxHQUFBLFNBQUEsQ0FBQSxlQUhBO0FBTUksUUFBQSxFQUFBLEdBQUEsS0FBQSxLQUFBO0FBQUEsUUFDSixjQUFBLEdBQUEsRUFBQSxDQUFBLFNBREk7QUFBQSxRQUVKLGFBQUEsR0FBQSxFQUFBLENBQUEsUUFGSTtBQUFBLFFBR0osZ0JBQUEsR0FBQSxFQUFBLENBQUEsZ0JBSEk7QUFNSixRQUFBLGlCQUFBLEdBQUEsU0FBQSxDQUFBLFNBQUE7QUFBQSxRQUNBLGdCQUFBLEdBQUEsU0FBQSxDQUFBLFFBREE7QUFJRixRQUFNLHFCQUFxQixHQUFHLE9BQUEsQ0FBQSxjQUFBLENBQWUsaUJBQWYsQ0FBOUI7QUFDQSxRQUFNLGtCQUFrQixHQUFHLFNBQVMsS0FBSyxZQUF6QztBQUNBLFFBQU0sa0JBQWtCLEdBQ3RCLHFCQUFxQixJQUFJLGNBQWMsS0FBSyxpQkFEOUM7QUFFQSxRQUFNLGFBQWEsR0FDakIsaUJBQWlCLEtBQUssWUFBdEIsSUFDQyxrQkFBa0IsSUFBSSxrQkFGekI7QUFJQSxRQUFNLGlCQUFpQixHQUNyQixPQUFBLENBQUEsY0FBQSxDQUFlLGdCQUFmLEtBQW9DLGFBQWEsS0FBSyxnQkFEeEQ7QUFFQSxRQUFNLFlBQVksR0FDaEIsaUJBQWlCLElBQUksS0FBSyxRQUFMLEtBQWtCLGdCQUR6QztBQUdBLFFBQU0sU0FBUyxHQUFHLGFBQWEsSUFBSSxZQUFuQztBQUVBLFFBQU0sb0JBQW9CLEdBQUcsZ0JBQWdCLEtBQUssbUJBQWxEO0FBQ0EsUUFBTSxtQkFBbUIsR0FBRyxlQUFlLEtBQUssa0JBQWhEO0FBRUEsUUFBSSxlQUFlLEdBQUcsWUFBdEI7QUFFQSxRQUFNLFlBQVksR0FDaEIsS0FBSyxLQUFMLENBQVcsSUFBWCxLQUFvQixTQUFTLENBQUMsSUFBOUIsSUFDQSxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLE1BQWhCLEtBQTJCLFNBQVMsQ0FBQyxJQUFWLENBQWUsTUFGNUM7QUFHQSxRQUFNLGlCQUFpQixHQUNyQixPQUFBLENBQUEsZ0JBQUEsQ0FBaUIsaUJBQWpCLEtBQ0Esa0JBREEsSUFFQSxDQUFDLFlBSEg7O0FBS0EsUUFBSSxZQUFZLElBQUssZ0JBQWdCLElBQUksaUJBQXpDLEVBQTZEO0FBQzNELFdBQUssVUFBTCxHQUFrQixJQUFsQjtBQUNEOztBQUVELFFBQUksU0FBSixFQUFlO0FBQ2IsVUFBSSxpQkFBSixFQUF1QjtBQUNyQixhQUFLLFFBQUwsR0FBZ0IsZ0JBQWhCO0FBQ0Q7O0FBRUQsVUFBSSxpQkFBSixFQUF1QjtBQUNyQixRQUFBLGVBQWUsR0FBRyxpQkFBbEI7QUFDRDtBQUNGOztBQUVELFFBQUksaUJBQUosRUFBdUI7QUFDckIsV0FBSyxRQUFMLENBQWM7QUFBRSxRQUFBLFNBQVMsRUFBRSxDQUFDO0FBQWQsT0FBZDtBQUNEOztBQUVELFdBQ0UsWUFBWSxJQUNaLGFBREEsSUFFQSxRQUFRLEtBQUssV0FGYixJQUdBLFNBSEEsSUFJQSxvQkFKQSxJQUtBLG1CQU5GO0FBUUQsR0FuRk07O0FBcUZBLEVBQUEsVUFBQSxDQUFBLFNBQUEsQ0FBQSxrQkFBQSxHQUFQLFVBQTBCLFNBQTFCLEVBQWdELFNBQWhELEVBQW9FO0FBQXBFLFFBQUEsS0FBQSxHQUFBLElBQUE7O0FBRUUsUUFBSSxLQUFLLFVBQVQsRUFBcUI7QUFDbkIsV0FBSyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsV0FBSyxNQUFMO0FBQ0Q7O0FBRU8sUUFBQSxZQUFBLEdBQUEsU0FBQSxDQUFBLFNBQUE7QUFDRixRQUFBLEVBQUEsR0FBQSxLQUFBLEtBQUE7QUFBQSxRQUFFLFNBQUEsR0FBQSxFQUFBLENBQUEsU0FBRjtBQUFBLFFBQWEsUUFBQSxHQUFBLEVBQUEsQ0FBQSxRQUFiOztBQUVOLFFBQUksQ0FBQyxRQUFELElBQWEsWUFBWSxLQUFLLFNBQWxDLEVBQTZDO0FBQzNDLFdBQUssUUFBTCxDQUFjO0FBQUUsUUFBQSxTQUFTLEVBQUEsU0FBWDtBQUFhLFFBQUEsWUFBWSxFQUFBO0FBQXpCLE9BQWQ7QUFDRDs7QUFFSyxRQUFBLEVBQUEsR0FBQSxLQUFBLEtBQUE7QUFBQSxRQUFFLGVBQUEsR0FBQSxFQUFBLENBQUEsZUFBRjtBQUFBLFFBQW1CLFVBQUEsR0FBQSxFQUFBLENBQUEsVUFBbkI7O0FBQ04sUUFBSSxlQUFKLEVBQXFCO0FBQ25CLE1BQUEsb0JBQW9CLENBQUMsS0FBSyxPQUFOLENBQXBCO0FBQ0EsTUFBQSxZQUFZLENBQUMsS0FBSyxRQUFOLENBQVo7QUFDQSxXQUFLLE9BQUwsR0FBZSxxQkFBcUIsQ0FBQyxLQUFLLDBCQUFOLENBQXBDO0FBQ0EsV0FBSyxRQUFMLEdBQWdCLFVBQVUsQ0FDeEIsWUFBQTtBQUNFLFFBQUEsb0JBQW9CLENBQUMsS0FBSSxDQUFDLE9BQU4sQ0FBcEI7QUFDQSxRQUFBLEtBQUksQ0FBQyxPQUFMLEdBQWUscUJBQXFCLENBQUMsS0FBSSxDQUFDLDBCQUFOLENBQXBDO0FBQ0QsT0FKdUIsRUFLeEIsVUFBVSxHQUFHLElBQWIsR0FBb0IsRUFMSSxDQUExQjtBQU9EO0FBQ0YsR0EzQk07O0FBNkJBLEVBQUEsVUFBQSxDQUFBLFNBQUEsQ0FBQSxvQkFBQSxHQUFQLFlBQUE7QUFDRSxJQUFBLE1BQU0sQ0FBQyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQyxLQUFLLGFBQTFDO0FBQ0EsSUFBQSxRQUFRLENBQUMsbUJBQVQsQ0FBNkIsV0FBN0IsRUFBMEMsS0FBSyxVQUEvQztBQUNBLElBQUEsUUFBUSxDQUFDLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDLEtBQUssY0FBN0M7QUFDQSxJQUFBLFlBQVksQ0FBQyxLQUFLLFFBQU4sQ0FBWjtBQUNBLElBQUEsWUFBWSxDQUFDLEtBQUssV0FBTixDQUFaO0FBQ0EsSUFBQSxZQUFZLENBQUMsS0FBSyxXQUFOLENBQVo7QUFDQSxJQUFBLG9CQUFvQixDQUFDLEtBQUssT0FBTixDQUFwQjtBQUNELEdBUk07O0FBZzBCQSxFQUFBLFVBQUEsQ0FBQSxTQUFBLENBQUEsTUFBQSxHQUFQLFlBQUE7QUFDUSxRQUFBLEVBQUEsR0FBQSxLQUFBLEtBQUE7QUFBQSxRQUNKLFVBQUEsR0FBQSxFQUFBLENBQUEsVUFESTtBQUFBLFFBRUosa0JBQUEsR0FBQSxFQUFBLENBQUEsa0JBRkk7QUFBQSxRQUdKLFNBQUEsR0FBQSxFQUFBLENBQUEsU0FISTtBQUFBLFFBSUosVUFBQSxHQUFBLEVBQUEsQ0FBQSxVQUpJO0FBQUEsUUFLSixJQUFBLEdBQUEsRUFBQSxDQUFBLElBTEk7QUFBQSxRQU1KLGdCQUFBLEdBQUEsRUFBQSxDQUFBLGdCQU5JO0FBQUEsUUFPSixpQkFBQSxHQUFBLEVBQUEsQ0FBQSxpQkFQSTtBQUFBLFFBUUosaUJBQUEsR0FBQSxFQUFBLENBQUEsaUJBUkk7QUFBQSxRQVNKLFNBQUEsR0FBQSxFQUFBLENBQUEsU0FUSTtBQUFBLFFBVUosU0FBQSxHQUFBLEVBQUEsQ0FBQSxTQVZJO0FBQUEsUUFXSixlQUFBLEdBQUEsRUFBQSxDQUFBLGVBWEk7QUFBQSxRQVlKLFNBQUEsR0FBQSxFQUFBLENBQUEsU0FaSTtBQUFBLFFBYUosU0FBQSxHQUFBLEVBQUEsQ0FBQSxTQWJJO0FBQUEsUUFjSixVQUFBLEdBQUEsRUFBQSxDQUFBLFVBZEk7QUFBQSxRQWVKLGFBQUEsR0FBQSxFQUFBLENBQUEsYUFmSTtBQUFBLFFBZ0JKLFlBQUEsR0FBQSxFQUFBLENBQUEsWUFoQkk7QUFBQSxRQWlCSixZQUFBLEdBQUEsRUFBQSxDQUFBLFlBakJJO0FBbUJBLFFBQUEsRUFBQSxHQUFBLEtBQUEsS0FBQTtBQUFBLFFBQ0osU0FBQSxHQUFBLEVBQUEsQ0FBQSxTQURJO0FBQUEsUUFFSixRQUFBLEdBQUEsRUFBQSxDQUFBLFFBRkk7QUFBQSxRQUdKLGdCQUFBLEdBQUEsRUFBQSxDQUFBLGdCQUhJO0FBQUEsUUFJSixpQkFBQSxHQUFBLEVBQUEsQ0FBQSxpQkFKSTs7QUFNQSxRQUFBLEVBQUEsR0FBQSxJQUFBO0FBQUEsUUFBRSxRQUFBLEdBQUEsRUFBQSxDQUFBLFFBQUY7QUFBQSxRQUFZLE9BQUEsR0FBQSxFQUFBLENBQUEsT0FBWjs7QUFFTixRQUFJLENBQUMsSUFBRCxJQUFTLENBQUMsSUFBSSxDQUFDLE1BQW5CLEVBQTJCO0FBQ3pCLGFBQU8sSUFBUDtBQUNEOztBQUVELFFBQU0sYUFBYSxHQUFHLE9BQU8sR0FBRyxLQUFLLGVBQUwsRUFBSCxHQUE0QixJQUF6RDs7QUFFQSxRQUFNLFVBQVUsR0FBQSxRQUFBLENBQUEsRUFBQSxFQUFRLGdCQUFBLENBQUEsZ0JBQVIsRUFBNkIsU0FBN0IsQ0FBaEI7O0FBQ0EsUUFBTSxhQUFhLEdBQUEsUUFBQSxDQUFBLEVBQUEsRUFBUSxnQkFBQSxDQUFBLG1CQUFSLEVBQWdDLFlBQWhDLENBQW5COztBQUNBLFFBQU0sZ0JBQWdCLEdBQUEsUUFBQSxDQUFBLEVBQUEsRUFBUSxnQkFBQSxDQUFBLFlBQUEsQ0FBYSxTQUFyQixFQUFtQyxTQUFuQyxDQUF0Qjs7QUFFQSxRQUFNLFVBQVUsR0FBRztBQUNqQixNQUFBLFNBQVMsRUFBRSxVQURNO0FBRWpCLE1BQUEsYUFBYSxFQUFFO0FBRkUsS0FBbkI7QUFLQSxXQUNFLEtBQUEsQ0FBQSxhQUFBLENBQUEsS0FBQSxFQUFBO0FBQUssTUFBQSxTQUFTLEVBQUUsU0FBaEI7QUFBMkIsTUFBQSxLQUFLLEVBQUUsVUFBbEM7QUFBOEMsTUFBQSxPQUFPLEVBQUUsS0FBSztBQUE1RCxLQUFBLEVBQ0csU0FBUyxJQUNSLEtBQUEsQ0FBQSxhQUFBLENBQUMsU0FBQSxDQUFBLFlBQUQsRUFBYSxRQUFBLENBQUEsRUFBQSxFQUNQLFVBRE8sRUFDRztBQUNkLE1BQUEsVUFBVSxFQUFFLENBQUMsYUFBRCxJQUFrQixDQUFDLGdCQURqQjtBQUVkLE1BQUEsT0FBTyxFQUFFLEtBQUs7QUFGQSxLQURILENBQWIsRUFLRyxTQUxILENBRkosRUFXRSxLQUFBLENBQUEsYUFBQSxDQUFBLEtBQUEsRUFBQTtBQUNFLE1BQUEsU0FBUyxFQUFFLFlBRGI7QUFFRSxNQUFBLEtBQUssRUFBRSxhQUZUO0FBR0UsTUFBQSxHQUFHLEVBQUUsS0FBSyxhQUhaO0FBSUUsTUFBQSxXQUFXLEVBQUUsS0FBSyxlQUpwQjtBQUtFLE1BQUEsWUFBWSxFQUFFLEtBQUssZUFMckI7QUFNRSxNQUFBLFVBQVUsRUFBRSxLQUFLLGNBTm5CO0FBT0UsTUFBQSxXQUFXLEVBQUUsS0FBSyxVQVBwQjtBQVFFLE1BQUEsV0FBVyxFQUFFLEtBQUs7QUFScEIsS0FBQSxFQVVFLEtBQUEsQ0FBQSxhQUFBLENBQUMsU0FBQSxDQUFBLFlBQUQsRUFBYTtBQUNYLE1BQUEsSUFBSSxFQUFFLElBREs7QUFFWCxNQUFBLFNBQVMsRUFBRSxTQUZBO0FBR1gsTUFBQSxRQUFRLEVBQUUsUUFIQztBQUlYLE1BQUEsT0FBTyxFQUFFLE9BSkU7QUFLWCxNQUFBLFVBQVUsRUFBRSxPQUFPLEdBQUcsVUFBSCxHQUFnQixDQUx4QjtBQU1YLE1BQUEsUUFBUSxFQUFFLFFBTkM7QUFPWCxNQUFBLE1BQU0sRUFBRSxLQUFLLE1BUEY7QUFRWCxNQUFBLGVBQWUsRUFBRSxLQUFLLGVBUlg7QUFTWCxNQUFBLE9BQU8sRUFBRSxLQUFLLFdBVEg7QUFVWCxNQUFBLGlCQUFpQixFQUFFLGlCQVZSO0FBV1gsTUFBQSxpQkFBaUIsRUFBRSxpQkFYUjtBQVlYLE1BQUEsU0FBUyxFQUFFLGdCQVpBO0FBYVgsTUFBQSxTQUFTLEVBQUUsU0FiQTtBQWNYLE1BQUEsZUFBZSxFQUFFLGVBZE47QUFlWCxNQUFBLGdCQUFnQixFQUFFLGdCQWZQO0FBZ0JYLE1BQUEsYUFBYSxFQUFFO0FBaEJKLEtBQWIsQ0FWRixDQVhGLEVBeUNHLFVBQVUsSUFDVCxLQUFBLENBQUEsYUFBQSxDQUFDLFNBQUEsQ0FBQSxZQUFELEVBQWEsUUFBQSxDQUFBLEVBQUEsRUFDUCxVQURPLEVBQ0c7QUFDZCxNQUFBLFVBQVUsRUFBRSxDQUFDLGFBQUQsSUFBa0IsQ0FBQyxpQkFEakI7QUFFZCxNQUFBLE9BQU8sRUFBRSxLQUFLO0FBRkEsS0FESCxDQUFiLEVBS0csVUFMSCxDQTFDSixDQURGO0FBcURELEdBaEdNOztBQTNnQ08sRUFBQSxVQUFBLENBQUEsWUFBQSxHQUEwQixnQkFBQSxDQUFBLFlBQTFCO0FBNG1DaEIsU0FBQSxVQUFBO0FBQUMsQ0E3bUNELENBQWdDLEtBQUssQ0FBQyxTQUF0QyxDQUFBOztBQUFhLE9BQUEsQ0FBQSxVQUFBLEdBQUEsVUFBQTs7QUErbUNiLElBQU0sWUFBWSxHQUFHLFNBQWYsWUFBZSxDQUFDLElBQUQsRUFBVTtBQUM3QixNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTixDQUFjLEtBQWQsQ0FBb0IsY0FBcEIsQ0FBaEI7O0FBQ0EsTUFBSSxDQUFDLE9BQVEsQ0FBQyxDQUFELENBQVQsSUFBZ0IsRUFBcEIsRUFBd0I7QUFDdEIsSUFBQSxJQUFJLENBQUMsaUJBQUwsR0FBeUIsVUFBQyxHQUFELEVBQVcsSUFBWCxFQUFvQjtBQUUzQyxNQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksNEJBQVosRUFBMEMsR0FBMUMsRUFBK0MsSUFBL0M7QUFDRCxLQUhEO0FBSUQ7QUFDRixDQVJEOztBQVVBLE9BQUEsV0FBQSxHQUFlLFVBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBXaGVlbEV2ZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuICBkZWZhdWx0TWVudVN0eWxlLFxuICBkZWZhdWx0UHJvcHMsXG4gIGRlZmF1bHRXcmFwcGVyU3R5bGUsXG59IGZyb20gJy4vZGVmYXV0U2V0dGluZ3MnO1xuaW1wb3J0IHsgTWVudUl0ZW0sIE1lbnVJdGVtcywgTWVudVByb3BzLCBSZWYsIFJlZk9iamVjdCwgVm9pZCB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50UmVjdCxcbiAgbm90VW5kZWZPck51bGwsXG4gIHRlc3RQYXNzaXZlRXZlbnRTdXBwb3J0LFxuICB0cmFuc2xhdGVJc1ZhbGlkLFxufSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IEFycm93V3JhcHBlciwgSW5uZXJXcmFwcGVyIH0gZnJvbSAnLi93cmFwcGVyJztcblxuaW50ZXJmYWNlIE1lbnVTdGF0ZSB7XG4gIGRyYWdnaW5nOiBib29sZWFuO1xuICB4UG9pbnQ6IG51bWJlcjtcbiAgdHJhbnNsYXRlOiBudW1iZXI7XG4gIHN0YXJ0RHJhZ1RyYW5zbGF0ZTogbnVtYmVyO1xuICB4RHJhZ2dlZERpc3RhbmNlOiBudW1iZXI7XG4gIGZpcnN0SXRlbVZpc2libGU6IGJvb2xlYW47XG4gIGxhc3RJdGVtVmlzaWJsZTogYm9vbGVhbjtcbiAgbGVmdEFycm93VmlzaWJsZTogYm9vbGVhbjtcbiAgcmlnaHRBcnJvd1Zpc2libGU6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBEcmFnSGlzdG9yeUVudHJ5IHtcbiAgdGltZTogbnVtYmVyO1xuICBwb3NpdGlvbjogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgU2Nyb2xsTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxNZW51UHJvcHMsIE1lbnVTdGF0ZT4ge1xuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogTWVudVByb3BzID0gZGVmYXVsdFByb3BzO1xuXG4gIHByaXZhdGUgcmVmOiBSZWZPYmplY3Q7XG4gIHByaXZhdGUgbWVudVdyYXBwZXI6IFJlZjtcbiAgcHJpdmF0ZSBtZW51SW5uZXI6IFJlZjtcbiAgcHJpdmF0ZSBtb3VudGVkOiBib29sZWFuO1xuICBwcml2YXRlIG5lZWRVcGRhdGU6IGJvb2xlYW47XG4gIHByaXZhdGUgYWxsSXRlbXNXaWR0aDogbnVtYmVyO1xuICBwcml2YXRlIG1lbnVQb3M6IG51bWJlcjtcbiAgcHJpdmF0ZSBtZW51V2lkdGg6IG51bWJlcjtcbiAgcHJpdmF0ZSB3V2lkdGg6IG51bWJlcjtcbiAgcHJpdmF0ZSBmaXJzdFBhZ2VPZmZzZXQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBsYXN0UGFnZU9mZnNldDogbnVtYmVyO1xuICBwcml2YXRlIGxhc3RUcmFuc2xhdGVVcGRhdGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBtZW51SXRlbXM6IE1lbnVJdGVtcztcbiAgcHJpdmF0ZSBzZWxlY3RlZDogc3RyaW5nO1xuXG4gIC8qKiB0aW1lcnMgZm9yIHNldFRpbWVvdXQgaWYgUkFGIG5vdCBzdXBwb3J0ZWQgKi9cbiAgcHJpdmF0ZSBvbkxvYWRUaW1lcjogYW55O1xuICBwcml2YXRlIHJhZlRpbWVyOiBhbnk7XG4gIHByaXZhdGUgcmVzaXplVGltZXI6IGFueTtcbiAgcHJpdmF0ZSBmcmFtZUlkOiBhbnk7XG5cbiAgcHJpdmF0ZSBkYXRhOiBKU1guRWxlbWVudFtdIHwgbnVsbDtcblxuICBwcml2YXRlIGRyYWdIaXN0b3J5OiBEcmFnSGlzdG9yeUVudHJ5W107XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IE1lbnVQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnJlZiA9IHt9O1xuICAgIHRoaXMubWVudVdyYXBwZXIgPSBudWxsO1xuICAgIHRoaXMubWVudUlubmVyID0gbnVsbDtcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLm5lZWRVcGRhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmFsbEl0ZW1zV2lkdGggPSAwO1xuICAgIHRoaXMubWVudVBvcyA9IDA7XG4gICAgdGhpcy5tZW51V2lkdGggPSAwO1xuICAgIHRoaXMud1dpZHRoID0gMDtcbiAgICB0aGlzLmZpcnN0UGFnZU9mZnNldCA9IDA7XG4gICAgdGhpcy5sYXN0UGFnZU9mZnNldCA9IDA7XG4gICAgdGhpcy5sYXN0VHJhbnNsYXRlVXBkYXRlID0gMDtcbiAgICB0aGlzLm1lbnVJdGVtcyA9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBTdHJpbmcocHJvcHMuc2VsZWN0ZWQpIHx8ICcnO1xuXG4gICAgdGhpcy5vbkxvYWRUaW1lciA9IDA7XG4gICAgdGhpcy5yYWZUaW1lciA9IDA7XG4gICAgdGhpcy5yZXNpemVUaW1lciA9IDA7XG4gICAgdGhpcy5mcmFtZUlkID0gMDtcblxuICAgIHRoaXMuZGF0YSA9IG51bGw7XG4gICAgdGhpcy5kcmFnSGlzdG9yeSA9IFtdO1xuICAgIGNoZWNrVmVyc2lvbih0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0ZSA9IHtcbiAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgZmlyc3RJdGVtVmlzaWJsZTogdHJ1ZSxcbiAgICBsYXN0SXRlbVZpc2libGU6IGZhbHNlLFxuICAgIGxlZnRBcnJvd1Zpc2libGU6IGZhbHNlLFxuICAgIHJpZ2h0QXJyb3dWaXNpYmxlOiB0cnVlLFxuICAgIHN0YXJ0RHJhZ1RyYW5zbGF0ZTogMCxcbiAgICB0cmFuc2xhdGU6IHRoaXMucHJvcHMudHJhbnNsYXRlLFxuICAgIHhEcmFnZ2VkRGlzdGFuY2U6IDAsXG4gICAgeFBvaW50OiAwLFxuICB9O1xuXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpOiBWb2lkIHtcbiAgICB0aGlzLnNldEluaXRpYWwoKTtcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPVxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAoKCkgPT4gZmFsc2UpO1xuXG4gICAgY29uc3QgcGFzc2l2ZUV2ZW50cyA9IHRlc3RQYXNzaXZlRXZlbnRTdXBwb3J0KCk7XG4gICAgY29uc3Qgb3B0aW9uc0NhcHR1cmUgPSBwYXNzaXZlRXZlbnRzXG4gICAgICA/IHsgcGFzc2l2ZTogdHJ1ZSwgY2FwdHVyZTogdHJ1ZSB9XG4gICAgICA6IHRydWU7XG4gICAgY29uc3Qgb3B0aW9uc05vQ2FwdHVyZSA9IHBhc3NpdmVFdmVudHNcbiAgICAgID8geyBwYXNzaXZlOiB0cnVlLCBjYXB0dXJlOiBmYWxzZSB9XG4gICAgICA6IGZhbHNlO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0aGlzLm9uTG9hZCwgb3B0aW9uc05vQ2FwdHVyZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplSGFuZGxlciwgb3B0aW9uc05vQ2FwdHVyZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVEcmFnLCBvcHRpb25zQ2FwdHVyZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlRHJhZ1N0b3AsIG9wdGlvbnNDYXB0dXJlKTtcblxuICAgIC8vIGlmIHN0eWxlcyBsb2FkZWQgYmVmb3JlIGpzIGJ1bmRsZSBuZWVkIHdhaXQgZm9yIGl0XG4gICAgdGhpcy5vbkxvYWRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4gKHRoaXMub25Mb2FkKCksIHRoaXMuZm9yY2VVcGRhdGUoKSksIDApO1xuICB9XG5cbiAgcHVibGljIHNob3VsZENvbXBvbmVudFVwZGF0ZShcbiAgICBuZXh0UHJvcHM6IE1lbnVQcm9wcyxcbiAgICBuZXh0U3RhdGU6IE1lbnVTdGF0ZSxcbiAgKTogYm9vbGVhbiB7XG4gICAgLy8gVE9ETzogbmVlZCByZWZhY3RvciBhbGwgdGhpcyBvciByZW1vdmVcbiAgICAvLyBpdCdzIHRvbyBjb21wbGljYXRlZCBhbHJlYWR5XG4gICAgY29uc3Qge1xuICAgICAgdHJhbnNsYXRlLFxuICAgICAgZHJhZ2dpbmcsXG4gICAgICBmaXJzdEl0ZW1WaXNpYmxlLFxuICAgICAgbGFzdEl0ZW1WaXNpYmxlLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtcbiAgICAgIHRyYW5zbGF0ZTogdHJhbnNsYXRlTmV3LFxuICAgICAgZHJhZ2dpbmc6IGRyYWdnaW5nTmV3LFxuICAgICAgZmlyc3RJdGVtVmlzaWJsZTogZmlyc3RJdGVtVmlzaWJsZU5ldyxcbiAgICAgIGxhc3RJdGVtVmlzaWJsZTogbGFzdEl0ZW1WaXNpYmxlTmV3LFxuICAgIH0gPSBuZXh0U3RhdGU7XG5cbiAgICBjb25zdCB7XG4gICAgICB0cmFuc2xhdGU6IHRyYW5zbGF0ZVByb3BzLFxuICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkUHJvcHMsXG4gICAgICBzY3JvbGxUb1NlbGVjdGVkLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIHRyYW5zbGF0ZTogdHJhbnNsYXRlUHJvcHNOZXcsXG4gICAgICBzZWxlY3RlZDogc2VsZWN0ZWRQcm9wc05ldyxcbiAgICB9ID0gbmV4dFByb3BzO1xuXG4gICAgY29uc3QgdHJhbnNsYXRlUHJvcHNOb3ROdWxsID0gbm90VW5kZWZPck51bGwodHJhbnNsYXRlUHJvcHNOZXcpO1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlRGlmZiA9IHRyYW5zbGF0ZSAhPT0gdHJhbnNsYXRlTmV3O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVByb3BzRGlmZiA9XG4gICAgICB0cmFuc2xhdGVQcm9wc05vdE51bGwgJiYgdHJhbnNsYXRlUHJvcHMgIT09IHRyYW5zbGF0ZVByb3BzTmV3O1xuICAgIGNvbnN0IHRyYW5zbGF0ZURpZmYgPVxuICAgICAgdHJhbnNsYXRlUHJvcHNOZXcgIT09IHRyYW5zbGF0ZU5ldyB8fFxuICAgICAgKHRyYW5zbGF0ZVN0YXRlRGlmZiB8fCB0cmFuc2xhdGVQcm9wc0RpZmYpO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9wc0RpZmYgPVxuICAgICAgbm90VW5kZWZPck51bGwoc2VsZWN0ZWRQcm9wc05ldykgJiYgc2VsZWN0ZWRQcm9wcyAhPT0gc2VsZWN0ZWRQcm9wc05ldztcbiAgICBjb25zdCBzZWxlY3RlZERpZmYgPVxuICAgICAgc2VsZWN0ZWRQcm9wc0RpZmYgfHwgdGhpcy5zZWxlY3RlZCAhPT0gc2VsZWN0ZWRQcm9wc05ldztcblxuICAgIGNvbnN0IHByb3BzRGlmZiA9IHRyYW5zbGF0ZURpZmYgfHwgc2VsZWN0ZWREaWZmO1xuXG4gICAgY29uc3QgZmlyc3RJdGVtVmlzaWJsZURpZmYgPSBmaXJzdEl0ZW1WaXNpYmxlICE9PSBmaXJzdEl0ZW1WaXNpYmxlTmV3O1xuICAgIGNvbnN0IGxhc3RJdGVtVmlzaWJsZURpZmYgPSBsYXN0SXRlbVZpc2libGUgIT09IGxhc3RJdGVtVmlzaWJsZU5ldztcblxuICAgIGxldCB0cmFuc2xhdGVSZXN1bHQgPSB0cmFuc2xhdGVOZXc7XG5cbiAgICBjb25zdCBuZXdNZW51SXRlbXMgPVxuICAgICAgdGhpcy5wcm9wcy5kYXRhICE9PSBuZXh0UHJvcHMuZGF0YSB8fFxuICAgICAgdGhpcy5wcm9wcy5kYXRhLmxlbmd0aCAhPT0gbmV4dFByb3BzLmRhdGEubGVuZ3RoO1xuICAgIGNvbnN0IG5ld1RyYW5zbGF0ZVByb3BzID1cbiAgICAgIHRyYW5zbGF0ZUlzVmFsaWQodHJhbnNsYXRlUHJvcHNOZXcpICYmXG4gICAgICB0cmFuc2xhdGVQcm9wc0RpZmYgJiZcbiAgICAgICFuZXdNZW51SXRlbXM7XG5cbiAgICBpZiAobmV3TWVudUl0ZW1zIHx8IChzY3JvbGxUb1NlbGVjdGVkICYmIHNlbGVjdGVkUHJvcHNEaWZmKSkge1xuICAgICAgdGhpcy5uZWVkVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJvcHNEaWZmKSB7XG4gICAgICBpZiAoc2VsZWN0ZWRQcm9wc0RpZmYpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkUHJvcHNOZXc7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXdUcmFuc2xhdGVQcm9wcykge1xuICAgICAgICB0cmFuc2xhdGVSZXN1bHQgPSB0cmFuc2xhdGVQcm9wc05ldztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3VHJhbnNsYXRlUHJvcHMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0cmFuc2xhdGU6ICt0cmFuc2xhdGVSZXN1bHQgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIG5ld01lbnVJdGVtcyB8fFxuICAgICAgdHJhbnNsYXRlRGlmZiB8fFxuICAgICAgZHJhZ2dpbmcgIT09IGRyYWdnaW5nTmV3IHx8XG4gICAgICBwcm9wc0RpZmYgfHxcbiAgICAgIGZpcnN0SXRlbVZpc2libGVEaWZmIHx8XG4gICAgICBsYXN0SXRlbVZpc2libGVEaWZmXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBNZW51UHJvcHMsIHByZXZTdGF0ZTogTWVudVN0YXRlKTogVm9pZCB7XG4gICAgLy8gdXBkYXRlIGlmIGhhdmUgbmV3IG1lbnUgaXRlbXMgb3Igc2VsZWN0ZWQgdmFsdWVcbiAgICBpZiAodGhpcy5uZWVkVXBkYXRlKSB7XG4gICAgICB0aGlzLm5lZWRVcGRhdGUgPSBmYWxzZTtcbiAgICAgIHRoaXMub25Mb2FkKCk7XG4gICAgfVxuXG4gICAgY29uc3QgeyB0cmFuc2xhdGU6IHRyYW5zbGF0ZU9sZCB9ID0gcHJldlN0YXRlO1xuICAgIGNvbnN0IHsgdHJhbnNsYXRlLCBkcmFnZ2luZyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmICghZHJhZ2dpbmcgJiYgdHJhbnNsYXRlT2xkICE9PSB0cmFuc2xhdGUpIHtcbiAgICAgIHRoaXMub25VcGRhdGUoeyB0cmFuc2xhdGUsIHRyYW5zbGF0ZU9sZCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGhpZGVTaW5nbGVBcnJvdywgdHJhbnNpdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaGlkZVNpbmdsZUFycm93KSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lSWQpO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmFmVGltZXIpO1xuICAgICAgdGhpcy5mcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuc2V0Rmlyc3RMYXN0SXRlbVZpc2liaWxpdHkpO1xuICAgICAgdGhpcy5yYWZUaW1lciA9IHNldFRpbWVvdXQoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lSWQpO1xuICAgICAgICAgIHRoaXMuZnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnNldEZpcnN0TGFzdEl0ZW1WaXNpYmlsaXR5KTtcbiAgICAgICAgfSxcbiAgICAgICAgdHJhbnNpdGlvbiAqIDEwMDAgKyAxMCxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IFZvaWQge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZUhhbmRsZXIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlRHJhZyk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlRHJhZ1N0b3ApO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnJhZlRpbWVyKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5vbkxvYWRUaW1lcik7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZXIpO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWVJZCk7XG4gIH1cblxuICAvKiogc2V0IHJlZiBmb3IgTWVudUl0ZW1zICovXG4gIHB1YmxpYyBzZXRSZWYgPSAocmVmOiBSZWZPYmplY3QpOiBWb2lkID0+IHtcbiAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBPYmplY3QuZW50cmllcyhyZWYpWzBdO1xuICAgIGlmICh2YWx1ZS5lbGVtKSB7XG4gICAgICB0aGlzLnJlZltrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldE1lbnVJbm5lclJlZiA9IChyZWY6IFJlZik6IFZvaWQgPT4ge1xuICAgIHRoaXMubWVudUlubmVyID0gcmVmO1xuICB9XG5cbiAgLyoqIHNldCByZWYgZm9yIHdyYXBwZXIgKi9cbiAgcHVibGljIHNldFdyYXBwZXJSZWYgPSAocmVmOiBSZWYpOiBWb2lkID0+IHtcbiAgICB0aGlzLm1lbnVXcmFwcGVyID0gcmVmO1xuICB9XG5cbiAgLyoqIGNoZWNrIGlmIGZpcnN0IGFuZCBsYXN0IGl0ZW1zIHZpc2libGUgKi9cbiAgcHVibGljIGNoZWNrRmlyc3RMYXN0SXRlbVZpc2liaWxpdHkgPSAoe1xuICAgIHRyYW5zbGF0ZSA9IHRoaXMuc3RhdGUudHJhbnNsYXRlLFxuICB9OiB7XG4gICAgdHJhbnNsYXRlPzogbnVtYmVyO1xuICB9KTogeyBmaXJzdEl0ZW1WaXNpYmxlOiBib29sZWFuOyBsYXN0SXRlbVZpc2libGU6IGJvb2xlYW4gfSA9PiB7XG4gICAgY29uc3QgeyBtZW51SXRlbXMgfSA9IHRoaXM7XG5cbiAgICBsZXQgZmlyc3RJdGVtVmlzaWJsZSA9IHRydWU7XG4gICAgbGV0IGxhc3RJdGVtVmlzaWJsZSA9IGZhbHNlO1xuICAgIGlmIChtZW51SXRlbXMpIHtcbiAgICAgIGNvbnN0IHZpc2libGVJdGVtcyA9IHRoaXMuZ2V0VmlzaWJsZUl0ZW1zKHsgb2Zmc2V0OiB0cmFuc2xhdGUgfSk7XG4gICAgICBmaXJzdEl0ZW1WaXNpYmxlID0gdmlzaWJsZUl0ZW1zLmluY2x1ZGVzKG1lbnVJdGVtc1swXSk7XG4gICAgICBsYXN0SXRlbVZpc2libGUgPSB2aXNpYmxlSXRlbXMuaW5jbHVkZXMobWVudUl0ZW1zLnNsaWNlKC0xKVswXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZmlyc3RJdGVtVmlzaWJsZSwgbGFzdEl0ZW1WaXNpYmxlIH07XG4gIH1cblxuICAvKiogY2hlY2sgZmlyc3QgYW5kIGxhc3QgaXRlbXMgYW5kIHNldFN0YXRlICovXG4gIHB1YmxpYyBzZXRGaXJzdExhc3RJdGVtVmlzaWJpbGl0eSA9ICgpOiBWb2lkID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBmaXJzdEl0ZW1WaXNpYmxlOiBmaXJzdEl0ZW1WaXNpYmxlT2xkLFxuICAgICAgbGFzdEl0ZW1WaXNpYmxlOiBsYXN0SXRlbVZpc2libGVPbGQsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgZmlyc3RJdGVtVmlzaWJsZSxcbiAgICAgIGxhc3RJdGVtVmlzaWJsZSxcbiAgICB9ID0gdGhpcy5jaGVja0ZpcnN0TGFzdEl0ZW1WaXNpYmlsaXR5KHt9KTtcbiAgICBpZiAoXG4gICAgICBmaXJzdEl0ZW1WaXNpYmxlT2xkICE9PSBmaXJzdEl0ZW1WaXNpYmxlIHx8XG4gICAgICBsYXN0SXRlbVZpc2libGVPbGQgIT09IGxhc3RJdGVtVmlzaWJsZVxuICAgICkge1xuICAgICAgY29uc3QgbGVmdEFycm93VmlzaWJsZSA9ICFmaXJzdEl0ZW1WaXNpYmxlO1xuICAgICAgY29uc3QgcmlnaHRBcnJvd1Zpc2libGUgPSAhbGFzdEl0ZW1WaXNpYmxlO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZpcnN0SXRlbVZpc2libGUsXG4gICAgICAgIGxhc3RJdGVtVmlzaWJsZSxcbiAgICAgICAgbGVmdEFycm93VmlzaWJsZSxcbiAgICAgICAgcmlnaHRBcnJvd1Zpc2libGUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25Mb2FkID0gKCk6IFZvaWQgPT4ge1xuICAgIHRoaXMuc2V0SW5pdGlhbCgpO1xuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XG4gIH1cblxuICAvKioga2luZGEgZGVib3VuY2UgKi9cbiAgcHVibGljIHJlc2l6ZUhhbmRsZXIgPSAoKTogVm9pZCA9PiB7XG4gICAgY29uc3QgeyBhbGlnbk9uUmVzaXplIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghYWxpZ25PblJlc2l6ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVyKTtcbiAgICB0aGlzLnJlc2l6ZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlc2l6ZSgpLCAyNTApO1xuICB9XG5cbiAgLyoqIFNldCB2YWx1ZXMgb24gcmVzaXplICovXG4gIHB1YmxpYyByZXNpemUgPSAoKTogVm9pZCA9PiB7XG4gICAgY29uc3QgeyBhbGlnbkNlbnRlciB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnVwZGF0ZVdpZHRoKHt9KTtcbiAgICBjb25zdCB2aXNpYmxlSXRlbXMgPSB0aGlzLmdldFZpc2libGVJdGVtcyh7fSk7XG5cbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmdldE9mZnNldFRvSXRlbUJ5SW5kZXgoe1xuICAgICAgaW5kZXg6ICh2aXNpYmxlSXRlbXNbMF0gJiYgdmlzaWJsZUl0ZW1zWzBdWzFdLmluZGV4KSB8fCAwLFxuICAgIH0pO1xuICAgIGNvbnN0IGFsaWduID0gYWxpZ25DZW50ZXJcbiAgICAgID8gdGhpcy5nZXRDZW50ZXJPZmZzZXQoeyBpdGVtczogdmlzaWJsZUl0ZW1zIH0pXG4gICAgICA6IDA7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRyYW5zbGF0ZTogLW9mZnNldCArIGFsaWduIH0pO1xuICB9XG5cbiAgLyoqIHNldCBpbml0aWFsIHZhbHVlcyBhbmQgZm9yIHVwZGF0ZXMgKi9cbiAgcHVibGljIHNldEluaXRpYWwgPSAoKTogVm9pZCA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgc2VsZWN0ZWQsXG4gICAgICBkYXRhLFxuICAgICAgdHJhbnNsYXRlOiB0cmFuc2xhdGVQcm9wLFxuICAgICAgc2Nyb2xsVG9TZWxlY3RlZCxcbiAgICAgIGFsaWduQ2VudGVyLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdHJhbnNsYXRlOiB0cmFuc2xhdGVTdGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoIWRhdGEgfHwgIWRhdGEubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm1lbnVJdGVtcy5sZW5ndGggfHwgZGF0YSAhPT0gdGhpcy5kYXRhKSB7XG4gICAgICB0aGlzLm1lbnVJdGVtcyA9IHRoaXMuZ2V0TWVudUl0ZW1zKCk7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cblxuICAgIC8vIGFsaWduIGl0ZW0gb24gaW5pdGlhbCBsb2FkXG4gICAgdGhpcy51cGRhdGVXaWR0aCh7fSk7XG5cbiAgICBjb25zdCBuZXdTdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuXG4gICAgLy8gc2V0IHRyYW5zbGF0ZSBvbiBmaXJzdCBsb2FkXG4gICAgY29uc3QgZmlyc3RNb3VudEFuZERlZmF1bHRUcmFuc2xhdGUgPVxuICAgICAgIXRoaXMubW91bnRlZCAmJiB0cmFuc2xhdGVQcm9wID09PSBkZWZhdWx0UHJvcHMudHJhbnNsYXRlO1xuICAgIGlmIChcbiAgICAgIGZpcnN0TW91bnRBbmREZWZhdWx0VHJhbnNsYXRlIHx8XG4gICAgICAoIXRyYW5zbGF0ZUlzVmFsaWQodHJhbnNsYXRlUHJvcCkgJiYgIXRyYW5zbGF0ZUlzVmFsaWQodHJhbnNsYXRlU3RhdGUpKVxuICAgICkge1xuICAgICAgbmV3U3RhdGUudHJhbnNsYXRlID0gYWxpZ25DZW50ZXJcbiAgICAgICAgPyB0aGlzLmZpcnN0UGFnZU9mZnNldFxuICAgICAgICA6IGRlZmF1bHRQcm9wcy50cmFuc2xhdGU7XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgYXJyb3dzXG4gICAgY29uc3Qge1xuICAgICAgZmlyc3RJdGVtVmlzaWJsZSxcbiAgICAgIGxhc3RJdGVtVmlzaWJsZSxcbiAgICB9ID0gdGhpcy5jaGVja0ZpcnN0TGFzdEl0ZW1WaXNpYmlsaXR5KHsgdHJhbnNsYXRlOiB0cmFuc2xhdGVQcm9wIH0pO1xuICAgIG5ld1N0YXRlLmZpcnN0SXRlbVZpc2libGUgPSBmaXJzdEl0ZW1WaXNpYmxlO1xuICAgIG5ld1N0YXRlLmxhc3RJdGVtVmlzaWJsZSA9IGxhc3RJdGVtVmlzaWJsZTtcbiAgICBuZXdTdGF0ZS5sZWZ0QXJyb3dWaXNpYmxlID0gIWZpcnN0SXRlbVZpc2libGU7XG4gICAgbmV3U3RhdGUucmlnaHRBcnJvd1Zpc2libGUgPSAhbGFzdEl0ZW1WaXNpYmxlO1xuXG4gICAgLy8gc2Nyb2xsVG9TZWxlY3RlZFxuICAgIGlmIChzY3JvbGxUb1NlbGVjdGVkKSB7XG4gICAgICBjb25zdCBuZWVkU2Nyb2xsID0gdGhpcy5pc1Njcm9sbE5lZWRlZCh7XG4gICAgICAgIGl0ZW1JZDogc2VsZWN0ZWQsXG4gICAgICAgIHRyYW5zbGF0ZTogbmV3U3RhdGUudHJhbnNsYXRlLFxuICAgICAgfSk7XG4gICAgICBpZiAobmVlZFNjcm9sbCkge1xuICAgICAgICBuZXdTdGF0ZS50cmFuc2xhdGUgPSB0aGlzLmdldE9mZnNldFRvSXRlbUJ5S2V5KHNlbGVjdGVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgLi4ubmV3U3RhdGUgfSk7XG4gIH1cblxuICAvKiogY2hlY2sgaWYgc2VsZWN0ZWQgaXRlbSB2aXNpYmxlIG9uIHNjcmVlbiBvciBuZWVkIHNjcm9sbCB0byBpdCAqL1xuICBwdWJsaWMgaXNTY3JvbGxOZWVkZWQgPSAoe1xuICAgIGl0ZW1JZCxcbiAgICB0cmFuc2xhdGUgPSB0aGlzLnN0YXRlLnRyYW5zbGF0ZSxcbiAgfToge1xuICAgIGl0ZW1JZDogc3RyaW5nO1xuICAgIHRyYW5zbGF0ZT86IG51bWJlcjtcbiAgfSk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldEl0ZW1CeUtleShpdGVtSWQpO1xuXG4gICAgY29uc3QgdmlzaWJsZUl0ZW1zID0gdGhpcy5nZXRWaXNpYmxlSXRlbXMoe1xuICAgICAgb2Zmc2V0OiB0cmFuc2xhdGUsXG4gICAgfSk7XG4gICAgcmV0dXJuICF2aXNpYmxlSXRlbXMuaW5jbHVkZXMoaXRlbSk7XG4gIH1cblxuICAvKiogZXh0ZXJuYWwgYXBpLCBzY3JvbGwgdG8gaXRlbSBieSBpdCBrZXkgKi9cbiAgcHVibGljIHNjcm9sbFRvID0gKGl0ZW1LZXk6IHN0cmluZyk6IFZvaWQgPT4ge1xuICAgIGNvbnN0IHsgdHJhbnNsYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IG5ld1RyYW5zbGF0ZSA9IHRoaXMuZ2V0T2Zmc2V0VG9JdGVtQnlLZXkoaXRlbUtleSk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGl0ZW1LZXk7XG4gICAgaWYgKHRyYW5zbGF0ZSA9PT0gbmV3VHJhbnNsYXRlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRyYW5zbGF0ZTogbmV3VHJhbnNsYXRlIH0pO1xuICB9XG5cbiAgLyoqIGdldCBNZW51SXRlbXMgZnJvbSByZWZzICovXG4gIHB1YmxpYyBnZXRNZW51SXRlbXMgPSAoKTogTWVudUl0ZW1zID0+XG4gICAgT2JqZWN0LmVudHJpZXModGhpcy5yZWYpLnNsaWNlKDAsIHRoaXMucHJvcHMuZGF0YS5sZW5ndGggfHwgMClcblxuICAvKiogZ2V0IHdpZHRoIG9mIGFsbCBtZW51IGl0ZW1zICovXG4gIHB1YmxpYyBnZXRJdGVtc1dpZHRoID0gKHtcbiAgICBpdGVtcyA9IHRoaXMubWVudUl0ZW1zLFxuICB9OiB7XG4gICAgaXRlbXM/OiBNZW51SXRlbXM7XG4gIH0pOiBudW1iZXIgPT4ge1xuICAgIHJldHVybiBpdGVtc1xuICAgICAgLm1hcChlbCA9PiBlbFsxXS5lbGVtKVxuICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgLnJlZHVjZSgoYWNjLCBlbCkgPT4gKGFjYyArPSBnZXRDbGllbnRSZWN0KGVsKS53aWR0aCksIDApO1xuICB9XG5cbiAgLyoqIGdldCB3aWR0aCBvZiBpdGVtcywgd2luZG93IGFuZCBwb3Mgb2YgbWVudSAqL1xuICBwdWJsaWMgZ2V0V2lkdGggPSAoe1xuICAgIGl0ZW1zLFxuICB9OiB7XG4gICAgaXRlbXM6IE1lbnVJdGVtcztcbiAgfSk6IHtcbiAgICB3V2lkdGg6IG51bWJlcjtcbiAgICBtZW51UG9zOiBudW1iZXI7XG4gICAgbWVudVdpZHRoOiBudW1iZXI7XG4gICAgYWxsSXRlbXNXaWR0aDogbnVtYmVyO1xuICB9ID0+IHtcbiAgICBjb25zdCB3V2lkdGggPSB3aW5kb3cgJiYgd2luZG93LmlubmVyV2lkdGg7XG4gICAgY29uc3QgeyB4OiBtZW51UG9zLCB3aWR0aDogbWVudVdpZHRoIH0gPSBnZXRDbGllbnRSZWN0KHRoaXMubWVudVdyYXBwZXIpO1xuICAgIGNvbnN0IGFsbEl0ZW1zV2lkdGggPSB0aGlzLmdldEl0ZW1zV2lkdGgoeyBpdGVtcyB9KTtcbiAgICByZXR1cm4geyB3V2lkdGgsIG1lbnVQb3MsIG1lbnVXaWR0aCwgYWxsSXRlbXNXaWR0aCB9O1xuICB9XG5cbiAgLyoqIHZhbHVlcyBmcm9tIDIgZnVuY3Rpb25zIGFib3ZlICovXG4gIHB1YmxpYyB1cGRhdGVXaWR0aCA9ICh7XG4gICAgaXRlbXMgPSB0aGlzLm1lbnVJdGVtcyxcbiAgfToge1xuICAgIGl0ZW1zPzogTWVudUl0ZW1zO1xuICB9KTogVm9pZCA9PiB7XG4gICAgY29uc3QgeyB3V2lkdGgsIG1lbnVQb3MsIG1lbnVXaWR0aCwgYWxsSXRlbXNXaWR0aCB9ID0gdGhpcy5nZXRXaWR0aCh7XG4gICAgICBpdGVtcyxcbiAgICB9KTtcbiAgICBjb25zdCB7IGZpcnN0UGFnZU9mZnNldCwgbGFzdFBhZ2VPZmZzZXQgfSA9IHRoaXMuZ2V0UGFnZXNPZmZzZXRzKHtcbiAgICAgIGFsbEl0ZW1zV2lkdGgsXG4gICAgICBpdGVtcyxcbiAgICAgIG1lbnVQb3MsXG4gICAgICBtZW51V2lkdGgsXG4gICAgICB3V2lkdGgsXG4gICAgfSk7XG4gICAgdGhpcy5tZW51UG9zID0gbWVudVBvcztcbiAgICB0aGlzLndXaWR0aCA9IHdXaWR0aDtcbiAgICB0aGlzLmFsbEl0ZW1zV2lkdGggPSBhbGxJdGVtc1dpZHRoO1xuICAgIHRoaXMubWVudVdpZHRoID0gbWVudVdpZHRoO1xuICAgIHRoaXMuZmlyc3RQYWdlT2Zmc2V0ID0gZmlyc3RQYWdlT2Zmc2V0O1xuICAgIHRoaXMubGFzdFBhZ2VPZmZzZXQgPSBsYXN0UGFnZU9mZnNldDtcbiAgfVxuXG4gIC8qKiBnZXQgZmlyc3RQYWdlT2Zmc2V0ICovXG4gIHB1YmxpYyBnZXRGaXJzdFBhZ2VPZmZzZXQgPSAoe1xuICAgIGl0ZW1zID0gdGhpcy5tZW51SXRlbXMsXG4gICAgb2Zmc2V0ID0gdGhpcy5zdGF0ZS50cmFuc2xhdGUsXG4gICAgbWVudVdpZHRoID0gdGhpcy5tZW51V2lkdGgsXG4gIH06IHtcbiAgICBpdGVtczogTWVudUl0ZW1zO1xuICAgIG9mZnNldDogbnVtYmVyO1xuICAgIHdXaWR0aDogbnVtYmVyO1xuICAgIG1lbnVQb3M6IG51bWJlcjtcbiAgICBtZW51V2lkdGg6IG51bWJlcjtcbiAgfSk6IG51bWJlciA9PiB7XG4gICAgY29uc3QgdmlzaWJsZUl0ZW1zU3RhcnQgPSB0aGlzLmdldFZpc2libGVJdGVtcyh7XG4gICAgICBpdGVtcyxcbiAgICAgIG1lbnVXaWR0aCxcbiAgICAgIG9mZnNldCxcbiAgICB9KTtcbiAgICBjb25zdCBmaXJzdFBhZ2VPZmZzZXQgPSB0aGlzLmdldENlbnRlck9mZnNldCh7XG4gICAgICBpdGVtczogdmlzaWJsZUl0ZW1zU3RhcnQsXG4gICAgICBtZW51V2lkdGgsXG4gICAgfSk7XG4gICAgcmV0dXJuIGZpcnN0UGFnZU9mZnNldDtcbiAgfVxuXG4gIC8qKiBnZXQgbGFzdFBhZ2VPZmZzZXQgKi9cbiAgcHVibGljIGdldExhc3RQYWdlT2Zmc2V0ID0gKHtcbiAgICBpdGVtcyA9IHRoaXMubWVudUl0ZW1zLFxuICAgIGFsbEl0ZW1zV2lkdGggPSB0aGlzLmFsbEl0ZW1zV2lkdGgsXG4gICAgd1dpZHRoID0gdGhpcy53V2lkdGgsXG4gICAgbWVudVBvcyA9IHRoaXMubWVudVBvcyxcbiAgICBtZW51V2lkdGggPSB0aGlzLm1lbnVXaWR0aCxcbiAgfToge1xuICAgIGl0ZW1zOiBNZW51SXRlbXM7XG4gICAgYWxsSXRlbXNXaWR0aDogbnVtYmVyO1xuICAgIHdXaWR0aDogbnVtYmVyO1xuICAgIG1lbnVQb3M6IG51bWJlcjtcbiAgICBtZW51V2lkdGg6IG51bWJlcjtcbiAgfSk6IG51bWJlciA9PiB7XG4gICAgY29uc3QgdmlzaWJsZUl0ZW1zRW5kID0gdGhpcy5nZXRWaXNpYmxlSXRlbXMoe1xuICAgICAgaXRlbXMsXG4gICAgICBtZW51V2lkdGgsXG4gICAgICBvZmZzZXQ6IC1hbGxJdGVtc1dpZHRoICsgbWVudVdpZHRoLFxuICAgIH0pO1xuICAgIGNvbnN0IGxhc3RQYWdlT2Zmc2V0ID0gdGhpcy5nZXRDZW50ZXJPZmZzZXQoe1xuICAgICAgaXRlbXM6IHZpc2libGVJdGVtc0VuZCxcbiAgICAgIG1lbnVXaWR0aCxcbiAgICB9KTtcbiAgICByZXR1cm4gbGFzdFBhZ2VPZmZzZXQ7XG4gIH1cblxuICAvKiogZ2V0IG9mZnNldHMgdG8gZmlyc3QgYW5kIGxhc3QgaXRlbSAqL1xuICBwdWJsaWMgZ2V0UGFnZXNPZmZzZXRzID0gKHtcbiAgICBpdGVtcyA9IHRoaXMubWVudUl0ZW1zLFxuICAgIGFsbEl0ZW1zV2lkdGggPSB0aGlzLmFsbEl0ZW1zV2lkdGgsXG4gICAgd1dpZHRoID0gdGhpcy53V2lkdGgsXG4gICAgbWVudVBvcyA9IHRoaXMubWVudVBvcyxcbiAgICBtZW51V2lkdGggPSB0aGlzLm1lbnVXaWR0aCxcbiAgICBvZmZzZXQgPSB0aGlzLnN0YXRlLnRyYW5zbGF0ZSxcbiAgfSk6IHtcbiAgICBmaXJzdFBhZ2VPZmZzZXQ6IG51bWJlcjtcbiAgICBsYXN0UGFnZU9mZnNldDogbnVtYmVyO1xuICB9ID0+IHtcbiAgICBjb25zdCBmaXJzdFBhZ2VPZmZzZXQgPSB0aGlzLmdldEZpcnN0UGFnZU9mZnNldCh7XG4gICAgICBpdGVtcyxcbiAgICAgIG1lbnVQb3MsXG4gICAgICBtZW51V2lkdGgsXG4gICAgICBvZmZzZXQsXG4gICAgICB3V2lkdGgsXG4gICAgfSk7XG4gICAgY29uc3QgbGFzdFBhZ2VPZmZzZXQgPSB0aGlzLmdldExhc3RQYWdlT2Zmc2V0KHtcbiAgICAgIGFsbEl0ZW1zV2lkdGgsXG4gICAgICBpdGVtcyxcbiAgICAgIG1lbnVQb3MsXG4gICAgICBtZW51V2lkdGgsXG4gICAgICB3V2lkdGgsXG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZmlyc3RQYWdlT2Zmc2V0LFxuICAgICAgbGFzdFBhZ2VPZmZzZXQsXG4gICAgfTtcbiAgfVxuXG4gIC8qKiBpdGVtIGNsaWNrIGhhbmRsZXIgKi9cbiAgcHVibGljIG9uSXRlbUNsaWNrID0gKGlkOiBzdHJpbmcpOiBWb2lkID0+IHtcbiAgICBjb25zdCB7IGNsaWNrV2hlbkRyYWcsIG9uU2VsZWN0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgeERyYWdnZWREaXN0YW5jZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IGFmdGVyU2Nyb2xsID0geERyYWdnZWREaXN0YW5jZSA+IDU7XG5cbiAgICBpZiAoYWZ0ZXJTY3JvbGwgJiYgIWNsaWNrV2hlbkRyYWcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdGVkID0gaWQ7XG4gICAgaWYgKG9uU2VsZWN0KSB7XG4gICAgICBvblNlbGVjdChpZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIGdldCBpdGVtIHZpc2libGUgd2l0aCBjdXJyZW50L3Byb3ZpZGVkIHRyYW5zbGF0ZSAqL1xuICBwdWJsaWMgZ2V0VmlzaWJsZUl0ZW1zID0gKHtcbiAgICBpdGVtcyA9IHRoaXMubWVudUl0ZW1zLFxuICAgIG1lbnVXaWR0aCA9IHRoaXMubWVudVdpZHRoLFxuICAgIG9mZnNldCA9IHRoaXMuc3RhdGUudHJhbnNsYXRlLFxuICAgIHRyYW5zbGF0ZSA9IHRoaXMuc3RhdGUudHJhbnNsYXRlIHx8IGRlZmF1bHRQcm9wcy50cmFuc2xhdGUsXG4gIH0pOiBNZW51SXRlbXMgPT4ge1xuICAgIHJldHVybiBpdGVtcy5maWx0ZXIoZWwgPT4ge1xuICAgICAgY29uc3QgeyB3aWR0aDogZWxXaWR0aCB9ID0gZ2V0Q2xpZW50UmVjdChlbFsxXS5lbGVtKTtcbiAgICAgIGNvbnN0IGlkID0gdGhpcy5nZXRJdGVtSW5kKGl0ZW1zLCBlbCk7XG4gICAgICBjb25zdCB4ID0gdGhpcy5nZXRPZmZzZXRUb0l0ZW1CeUluZGV4KHtcbiAgICAgICAgaW5kZXg6IGlkLFxuICAgICAgICBtZW51SXRlbXM6IGl0ZW1zLFxuICAgICAgICB0cmFuc2xhdGUsXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRoaXMuZWxlbVZpc2libGUoe1xuICAgICAgICBlbFdpZHRoLFxuICAgICAgICBtZW51V2lkdGgsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgeCxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIGNoZWNrIGlmIHNpbmdsZSBtZW51IGl0ZW0gdmlzaWJsZSBieSBpdCdzIHBvc2l0aW9uIGFuZCB3aWR0aCAqL1xuICBwdWJsaWMgZWxlbVZpc2libGUgPSAoe1xuICAgIHgsXG4gICAgb2Zmc2V0ID0gMCxcbiAgICBlbFdpZHRoLFxuICAgIG1lbnVXaWR0aCA9IHRoaXMubWVudVdpZHRoLFxuICB9OiB7XG4gICAgeDogbnVtYmVyO1xuICAgIG9mZnNldDogbnVtYmVyO1xuICAgIGVsV2lkdGg6IG51bWJlcjtcbiAgICBtZW51V2lkdGg/OiBudW1iZXI7XG4gIH0pOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBsZWZ0RWRnZSA9IC0xO1xuICAgIGNvbnN0IHJpZ2h0RWRnZSA9IG1lbnVXaWR0aCArIDE7XG4gICAgY29uc3QgcG9zID0geCArIG9mZnNldDtcbiAgICBjb25zdCBwb3NXaXRoV2lkdGggPSBwb3MgKyBlbFdpZHRoO1xuICAgIHJldHVybiBwb3MgPj0gbGVmdEVkZ2UgJiYgcG9zV2l0aFdpZHRoIDw9IHJpZ2h0RWRnZTtcbiAgfVxuXG4gIC8qKiBnZXQgaW5kZXggb2YgaXRlbSAqL1xuICBwdWJsaWMgZ2V0SXRlbUluZCA9IChcbiAgICBtZW51SXRlbXM6IE1lbnVJdGVtcyA9IHRoaXMubWVudUl0ZW1zLFxuICAgIGl0ZW06IE1lbnVJdGVtLFxuICApOiBudW1iZXIgPT4ge1xuICAgIGlmICghbWVudUl0ZW1zIHx8ICFpdGVtKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIG1lbnVJdGVtcy5maW5kSW5kZXgoZWwgPT4gZWxbMF0gPT09IGl0ZW1bMF0pO1xuICB9XG5cbiAgLyoqIGdldCBuZXh0IGl0ZW0gaW4gZGF0YSAqL1xuICBwdWJsaWMgZ2V0TmV4dEl0ZW1JbmQgPSAobGVmdDogYm9vbGVhbiwgdmlzaWJsZUl0ZW1zOiBNZW51SXRlbXMpOiBudW1iZXIgPT4ge1xuICAgIGNvbnN0IHsgbWVudUl0ZW1zIH0gPSB0aGlzO1xuICAgIGlmIChsZWZ0KSB7XG4gICAgICBpZiAoIXZpc2libGVJdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdmlzaWJsZUl0ZW1zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbWVudUl0ZW1zLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgaW5kID0gbGVmdFxuICAgICAgPyB0aGlzLmdldEl0ZW1JbmQobWVudUl0ZW1zLCB2aXNpYmxlSXRlbXNbMF0pIC0gMVxuICAgICAgOiB0aGlzLmdldEl0ZW1JbmQobWVudUl0ZW1zLCB2aXNpYmxlSXRlbXMuc2xpY2UoLTEpWzBdKSArIDE7XG4gICAgcmV0dXJuIGluZCA8IDAgPyAwIDogaW5kO1xuICB9XG5cbiAgLyoqIGdldCBvZmZzZXQgZnJvbSBzdGFydCB0byBpdGVtIGJ5IGl0J3Mga2V5ICovXG4gIHB1YmxpYyBnZXRPZmZzZXRUb0l0ZW1CeUtleSA9IChrZXk6IHN0cmluZyk6IG51bWJlciA9PiB7XG4gICAgbGV0IHsgdHJhbnNsYXRlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgaXRlbUluZGV4ID0gdGhpcy5nZXRJdGVtSW5kZXhCeUtleShrZXkpO1xuICAgIGlmIChpdGVtSW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gdHJhbnNsYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IHsgYWxpZ25DZW50ZXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0cmFuc2xhdGUgPSB0aGlzLmdldE9mZnNldFRvSXRlbUJ5SW5kZXgoeyBpbmRleDogaXRlbUluZGV4IH0pO1xuXG4gICAgY29uc3QgdmlzaWJsZUl0ZW1zV2l0aE5ld1RyYW5zbGF0ZSA9IHRoaXMuZ2V0VmlzaWJsZUl0ZW1zKHtcbiAgICAgIG9mZnNldDogLXRyYW5zbGF0ZSxcbiAgICB9KTtcbiAgICBjb25zdCBvZmZzZXQgPSBhbGlnbkNlbnRlclxuICAgICAgPyB0aGlzLmdldENlbnRlck9mZnNldCh7IGl0ZW1zOiB2aXNpYmxlSXRlbXNXaXRoTmV3VHJhbnNsYXRlIH0pXG4gICAgICA6IGRlZmF1bHRQcm9wcy50cmFuc2xhdGU7XG5cbiAgICB0cmFuc2xhdGUgPSAtKHRyYW5zbGF0ZSAtIG9mZnNldCk7XG5cbiAgICBpZiAodGhpcy5pdEJlZm9yZVN0YXJ0KHRyYW5zbGF0ZSkpIHtcbiAgICAgIHRyYW5zbGF0ZSA9IHRoaXMuZ2V0T2Zmc2V0QXRTdGFydCgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pdEFmdGVyRW5kKHRyYW5zbGF0ZSkpIHtcbiAgICAgIHRyYW5zbGF0ZSA9IHRoaXMuZ2V0T2Zmc2V0QXRFbmQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRyYW5zbGF0ZTtcbiAgfVxuXG4gIC8qKiBnZXQgaXRlbSBmcm9tIGtleSAqL1xuICBwdWJsaWMgZ2V0SXRlbUJ5S2V5ID0gKGtleTogc3RyaW5nIHwgbnVtYmVyKTogTWVudUl0ZW0gPT4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLm1lbnVJdGVtcy5maW5kKGVsID0+IGVsWzFdLmtleSA9PT0ga2V5KSB8fCBbXG4gICAgICAgICcnLFxuICAgICAgICB7IGtleTogJ24nLCBlbGVtOiBudWxsLCBpbmRleDogLTEgfSxcbiAgICAgIF1cbiAgICApO1xuICB9XG5cbiAgLyoqIGdldCBpbmRleCBvZiBpdGVtIGZyb20gaXQncyBrZXkgKi9cbiAgcHVibGljIGdldEl0ZW1JbmRleEJ5S2V5ID0gKGl0ZW1LZXk6IHN0cmluZyk6IG51bWJlciA9PiB7XG4gICAgaWYgKCFpdGVtS2V5KSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1lbnVJdGVtcy5maW5kSW5kZXgoZWwgPT4gZWxbMV0ua2V5ID09PSBpdGVtS2V5KTtcbiAgfVxuXG4gIC8qKiBvZmZzZXQgZnJvbSBzdGFydCB0byBpdGVtICovXG4gIHB1YmxpYyBnZXRPZmZzZXRUb0l0ZW1CeUluZGV4ID0gKHtcbiAgICBpbmRleCxcbiAgICBtZW51SXRlbXMgPSB0aGlzLm1lbnVJdGVtcyxcbiAgICB0cmFuc2xhdGUgPSB0aGlzLnN0YXRlLnRyYW5zbGF0ZSxcbiAgfToge1xuICAgIGluZGV4OiBudW1iZXI7XG4gICAgbWVudUl0ZW1zPzogTWVudUl0ZW1zO1xuICAgIHRyYW5zbGF0ZT86IG51bWJlcjtcbiAgfSk6IG51bWJlciA9PiB7XG4gICAgaWYgKCFtZW51SXRlbXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgY29uc3QgaW5kID0gaW5kZXggPj0gbWVudUl0ZW1zLmxlbmd0aCA/IG1lbnVJdGVtcy5sZW5ndGggLSAxIDogaW5kZXg7XG4gICAgY29uc3QgeyB4IH0gPSBnZXRDbGllbnRSZWN0KG1lbnVJdGVtc1tpbmRdWzFdLmVsZW0pO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gK3ggLSB0cmFuc2xhdGUgLSB0aGlzLm1lbnVQb3M7XG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgLyoqIGdldCBuZXcgb2Zmc2V0IHZhbHVlIHdoZW4gc2Nyb2xsIHJpZ2h0ICovXG4gIHB1YmxpYyBnZXRTY3JvbGxSaWdodE9mZnNldCA9IChcbiAgICB2aXNpYmxlSXRlbXM6IE1lbnVJdGVtcyxcbiAgICBpdGVtczogTWVudUl0ZW1zID0gdGhpcy5tZW51SXRlbXMsXG4gICk6IG51bWJlciA9PiB7XG4gICAgY29uc3QgeyBzY3JvbGxCeSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IG5leHRJdGVtSW5kZXggPSBzY3JvbGxCeVxuICAgICAgPyB2aXNpYmxlSXRlbXNbMF1bMV0uaW5kZXggKyBzY3JvbGxCeVxuICAgICAgOiB0aGlzLmdldE5leHRJdGVtKFxuICAgICAgICAgICgodmlzaWJsZUl0ZW1zLnNsaWNlKC0xKVswXSAmJiB2aXNpYmxlSXRlbXMuc2xpY2UoLTEpKSB8fFxuICAgICAgICAgICAgaXRlbXMuc2xpY2UoLTEpKVswXVsxXS5rZXksXG4gICAgICAgIClbMV0uaW5kZXg7XG5cbiAgICBjb25zdCBuZXdPZmZzZXQgPSAtdGhpcy5nZXRPZmZzZXRUb0l0ZW1CeUluZGV4KHtcbiAgICAgIGluZGV4OiBuZXh0SXRlbUluZGV4LFxuICAgICAgbWVudUl0ZW1zOiBpdGVtcyxcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3T2Zmc2V0O1xuICB9XG5cbiAgLyoqIGdldCBuZXcgb2Zmc2V0IHZhbHVlIHdoZW4gc2Nyb2xsIGxlZnQgKi9cbiAgcHVibGljIGdldFNjcm9sbExlZnRPZmZzZXQgPSAoXG4gICAgdmlzaWJsZUl0ZW1zOiBNZW51SXRlbXMsXG4gICAgaXRlbXM6IE1lbnVJdGVtcyA9IHRoaXMubWVudUl0ZW1zLFxuICApOiBudW1iZXIgPT4ge1xuICAgIGNvbnN0IHsgc2Nyb2xsQnkgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBwcmV2SXRlbSA9IHRoaXMuZ2V0UHJldkl0ZW0oXG4gICAgICAoKHZpc2libGVJdGVtc1swXSAmJiB2aXNpYmxlSXRlbXNbMF1bMV0pIHx8IGl0ZW1zWzBdWzFdKS5rZXksXG4gICAgKTtcbiAgICBjb25zdCBwcmV2SXRlbUluZGV4ID1cbiAgICAgIHByZXZJdGVtWzFdLmluZGV4IC0gKHNjcm9sbEJ5ID8gc2Nyb2xsQnkgLSAxIDogdmlzaWJsZUl0ZW1zLmxlbmd0aCk7XG5cbiAgICBjb25zdCBuZXdPZmZzZXQgPSAtdGhpcy5nZXRPZmZzZXRUb0l0ZW1CeUluZGV4KHtcbiAgICAgIGluZGV4OiBwcmV2SXRlbUluZGV4IDwgMCA/IDAgOiBwcmV2SXRlbUluZGV4LFxuICAgICAgbWVudUl0ZW1zOiBpdGVtcyxcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3T2Zmc2V0O1xuICB9XG5cbiAgLyoqIGdldCBuZXh0IGl0ZW0gYnkga2V5ICovXG4gIHB1YmxpYyBnZXROZXh0SXRlbSA9IChrZXk6IHN0cmluZyk6IE1lbnVJdGVtID0+IHtcbiAgICBjb25zdCB7IG1lbnVJdGVtcyB9ID0gdGhpcztcbiAgICBjb25zdCBpdGVtSW5kZXggPSBtZW51SXRlbXMuZmluZEluZGV4KGVsID0+IGVsWzFdLmtleSA9PT0ga2V5KTtcbiAgICBjb25zdCBuZXh0SXRlbUluZGV4ID0gaXRlbUluZGV4ICsgMTtcbiAgICBjb25zdCBuZXh0SXRlbSA9IG1lbnVJdGVtc1tuZXh0SXRlbUluZGV4XSB8fCBtZW51SXRlbXMuc2xpY2UoLTEpWzBdO1xuICAgIHJldHVybiBuZXh0SXRlbTtcbiAgfVxuXG4gIC8qKiBnZXQgcHJyZXYgaXRlbSBieSBrZXkgKi9cbiAgcHVibGljIGdldFByZXZJdGVtID0gKGtleTogc3RyaW5nKTogTWVudUl0ZW0gPT4ge1xuICAgIGNvbnN0IHsgbWVudUl0ZW1zIH0gPSB0aGlzO1xuICAgIGNvbnN0IGl0ZW1JbmRleCA9IG1lbnVJdGVtcy5maW5kSW5kZXgoZWwgPT4gZWxbMV0ua2V5ID09PSBrZXkpO1xuICAgIGNvbnN0IHByZXZJdGVtSW5kZXggPSBpdGVtSW5kZXggLSAxO1xuICAgIGNvbnN0IHByZXZJdGVtID0gbWVudUl0ZW1zW3ByZXZJdGVtSW5kZXhdIHx8IG1lbnVJdGVtc1swXTtcbiAgICByZXR1cm4gcHJldkl0ZW07XG4gIH1cblxuICAvKiogZ2V0IG5ldyBvZmZzZXQgdmFsdWUgd2hlbiBzY3JvbGwgbGVmdC9yaWdodCAqL1xuICBwdWJsaWMgZ2V0T2Zmc2V0ID0gKFxuICAgIGxlZnQ6IGJvb2xlYW4sXG4gICAgaXRlbXM6IE1lbnVJdGVtcyA9IHRoaXMubWVudUl0ZW1zLFxuICApOiBudW1iZXIgPT4ge1xuICAgIGNvbnN0IHZpc2libGVJdGVtcyA9IHRoaXMuZ2V0VmlzaWJsZUl0ZW1zKHsgaXRlbXMgfSk7XG4gICAgY29uc3QgbmV3T2Zmc2V0ID0gbGVmdFxuICAgICAgPyB0aGlzLmdldFNjcm9sbExlZnRPZmZzZXQodmlzaWJsZUl0ZW1zLCBpdGVtcylcbiAgICAgIDogdGhpcy5nZXRTY3JvbGxSaWdodE9mZnNldCh2aXNpYmxlSXRlbXMsIGl0ZW1zKTtcbiAgICByZXR1cm4gbmV3T2Zmc2V0O1xuICB9XG5cbiAgLyoqIG9mZnNldCBmcm9tIDAgdG8gZmlyc3QgbWVudSBpdGVtIHdoZW4gc2Nyb2xsLFxuICAgKiBuZWVkIHBhc3MgaXRlbXMgdmlzaWJsZSBvbiBzY3JlZW5cbiAgICovXG4gIHB1YmxpYyBnZXRDZW50ZXJPZmZzZXQgPSAoe1xuICAgIGl0ZW1zID0gdGhpcy5tZW51SXRlbXMsXG4gICAgbWVudVdpZHRoID0gdGhpcy5tZW51V2lkdGgsXG4gIH06IHtcbiAgICBpdGVtcz86IE1lbnVJdGVtcztcbiAgICBtZW51V2lkdGg/OiBudW1iZXI7XG4gIH0pOiBudW1iZXIgPT4ge1xuICAgIGlmICghaXRlbXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgY29uc3QgaXRlbXNXaWR0aCA9IHRoaXMuZ2V0SXRlbXNXaWR0aCh7IGl0ZW1zIH0pO1xuICAgIGNvbnN0IG9mZnNldCA9IChtZW51V2lkdGggLSBpdGVtc1dpZHRoKSAvIDI7XG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIC8qKiBtb3VzZSB3aGVlbCBoYW5kbGVyICovXG4gIC8vIFRPRE86IGdlc3R1cmVFdmVudHNcbiAgcHVibGljIGhhbmRsZVdoZWVsID0gKGU6IFdoZWVsRXZlbnQpOiBWb2lkID0+IHtcbiAgICBjb25zdCB7IHdoZWVsIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghd2hlZWwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGUuZGVsdGFZIDwgMCkge1xuICAgICAgdGhpcy5oYW5kbGVBcnJvd0NsaWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFuZGxlQXJyb3dDbGljayhmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIG9mZnNldCBhdCBzdGFydCAqL1xuICBwdWJsaWMgZ2V0T2Zmc2V0QXRTdGFydCA9ICgpOiBudW1iZXIgPT4ge1xuICAgIGNvbnN0IHsgZmlyc3RQYWdlT2Zmc2V0IH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgYWxpZ25DZW50ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIGFsaWduQ2VudGVyID8gZmlyc3RQYWdlT2Zmc2V0IDogZGVmYXVsdFByb3BzLnRyYW5zbGF0ZTtcbiAgfVxuXG4gIC8qKiBvZmZzZXQgYXQgZW5kICovXG4gIHB1YmxpYyBnZXRPZmZzZXRBdEVuZCA9ICgpOiBudW1iZXIgPT4ge1xuICAgIGNvbnN0IHsgYWxpZ25DZW50ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBhbGxJdGVtc1dpZHRoLCBtZW51V2lkdGgsIGxhc3RQYWdlT2Zmc2V0IH0gPSB0aGlzO1xuICAgIGNvbnN0IG9mZnNldCA9IGFsbEl0ZW1zV2lkdGggLSBtZW51V2lkdGg7XG4gICAgcmV0dXJuIGFsaWduQ2VudGVyID8gLW9mZnNldCAtIGxhc3RQYWdlT2Zmc2V0IDogLW9mZnNldDtcbiAgfVxuXG4gIC8qKiBjbGljayByaWdodCBhcnJvdyAqL1xuICBwdWJsaWMgaGFuZGxlQXJyb3dDbGlja1JpZ2h0ID0gKCk6IFZvaWQgPT4ge1xuICAgIHRoaXMuaGFuZGxlQXJyb3dDbGljayhmYWxzZSk7XG4gIH1cblxuICAvKiogY2xpY2sgYXJyb3cvc2Nyb2xsICovXG4gIHB1YmxpYyBoYW5kbGVBcnJvd0NsaWNrID0gKGxlZnQgPSB0cnVlKTogVm9pZCA9PiB7XG4gICAgY29uc3QgeyBhbGlnbkNlbnRlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGFsbEl0ZW1zV2lkdGgsIG1lbnVXaWR0aCB9ID0gdGhpcztcblxuICAgIGlmICghYWxpZ25DZW50ZXIgJiYgIWxlZnQgJiYgYWxsSXRlbXNXaWR0aCA8IG1lbnVXaWR0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgbmV3VHJhbnNsYXRlID0gMDtcblxuICAgIGNvbnN0IHZpc2libGVJdGVtcyA9IHRoaXMuZ2V0VmlzaWJsZUl0ZW1zKHt9KTtcbiAgICBjb25zdCBmaXJzdEl0ZW1WaXNpYmxlID0gdmlzaWJsZUl0ZW1zWzBdICYmIHZpc2libGVJdGVtc1swXVsxXS5pbmRleCA9PT0gMDtcbiAgICBjb25zdCBsYXN0SXRlbVZpc2libGUgPVxuICAgICAgdmlzaWJsZUl0ZW1zLnNsaWNlKC0xKVswXSAmJlxuICAgICAgdmlzaWJsZUl0ZW1zLnNsaWNlKC0xKVswXVsxXS5pbmRleCA9PT0gdGhpcy5tZW51SXRlbXMubGVuZ3RoIC0gMTtcblxuICAgIGNvbnN0IHRyYW5zbCA9IHRoaXMuZ2V0T2Zmc2V0KGxlZnQpO1xuXG4gICAgaWYgKGxlZnQgJiYgKGZpcnN0SXRlbVZpc2libGUgfHwgdGhpcy5pdEJlZm9yZVN0YXJ0KHRyYW5zbCkpKSB7XG4gICAgICBuZXdUcmFuc2xhdGUgPSB0aGlzLmdldE9mZnNldEF0U3RhcnQoKTtcbiAgICB9IGVsc2UgaWYgKCFsZWZ0ICYmIChsYXN0SXRlbVZpc2libGUgfHwgdGhpcy5pdEFmdGVyRW5kKHRyYW5zbCkpKSB7XG4gICAgICBuZXdUcmFuc2xhdGUgPSB0aGlzLmdldE9mZnNldEF0RW5kKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zaGFkb3dlZC12YXJpYWJsZVxuICAgICAgY29uc3QgdmlzaWJsZUl0ZW1zID0gKCkgPT4gdGhpcy5nZXRWaXNpYmxlSXRlbXMoeyBvZmZzZXQ6IHRyYW5zbCB9KTtcbiAgICAgIGNvbnN0IGNlbnRlck9mZnNldCA9IGFsaWduQ2VudGVyXG4gICAgICAgID8gdGhpcy5nZXRDZW50ZXJPZmZzZXQoeyBpdGVtczogdmlzaWJsZUl0ZW1zKCkgfSlcbiAgICAgICAgOiAwO1xuXG4gICAgICBuZXdUcmFuc2xhdGUgPSB0cmFuc2wgKyBjZW50ZXJPZmZzZXQ7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdGFydERyYWdUcmFuc2xhdGU6IDAsXG4gICAgICB0cmFuc2xhdGU6IG5ld1RyYW5zbGF0ZSxcbiAgICAgIHhEcmFnZ2VkRGlzdGFuY2U6IDAsXG4gICAgICB4UG9pbnQ6IGRlZmF1bHRQcm9wcy54UG9pbnQsXG4gICAgfSk7XG4gIH1cblxuICAvKiogY2hlY2sgaWYgcG9zaXRpb24gYmVmb3JlIGZpcnN0IGVsZW1lbnQgKi9cbiAgcHVibGljIGl0QmVmb3JlU3RhcnQgPSAodHJhbnM6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHsgYWxpZ25DZW50ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBtZW51V2lkdGgsIGFsbEl0ZW1zV2lkdGgsIGZpcnN0UGFnZU9mZnNldCB9ID0gdGhpcztcbiAgICBpZiAoYWxsSXRlbXNXaWR0aCA8IG1lbnVXaWR0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBhbGlnbkNlbnRlclxuICAgICAgPyB0cmFucyA+IGZpcnN0UGFnZU9mZnNldFxuICAgICAgOiB0cmFucyA+IGRlZmF1bHRQcm9wcy50cmFuc2xhdGU7XG4gIH1cbiAgLyoqIGNoZWNrIGlmIHBvc2l0aW9uIGFmdGVyIGxhc3QgZWxlbWVudCAqL1xuICBwdWJsaWMgaXRBZnRlckVuZCA9ICh0cmFuczogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgeyBhbGlnbkNlbnRlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IG1lbnVXaWR0aCwgYWxsSXRlbXNXaWR0aCwgbGFzdFBhZ2VPZmZzZXQgfSA9IHRoaXM7XG4gICAgaWYgKGFsbEl0ZW1zV2lkdGggPCBtZW51V2lkdGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gYWxpZ25DZW50ZXJcbiAgICAgID8gdHJhbnMgPCBkZWZhdWx0UHJvcHMudHJhbnNsYXRlICYmXG4gICAgICAgICAgTWF0aC5hYnModHJhbnMpID4gYWxsSXRlbXNXaWR0aCAtIG1lbnVXaWR0aCArIGxhc3RQYWdlT2Zmc2V0XG4gICAgICA6IHRyYW5zIDwgZGVmYXVsdFByb3BzLnRyYW5zbGF0ZSAmJlxuICAgICAgICAgIE1hdGguYWJzKHRyYW5zKSA+IGFsbEl0ZW1zV2lkdGggLSBtZW51V2lkdGg7XG4gIH1cblxuICAvKiogZ2V0IGNvb3JkcyBmcm9tIG1vdXNlIGV2ZW50ICovXG4gIHB1YmxpYyBnZXRQb2ludCA9IChcbiAgICBldjogUmVhY3QuTW91c2VFdmVudCB8IFJlYWN0LlRvdWNoRXZlbnQgfCBFdmVudCxcbiAgKTogbnVtYmVyID0+IHtcbiAgICBpZiAoJ3RvdWNoZXMnIGluIGV2KSB7XG4gICAgICByZXR1cm4gZXYudG91Y2hlc1swXS5jbGllbnRYO1xuICAgIH0gZWxzZSBpZiAoJ2NsaWVudFgnIGluIGV2KSB7XG4gICAgICByZXR1cm4gZXYuY2xpZW50WDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9XG5cbiAgLyoqIGV2ZW50IGhhbmRsZXIgd2hlbiBzdGFydCBkcmFnIGFuZCBtb3VzZSBkb3duICAqL1xuICBwdWJsaWMgaGFuZGxlRHJhZ1N0YXJ0ID0gKGV2OiBSZWFjdC5Nb3VzZUV2ZW50IHwgUmVhY3QuVG91Y2hFdmVudCk6IFZvaWQgPT4ge1xuICAgIC8vIDEgbGVmdCBidXR0b24sIDIgcmlnaHQgYnV0dG9uXG4gICAgaWYgKGV2ICYmICdidXR0b25zJyBpbiBldiAmJiBldi5idXR0b25zID09PSAyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHsgZHJhZ2dpbmc6IGRyYWdnaW5nRW5hYmxlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghZHJhZ2dpbmdFbmFibGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgeyB0cmFuc2xhdGU6IHN0YXJ0RHJhZ1RyYW5zbGF0ZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIC8vIHJlY29yZCBkcmFnIGV2ZW50c1xuICAgIHRoaXMuZHJhZ0hpc3RvcnkgPSBbeyB0aW1lOiBEYXRlLm5vdygpLCBwb3NpdGlvbjogc3RhcnREcmFnVHJhbnNsYXRlIH1dO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkcmFnZ2luZzogdHJ1ZSxcbiAgICAgIHN0YXJ0RHJhZ1RyYW5zbGF0ZSxcbiAgICAgIHhEcmFnZ2VkRGlzdGFuY2U6IDAsXG4gICAgICB4UG9pbnQ6IDAsXG4gICAgfSk7XG4gIH1cblxuICAvKiogZHJhZyBldmVudCBoYW5kbGVyICovXG4gIHB1YmxpYyBoYW5kbGVEcmFnID0gKFxuICAgIGU6IFJlYWN0Lk1vdXNlRXZlbnQgfCBSZWFjdC5Ub3VjaEV2ZW50IHwgRXZlbnQsXG4gICk6IFZvaWQgPT4ge1xuICAgIGNvbnN0IHsgZHJhZ2dpbmc6IGRyYWdnaW5nRW5hYmxlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdHJhbnNsYXRlLCBkcmFnZ2luZywgeFBvaW50LCB4RHJhZ2dlZERpc3RhbmNlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICghZHJhZ2dpbmdFbmFibGUgfHwgIWRyYWdnaW5nKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgcG9pbnQgPSB0aGlzLmdldFBvaW50KGUpO1xuICAgIGNvbnN0IGRpZmYgPVxuICAgICAgeFBvaW50ID09PSBkZWZhdWx0UHJvcHMueFBvaW50ID8gZGVmYXVsdFByb3BzLnhQb2ludCA6IHhQb2ludCAtIHBvaW50O1xuICAgIGxldCByZXN1bHQgPSB0cmFuc2xhdGUgLSBkaWZmO1xuXG4gICAgLy8gZG9uJ3QgbGV0IHNjcm9sbCBvdmVyIHN0YXJ0IGFuZCBlbmRcbiAgICBpZiAodGhpcy5pdEJlZm9yZVN0YXJ0KHJlc3VsdCkpIHtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdCAtIE1hdGguYWJzKGRpZmYpIC8gMjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXRBZnRlckVuZChyZXN1bHQpKSB7XG4gICAgICByZXN1bHQgPSByZXN1bHQgKyBNYXRoLmFicyhkaWZmKSAvIDI7XG4gICAgfVxuXG4gICAgaWYgKGRpZmYgIT09IDApIHtcbiAgICAgIHRoaXMuZHJhZ0hpc3RvcnkucHVzaCh7IHRpbWU6IERhdGUubm93KCksIHBvc2l0aW9uOiByZXN1bHQgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3VHJhbnNsYXRlID0gcmVzdWx0O1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0cmFuc2xhdGU6IG5ld1RyYW5zbGF0ZSxcbiAgICAgIHhEcmFnZ2VkRGlzdGFuY2U6IHhEcmFnZ2VkRGlzdGFuY2UgKyBNYXRoLmFicyhkaWZmKSxcbiAgICAgIHhQb2ludDogcG9pbnQsXG4gICAgfSk7XG4gIH1cblxuICAvKiogZXZlbnQgaGFuZGxlciB3aGVuIGRyYWcgYW5kIG1vdXNlIHVwICAqL1xuICBwdWJsaWMgaGFuZGxlRHJhZ1N0b3AgPSAoXG4gICAgZTogUmVhY3QuTW91c2VFdmVudCB8IFJlYWN0LlRvdWNoRXZlbnQgfCBFdmVudCxcbiAgKTogVm9pZCA9PiB7XG4gICAgY29uc3QgeyBhbGxJdGVtc1dpZHRoLCBtZW51V2lkdGggfSA9IHRoaXM7XG4gICAgbGV0IHsgdHJhbnNsYXRlLCB4UG9pbnQgPSB0aGlzLmdldFBvaW50KGUpIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZHJhZ2dpbmcsIHN0YXJ0RHJhZ1RyYW5zbGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGRyYWdnaW5nOiBkcmFnZ2luZ0VuYWJsZSwgYWxpZ25DZW50ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFkcmFnZ2luZ0VuYWJsZSB8fCAhZHJhZ2dpbmcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBjYWxjdWxhdGUgaW5lcnRpYVxuICAgIGlmICh0aGlzLnByb3BzLmluZXJ0aWFTY3JvbGxpbmcpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgIGNvbnN0IHJlY2VudEVudHJpZXMgPSB0aGlzLmRyYWdIaXN0b3J5LmZpbHRlcihcbiAgICAgICAgZW50cnkgPT4gY3VycmVudFRpbWUgLSBlbnRyeS50aW1lIDwgMTUwLFxuICAgICAgKTtcbiAgICAgIGlmIChyZWNlbnRFbnRyaWVzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgY29uc3QgZmlyc3QgPSByZWNlbnRFbnRyaWVzWzBdO1xuICAgICAgICBjb25zdCBsYXN0ID0gcmVjZW50RW50cmllc1tyZWNlbnRFbnRyaWVzLmxlbmd0aCAtIDFdO1xuICAgICAgICBsZXQgc3BlZWQgPSAobGFzdC5wb3NpdGlvbiAtIGZpcnN0LnBvc2l0aW9uKSAvIChsYXN0LnRpbWUgLSBmaXJzdC50aW1lKTtcbiAgICAgICAgc3BlZWQgKj0gdGhpcy5wcm9wcy5pbmVydGlhU2Nyb2xsaW5nU2xvd2Rvd247XG4gICAgICAgIHRyYW5zbGF0ZSArPSBzcGVlZCAqICh0aGlzLnByb3BzLnRyYW5zaXRpb24gKiAxMDAwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgbmV3VHJhbnNsYXRlID0gdHJhbnNsYXRlO1xuXG4gICAgaWYgKHRoaXMuaXRCZWZvcmVTdGFydCh0cmFuc2xhdGUpKSB7XG4gICAgICBuZXdUcmFuc2xhdGUgPSB0aGlzLmdldE9mZnNldEF0U3RhcnQoKTtcbiAgICAgIHhQb2ludCA9IGRlZmF1bHRQcm9wcy54UG9pbnQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLml0QWZ0ZXJFbmQodHJhbnNsYXRlKSkge1xuICAgICAgbmV3VHJhbnNsYXRlID0gdGhpcy5nZXRPZmZzZXRBdEVuZCgpO1xuICAgICAgeFBvaW50ID0gZGVmYXVsdFByb3BzLnhQb2ludDtcbiAgICB9XG5cbiAgICBpZiAoIWFsaWduQ2VudGVyICYmIGFsbEl0ZW1zV2lkdGggPD0gbWVudVdpZHRoKSB7XG4gICAgICBuZXdUcmFuc2xhdGUgPSBkZWZhdWx0UHJvcHMudHJhbnNsYXRlO1xuICAgICAgeFBvaW50ID0gZGVmYXVsdFByb3BzLnhQb2ludDtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICAgIHRyYW5zbGF0ZTogbmV3VHJhbnNsYXRlLFxuICAgICAgICB4UG9pbnQsXG4gICAgICB9LFxuICAgICAgKCkgPT5cbiAgICAgICAgdGhpcy5vblVwZGF0ZSh7XG4gICAgICAgICAgdHJhbnNsYXRlOiBuZXdUcmFuc2xhdGUsXG4gICAgICAgICAgdHJhbnNsYXRlT2xkOiBzdGFydERyYWdUcmFuc2xhdGUsXG4gICAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICAvKiogY2hlY2sgaWYgbm8gbmVlZCBzaG93IGFycm93cyAqL1xuICBwdWJsaWMgaXNBcnJvd3NWaXNpYmxlID0gKCk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGFsbEl0ZW1zV2lkdGgsXG4gICAgICBtZW51V2lkdGgsXG4gICAgICBwcm9wczogeyBoaWRlQXJyb3dzIH0sXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgaGlkZSA9IEJvb2xlYW4oaGlkZUFycm93cyAmJiBhbGxJdGVtc1dpZHRoIDw9IG1lbnVXaWR0aCk7XG4gICAgcmV0dXJuICFoaWRlO1xuICB9XG5cbiAgLyoqIGNiIGZvciBwb3NpdGlvbiB1cGRhdGUgKi9cbiAgcHVibGljIG9uVXBkYXRlID0gKHtcbiAgICB0cmFuc2xhdGUgPSB0aGlzLnN0YXRlLnRyYW5zbGF0ZSxcbiAgICB0cmFuc2xhdGVPbGQgPSB0aGlzLnN0YXRlLnRyYW5zbGF0ZSxcbiAgfToge1xuICAgIHRyYW5zbGF0ZT86IG51bWJlcjtcbiAgICB0cmFuc2xhdGVPbGQ/OiBudW1iZXI7XG4gIH0pOiBWb2lkID0+IHtcbiAgICBjb25zdCB7IG9uVXBkYXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgbGFzdFRyYW5zbGF0ZVVwZGF0ZSB9ID0gdGhpcztcbiAgICBpZiAodHJhbnNsYXRlICE9PSB0cmFuc2xhdGVPbGQgJiYgdHJhbnNsYXRlICE9PSBsYXN0VHJhbnNsYXRlVXBkYXRlKSB7XG4gICAgICB0aGlzLmxhc3RUcmFuc2xhdGVVcGRhdGUgPSB0cmFuc2xhdGU7XG5cbiAgICAgIGlmICh0eXBlb2Ygb25VcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb25VcGRhdGUoeyB0cmFuc2xhdGUgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbmRlcigpOiBSZWFjdC5SZWFjdE5vZGUgfCBudWxsIHtcbiAgICBjb25zdCB7XG4gICAgICBhcnJvd0NsYXNzLFxuICAgICAgYXJyb3dEaXNhYmxlZENsYXNzLFxuICAgICAgYXJyb3dMZWZ0LFxuICAgICAgYXJyb3dSaWdodCxcbiAgICAgIGRhdGEsXG4gICAgICBpbmVydGlhU2Nyb2xsaW5nLFxuICAgICAgaW5uZXJXcmFwcGVyU3R5bGUsXG4gICAgICBpbm5lcldyYXBwZXJDbGFzcyxcbiAgICAgIGl0ZW1TdHlsZSxcbiAgICAgIGl0ZW1DbGFzcyxcbiAgICAgIGl0ZW1DbGFzc0FjdGl2ZSxcbiAgICAgIG1lbnVTdHlsZSxcbiAgICAgIG1lbnVDbGFzcyxcbiAgICAgIHRyYW5zaXRpb24sXG4gICAgICB1c2VCdXR0b25Sb2xlLFxuICAgICAgd3JhcHBlckNsYXNzLFxuICAgICAgd3JhcHBlclN0eWxlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIHRyYW5zbGF0ZSxcbiAgICAgIGRyYWdnaW5nLFxuICAgICAgbGVmdEFycm93VmlzaWJsZSxcbiAgICAgIHJpZ2h0QXJyb3dWaXNpYmxlLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQsIG1vdW50ZWQgfSA9IHRoaXM7XG5cbiAgICBpZiAoIWRhdGEgfHwgIWRhdGEubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBhcnJvd3NWaXNpYmxlID0gbW91bnRlZCA/IHRoaXMuaXNBcnJvd3NWaXNpYmxlKCkgOiB0cnVlO1xuXG4gICAgY29uc3QgbWVudVN0eWxlcyA9IHsgLi4uZGVmYXVsdE1lbnVTdHlsZSwgLi4ubWVudVN0eWxlIH07XG4gICAgY29uc3Qgd3JhcHBlclN0eWxlcyA9IHsgLi4uZGVmYXVsdFdyYXBwZXJTdHlsZSwgLi4ud3JhcHBlclN0eWxlIH07XG4gICAgY29uc3QgaXRlbVdyYXBwZXJTdHlsZSA9IHsgLi4uZGVmYXVsdFByb3BzLml0ZW1TdHlsZSwgLi4uaXRlbVN0eWxlIH07XG5cbiAgICBjb25zdCBhcnJvd1Byb3BzID0ge1xuICAgICAgY2xhc3NOYW1lOiBhcnJvd0NsYXNzLFxuICAgICAgZGlzYWJsZWRDbGFzczogYXJyb3dEaXNhYmxlZENsYXNzLFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e21lbnVDbGFzc30gc3R5bGU9e21lbnVTdHlsZXN9IG9uV2hlZWw9e3RoaXMuaGFuZGxlV2hlZWx9PlxuICAgICAgICB7YXJyb3dMZWZ0ICYmIChcbiAgICAgICAgICA8QXJyb3dXcmFwcGVyXG4gICAgICAgICAgICB7Li4uYXJyb3dQcm9wc31cbiAgICAgICAgICAgIGlzRGlzYWJsZWQ9eyFhcnJvd3NWaXNpYmxlIHx8ICFsZWZ0QXJyb3dWaXNpYmxlfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVBcnJvd0NsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthcnJvd0xlZnR9XG4gICAgICAgICAgPC9BcnJvd1dyYXBwZXI+XG4gICAgICAgICl9XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17d3JhcHBlckNsYXNzfVxuICAgICAgICAgIHN0eWxlPXt3cmFwcGVyU3R5bGVzfVxuICAgICAgICAgIHJlZj17dGhpcy5zZXRXcmFwcGVyUmVmfVxuICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZURyYWdTdGFydH1cbiAgICAgICAgICBvblRvdWNoU3RhcnQ9e3RoaXMuaGFuZGxlRHJhZ1N0YXJ0fVxuICAgICAgICAgIG9uVG91Y2hFbmQ9e3RoaXMuaGFuZGxlRHJhZ1N0b3B9XG4gICAgICAgICAgb25Nb3VzZU1vdmU9e3RoaXMuaGFuZGxlRHJhZ31cbiAgICAgICAgICBvblRvdWNoTW92ZT17dGhpcy5oYW5kbGVEcmFnfVxuICAgICAgICA+XG4gICAgICAgICAgPElubmVyV3JhcHBlclxuICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgIHRyYW5zbGF0ZT17dHJhbnNsYXRlfVxuICAgICAgICAgICAgZHJhZ2dpbmc9e2RyYWdnaW5nfVxuICAgICAgICAgICAgbW91bnRlZD17bW91bnRlZH1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e21vdW50ZWQgPyB0cmFuc2l0aW9uIDogMH1cbiAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cbiAgICAgICAgICAgIHNldFJlZj17dGhpcy5zZXRSZWZ9XG4gICAgICAgICAgICBzZXRNZW51SW5uZXJSZWY9e3RoaXMuc2V0TWVudUlubmVyUmVmfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkl0ZW1DbGlja31cbiAgICAgICAgICAgIGlubmVyV3JhcHBlclN0eWxlPXtpbm5lcldyYXBwZXJTdHlsZX1cbiAgICAgICAgICAgIGlubmVyV3JhcHBlckNsYXNzPXtpbm5lcldyYXBwZXJDbGFzc31cbiAgICAgICAgICAgIGl0ZW1TdHlsZT17aXRlbVdyYXBwZXJTdHlsZX1cbiAgICAgICAgICAgIGl0ZW1DbGFzcz17aXRlbUNsYXNzfVxuICAgICAgICAgICAgaXRlbUNsYXNzQWN0aXZlPXtpdGVtQ2xhc3NBY3RpdmV9XG4gICAgICAgICAgICBpbmVydGlhU2Nyb2xsaW5nPXtpbmVydGlhU2Nyb2xsaW5nfVxuICAgICAgICAgICAgdXNlQnV0dG9uUm9sZT17dXNlQnV0dG9uUm9sZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7YXJyb3dSaWdodCAmJiAoXG4gICAgICAgICAgPEFycm93V3JhcHBlclxuICAgICAgICAgICAgey4uLmFycm93UHJvcHN9XG4gICAgICAgICAgICBpc0Rpc2FibGVkPXshYXJyb3dzVmlzaWJsZSB8fCAhcmlnaHRBcnJvd1Zpc2libGV9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFycm93Q2xpY2tSaWdodH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YXJyb3dSaWdodH1cbiAgICAgICAgICA8L0Fycm93V3JhcHBlcj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgY2hlY2tWZXJzaW9uID0gKHRoYXQ6IGFueSk6IFZvaWQgPT4ge1xuICBjb25zdCB2ZXJzaW9uID0gUmVhY3QudmVyc2lvbi5tYXRjaCgvXihcXGR7MSwyfSlcXC4vKTtcbiAgaWYgKCt2ZXJzaW9uIVsxXSA+PSAxNikge1xuICAgIHRoYXQuY29tcG9uZW50RGlkQ2F0Y2ggPSAoZXJyOiBhbnksIGluZm86IGFueSk6IFZvaWQgPT4ge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUubG9nKCdTY3JvbGxNZW51IGNhdGNoZWQgZXJyb3I6ICcsIGVyciwgaW5mbyk7XG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsTWVudTtcbiJdLCJzb3VyY2VSb290IjoiIn0=

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var notUndefOrNull = function notUndefOrNull(val) {
  return val !== undefined && val !== null;
};

exports.notUndefOrNull = notUndefOrNull;

var getClientRect = function getClientRect(elem) {
  if (!elem || !elem.getBoundingClientRect || typeof elem.getBoundingClientRect !== 'function') {
    return {
      width: 0,
      x: 0
    };
  }

  var _a = elem.getBoundingClientRect(),
      _b = _a.left,
      left = _b === void 0 ? 0 : _b,
      _c = _a.width,
      width = _c === void 0 ? 0 : _c;

  return {
    width: width,
    x: +left
  };
};

exports.getClientRect = getClientRect;

var formatTranslate = function formatTranslate(val) {
  return +val.toFixed(0);
};

exports.formatTranslate = formatTranslate;

var translateIsValid = function translateIsValid(val) {
  return typeof val === 'number' && !isNaN(+val);
};

exports.translateIsValid = translateIsValid;

var validateTranslate = function validateTranslate(value, defaultValue) {
  return translateIsValid(value) ? +value : defaultValue;
};

exports.validateTranslate = validateTranslate;

var testPassiveEventSupport = function testPassiveEventSupport() {
  var passiveSupported = false;

  try {
    var options = {
      get passive() {
        passiveSupported = true;
        return false;
      }

    };
    window.addEventListener('testPassiveEventSupport', options, options);
    window.removeEventListener('testPassiveEventSupport', options, options);
  } catch (err) {
    passiveSupported = false;
  }

  return passiveSupported;
};

exports.testPassiveEventSupport = testPassiveEventSupport;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CZWxsL0RldmVsb3BtZW50L3JlYWN0LWhvcml6b250YWwtc2Nyb2xsaW5nLW1lbnUvc3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLElBQU0sY0FBYyxHQUFHLFNBQWpCLGNBQWlCLENBQUMsR0FBRCxFQUFTO0FBQUssU0FBQSxHQUFHLEtBQUssU0FBUixJQUFxQixHQUFHLEtBQXhCLElBQUE7QUFBaUMsQ0FBdEU7O0FBNkNFLE9BQUEsQ0FBQSxjQUFBLEdBQUEsY0FBQTs7QUEzQ0YsSUFBTSxhQUFhLEdBQUcsU0FBaEIsYUFBZ0IsQ0FBQyxJQUFELEVBQVU7QUFFOUIsTUFBSSxDQUFDLElBQUQsSUFBUyxDQUFDLElBQUksQ0FBQyxxQkFBZixJQUF3QyxPQUFPLElBQUksQ0FBQyxxQkFBWixLQUFzQyxVQUFsRixFQUE4RjtBQUFFLFdBQU87QUFBQyxNQUFBLEtBQUssRUFBRSxDQUFSO0FBQVcsTUFBQSxDQUFDLEVBQUU7QUFBZCxLQUFQO0FBQTBCOztBQUVwSCxNQUFBLEVBQUEsR0FBQSxJQUFBLENBQUEscUJBQUEsRUFBQTtBQUFBLE1BQUMsRUFBQSxHQUFBLEVBQUEsQ0FBQSxJQUFEO0FBQUEsTUFBQyxJQUFBLEdBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxFQUFEO0FBQUEsTUFBVyxFQUFBLEdBQUEsRUFBQSxDQUFBLEtBQVg7QUFBQSxNQUFXLEtBQUEsR0FBQSxFQUFBLEtBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLEVBQVg7O0FBQ04sU0FBTztBQUFDLElBQUEsS0FBSyxFQUFBLEtBQU47QUFBUSxJQUFBLENBQUMsRUFBRSxDQUFDO0FBQVosR0FBUDtBQUNELENBTkQ7O0FBNENFLE9BQUEsQ0FBQSxhQUFBLEdBQUEsYUFBQTs7QUFwQ0YsSUFBTSxlQUFlLEdBQUcsU0FBbEIsZUFBa0IsQ0FBQyxHQUFELEVBQVk7QUFBYSxTQUFBLENBQUMsR0FBRyxDQUFDLE9BQUosQ0FBRCxDQUFDLENBQUQ7QUFBZSxDQUFoRTs7QUF3Q0UsT0FBQSxDQUFBLGVBQUEsR0FBQSxlQUFBOztBQXJDRixJQUFNLGdCQUFnQixHQUFHLFNBQW5CLGdCQUFtQixDQUFDLEdBQUQsRUFBUztBQUNoQyxTQUFBLE9BQU8sR0FBUCxLQUFlLFFBQWYsSUFBMkIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFGLENBQWpDO0FBQXVDLENBRHpDOztBQW9DRSxPQUFBLENBQUEsZ0JBQUEsR0FBQSxnQkFBQTs7QUFqQ0YsSUFBTSxpQkFBaUIsR0FBRyxTQUFwQixpQkFBb0IsQ0FBQyxLQUFELEVBQWEsWUFBYixFQUFpQztBQUN6RCxTQUFBLGdCQUFnQixDQUFDLEtBQUQsQ0FBaEIsR0FDSSxDQUFDLEtBREwsR0FFSSxZQUZKO0FBRWdCLENBSGxCOztBQWdDRSxPQUFBLENBQUEsaUJBQUEsR0FBQSxpQkFBQTs7QUF6QkYsSUFBTSx1QkFBdUIsR0FBRyxTQUExQix1QkFBMEIsR0FBQTtBQUM5QixNQUFJLGdCQUFnQixHQUFHLEtBQXZCOztBQUVBLE1BQUk7QUFDRixRQUFNLE9BQU8sR0FBRztBQUNkLFVBQUksT0FBSixHQUFXO0FBR1QsUUFBQSxnQkFBZ0IsR0FBRyxJQUFuQjtBQUNBLGVBQU8sS0FBUDtBQUNEOztBQU5hLEtBQWhCO0FBU0EsSUFBQSxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IseUJBQXhCLEVBQW1ELE9BQW5ELEVBQW1FLE9BQW5FO0FBQ0EsSUFBQSxNQUFNLENBQUMsbUJBQVAsQ0FBMkIseUJBQTNCLEVBQXNELE9BQXRELEVBQXNFLE9BQXRFO0FBQ0QsR0FaRCxDQVlFLE9BQU8sR0FBUCxFQUFZO0FBQ1osSUFBQSxnQkFBZ0IsR0FBRyxLQUFuQjtBQUNEOztBQUNELFNBQU8sZ0JBQVA7QUFDRCxDQW5CRDs7QUF3QkUsT0FBQSxDQUFBLHVCQUFBLEdBQUEsdUJBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWYgfSBmcm9tICcuL3R5cGVzJztcblxuLyoqIGNoZWNrIGlmIHZhbHVlIG5vdCBlbXB0eSAqL1xuY29uc3Qgbm90VW5kZWZPck51bGwgPSAodmFsOiBhbnkpID0+IHZhbCAhPT0gdW5kZWZpbmVkICYmIHZhbCAhPT0gbnVsbDtcbi8qKiBnZXRDbGllbnRSZWN0ICovXG5jb25zdCBnZXRDbGllbnRSZWN0ID0gKGVsZW06IFJlZik6IHt3aWR0aDogbnVtYmVyLCB4OiBudW1iZXJ9ID0+IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICBpZiAoIWVsZW0gfHwgIWVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0IHx8IHR5cGVvZiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4ge3dpZHRoOiAwLCB4OiAwfTsgfVxuXG4gIGNvbnN0IHtsZWZ0ID0gMCwgd2lkdGggPSAwfSA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB7d2lkdGgsIHg6ICtsZWZ0fTtcbn07XG5cbmNvbnN0IGZvcm1hdFRyYW5zbGF0ZSA9ICh2YWw6IG51bWJlcik6IG51bWJlciA9PiArdmFsLnRvRml4ZWQoMCk7XG5cbi8qKiBjaGVjayBpZiB0cmFuc2xhdGUgaXMgdmFsaWQgKi9cbmNvbnN0IHRyYW5zbGF0ZUlzVmFsaWQgPSAodmFsOiBhbnkpOiBib29sZWFuID0+XG4gIHR5cGVvZiB2YWwgPT09ICdudW1iZXInICYmICFpc05hTigrdmFsKTtcbi8qKiBwYXNzIHRyYW5zbGF0ZSB2YWx1ZSBhbmQgZGVmYXVsdCwgdmFsaWQgLSByZXR1cm4gZm9ybWF0dGVkIHZhbHVlLCBub3QgdmFsaWQgLSByZXR1cm4gZGVmYXVsdCAqL1xuY29uc3QgdmFsaWRhdGVUcmFuc2xhdGUgPSAodmFsdWU6IGFueSwgZGVmYXVsdFZhbHVlOiBudW1iZXIpOiBudW1iZXIgPT5cbiAgdHJhbnNsYXRlSXNWYWxpZCh2YWx1ZSlcbiAgICA/ICt2YWx1ZVxuICAgIDogZGVmYXVsdFZhbHVlO1xuXG4vKiogdGVzdCBwYXNzaXZlIGV2ZW50IHN1cHBvcnQsIGZvciBwZXJmb3JtYW5jZSAqL1xuLy8gbWF5YmUgdXNlIHNlcGFyYXRlIHBhY2thZ2UgZGV0ZWN0LXBhc3NpdmUtZXZlbnRzXG5jb25zdCB0ZXN0UGFzc2l2ZUV2ZW50U3VwcG9ydCA9ICgpOiBib29sZWFuID0+IHtcbiAgbGV0IHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZTtcblxuICB0cnkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBnZXQgcGFzc2l2ZSgpIHtcbiAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBicm93c2VyXG4gICAgICAgIC8vIGF0dGVtcHRzIHRvIGFjY2VzcyB0aGUgcGFzc2l2ZSBwcm9wZXJ0eS5cbiAgICAgICAgcGFzc2l2ZVN1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZUV2ZW50U3VwcG9ydCcsIG9wdGlvbnMgYXMgYW55LCBvcHRpb25zKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmVFdmVudFN1cHBvcnQnLCBvcHRpb25zIGFzIGFueSwgb3B0aW9ucyBhcyBhbnkpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHBhc3NpdmVTdXBwb3J0ZWQ7XG59O1xuXG5leHBvcnQge1xuICBub3RVbmRlZk9yTnVsbCxcbiAgZ2V0Q2xpZW50UmVjdCxcbiAgdGVzdFBhc3NpdmVFdmVudFN1cHBvcnQsXG4gIHZhbGlkYXRlVHJhbnNsYXRlLFxuICB0cmFuc2xhdGVJc1ZhbGlkLFxuICBmb3JtYXRUcmFuc2xhdGUsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),

/***/ "./src/wrapper.tsx":
/*!*************************!*\
  !*** ./src/wrapper.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

var defautSettings_1 = __webpack_require__(/*! ./defautSettings */ "./src/defautSettings.ts");

var ArrowDefaultProps = {
  disabledClass: defautSettings_1.defaultProps.arrowDisabledClass
};

var ArrowWrapper = function (_super) {
  __extends(ArrowWrapper, _super);

  function ArrowWrapper() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ArrowWrapper.prototype.render = function () {
    var _a = this.props,
        isDisabled = _a.isDisabled,
        clsName = _a.className,
        disabledClass = _a.disabledClass,
        onClick = _a.onClick,
        children = _a.children;
    var className = clsName + " " + (isDisabled ? disabledClass : '');

    var clickHandler = function clickHandler() {
      return onClick();
    };

    return react_1["default"].createElement("div", {
      className: className,
      onClick: clickHandler
    }, react_1["default"].cloneElement(children, children.props));
  };

  ArrowWrapper.defaultProps = ArrowDefaultProps;
  return ArrowWrapper;
}(react_1["default"].PureComponent);

exports.ArrowWrapper = ArrowWrapper;

exports.innerStyle = function (_a) {
  var translate = _a.translate,
      dragging = _a.dragging,
      mounted = _a.mounted,
      transition = _a.transition,
      inertiaScrolling = _a.inertiaScrolling;
  return {
    transform: "translate3d(" + translate + "px, 0px, 0px)",
    transition: "transform " + (dragging || !mounted ? '0' : transition) + "s" + (inertiaScrolling ? ' ease-out' : ''),
    width: '9900px'
  };
};

var InnerWrapper = function (_super) {
  __extends(InnerWrapper, _super);

  function InnerWrapper() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.setMenuInnerRef = function (value) {
      var setMenuInnerRef = _this.props.setMenuInnerRef;
      setMenuInnerRef({
        menuInner: {
          key: 'menuInner',
          elem: value
        }
      });
    };

    _this.setRef = function (key, elKey, index, value) {
      var _a;

      var setRef = _this.props.setRef;
      setRef((_a = {}, _a[key] = {
        index: index,
        key: elKey,
        elem: value
      }, _a));
    };

    _this.isElementActive = function (itemId, selected) {
      return String(itemId) === String(selected);
    };

    _this.setItems = function (arr, selected) {
      var items = arr.map(function (el) {
        var _a = el.props.onClick,
            _onClick = _a === void 0 ? function () {
          return false;
        } : _a;

        var props = {
          onClick: function onClick() {
            return _this.forwardClickHandler(el.key, _onClick);
          },
          selected: _this.isElementActive(el.key, selected)
        };
        return react_1["default"].cloneElement(el, props);
      });
      return items;
    };

    _this.forwardClickHandler = function (key, onClick) {
      if (onClick === void 0) {
        onClick = function onClick() {
          return false;
        };
      }

      return function () {
        var selectItem = _this.props.onClick;
        onClick();
        selectItem(key);
      };
    };

    return _this;
  }

  InnerWrapper.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        translate = _a.translate,
        dragging = _a.dragging,
        mounted = _a.mounted,
        transition = _a.transition,
        innerWrapperStyle = _a.innerWrapperStyle,
        innerWrapperClass = _a.innerWrapperClass,
        itemStyle = _a.itemStyle,
        itemClass = _a.itemClass,
        itemClassActive = _a.itemClassActive,
        data = _a.data,
        selected = _a.selected,
        inertiaScrolling = _a.inertiaScrolling,
        useButtonRole = _a.useButtonRole;
    var items = this.setItems(data, selected);
    var style = exports.innerStyle({
      dragging: dragging,
      inertiaScrolling: inertiaScrolling,
      mounted: mounted,
      transition: transition,
      translate: translate
    });

    var wrapperStyles = __assign({}, style, innerWrapperStyle);

    return react_1["default"].createElement("div", {
      className: innerWrapperClass,
      style: wrapperStyles,
      ref: function ref(inst) {
        return _this.setMenuInnerRef(inst);
      }
    }, items.map(function (Item, i) {
      return react_1["default"].createElement("div", {
        ref: function ref(inst) {
          return _this.setRef("menuitem-" + i, String(Item.key || ''), i, inst);
        },
        className: itemClass + " " + (Item.props.selected ? itemClassActive : ''),
        key: 'menuItem-' + Item.key,
        style: itemStyle,
        onClick: Item.props.onClick(),
        tabIndex: 1,
        role: useButtonRole ? 'button' : ''
      }, Item);
    }));
  };

  InnerWrapper.defaultProps = {
    data: [],
    dragging: true,
    mounted: false,
    selected: defautSettings_1.defaultProps.selected,
    transition: defautSettings_1.defaultProps.transition,
    translate: defautSettings_1.defaultProps.translate
  };
  return InnerWrapper;
}(react_1["default"].PureComponent);

exports.InnerWrapper = InnerWrapper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CZWxsL0RldmVsb3BtZW50L3JlYWN0LWhvcml6b250YWwtc2Nyb2xsaW5nLW1lbnUvc3JjL3dyYXBwZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUEsT0FBQSxHQUFBLGVBQUEsQ0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLENBQUE7O0FBQ0EsSUFBQSxnQkFBQSxHQUFBLE9BQUEsQ0FBQSxrQkFBQSxDQUFBOztBQVlBLElBQU0saUJBQWlCLEdBQUc7QUFDeEIsRUFBQSxhQUFhLEVBQUUsZ0JBQUEsQ0FBQSxZQUFBLENBQWE7QUFESixDQUExQjs7QUFLQSxJQUFBLFlBQUEsR0FBQSxVQUFBLE1BQUEsRUFBQTtBQUFrQyxFQUFBLFNBQUEsQ0FBQSxZQUFBLEVBQUEsTUFBQSxDQUFBOztBQUFsQyxXQUFBLFlBQUEsR0FBQTs7QUFxQkM7O0FBbkJRLEVBQUEsWUFBQSxDQUFBLFNBQUEsQ0FBQSxNQUFBLEdBQVAsWUFBQTtBQUNRLFFBQUEsRUFBQSxHQUFBLEtBQUEsS0FBQTtBQUFBLFFBQ0osVUFBQSxHQUFBLEVBQUEsQ0FBQSxVQURJO0FBQUEsUUFFSixPQUFBLEdBQUEsRUFBQSxDQUFBLFNBRkk7QUFBQSxRQUdKLGFBQUEsR0FBQSxFQUFBLENBQUEsYUFISTtBQUFBLFFBSUosT0FBQSxHQUFBLEVBQUEsQ0FBQSxPQUpJO0FBQUEsUUFLSixRQUFBLEdBQUEsRUFBQSxDQUFBLFFBTEk7QUFPTixRQUFNLFNBQVMsR0FBTSxPQUFPLEdBQUEsR0FBUCxJQUFXLFVBQVUsR0FBRyxhQUFILEdBQW1CLEVBQXhDLENBQXJCOztBQUNBLFFBQU0sWUFBWSxHQUFHLFNBQWYsWUFBZSxHQUFBO0FBQ25CLGFBQU8sT0FBTyxFQUFkO0FBQ0QsS0FGRDs7QUFJQSxXQUNFLE9BQUEsV0FBQSxDQUFBLGFBQUEsQ0FBQSxLQUFBLEVBQUE7QUFBSyxN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LEVBQWIsQ0FBbkMsRUFBcUQsQ0FBckQsRUFBd0QsSUFBeEQsQ0FBQTtBQUE2RCxTQUZqRTtBQUlFLFFBQUEsU0FBUyxFQUFLLFNBQVMsR0FBQSxHQUFULElBQ1osSUFBSSxDQUFDLEtBQUwsQ0FBVyxRQUFYLEdBQXNCLGVBQXRCLEdBQXdDLEVBRDVCLENBSmhCO0FBT0UsUUFBQSxHQUFHLEVBQUUsY0FBYyxJQUFJLENBQUMsR0FQMUI7QUFRRSxRQUFBLEtBQUssRUFBRSxTQVJUO0FBU0UsUUFBQSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUwsQ0FBVyxPQUFYLEVBVFg7QUFVRSxRQUFBLFFBQVEsRUFBRSxDQVZaO0FBV0UsUUFBQSxJQUFJLEVBQUUsYUFBYSxHQUFHLFFBQUgsR0FBYztBQVhuQyxPQUFBLEVBRHNCLElBQ3RCLENBRHNCO0FBZ0J2QixLQWhCQSxDQUxILENBREY7QUF5QkQsR0F0RE07O0FBMURPLEVBQUEsWUFBQSxDQUFBLFlBQUEsR0FBZTtBQUMzQixJQUFBLElBQUksRUFBRSxFQURxQjtBQUUzQixJQUFBLFFBQVEsRUFBRSxJQUZpQjtBQUczQixJQUFBLE9BQU8sRUFBRSxLQUhrQjtBQUkzQixJQUFBLFFBQVEsRUFBRSxnQkFBQSxDQUFBLFlBQUEsQ0FBYSxRQUpJO0FBSzNCLElBQUEsVUFBVSxFQUFFLGdCQUFBLENBQUEsWUFBQSxDQUFhLFVBTEU7QUFNM0IsSUFBQSxTQUFTLEVBQUUsZ0JBQUEsQ0FBQSxZQUFBLENBQWE7QUFORyxHQUFmO0FBaUhoQixTQUFBLFlBQUE7QUFBQyxDQWxIRCxDQUFrQyxPQUFBLFdBQUEsQ0FBTSxhQUF4QyxDQUFBOztBQUFhLE9BQUEsQ0FBQSxZQUFBLEdBQUEsWUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZGVmYXVsdFByb3BzIH0gZnJvbSAnLi9kZWZhdXRTZXR0aW5ncyc7XG5pbXBvcnQgeyBEYXRhLCBSZWYsIFJlZk9iamVjdCwgVm9pZCB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgQXJyb3dXcmFwcGVyUHJvcHMge1xuICBjbGFzc05hbWU6IHN0cmluZztcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmJhbi10eXBlc1xuICBvbkNsaWNrOiBGdW5jdGlvbjtcbiAgY2hpbGRyZW46IEpTWC5FbGVtZW50O1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICBkaXNhYmxlZENsYXNzPzogc3RyaW5nO1xufVxuXG5jb25zdCBBcnJvd0RlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWRDbGFzczogZGVmYXVsdFByb3BzLmFycm93RGlzYWJsZWRDbGFzcyxcbn07XG5cbi8qKiBXcmFwcGVyIGNvbXBvbmVudCBmb3IgYXJyb3dzICovXG5leHBvcnQgY2xhc3MgQXJyb3dXcmFwcGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBcnJvd1dyYXBwZXJQcm9wcz4ge1xuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wcyA9IEFycm93RGVmYXVsdFByb3BzO1xuICBwdWJsaWMgcmVuZGVyKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gICAgY29uc3Qge1xuICAgICAgaXNEaXNhYmxlZCxcbiAgICAgIGNsYXNzTmFtZTogY2xzTmFtZSxcbiAgICAgIGRpc2FibGVkQ2xhc3MsXG4gICAgICBvbkNsaWNrLFxuICAgICAgY2hpbGRyZW4sXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gYCR7Y2xzTmFtZX0gJHtpc0Rpc2FibGVkID8gZGlzYWJsZWRDbGFzcyA6ICcnfWA7XG4gICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKCk6IFZvaWQgPT4ge1xuICAgICAgcmV0dXJuIG9uQ2xpY2soKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn0+XG4gICAgICAgIHtSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIGNoaWxkcmVuLnByb3BzKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIElubmVyU3R5bGVQcm9wcyB7XG4gIHRyYW5zbGF0ZTogbnVtYmVyO1xuICBkcmFnZ2luZzogYm9vbGVhbjtcbiAgbW91bnRlZDogYm9vbGVhbjtcbiAgdHJhbnNpdGlvbjogbnVtYmVyO1xuICBpbmVydGlhU2Nyb2xsaW5nOiBib29sZWFuO1xufVxuXG4vKiogZnVuY3Rpb24gdG8gZ2V0IGRlZmF1bHQgc3R5bGVzIGZvciBpbm5lcldyYXBwZXIgKi9cbmV4cG9ydCBjb25zdCBpbm5lclN0eWxlID0gKHtcbiAgdHJhbnNsYXRlLFxuICBkcmFnZ2luZyxcbiAgbW91bnRlZCxcbiAgdHJhbnNpdGlvbixcbiAgaW5lcnRpYVNjcm9sbGluZyxcbn06IElubmVyU3R5bGVQcm9wcyk6IENTU1Byb3BlcnRpZXMgPT4ge1xuICByZXR1cm4ge1xuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7dHJhbnNsYXRlfXB4LCAwcHgsIDBweClgLFxuICAgIHRyYW5zaXRpb246XG4gICAgICBgdHJhbnNmb3JtICR7ZHJhZ2dpbmcgfHwgIW1vdW50ZWQgPyAnMCcgOiB0cmFuc2l0aW9ufXNgICtcbiAgICAgIChpbmVydGlhU2Nyb2xsaW5nID8gJyBlYXNlLW91dCcgOiAnJyksXG4gICAgd2lkdGg6ICc5OTAwcHgnLFxuICB9O1xufTtcblxuaW50ZXJmYWNlIElubmVyV3JhcHBlclByb3BzIHtcbiAgZGF0YTogRGF0YTtcbiAgLy8gc2V0UmVmOiBGdW5jdGlvbjtcbiAgc2V0UmVmOiAocmVmOiBSZWZPYmplY3QpID0+IFZvaWQ7XG4gIHNldE1lbnVJbm5lclJlZjogKGFyZzA6IGFueSkgPT4gVm9pZDtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmJhbi10eXBlc1xuICBvbkNsaWNrOiBGdW5jdGlvbjtcbiAgdHJhbnNsYXRlOiBudW1iZXI7XG4gIGRyYWdnaW5nOiBib29sZWFuO1xuICBtb3VudGVkOiBib29sZWFuO1xuICB0cmFuc2l0aW9uOiBudW1iZXI7XG4gIHNlbGVjdGVkOiBzdHJpbmcgfCBudW1iZXI7XG4gIGlubmVyV3JhcHBlclN0eWxlOiBvYmplY3Q7XG4gIGlubmVyV3JhcHBlckNsYXNzOiBzdHJpbmc7XG4gIGl0ZW1TdHlsZTogb2JqZWN0O1xuICBpdGVtQ2xhc3M6IHN0cmluZztcbiAgaXRlbUNsYXNzQWN0aXZlOiBzdHJpbmc7XG4gIGluZXJ0aWFTY3JvbGxpbmc6IGJvb2xlYW47XG4gIHVzZUJ1dHRvblJvbGU6IGJvb2xlYW47XG59XG5cbi8vICoqIGlubmVyV3JhcHBlciBjb21wb25lbnQsIG1lbnVJdGVtcyB3aWxsIGJlIGNoaWxkcmVuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWNsYXNzZXMtcGVyLWZpbGVcbmV4cG9ydCBjbGFzcyBJbm5lcldyYXBwZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PElubmVyV3JhcHBlclByb3BzLCB7fT4ge1xuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkYXRhOiBbXSxcbiAgICBkcmFnZ2luZzogdHJ1ZSxcbiAgICBtb3VudGVkOiBmYWxzZSxcbiAgICBzZWxlY3RlZDogZGVmYXVsdFByb3BzLnNlbGVjdGVkLFxuICAgIHRyYW5zaXRpb246IGRlZmF1bHRQcm9wcy50cmFuc2l0aW9uLFxuICAgIHRyYW5zbGF0ZTogZGVmYXVsdFByb3BzLnRyYW5zbGF0ZSxcbiAgfTtcblxuICAvKiogc2V0IHJlZiBvZiB0aGlzIGNvbXBvbmVudCAqL1xuICBwdWJsaWMgc2V0TWVudUlubmVyUmVmID0gKHZhbHVlOiBIVE1MRGl2RWxlbWVudCB8IG51bGwpOiBWb2lkID0+IHtcbiAgICBjb25zdCB7IHNldE1lbnVJbm5lclJlZiB9ID0gdGhpcy5wcm9wcztcbiAgICBzZXRNZW51SW5uZXJSZWYoeyBtZW51SW5uZXI6IHsga2V5OiAnbWVudUlubmVyJywgZWxlbTogdmFsdWUgfSB9KTtcbiAgfVxuXG4gIC8qKiBzZXQgcmVmIGZvciBtZW51SXRlbXMgKi9cbiAgcHVibGljIHNldFJlZiA9IChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBlbEtleTogc3RyaW5nLFxuICAgIGluZGV4OiBudW1iZXIsXG4gICAgdmFsdWU6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCxcbiAgKTogVm9pZCA9PiB7XG4gICAgY29uc3QgeyBzZXRSZWYgfSA9IHRoaXMucHJvcHM7XG4gICAgc2V0UmVmKHsgW2tleV06IHsgaW5kZXgsIGtleTogZWxLZXksIGVsZW06IHZhbHVlIH0gfSk7XG4gIH1cblxuICAvKiogY2hlY2sgaWYgbWVudUl0ZW0gYWN0aXZlICovXG4gIHB1YmxpYyBpc0VsZW1lbnRBY3RpdmUgPSAoXG4gICAgaXRlbUlkOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsLFxuICAgIHNlbGVjdGVkOiBzdHJpbmcgfCBudW1iZXIsXG4gICk6IGJvb2xlYW4gPT4gU3RyaW5nKGl0ZW1JZCkgPT09IFN0cmluZyhzZWxlY3RlZClcblxuICAvKiogbWFrZSBhcnJheSBvZiBtZW51SXRlbXMgKi9cbiAgcHVibGljIHNldEl0ZW1zID0gKFxuICAgIGFycjogSlNYLkVsZW1lbnRbXSxcbiAgICBzZWxlY3RlZDogUmVhY3QuUmVhY3RUZXh0LFxuICApOiBKU1guRWxlbWVudFtdID0+IHtcbiAgICBjb25zdCBpdGVtcyA9IGFyci5tYXAoZWwgPT4ge1xuICAgICAgY29uc3QgeyBvbkNsaWNrID0gKCkgPT4gZmFsc2UgfSA9IGVsLnByb3BzO1xuICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuZm9yd2FyZENsaWNrSGFuZGxlcihlbC5rZXksIG9uQ2xpY2spLFxuICAgICAgICBzZWxlY3RlZDogdGhpcy5pc0VsZW1lbnRBY3RpdmUoZWwua2V5LCBzZWxlY3RlZCksXG4gICAgICB9O1xuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChlbCwgcHJvcHMpO1xuICAgIH0pO1xuICAgIHJldHVybiBpdGVtcztcbiAgfVxuXG4gIHB1YmxpYyBmb3J3YXJkQ2xpY2tIYW5kbGVyID0gKFxuICAgIGtleTogYW55LFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpiYW4tdHlwZXNcbiAgICBvbkNsaWNrOiBGdW5jdGlvbiA9ICgpID0+IGZhbHNlLFxuICApID0+ICgpOiBWb2lkID0+IHtcbiAgICBjb25zdCB7IG9uQ2xpY2s6IHNlbGVjdEl0ZW0gfSA9IHRoaXMucHJvcHM7XG4gICAgb25DbGljaygpO1xuICAgIHNlbGVjdEl0ZW0oa2V5KTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdHJhbnNsYXRlLFxuICAgICAgZHJhZ2dpbmcsXG4gICAgICBtb3VudGVkLFxuICAgICAgdHJhbnNpdGlvbixcbiAgICAgIGlubmVyV3JhcHBlclN0eWxlLFxuICAgICAgaW5uZXJXcmFwcGVyQ2xhc3MsXG4gICAgICBpdGVtU3R5bGUsXG4gICAgICBpdGVtQ2xhc3MsXG4gICAgICBpdGVtQ2xhc3NBY3RpdmUsXG4gICAgICBkYXRhLFxuICAgICAgc2VsZWN0ZWQsXG4gICAgICBpbmVydGlhU2Nyb2xsaW5nLFxuICAgICAgdXNlQnV0dG9uUm9sZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5zZXRJdGVtcyhkYXRhLCBzZWxlY3RlZCk7XG5cbiAgICBjb25zdCBzdHlsZTogQ1NTUHJvcGVydGllcyA9IGlubmVyU3R5bGUoe1xuICAgICAgZHJhZ2dpbmcsXG4gICAgICBpbmVydGlhU2Nyb2xsaW5nLFxuICAgICAgbW91bnRlZCxcbiAgICAgIHRyYW5zaXRpb24sXG4gICAgICB0cmFuc2xhdGUsXG4gICAgfSk7XG5cbiAgICBjb25zdCB3cmFwcGVyU3R5bGVzID0geyAuLi5zdHlsZSwgLi4uaW5uZXJXcmFwcGVyU3R5bGUgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17aW5uZXJXcmFwcGVyQ2xhc3N9XG4gICAgICAgIHN0eWxlPXt3cmFwcGVyU3R5bGVzfVxuICAgICAgICByZWY9e2luc3QgPT4gdGhpcy5zZXRNZW51SW5uZXJSZWYoaW5zdCl9XG4gICAgICA+XG4gICAgICAgIHtpdGVtcy5tYXAoKEl0ZW0sIGkpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByZWY9e2luc3QgPT5cbiAgICAgICAgICAgICAgdGhpcy5zZXRSZWYoYG1lbnVpdGVtLSR7aX1gLCBTdHJpbmcoSXRlbS5rZXkgfHwgJycpLCBpLCBpbnN0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpdGVtQ2xhc3N9ICR7XG4gICAgICAgICAgICAgIEl0ZW0ucHJvcHMuc2VsZWN0ZWQgPyBpdGVtQ2xhc3NBY3RpdmUgOiAnJ1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICBrZXk9eydtZW51SXRlbS0nICsgSXRlbS5rZXl9XG4gICAgICAgICAgICBzdHlsZT17aXRlbVN0eWxlfVxuICAgICAgICAgICAgb25DbGljaz17SXRlbS5wcm9wcy5vbkNsaWNrKCl9XG4gICAgICAgICAgICB0YWJJbmRleD17MX1cbiAgICAgICAgICAgIHJvbGU9e3VzZUJ1dHRvblJvbGUgPyAnYnV0dG9uJyA6ICcnfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtJdGVtfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=

/***/ }),

/***/ "react":
/*!*****************************************************!*\
  !*** external {"root":"React","commonjs2":"react"} ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map