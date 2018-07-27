import ajax from './ajax'
let base = '/api'
/*1.获取商品列表*/
export const getGoods = ({page, pageSize, orderFlag, priceLevel}) => ajax(base + '/goods/list',{page, pageSize, orderFlag, priceLevel})
/*2.用户登陆*/
export const loginVerify = ({userName, userPwd}) => ajax(base + '/users/login', {userName, userPwd} ,'POST');
/*3.用户等出*/
export const logoutVerify = () => ajax(base + '/users/logout',{},'POST')
/*4.购物车*/
export const getCartInfo = () => ajax(base + '/users/carlist',{})
/*5.添加商品进入购物车*/
export const addGoods = ({productId}) =>ajax(base + '/goods/addCar',{productId},'POST')

