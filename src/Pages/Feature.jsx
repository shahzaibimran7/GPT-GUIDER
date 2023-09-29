import React from 'react'
import Card from '../components/Card'
// import icon1 from '../Assets/CardsLogo/ion_play.svg'
const Feature = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-center text-white text-3xl md:text-3xl lg:text-4xl mb-8">Features</h1>
      <div className="flex flex-wrap justify-center items-center">
        <div className="m-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <Card title="Browsing Plugin" icon="icon1" description="Search and summarize the web. Gain immediate and updated knowledge." />
        </div>
        <div className="m-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <Card title="GPT Prof" icon="icon" description="Upload your documents and let AI explain everything in detail to you. It is like having a personal tutor at your fingertips, available at any time." />
        </div>
        <div className="m-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <Card title="Chat With PDF" icon="icon" description="Upload PDF files, ask questions, and get summaries. Let AI answer them." />
        </div>
        <div className="m-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <Card title="Youtube video" icon="icon" description="Transcribe and summarize Youtube videos just by providing the URL of the video." />
        </div>
        <div className="m-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <Card title="Diagram Plugin" icon="icon" description="Create and edit diagrams. Build mind maps based on your data." />
        </div>
        <div className="m-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <Card title="Document OCR AI" icon="icon" description="Convert scanned and handwritten PDFs into digital formats." />
        </div>
        <div className="m-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <Card title="Audio Transcription" icon="icon1" description="Upload an audio/MP4 file and get the transcribed text with a summary." />
        </div>
        <div className="m-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <Card title="Video Summarization" icon="icon" description="Upload a video and get the transcribed text with a summary." />
        </div>
        <div className="m-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <Card title="Question & Answer Generator" icon="icon" description="Generate diverse test questions for self-assessment purposes." />
        </div>
      </div>
    </div>
  )
}

export default Feature
