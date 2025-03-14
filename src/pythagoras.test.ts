import { isTriplet } from "./pythagoras";

test("Soll true zurückgeben für 3, 4, 5", () => {
    expect(isTriplet(3, 4, 5)).toBe(true);
});

test("Soll false zurückgeben für 3, 4, 6", () => {
    expect(isTriplet(3, 4, 6)).toBe(false);
});
