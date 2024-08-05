import axios from 'axios';
import { BASE_URL } from "../config";

const getUserLikedPosts = async (likerId, token, query) => {
  try {
    const res = await axios.get(`${BASE_URL}api/posts/liked/${likerId}?${new URLSearchParams(query)}`, {
      headers: {
        'x-access-token': token,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const getPosts = async (token, query) => {
  try {
    const res = await axios.get(`${BASE_URL}api/posts?${new URLSearchParams(query)}`, {
      headers: {
        'x-access-token': token,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const getPost = async (postId, token) => {
  try {
    const res = await axios.get(`${BASE_URL}api/posts/${postId}`, {
      headers: {
        'x-access-token': token,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const getUserLikes = async (postId, anchor) => {
  try {
    const res = await axios.get(`${BASE_URL}api/posts/like/${postId}/users?${new URLSearchParams({ anchor })}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const createPost = async (post, user) => {
  try {
    const res = await axios.post(`${BASE_URL}api/posts`, post, {
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

const updatePost = async (postId, user, data) => {
  try {
    const res = await axios.patch(`${BASE_URL}api/posts/${postId}`, data, {
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

const deletePost = async (postId, user) => {
  try {
    const res = await axios.delete(`${BASE_URL}api/posts/${postId}`, {
      headers: {
        'x-access-token': user.token,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const getComments = async (params) => {
  try {
    const { id } = params;
    const res = await axios.get(`${BASE_URL}api/comments/post/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const getUserComments = async (params) => {
  try {
    const { id, query } = params;
    const res = await axios.get(`${BASE_URL}api/comments/user/${id}?${new URLSearchParams(query)}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const createComment = async (comment, params, user) => {
  try {
    const { id } = params;
    const res = await axios.post(`${BASE_URL}api/comments/${id}`, comment, {
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

const updateComment = async (commentId, user, data) => {
  try {
    const res = await axios.patch(`${BASE_URL}api/comments/${commentId}`, data, {
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

const deleteComment = async (commentId, user) => {
  try {
    const res = await axios.delete(`${BASE_URL}api/comments/${commentId}`, {
      headers: {
        'x-access-token': user.token,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const likePost = async (postId, user) => {
  try {
    const res = await axios.post(`${BASE_URL}api/posts/like/${postId}`, null, {
      headers: {
        'x-access-token': user.token,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const unlikePost = async (postId, user) => {
  try {
    const res = await axios.delete(`${BASE_URL}api/posts/like/${postId}`, {
      headers: {
        'x-access-token': user.token,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export {
  getPost,
  createPost,
  updatePost,
  deletePost,
  getPosts,
  getUserComments,
  getUserLikedPosts,
  getComments,
  createComment,
  deleteComment,
  updateComment,
  likePost,
  unlikePost,
  getUserLikes,
};
