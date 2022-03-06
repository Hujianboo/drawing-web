import React from 'react';
import DoodleButton from '@src/components/DoodleButton'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useDrag } from 'react-dnd'
import { useRotate,ShapeWrap } from 'doodle-rotate-react';
// import { MovableShape } from 'doodle-movable';
const Content = ():React.ReactElement => {
  // const [{ opacity }, dragRef] = useDrag(
  //   () => ({
  //     type: 'component',
  //     collect: (monitor) => ({
  //       opacity: monitor.isDragging() ? 0.5 : 1
  //     })
  //   }),
  //   []
  // )
  return (
    <>
      <div>
        <ShapeWrap>
          <DoodleButton/>
        </ShapeWrap>
      </div>
    </>
    
  )
}
const LeftBar = ():React.ReactElement => {
  
  return(
      <div className='left-bar'>
        <DndProvider backend={HTML5Backend}>
          <Content/>   
        </DndProvider>
      </div>
  )
}
export default LeftBar