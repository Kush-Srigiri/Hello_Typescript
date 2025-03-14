import { roundTo } from "./rounding";

test("check round to nickels", () => {
  expect(roundTo(10.0 / 3.0, 0.05)).toBe(3.35);
});

test("Rundung auf 0.01 (Cents)", () => {
    expect(roundTo(1.234, 0.01)).toBe(1.23);
    expect(roundTo(1.236, 0.01)).toBe(1.24);
});

test("Rundung auf 0.1 (Dimes)", () => {
    expect(roundTo(1.24, 0.1)).toBe(1.2);
    expect(roundTo(1.25, 0.1)).toBe(1.3);
});



