"use strict";

var md5 = require('js-md5');

var controller = {};

controller.listConceptos = function (req, res) {
  req.getConnection(function (err, conn) {
    // const { id } = req.params;
    var empresa = "1";
    var sql = " SELECT id, cp_idEmpresa, cp_titulo, cp_descripcion, cp_periodoDesde, cp_periodoHasta, cp_periodoActual, cp_valorCobro, cp_estado ";
    sql += " FROM conceptos ";
    sql += " WHERE cp_idEmpresa = '" + empresa + "' ORDER BY cp_titulo";
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

controller.traeConceptos = function (req, res) {
  req.getConnection(function (err, conn) {
    var sql = 'SELECT id,  cp_descripcion ';
    sql += "FROM conceptos WHERE cp_idEmpresa = 1 AND cp_estado = 'A'";
    sql += ' ORDER BY cp_descripcion';
    console.log(sql);
    conn.query(sql, function (err, respuesta) {
      if (respuesta.length > 0) {
        res.send(respuesta);
      } else {
        res.json(err);
      }
    });
  });
};

controller.updateConceptos = function (req, res) {
  req.getConnection(function (err, conn) {
    if (req.body.id === '0') {
      var sql = "INSERT INTO conceptos (cp_idEmpresa, cp_titulo, cp_descripcion,  ";
      sql += " cp_periodoDesde, cp_periodoHasta, cp_periodoActual, cp_valorCobro,  ";
      sql += " cp_estado) ";
      sql += ' VALUES ( ? , ? , ? , ?, ? , ? , ? , ? ) ';
      console.log(sql);
      conn.query(sql, [req.body.cp_idEmpresa, req.body.cp_titulo, req.body.cp_descripcion, req.body.cp_periodoDesde, req.body.cp_periodoHasta, req.body.cp_periodoActual, req.body.cp_valorCobro, req.body.cp_estado], function (err, rows) {
        res.err;
      });
    } else {
      var sql = "UPDATE conceptos  SET  cp_titulo = ? ,cp_descripcion = ? ,";
      sql += " cp_periodoDesde = ?, cp_periodoHasta = ?, cp_periodoActual = ?, ";
      sql += " cp_valorCobro = ?,cp_estado = ? ";
      sql += " WHERE id = ? ";
      conn.query(sql, [req.body.cp_idEmpresa, req.body.cp_titulo, req.body.cp_descripcion, req.body.cp_periodoDesde, req.body.cp_periodoHasta, req.body.cp_periodoActual, req.body.cp_valorCobro, req.body.cp_estado, req.body.id], function (err, rows) {
        res.err;
      });
    }
  });
};

controller.deleteConcepto = function (req, res) {
  var id = req.params.id;
  var data = req.params;
  req.getConnection(function (err, conn) {
    conn.query('DELETE FROM conceptos WHERE id = ?', [id], function (err, rows) {
      res.err;
    });
  });
}; ////  PRUEBA


controller.leePrueba = function (req, res) {
  var data = req.body;
  req.getConnection(function (err, conn) {
    var sql = "SELECT id, pr_codigo, pr_detalle, pr_fecha FROM  prueba  ORDER BY pr_codigo ";
    console.log(sql);
    conn.query(sql, function (err, respuesta) {
      if (respuesta.length > 0) {
        res.send(respuesta);
      } else {
        res.json(err);
      }
    });
  });
};

controller.updatePrueba = function (req, res) {
  req.getConnection(function (err, conn) {
    if (req.body.id === '0') {
      var sql = "INSERT INTO prueba ( pr_codigo, pr_detalle, pr_fecha FROM  prueba) ";
      sql += ' VALUES ( ? , ?, ?  ) ';
      console.log(sql);
      a = req.body.pr_codigo + '|' + req.body.pr_detalle + '|' + req.body.pr_fecha;
      console.log(sql + '~~~' + a);
      conn.query(sql, [req.body.pr_codigo, req.body.pr_detalle, req.body.pr_fecha], function (err, rows) {
        res.err;
      });
    } else {
      var sql = "UPDATE prueba  SET pr_codigo = ? , pr_detalle = ?, pr_fecha = ? ";
      sql += " WHERE id = ? ";
      conn.query(sql, [req.body.pr_codigo, req.body.pr_detalle, req.body.pr_fecha, req.body.id], function (err, rows) {
        res.err;
      });
    }
  });
};

controller.deletePrueba = function (req, res) {
  var id = req.params.id;
  var parts = id.split(':');
  id = parts[1];
  req.getConnection(function (err, conn) {
    var sql = "DELETE FROM prueba WHERE id = ?";
    console.log(sql);
    conn.query(sql, [id], function (err, rows) {
      res.err;
    });
  });
};

module.exports = controller;