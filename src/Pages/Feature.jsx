import React from "react";
import Card from "../components/Card";
import icon1 from "../assets/CardsLogo/search icon.svg";
import GptProfIcon from "../assets/CardsLogo/gpt-prof.svg";
import ChatPdfIcon from "../assets/CardsLogo/pdf icon.svg";
import YouTubeIcon from "../assets/CardsLogo/youtube.svg";
import DgPluginIcon from "../assets/CardsLogo/diagram-icon.svg";
import DocumentIcon from "../assets/CardsLogo/document-ocr.svg";
import AudioIcon from "../assets/CardsLogo/Group.svg";
import VideoIcon from "../assets/CardsLogo/video-summarization.svg";
import QnAIcon from "../assets/CardsLogo/qna.svg";

const Feature = () => {
  return (
    <div className="">
      <h1 className="text-center text-white font-poppins font-bold text-4xl md:text-3xl lg:text-4xl py-[120px]">
        Features
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-8 gap-y-8 justify-items-center">
        {/* Repeat this card component for each feature */}
        <div className="m-4">
          <Card
            title="Browsing Plugin"
            icon={icon1}
            description="Search and summarize the web. Gain immediate and updated knowledge."
          />
        </div>
        {/* Repeat this card component for each feature */}
        <div className="m-4">
          <Card
            title="GPT Prof"
            icon={GptProfIcon}
            description="Upload your documents and let AI explain everything in detail to you. It is like having a personal tutor at your fingertips, available at any time."
          />
        </div>
        {/* Repeat this card component for each feature */}
        <div className="m-4">
          <Card
            title="Chat With PDF"
            icon={ChatPdfIcon}
            description="Upload PDF files, ask questions, and get summaries. Let AI answer them."
          />
        </div>
        {/* Repeat this card component for each feature */}
        <div className="m-4">
          <Card
            title="Youtube video"
            icon={YouTubeIcon}
            description="Transcribe and summarize Youtube videos just by providing the URL of the video."
          />
        </div>
        {/* Repeat this card component for each feature */}
        <div className="m-4">
          <Card
            title="Diagram Plugin"
            icon={DgPluginIcon}
            description="Create and edit diagrams. Build mind maps based on your data."
          />
        </div>
        {/* Repeat this card component for each feature */}
        <div className="m-4">
          <Card
            title="Document OCR AI"
            icon={DocumentIcon}
            description="Convert scanned and handwritten PDFs into digital formats."
          />
        </div>
        {/* Repeat this card component for each feature */}
        <div className="m-4">
          <Card
            title="Audio Transcription"
            icon={AudioIcon}
            description="Upload an audio/MP4 file and get the transcribed text with a summary."
          />
        </div>
        {/* Repeat this card component for each feature */}
        <div className="m-4">
          <Card
            title="Video Summarization"
            icon={VideoIcon}
            description="Upload a video and get the transcribed text with a summary."
          />
        </div>
        {/* Repeat this card component for each feature */}
        <div className="m-4">
          <Card
            title="Question & Answer Generator"
            icon={QnAIcon}
            description="Generate diverse test questions for self-assessment purposes."
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
