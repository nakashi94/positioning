import { Component } from "react";
import { Stage, Layer, Rect, Circle } from "react-konva";

export class Demo extends Component {
  state = {
    isDragging: false,
    x: 50,
    y: 50,
  }
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        {/* <Stage width={300} height={600}> */}
        <Layer>
          <Rect
            x={20}
            y={50}
            width={40}
            height={40}
            draggable
            fill="red"
            shadowBlur={10}
            onDragStart={() => {
              this.setState({
                isDragging: true,
              });
            }}
            onDragEnd={(e) => {
              this.setState({
                isDragging: false,
                x: e.target.x(),
                y: e.target.y(),
              });
            }}
          />
          <Rect
            x={240}
            y={50}
            width={40}
            height={40}
            draggable
            fill="red"
            shadowBlur={10}
            onDragStart={() => {
              this.setState({
                isDragging: true,
              });
            }}
            onDragEnd={(e) => {
              this.setState({
                isDragging: false,
                x: e.target.x(),
                y: e.target.y(),
              });
            }}
          />
          <Rect
            x={20}
            y={400}
            width={40}
            height={40}
            draggable
            fill="red"
            shadowBlur={10}
            onDragStart={() => {
              this.setState({
                isDragging: true,
              });
            }}
            onDragEnd={(e) => {
              this.setState({
                isDragging: false,
                x: e.target.x(),
                y: e.target.y(),
              });
            }}
          />
          <Rect
            x={240}
            y={400}
            width={40}
            height={40}
            draggable
            fill="red"
            shadowBlur={10}
            onDragStart={() => {
              this.setState({
                isDragging: true,
              });
            }}
            onDragEnd={(e) => {
              this.setState({
                isDragging: false,
                x: e.target.x(),
                y: e.target.y(),
              });
            }}
          />
          <Circle
            x={200}
            y={100}
            radius={12}
            draggable
            fill="white"
            shadowBlur={10}
            onDragStart={() => {
              this.setState({
                isDragging: true,
              });
            }}
            onDragEnd={(e) => {
              this.setState({
                isDragging: false,
                x: e.target.x(),
                y: e.target.y(),
              });
            }}
          />
        </Layer>
      </Stage>
    )
  }
}
