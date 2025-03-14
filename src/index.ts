const lang: string = "TypeScript";
const greeting: string = `Hello, ${lang}!`;
console.log(greeting);


import { isTriplet } from "./pythagoras";

function findTriplets(limit: number): void {
    for (let a = 1; a <= limit; a++) {
        for (let b = a; b <= limit; b++) {
            for (let c = b; c <= limit; c++) {
                if (isTriplet(a, b, c)) {
                    console.log(`Gefundenes Triplet: (${a}, ${b}, ${c})`);
                }
            }
        }
    }
}

findTriplets(50); // Suche nach Triplets bis 50
