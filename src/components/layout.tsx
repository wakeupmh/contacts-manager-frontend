import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../components/ui/navigation-menu"
import { Button } from './ui/button';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <div className="layout">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              <Button variant="link">View Contacts</Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/upload" className={`nav-link ${isActive('/upload') ? 'active' : ''}`}>
              <Button variant="link">Upload Contacts</Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <main>
        {children}
      </main>
    </div>
  );
}
