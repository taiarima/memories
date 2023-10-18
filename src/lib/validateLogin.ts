import { LOGIN_STATUS } from "../constants/loginStatus";

export default function validateLogin(username: string, password: string) {
  // Check if username exists
  if (localStorage.getItem(`user_${username}`) === null) {
    return { status: LOGIN_STATUS.INVALID_USER, username: username };
  }
  // Retrieve the stored user object from localStorage
  const storedUser = JSON.parse(
    localStorage.getItem("user_" + username) || "{}",
  );

  // Hash the entered password and compare it with stored hashed password
  if (storedUser && storedUser.hashedPassword === btoa(password)) {
    return { status: LOGIN_STATUS.SUCCESS, username: username }; // Login successful
  } else {
    return { status: LOGIN_STATUS.INVALID_PASSWORD, username: username };
  }
}
