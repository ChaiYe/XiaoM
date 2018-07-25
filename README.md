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
