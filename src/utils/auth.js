export const isEmployee = (roles) => {
  return roles && roles.includes("Employee");
};
export const isManager = (roles) => {
  return roles && roles.includes("Manager");
};
