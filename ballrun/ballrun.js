var ballObject = {}
function constructBall() {
  // When this function runs, we should:
  // - add defaults to the ballObject
  //      radius
  //      position ({x: 250, y: 250})
  //      color
  //      velocity ({x: 10, y: 0})
  //      domElement (document.querySelector("#ball"))
  ballObject.radius =  70;
  ballObject.position = {x: 270, y: 260};
  ballObject.color =  "green";
  ballObject.velocity =  {x: 20, y: 0};
  ballObject.domElement =  document.querySelector(".ball");
  // Add the following starting styles to the domElement:
  //  - width = radius + "px"
  //  - height = radius + "px"
  //  - backgroundColor = color
  //  - top = position.y + "px"
  //  - left = position.x + "px"
  ballObject.domElement.style.width = ballObject.radius + "px";
  ballObject.domElement.style.height = ballObject.radius + "px";
  ballObject.domElement.style.backgroundColor = ballObject.color;
  ballObject.domElement.style.top = ballObject.position.y + "px";
  ballObject.domElement.style.left = ballObject.position.x + "px";
}
function move() {
  setPosition();
  drawPosition();
}
function setPosition() {
  // When this function runs, we need to:
  //   - update the properties of the ballObject
  //   - run the drawPosition() function
  // The position of the ball should be the current position plus the velocity.
  ballObject.position.x = ballObject.position.x + ballObject.velocity.x;
  ballObject.position.y = ballObject.position.y + ballObject.velocity.y;
}
function drawPosition() {
  // When this function runs, we need to:
  //   - use the properties of the ballObject to update the style of the ball domElement
  // Remember that CSS requires a string with "px" at the end. You can use x + "px"
  ballObject.domElement.style.top = ballObject.position.y + "px";
  ballObject.domElement.style.left = ballObject.position.x + "px";
}
var ballrun = {}
function constructBall2() {
  // When this function runs, we should:
  // - add defaults to the ballObject
  //      radius
  //      position ({x: 250, y: 250})
  //      color
  //      velocity ({x: 10, y: 0})
  //      domElement (document.querySelector("#ball"))
  ballrun.radius =  100;
  ballrun.position = {x: 320, y: 360};
  ballrun.color =  "yellow";
  ballrun.velocity =  {x: -15, y: 0};
  ballrun.domElement =  document.querySelector(".ball2");
  ballrun.domElement.style.width = ballrun.radius + "px";
  ballrun.domElement.style.height = ballrun.radius + "px";
  ballrun.domElement.style.backgroundColor = ballrun.color;
  ballrun.domElement.style.top = ballrun.position.y + "px";
  ballrun.domElement.style.left = ballrun.position.x + "px";
}
function move2() {
  setPosition2();
  drawPosition2();
}
function setPosition2() {
  ballrun.position.x = ballrun.position.x + ballrun.velocity.x;
  ballrun.position.y = ballrun.position.y + ballrun.velocity.y;
}
function drawPosition2() {
  // When this function runs, we need to:
  //   - use the properties of the ballObject to update the style of the ball domElement
  // Remember that CSS requires a string with "px" at the end. You can use x + "px"
  ballrun.domElement.style.top = ballrun.position.y + "px";
  ballrun.domElement.style.left = ballrun.position.x + "px";
}