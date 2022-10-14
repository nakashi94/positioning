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
        <Layer>
          <Rect
            x={20}
            y={50}
            width={60}
            height={60}
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
            x={360}
            y={50}
            width={60}
            height={60}
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
            y={600}
            width={60}
            height={60}
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
            x={360}
            y={600}
            width={60}
            height={60}
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
            radius={20}
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
