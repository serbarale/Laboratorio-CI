function calcularTotalPedido(pedido, descuento = 0) {
  if (!Array.isArray(pedido)) {
    return "Error: pedido inválido";
  }

  if (pedido.length === 0) {
    return "Error: no hay productos en el pedido";
  }

  if (typeof descuento !== 'number' || descuento < 0 || descuento > 100) {
    return "Error: descuento inválido";
  }

  let subtotal = 0;
  for (let item of pedido) {
    if (!item || typeof item.precio !== 'number' || typeof item.cantidad !== 'number') {
      return "Error: producto inválido en el pedido";
    }

    if (item.precio < 0 || item.cantidad < 0) {
      return "Error: precio o cantidad negativa";
    }

    subtotal += item.precio * item.cantidad;
  }

  if (descuento > 0) {
    subtotal = subtotal * (1 - descuento / 100);
  }

  return subtotal;
}

module.exports = { calcularTotalPedido };
