export default {
  testEnvironment: "node",
  verbose: true,
  clearMocks: true,
  restoreMocks: true,
  coverageThreshold: {
    global: {
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  collectCoverageFrom: [
    "src/basico/**/*.js", //incluir no relatorio
    //"!src/basico/pedidos/pedidoService.js", // não incluir no relatorio
  ],
  reporters: [
    "default",
    ["jest-junit", { outputDirectory: "reports", outputName: "junit.xml" }],
  ],
};
