const Regs = {
  phone: /^((\+|00)86)?1[3-9]\d{9}$/,
  phone2: /^((\+|00)86)?1((3[\d])|(4[5,6,7,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[\d])|(9[1,8,9]))\d{8}$/,
  email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  idCard: /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/,
  bankCard: /^([1-9]{1})(\d{15}|\d{18})$/,
};

/**
 * test 方法
 * @param {*} reg 
 * @param {*} val 
 * @returns {Boolean}
 */
const regTest = (reg, val) => !!(reg.test(val));

/**
 * 手机
 */
export const phoneExp = phone => regTest(Regs.phone, phone);
export const phoneVerify = phone => regTest(Regs.phone2, phone);

/**
 * 邮箱
 */
export const emailVerify = email => regTest(Regs.email, email);

/**
 * 身份证
 */
export const idCardVerify = idCard => regTest(Regs.idCard, idCard);

/**
 * 银行卡
 */
export const bankCardVerify = bankCard => regTest(Regs.bankCard, bankCard);