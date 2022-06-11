const Manager = require('../lib/Manager');

describe('Manager', () => {

    describe("Initialization", () => {

        it('should return a new "Manager" object when called with the "new" keyword and provided valid arguments', () => {
            const name = 'Bob';
            const id = 20;
            const email = 'bob@email.com';
            const officeNumber = 123;

            const manager = new Manager(name, id, email, officeNumber);

            expect(manager).toBeInstanceOf(Manager);
        });

        it('should create an object containing "name", "id", "email", and "officeNumber" properties when provided valid arguments', () => {
            const name = 'Bob';
            const id = 20;
            const email = 'bob@email.com';
            const officeNumber = 123;

            const manager = new Manager(name, id, email, officeNumber);

            expect("name" in manager).toEqual(true);
            expect("id" in manager).toEqual(true);
            expect("email" in manager).toEqual(true);
            expect("officeNumber" in manager).toEqual(true);
        });

        it('should create an object with values for "name", "id", "email", and "officeNumber" mapped to the correct keys if provided valid arguments in the correct order', () => {
            const name = 'Bob';
            const id = 20;
            const email = 'bob@email.com';
            const officeNumber = 123;

            const manager = new Manager(name, id, email, officeNumber);

            expect(manager.name).toEqual(name);
            expect(manager.id).toEqual(id);
            expect(manager.email).toEqual(email);
            expect(manager.officeNumber).toEqual(officeNumber);
        });

        it("should throw an error if provided no arguments", () => {
            const cb = () => new Manager();
      
            expect(cb).toThrow();
        });

        it("should throw an error if 'name' is undefined", () => {
            let nameUndefined;
            const id = 20;
            const email = 'bob@email.com';
            const officeNumber = 123;
            
            const cb = () => new Manager(nameUndefined, id, email, officeNumber);
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'name' is not a string", () => {
            const nameNotAString = 10;
            const id = 20;
            const email = 'bob@email.com';
            const officeNumber = 123;
            
            const cb = () => new Manager(nameNotAString, id, email, officeNumber);
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(cb).toThrowError(err)
        });

        it("should throw an error if 'name' is an empty string", () => {
            const nameEmptyString = '';
            const id = 20;
            const email = 'bob@email.com';
            const officeNumber = 123;
            
            const cb = () => new Manager(nameEmptyString, id, email, officeNumber);
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(cb).toThrowError(err)
        });

        it("should throw an error if not provided an id, email, or officeNumber", () => {
            const name = 'Bob';
            
            const cb = () => new Manager(name);
      
            expect(cb).toThrow();
        });

        it("should throw an error if 'id' is undefined", () => {
            const name = 'Bob';
            let idUndefined;
            const email = 'bob@email.com';
            const officeNumber = 123;
            
            const cb = () => new Manager(name, idUndefined, email, officeNumber);
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is not a number", () => {
            const name = 'Bob';
            const idNotANumber = "20";
            const email = 'bob@email.com';
            const officeNumber = 123;
            
            const cb = () => new Manager(name, idNotANumber, email, officeNumber);
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is a negative number", () => {
            const name = 'Bob';
            const idNegativeNumber = -20;
            const email = 'bob@email.com';
            const officeNumber = 123;
            
            const cb = () => new Manager(name, idNegativeNumber, email, officeNumber);
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided an email or officeNumber", () => {
            const name = 'Bob';
            const id = 20;
            
            const cb = () => new Manager(name, id);
      
            expect(cb).toThrow();
        });

        it("should throw an error if 'email' is not a string", () => {
            const name = 'Bob';
            const id = 20;
            const emailNotAString = 10;
            const officeNumber = 123;
                
            const cb = () => new Manager(name, id, emailNotAString, officeNumber);
            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' is an empty string", () => {
            const name = 'Bob';
            const id = 20;
            const emailEmptyString = '';
            const officeNumber = 123;
            
            const cb = () => new Manager(name, id, emailEmptyString, officeNumber);
            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' is undefined", () => {
            const name = 'Bob';
            const id = 20;
            let emailUndefined;
            const officeNumber = 123;
            
            const cb = () => new Manager(name, id, emailUndefined, officeNumber);
            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided an officeNumber", () => {
            const name = 'Bob';
            const id = 20;
            const email = 'bob@email.com';
            
            const cb = () => new Manager(name, id, email);
            const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'officeNumber' is not a number", () => {
            const name = 'Bob';
            const id = 20;
            const email = 'bob@email.com';
            const officeNumberNotANumber = '123';

            const cb = () => new Manager(name, id, email, officeNumberNotANumber);
            const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'officeNumber' is a negative number", () => {
            const name = 'Bob';
            const id = 20;
            const email = 'bob@email.com';
            const officeNumberNegativeANumber = -123;
            
            const cb = () => new Manager(name, id, email, officeNumberNegativeANumber);
            const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

    });

    describe("getName", () => {

        it("should return the 'Manager' object's 'name' value", () => {
            const name = 'Bob';
            const id = 20;
            const email = 'bob@email.com';
            const officeNumber = 123;
            const obj = new Manager(name, id, email, officeNumber);

            const result = obj.getName();

            expect(result).toEqual(name);
        });

    });

    describe("getId", () => {

        it("should return the 'Manager' object's 'id' value", () => {
            const name = 'Bob';
            const id = 20;
            const email = 'bob@email.com';
            const officeNumber = 123;
            const obj = new Manager(name, id, email, officeNumber);

            const result = obj.getId();

            expect(result).toEqual(id);
        });

    });

    describe("getEmail", () => {

        it("should return the 'Manager' object's 'email' value", () => {
            const name = 'Bob';
            const id = 20;
            const email = 'bob@email.com';
            const officeNumber = 123;
            const obj = new Manager(name, id, email, officeNumber);

            const result = obj.getEmail();

            expect(result).toEqual(email);
        });

    });

    describe("getOfficeNumber", () => {

        it("should return the 'Manager' object's 'officeNumber' value", () => {
            const name = 'Bob';
            const id = 20;
            const email = 'bob@email.com';
            const officeNumber = 123;
            const obj = new Manager(name, id, email, officeNumber);

            const result = obj.getOfficeNumber();

            expect(result).toEqual(officeNumber);
        });

    });

    describe("getRole", () => {

        it("should return the string 'Manager' which describes the 'Manager' class", () => {
            const name = 'Bob';
            const id = 20;
            const email = 'bob@email.com';
            const officeNumber = 123;
            const obj = new Manager(name, id, email, officeNumber);
            const str = 'Manager';

            const result = obj.getRole();

            expect(result).toEqual(str);
        });

        it("should not return the string 'Employee' since the getRole method extended from the Employee class has been overridden to return the string 'Manager'", () => {
            const name = 'Bob';
            const id = 20;
            const email = 'bob@email.com';
            const officeNumber = 123;
            const obj = new Manager(name, id, email, officeNumber);
            const str = 'Employee';

            const result = obj.getRole();

            expect(result).not.toEqual(str);
        });

    });

});