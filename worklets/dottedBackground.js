class DottedBackgound {
  static get contextOptions() {
    return { alpha: true };
  }

  static get inputProperties() {
    return ["--dot-size", "--dot-padding", "--dot-spacing", "--dot-color"];
  }

  paint(ctx, size, props) {
    const dotSize = parseCssVariable(props, "--dot-size", 2);
    const dotSpacing = parseCssVariable(props, "--dot-spacing", 20);
    const dotPadding = parseCssVariable(props, "--dot-size", dotSpacing / 2);

    const columns = Math.floor(size.width / dotSpacing);
    const rows = Math.floor(size.width / dotSpacing);

    ctx.fillStyle = props.get("--dot-color")[0] ?? "black";
    for (let colCount = 0; colCount < columns; colCount++) {
      for (let rowCount = 0; rowCount < rows; rowCount++) {
        ctx.fillRect(
          dotPadding + colCount * dotSpacing,
          dotPadding + rowCount * dotSpacing,
          dotSize,
          dotSize
        );
      }
    }
  }
}

function parseCssVariable(props, variableName, defaultValue) {
  const variable = props.get(variableName);
  if (variable instanceof CSSUnparsedValue && variable.length === 0) {
    return defaultValue;
  }

  const number = parseInt(variable[0]);

  if (isNaN(number)) {
    throw Error("Value cannot be converted to whole number!");
  }

  return Math.abs(number);
}

registerPaint("dottedBackground", DottedBackgound);
