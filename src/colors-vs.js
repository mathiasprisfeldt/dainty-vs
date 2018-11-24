const culori = require("culori");

// In: "#00cc44"
// Out: "0, 204, 68"
function toRGBString(colorHex) {
  const color = culori.parse(colorHex);

  return `${color.r * 255}, ${color.g * 255}, ${color.b * 255}`;
}

// In: "#00cc44"
// Out: "#44cc00"
function RGBToBGR(colorHex) {
  return (
    colorHex[0] +
    colorHex[5] +
    colorHex[6] +
    colorHex[3] +
    colorHex[4] +
    colorHex[1] +
    colorHex[2]
  );
}

// In: "8000CC44"
// Out: "#00CC4480"
function toColorHex(str) {
  if (str[0] === "F" && str[1] === "F") {
    return `#${str.substr(2).toLowerCase()}`;
  } else {
    return `#${str.substr(2)}${str.substr(0, 2)}`.toLowerCase();
  }
}

// In: "#00CC4480"
// Out: "80CC4400"
function toVsColorHex(str) {
  if (str.length === 9) {
    return `${str.substr(7, 2)}${str.substr(1, 6)}`.toUpperCase();
  } else {
    return `FF${str.substr(1, 6)}`.toUpperCase();
  }
}

module.exports = {
  toRGBString,
  RGBToBGR,
  toColorHex,
  toVsColorHex
};
