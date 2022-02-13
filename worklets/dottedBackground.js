class DottedBackgound {
  static get contextOptions() {
    return { alpha: true };
  }

  paint(ctx, size) {
    const columns = Math.floor(size.width / 20);
    const rows = Math.floor(size.width / 20);

    ctx.fillStyle = "black";
    for (let colCount = 0; colCount < columns; colCount++) {
      for (let rowCount = 0; rowCount < rows; rowCount++) {
        ctx.fillRect(10 + colCount * 20, 10 + rowCount * 20, 2, 2);
      }
    }
  }
}

registerPaint("dottedBackground", DottedBackgound);
