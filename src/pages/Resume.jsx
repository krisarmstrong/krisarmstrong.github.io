import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import { Packer, Document, Paragraph } from "docx";

export default function Resume() {
  const [md, setMd] = useState("");

  useEffect(() => {
    fetch("/src/assets/resume.md")
      .then((res) => res.text())
      .then(setMd);
  }, []);

  const handleDownload = (type) => {
    if (type === "md") {
      const blob = new Blob([md], { type: "text/markdown" });
      saveAs(blob, "kris_armstrong_resume.md");
    } else if (type === "pdf") {
      const doc = new jsPDF();
      doc.text(md, 10, 10);
      doc.save("kris_armstrong_resume.pdf");
    } else if (type === "docx") {
      const doc = new Document({
        sections: [
          {
            properties: {},
            children: [new Paragraph(md)],
          },
        ],
      });
      Packer.toBlob(doc).then((blob) => {
        saveAs(blob, "kris_armstrong_resume.docx");
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-4">Resume</h1>
      <div className="flex gap-4 mb-8">
        <button
          className="bg-violet-500 hover:bg-violet-700 text-white py-2 px-4 rounded"
          onClick={() => handleDownload("pdf")}
        >
          Download PDF
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          onClick={() => handleDownload("docx")}
        >
          Download DOCX
        </button>
        <button
          className="bg-gray-700 hover:bg-gray-900 text-white py-2 px-4 rounded"
          onClick={() => handleDownload("md")}
        >
          Download Markdown
        </button>
      </div>
      <div className="prose dark:prose-invert bg-gray-900 p-6 rounded-2xl shadow-lg">
        <ReactMarkdown>{md}</ReactMarkdown>
      </div>
    </div>
  );
}