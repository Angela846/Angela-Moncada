// backend/nodejs_express/jest.config.js
module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js'],
  verbose: true,
  forceExit: true,
  clearMocks: true,
  maxWorkers: 1, // Los tests comparten la BD de pruebas, así que se ejecutan uno a la vez

  // 👇 CONFIGURACIÓN DE REPORTES
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './reports/backend',
        filename: 'reporte-backend.html',
        expand: true,
        pageTitle: 'Reporte de Pruebas - Backend Node.js',
        hideIcon: false,
      },
    ],
  ],
};