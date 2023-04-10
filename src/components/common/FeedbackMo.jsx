import { useState } from "react";
import { FaStar } from "react-icons/fa";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [ratingValue, setRatingValue] = useState(0);

  function handleSubmit() {
    // Handle form submission here
    console.log("Form submitted!");
    console.log("Input:", inputValue);
    console.log("Textarea:", textareaValue);
    console.log("Rating:", ratingValue);
    // Reset state after submission (if needed)
    setInputValue("");
    setTextareaValue("");
    setRatingValue(0);
    setIsOpen(false);
  }

  return (
    <>
      {/* Button to open modal */}
      <button
        className="bg-blue-500 font-bold text-white py-2 px-4 rounded-lg"
        onClick={() => setIsOpen(true)}
      >
        Provide Feedback
      </button>

      {/* Modal overlay */}
      <div className={`fixed inset-0 bg-black opacity-${isOpen ? 50 : 0} transition-opacity duration-500 ease-in-out ${isOpen ? 'visible' : 'hidden'}`}></div>

      {/* Modal content */}
      <div className={`fixed inset-0 flex justify-center items-center transition-all duration-500 ease-in-out ${isOpen ? 'visible' : 'hidden'}`}>
        <div className="bg-gray-100 rounded-2xl p-6 max-w-lg">
          {/* Close button */}
          <button
            className="absolute top-0 right-0 text-gray-500 hover:text-gray-800"
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">Close</span>
          </button>

          {/* Title */}
          <h2 className="text-lg text-center font-bold mb-4">Delegate Feedback Form</h2>

          {/* Input box */}
          <label className="block mb-2">
            Note:
            <input
              type="text"
              className="border-2 border-gray-400 rounded-lg px-4 py-2 w-full mt-1 focus:outline-none focus:border-blue-500"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </label>

          {/* Textarea */}
          <label className="block mb-2">
            Comments:
            <textarea
              className="border-2 border-gray-400 rounded-lg px-4 py-2 w-full mt-1 focus:outline-none focus:border-blue-500"
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
            />
          </label>

          {/* Rating */}
          <p className="mb-2">Rating:</p>
          <div className="flex justify-center space-x-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                className={`${ratingValue >= value
                    ? "text-yellow-400"
                    : "text-gray-400"
                  } focus:outline-none`}
                onClick={() => setRatingValue(value)}
              >
                <FaStar />
              </button>
            ))}
          </div>

          {/* Submit button */}
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 mx-auto block"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;