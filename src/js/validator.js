export default class Validator {
  static checkPhone(phone) {
    let result = phone.replace(/\D/g, '');
    if (result.length === 11 && /^[87]/.test(result)) {
      result = result.replace(/^[87]/, '+7');
    } else result = `+${result}`;
    return result;
  }
}
