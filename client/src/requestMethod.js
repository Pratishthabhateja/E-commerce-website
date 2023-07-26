import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjYzN2U4ZGYzMjI0NWJmMjBmMTc5MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTc0NDc2OCwiZXhwIjoxNjkwNjA4NzY4fQ.trmdpm0yWDPo8hYSziNLb-u4wvXWTiYjdkK30F0Pw1E";
export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });