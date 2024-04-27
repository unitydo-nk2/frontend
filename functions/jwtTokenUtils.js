export const tokenUtil = {
    paresJWT : function (token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url == undefined ? undefined : base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload)},
    getEmail : function (token) { return paresJWT(token).sub },
    getName : function (token) { return paresJWT(token).name },
}
