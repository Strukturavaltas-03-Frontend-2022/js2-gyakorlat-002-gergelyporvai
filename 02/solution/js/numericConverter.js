/* - A `02/solution/js/numericConverter.js` fájlban dolgozz!
- Készíts egy függvényt `numericConverter` néven!
- Ez a paraméterként megadott tízes számrendszerbeli számot átkonvertálja kettes, nyolcas és tizenhatos
számrendszerbe is.
- Ezeket az értékeket egy objektumban add vissza. A property-k neve legyen: binary, octal, hexa. */

const numericConverter = (number) => {
  return {
    binary: number.toString(2),
    octal: number.toString(8),
    hexa: number.toString(16),
  };
};

//0b${number}, octal: 0o${number}, hexa: 0x${number},

export default numericConverter;
