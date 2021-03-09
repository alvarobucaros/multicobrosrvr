const md5 = require('js-md5');
const controller = {};
  
controller.inicio = (req, res) => {
  const data = req.body;
//console.log('inicia controller'+req.body.clave+' '+req.body.us_email);
    req.getConnection((err, conn) => {
    // const { id } = req.params; req.body.id
    var clave = 'admin@com'
    var sql = " SELECT usu.id, us_idEmpresa, us_nombre, us_direccion, us_localidad, ";
    sql +=" us_barrio, us_ciudad, us_email, us_tipoDoc, us_nroDoc, us_telefono, us_clave, ";
    sql +=" us_estado, em_nombre, em_direccion, em_localidad, em_barrio,  em_ciudad, ";
    sql +=" em_nit, em_telefono, em_email, em_observaciones, em_autentica, us_nivel  ";
    sql +=" FROM usuarios usu, empresas emp  ";
    sql +=" WHERE  us_idEmpresa = emp.id AND  ";
    sql +=" (us_email='"+clave+"' OR us_nroDoc ='"+clave+"' OR us_telefono='"+clave+"' )"
console.log(sql);
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

controller.autentica = (req, res) => {
    req.getConnection((err, conn) => {
    const data = req.body;
    const clave = req.body.us_clave;
    const email = req.body.us_email;
    const clave5 = md5(clave);
    var sql = " SELECT usu.id, us_idEmpresa, us_nombre, us_clave,  ";
    sql +=" us_estado, us_nivel, em_nombre ";
    sql +=" FROM usuarios usu, empresas emp  ";
    sql +=" WHERE  us_idEmpresa = emp.id AND  ";
    sql +=" (us_email='"+email+"' OR us_nroDoc ='"+email+"' OR us_telefono='"+email+"' )"
    console.log(sql);
    conn.query(sql, (err, respuesta)=> { 
      if (respuesta.length>0){         
        console.log(respuesta[0])
        if(respuesta[0].us_clave !== clave5) {
          res.send({er:0})
        }else{
          res.send(respuesta[0]);
        }
     console.log(respuesta[0].us_clave+'|'+clave5)
    } 
    else { 
      res.json(err); 
    } 
    }); 
  });
};


controller.leeUsu = (req, res) => {   
   req.getConnection((err, conn) => {
        var sql= 'SELECT id, us_idempresa, us_nombre, us_email, us_direccion, us_zona, ';
        sql +=' us_localidad, us_barrio, us_doctipo, us_docnumero, us_telefono, us_clave, ';
        sql +=' us_estado , us_nivel';
        sql +=' FROM usuarios WHERE us_idempresa = 1 ORDER BY us_nombre' 
        console.log(sql);
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
  
controller.traeUsu = (req, res) => {   
  req.getConnection((err, conn) => {
    var sql= 'SELECT id,  us_nombre '
    sql +="FROM usuarios WHERE us_idempresa = 1 AND us_estado = 'A'";
    sql += ' ORDER BY us_nombre' 
    console.log(sql);
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
  

 controller.insertUser = (req, res) => {
   const data = req.body;
   req.getConnection((err, conn) => {
    var sql= "INSERT INTO usuarios (us_idEmpresa, us_nombre, us_email, us_direccion, us_ciudad, ";
    sql +=" us_localidad, us_tipoDoc, us_nroDoc, us_telefono, us_clave, us_estado, us_barrio, us_nivel )";
    sql += ' VALUES ( ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ?, ? ,?) '
    console.log(sql);
      conn.query(sql, [ req.body.us_idempresa, req.body.us_nombre, req.body.us_email, 
        req.body.us_direccion, req.body.us_ciudad, req.body.us_localidad, 
        req.body.us_tipoDoc, req.body.us_nroDoc, req.body.us_telefono, 
        md5(req.body.us_clave), req.body.us_estado, req.body.us_barrio, req.body.us_nivel], 
        (err, rows) => {
        console.log(err);
      });
    })  
  }; 
 
  controller.delete = (req, res) => {
    const { id } = req.params;
    const data = req.params;
    req.getConnection((err, conn) => {
      conn.query('DELETE FROM usuarios WHERE id = ?',[id], 
      (err, rows) => {
        res.render('usuarios');
      });
    })
  };

  controller.update = (req, res) => { 
    const { us_clave } = req.params;
      var { id } = req.params; 
      rec=id.split('||');
      id=rec[0];
      clave = md5(rec[1])
      req.getConnection((err, conn) => { 
        var sql= 'UPDATE usuarios  SET  us_idempresa = ? ,us_nombre = ? ,us_email = ? ,';
        sql +=' us_direccion = ? ,us_zona = ? ,us_localidad = ? ,us_barrio = ? ,';
        sql +=' us_doctipo = ? ,us_docnumero = ? ,us_telefono = ? ,us_clave = ? ,';
        sql +=' us_estado = ?, us_nivel '
        sql += 'WHERE id = ? '
      conn.query(sql, [ req.body.us_idEmpresa , req.body.us_nombre , req.body.us_email , 
        req.body.us_direccion , req.body.us_zona , req.body.us_localidad , 
        req.body.us_barrio , req.body.us_doctipo , req.body.us_docnumero , 
        req.body.us_telefono , clave , req.body.us_estado, req.body.us_nivel, id], 
      (err, rows) => {
        res.render('usuarios');
        });
      }) 
    };
 
module.exports = controller;
  
