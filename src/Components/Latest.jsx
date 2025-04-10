const Latest = () => {
    return (
      <div className="flex flex-col items-center px-4 md:px-20 py-10 bg-white">
        <h1 className="text-4xl font-bold mb-10 text-gray-800">Latest Arrivals</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl">
          {/* Card 1 */}
          <div className="bg-gray-100 p-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <img
              src="https://m.media-amazon.com/images/I/51noMsI8n0L._SS1000_.jpg"
              alt="Product 1"
              className="w-full h-[300px] object-cover rounded-xl"
            />
            <button className="mt-4 text-lg font-semibold bg-white px-6 py-2 rounded-full shadow hover:bg-gray-200 transition">
              $65
            </button>
          </div>
  
          {/* Card 2 */}
          <div className="bg-gray-100 p-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <img
              src="https://bananarepublic.gapcanada.ca/webcontent/0020/444/335/cn20444335.jpg"
              alt="Product 2"
              className="w-full h-[300px] object-cover rounded-xl"
            />
            <button className="mt-4 text-lg font-semibold bg-white px-6 py-2 rounded-full shadow hover:bg-gray-200 transition">
              $65
            </button>
          </div>
  
          {/* Card 3 */}
          <div className="bg-gray-100 p-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <img
              src="https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/66571582f67f8700240191b1/white-sneakers-men-5465.jpg"
              alt="Product 3"
              className="w-full h-[300px] object-cover rounded-xl"
            />
            <button className="mt-4 text-lg font-semibold bg-white px-6 py-2 rounded-full shadow hover:bg-gray-200 transition">
              $65
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Latest;
  