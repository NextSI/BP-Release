define([],function(){return function(a){"use strict";var o=this;this.html_id=a,this.dialog=$("#"+this.html_id),this.modal=this.dialog.find(".modal"),this.modal.attr("id",this.html_id+"_modal"),this.title=this.modal.find(".modal-title"),this.tipo=null,this.onclose=null,this.lbl_titulo_id=this.dialog.find(".lbl_titulo_id"),this.div_pdo_dns_string=this.dialog.find(".div_pdo_dns_string"),this.div_database=this.dialog.find(".div_database"),this.div_endereco=this.dialog.find(".div_endereco"),this.div_porta=this.dialog.find(".div_porta"),this.div_usuario=this.dialog.find(".div_usuario"),this.div_senha=this.dialog.find(".div_senha"),this.cbo_banco_dados=this.dialog.find(".cbo_banco_dados"),this.edt_pdo_dns_string=this.dialog.find(".edt_pdo_dns_string"),this.edt_endereco=this.dialog.find(".edt_endereco"),this.edt_porta=this.dialog.find(".edt_porta"),this.edt_usuario=this.dialog.find(".edt_usuario"),this.edt_senha=this.dialog.find(".edt_senha"),this.edt_database=this.dialog.find(".edt_database"),this.ico_senha=this.dialog.find(".ico_senha"),this.btn_cancelar=this.dialog.find(".btn_cancelar"),this.btn_salvar=this.dialog.find(".btn_salvar"),this.btn_excluir=this.dialog.find(".btn_excluir"),this.btn_esconder=this.dialog.find(".btn_esconder"),this.btn_testar_conexao=this.dialog.find(".btn_testar_conexao"),this.conexao_id=null,this.senha_conexao="",this.show=function(a,d){switch(o.cbo_banco_dados.selectpicker("refresh"),d){case FORMULARIO.NOVO:case FORMULARIO.EDITAR:o.btn_salvar.show(),o.btn_excluir.hide(),o.permite_alterar(!0);break;case FORMULARIO.VISUALIZAR:o.btn_salvar.hide(),o.btn_excluir.hide(),o.permite_alterar(!1);break;case FORMULARIO.EXCLUIR:o.btn_salvar.hide(),o.btn_excluir.show(),o.btn_testar_conexao.hide(),o.permite_alterar(!1)}o.tipo=d,void 0!==a&&a?(o.conexao_id=a,o.preencher()):o.cbo_banco_dados.val(CONEXAO_INTEGRACAO_BANCO_DADOS.MYSQL).trigger("change"),show_modal(o.modal.attr("id")),set_focus(o.cbo_banco_dados)},this.close=function(){close_modal(o.modal.attr("id")),void 0!==o.onclose&&o.onclose&&o.onclose()},this.unload=function(){o.close(),View.unload(this.html_id)},this.permite_alterar=function(a){o.edt_senha.prop("readonly",!a),o.edt_usuario.prop("readonly",!a),o.edt_database.prop("readonly",!a),o.edt_endereco.prop("readonly",!a),o.edt_porta.prop("readonly",!a),o.cbo_banco_dados.prop("disabled",!a),o.edt_pdo_dns_string.prop("readonly",!a)},this.preencher=function(){WS.get("conexao_integracao/objeto/",{conexao_id:o.conexao_id},function(a){o.lbl_titulo_id.text("Id."+a.id),o.edt_usuario.val(a.usuario),App.sessao.dados.senhas_ocultas?o.edt_senha.attr("placeholder","Alterar senha"):o.edt_senha.val(a.senha),o.senha_conexao=a.senha,o.edt_endereco.val(a.endereco),o.edt_porta.val(a.porta),o.edt_database.val(a.database_nome),o.cbo_banco_dados.val(a.banco_dados_tipo).trigger("change"),o.edt_pdo_dns_string.val(a.pdo_dns_string)})},this.cbo_banco_dados.unbind("change"),this.cbo_banco_dados.change(function(){o.cbo_banco_dados.val()==CONEXAO_INTEGRACAO_BANCO_DADOS.PDO_DNS_STRING?(o.div_pdo_dns_string.show(),o.div_database.hide(),o.div_endereco.hide(),o.div_porta.hide()):(o.div_pdo_dns_string.hide(),o.div_database.show(),o.div_endereco.show(),o.div_porta.show())}),this.btn_cancelar.unbind("click"),this.btn_cancelar.click(function(){o.unload()}),this.btn_salvar.unbind("click"),this.btn_salvar.click(function(){WS.post("conexao_integracao/salvar",{conexao_id:o.conexao_id,usuario:o.edt_usuario.val(),senha:""==o.edt_senha.val()?o.senha_conexao:o.edt_senha.val(),database_nome:o.edt_database.val(),endereco:o.edt_endereco.val(),porta:o.edt_porta.val(),banco_dados_tipo:o.cbo_banco_dados.val(),pdo_dns_string:o.edt_pdo_dns_string.val()},function(a){o.conexao_id=a.id,alert_saved("Salvo com sucesso"),o.unload()})}),this.btn_testar_conexao.unbind("click"),this.btn_testar_conexao.click(function(){WS.post("conexao_integracao/conectar",{conexao_id:o.conexao_id,usuario:o.edt_usuario.val(),senha:""==o.edt_senha.val()?o.senha_conexao:o.edt_senha.val(),database_nome:o.edt_database.val(),endereco:o.edt_endereco.val(),porta:o.edt_porta.val(),banco_dados_tipo:o.cbo_banco_dados.val(),pdo_dns_string:o.edt_pdo_dns_string.val()},function(a){o.conexao_id=a.id;var d=o.cbo_banco_dados.val()==CONEXAO_INTEGRACAO_BANCO_DADOS.PDO_DNS_STRING?o.edt_endereco.val():o.edt_database.val(),e=new Validation;e.add(new ValidationMessage(Validation.CODES.ERR_FIELD,"Conexão realizada com o banco de dados "+d+"!")),alert_modal("Conectado",e)})}),this.btn_esconder.unbind("click"),this.btn_esconder.click(function(){o.ico_senha.removeClass(),"password"==o.edt_senha.attr("type")?(o.edt_senha.attr("type","text"),o.ico_senha.addClass("glyphicon glyphicon-eye-close")):(o.edt_senha.attr("type","password"),o.ico_senha.addClass("glyphicon glyphicon-eye-open"))}),this.btn_excluir.unbind("click"),this.btn_excluir.click(function(){WS.post("conexao_integracao/excluir",{conexao_id:o.conexao_id},function(a){alert_saved("Excluido com sucesso"),o.unload()})})}});