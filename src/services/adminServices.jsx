import { api } from "../api";

export const adminLogin = async (data) => {
  try {
    const res = await api.post("/admin", data);
    return res;
  } catch (error) {
    return error.response;
  }
};

export const updateAdmin = async (data) => {
  try {
    const res = await api.post("/updateAdmin", data);
    return res;
  } catch (error) {
    return error.response;
  }
};

export const getAdmin = async () => {
  try {
    const res = await api.get("/getAdmin");
    return res;
  } catch (error) {
    return error.response;
  }
};

export const logoutAdmin = async () => {
  try {
    const res = await api.post("/logout");
    return res
  } catch (error) {
    return error.response;
  }
};