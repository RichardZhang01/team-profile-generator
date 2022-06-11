const Intern = require('../lib/Intern');

describe('Intern', () => {

    describe("Initialization", () => {

        it('should return a new "Intern" object when called with the "new" keyword and provided valid arguments', () => {
            const name = 'Bob';
            const id = 20;
            const email = 'bob@email.com';
            const school = 'MIT';

            const intern = new Intern(name, id, email, school);

            expect(intern).toBeInstanceOf(Intern);
        });

        it('should create an object containing "name", "id", "email", and "school" properties when provided valid arguments', () => {
            const name = 'Bob';
            const id = 20;
            const email = 'bob@email.com';
            const school = 'MIT';

            const intern = new Intern(name, id, email, school);

            expect("name" in intern).toEqual(true);
            expect("id" in intern).toEqual(true);
            expect("email" in intern).toEqual(true);
            expect("school" in intern).toEqual(true);
        });

        it('should create an object with values for "name", "id", "email", and "school" mapped to the correct keys if provided valid arguments in the correct order', () => {
            const name = 'Bob';
            const id = 20;
            const email = 'bob@email.com';
            const school = 'MIT';

            const intern = new Intern(name, id, email, school);

            expect(intern.name).toEqual(name);
            expect(intern.id).toEqual(id);
            expect(intern.email).toEqual(email);
            expect(intern.school).toEqual(school);
        });

        it("should throw an error if provided no arguments", () => {
            const cb = () => new Intern();
      
            expect(cb).toThrow();
        });

        it("should throw an error if 'name' is undefined", () => {
            let nameUndefined;
            const id = 20;
            const email = 'bob@email.com';
            const school = 'MIT';
            
            const cb = () => new Intern(nameUndefined, id, email, school);
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'name' is not a string", () => {
            const nameNotAString = 10;
            const id = 20;
            const email = 'bob@email.com';
            const school = 'MIT';

            const cb = () => new Intern(nameNotAString, id, email, school);
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(cb).toThrowError(err)
        });

        it("should throw an error if 'name' is an empty string", () => {
            const nameEmptyString = '';
            const id = 20;
            const email = 'bob@email.com';
            const school = 'MIT';
            
            const cb = () => new Intern(nameEmptyString, id, email, school);
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(cb).toThrowError(err)
        });

        it("should throw an error if not provided an id, email, or school", () => {
            const name = 'Bob';
            
            const cb = () => new Intern(name);
      
            expect(cb).toThrow();
        });

        it("should throw an error if 'id' is undefined", () => {
            const name = 'Bob';
            let idUndefined;
            const email = 'bob@email.com';
            const school = 'MIT';
            
            const cb = () => new Intern(name, idUndefined, email, school);
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is not a number", () => {
            const name = 'Bob';
            const idNotANumber = "20";
            const email = 'bob@email.com';
            const school = 'MIT';
            
            const cb = () => new Intern(name, idNotANumber, email, school);
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is a negative number", () => {
            const name = 'Bob';
            const idNegativeNumber = -20;
            const email = 'bob@email.com';
            const school = 'MIT';
            
            const cb = () => new Intern(name, idNegativeNumber, email, school);
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided an email or school", () => {
            const name = 'Bob';
            const id = 20;
            
            const cb = () => new Intern(name, id);
      
            expect(cb).toThrow();
        });

        it("should throw an error if 'email' is not a string", () => {
            const name = 'Bob';
            const id = 20;
            const emailNotAString = 10;
            const school = 'MIT';
                
            const cb = () => new Intern(name, id, emailNotAString, school);
            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' is an empty string", () => {
            const name = 'Bob';
            const id = 20;
            const emailEmptyString = '';
            const school = 'MIT';
            
            const cb = () => new Intern(name, id, emailEmptyString, school);
            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' is undefined", () => {
            const name = 'Bob';
            const id = 20;
            let emailUndefined;
            const school = 'MIT';
            
            const cb = () => new Intern(name, id, emailUndefined, school);
            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided a school", () => {
            const name = 'Bob';
            const id = 20;
            const email = 'bob@email.com';
            
            const cb = () => new Intern(name, id, email);
            const err = new Error("Expected parameter 'school' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'school' is not a string", () => {
            const name = 'Bob';
            const id = 20;
            const email = 'bob@email.com';
            const schoolNotAString = 10;

            const cb = () => new Intern(name, id, email, schoolNotAString);
            const err = new Error("Expected parameter 'school' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'school' is an empty string", () => {
            const name = 'Bob';
            const id = 20;
            const email = 'bob@email.com';
            const schoolEmptyString = '';
            
            const cb = () => new Intern(name, id, email, schoolEmptyString);
            const err = new Error("Expected parameter 'school' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

    });

    describe("getName", () => {

        it("should return the 'Intern' object's 'name' value", () => {
            const name = 'Bob';
            const id = 20;
            const email = 'bob@email.com';
            const school = 'MIT';
            const obj = new Intern(name, id, email, school);

            const result = obj.getName();

            expect(result).toEqual(name);
        });

    });

    describe("getId", () => {

        it("should return the 'Intern' object's 'id' value", () => {
            const name = 'Bob';
            const id = 20;
            const email = 'bob@email.com';
            const school = 'MIT';
            const obj = new Intern(name, id, email, school);

            const result = obj.getId();

            expect(result).toEqual(id);
        });

    });

    describe("getEmail", () => {

        it("should return the 'Intern' object's 'email' value", () => {
            const name = 'Bob';
            const id = 20;
            const email = 'bob@email.com';
            const school = 'MIT';
            const obj = new Intern(name, id, email, school);

            const result = obj.getEmail();

            expect(result).toEqual(email);
        });

    });

    describe("getSchool", () => {

        it("should return the 'Intern' object's 'school' value", () => {
            const name = 'Bob';
            const id = 20;
            const email = 'bob@email.com';
            const school = 'MIT';
            const obj = new Intern(name, id, email, school);

            const result = obj.getSchool();

            expect(result).toEqual(school);
        });

    });

    describe("getRole", () => {

        it("should return the string 'Intern' which describes the 'Intern' class", () => {
            const name = 'Bob';
            const id = 20;
            const email = 'bob@email.com';
            const school = 'MIT';
            const obj = new Intern(name, id, email, school);
            const str = 'Intern';

            const result = obj.getRole();

            expect(result).toEqual(str);
        });

        it("should not return the string 'Employee' since the getRole method extended from the Employee class has been overridden to return the string 'Intern'", () => {
            const name = 'Bob';
            const id = 20;
            const email = 'bob@email.com';
            const school = 'MIT';
            const obj = new Intern(name, id, email, school);
            const str = 'Employee';

            const result = obj.getRole();

            expect(result).not.toEqual(str);
        });

    });

});