import { round } from "./utils";

test("Rundung auf 0.01 (Cents)", () => {
    expect(round(1.234, 0.01)).toBe(1.23);
    expect(round(1.236, 0.01)).toBe(1.24);
});

test("Rundung auf 0.1 (Dimes)", () => {
    expect(round(1.24, 0.1)).toBe(1.2);
    expect(round(1.25, 0.1)).toBe(1.3);
});
