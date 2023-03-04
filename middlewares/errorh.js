function errorHandler(err, req, res, next) {
	switch (err.name) {
		case "ErrorBadRequest":
			res.status(400).json({
				message: "Bad Request",
			});
			break;
		case "ErrorUnauthorized":
			res.status(401).json({
				message: "Unauthorized",
			});
			break;
		case "ErrorForbidden":
			res.status(403).json({
				message: "Forbidden",
			});
			break;
		case "ErrorNotFound":
			res.status(404).json({
				message: "Not Found",
			});
			break;
		case "ErrorTimeout":
			res.status(408).json({
				message: "Request Timeout",
			});
			break;
		case "ErrorGone":
			res.status(410).json({
				message: "Content Gone",
			});
			break;
		default:
			res.status(500).json({
				message: "Internal Server Error",
			});
	}

	console.log(err);
}

module.exports = errorHandler;
