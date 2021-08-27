sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel, MessageBox) {
		"use strict";

		return Controller.extend("sap.treinamento.json.databindingjson.controller.View1", {
			onInit: function () {
                this.pessoas = new JSONModel({
                    tblpessoas: [
                        {
                            nome: 'José',
                            sobrenome: 'Tavares',
                            email: 'jose.tavares@accenture.com',
                            bairro: 'Boa Viagem',
                            cep: '54444-000',
                            estado: 'PE'                         
                        },
                        {
                            nome: 'Anderson',
                            sobrenome: 'Silva',
                            email: 'anderson.silva@accenture.com',
                            bairro: 'Recife Antigo',
                            cep: '11111-222',
                            estado: 'PE'                         
                        }                        
                    ]
                });
                
            this.getView().setModel(this.pessoas, "pessoas");
            },
            onCreateModel: function(){
                var that = this;
                MessageBox.confirm("Confirma Inserir Pessoa", {
                    onClose : function(oAction) {
                        if (oAction === sap.m.MessageBox.Action.OK) {
                            var oPessoas = that.getView().getModel("pessoas").getData();
                            var oPessoasCreate = {
                                    nome: that.getView().byId("inNome").getValue(),
                                    sobrenome: that.getView().byId("inSobrenome").getValue(),
                                    email: that.getView().byId("inEmail").getValue(),
                                    bairro: that.getView().byId("inBairro").getValue(),
                                    cep: that.getView().byId("inBairro").getValue(),
                                    estado: that.getView().byId("slEstado").getSelectedKey()
                                }

                            
                            oPessoas.tblpessoas.push(oPessoasCreate);
                            that.getView().getModel("pessoas").setData(oPessoas);
                        }
                    }
                });
            }            

		});
	});
