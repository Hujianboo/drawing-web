"use strict";
exports.__esModule = true;
/*
 * @Author: hujianbo
 * @LastEditors: Hujianbo
 */
var react_1 = require("react");
var useDraggable = function () {
    var target = (0, react_1.useRef)(null);
    var dragging = (0, react_1.useRef)(false);
    var startPos = (0, react_1.useRef)([0, 0]);
    var diffVector = (0, react_1.useRef)([0, 0]);
    var setTransform = (0, react_1.useCallback)(function (nums) {
        target.current.style.transform = "translate3d(".concat(nums[0], "px,").concat(nums[1], "px,0)");
    }, []);
    var handleStart = (0, react_1.useCallback)(function (e) {
        var _a = diffVector.current, diffX = _a[0], diffY = _a[1];
        startPos.current = [e.clientX - diffX, e.clientY - diffY];
        dragging.current = true;
    }, []);
    var handleMove = (0, react_1.useCallback)(function (e) {
        if (dragging.current) {
            diffVector.current = [e.clientX - startPos.current[0], e.clientY - startPos.current[1]];
            setTransform([diffVector.current[0], diffVector.current[1]]);
        }
        else {
            return;
        }
    }, []);
    var handleEnd = (0, react_1.useCallback)(function (e) {
        dragging.current = false;
    }, []);
    (0, react_1.useEffect)(function () {
        var dom = target.current;
        if (dom) {
            dom.addEventListener('mousedown', handleStart);
            document.addEventListener('mousemove', handleMove);
            document.addEventListener('mouseup', handleEnd);
        }
        return function () {
            dom === null || dom === void 0 ? void 0 : dom.removeEventListener('mousedown', handleStart);
            document.removeEventListener('mousemove', handleMove);
            document.removeEventListener('mouseup', handleEnd);
        };
    }, []);
    return { target: target };
};
exports["default"] = useDraggable;
