"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FiHome, FiUsers, FiSettings, FiPieChart, FiShoppingBag, FiMail, FiCalendar,FiMenu,FiBell,FiUser,FiLogOut} from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Layt.css';
import Image from 'next/image';

interface LayoutProps {
  children: React.ReactNode;
}

interface MenuItem {
  name: string;
  icon: React.ReactNode;
  label: string;
  path: string;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const menuItems: MenuItem[] = [
    { name: 'dashboard', icon: <FiHome />, label: 'Dashboard', path: '/dashboard' },
    { name: 'allDoctor', icon: <FiUsers />, label: 'All Doctor', path: '/allDoctor' },
    { name: 'allPatient', icon: <FiUsers />, label: 'All Patient', path: '/allPatient' },
    { name: 'analytics', icon: <FiPieChart />, label: 'Analytics', path: '/analytics' },
    { name: 'messages', icon: <FiMail />, label: 'Messages', path: '/messages' },
    { name: 'calendar', icon: <FiCalendar />, label: 'Calendar', path: '/calendar' },
    { name: 'settings', icon: <FiSettings />, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <h3 className={sidebarCollapsed ? 'd-none' : ''}>Navena Admin</h3>
          <button onClick={toggleSidebar} className="toggle-btn"aria-label={sidebarCollapsed ? 
            'Expand sidebar' : 'Collapse sidebar'}><FiMenu /></button>
        </div>
        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li key={item.name} className={activeMenu === item.name ? 'active' : ''}onClick={() => setActiveMenu(item.name)}>
              <Link href={item.path} className="menu-link" passHref>
                <span className="menu-icon">{item.icon}</span>
                {!sidebarCollapsed && <span className="menu-label">{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
        {!sidebarCollapsed && (
          <div className="sidebar-footer">
            <Link href="/logout" className="logout-btn"><FiLogOut /> Logout</Link>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Navigation */}
        <nav className="top-navbar navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid sticky-top">
            <div className="d-flex align-items-center">
              <button className="navbar-toggler me-2" onClick={toggleSidebar}aria-label="Toggle sidebar"><FiMenu /></button>
              <span className="navbar-brand">Dashboard</span>
            </div>
            <div className="d-flex align-items-center">
              <div className="notification-icon me-3"><FiBell /><span className="badge bg-danger">12</span>
              </div>
              <div className="user-profile dropdown">
                <Link className="btn dropdown-toggle d-flex align-items-center" 
                  id="dropdownMenuButton1" data-bs-toggle="dropdown"href="#"passHref>
                  <div className="avatar me-2"><FiUser /></div>
                  <span className="d-none d-md-inline me-2">Admin</span>
                  <div className="profile-circle me-2">
                    <Image src="/team/3.jpg" alt="Admin Profile" width={36} height={36}className="profile-image"priority/>
                  </div>
                </Link>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                  <li><Link className="dropdown-item" href="/profile">Profile</Link></li>
                  <li><Link className="dropdown-item" href="/settings">Settings</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" href="/logout">Logout</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        {/* Content Area */}
        <div className="content-area">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;