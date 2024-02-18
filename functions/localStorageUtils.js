export const localStorageUtil = {
    set : function (key,value) {localStorage.setItem(key,value)},
    get : function (key) { return localStorage.getItem(key)},
    signOut : function () { 
    localStorage.removeItem("refreshToken")
    localStorage.removeItem("token") 
    localStorage.setItem("role","Guest")
    localStorage.setItem("isLogin",false)
}
}
