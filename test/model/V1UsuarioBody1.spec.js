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
    describe('V1UsuarioBody1', function() {
      beforeEach(function() {
        instance = new SistemaApi.V1UsuarioBody1();
      });

      it('should create an instance of V1UsuarioBody1', function() {
        // TODO: update the code to test V1UsuarioBody1
        expect(instance).to.be.a(SistemaApi.V1UsuarioBody1);
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

      it('should have the property oauthgoogle (base name: "oauthgoogle")', function() {
        // TODO: update the code to test the property oauthgoogle
        expect(instance).to.have.property('oauthgoogle');
        // expect(instance.oauthgoogle).to.be(expectedValueLiteral);
      });

      it('should have the property oauthhotmail (base name: "oauthhotmail")', function() {
        // TODO: update the code to test the property oauthhotmail
        expect(instance).to.have.property('oauthhotmail');
        // expect(instance.oauthhotmail).to.be(expectedValueLiteral);
      });

      it('should have the property nome (base name: "nome")', function() {
        // TODO: update the code to test the property nome
        expect(instance).to.have.property('nome');
        // expect(instance.nome).to.be(expectedValueLiteral);
      });

      it('should have the property tipo (base name: "tipo")', function() {
        // TODO: update the code to test the property tipo
        expect(instance).to.have.property('tipo');
        // expect(instance.tipo).to.be(expectedValueLiteral);
      });

    });
  });

}));
