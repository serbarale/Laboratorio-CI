const { calcularIGV } = require('./funcionGrupo3');

describe('calcularIGV - Grupo 3 - TDD Tests', () => {

  test('debe calcular el IGV del 18% sobre un monto válido', () => {
    const resultado = calcularIGV(100);
    expect(resultado).toBe(18);
  });

  test('debe calcular el IGV sobre 1000', () => {
    const resultado = calcularIGV(1000);
    expect(resultado).toBe(180);
  });

  test('debe calcular el IGV sobre 500', () => {
    const resultado = calcularIGV(500);
    expect(resultado).toBe(90);
  });

  test('debe devolver error cuando el monto es negativo', () => {
    const resultado = calcularIGV(-100);
    expect(resultado).toBe("Error: monto inválido");
  });

  test('debe devolver error cuando el monto es null', () => {
    const resultado = calcularIGV(null);
    expect(resultado).toBe("Error: monto inválido");
  });

  test('debe devolver error cuando el monto es undefined', () => {
    const resultado = calcularIGV(undefined);
    expect(resultado).toBe("Error: monto inválido");
  });

  test('debe calcular IGV correctamente para monto 0', () => {
    const resultado = calcularIGV(0);
    expect(resultado).toBe(0);
  });

  test('debe calcular IGV correctamente con decimales', () => {
    const resultado = calcularIGV(150.50);
    expect(resultado).toBeCloseTo(27.09, 2);
  });

  test('debe devolver error cuando el monto no es un número', () => {
    const resultado = calcularIGV("100");
    expect(resultado).toBe("Error: monto inválido");
  });

  test('debe calcular IGV para montos pequeños', () => {
    const resultado = calcularIGV(10);
    expect(resultado).toBeCloseTo(1.8, 2);
  });

  test('debe calcular IGV para montos grandes', () => {
    const resultado = calcularIGV(10000);
    expect(resultado).toBe(1800);
  });

  test('debe mantener precisión con múltiples decimales', () => {
    const resultado = calcularIGV(123.456);
    expect(resultado).toBeCloseTo(22.22208, 5);
  });
});