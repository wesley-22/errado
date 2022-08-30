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
    describe('InlineResponse2003', function() {
      beforeEach(function() {
        instance = new SistemaApi.InlineResponse2003();
      });

      it('should create an instance of InlineResponse2003', function() {
        // TODO: update the code to test InlineResponse2003
        expect(instance).to.be.a(SistemaApi.InlineResponse2003);
      });

      it('should have the property cdempresa (base name: "cdempresa")', function() {
        // TODO: update the code to test the property cdempresa
        expect(instance).to.have.property('cdempresa');
        // expect(instance.cdempresa).to.be(expectedValueLiteral);
      });

      it('should have the property nmempresa (base name: "nmempresa")', function() {
        // TODO: update the code to test the property nmempresa
        expect(instance).to.have.property('nmempresa');
        // expect(instance.nmempresa).to.be(expectedValueLiteral);
      });

    });
  });

}));