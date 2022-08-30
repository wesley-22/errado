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
    instance = new SistemaApi.DadosAdicionaisDoContratoApi();
  });

  describe('(package)', function() {
    describe('DadosAdicionaisDoContratoApi', function() {
      describe('v1CboDelete', function() {
        it('should call v1CboDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for v1CboDelete call and complete the assertions
          /*

          instance.v1CboDelete(cboId, function(error, data, response) {
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
      describe('v1CboGet', function() {
        it('should call v1CboGet successfully', function(done) {
          // TODO: uncomment, update parameter values for v1CboGet call and complete the assertions
          /*

          instance.v1CboGet(cboId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SistemaApi.InlineResponse2013);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v1CboPost', function() {
        it('should call v1CboPost successfully', function(done) {
          // TODO: uncomment, update parameter values for v1CboPost call and complete the assertions
          /*

          instance.v1CboPost(cbo, familia, gradeGrupo, ocupacao, perfilOcupacional, sinonimo, subgrupoPricipal, subgrupo, function(error, data, response) {
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
      describe('v1FuncaoDelete', function() {
        it('should call v1FuncaoDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for v1FuncaoDelete call and complete the assertions
          /*
          var opts = {};

          instance.v1FuncaoDelete(opts, function(error, data, response) {
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
      describe('v1FuncaoGet', function() {
        it('should call v1FuncaoGet successfully', function(done) {
          // TODO: uncomment, update parameter values for v1FuncaoGet call and complete the assertions
          /*

          instance.v1FuncaoGet(cdempresa, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SistemaApi.InlineResponse2012);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v1FuncaoPatch', function() {
        it('should call v1FuncaoPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for v1FuncaoPatch call and complete the assertions
          /*
          var opts = {};

          instance.v1FuncaoPatch(opts, function(error, data, response) {
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
      describe('v1FuncaoPost', function() {
        it('should call v1FuncaoPost successfully', function(done) {
          // TODO: uncomment, update parameter values for v1FuncaoPost call and complete the assertions
          /*

          instance.v1FuncaoPost(funcNome, cboId, function(error, data, response) {
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
      describe('v1HorariosDelete', function() {
        it('should call v1HorariosDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for v1HorariosDelete call and complete the assertions
          /*
          var opts = {};

          instance.v1HorariosDelete(opts, function(error, data, response) {
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
      describe('v1HorariosGet', function() {
        it('should call v1HorariosGet successfully', function(done) {
          // TODO: uncomment, update parameter values for v1HorariosGet call and complete the assertions
          /*

          instance.v1HorariosGet(cdempresa, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(&#x27;string&#x27;);
              // expect(data).to.be(null);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v1HorariosPatch', function() {
        it('should call v1HorariosPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for v1HorariosPatch call and complete the assertions
          /*

          instance.v1HorariosPatch(descricao, domEntrada, domAlmocoSaida, domAmocoRetorno, domSaida, domIntervalo, segEntrada, segAlmocoSaida, segAmocoRetorno, segSaida, segIntervalo, terEntrada, terAlmocoSaida, terAmocoRetorno, terSaida, terIntervalo, quarEntrada, quarAlmocoSaida, quarAmocoRetorno, quarSaida, quarIntervalo, quinEntrada, quinAlmocoSaida, quinAmocoRetorno, quinSaida, quinIntervalo, sexEntrada, sexAlmocoSaida, sexAmocoRetorno, sexSaida, sexIntervalo, sabEntrada, sabAlmocoSaida, sabAmocoRetorno, sabSaida, sabIntervalo, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SistemaApi.InlineResponse201);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v1HorariosPost', function() {
        it('should call v1HorariosPost successfully', function(done) {
          // TODO: uncomment, update parameter values for v1HorariosPost call and complete the assertions
          /*

          instance.v1HorariosPost(descricao, domEntrada, domAlmocoSaida, domAmocoRetorno, domSaida, domIntervalo, segEntrada, segAlmocoSaida, segAmocoRetorno, segSaida, segIntervalo, terEntrada, terAlmocoSaida, terAmocoRetorno, terSaida, terIntervalo, quarEntrada, quarAlmocoSaida, quarAmocoRetorno, quarSaida, quarIntervalo, quinEntrada, quinAlmocoSaida, quinAmocoRetorno, quinSaida, quinIntervalo, sexEntrada, sexAlmocoSaida, sexAmocoRetorno, sexSaida, sexIntervalo, sabEntrada, sabAlmocoSaida, sabAmocoRetorno, sabSaida, sabIntervalo, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SistemaApi.InlineResponse201);

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