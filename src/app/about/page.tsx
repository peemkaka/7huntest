import RouterExample from "@/components/7hunterUi/RouterExample";

export default function About() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-gray-600 mb-8">
        This is the about page. You can navigate here using /about
      </p>
      
      <RouterExample />
    </main>
  );
}
