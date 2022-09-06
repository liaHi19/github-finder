import { createContext, useReducer, useState } from "react";
import axios from "axios";

import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);
  const [page, setPage] = useState(1);
  const perPage = 10;

  const prevPage = () => {
    setPage((prev) => prev - 1);
  };

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  //get search results
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });
    const response = await github.get(`/search/users?${params}`);
    const items = await response.data.items;

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  //getUserAndRepos

  const getUserAndRepos = async (login) => {
    setLoading();

    const params = new URLSearchParams({
      sort: "created",
      per_page: perPage,
      page: page,
    });

    const [user, repos] = await Promise.all([
      github.get(`/users/${login}`),
      github.get(`/users/${login}/repos?${params}`),
    ]);

    const data = { user: user.data, repos: repos.data };

    dispatch({
      type: "GET_USER_AND_REPOS",
      payload: data,
    });
  };

  //clear Users
  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
      payload: [],
    });
  };

  //setLoading
  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  return (
    <GithubContext.Provider
      value={{
        ...state,
        page,
        perPage,
        searchUsers,
        clearUsers,
        getUserAndRepos,
        prevPage,
        nextPage,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
