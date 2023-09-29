// import React from 'react'

// const Card = props => {
//   return (
//     <div className="w-[20rem] border-[ 2px solid var(--blue, #642CB6)] h-[18.75rem] text-white bg-stone-950 rounded-[3.125rem] border-3 p-2  flex flex-col justify-center alig items-center  " style={{ border: '2px solid var(--blue, #642CB6)' }}>
//       <div className="w-[5.25rem] h-[5.25rem] rounded-[10.5rem] bg-[#3A1078] blur-[34px] relative">
//         <div className="h-[2.625rem] w-[2.625] z-10 absolute">{props.icon}</div>
//       </div>
//       <div>
//         <div className="leading-8 font-black py-[1rem] text-base text-center fontbold">{props.title}</div>
//         <div className="text-center  font-medium text-base" style={{ width: '17.375rem' }}>
//           {props.description}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Card
import React from 'react'

const Card = props => {
  return (
    <div className="w-[20rem] border-2 border-blue-500 h-[18.75rem] text-white bg-stone-950 rounded-[3.125rem] p-2 flex flex-col justify-center items-center">
      <div className="w-[5.25rem] h-[5.25rem] rounded-[10.5rem] bg-[#3A1078] blur-[34px] relative">
        <div className="h-[2.625rem] w-[2.625rem] z-10 absolute top-0 left-0">
          {/* Display the icon */}
          {props.icon && <img src={props.icon} alt="Icon" />}
        </div>
      </div>
      <div>
        <div className="leading-8 font-black py-[1rem] text-base text-center font-bold">{props.title}</div>
        <div className="text-center font-medium text-base" style={{ width: '17.375rem' }}>
          {props.description}
        </div>
      </div>
    </div>
  )
}

export default Card
