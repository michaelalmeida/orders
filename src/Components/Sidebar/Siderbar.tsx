import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { DASHBOARD_ROUTES } from "../../constants/routes";
import { Menu, MenuItem, MenuList, SidebarWrapper } from "./Sidebar.style";

const menuOptions = [
  { label: "menu.dashboard", link: DASHBOARD_ROUTES.HOME },
  { label: "menu.calendar", link: DASHBOARD_ROUTES.CALENDAR },
  { label: "menu.list", link: DASHBOARD_ROUTES.QUOTATION_LIST },
  { label: "menu.create", link: DASHBOARD_ROUTES.QUOTATION_CREATE },
];

export const SideBar = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <SidebarWrapper>
      <Menu>
        <MenuList>
          {menuOptions.map(({ label, link }) => (
            <MenuItem key={label} active={location.pathname === link}>
              <Link to={link}>
                <>{t(label)}</>
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </SidebarWrapper>
  );
};
