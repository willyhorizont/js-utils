const rangeInclusive = (startNumber, stopNumber) => Array.from({ length: (Math.abs(stopNumber - startNumber) + 1) }, (_, i) => ((startNumber < stopNumber) ? (startNumber + i) : ((startNumber > stopNumber) ? (startNumber - i) : startNumber)));

export { rangeInclusive };
