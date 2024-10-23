const Subscriptions = ({ subscriptionDetails }) => (
    <div className="bg-white p-8 shadow-lg rounded-lg">
      {!subscriptionDetails[0] ? (
        <h2 className="text-3xl font-semibold mb-8 text-green-700 text-center">
          🌱 You have no Subscriptions plans active....
        </h2>
      ) : (
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-green-700 text-center">
          🌱 Subscriptions
        </h2>
      )}
      {subscriptionDetails.map((subscription, index) => (
        <div
          key={subscription.subscriptionId}
          className="mb-6 p-6 bg-gray-50 rounded-lg shadow-sm transition-shadow hover:shadow-md"
        >
          <h3 className="text-green-700 text-xl lg:text-2xl font-bold mb-2 sm:mb-4 flex justify-between items-center">
            Subscription {index + 1}
            <span className="text-sm lg:text-lg font-medium text-green-600">
              {subscription.subscriptionType}
            </span>
          </h3>
  
          <div className="border-t border-green-200 pt-2 sm:pt-4">
            <ul className="list-disc list-inside">
              {subscription.subscriptionDetails.map((detail, idx) => (
                <li key={idx} className="text-green-600 lg:text-lg sm:mb-2 mb-1">
                  <strong>{detail.product_name}</strong> - Quantity:{" "}
                  {detail.quantity} grams
                </li>
              ))}
            </ul>
          </div>
  
          <div className="sm:mt-4 mt-2 border-t border-green-200 pt-4">
            <p className="text-gray-700 mb-1">
              <strong>Subscribed on:</strong>{" "}
              {subscription.createdAt.substring(0, 10)}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Box Size :</strong> {subscription.boxSize} grams
            </p>
            {/*<p className="text-gray-700 mb-1">
              <strong>Signature:</strong> {subscription.signature}
            </p> */}
          </div>
        </div>
      ))}
    </div>
  );

  export default Subscriptions;