import { expect, test } from "vitest";
import { Vector2D } from "../../../src/lib/particle-system/vector2d";

test("toString", () => {
  const v = new Vector2D(1, 2);
  expect(v.toString()).toEqual("(1, 2)");
});

test("add", () => {
  const v1 = new Vector2D(1, 2);
  const v2 = new Vector2D(3, 4);
  const expected = new Vector2D(4, 6);

  expect(Vector2D.add(v1, v2)).toEqual(expected);
});

test("sub", () => {
  const v1 = new Vector2D(1, 2);
  const v2 = new Vector2D(3, 4);
  const expected = new Vector2D(-2, -2);

  expect(Vector2D.sub(v1, v2)).toEqual(expected);
});

test("scalarDist", () => {
  const v1 = new Vector2D(1, 2);
  const v2 = new Vector2D(3, 4);
  const expected = Math.sqrt(8);

  expect(Vector2D.scalarDistance(v1, v2)).toEqual(expected);
});

test("withinDist", () => {
  const v1 = new Vector2D(1, 2);
  const v2 = new Vector2D(3, 4);

  expect(Vector2D.withinDistance(v1, v2, 3)).toEqual(true);
  expect(Vector2D.withinDistance(v1, v2, Math.sqrt(8))).toEqual(true);
  expect(Vector2D.withinDistance(v1, v2, 2)).toEqual(false);
});

test("dot", () => {
  const v1 = new Vector2D(1, 2);
  const v2 = new Vector2D(3, 4);
  expect(Vector2D.dot(v1, v2)).toEqual(11);
});

test("reflect", () => {
  const v1 = new Vector2D(1, 2);
  const v2 = new Vector2D(-1, 0);
  expect(Vector2D.reflect(v1, v2)).toEqual(new Vector2D(-1, 2));
});
