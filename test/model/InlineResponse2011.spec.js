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
    describe('InlineResponse2011', function() {
      beforeEach(function() {
        instance = new SistemaApi.InlineResponse2011();
      });

      it('should create an instance of InlineResponse2011', function() {
        // TODO: update the code to test InlineResponse2011
        expect(instance).to.be.a(SistemaApi.InlineResponse2011);
      });

      it('should have the property contratacaoId (base name: "contratacao_id")', function() {
        // TODO: update the code to test the property contratacaoId
        expect(instance).to.have.property('contratacaoId');
        // expect(instance.contratacaoId).to.be(expectedValueLiteral);
      });

      it('should have the property nomePai (base name: "nome_pai")', function() {
        // TODO: update the code to test the property nomePai
        expect(instance).to.have.property('nomePai');
        // expect(instance.nomePai).to.be(expectedValueLiteral);
      });

      it('should have the property nomeMae (base name: "nome_mae")', function() {
        // TODO: update the code to test the property nomeMae
        expect(instance).to.have.property('nomeMae');
        // expect(instance.nomeMae).to.be(expectedValueLiteral);
      });

      it('should have the property dtNasc (base name: "dt_nasc")', function() {
        // TODO: update the code to test the property dtNasc
        expect(instance).to.have.property('dtNasc');
        // expect(instance.dtNasc).to.be(expectedValueLiteral);
      });

      it('should have the property estadoNasc (base name: "estado_nasc")', function() {
        // TODO: update the code to test the property estadoNasc
        expect(instance).to.have.property('estadoNasc');
        // expect(instance.estadoNasc).to.be(expectedValueLiteral);
      });

      it('should have the property cidadeNasc (base name: "cidade_nasc")', function() {
        // TODO: update the code to test the property cidadeNasc
        expect(instance).to.have.property('cidadeNasc');
        // expect(instance.cidadeNasc).to.be(expectedValueLiteral);
      });

      it('should have the property nCpf (base name: "n_cpf")', function() {
        // TODO: update the code to test the property nCpf
        expect(instance).to.have.property('nCpf');
        // expect(instance.nCpf).to.be(expectedValueLiteral);
      });

      it('should have the property nCtps (base name: "n_ctps")', function() {
        // TODO: update the code to test the property nCtps
        expect(instance).to.have.property('nCtps');
        // expect(instance.nCtps).to.be(expectedValueLiteral);
      });

      it('should have the property dtCtps (base name: "dt_ctps")', function() {
        // TODO: update the code to test the property dtCtps
        expect(instance).to.have.property('dtCtps');
        // expect(instance.dtCtps).to.be(expectedValueLiteral);
      });

      it('should have the property nRg (base name: "n_rg")', function() {
        // TODO: update the code to test the property nRg
        expect(instance).to.have.property('nRg');
        // expect(instance.nRg).to.be(expectedValueLiteral);
      });

      it('should have the property dtRg (base name: "dt_rg")', function() {
        // TODO: update the code to test the property dtRg
        expect(instance).to.have.property('dtRg');
        // expect(instance.dtRg).to.be(expectedValueLiteral);
      });

      it('should have the property emitenteRg (base name: "emitente_rg")', function() {
        // TODO: update the code to test the property emitenteRg
        expect(instance).to.have.property('emitenteRg');
        // expect(instance.emitenteRg).to.be(expectedValueLiteral);
      });

      it('should have the property nRua (base name: "n_rua")', function() {
        // TODO: update the code to test the property nRua
        expect(instance).to.have.property('nRua');
        // expect(instance.nRua).to.be(expectedValueLiteral);
      });

      it('should have the property estado (base name: "estado")', function() {
        // TODO: update the code to test the property estado
        expect(instance).to.have.property('estado');
        // expect(instance.estado).to.be(expectedValueLiteral);
      });

      it('should have the property cidade (base name: "cidade")', function() {
        // TODO: update the code to test the property cidade
        expect(instance).to.have.property('cidade');
        // expect(instance.cidade).to.be(expectedValueLiteral);
      });

      it('should have the property bairro (base name: "bairro")', function() {
        // TODO: update the code to test the property bairro
        expect(instance).to.have.property('bairro');
        // expect(instance.bairro).to.be(expectedValueLiteral);
      });

    });
  });

}));
