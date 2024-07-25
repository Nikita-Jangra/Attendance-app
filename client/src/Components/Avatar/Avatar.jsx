import React from 'react'

const Avatar = ({children,margin,backgroundColor,py,px,color,borderRadius,fontSize,textAlign,cursor,textDecoration,width,height}) => {
  const style={
    backgroundColor,
    padding:`${py} ${px}`,
    color:color || "black",
    borderRadius,
    fontSize,
    textAlign:'center',
    cursor: cursor || null,
    textDecoration:"none",
    margin,
    width,
    height
  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatar