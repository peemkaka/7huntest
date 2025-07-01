'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RouterExample() {
  const router = useRouter();
  const [productId, setProductId] = useState('');

  const handleNavigate = () => {
    if (productId) {
      router.push(`/products/${productId}`);
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="space-y-4 p-4 border rounded-lg">
      <h3 className="font-semibold">Programmatic Navigation Example</h3>
      
      <div className="space-y-2">
        <input
          type="text"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          placeholder="Enter product ID"
          className="border px-3 py-2 rounded"
        />
        <button
          onClick={handleNavigate}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={!productId}
        >
          Go to Product
        </button>
      </div>

      <button
        onClick={handleBack}
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Go Back
      </button>
    </div>
  );
}
