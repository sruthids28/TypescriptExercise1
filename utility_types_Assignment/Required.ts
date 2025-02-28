interface UserProfile {
    id?: number;
    name?: string;
    age?: number;
}  
type RequiredUserProfile = Required<UserProfile>;
const userProfile: RequiredUserProfile = {
    id: 101,
    name: "Sruthi",
    age: 21
};
console.log(userProfile);