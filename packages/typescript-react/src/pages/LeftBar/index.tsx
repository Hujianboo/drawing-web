import React from 'react';
import DoodleButton from '@src/components/DoodleButton'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useDrag } from 'react-dnd'

const Content = ():React.ReactElement => {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: 'component',
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1
      })
    }),
    []
  )
  return (
    <>
      <div ref={dragRef}>
        <DoodleButton/>
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