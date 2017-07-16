import {Profile} from '../../models/profile/profile.interface';

const userList: Profile [] = [
    {firstName:'Eduardo',lastName: 'Torres', email: 'eduk_1012@hotmail.com',avatar: 'assets/img/logo.png',dateOfBirth: new Date()},
    {firstName:'Jio',lastName: 'Krilin', email: 'jio@hotmail.com',avatar: 'assets/img/logo.png',dateOfBirth: new Date()}, 
    {firstName:'Damian',lastName: 'Mian', email: 'damian@hotmail.com',avatar: 'assets/img/logo.png',dateOfBirth: new Date()},   
    {firstName:'Edgar',lastName: 'Torres', email: 'blast_edgar@hotmail.com',avatar: 'assets/img/logo.png',dateOfBirth: new Date()},
];
export const USER_LIST = userList;