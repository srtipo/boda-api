export default class DBError extends Error {
    constructor(message, StringCode) {
        super(message);
        this.StringCode = StringCode;
        this.errorMessage = message;
        this.httpStatusCode=400;
    }
}