# xiaomi

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

服务器地址：127.0.0.1:3000

#接口文档
1.获取商品列表
TYPE: GET
URL: /goods/list
params: page        起始页                  (必选)
        pageSize    每页个数                (必选)
        orderFlag   排序 true ↑            （必选）
        priceLevel  价格等级 0 1 2 3 默认 0 （可选）
example: /goods/list?page=2&pageSize=8&orderFlag=true
response:
        [
            {
                "productId": 17,
                "productName": "小米运动蓝牙耳机",
                "productPrice": 129,
                "productImg": "17.jpg"
            }
        ]
2.用户登陆
TYPE:POST
URL: /users/login
params: userName sunyu  userPwd 123456
setRequestHeader :x-www-form-urlencoded
response : {
               "status": 0,
               "msg": "",
               "result": {
                   "userName": "sunyu"
               }
           }
3.用户登出
TYPE:POST
URL: /users/logout
params:
response: {
              "status": "0",
              "msg": "",
              "result": ""
          }
4.获取购物车信息
权限cookie 中 userId
TYPE：GET
URL:/users/carlist
params:
response: {
           "status": "0",
           "msg": "",
           "result": [{Id:"0000000030"
                       checked:1
                       productId:19
                       productImage:"19.jpg"
                       productName:"小米6X 极简保护壳"
                       productNum:2
                       salePrice:"29"
                       userId:1}]
           }
5.添加购物车
权限cookie userId
TYPE: POST
URL:/goods/addCar
params: productId  商品ID
response: {
}
