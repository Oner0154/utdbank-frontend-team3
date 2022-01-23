import alertify from "alertifyjs";
import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../../store";
import { logout } from "../../store/user/userAction";
import Menu from "./Menu";
const Topbar = () => {
  const { userState, dispatchUser } = useStore();
  const { user, isUserLogin } = userState;
  const navigate = useNavigate();
  const handleLogout = () => {
    alertify.confirm(
      "Logout",
      "Are you sure want to logout?",
      () => {
        dispatchUser(logout());
        localStorage.removeItem("token");
        navigate("/");
      },
      () => {
        console.log("logout iptal edildi");
      }
    );
  };
  return (
    // <!-- TOP BAR START -->
    <div className="fixed-top">
      <div className="navbar-area">
        <div className="mobile-nav">
          <Link to="/" className="logo">
            <img src="assets/images/logo.png" alt="logo" />
          </Link>
          <div className="navbar-option">
            <div className="navbar-option-item">
              {isUserLogin ? (
                <DropdownButton
                  id="dropdown-basic-button"
                  title={`${user.firstName} ${user.lastName} >`}
                  size="sm"
                  align="end"
                >
                  {/* {isAdmin(user.roles) && (
      <>
        <Dropdown.Item as={Link} to="/admin/users">
          User Management
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/admin/vehicles">
          Vehicle Management
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/admin/reservations">
          Reservation Management
        </Dropdown.Item>
        <Dropdown.Divider />
      </>
    )} */}
                  <Dropdown.Item as={Link} to="/profile">
                    My Profile
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/account">
                    My Accounts
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/transfer">
                    My Transfers
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </DropdownButton>
              ) : (
                <Link to="/authentication">
                  <i className="flaticon-login"></i>
                </Link>
              )}
            </div>
          </div>
          {/* <div className="navbar-option">
            <div className="navbar-option-item">
              <Link to="/authentication">
                <i className="flaticon-login"></i>
              </Link>
            </div>
          </div> */}
        </div>
        {/* <!-- MENU START--> */}
        <Menu />
        {/* <!-- MENU END--> */}
      </div>
    </div>
    // <!-- TOP BAR END -->
  );
};
export default Topbar;
