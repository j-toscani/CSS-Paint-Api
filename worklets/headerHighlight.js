class HeaderHighlight {
  static get contextOptions() {
    return { alpha: true };
  }

  static get inputProperties() {
    return ["font-size", "line-height"];
  }

  paint(ctx, size, props) {
    const fontsize = props.get("line-height").value;
    const charsize = props.get("font-size").value;
    ctx.fillStyle = "hsla(55, 90%, 60%, 1.0)";
    ctx.fillRect(charsize / 2, fontsize / 2, size.width, fontsize / 2);
  }
}

registerPaint("headerHighlight", HeaderHighlight);
