import { useEffect, useState } from "react";
import img1 from "../Images/cloth-01.jpg";
import img2 from "../Images/cloth-02.jpg";
import img3 from "../Images/cloth-03.jpg";
import img4 from "../Images/cloth-04.jpg";

const Branding = () => {
  const [showFirstPair, setShowFirstPair] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstPair((prev) => !prev); // Toggle between true/false every 4 seconds
    }, 2500);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-20 mb-20">
        <h1 className="font-bold text-3xl font-mono ml-10 border-2 p-3 border-black rounded-3xl">You Can Also Find!</h1>
      <div className="grid grid-cols-2 gap-4 m-6 border rounded-lg">
        <img
          src={showFirstPair ? img1 : img2}
          alt=""
          className="w-[650px] rounded-lg transition duration-500"
        />
        <img
          src={showFirstPair ? img3 : img4}
          alt=""
          className="w-[650px] rounded-lg transition duration-500"
        />
      </div>
    </div>
  );
};

export default Branding;
