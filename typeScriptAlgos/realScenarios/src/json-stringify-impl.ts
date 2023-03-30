export function JsonStringify(obj: any): string {
	const seen = new WeakSet(); // Keep track of circular references
	
	return stringifyValue(obj, seen);
  }
  
  function stringifyValue(val: any, seen: WeakSet<any>): string {
	if (val === null || val === undefined) {
	  return 'null';
	}
  
	if (typeof val === 'number' || typeof val === 'boolean') {
	  return val.toString();
	}
  
	if (typeof val === 'string') {
	  return `"${val}"`;
	}
  
	if (Array.isArray(val)) {
	  return `[${val.map(el => stringifyValue(el, seen)).join(',')}]`;
	}
  
	if (typeof val === 'object') {
	  if (seen.has(val)) {
		throw new TypeError('Converting circular structure to JSON');
	  }
  
	  seen.add(val);
  
	  const keys = Object.keys(val);
	  const keyValues = keys.map(key => `"${key}":${stringifyValue(val[key], seen)}`);
	  return `{${keyValues.join(',')}}`;
	}
  
	throw new TypeError(`Unsupported type: ${typeof val}`);
  }
  