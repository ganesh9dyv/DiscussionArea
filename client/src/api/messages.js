import axios from 'axios';
import { BASE_URL } from "../config";

const getConversations = async (user) => {
  try {
    const res = await axios.get(`${BASE_URL}api/messages`, {
      headers: {
        'x-access-token': user.token,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const getMessages = async (user, conversationId) => {
  try {
    const res = await axios.get(`${BASE_URL}api/messages/${conversationId}`, {
      headers: {
        'x-access-token': user.token,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const sendMessage = async (user, message, recipientId) => {
  try {
    const res = await axios.post(`${BASE_URL}api/messages/${recipientId}`, message, {
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

export { getConversations, getMessages, sendMessage };
