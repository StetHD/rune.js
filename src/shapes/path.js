(function(Rune) {

  var Path = Rune.Path = function(x, y) {

    this.moveable();
    this.styleable();

    this.vars.anchors = [];
    if(x > 0) this.vars.x = x;
    if(y > 0) this.vars.y = y;
  };

  // Drawing functions
  // --------------------------------------------------

  _.extend(Path.prototype, Rune.Mixins.Moveable, Rune.Mixins.Styleable, {

    type: "path",

    moveTo: function(x, y, relative) {
      this.vars.anchors.push(new Rune.Anchor().setMove(x, y, relative));
      return this;
    },

    lineTo: function(x, y, relative) {
      this.vars.anchors.push(new Rune.Anchor().setLine(x, y, relative));
      return this;
    },

    curveTo: function(a, b, c, d, e, f, g) {
      this.vars.anchors.push(new Rune.Anchor().setCurve(a, b, c, d, e, f, g));
      return this;
    }

  });

})(Rune);