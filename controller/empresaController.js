const controller = {};
  
controller.leeEmpresa = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
  const id  = 1; //req.params; req.body.id
  var sql = " SELECT id, em_nombre, em_direccion, em_localidad, em_barrio, em_ciudad,  "
  sql +=" em_nit, em_telefono, em_email, em_observaciones, em_autentica, ";
  sql +=" em_consecRcaja, em_consecEgreso, em_estado ";
  sql +=" FROM empresas WHERE id = "+id;
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


controller.updateEmpresa = (req, res) => {
  req.getConnection((err, conn) => {
  if(req.body.id==='0')  {
    var sql= "INSERT INTO empresas (em_nombre, em_direccion, em_localidad, ";
    sql += " em_barrio, em_ciudad, em_nit, em_telefono, em_email, em_observaciones, ";
    sql += " em_autentica, em_consecRcaja, em_consecEgreso, em_estado) ";
    sql += ' VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? ) ' ;
    console.log(sql);
    conn.query(sql, [ req.body.em_nombre, req.body.em_direccion, req.body.em_localidad,
      req.body.em_barrio, req.body.em_ciudad, req.body.em_nit, req.body.em_telefono, 
      req.body.em_email, req.body.em_observaciones, req.body.em_autentica,
      req.body.em_consecRcaja, req.body.em_consecEgreso, req.body.em_estado], 
      (err, rows) => {
      res.err;
    });
  }
  else{
    var sql= "UPDATE empresas  SET  em_nombre = ? ,em_direccion = ? , em_localidad = ?, ";
    sql += " em_barrio = ? , em_ciudad = ? , em_nit = ? , em_telefono = ? , em_email = ? , ";
    sql += " em_observaciones = ? , em_autentica = ? , em_consecRcaja = ? , em_consecEgreso = ?, ";
    sql += " en_estado = ? WHERE id = ? "
    console.log(sql);
    conn.query(sql, [ req.body.em_nombre, req.body.em_direccion, req.body.em_localidad,
      req.body.em_barrio, req.body.em_ciudad, req.body.em_nit, req.body.em_telefono, 
      req.body.em_email, req.body.em_observaciones, req.body.em_autentica,
      req.body.em_consecRcaja, req.body.em_consecEgreso, req.body.em_estado], 
      (err, rows) => {
      res.err;
    });      
  }
  })  
 }; 

 controller.deleteEmpresa = (req, res) => {
   const { id } = req.params;
   const data = req.params;
   req.getConnection((err, conn) => {
     conn.query('DELETE FROM empresas WHERE id = ?',[id], 
     (err, rows) => {
      res.err;
     });
   })
 };

module.exports = controller;
  