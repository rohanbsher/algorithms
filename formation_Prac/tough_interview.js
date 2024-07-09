/*

We have a graph made of plain objects whose keys are all strings, and whose values can be either: a string, a number, an array, or another plain object. The elements of the array or plain objects will be the same as for the root object: string, number, array, or an object. Each object is guaranteed to have a key named "id" whose value is a unique number. Convert this data structure to a JSON string, using `{ "ref": <id> }` wherever an object appears which has already been converted.

let root = {
  "id": 0,
  "text": "Hello world!",
  "next": {
      "id": 1,
      "text": "Hello, again!",
      "next": null,
      "nextPt": {
        "id: '99'

      }

  },
  "last": [{}, {}]
  "pointer": "next pointer"
}

root.next.next = root;

let result = '{ "id": 0, "text": "Hello world!", "next": { "id": 1, "text": "Hello, again!", "next": { "ref": 0 }}}'

assumption 
- each object has a unique id whose value is a number
- correctly formatted json :
    {
      "id": 0,
      "text": "Hello World",
      "next": {
        "id": 1,
        "next"
      } 
    }

we know there are cycles present as well

solutions :

we have to flatten the object graph and then convert into JSON.

// input and output

// a graph 

var input = {
  "id": 2,
  "alpha": {
    id: 0,
    next: "as"
  },
  "bravo": {
    id: 1,
    next: "try"
    
  }
}

input.alpha.next = input.bravo;
input.bravo.next = input.alpha;

return - {"id": 2, "alpha": { id: 0, next: "as" }, "bravo": {  }, "charlie": { }}

{"id": value, "fields", "values"}

algorithm :

recursion : once we hit a cycle how do we decide where to move ? 

*/

function convertJson(input) /* return JSON string */ {
	// convert a single object
	
	  let returnJson = ""
	
	  if (input && input.id) {
		returnJson.concat("{")
	  }
	
	  for (let propertyName in Object.keys(input)) {
		returnJson.concat(propertyName + ": " + input[propertyName])
	  }
	
	}