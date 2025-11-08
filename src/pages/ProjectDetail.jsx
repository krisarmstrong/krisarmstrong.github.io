import { useParams } from "react-router-dom";

export default function ProjectDetail() {
  const { id } = useParams();
  // In a real project, you would fetch the case/project content by ID!
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Project Detail: {id}</h1>
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
        <p>Details for project/case: {id} would appear here. (Connect this to your JSON or markdown-powered projects for real dynamic content.)</p>
      </div>
    </div>
  );
}