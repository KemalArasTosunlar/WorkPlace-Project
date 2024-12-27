import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Success() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Login Successful!</h1>
        <p className="text-gray-600">Welcome to your dashboard.</p>
      </div>
    </div>
  );
}