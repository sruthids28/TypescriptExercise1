var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function updateUser(user) {
    var existingUser = { id: 101, name: "sruthi", email: "sruthi@gmail.com" };
    var updatedUser = __assign(__assign({}, existingUser), user);
    console.log(updatedUser);
}
updateUser({});
updateUser({ name: "Diya" });
updateUser({ email: "Diya@gmail.com" });
updateUser({ id: 102, name: "Riya" });
