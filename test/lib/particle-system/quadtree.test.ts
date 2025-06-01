import { describe, expect, test } from "vitest";
import { QuadTree } from "../../../src/lib/particle-system/quadtree";
import { Rectangle } from "../../../src/lib/particle-system/rectangle";
import { Particle } from "../../../src/lib/particle-system/particle";
import { Vector2D } from "../../../src/lib/particle-system/vector2d";

test("subdivide", () => {
  const qt = new QuadTree(new Rectangle(0, 0, 100, 100), 0);
  qt.subdivide();
  expect(qt.children?.every((child) => child.depth == 1)).toEqual(true);
  expect(qt.children?.map((child) => child.boundary)).toEqual([
    new Rectangle(0, 0, 50, 50),
    new Rectangle(50, 0, 50, 50),
    new Rectangle(50, 50, 50, 50),
    new Rectangle(0, 50, 50, 50),
  ]);
});

describe("insert", () => {
  const particles = [
    new Particle(new Vector2D(25, 25)),
    new Particle(new Vector2D(75, 25)),
    new Particle(new Vector2D(75, 75)),
    new Particle(new Vector2D(25, 75)),
  ];

  test("beneath capacity", () => {
    const qt = new QuadTree(new Rectangle(0, 0, 100, 100), 4);
    particles.forEach((p) => qt.insert(p));
    expect(qt.points).toEqual(particles);
  });

  test("above capacity", () => {
    const qt = new QuadTree(new Rectangle(0, 0, 100, 100), 3);
    particles.forEach((p) => qt.insert(p));
    expect(qt.points).toBeNull();
    expect(qt.children!.map((child) => child.points![0])).toEqual(particles);
  });

  test("recursive insert", () => {
    const qt = new QuadTree(new Rectangle(0, 0, 200, 200), 2);
    particles.forEach((p) => qt.insert(p));
    expect(qt.points).toBeNull();
    expect(qt.children![0].children!.map((child) => child.points![0])).toEqual(
      particles
    );
  });
});

describe("query", () => {
  const particles = [
    new Particle(new Vector2D(25, 25)),
    new Particle(new Vector2D(75, 25)),
    new Particle(new Vector2D(75, 75)),
    new Particle(new Vector2D(25, 75)),
  ];

  test("query rect", () => {
    const qt = new QuadTree(new Rectangle(0, 0, 100, 100), 4);
    particles.forEach((p) => qt.insert(p));
    expect(qt.query(new Rectangle(25, 25, 51, 51))).toEqual(particles);
    expect(qt.query(new Rectangle(25, 25, 30, 30))).toEqual(
      particles.slice(0, 1)
    );
  });

  test("query sphere", () => {
    const qt = new QuadTree(new Rectangle(0, 0, 100, 100), 4);
    particles.forEach((p) => qt.insert(p));
    expect(qt.queryCircle(new Vector2D(50, 50), 50)).toEqual(particles);
    expect(qt.queryCircle(new Vector2D(50, 50), 10)).toEqual([]);
    expect(qt.queryCircle(new Vector2D(50, 0), 50)).toEqual(
      particles.slice(0, 2)
    );
  });
});
