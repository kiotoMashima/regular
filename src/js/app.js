export default class Validator {
    constructor() {
        this.usernameRegex = /^(?!.*\d{4})(?!^[\d_-])(?!.*[\d_-]$)[a-zA-Z0-9_-]+$/;
    }
    
    validateUsername(username) {
        return this.usernameRegex.test(username);
    }
    }