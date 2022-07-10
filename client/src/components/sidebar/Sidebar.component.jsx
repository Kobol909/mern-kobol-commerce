/**
 *
 *
 */
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.actions';

import {
  SidebarLink,
  SidebarLinks,
  IconContainer,
  IconContainerLink,
  TitleContainer,
  Title,
  SidebarContainer,
  SubContainer,
  CollapseSidebarContainer
} from './Sidebar.styles';
import { Main } from '../../resources/styles/GlobalStyle';

import {
  AiOutlineHome,
  AiOutlineHistory,
  AiOutlineCreditCard,
  AiOutlineArrowLeft,
  AiOutlineArrowRight
} from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';
import { IoIosCloudDownload, IoIosLogOut, IoIosLogIn } from 'react-icons/io';

const Sidebar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const signOutUSer = () => dispatch(signOutStart());

  const sidebarCollapsed = false;
  const [isCollapsed, setIsCollapsed] = useState(sidebarCollapsed ? false : true);

  const handleToggleCollapse = () => (isCollapsed ? setIsCollapsed(false) : setIsCollapsed(true));

  const collapsedTitle = { display: 'none' };
  const expandedTitle = { display: 'block' };

  return (
    <>
      {currentUser ? (
        <SidebarContainer>
          <TitleContainer>
            <IconContainerLink
              to="/"
              style={isCollapsed ? { display: 'none' } : { display: 'block' }}>
              <AiOutlineHome />
            </IconContainerLink>
            <Title style={isCollapsed ? expandedTitle : collapsedTitle}>Dashboard</Title>
          </TitleContainer>

          <SidebarLinks>
            <SubContainer>
              <IconContainerLink
                to="/dashboard"
                // to="/dashboard/account-details"
                style={isCollapsed ? { display: 'none' } : { display: 'block' }}>
                <VscAccount />
              </IconContainerLink>
              <SidebarLink
                to="/dashboard"
                // to="/dashboard/account-details"
                style={isCollapsed ? expandedTitle : collapsedTitle}>
                Account details
              </SidebarLink>
            </SubContainer>

            <SubContainer>
              <IconContainerLink
                to="/dashboard/downloads"
                style={isCollapsed ? { display: 'none' } : { display: 'block' }}>
                <IoIosCloudDownload />
              </IconContainerLink>
              <SidebarLink
                to="/dashboard/downloads"
                style={isCollapsed ? expandedTitle : collapsedTitle}>
                Downloads
              </SidebarLink>
            </SubContainer>

            <SubContainer>
              <IconContainerLink
                to="/dashboard/orders"
                style={isCollapsed ? { display: 'none' } : { display: 'block' }}>
                <AiOutlineHistory />
              </IconContainerLink>
              <SidebarLink
                to="/dashboard/orders"
                style={isCollapsed ? expandedTitle : collapsedTitle}>
                Orders
              </SidebarLink>
            </SubContainer>

            <SubContainer>
              <IconContainerLink
                to="/dashboard/payment-methods"
                style={isCollapsed ? { display: 'none' } : { display: 'block' }}>
                <AiOutlineCreditCard />
              </IconContainerLink>
              <SidebarLink
                to="/dashboard/payment-methods"
                style={isCollapsed ? expandedTitle : collapsedTitle}>
                Payment Methods
              </SidebarLink>
            </SubContainer>

            <SubContainer>
              <IconContainer
                as="span"
                onClick={signOutUSer}
                style={isCollapsed ? { display: 'none' } : { display: 'block' }}>
                <IoIosLogOut />
              </IconContainer>
              <SidebarLink
                as="span"
                onClick={signOutUSer}
                style={isCollapsed ? expandedTitle : collapsedTitle}>
                Sign Out
              </SidebarLink>
            </SubContainer>
          </SidebarLinks>

          <CollapseSidebarContainer onClick={handleToggleCollapse}>
            <IconContainer style={isCollapsed ? { display: 'none' } : { display: 'block' }}>
              {isCollapsed ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
            </IconContainer>
          </CollapseSidebarContainer>
        </SidebarContainer>
      ) : (
        <SidebarContainer>
          <SidebarLinks>
            <SubContainer>
              <IconContainerLink
                to="/auth"
                style={isCollapsed ? { display: 'none' } : { display: 'block' }}>
                <IoIosLogIn />
              </IconContainerLink>
              <SidebarLink to="/auth" style={isCollapsed ? expandedTitle : collapsedTitle}>
                Sign In
              </SidebarLink>
            </SubContainer>
          </SidebarLinks>
        </SidebarContainer>
      )}

      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default Sidebar;
