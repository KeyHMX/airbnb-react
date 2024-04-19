function styleStrToObject(styleStr) {
  //由于jsx 的style里只能是对象形式的，故为了便利，写了这个函数
  const obj = {};
  const s = styleStr
    .toLowerCase()
    .replace(/-(.)/g, function (m, g) {
      return g.toUpperCase();
    })
    .replace(/;\s?$/g, "")
    .split(/:|;/g);
  for (var i = 0; i < s.length; i += 2) {
    obj[s[i].replace(/\s/g, "")] = s[i + 1].replace(/^\s+|\s+$/g, "");
  }

  return obj;
}

export default styleStrToObject;
