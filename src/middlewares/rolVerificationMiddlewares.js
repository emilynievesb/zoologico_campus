const rolVerificatorMiddlewareJefePersonal = async (req, res, next) => {
    try {
        let { payload } = req.data
        const { rol, ...newPayload } = payload
        payload = newPayload
        req.data = { payload }
        if (rol == "admin" || rol == "jefePersonal") {
            next()
        } else {
            res.status(500).send({ message: "Este usuario no esta autorizado para este proceso" })
        }
    } catch (error) {
        res.status(498).send({ status: 498, token: "Token caducado" });
    }
};

const rolVerificatorMiddlewareStaff = async (req, res, next) => {
    try {
        let { payload } = req.data
        const { rol, ...newPayload } = payload
        payload = newPayload
        req.data = { payload }
        if (rol == "admin" || rol == "staff") {
            next()
        } else {
            res.status(500).send({ message: "Este usuario no esta autorizado para este proceso" })
        }
    } catch (error) {
        res.status(498).send({ status: 498, token: "Token caducado" });
    }
};

const rolVerificatorMiddlewareTaquillero = async (req, res, next) => {
    try {
        let { payload } = req.data
        const { rol, ...newPayload } = payload
        payload = newPayload
        req.data = { payload }
        if (rol == "admin" || rol == "taquillero") {
            next()
        } else {
            res.status(500).send({ message: "Este usuario no esta autorizado para este proceso" })
        }
    } catch (error) {
        res.status(498).send({ status: 498, token: "Token caducado" });
    }
};

const rolVerificatorMiddlewareMedico = async (req, res, next) => {
    try {
        let { payload } = req.data
        const { rol, ...newPayload } = payload
        payload = newPayload
        req.data = { payload }
        if (rol == "admin" || rol == "medico") {
            next()
        } else {
            res.status(500).send({ message: "Este usuario no esta autorizado para este proceso" })
        }
    } catch (error) {
        res.status(498).send({ status: 498, token: "Token caducado" });
    }
};

const rolVerificatorMiddlewareAdmin = async (req, res, next) => {
    try {
        let { payload } = req.data
        const { rol, ...newPayload } = payload
        payload = newPayload
        req.data = { payload }
        if (rol == "admin") {
            next()
        } else {
            res.status(500).send({ message: "Este usuario no esta autorizado para este proceso" })
        }
    } catch (error) {
        res.status(498).send({ status: 498, token: "Token caducado" });
    }
};

export {
    rolVerificatorMiddlewareJefePersonal,
    rolVerificatorMiddlewareStaff,
    rolVerificatorMiddlewareTaquillero,
    rolVerificatorMiddlewareMedico,
    rolVerificatorMiddlewareAdmin
};