export const Orders = ({ orderDetails }) => (
  <div className="bg-gradient-to-b from-green-100 to-white p-8 shadow-lg rounded-xl">
    {!orderDetails[0] ? (
      <h2 className="text-3xl font-semibold mb-8 text-green-800 text-center">
        🌱 You have no order history....
      </h2>
    ) : (
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-green-800 text-center">
        🌱 Orders
      </h2>
    )}
    {orderDetails.slice().reverse().map((order, index) => (
      <div
        key={order.orderId}
        className="mb-6 p-6 bg-white rounded-lg shadow-md relative overflow-hidden transition-transform transform hover:scale-105 duration-500 hover:shadow-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-100 via-green-50 to-transparent opacity-50 pointer-events-none"></div>
        <h3 className="text-green-800 text-lg lg:text-xl font-bold mb-4 flex justify-between items-center">
          <span className="relative z-10">Order {orderDetails.length - index}</span>
          <div
            className={`px-3 py-1 border rounded-full text-sm font-medium text-center shadow-sm relative z-10 ${
              order.delivered
                ? "bg-green-200 border-green-400 text-green-800"
                : "bg-red-200 border-red-400 text-red-800"
            }`}
          >
            {order.delivered ? "Delivered" : "Not Delivered"}
          </div>
        </h3>

        <div className="border-t border-green-200 pt-4 relative z-10">
          <ul className="list-disc list-inside space-y-2">
            {order.orderDetails.map((detail, idx) => (
              <li key={idx} className="text-green-700 lg:text-base">
                <strong>{detail.itemName}</strong> - Quantity: {detail.itemGrams} grams
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 border-t border-green-200 pt-4 space-y-2 relative z-10">
          <p className="text-gray-700">
            <strong>Delivery Tracking Id:</strong> {order.porterTrackerId === "0" || order.porterTrackerId == null
              ? "Not Shipped Yet..."
              : `${order.porterTrackerId}`}
          </p>
          <p className="text-gray-700">
            <strong>Order on:</strong> {order.createdAt.substring(0, 10)}
          </p>
        </div>

        <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-200 rounded-full transform rotate-45 opacity-30 pointer-events-none"></div>
        <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-300 rounded-full transform rotate-45 opacity-20 pointer-events-none"></div>
      </div>
    ))}
  </div>
);
