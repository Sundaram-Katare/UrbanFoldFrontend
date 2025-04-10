const Footer = () => {
    return (
        <div className="grid grid-cols-3 gap-40 p-10 bg-gray-200">
            <div className="flex flex-col items-center">
                <h1 className="font-semibold text-pink-600 text-3xl mb-6">BRAND</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed fugit distinctio maiores nemo!
                    Velit quod, nihil nulla, veritatis at porro quisquam sequi id qui pariatur officia quidem,
                    numquam modi voluptate!
                </p>
                <div className="grid grid-cols-5 gap-10 mt-10">
                    <a href=""><img src="https://www.shareicon.net/data/2016/07/13/606432_facebook_2048x2048.png" alt="" /></a>
                    <a href=""><img src="https://www.iconpacks.net/icons/2/free-instagram-logo-icon-3497-thumb.png" alt=""/></a>
                    <a href="https://x.com/sundaramkatare"><img src="https://i.pinimg.com/736x/99/65/5e/99655e9fe24eb0a7ea38de683cedb735.jpg" alt=""/></a>
                    <a href="https://github.com/Sundaram-Katare"><img src="https://images.icon-icons.com/2428/PNG/512/github_black_logo_icon_147128.png" alt=""/></a>
                    <a href="https://www.linkedin.com/in/sundaram-katare5/"><img src="https://i.pinimg.com/564x/6b/ab/30/6bab3017350ca04c6fa05569672bd31e.jpg" alt=""/></a>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="font-semibold text-pink-600 text-3xl mb-6">Useful Links</h1>
                <div className="grid grid-cols-2 gap-4">
                    <ul className="mr-10">
                        <li className="cursor-pointer hover:text-blue-400">Home</li>
                        <li className="cursor-pointer hover:text-blue-400">Cart</li>
                        <li className="cursor-pointer hover:text-blue-400">Men Fashion</li>
                        <li className="cursor-pointer hover:text-blue-400">Women Fashion</li>
                        <li className="cursor-pointer hover:text-blue-400">Track Order</li>
                    </ul>
                    <ul>
                        <li className="cursor-pointer hover:text-blue-400">My Account</li>
                        <li className="cursor-pointer hover:text-blue-400">Wishlist</li>
                        <li className="cursor-pointer hover:text-blue-400">Terms</li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-rows-3 items-center gap-3">
                <h1 className="font-semibold text-3xl text-pink-600 mb-1">Contact</h1>
                <p><span className="font-bold">Address:</span> 221b Baker St, London NW1 6XE, UK</p>
                <p><span className="font-bold">Phone:</span> +1234-567-890</p>
                <p><span className="font-bold">Mail: </span>sundaram@gmail.com</p>
            </div>
        </div>
    )
};

export default Footer;