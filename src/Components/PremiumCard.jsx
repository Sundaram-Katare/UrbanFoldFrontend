const PremiumCard = ({user}) => {
    return (
        <div className="flex justify-center items-center mt-20">
            <div className={`flex flex-row gap-20 pb-20 border rounded-lg p-6 ${user.isAdmin ? "bg-gradient-to-t from-black to-green-600" : "bg-gradient-to-t from-black to-blue-600"}`}>
                <div>
                    <h1 className="text-2xl font-bold text-white">{user.name}</h1>
                    <p className="text-xl text-white">{user.email}</p>
                    <p className="text-xl text-black mt-10 border-2-none rounded-3xl p-2 text-center bg-yellow-400 ">Admin: {user.isAdmin ? "Yes" : "No"}</p>
                </div>
                <div>
                <h1 className="text-3xl font-bold text-white border-2 p-2 cursor-pointer">Urban<span className="text-pink-500">Fold</span></h1>
                <img src="https://cdn.pixabay.com/photo/2013/07/12/14/45/qr-code-148732_1280.png" alt="" className="h-24 bg-white p-1 mt-5 "/>
                </div>
            </div>
        </div>
    )
};

export default PremiumCard;