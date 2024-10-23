export const Orders = ({ orderDetails }) => (
    <div className="bg-white p-8 shadow-lg rounded-lg">
      {!orderDetails[0] ? (
        <h2 className="text-3xl font-semibold mb-8 text-green-700 text-center">
          🌱 You have no order history....
        </h2>
      ) : (
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-green-700 text-center">
          🌱 Orders
        </h2>
      )}
      {orderDetails.map((order, index) => (
        <div
          key={order.orderId}
          className="mb-3 sm:mb-6 p-6 bg-gray-50 rounded-lg shadow-sm transition-shadow hover:shadow-md"
        >
          <h3 className="text-green-700 text-xl lg:text-2xl font-bold mb-2 sm:mb-4 flex justify-between items-center">
            Order {index + 1}
            <div
              className={`p-1 px-2 border justify-end text-xl rounded-lg text-center ${
                order.delivered
  
                  ? "bg-green-200 border-green-400"
                  : "bg-red-200 border-red-400"
              }`}
            >
              {order.delivered
                ? (
                <h6 className="text-green-700">
                  Delivered
                </h6>
              ) : (
                <h6 className="text-red-700">
                  Not Delivered
                </h6>
              )}
            </div>
            {/* <span className="text-sm lg:text-lg font-medium text-green-600">
             Porter Tracking Id :  {order.porterTrackerId}
            </span> */}
          </h3>
  
          <div className="border-t border-green-200 pt-4">
            <ul className="list-disc list-inside">
              {order.orderDetails.map((detail, idx) => (
                <li key={idx} className="text-green-600 lg:text-lg mb-1 sm:mb-2">
                  <strong>{detail.itemName}</strong> - Quantity:{" "}
                  {detail.itemGrams} grams
                </li>
              ))}
            </ul>
          </div>
            <div className="sm:mt-4 mt-2 border-t border-green-200 sm:pt-4 pt-2 justify-start">
            <p className="text-gray-700 mb-1">
              <strong>Porter Tracking Id:</strong> {(order.porterTrackerId==="0"|| order.porterTrackerId==null) ? "Not Shipped Yet..." : `${order.porterTrackerId}`}
            </p>
              <p className="text-gray-700 mb-1">
                <strong>Order on:</strong> {order.createdAt.substring(0, 10)}
              </p>
              
            </div>
            
          
        </div>
      ))}
    </div>
  );