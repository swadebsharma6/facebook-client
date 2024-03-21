import { IoLogIn } from "react-icons/io5";
import { Link } from "react-router-dom";
import homeIcon from '../../assets/icons/home.svg';
import LogOutIcon from '../../assets/icons/logout.svg';
import NotificationIcon from '../../assets/icons/notification.svg';
import FbLogo from '../../assets/images/Facebook.png';
import Avatar from '../../assets/images/avatars/avater-1.png';


const Header = () => {
    return (
        <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
        <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
         
          <Link to='/'>
            <img className="max-w-[100px] rounded-full lg:max-w-[130px]" src={FbLogo} width={60} />
          </Link>
         
    
          <div className="flex items-center space-x-4">
            <Link to='/' className="btn-primary">
              <img src={homeIcon} alt="Home" />
              Home
            </Link>
            <button className="icon-btn">
              <img src={NotificationIcon} alt="Notification" />
            </button>
            <button className="icon-btn">
              <img src={LogOutIcon} alt="Logout" />
            </button>
            <Link to='/login' className="btn-primary">
            <IoLogIn />
              Login
            </Link>
            <button className="flex-center !ml-8 gap-3">
              <span className="text-lg font-medium lg:text-xl">Swadeb Sharma</span>
              <img className="max-h-[32px] max-w-[32px] lg:max-h-[44px] lg:max-w-[44px]"
                src={Avatar} alt=""  width={50}/>
            </button>
          </div>
         
        </div>
      </nav>
    );
};

export default Header;