const logger = require('./logger')

//logger.info("esto es un mensaje informativo");
//logger.debug("esto es un mensaje de debug");
//logger.warn("esto es un mensaje de advertencia");
//logger.error("esto es error");

function mensajeError() {
    throw new Error("esta funcion muestra el error")
}

try {
    mensajeError();
} catch (e) {
    logger.log("error", e.toString());
}