const isObject = (anything) => (Object.prototype.toString.call(anything) === "[object Object]");

export { isObject };
