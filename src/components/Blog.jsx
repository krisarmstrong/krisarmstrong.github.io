export default function Blog() {
  // You could make this dynamic with markdown files or a CMS later!
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Blog &amp; Articles</h1>
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-3">Wi-Fi Case Study: Solving the Phantom Pump</h2>
        <p className="mb-2 text-gray-400 text-sm">May 2024</p>
        <p>How we used technical storytelling and NetAlly tools to solve a ghostly device problem in a large hospital...</p>
        <a href="#" className="text-violet-400 underline mt-2 inline-block">Read more</a>
      </div>
      {/* Add more posts as you create them! */}
    </div>
  );
}