

// Data
let employeeShelerCount = 15;
let rawMaterialValue = 5000000;
let laborWagesPerSeason = 1700000;
let perSeasonProfits = 6000000;


// Entity

class Employee {
	// public name: string;
	// private age: number;
	// private phoneNumber: number;

	// instance properties
	private constructor(public name: string, private age: number, private address: string, private phoneNumber: number) { }

	getAge(): number { return this.age; }

	getPhoneNumber(): number { return this.phoneNumber; }

	static build(name: string, age: number, address: string, phoneNumber: number): Employee {
		return new Employee(name, age, address, phoneNumber);
	}

}

// const emp = new Employee("alice", 20, "h road", 12312312);
// console.log(emp.name);
// console.log(emp.getAge());
// console.log(emp.getPhoneNumber());

const emp = Employee.build("alice", 20, "hroad", 12312312);
console.log(emp.name);
console.log(emp.getAge());
console.log(emp.getPhoneNumber());
