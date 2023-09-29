import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import BrowsingPlugin from "./components/BrowsingPlugin";
import GptProf from "./components/GptProf";
import DocumentOCR from "./components/DocumentOCR";
import ChatPdf from "./components/ChatPdf";
import Transcription from "./components/Transcription";
import DGPlugin from "./components/DGPlugin";
import YTTranscription from "./components/YTTranscription";
import QnA from "./components/QnA";
import Footer from "./components/Footer";
import Feature from "./Pages/Feature";

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
    <div className="relative bg-[#07091E] min-h-screen min-w-screen pt-6 xl:px-[140px] lg:px-[90px]">
      <Navbar />
      <Hero />
      <Feature />
      <BrowsingPlugin />
      <GptProf />
      <DocumentOCR />
      <ChatPdf />
      <Transcription />
      <DGPlugin />
      <YTTranscription />
      <QnA />
      <Footer />
      {/* <CornerDivs /> */}
    </div>
  );
}

export default App;
