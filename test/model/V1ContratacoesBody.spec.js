/*
 * sistema-api
 * Api para o Sistema de Gerenciamento de Entregas
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SistemaApi);
  }
}(this, function(expect, SistemaApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('V1ContratacoesBody', function() {
      beforeEach(function() {
        instance = new SistemaApi.V1ContratacoesBody();
      });

      it('should create an instance of V1ContratacoesBody', function() {
        // TODO: update the code to test V1ContratacoesBody
        expect(instance).to.be.a(SistemaApi.V1ContratacoesBody);
      });

      it('should have the property cdempresa (base name: "cdempresa")', function() {
        // TODO: update the code to test the property cdempresa
        expect(instance).to.have.property('cdempresa');
        // expect(instance.cdempresa).to.be(expectedValueLiteral);
      });

      it('should have the property nome (base name: "nome")', function() {
        // TODO: update the code to test the property nome
        expect(instance).to.have.property('nome');
        // expect(instance.nome).to.be(expectedValueLiteral);
      });

      it('should have the property data (base name: "data")', function() {
        // TODO: update the code to test the property data
        expect(instance).to.have.property('data');
        // expect(instance.data).to.be(expectedValueLiteral);
      });

      it('should have the property funcao (base name: "funcao")', function() {
        // TODO: update the code to test the property funcao
        expect(instance).to.have.property('funcao');
        // expect(instance.funcao).to.be(expectedValueLiteral);
      });

      it('should have the property cboId (base name: "cbo_id")', function() {
        // TODO: update the code to test the property cboId
        expect(instance).to.have.property('cboId');
        // expect(instance.cboId).to.be(expectedValueLiteral);
      });

      it('should have the property horaId (base name: "hora_id")', function() {
        // TODO: update the code to test the property horaId
        expect(instance).to.have.property('horaId');
        // expect(instance.horaId).to.be(expectedValueLiteral);
      });

      it('should have the property salario (base name: "salario")', function() {
        // TODO: update the code to test the property salario
        expect(instance).to.have.property('salario');
        // expect(instance.salario).to.be(expectedValueLiteral);
      });

      it('should have the property tipoContrato (base name: "tipo_contrato")', function() {
        // TODO: update the code to test the property tipoContrato
        expect(instance).to.have.property('tipoContrato');
        // expect(instance.tipoContrato).to.be(expectedValueLiteral);
      });

      it('should have the property modNome (base name: "mod_nome")', function() {
        // TODO: update the code to test the property modNome
        expect(instance).to.have.property('modNome');
        // expect(instance.modNome).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property telefone (base name: "telefone")', function() {
        // TODO: update the code to test the property telefone
        expect(instance).to.have.property('telefone');
        // expect(instance.telefone).to.be(expectedValueLiteral);
      });

      it('should have the property whatsapp (base name: "whatsapp")', function() {
        // TODO: update the code to test the property whatsapp
        expect(instance).to.have.property('whatsapp');
        // expect(instance.whatsapp).to.be(expectedValueLiteral);
      });

      it('should have the property dtContratacao (base name: "dt_contratacao")', function() {
        // TODO: update the code to test the property dtContratacao
        expect(instance).to.have.property('dtContratacao');
        // expect(instance.dtContratacao).to.be(expectedValueLiteral);
      });

    });
  });

}));
