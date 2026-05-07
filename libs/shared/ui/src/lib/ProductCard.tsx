'use client';

export interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  onActionClick: () => void;
  actionText: string;
}

export const ProductCard = ({
  title,
  description,
  price,
  actionText,
  onActionClick,
}: ProductCardProps) => {
  return (
    <div className="flex flex-col p-5 bg-white border border-gray-200 rounded-xl shadow-sm transition-all hover:shadow-md sm:max-w-[300px] w-full">
      <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
        {title}
      </h3>
      <p className="mt-1.5 text-sm text-gray-500 line-clamp-2">{description}</p>
      <div className="mt-auto pt-4 mb-4">
        <span className="text-2xl font-bold text-gray-900">{price}</span>
        <span className="ml-1 text-sm font-medium text-gray-500">₺</span>
      </div>
      <button
        onClick={onActionClick}
        className="w-full px-4 py-2.5 text-sm font-medium text-white transition-colors duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
      >
        {actionText}
      </button>
    </div>
  );
};
