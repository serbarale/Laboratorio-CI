describe('Pruebas de Integración - Grupo 3', () => {
  const { calcularTotalPedido } = require('./pedido');
  const { calcularIGV } = require('./funcionGrupo3');

  test('debe calcular el total del pedido y luego calcular el IGV correctamente', () => {
    const pedido = [
      { nombre: 'Laptop', precio: 1000, cantidad: 1 },
      { nombre: 'Mouse', precio: 50, cantidad: 2 }
    ];
    
    const total = calcularTotalPedido(pedido, 0);
    const igv = calcularIGV(total);
    
    expect(total).toBe(1100);
    expect(igv).toBe(198);
  });

  test('debe calcular IGV sobre un pedido con un solo producto', () => {
    const pedido = [
      { nombre: 'Teclado', precio: 200, cantidad: 1 }
    ];
    
    const total = calcularTotalPedido(pedido, 0);
    const igv = calcularIGV(total);
    
    expect(total).toBe(200);
    expect(igv).toBe(36);
  });

  test('debe calcular IGV sobre un pedido con múltiples productos', () => {
    const pedido = [
      { nombre: 'Monitor', precio: 300, cantidad: 2 },
      { nombre: 'Cable HDMI', precio: 25, cantidad: 3 },
      { nombre: 'Webcam', precio: 150, cantidad: 1 }
    ];
    
    const total = calcularTotalPedido(pedido, 0);
    const igv = calcularIGV(total);
    
    expect(total).toBe(825);
    expect(igv).toBe(148.5);
  });

  test('debe retornar IGV 0 cuando el pedido está vacío', () => {
    const pedido = [];
    
    const total = calcularTotalPedido(pedido, 0);
    const igv = calcularIGV(total);
    
    expect(total).toBe("Error: no hay productos en el pedido");
    expect(igv).toBe("Error: monto inválido");
  });

  test('debe manejar errores cuando el total del pedido es inválido', () => {
    const pedidoInvalido = null;
    
    const total = calcularTotalPedido(pedidoInvalido, 0);
    const igv = calcularIGV(total);
    
    expect(igv).toBe("Error: monto inválido");
  });

  test('debe calcular IGV con precisión sobre pedidos con decimales', () => {
    const pedido = [
      { nombre: 'Producto A', precio: 99.99, cantidad: 2 },
      { nombre: 'Producto B', precio: 150.50, cantidad: 1 }
    ];
    
    const total = calcularTotalPedido(pedido, 0);
    const igv = calcularIGV(total);
    
    expect(total).toBeCloseTo(350.48, 2);
    expect(igv).toBeCloseTo(63.0864, 2);
  });

  test('debe calcular el monto total con IGV incluido', () => {
    const pedido = [
      { nombre: 'Servicio Premium', precio: 500, cantidad: 2 }
    ];
    
    const subtotal = calcularTotalPedido(pedido, 0);
    const igv = calcularIGV(subtotal);
    const totalConIGV = subtotal + igv;
    
    expect(subtotal).toBe(1000);
    expect(igv).toBe(180);
    expect(totalConIGV).toBe(1180);
  });

  test('debe validar flujo completo: pedido → total → IGV → total final', () => {
    const pedido = [
      { nombre: 'Smartphone', precio: 800, cantidad: 1 },
      { nombre: 'Funda', precio: 30, cantidad: 2 },
      { nombre: 'Protector', precio: 15, cantidad: 2 }
    ];
    
    const subtotal = calcularTotalPedido(pedido, 0);
    expect(subtotal).toBe(890);
    
    const igv = calcularIGV(subtotal);
    expect(igv).toBe(160.2);
    
    const totalFinal = subtotal + igv;
    expect(totalFinal).toBeCloseTo(1050.2, 2);
  });
});