import alertify from "alertifyjs";
import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../../store/index";
import { logout } from "../../store/user/userAction";
const UserMenu = () => {
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
        console.log("canceled");
      }
    );
  };
  return (
    <div className="navbar-option">
      <div className="navbar-option-item">
        {isUserLogin ? (
          <DropdownButton
            id="dropdown-basic-button"
            title={`${user.firstName} ${user.lastName}`}
            size="sm"
            align="end"
          >
            <Dropdown.Item as={Link} to="/profile">
              Profile
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/transfer">
              Transfers
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/account">
              My Accounts
            </Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </DropdownButton>
        ) : (
          <Link
            to="/authentication"
            className="btn1 blue-gradient btn-with-image text-nowrap"
          >
            <i className="flaticon-login"></i>
            <i className="flaticon-login"></i>
            Sign Up / Login
          </Link>
        )}
      </div>
    </div>
  );
};
export default UserMenu;
