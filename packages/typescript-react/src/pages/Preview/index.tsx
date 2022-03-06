import React from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useDrop } from 'react-dnd'
const Content = ():React.ReactElement => {
  const [, dropRef] = useDrop(
    () => ({
      accept: 'component',
      drop: (item,monitor) => {
        console.log(item);
        console.log('monitor.getSourceClientOffset------',monitor.getSourceClientOffset())
      }
    }),
    []
  )
  return (
    <div className='preview-container' ref={dropRef}>
      e
    </div>
    
  )
}
const Preview = ():React.ReactElement => {
  return(
      <div className='preview'>
        <DndProvider backend={HTML5Backend}>
          <Content/>
        </DndProvider>
      </div>
  )
}
export default Preview