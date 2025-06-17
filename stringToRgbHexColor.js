const stringToRgbHexColor = (theString) => {
    let theHash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; (i < theString.length); i += 1) {
        theHash = theString.charCodeAt(i) + ((theHash << 5) - theHash);
    }

    let rgbHexColor = "#";

    for (i = 0; i < 3; i += 1) {
        rgbHexColor += `00${((theHash >> (i * 8)) & 0xff).toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return rgbHexColor;
};

export { stringToRgbHexColor };
