export function createInputConfig(inputQuession) {

    function haveMiddleware(name) {
        return inputQuession.middleware.indexOf(name)
    }

    return {
        packageName: inputQuession.packageName,
        version: inputQuession.version,
        middleware: {
            static: haveMiddleware("static"),
            router: haveMiddleware("router")
        }
    }
    
}


