export class Email {
    public email: string;
    constructor(email: string) {
        if (this.validateEmail(email)) {
            this.email = email;
        }
        else {
            throw new Error("Invalid email!");
        }
    }
    validateEmail(email: string) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
}
