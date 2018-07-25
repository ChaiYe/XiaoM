export const getCookieAttr =  function (attr) {
    let ckStr = document.cookie;
    let ary =ckStr.split(/ *\; */g)
    let obj = {}
    ary.forEach(item =>{
      let ary2 = item.split('=')
      obj[ary2[0]] = ary2[1]
    })
    return obj[attr]
}
