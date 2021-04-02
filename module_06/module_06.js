'use strict';
import users from "./users.js";
// Задание 1
const getUserNames = users => users.map(user => user.name);
console.log(getUserNames(users));

// Задание 2
const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);
console.log(getUsersWithEyeColor(users, 'blue'));

// Задание 3
const getUsersWithGender = (users, gender) => users.filter(user => user.gender === gender).map(user => user.name);
console.log(getUsersWithGender(users, 'male'));

// Задание 4
const getInactiveUsers = users => users.filter(user => !user.isActive);
console.log(getInactiveUsers(users))

// Задание 5
const getUserWithEmail = (users, email) => users.find(user => user.email === email);
console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

// Задание 6 
const getUsersWithAge = (users, min, max) => users.filter(user => user.age >= min && user.age < max);
console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

// Задание 7
const calculateTotalBalance = users => users.reduce((total, user) => total + user.balance, 0);
console.log(calculateTotalBalance(users));

// Задание 8 
const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends
    .some(friend => friend === friendName))
    .map(user => user.name);
console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));

// Задание 9 
const getNamesSortedByFriendsCount = users => users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);
console.log(getNamesSortedByFriendsCount(users));

// Задание 10
const getSortedUniqueSkills = users => users
    .map(user => user.skills)
    .reduce((allSkills, user) => [...allSkills, ...user], [])
    .filter((skill, index, array) => array.indexOf(skill) === index)
    .sort();
console.log(getSortedUniqueSkills(users));



