const isFunction = (anything) => (Object.prototype.toString.call(anything) === "[object Function]");

export { isFunction };
