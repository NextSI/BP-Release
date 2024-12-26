define([],function(){return function(a){"use strict";var o=this;this.html_id=a,this.dialog=$("#"+this.html_id),this.modal=this.dialog.find(".modal"),this.modal.attr("id",this.html_id+"_modal"),this.onselect=null,this.onclose=null,this.cbo_motivo_cliente=this.dialog.find(".cbo_motivo_cliente"),this.cbo_motivo_fornecedor=this.dialog.find(".cbo_motivo_fornecedor"),this.cbo_motivo_organizacao=this.dialog.find(".cbo_motivo_organizacao"),this.cbo_motivo_colaborador=this.dialog.find(".cbo_motivo_colaborador"),this.cbo_motivo_todos=this.dialog.find(".cbo_motivo_todos"),this.chk_cadastrar_usuarios_automaticamente=this.dialog.find(".chk_cadastrar_usuarios_automaticamente"),this.padrao_usuario=this.dialog.find(".padrao_usuario"),this.cbo_area=this.dialog.find(".cbo_area"),this.cbo_calendario_trabalho=this.dialog.find(".cbo_calendario_trabalho"),this.btn_cancelar=this.dialog.find(".btn_cancelar"),this.btn_salvar=this.dialog.find(".btn_salvar"),this.padrao_abertura_email_colaborador=null,this.padrao_abertura_email_cliente=null,this.padrao_abertura_email_organizacao=null,this.padrao_abertura_email_fornecedor=null,this.padrao_abertura_email_todos=null,this.show=function(a){o.cbo_motivo_cliente.SelectMultiColumn(o.SMC_cbo_config(o.cbo_motivo_cliente)),o.cbo_motivo_fornecedor.SelectMultiColumn(o.SMC_cbo_config(o.cbo_motivo_fornecedor)),o.cbo_motivo_organizacao.SelectMultiColumn(o.SMC_cbo_config(o.cbo_motivo_organizacao)),o.cbo_motivo_colaborador.SelectMultiColumn(o.SMC_cbo_config(o.cbo_motivo_colaborador)),o.cbo_motivo_todos.SelectMultiColumn(o.SMC_cbo_config(o.cbo_motivo_todos)),o.preencher(),set_focus(o.btn_salvar),show_modal(o.modal.attr("id"))},this.define_tipo=function(a,r){switch(a.attr("tipo-config")){case"cliente":o.padrao_abertura_email_cliente=r;break;case"fornecedor":o.padrao_abertura_email_fornecedor=r;break;case"organizacao":o.padrao_abertura_email_organizacao=r;break;case"colaborador":o.padrao_abertura_email_colaborador=r;break;case"todos":o.padrao_abertura_email_todos=r}},this.preencher=function(){WS.get("chamado_motivo/get_configuracoes_email/",{preencher:!0},function(a){a.padrao_abertura_email_cliente&&void 0!==a.padrao_abertura_email_cliente&&(o.padrao_abertura_email_cliente=a.padrao_abertura_email_cliente.id),a.padrao_abertura_email_fornecedor&&void 0!==a.padrao_abertura_email_fornecedor&&(o.padrao_abertura_email_fornecedor=a.padrao_abertura_email_fornecedor.id),a.padrao_abertura_email_organizacao&&void 0!==a.padrao_abertura_email_organizacao&&(o.padrao_abertura_email_organizacao=a.padrao_abertura_email_organizacao.id),a.padrao_abertura_email_colaborador&&void 0!==a.padrao_abertura_email_colaborador&&(o.padrao_abertura_email_colaborador=a.padrao_abertura_email_colaborador.id),a.padrao_abertura_email_todos&&void 0!==a.padrao_abertura_email_todos&&(o.padrao_abertura_email_todos=a.padrao_abertura_email_todos.id),o.cbo_motivo_cliente.SelectMultiColumn("value",a.padrao_abertura_email_cliente),o.cbo_motivo_fornecedor.SelectMultiColumn("value",a.padrao_abertura_email_fornecedor),o.cbo_motivo_organizacao.SelectMultiColumn("value",a.padrao_abertura_email_organizacao),o.cbo_motivo_colaborador.SelectMultiColumn("value",a.padrao_abertura_email_colaborador),o.cbo_motivo_todos.SelectMultiColumn("value",a.padrao_abertura_email_todos),o.chk_cadastrar_usuarios_automaticamente.prop("checked","S"==a.padrao_abertura_email_cadastro_usuario).change(),o.listar_areas(a.padrao_abertura_email_area_usuario),o.listar_calendario_trabalho(a.padrao_abertura_email_calendario_usuario)})},this.listar_areas=function(a){o.cbo_area.find("option").remove(),add_option(o.cbo_area,"","Nenhum"),WS.get("area/listar/",null,function(r){for(var e=0;e<r.data.length;e++){var i=r.data[e];add_option(o.cbo_area,i.id,i.nome)}a&&o.cbo_area.val(a).trigger("change")})},this.listar_calendario_trabalho=function(a){o.cbo_calendario_trabalho.find("option").remove(),add_option(o.cbo_calendario_trabalho,"","Nenhum"),WS.get("calendario_trabalho/listar/",null,function(r){for(var e=0;e<r.length;e++){var i=r[e];add_option(o.cbo_calendario_trabalho,i.calendario_trabalho_id,i.nome)}a&&o.cbo_calendario_trabalho.val(a).trigger("change")})},this.close=function(){close_modal(o.modal.attr("id")),void 0!==o.onclose&&o.onclose&&o.onclose()},this.unload=function(){o.close(),View.unload(this.html_id)},this.chk_cadastrar_usuarios_automaticamente.change(function(){!0===$(this).prop("checked")?o.padrao_usuario.removeClass("hidden"):o.padrao_usuario.addClass("hidden")}),this.btn_cancelar.unbind("click"),this.btn_cancelar.click(function(){o.unload()}),this.btn_salvar.unbind("click"),this.btn_salvar.click(function(){var a=function(){WS.post("chamado_motivo/salvar_configuracoes_email",{padrao_abertura_email_colaborador:o.padrao_abertura_email_colaborador,padrao_abertura_email_cliente:o.padrao_abertura_email_cliente,padrao_abertura_email_organizacao:o.padrao_abertura_email_organizacao,padrao_abertura_email_fornecedor:o.padrao_abertura_email_fornecedor,padrao_abertura_email_todos:o.padrao_abertura_email_todos,padrao_abertura_email_cadastro_usuario:1==o.chk_cadastrar_usuarios_automaticamente.prop("checked")?"S":"N",padrao_abertura_email_area_usuario:o.cbo_area.val(),padrao_abertura_email_calendario_usuario:o.cbo_calendario_trabalho.val()},function(a){alert_saved("Configurações salvas com sucesso"),o.unload()})};if(!0===o.chk_cadastrar_usuarios_automaticamente.prop("checked"))if(null==o.cbo_area.val()||""==o.cbo_area.val()||"Nenhum"==o.cbo_area.val())(r=new Validation).add(new ValidationMessage(Validation.CODES.ERR_FIELD,"Informe a área padrão do Usuário")),alert_modal("Validação",r);else if(null==o.cbo_calendario_trabalho.val()||""==o.cbo_calendario_trabalho.val()||"Nenhum"==o.cbo_calendario_trabalho.val()){var r;(r=new Validation).add(new ValidationMessage(Validation.CODES.ERR_FIELD,"Informe o Calendário de Trabalho padrão do Usuário")),alert_modal("Validação",r)}else a();else a()}),this.SMC_cbo_config=function(a){return{route:"chamado_motivo/listar/",params:null,arr_cols:["Nome"],arr_campos:["nome"],campo_value:"id",text_value:"nome",habilitar_limite:!0,habilitar_desfazer:!0,desfazer_label:"Remover Seleção",desfazer_icone:"",reversePos:!1,habilitar_addon:!1,OnKeyUp:function(r,e){var i={nome:a.SelectMultiColumn("EdtVal")};if(a.SelectMultiColumn("UpdateParams",i),13==r.which){var _=a.val();_&&o.define_tipo(a,_)}},OnClickOverRow:function(r,e){o.define_tipo(a,e),a.SelectMultiColumn("undo_show")},OnUndo:function(r,e){a.SelectMultiColumn("original"),o.define_tipo(a,a.val())}}}}});