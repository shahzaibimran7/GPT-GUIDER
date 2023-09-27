import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

// const CornerDivs = () => {
//   return (
//     <div className="relative">
//       {/* Left div */}
//       <div
//         className="absolute top-1/2 left-0 transform -translate-y-1/2 w-32 h-32 bg-[#3A1078] rounded-full blur-md"
//         style={{
//           borderRadius: "440px",
//         }}
//       ></div>

//       {/* Right div */}
//       <div
//         className="absolute top-1/2 right-[-130px] transform -translate-y-1/2 w-20 h-32 bg-[#3A1078] rounded-full blur-md"
//         style={{
//           borderRadius: "440px",
//         }}
//       ></div>

//       {/* Center div */}
//       <div
//         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#3A1078] rounded-full blur-md"
//         style={{
//           borderRadius: "440px",
//         }}
//       ></div>
//     </div>
//   );
// };

function App() {
  return (
    <div className="relative bg-[#07091E] min-h-screen w-screen pt-6 xl:px-[140px] lg:px-[100px]">
      <Navbar />
      <Hero />
      {/* <CornerDivs /> */}
    </div>
  );
}

export default App;
