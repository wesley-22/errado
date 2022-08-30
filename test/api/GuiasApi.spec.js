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

  beforeEach(function() {
    instance = new SistemaApi.GuiasApi();
  });

  describe('(package)', function() {
    describe('GuiasApi', function() {
      describe('getGuias', function() {
        it('should call getGuias successfully', function(done) {
          // TODO: uncomment, update parameter values for getGuias call and complete the assertions
          /*

          instance.getGuias(mes, ano, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SistemaApi.InlineResponse2002);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('postGuia', function() {
        it('should call postGuia successfully', function(done) {
          // TODO: uncomment, update parameter values for postGuia call and complete the assertions
          /*

          instance.postGuia(name, tipoGuia, guia, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SistemaApi.InlineResponse2001);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));