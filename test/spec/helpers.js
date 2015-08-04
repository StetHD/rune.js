// Provides an easy way to extend a mixin into a
// an object for testing.
function newMixin() {
  var Mixed = function() {};
  _.each(arguments, function(mixin) {
    _.extend(Mixed.prototype, mixin);
  });
  return new Mixed();
}

// In order to not constantly keep track of what mixins each
// object has, we can call this helper that automatically
// checks what mixins the shape has, and sets some default
// values for each mixin property.

function setMixinVars(shape) {
  if(shape.moveable) {
    setMoveableVars(shape)
  }
  if(shape.sizeable) {
    setSizeableVars(shape)
  }
  if(shape.styleable) {
    setStyleableVars(shape)
  }
}

function setMoveableVars(shape) {
  shape.vars.x = 10;
  shape.vars.y = 15;
  shape.vars.rotation = 45;
  shape.vars.rotationX = 100;
  shape.vars.rotationY = 105;
}

function setSizeableVars(shape) {
  shape.vars.width = 300;
  shape.vars.height = 305;
}

function setStyleableVars(shape) {
  shape.vars.fill = new Color().rgb(255, 0, 0);
  shape.vars.stroke = new Color().rgb(0, 255, 0);
}

function setAllAnchors(path) {
  path.lineTo(104, 105)
    .lineTo(106, 107, true)
    .moveTo(100, 101)
    .moveTo(102, 103, true)
    .curveTo(108, 109, 110, 111, 112, 113) // cubic
    .curveTo(114, 115, 116, 117, 118, 119, true) // cubic relative
    .curveTo(120, 121, 122, 123) // quad
    .curveTo(124, 125, 126, 127, true) // quad relative
    .curveTo(128, 129) // quad shorthand
    .curveTo(130, 131, true) // quad shorthand relative
    .closeShape();
}