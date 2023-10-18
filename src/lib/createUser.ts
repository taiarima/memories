import { LOGIN_STATUS } from "../constants/loginStatus";

export default function createUser(username: string, password: string) {
  // Username too short
  if (username.length < 8)
    return { status: LOGIN_STATUS.INVALID_USER, username: username };

  // Username already exists guard clause
  if (localStorage.getItem(`user_${username}`) !== null) {
    return { status: LOGIN_STATUS.INVALID_PASSWORD, username: username };
  }

  // Password too short guard clause
  if (password.length < 8)
    return { status: LOGIN_STATUS.INVALID_PASSWORD, username: username };

  // Hash the password
  const hashedPassword = btoa(password);

  // Create the user object
  const user = {
    username,
    hashedPassword,
  };

  // Store the user object as a JSON string in localStorage
  localStorage.setItem("user_" + username, JSON.stringify(user));
  return { status: LOGIN_STATUS.SUCCESS, username: username };
}
