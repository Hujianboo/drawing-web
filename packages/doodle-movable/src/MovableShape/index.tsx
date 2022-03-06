import React, { Component } from 'react';
import { RotateSvg } from './RotateSvg';
import { getAngle } from './utils';
import './style.scss';
type PropsType = {};
type StateType = {
  dragging: boolean;
  rotating: boolean;
  startPos: number[];
  diffVector: number[];
  rotateCenter: number[];
  downPoint: number[];
  currentDeg: number;
};

export class MovableShape extends Component<PropsType, StateType> {
  private movableDom: React.RefObject<HTMLDivElement>;
  private getDeg: (vector1: number[], vector2: number[]) => number;
  constructor(props: PropsType) {
    super(props);
    this.state = {
      //拖拽状态
      dragging: false,
      startPos: [0, 0],
      diffVector: [0, 0],
      //旋转状态
      rotating: false,
      rotateCenter: [0, 0],
      downPoint: [0, 0],
      currentDeg: 0,
    };
    this.movableDom = React.createRef();
    this.getDeg = getAngle;
  }

  setTransform(deg: number = 0) {
    this.movableDom!.current!.style.transform = `translate(${this.state.diffVector[0]}px,${this.state.diffVector[1]}px)  rotate(${deg}deg)`;
  }
  onDragStart(e: React.MouseEvent<Element, MouseEvent>) {
    const handleMove = (e: MouseEvent) => {
      if (this.state.dragging) {
        this.setState({
          diffVector: [e.clientX - this.state.startPos[0], e.clientY - this.state.startPos[1]],
        });
        this.setTransform(this.state.currentDeg);
      }
    };
    const handleEnd = (e: MouseEvent) => {
      this.setState({
        dragging: false,
      });
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
    };

    let [diffX, diffY] = this.state.diffVector;
    this.setState({
      dragging: true,
      startPos: [e.clientX - diffX, e.clientY - diffY],
    });
    document.addEventListener('mousemove', handleMove.bind(this));
    document.addEventListener('mouseup', handleEnd.bind(this));
  }
  onRotateStart(e: React.MouseEvent<Element, MouseEvent>) {
    e.stopPropagation();
    const handleMouseMove = (e: MouseEvent) => {
      e.stopImmediatePropagation();
      if (this.state.rotating) {
        this.setTransform(
          this.state.currentDeg +
            this.getDeg(
              [this.state.downPoint[0] - this.state.rotateCenter[0], this.state.downPoint[1] - this.state.rotateCenter[1]],
              [e.clientX - this.state.rotateCenter[0], e.clientY - this.state.rotateCenter[1]],
            ),
        );
      }
    };
    const handleMouseStop = (e: MouseEvent) => {
      this.setState({
        rotating: false,
        currentDeg:
          this.state.currentDeg +
          this.getDeg(
            [this.state.downPoint[0] - this.state.rotateCenter[0], this.state.downPoint[1] - this.state.rotateCenter[1]],
            [e.clientX - this.state.rotateCenter[0], e.clientY - this.state.rotateCenter[1]],
          ),
      });
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseStop);
    };
    const { width, height, left, top } = (this.movableDom.current as Element).getBoundingClientRect();
    this.setState({
      rotating: true,
      downPoint: [e.clientX, e.clientY],
      rotateCenter: [left + width / 2, top + height / 2],
    });
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseStop);
  }
  render() {
    return (
      <div
        className="movable-shape"
        ref={this.movableDom}
        onMouseDown={(e) => {
          this.onDragStart(e);
        }}
      >
        <div
          className="rotate-svg"
          onMouseDown={(e) => {
            this.onRotateStart(e);
          }}
        >
          <RotateSvg />
        </div>
        {this.props.children}
      </div>
    );
  }
}
