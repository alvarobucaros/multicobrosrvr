const controller = {};
  
controller.leeAnticipo = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
  const idEmpresa  = 1; //req.params; req.body.idEmpresa
  const idUsuario  = 1; //req.params; req.body.idEmpresa
  var sql = " SELECT id, an_idEmpresa, an_idUsuario, an_Fecha, an_Valor, an_Saldo ";
  sql +=" FROM anticipos ";
  sql +=" WHERE an_idEmpresa = "+idEmpresa + " AND an_idUsuario = "+idUsuario

  //console.log(sql);
  conn.query(sql, (err, respuesta)=> { 
    if (respuesta.length>0){ 
      res.json({ data: respuesta}); 
  } 
  else { 
    res.json(err); 
  } 
  }); 
}); 
};



controller.actualizaAnticipo= (req, res) => {

};

controller.leeingregasto = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
    const idEmpresa  = 1; //req.params; req.body.idEmpresa
    var sql = " SELECT id, ig_idEmpresa, ig_fecha, ig_tipo, ig_detalle, ";
    sql +=" ig_numero, ig_documento, ig_idUsuario, ig_valor, ig_saldo ";
    sql +=" FROM ingregasto ";
    sql +=" WHERE ig_idEmpresa = "+idEmpresa +" ORDER BY ig_fecha, ig_tipo"

   // console.log(sql);
    conn.query(sql, (err, respuesta)=> { 
      if (respuesta.length>0){ 
        res.send(resultado); 
    } 
    else { 
      res.send({mensage:"no hay registros"}); 
    } 
    }); 
  }); 
  };

  controller.updateIngreGasto = (req, res) => {
    req.getConnection((err, conn) => {
    if(req.body.id==='0')  {
      var sql= "INSERT INTO ingregasto (ig_idEmpresa, ig_fecha, ig_tipo, ig_detalle, ";
      sql +=" ig_numero, ig_documento, ig_idUsuario, ig_valor, ig_saldo )";  
      sql += ' VALUES ( ? , ? , ? , ?, ? , ? , ? , ?, ? ) ' ;
      // console.log(sql);
      conn.query(sql, [ req.body.ig_idEmpresa, req.body.ig_fecha, req.body.ig_tipo, 
        req.body.ig_detalle, req.body.ig_numero, req.body.ig_documento, 
        req.body.ig_idUsuario, req.body.ig_valor, req.body.ig_saldo], 
        (err, rows) => {
        res.err;
      });
    }
    else{
      var sql= "UPDATE ingregasto  SET ig_idEmpresa = ? , ig_fecha = ? , ig_tipo = ? , ";
      sql +=" ig_detalle = ? ,  ig_numero = ? , ig_documento = ? , ig_idUsuario = ? , ";
      sql +=" ig_valor = ? , ig_saldo  = ? ";
      sql += " WHERE id = ? "
      conn.query(sql, [ req.body.ig_idEmpresa, req.body.ig_fecha, req.body.ig_tipo, 
        req.body.ig_detalle, req.body.ig_numero, req.body.ig_documento, 
        req.body.ig_idUsuario, req.body.ig_valor, req.body.ig_saldo, req.body.id], 
        (err, rows) => {
     res.err;
      });      
    }
    })  
   }; 
 
   controller.deleteIngreGasto = (req, res) => {
     var { id } = req.params;
     let parts = id.split(':');
     id = parts[1];
  // console.log(id);
     const data = req.params;
     req.getConnection((err, conn) => {
       conn.query('DELETE FROM ingregasto WHERE id = ?',[id], 
       (err, rows) => {
        res.err;
       });
     })
   };
 
   controller.leeotro = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {

    var sql = "SELECT id, otroCodigo, otroNombre, otroFecha, otroTexto, otroEstado, ";
    sql += " otroPassword, otroSelectF, otroSelectV, otroEmail  ";
    sql += " FROM otro ORDER BY otroCodigo ";
  //  console.log(sql);
    conn.query(sql, (err, respuesta)=> { 
      if (respuesta.length>0){ 
        res.send(respuesta); 
    } 
    else { 
      res.json(err); 
    } 
    }); 
  }); 
};
//id, otroCodigo, otroNombre, otroFecha, otroTexto, otroEstado, otroPassword, otroSelectF, otroSelectV, otroEmail

  controller.updateOtros = (req, res) => {
    req.getConnection((err, conn) => {
      a=req.body.id+'|'+req.body.otroCodigo+'|'+req.body.otroNombre+'|'+
      req.body.otroFecha+'|'+req.body.otroTexto+'|'+req.body.otroEstado+'|'+req.body.otroPassword+'|'+
      req.body.otroSelectF+'|'+req.body.otroSelectV+'|'+req.body.otroEmail
      console.log(a);
    if(req.body.id==='0')  {
      var sql= "INSERT INTO otro (otroCodigo, otroNombre, otroFecha, otroTexto, ";
      sql += " otroEstado, otroPassword, otroSelectF, otroSelectV, otroEmail) ";  
      sql += ' VALUES ( ? , ?, ?, ?, ?, ?, ?, ?, ?  ) ' ;

      console.log(sql+'~~~');


      conn.query(sql, [ req.body.otroCodigo, req.body.otroNombre,
      req.body.otroFecha, req.body.otroTexto,  req.body.otroEstado, req.body.otroPassword,
      req.body.otroSelectF, req.body.otroSelectV, req.body.otroEmail], 
        (err, rows) => {
        res.err;
      });
    }
    else{
      var sql= "UPDATE otro  SET otroCodigo = ? , otroNombre = ?, otroFecha = ?, ";
      sql += " otroTexto = ?,  otroEstado = ?, otroPassword = ?, otroSelectF = ?, ";
      sql += " otroSelectV = ?, otroEmail = ?  ";
      sql += " WHERE id = ? "
      console.log(sql+'~~~');
      conn.query(sql, [ req.body.otroCodigo, req.body.otroNombre,
        req.body.otroFecha, req.body.otroTexto,  req.body.otroEstado, req.body.otroPassword,
        req.body.otroSelectF, req.body.otroSelectV, req.body.otroEmail, req.body.id], 
        (err, rows) => {
     res.err;
      });      
    }
    })  
   }; 
 
   controller.deleteOtro = (req, res) => {
     var { id } = req.params;    
     let parts = id.split(':');
     id = parts[1];
     req.getConnection((err, conn) => {
       var sql = "DELETE FROM otro WHERE id = ?"
       conn.query("DELETE FROM otro WHERE id = ?",[id], 
       (err, rows) => {
        res.err;
       });
     })
   };

module.exports = controller;
  