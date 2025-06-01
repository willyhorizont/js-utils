import { jsType } from "./jsType.js";
import { isNull } from "./isNull.js";
import { isBoolean } from "./isBoolean.js";
import { isString } from "./isString.js";
import { isNumeric } from "./isNumeric.js";
import { isObject } from "./isObject.js";
import { isArray } from "./isArray.js";
import { isFunction } from "./isFunction.js";

const getType = (anything) => ((isNull(anything) === true) ? jsType.Null : ((isBoolean(anything) === true) ? jsType.Boolean : ((isString(anything) === true) ? jsType.String : ((isNumeric(anything) === true) ? jsType.Numeric : ((isObject(anything) === true) ? jsType.Object : ((isArray(anything) === true) ? jsType.Array : ((isFunction(anything) === true) ? jsType.Function : Object.prototype.toString.call(anything))))))));

export { getType };
