import { NumberSelector } from '@/components/features/numberSelector';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="mb-6 text-center text-3xl font-bold text-gray-700 md:text-4xl">
        Number to Text Converter
      </h1>
      <p className="mb-8 text-center text-lg text-gray-500">
        Select a number from the dropdown to see its text representation.
      </p>
      <div className="mx-auto max-w-2xl">
        <NumberSelector />
      </div>
    </div>
  );
};

export default HomePage;
