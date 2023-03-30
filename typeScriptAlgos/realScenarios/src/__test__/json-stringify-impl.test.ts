import { JsonStringify } from '../json-stringify-impl';
import { describe, expect, it, beforeEach } from '@jest/globals';

describe('JsonStringify', () => {
	it('should convert null to "null"', () => {
	  expect(JsonStringify(null)).toEqual('null');
	});
  
	it('should convert undefined to "null"', () => {
	  expect(JsonStringify(undefined)).toEqual('null');
	});
  
	it('should convert a number to a string', () => {
	  expect(JsonStringify(42)).toEqual('42');
	});
  
	it('should convert a boolean to a string', () => {
	  expect(JsonStringify(true)).toEqual('true');
	});
  
	it('should convert a string to a JSON string', () => {
	  expect(JsonStringify('hello world')).toEqual('"hello world"');
	});
  
	it('should convert an array to a JSON string', () => {
	  expect(JsonStringify([1, 2, 3, 'a'])).toEqual('[1,2,3,"a"]');
	});
  
	it('should convert an object to a JSON string', () => {
	  expect(JsonStringify({a: 1, b: 'hello'})).toEqual('{"a":1,"b":"hello"}');
	});
  
	it('should throw an error for circular references', () => {
	  const obj: any = {};
	  obj.a = obj;
	  expect(() => JsonStringify(obj)).toThrow(TypeError);
	});
  
	it('should throw an error for unsupported types', () => {
	  expect(() => JsonStringify(() => {})).toThrow(TypeError);
	});
  });
  