import React from 'react'

const Card = props => {
  return (
    <div className="w-[22.5rem] border-[ 2px solid var(--blue, #642CB6)] h-[18.75rem] text-white bg-stone-950 rounded-[3.125rem] border-3 p-2  flex flex-col justify-center alig items-center  " style={{ border: '2px solid var(--blue, #642CB6)' }}>
      <div className="">{props.icon}</div>
      <div className="font-black py-[1rem]">{props.title}</div>
      <div className="text-center">{props.description}</div>
    </div>
  )
}

export default Card
