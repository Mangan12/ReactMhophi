import React from 'react'
import './sidebar.css';
import { FaTachometerAlt, FaBoxOpen, FaTasks, FaClipboardList, FaCogs, FaArchive, FaExchangeAlt, FaDesktop, FaExclamationTriangle, FaBan, FaExclamationCircle, FaHandshake, FaChartLine, FaUsers ,FaCog} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Productionplan from './pages/productionplan';
const Sidebar = () => {
  return (
    <div className='extranav'>
      <div className="vertical-navbar">
        <NavItem icon={<FaTachometerAlt size={24} />} text="Dashboard" />
        <Link to= "/orders" style={{color:"inherit", textDecoration: "none"}}>
        <NavItem icon={<FaBoxOpen size={24} />} text="Orders" />
        </Link>
        <Link to= "/myassignments" style={{color:"inherit", textDecoration: "none"}}>
        <NavItem icon={<FaTasks size={24} />} text="My Assignments" />
        </Link>
        <Link to= "/productionplan" style={{color:"inherit", textDecoration: "none"}}>
        <NavItem icon={<FaClipboardList size={24} />} text="Production Plan" />
        </Link>
        <Link to= "/materialstatus" style={{color:"inherit", textDecoration: "none"}}>
        <NavItem icon={<FaCogs size={24} />} text="Material Status" />
        </Link>
        <Link to= "/inventory" style={{color:"inherit", textDecoration: "none"}}>
        <NavItem icon={<FaArchive size={24} />} text="Inventory" />
        </Link>
        <Link to= "/materialmovementsummary" style={{color:"inherit", textDecoration: "none"}}>
        <NavItem icon={<FaExchangeAlt size={24} />} text="Material Movement" />
        </Link>
        <NavItem icon={<FaDesktop size={24} />} text="Workstation Status" />
        <NavItem icon={<FaExclamationTriangle size={24} />} text="Process Violation" />
        <NavItem icon={<FaBan size={24} />} text="Rejection" />
        <NavItem icon={<FaExclamationCircle size={24} />} text="Issues" />
        <NavItem icon={<FaHandshake size={24} />} text="Risk" />
        <NavItem icon={<FaChartLine size={24} />} text="Reports" />
        <NavItem icon={<FaUsers size={24} />} text="Team Roaster" />
        <NavItem icon={<FaTasks size={24} />} text="Production Execution" />
        <NavItem icon={<FaCog size={24} />} text="Process Configuration" />
      </div>
    </div>
  );
};

const NavItem = ({ icon, text }) => {
  return (
    <div className="nav-item">
      <div className="icon-container">{icon}</div>
      <span className="text">{text}</span>
    </div>
  );
};

export default Sidebar