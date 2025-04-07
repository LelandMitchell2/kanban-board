import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });
    if (!response.ok) {
      const errorMessage = await response.json();
      throw new Error(errorMessage.message); 
    }

    const token = await response.json();
    return token;
  } catch (error) {
    console.log('login error', error);
    return Promise.reject('Could not log in');
  }
}

export { login };
