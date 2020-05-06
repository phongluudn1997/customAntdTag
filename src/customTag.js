import React from "react";
import { Tag } from 'antd';

export default class CustomTag extends React.Component {
  constructor(props) {
    super(props);
  }

  BACKGROUND_COLOR_FACTOR = 0.9;
  BORDER_COLOR_FACTOR = 0.3;

  rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  hexToRgb(){
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    let color = this.props.color.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : null;
  }

  generateTintColor(factor) {
    let rgbEquivalent = this.hexToRgb();

    let redColor = this.roundColor(
      rgbEquivalent.r + (255 - rgbEquivalent.r) * factor
    );
    let greenColor = this.roundColor(
      rgbEquivalent.g + (255 - rgbEquivalent.g) * factor
    );
    let blueColor = this.roundColor(
      rgbEquivalent.b + (255 - rgbEquivalent.b) * factor
    );

    let hexEquivalent = this.rgbToHex(redColor, greenColor, blueColor);

    return hexEquivalent;
  }

  roundColor(color) {
    return Math.round(color);
  }

  generateBackgroundColor() {
    return this.generateTintColor(this.BACKGROUND_COLOR_FACTOR);
  }

  generateBorderColor() {
    return this.generateTintColor(this.BORDER_COLOR_FACTOR);
  }

  render(){
      const { color, ...rest } = this.props;
      return(
        <Tag 
            style={{
                background: this.generateBackgroundColor(), 
                color: this.props.color, 
                borderColor: this.generateBorderColor(),
                }}
        >
            {this.props.children}
        </Tag>
      )
  }

//   render() {
//     return (
//       <span
//         style={{
//           color: this.props.color,
//           background: this.generateBackgroundColor(),
//           display: "inline-block",
//           padding: "0 7px",
//           height: "auto",
//           fontSize: "12px",
//           lineHeight: "20px",
//           border: "1px solid" + this.generateBorderColor().toString(),
//           borderRadius: "2px",
//           cursor: "default"
//         }}
//       >
//         {this.props.children}
//       </span>
//     );
//   }
}