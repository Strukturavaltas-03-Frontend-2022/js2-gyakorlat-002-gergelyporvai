/* - A `01/solution/js/summarize.js` fájlban dolgozz!
- Készíts egy függvényt `summarize` néven!
- Ez a paraméterként kapott tetszőleges darabszámú, tetszőleges értékű egész számot összeadja, és visszatér az összeadás végeredményével. 
- A paraméterként kapott értékek egyszerű number típusúak legyenek! 
- Amennyiben bármelyik paraméter értéke vagy a részeredmény meghaladja a biztonságos tartományt, automatikusan konvertáljad
`BigInt`-be, és természetesen a visszatérési érték is `BigInt` típusú legyen! */

const summarize = (...numbers) => {
  let sum = 0;
  numbers
    .map((num) => (num === Math.trunc(num) ? num : 0))
    .map((num) => {
      num > Number.MAX_SAFE_INTEGER || sum > Number.MAX_SAFE_INTEGER
        ? (sum = BigInt(sum) + BigInt(num))
        : (sum += num);
    });

  return sum;
};

export default summarize;
