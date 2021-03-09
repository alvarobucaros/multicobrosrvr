"use strict";

var controller = {};

controller.leeAnticipo = function (req, res) {
  var data = req.body;
  req.getConnection(function (err, conn) {
    var idEmpresa = 1; //req.params; req.body.idEmpresa

    var idUsuario = 1; //req.params; req.body.idEmpresa

    var sql = " SELECT id, an_idEmpresa, an_idUsuario, an_Fecha, an_Valor, an_Saldo ";
    sql += " FROM anticipos ";
    sql += " WHERE an_idEmpresa = " + idEmpresa + " AND an_idUsuario = " + idUsuario;
    console.log(sql);
    conn.query(sql, function (err, respuesta) {
      if (respuesta.length > 0) {
        res.json({
          data: respuesta
        });
      } else {
        res.json(err);
      }
    });
  });
};

controller.actualizaAnticipo = function (req, res) {};

controller.leeingregasto = function (req, res) {
  var data = req.body;
  req.getConnection(function (err, conn) {
    var idEmpresa = 1; //req.params; req.body.idEmpresa

    var sql = " SELECT id, ig_idEmpresa, ig_fecha, ig_tipo, ig_detalle, ";
    sql += " ig_numero, ig_documento, ig_idUsuario, ig_valor, ig_saldo ";
    sql += " FROM ingregasto ";
    sql += " WHERE ig_idEmpresa = " + idEmpresa + " ORDER BY ig_fecha, ig_tipo";
    console.log(sql);
    conn.query(sql, function (err, respuesta) {
      if (respuesta.length > 0) {
        res.send(resultado);
      } else {
        res.send({
          mensage: "no hay registros"
        });
      }
    });
  });
};

controller.updateIngreGasto = function (req, res) {
  req.getConnection(function (err, conn) {
    if (req.body.id === '0') {
      var sql = "INSERT INTO ingregasto (ig_idEmpresa, ig_fecha, ig_tipo, ig_detalle, ";
      sql += " ig_numero, ig_documento, ig_idUsuario, ig_valor, ig_saldo )";
      sql += ' VALUES ( ? , ? , ? , ?, ? , ? , ? , ?, ? ) ';
      console.log(sql);
      conn.query(sql, [req.body.ig_idEmpresa, req.body.ig_fecha, req.body.ig_tipo, req.body.ig_detalle, req.body.ig_numero, req.body.ig_documento, req.body.ig_idUsuario, req.body.ig_valor, req.body.ig_saldo], function (err, rows) {
        res.err;
      });
    } else {
      var sql = "UPDATE ingregasto  SET ig_idEmpresa = ? , ig_fecha = ? , ig_tipo = ? , ";
      sql += " ig_detalle = ? ,  ig_numero = ? , ig_documento = ? , ig_idUsuario = ? , ";
      sql += " ig_valor = ? , ig_saldo  = ? ";
      sql += " WHERE id = ? ";
      conn.query(sql, [req.body.ig_idEmpresa, req.body.ig_fecha, req.body.ig_tipo, req.body.ig_detalle, req.body.ig_numero, req.body.ig_documento, req.body.ig_idUsuario, req.body.ig_valor, req.body.ig_saldo, req.body.id], function (err, rows) {
        res.err;
      });
    }
  });
};

controller.deleteIngreGasto = function (req, res) {
  var id = req.params.id;
  var parts = id.split(':');
  id = parts[1];
  console.log(id);
  var data = req.params;
  req.getConnection(function (err, conn) {
    conn.query('DELETE FROM ingregasto WHERE id = ?', [id], function (err, rows) {
      res.err;
    });
  });
};

controller.leeotro = function (req, res) {
  var data = req.body;
  req.getConnection(function (err, conn) {
    var sql = "SELECT id, otroCodigo, otroNombre FROM otro ORDER BY otroCodigo ";
    console.log(sql);
    conn.query(sql, function (err, respuesta) {
      if (respuesta.length > 0) {
        res.send(respuesta);
      } else {
        res.json(err);
      }
    });
  });
}; //id, otroCodigo, otroNombre, otroFecha, otroTexto, otroEstado, otroPassword, otroSelectF, otroSelectV, otroEmail


controller.updateOtros = function (req, res) {
  req.getConnection(function (err, conn) {
    if (req.body.id === '0') {
      var sql = "INSERT INTO otro (otroCodigo, otroNombre, otroFecha, otroTexto, ";
      sql += " otroEstado, otroPassword, otroSelectF, otroSelectV, otroEmail) ";
      sql += ' VALUES ( ? , ?, ?, ?, ?, ?, ?, ?, ?  ) ';
      a = req.body.otroCodigo + '|' + req.body.otroNombre + '|' + req.body.otroFecha + '|' + req.body.otroTexto + '|' + req.body.otroEstado + '|' + req.body.otroPassword + '|' + req.body.otroSelectF + '|' + req.body.otroSelectV + '|' + req.body.otroEmail;
      console.log(sql + '~~~' + a);
      conn.query(sql, [req.body.otroCodigo, req.body.otroNombre, req.body.otroFecha, req.body.otroTexto, req.body.otroEstado, req.body.otroPassword, req.body.otroSelectF, req.body.otroSelectV, req.body.otroEmail], function (err, rows) {
        res.err;
      });
    } else {
      var sql = "UPDATE otro  SET otroCodigo = ? , otroNombre = ? ";
      sql += " WHERE id = ? ";
      conn.query(sql, [req.body.otroCodigo, req.body.otroNombre, req.body.id], function (err, rows) {
        res.err;
      });
    }
  });
};

controller.deleteOtro = function (req, res) {
  var id = req.params.id;
  var parts = id.split(':');
  id = parts[1];
  req.getConnection(function (err, conn) {
    var sql = "DELETE FROM otro WHERE id = ?";
    conn.query("DELETE FROM otro WHERE id = ?", [id], function (err, rows) {
      res.err;
    });
  });
};

module.exports = controller;