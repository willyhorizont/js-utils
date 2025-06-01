const isString = (anything) => (Object.prototype.toString.call(anything) === "[object String]");

export { isString };
