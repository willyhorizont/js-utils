const removeDuplicateItems = (anyArray, callbackFunction = (anyArrayItem) => anyArrayItem) => {
    const uniqueKeyMap = new Map();
    const uniqueArray = [];

    anyArray.forEach((anyArrayItem) => {
        const newUniqueKeyString = callbackFunction(anyArrayItem);
        uniqueKeyMap.set(newUniqueKeyString, anyArrayItem);
        uniqueArray.push(anyArrayItem);
    });

    return uniqueArray;
};

export { removeDuplicateItems };
