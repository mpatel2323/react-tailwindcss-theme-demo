
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire } from 'react-icons/fa';

const Sidebar = () => {
    return (
            <div className="sidebar-container">

                <SideBarIcon icon={<FaFire size="28" />} text={"Sidebar FiFire demo"} />
                <Divider />
                <SideBarIcon icon={<BsPlus size="32" />}  text={" Sidebar BsPlus demo"} />
                <SideBarIcon icon={<BsFillLightningFill size="20" />}  text={" Sidebar BsFillLightningFill demo"} />
                <Divider />
                <SideBarIcon icon={<BsGearFill size="22" />}  text={" Sidebar BsGearFill demo"} />
            </div>

    );


};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  );

const Divider = () => <hr className="sidebar-hr" />;


export default Sidebar;