(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./add", "./multipl", "./minus"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.__minus = exports.__multiple = exports.__add = void 0;
    var add_1 = require("./add");
    Object.defineProperty(exports, "__add", { enumerable: true, get: function () { return add_1.__add; } });
    var multipl_1 = require("./multipl");
    Object.defineProperty(exports, "__multiple", { enumerable: true, get: function () { return multipl_1.__multiple; } });
    var minus_1 = require("./minus");
    Object.defineProperty(exports, "__minus", { enumerable: true, get: function () { return minus_1.__minus; } });
});
//# sourceMappingURL=index.js.map