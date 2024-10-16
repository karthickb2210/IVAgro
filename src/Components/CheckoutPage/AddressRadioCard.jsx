const AddressRadioCard = ({ address, selected, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className={`border rounded-lg p-4 cursor-pointer mb-4 transition-all duration-200 ${
        selected ? "border-blue-500 bg-blue-100" : "border-gray-300"
      }`}
    >
      <div className="flex items-center">
        <input
          type="radio"
          name="selectedAddress"
          checked={selected}
          onChange={onSelect}
          className="mr-4"
        />
        <div>
          <p className="font-semibold">{address.name}</p>
          <p className="text-sm">{address.house}</p>
          <p className="text-sm">{address.street}</p>
          <p className="text-sm">
            {address.city}, {address.state} - {address.zip}
          </p>
          <p className="font-semibold text-sm">Contact - {address.mobileNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressRadioCard;
