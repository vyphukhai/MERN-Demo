"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawTable = void 0;
const string_width_1 = __importDefault(require("string-width"));
const drawBorder_1 = require("./drawBorder");
const drawContent_1 = require("./drawContent");
const drawHeader_1 = require("./drawHeader");
const drawRow_1 = require("./drawRow");
const utils_1 = require("./utils");
const drawTable = (rows, columnWidths, rowHeights, config) => {
    const { drawHorizontalLine, singleLine, } = config;
    const contents = (0, utils_1.groupBySizes)(rows, rowHeights).map((group) => {
        return group.map((row) => {
            return (0, drawRow_1.drawRow)(row, config);
        }).join('');
    });
    if (config.header) {
        // assume that topLeft/right border have width = 1
        const headerWidth = (0, string_width_1.default)((0, drawRow_1.drawRow)(rows[0], config)) - 2 -
            config.header.paddingLeft - config.header.paddingRight;
        const header = (0, drawHeader_1.drawHeader)(headerWidth, config);
        contents.unshift(header);
    }
    return (0, drawContent_1.drawContent)(contents, {
        drawSeparator: (index, size) => {
            // Top/bottom border
            if (index === 0 || index === size) {
                return drawHorizontalLine(index, size);
            }
            return !singleLine && drawHorizontalLine(index, size);
        },
        separatorGetter: (0, drawBorder_1.createTableBorderGetter)(columnWidths, config),
    });
};
exports.drawTable = drawTable;
//# sourceMappingURL=drawTable.js.map