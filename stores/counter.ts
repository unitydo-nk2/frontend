import { defineStore } from "pinia";
import { tokenUtil} from '../functions/jwtTokenUtils'
import {localStorageUtil} from '../functions/localStorageUtils'

export const useCounterStore = defineStore("counter", {
  state: () => ({
    email:"",
    username: "",
    activityLookUp: {},
    role: "Guest",
    isLogin: false,
    isGoogleLogin: false,
    token: "",
    refreshToken: "",
  }),
  getters: {
    getIsLogin: (state) => state.isLogin,
    getEmail: (state) => tokenUtil.paresJWT(state.token).sub,
  },
  actions: {
    setFromToken(token:string, refreshToken:string){
      this.role = tokenUtil.paresJWT(token).role;
      this.isLogin = true;
      this.token = token;
      this.refreshToken = refreshToken;
      this.username = tokenUtil.paresJWT(token).name;
     },
    changeEmail(email: string) {
      this.email = email;
      console.log(email);
    },
    changeUserName(name: string) {
      this.username = name;
      console.log(name);
    },
    changeActivity(activity: Object) {
      this.activityLookUp = activity;
      console.log(activity);
    },
    systemLogin(role: string, token: string, refreshToken: string) {
      this.role = role;
      this.isLogin = true;
      this.isGoogleLogin = false;
      this.token = token;
      this.refreshToken = refreshToken;
      this.username = tokenUtil.paresJWT(token).name;
      localStorageUtil.set('role',this.role)   
      localStorageUtil.set('isLogin',this.isLogin)   
      localStorageUtil.set('token',this.token)   
      localStorageUtil.set('refreshToken',this.refreshToken)   
      localStorageUtil.set('username',this.username)   
    },
    googleLogin(role: string, token: string, refreshToken: string) {
      this.role = role;
      this.isLogin = true;
      this.isGoogleLogin = true;
      this.token = token;
      this.refreshToken = refreshToken;
      this.username = tokenUtil.paresJWT(token).name;
      localStorageUtil.set('role',this.role)   
      localStorageUtil.set('isLogin',this.isLogin)   
      localStorageUtil.set('token',this.token)   
      localStorageUtil.set('refreshToken',this.refreshToken)   
      localStorageUtil.set('username',this.username)   
    },
    logout() {
      this.role = "Guest";
      this.isLogin = false;
      this.isGoogleLogin = false;
      this.token = "";
      this.refreshToken = "";
      this.username = '';
      localStorageUtil.set('role',this.role)   
      localStorageUtil.set('isLogin',this.isLogin)   
      localStorageUtil.set('token',this.token)   
      localStorageUtil.set('refreshToken',this.refreshToken)   
      localStorageUtil.set('username',this.username)   
    },
  },
});
