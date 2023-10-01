import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import BrowsingPlugin from "../components/BrowsingPlugin";
import GptProf from "../components/GptProf";
import DocumentOCR from "../components/DocumentOCR";
import ChatPdf from "../components/ChatPdf";
import Transcription from "../components/Transcription";
import DGPlugin from "../components/DGPlugin";
import YTTranscription from "../components/YTTranscription";
import QnA from "../components/QnA";
import Footer from "../components/Footer";
import Feature from "./Feature";
const Home = () => {
  return (
    <>
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
    </>
  );
};
export default Home;
