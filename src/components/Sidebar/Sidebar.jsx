import React from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<>
			<SidebarContainer isOpen={isOpen} onClick={toggle}>
				<Icon onClick={toggle}>
					<CloseIcon />
				</Icon>
				<SidebarWrapper>
					<SidebarMenu>
						<SidebarLink to="/about" onClick={toggle}>
							About
						</SidebarLink>
						<SidebarLink to="/characters" onClick={toggle}>
							Characters
						</SidebarLink>
						<SidebarLink to="/character-sheet" onClick={toggle}>
							Character Sheet
						</SidebarLink>
						<SidebarLink to="/create-character" onClick={toggle}>
							Create Character
						</SidebarLink>
						<SidebarLink to="/signup" onClick={toggle}>
							Signup
						</SidebarLink>
					</SidebarMenu>

					<SideBtnWrap>
						<SidebarRoute to="/login" onClick={toggle}>
							Login
						</SidebarRoute>
					</SideBtnWrap>
				</SidebarWrapper>
			</SidebarContainer>
		</>
	);
};

export default Sidebar;
