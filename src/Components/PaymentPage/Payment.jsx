import React, { useState } from "react";
import PayModal from "./PayModal";

function MyPayment() {
  const [showPaymentInfo, SetShowPaymentInfo] = useState(false);

  const [CartItem, SetCartItem] = useState([
    {
      id: 1,
      img: "person1.png",
      title: "The 90s with Dj Neptune",
      date: "Dec 12 2024",
      location: "Quilox Club",
      time: "11:00 AM",
      price: 4500000,
      quantity: 1,
    },
    {
      id: 2,
      img: "person2.png",
      title: "The 90s with Dj Neptune",
      date: "Dec 12 2024",
      location: "Quilox Club",
      time: "11:00 AM",
      price: 500000,
      quantity: 1,
    },
  ]);

  const updateQuantity = (id, increment) => {
    SetCartItem((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(item.quantity + increment, 1),
              price:
                Math.max(item.quantity + increment, 1) *
                (item.price / item.quantity),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    SetCartItem(CartItem.filter((item) => item.id !== id));
  };

  const addNewItem = () => {
    const NewItem = {
      id: CartItem.length + 1,
      img: "person1.png",
      title: "The 90s with Dj Neptune",
      date: "Dec 14 2024",
      location: "New Venue",
      time: "12:00 PM",
      price: 100,
      quantity: 1,
    };
    SetCartItem([...CartItem, NewItem]);
  };

  return (
    <section className="flex flex-col lg:flex-row gap-6 border w-[80%] mx-auto mt-24">
      {/* left side */}
      <div className="flex-1 p-6">
        <h2 className="text-xl font-semibold text-[#969DAA]">Your Cart</h2>
        {CartItem.map((item) => (
          <div
            key={item.id}
            className="flex  items-center gap-4 mb-6 p-4 border-b-1"
          >
            <img className="w-24 h-24 rounded-lg" src={item.img} alt="" />

            <div className="flex-1">
              <h3>{item.title}</h3>

              <div className="mt-4">
                <div className="flex gap-3 items-center">
                  <div className="flex items-center gap-2">
                    <img className="w-4 h-4" src="/Calendar.png" alt="" />
                    <p className="text-sm text-gray-600">{item.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img className="w-4 h-4" src="/Mark.png" alt="" />
                    <p className="text-sm text-gray-600">{item.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-1">
                  <img className="w-4 h-4" src="/Clock.png" alt="" />
                  <p className="text-sm text-gray-600">{item.time}</p>
                </div>
              </div>

              {/* Quantity controls */}
              <div className="flex items-center gap-4 mt-4 bg-gray-200 rounded w-[10%] justify-center">
                <button
                  className="px-2 py-1 hover:bg-gray-300"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>

                <button
                  className="px-2 py-1 hover:bg-gray-300"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>
              </div>
              <p className="mt-2 text-lg font-bold">
                {" "}
                ₦{item.price.toLocaleString()}
              </p>
            </div>
            {/* Remove item button */}
            <button onClick={() => removeItem(item.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#000"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))}

        <button
          onClick={addNewItem}
          className="bg-primary-500 p-2 rounded-lg text-white"
        >
          Add New Item
        </button>
      </div>

      {/* right side  */}
      <div className="flex-1 p-6 border-1">
        {/* Account Info */}
        <div className="mb-6">
          <h3 className="text-lg  font-semibold mb-2 flex gap-2">
            <img src="./check.png" alt="" />
            Account information
          </h3>

          <div className="!ms-8">
            <p>Tunde Chukwu</p>
            <p>tundechukwu12@gmail.com</p>
          </div>
        </div>

        {/* Phone Info */}
        <div className="mb-6">
          <h3 className="text-lg  font-semibold mb-2 flex gap-2">
            <img src="./check.png" alt="" />
            Phone number
          </h3>

          <div className="!ms-8">
            <p>+2341123465799</p>
          </div>
        </div>

        {/* Payment Field with Toggle */}
        <div>
          <h3
            className="flex text-lg font-semibold mb-2 cursor-pointer gap-2"
            onClick={() => SetShowPaymentInfo(!showPaymentInfo)}
          >
            <img src="./check.png" alt="" />
            <span>Payment Information</span>
            <span>
              {/* Arrow icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </h3>

          {showPaymentInfo && (
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 mt-5">
              <input
                type="number"
                placeholder="Card Number"
                className="w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Card Holder Name"
                className="w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="date"
                placeholder="MM/YY"
                className="w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          )}
        </div>

        <div className="bg-gray-100 p-5 rounded-lg mt-4">
          <ul className="mb-4">
            {CartItem.map((item) => (
              <li key={item.id} className="flex justify-between mb-2">
                <span>
                  {item.title} {item.quantity}
                </span>
                <span>₦{item.price.toLocaleString()}</span>
              </li>
            ))}
          </ul>

          {/* Subtotal calculation */}
          <div className="flex justify-between border-t-1 border-gray-300 mt-4 p-2">
            <span>SubTotal: </span>
            <span>
              ₦{" "}
              {CartItem.reduce(
                (sum, item) => sum + item.price,
                0
              ).toLocaleString()}
            </span>
          </div>
          {/* Tax calculation */}
          <div className="flex justify-between mt-4 border-t-1 border-gray-300 p-2">
            <span>Tax (5%): </span>
            <span>
              ₦{" "}
              {(
                CartItem.reduce((sum, item) => sum + item.price, 0) * 0.05
              ).toLocaleString()}
            </span>
          </div>
           {/* Total calculation */}
    
          <div className="flex justify-between font-bold border-t-1 border-gray-300 my-4 p-2">
              <span>Total Amount: </span>
              <span>₦ {(
                CartItem.reduce((sum, item)=> sum + item.price, 0 ) * 1.05
              ).toLocaleString()} </span>
          </div>
          <PayModal />
        </div>
      </div>
    </section>
  );
}

export default MyPayment;
