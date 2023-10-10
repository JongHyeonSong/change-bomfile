(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.__multiple = void 0;
    const __multiple = (a, b) => {
        return a + b;
    };
    exports.__multiple = __multiple;
});
//# sourceMappingURL=multipl.js.map