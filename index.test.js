 
const typeOf = require('./index');
describe('typeOf', () => {
  test('should return null when the input is null', () => {
    expect(typeOf(null)).toBeNull();
  });

  test('should return "object" for plain objects', () => {
    expect(typeOf({})).toBe('object');
  });

  test('should return "array" for arrays', () => {
    expect(typeOf([])).toBe('array');
  });

  test('should return "date" for Date objects', () => {
    expect(typeOf(new Date())).toBe('date');
  });

  test('should return "regexp" for RegExp objects', () => {
    expect(typeOf(/abc/)).toBe('regexp');
  });

  test('should return "map" for Map objects', () => {
    expect(typeOf(new Map())).toBe('map');
  });

  test('should return "set" for Set objects', () => {
    expect(typeOf(new Set())).toBe('set');
  });

  test('should return "function" for functions', () => {
    expect(typeOf(function() {})).toBe('function');
    expect(typeOf(() => {})).toBe('function');
  });

  test('should return "string" for string values', () => {
    expect(typeOf('hello')).toBe('string');
    expect(typeOf("world")).toBe('string');
  });

  test('should return "number" for numeric values', () => {
    expect(typeOf(42)).toBe('number');
    expect(typeOf(3.14)).toBe('number');
    expect(typeOf(NaN)).toBe('number');
  });

  test('should return "boolean" for boolean values', () => {
    expect(typeOf(true)).toBe('boolean');
    expect(typeOf(false)).toBe('boolean');
  });

  test('should return "undefined" for undefined values', () => {
    expect(typeOf(undefined)).toBe('undefined');
  });

  test('should handle custom objects with a constructor name', () => {
    class CustomClass {}
    expect(typeOf(new CustomClass())).toBe('customclass');
  });

  test('should return "bigint" for BigInt values', () => {
    expect(typeOf(BigInt(123))).toBe('bigint');
  });

  test('should return "symbol" for Symbol values', () => {
    expect(typeOf(Symbol('test'))).toBe('symbol');
  });

  test('should return "error" for Error objects', () => {
    expect(typeOf(new Error('An error'))).toBe('error');
  });
});
