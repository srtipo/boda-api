export default function errorHandlerMiddleware(err, req, res, next) {
  if (err instanceof SyntaxError) {
    return res.status(400).json({
    code: 'SYNTAX_ERROR',
    message: err.message,
    });
  }
  if (err instanceof Error) {
    return res.status(err.httpStatusCode ?? 500).json({
        code: err.StringCode ?? 'UNKNOWN_ERROR',
        message: err.errorMessage?? err.message,
    });
  }
  next(err);
}