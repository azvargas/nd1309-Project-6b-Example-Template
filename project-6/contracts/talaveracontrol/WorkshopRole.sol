pragma solidity >=0.4.24;

// Import the library 'Roles'
import "./Roles.sol";

// Define a contract 'WorkshopRole' to manage this role - add, remove, check
contract WorkshopRole {
  using Roles for Roles.Role;

  // Define 2 events, one for Adding, and other for Removing
  event WorkshopAdded(address indexed account);
  event WorkshopRemoved(address indexed account);

  // Define a struct 'workshops' by inheriting from 'Roles' library, struct Role
  Roles.Role private workshops;

  // In the constructor make the address that deploys this contract the 1st workshop
  constructor() public {
    _addWorkshop(msg.sender);
  }

  // Define a modifier that checks to see if msg.sender has the appropriate role
  modifier onlyWorkshop() {
    require(isWorkshop(msg.sender), "The caller is not an authorized workshop");
    _;
  }

  // Define a function 'isWorkshop' to check this role
  function isWorkshop(address account) public view returns (bool) {
    return workshops.has(account);
  }

  // Define a function 'addWorkshop' that adds this role
  function addWorkshop(address account) public onlyWorkshop {
    _addWorkshop(account);
  }

  // Define a function 'renounceWorkshop' to renounce this role
  function renounceWorkshop() public {
    _removeWorkshop(msg.sender);
  }

  // Define an internal function '_addWorkshop' to add this role, called by 'addWorkshop'
  function _addWorkshop(address account) internal {
    workshops.add(account);
    emit WorkshopAdded(account);
  }

  // Define an internal function '_removeWorkshop' to remove this role, called by 'removeWorkshop'
  function _removeWorkshop(address account) internal {
    workshops.remove(account);
    emit WorkshopRemoved(account);
  }
}