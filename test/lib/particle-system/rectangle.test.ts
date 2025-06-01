import { describe, expect, test } from "vitest";
import { Rectangle } from "../../../src/lib/particle-system/rectangle";
import { Vector2D } from "../../../src/lib/particle-system/vector2d";

test("toString", () => {
  const rect = new Rectangle(1, 2, 3, 4);
  expect(rect.toString()).toEqual("(x: 1, y: 2, w: 3, h: 4)");
});

describe("pointInside", () => {
  type TestCase = {
    name: string;
    rect: Rectangle;
    v: Vector2D;
    expected: boolean;
  };
  const testCases: TestCase[] = [
    {
      name: "point in the middle",
      rect: new Rectangle(1, 1, 2, 2),
      v: new Vector2D(2, 2),
      expected: true,
    },
    {
      name: "point to the east",
      rect: new Rectangle(1, 1, 2, 2),
      v: new Vector2D(4, 2),
      expected: false,
    },
    {
      name: "point to the west",
      rect: new Rectangle(1, 1, 2, 2),
      v: new Vector2D(0, 2),
      expected: false,
    },
    {
      name: "point to the north",
      rect: new Rectangle(1, 1, 2, 2),
      v: new Vector2D(2, 4),
      expected: false,
    },
    {
      name: "point to the south",
      rect: new Rectangle(1, 1, 2, 2),
      v: new Vector2D(2, 0),
      expected: false,
    },
    {
      name: "point on top right corner",
      rect: new Rectangle(1, 1, 2, 2),
      v: new Vector2D(3, 3),
      expected: false,
    },
    {
      name: "point on top left corner",
      rect: new Rectangle(1, 1, 2, 2),
      v: new Vector2D(1, 3),
      expected: false,
    },
    {
      name: "point on bottom right corner",
      rect: new Rectangle(1, 1, 2, 2),
      v: new Vector2D(3, 1),
      expected: false,
    },
    {
      name: "point on bottom left corner",
      rect: new Rectangle(1, 1, 2, 2),
      v: new Vector2D(1, 1),
      expected: true,
    },
  ];
  testCases.forEach((tc) =>
    test(tc.name, () => {
      expect(Rectangle.pointInside(tc.rect, tc.v)).toEqual(tc.expected);
    })
  );
});

test("subdivide", () => {
  const rect = new Rectangle(0, 0, 100, 100);
  const expected = [
    new Rectangle(0, 0, 50, 50),
    new Rectangle(50, 0, 50, 50),
    new Rectangle(50, 50, 50, 50),
    new Rectangle(0, 50, 50, 50),
  ];
  expect(Rectangle.subdivide(rect)).toEqual(expected);
});

test("intersect", () => {
  const rect1 = new Rectangle(0, 0, 100, 100);
  const rect2 = new Rectangle(50, 50, 50, 50);
  expect(Rectangle.intersect(rect1, rect2)).toEqual(true);
});
