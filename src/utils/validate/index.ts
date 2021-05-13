


export function validUsername(str:string) {
  const valid_map = ['admin', 'editor','wumin']
  return valid_map.indexOf(str.trim()) >= 0
}

export function validLowerCase(str:string) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

export function validAlphabets(str:string) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}





/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg:string) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}


export function isPhoneNum(phoneNumber:string) {
  let reg = /^1[3456789]\d{9}$/;
  return reg.test(phoneNumber);
}
/**
 * 校验身份证是否正确
 * @param idCard {number} 身份证号码
 * @param site {string} 地区
 * @return {boolean}
 */
export function isIdCard(idCard:string, site:string) {
  let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; // 默认中国大陆
  if (site == '中国香港') {
    reg = /^((\s?[A-Za-z])|([A-Za-z]{2}))\d{6}(\([0?9aA]\)|[0-9aA])$/;
  } else if (site == '中国澳门') {
    reg = /^[1|5|7][0-9]{6}\([0-9Aa]\)/;
  } else if (site == '中国台湾') {
    reg = /^[a-zA-Z][0-9]{9}$/;
  }
  return reg.test(idCard)
}

/**
 * 校验上传身份证附件名字
 * @param str
 * @return {boolean}
 */
export function idCardFileName(str:string) {
  const regex = /^(\d+)_([\u4e00-\u9fa5]{2,})_(\d{17})(\d|X|x)_(正面|背面).(jpg|png|gif)$/;
  return regex.test(str)
}

/**
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL(url:string) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}




