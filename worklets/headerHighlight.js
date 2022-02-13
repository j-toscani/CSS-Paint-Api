class HeaderHighlight {
  /*
         define if alphatransparency  is allowed alpha
         is set to true by default. If set to false, all
         colors used on the canvas will be fully opaque
      */
  static get contextOptions() {
    return { alpha: true };
  }

  /*
          ctx is the 2D drawing context
          a subset of the HTML5 Canvas API.
      */
  paint(ctx, size) {
    console.log(size);
    ctx.fillStyle = "hsla(55, 90%, 60%, 1.0)";
    ctx.fillRect(
      0,
      size.height / 2,
      size.width * 0.8,
      size.height / 2
    ); /* order: x, y, w, h */
  }
}

registerPaint("headerHighlight", HeaderHighlight);
