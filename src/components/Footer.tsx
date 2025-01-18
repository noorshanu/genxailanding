import React from "react";
import { FaDiscord, FaTelegram, FaTiktok, FaFacebook, FaTwitter, FaReddit, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-6">
        <div className="col-span-1 md:col-span-2">
          <h4 className="font-bold mb-4">Community</h4>
          <div className="flex space-x-4 text-lg">
            <FaDiscord />
            <FaTelegram />
        
     
            <FaTwitter />
      
            <FaInstagram />
   
            <FaWhatsapp />
          </div>
          <div className="mt-4 space-y-2">
            <p>🌐 English</p>
            <p>💲 USD-$</p>
     
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4">About Us</h4>
          <ul className="space-y-2 text-gray-400">
            <li>About</li>
            <li>Careers</li>
      
            <li>News</li>
     
            <li>Terms</li>
            <li>Privacy</li>
  
            <li>Blog</li>
            <li>Community</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Products</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Exchange</li>

            <li>Pay</li>
      
            <li>Live</li>
            <li>Tax</li>
      

            <li>Auto-Invest</li>
            <li>Staking</li>
            <li>NFT</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Business</h4>
          <ul className="space-y-2 text-gray-400">
            <li>P2P Merchant Application</li>
            <li>P2Pro Merchant Application</li>
            <li>Listing Application</li>
            <li>Institutional & VIP Services</li>
            <li>Labs</li>
            <li>Binance Connect</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Service</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Affiliate</li>
            <li>Referral</li>
            <li>OTC Trading</li>
            <li>Historical Market Data</li>
            <li>Proof of Reserves</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
