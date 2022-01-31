import alertify from "alertifyjs";
import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../../store/index";
import { logout } from "../../store/user/userAction";
import { isManager, isEmployee } from "../../utils/auth";

const UserMenu = () => {
  const { userState, dispatchUser } = useStore();
  const { user, isUserLogin } = userState;
  const navigate = useNavigate();

  const handleLogout = () => {
    alertify.confirm(
      "Logout",
      "Are you sure you want to logout?",
      () => {
        dispatchUser(logout());
        localStorage.removeItem("token");
        navigate("/");
      },
      () => {
        console.log("Logout cancelled");
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
            {isEmployee(user.roles) && (
              <>
                <Dropdown.Item as={Link} to="/employee/users">
                  User Management
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/employee/accounts">
                  Account Management
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/transfer/employee/all">
                  Transfer Management
                </Dropdown.Item>
                <Dropdown.Divider />
              </>
            )}
            {isManager(user.roles) && (
              <>
                <Dropdown.Item as={Link} to="/manager/users">
                  User Management
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/manager/accounts">
                  Account Management
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/transfer/manager/all">
                  Transfer Management
                </Dropdown.Item>
                <Dropdown.Divider />
              </>
            )}

            <Dropdown.Item as={Link} to="/profile">
              My Profile
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/transfer">
              My Transfers
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
