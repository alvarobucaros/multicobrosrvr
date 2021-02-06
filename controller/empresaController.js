const controller = {};

controller.inicio = (req, res) => {
  res.send("Bueno !!!");
}

var sql = "id, em_idEmpresa, em_nombre, em_email, em_direccion, em_ciudad, em_localidad, "
sql +=" em_tipoDoc, em_nroDoc, em_telefono, em_autentica, em_estado ";

module.exports = controller;
  