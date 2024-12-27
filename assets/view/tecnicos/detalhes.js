define([],function(){return function(o){"use strict";var i=this;this.html_id=o,this.dialog=$("#"+this.html_id),this.modal=this.dialog.find(".modal"),this.modal.attr("id",this.html_id+"_modal"),this.title=this.modal.find(".modal-title"),this.tipo=null,this.onclose=null,this.chk_visualiza_apontamentos=this.dialog.find(".chk_visualiza_apontamentos"),this.chk_visualiza_despezas=this.dialog.find(".chk_visualiza_despezas"),this.chk_reembolso_refeicao=this.dialog.find(".chk_reembolso_refeicao"),this.cbo_tipo=this.dialog.find(".cbo_tipo"),this.edt_quilometragem=this.dialog.find(".edt_quilometragem"),this.edt_valor_refeicao=this.dialog.find(".edt_valor_refeicao"),this.cbo_colaboradores=this.dialog.find(".cbo_colaboradores"),this.edt_valor_projeto=this.dialog.find(".edt_valor_projeto"),this.edt_codigo=this.dialog.find(".edt_codigo"),this.btn_cancelar=this.dialog.find(".btn_cancelar"),this.btn_salvar=this.dialog.find(".btn_salvar"),this.btn_excluir=this.dialog.find(".btn_excluir"),this.tecnico_id=null,this.show=function(o,e,a){switch(i.edt_quilometragem.maskMoney({thousands:"",decimal:",",allowZero:!0,suffix:"",precision:2}),i.edt_valor_refeicao.maskMoney({thousands:"",decimal:",",allowZero:!0,suffix:"",precision:2}),i.edt_valor_projeto.maskMoney({thousands:"",decimal:",",allowZero:!0,suffix:"",precision:2}),e){case FORMULARIO.NOVO:i.btn_salvar.show(),i.btn_excluir.hide(),i.permite_alterar(!0),i.listar_colaboradores();break;case FORMULARIO.EDITAR:i.btn_salvar.show(),i.btn_excluir.hide(),i.permite_alterar(!0);break;case FORMULARIO.VISUALIZAR:i.btn_salvar.hide(),i.btn_excluir.hide(),i.permite_alterar(!1);break;case FORMULARIO.EXCLUIR:i.btn_salvar.hide(),i.btn_excluir.show(),i.permite_alterar(!1)}i.tipo=e,void 0!==o&&o&&(i.tecnico_id=o,i.preencher()),"S"==a||1==a?(i.edt_codigo.prop("disabled",!0),i.sugerir_codigo()):i.edt_codigo.prop("disabled",!1),show_modal(i.modal.attr("id")),set_focus(i.cbo_colaboradores)},this.listar_colaboradores=function(o){i.cbo_colaboradores.find("option").remove(),WS.get("usuario/listar/",{tipo_usuario:USUARIO_TIPO.ANALISTA},function(e){for(var a=0;a<e.length;a++){var t=e[a];add_option(i.cbo_colaboradores,t.usuario_id,t.nome)}o&&i.cbo_colaboradores.val(o).trigger("change"),i.cbo_colaboradores.selectpicker("refresh")})},this.close=function(){close_modal(i.modal.attr("id")),void 0!==i.onclose&&i.onclose&&i.onclose()},this.unload=function(){i.close(),View.unload(this.html_id)},this.permite_alterar=function(o){i.chk_visualiza_apontamentos.prop("disabled",!o),i.chk_visualiza_despezas.prop("disabled",!o),i.chk_reembolso_refeicao.prop("disabled",!o),i.cbo_tipo.prop("disabled",!o),i.edt_quilometragem.prop("readonly",!o),i.cbo_colaboradores.prop("disabled",!o),i.edt_valor_refeicao.prop("disabled",!o),i.edt_valor_projeto.prop("disabled",!o)},this.preencher=function(){WS.get("tecnico/objeto/",{tecnico_id:i.tecnico_id},function(o){i.listar_colaboradores(o.usuario_id),i.edt_quilometragem.maskMoney("mask",parseFloat(o.valor_km)),i.edt_valor_refeicao.maskMoney("mask",parseFloat(o.valor_refeicao)),i.edt_valor_projeto.maskMoney("mask",parseFloat(o.valor_projeto)),i.edt_codigo.val(o.codigo),i.cbo_tipo.val(o.tipo).trigger("change"),"S"==o.reembolso_refeicao&&i.chk_reembolso_refeicao.bootstrapSwitch("state",!0),"S"==o.visualizar_despesas&&i.chk_visualiza_despezas.bootstrapSwitch("state",!0),"S"==o.visualizar_apontamentos&&i.chk_visualiza_apontamentos.bootstrapSwitch("state",!0)})},this.sugerir_codigo=function(){WS.get("tecnico/get_next_codigo/",null,function(o){i.edt_codigo.val(o)})},this.btn_cancelar.unbind("click"),this.btn_cancelar.click(function(){i.unload()}),this.btn_salvar.unbind("click"),this.btn_salvar.click(function(){WS.post("tecnico/salvar",{tecnico_id:i.tecnico_id,valor_km:i.edt_quilometragem.maskMoney("unmasked")[0],valor_refeicao:i.edt_valor_refeicao.maskMoney("unmasked")[0],tipo:i.cbo_tipo.val(),usuario_id:i.cbo_colaboradores.val(),visualizar_apontamentos:i.chk_visualiza_apontamentos.prop("checked"),visualizar_despesas:i.chk_visualiza_despezas.prop("checked"),reembolso_refeicao:i.chk_reembolso_refeicao.prop("checked"),valor_projeto:i.edt_valor_projeto.maskMoney("unmasked")[0],codigo:i.edt_codigo.val()},function(o){i.tecnico_id=o.id,alert_saved("Técnico salvo com sucesso"),i.unload()})}),this.btn_excluir.unbind("click"),this.btn_excluir.click(function(){WS.post("tecnico/excluir",{tecnico_id:i.tecnico_id},function(o){alert_saved("Técnico excluido com sucesso"),i.unload()})})}});