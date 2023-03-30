var $igBWk$handlebarsdisthandlebarsruntime = require("handlebars/dist/handlebars.runtime");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $9ce8f81d8b5a7736$export$2e2bcd8739ae039);

const $9ce8f81d8b5a7736$var$templateFunction = (0, ($parcel$interopDefault($igBWk$handlebarsdisthandlebarsruntime))).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '---\r\nid: "root"\r\n---\r\n<html>\r\n<head>\r\n    <title>1 Спринт: чат</title>\r\n    <script src="src/index.js" type="module"></script>\r\n</head>\r\n<body>\r\n<div id="' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "id",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 10,
                    "column": 9
                },
                "end": {
                    "line": 10,
                    "column": 17
                }
            }
        }) : helper)) + '"></div>\r\n</body>\r\n</html> ';
    },
    "useData": true
});
var $9ce8f81d8b5a7736$export$2e2bcd8739ae039 = $9ce8f81d8b5a7736$var$templateFunction;


//# sourceMappingURL=index.js.map
