exports.formResponseObject = (condition, success, error) => {
    if (condition) {
        return {
            "success": success
        }
    } else {
        return {
            "error": error
        }
    }
};
