import { describe, expect, test } from "vitest";
import { Vector2D } from "../../../src/lib/particle-system/vector2d";
import { pointInCircle } from "../../../src/lib/particle-system/collisions";

describe("pointInCircle", () => {
  type TestCase = {
    name: string;
    point: Vector2D;
    position: Vector2D;
    radius: number;
    expected: boolean;
  };

  const testCases: TestCase[] = [
    {
      name: "inside circle",
      point: new Vector2D(1, 1),
      position: new Vector2D(0, 0),
      radius: 2,
      expected: true,
    },
    {
      name: "outside circle",
      point: new Vector2D(2, 2),
      position: new Vector2D(0, 0),
      radius: 2,
      expected: false,
    },
    {
      name: "edge of circle",
      point: new Vector2D(0, 2),
      position: new Vector2D(0, 0),
      radius: 2,
      expected: true,
    },
  ];

  console.log(testCases);
  testCases.forEach((tc) =>
    test(tc.name, () => {
      expect(pointInCircle(tc.point, tc.position, tc.radius)).toEqual(
        tc.expected
      );
    })
  );
});
