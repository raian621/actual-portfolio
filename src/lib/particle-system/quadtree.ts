import { pointInCircle } from "./collisions";
import type { Particle } from "./particle";
import { Rectangle } from "./rectangle";
import type { Vector2D } from "./vector2d";

export class QuadTree {
  boundary: Rectangle;
  points: Particle[] | null;
  children: QuadTree[] | null;
  capacity: number;
  depth: number;
  maxDepth: number; // used to avoid infinite subdivisions

  constructor(
    boundary: Rectangle,
    capacity: number,
    depth: number = 0,
    maxDepth: number = 1000
  ) {
    this.boundary = boundary;
    this.capacity = capacity;
    this.points = [];
    this.children = null;
    this.depth = depth;
    this.maxDepth = maxDepth;
  }

  insert(point: Particle) {
    if (this.points == null && this.children != null) {
      // we know this is not a leaf node, traverse tree until we find a root
      // node
      for (let child of this.children) {
        if (Rectangle.pointInside(child.boundary, point.position)) {
          child.insert(point);
          return;
        }
      }
    } else if (
      this.points!.length < this.capacity ||
      this.depth == this.maxDepth
    ) {
      this.points!.push(point);
    } else {
      this.points!.push(point);
      this.subdivide();
    }
  }

  subdivide() {
    this.children = Rectangle.subdivide(this.boundary).map(
      (r) => new QuadTree(r, this.capacity, this.depth + 1, this.maxDepth)
    );
    this.points?.forEach((point) =>
      this.children?.forEach((child) => {
        if (Rectangle.pointInside(child.boundary, point.position)) {
          child.insert(point);
        }
      })
    );
    this.points = null;
  }

  query(range: Rectangle): Particle[] {
    if (this.points != null) {
      return this.points.filter((p) =>
        Rectangle.pointInside(range, p.position)
      );
    }
    return this.children!.filter((child) =>
      Rectangle.intersect(child.boundary, range)
    ).reduce((particles: Particle[], child) => {
      return particles.concat(child.query(range));
    }, []);
  }

  queryCircle(origin: Vector2D, radius: number): Particle[] {
    return this.query(
      new Rectangle(
        origin.x - radius,
        origin.y - radius,
        2 * radius,
        2 * radius
      )
    ).filter((p) => pointInCircle(p.position, origin, radius));
  }
}
