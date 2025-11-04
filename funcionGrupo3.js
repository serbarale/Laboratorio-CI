function calcularIGV(monto) {
  if (typeof monto !== 'number' || isNaN(monto)) {
    return "Error: monto inválido";
  }

  if (monto < 0) {
    return "Error: monto inválido";
  }

  const IGV_PORCENTAJE = 18;
  const igv = monto * (IGV_PORCENTAJE / 100);
  
  return igv;
}

module.exports = { calcularIGV };
