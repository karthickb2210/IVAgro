export default function CartItem({
  name,
  image,
  quantity,
  price,
  grams,
  onIncrease,
  onDecrease,
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between border rounded-xl border-gray-300 p-2 space-y-4 sm:space-y-0">
    {/* Image Section */}
    <div className="flex items-center space-x-4">
      <img
        src={image} // Replace with actual image source
        alt={name}
        className="w-16 h-16 rounded-full"
      />
      <div className="flex flex-col">
        <h2 className="text-lg ">{name}</h2>
        <p className="text-gray-600">Weight - {grams}</p>
        <p className="text-gray-600">Unit Price - ₹ {price}</p>
      </div>
    </div>
  
    {/* Quantity and Price Section */}
    <div className="flex items-center space-x-4">
      <div className="flex items-center border border-gray-300 ">
        <button
          onClick={onDecrease}
          className="px-2 py-1 text-gray-600 hover:bg-red-600"
        >
          −
        </button>
        <span className="px-4 py-1 border-gray-300">{quantity}</span>
        <button
          onClick={onIncrease}
          className="px-2 py-1 text-gray-600 hover:bg-green-500"
        >
          +
        </button>
      </div>
      <p className="text-lg font-semibold">₹ {price*quantity}</p>
    </div>
  </div>
  
  );
}
