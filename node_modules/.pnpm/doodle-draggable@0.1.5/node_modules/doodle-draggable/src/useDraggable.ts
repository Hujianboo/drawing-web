/*
 * @Author: hujianbo
 * @LastEditors: Hujianbo
 */
import React, { useEffect, useRef,useCallback} from "react";
type useDraggableType = <T extends HTMLElement>() => {
  target: React.RefObject<T>
}

const useDraggable: useDraggableType = <T extends HTMLElement>() => {
  const target = useRef<T>(null) as any
  const dragging = useRef<Boolean>(false)
  const startPos = useRef([0,0])
  const diffVector = useRef([0,0])
  const setTransform = useCallback((nums:[number,number]) => {
    target.current.style.transform = `translate3d(${nums[0]}px,${nums[1]}px,0)`
  },[])
  const handleStart =useCallback((e: MouseEvent) => {
    let [diffX,diffY] = diffVector.current
    startPos.current = [e.clientX - diffX,e.clientY - diffY]
    dragging.current = true
  },[])
  const handleMove = useCallback((e: MouseEvent) => {
    if(dragging.current){
      diffVector.current = [e.clientX - startPos.current[0],e.clientY - startPos.current[1]]
      setTransform([diffVector.current[0],diffVector.current[1]])
    }else{
      return
    }
  },[])
  const handleEnd = useCallback((e: MouseEvent) => {
      dragging.current = false
  },[])
  useEffect(() => {
    const dom = target.current
    if(dom){
      dom.addEventListener('mousedown',handleStart)
      document.addEventListener('mousemove',handleMove)
      document.addEventListener('mouseup',handleEnd)
    }
    return () => {
      dom?.removeEventListener('mousedown',handleStart)
      document.removeEventListener('mousemove',handleMove)
      document.removeEventListener('mouseup',handleEnd)
    }
  },[])
  return {target}
}
export default useDraggable