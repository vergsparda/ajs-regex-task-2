import Validator from './validator';

test('phone test1', () => {
  const phone = '8 (345) 000-25-23';
  const result = '+73450002523';

  expect(Validator.checkPhone(phone)).toBe(result);
});

test('phone test2', () => {
  const phone = '8 345 000 25 23';
  const result = '+73450002523';

  expect(Validator.checkPhone(phone)).toBe(result);
});

test('phone test3', () => {
  const phone = '56*987%345$3456#';
  const result = '+569873453456';

  expect(Validator.checkPhone(phone)).toBe(result);
});
