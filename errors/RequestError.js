export default class RequestError extends Error {
    constructor(error, StringCode) {
        const message = JSON.parse(error).map((error) => {
            return  {path: error.path, message: error.message}
          });
        console.log(message);
        super(message);
        this.StringCode = StringCode;
        this.errorMessage = message;
        this.httpStatusCode=400;
    }
}