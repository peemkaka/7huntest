interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Product Details</h1>
      <p className="text-gray-600">
        Product ID: <span className="font-semibold">1</span>
      </p>
      <p className="mt-2 text-sm text-gray-500">
        Navigate to /products/123 or /products/any-id to see different products
      </p>
    </main>
  );
}
