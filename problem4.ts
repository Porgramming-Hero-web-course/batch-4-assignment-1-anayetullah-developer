type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  height: number;
  width: number;
};

type shape = Circle | Rectangle;

function calculateShapeArea(shape: shape) :number {
  if (shape.shape === "circle") {
    const circleArea = Math.PI * shape.radius * shape.radius;
    return parseFloat(circleArea.toFixed(2));
  } else if (shape.shape === "rectangle") {
    const rectangleArea = shape.width * shape.height;
    return rectangleArea;
  }
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});
console.log(circleArea);
console.log(rectangleArea);
