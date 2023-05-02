export class MyDto {
    firstName: string;
    lastName: string;
    fullName: Function | undefined;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}