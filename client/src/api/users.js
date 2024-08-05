import axios from 'axios';
import { BASE_URL } from "../config";

const signup = async (user) => {
  try {
    const res = await axios.post(`${BASE_URL}api/users/register`, user, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const login = async (user) => {
  try {
    const res = await axios.post(`${BASE_URL}api/users/login`, user, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const getUser = async (params) => {
  try {
    const res = await axios.get(`${BASE_URL}api/users/${params.id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const getRandomUsers = async (query) => {
  try {
    const res = await axios.get(`${BASE_URL}api/users/random?${new URLSearchParams(query)}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const updateUser = async (user, data) => {
  try {
    console.log(user);
    const res = await axios.patch(`${BASE_URL}api/users/${user._id}`, data, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': user.token,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export { signup, login, getUser, getRandomUsers, updateUser };
