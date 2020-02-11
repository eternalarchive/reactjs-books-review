import axios from 'axios';

const LOGIN_API_URL = 'https://api.marktube.tv/v1/me';

export default class LoginService {
  static async login(email, password) {
    return await axios.post(LOGIN_API_URL, {
      email,
      password,
    });
  }

  static async logout(token) {
    return axios.delete(LOGIN_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
