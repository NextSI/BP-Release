define([],function(){return function(t){"use strict";var a=this;this.html_id=t,this.dialog=$("#"+this.html_id),this.modal=this.dialog.find(".modal"),this.modal.attr("id",this.html_id+"_modal"),this.title=this.modal.find(".modal-title"),this.tipo=null,this.onclose=null,this.chk_apontamento_config=this.dialog.find(".chk_apontamento_config"),this.chk_apontamento_projeto_concluido=this.dialog.find(".chk_apontamento_projeto_concluido"),this.chk_apontamento_horario_conflitante=this.dialog.find(".chk_apontamento_horario_conflitante"),this.edt_alterar_data_fechamento=this.dialog.find(".edt_alterar_data_fechamento"),this.chk_permitir_apontamento_retroativo=this.dialog.find(".chk_permitir_apontamento_retroativo"),this.edt_alterar_data_retroativa=this.dialog.find(".edt_alterar_data_retroativa"),this.chk_permitir_apontamento_futuro=this.dialog.find(".chk_permitir_apontamento_futuro"),this.edt_alterar_data_futura=this.dialog.find(".edt_alterar_data_futura"),this.btn_cancelar=this.dialog.find(".btn_cancelar"),this.btn_salvar=this.dialog.find(".btn_salvar"),this.btn_excluir=this.dialog.find(".btn_excluir"),this.area_id=null,this.show=function(){a.edt_alterar_data_retroativa.mask("000"),a.edt_alterar_data_futura.mask("000"),a.preencher(),show_modal(a.modal.attr("id"))},this.preencher=function(){WS.get("apontamento_projeto/get_parametros/",null,function(t){a.chk_apontamento_config.prop("checked","S"==t.varios_apontamentos_pendentes).change(),a.chk_apontamento_projeto_concluido.prop("checked","S"==t.permitir_apontamento_projeto_concluido).change(),a.chk_apontamento_horario_conflitante.prop("checked","N"!=t.apontamento_horario_conflitante).change(),a.chk_permitir_apontamento_retroativo.prop("checked","S"===t.permitir_apontamento_retroativo).trigger("change"),a.chk_permitir_apontamento_futuro.prop("checked","S"===t.permitir_apontamento_futuro).trigger("change"),t.apontamento_data_fechamento&&a.edt_alterar_data_fechamento.val(t.apontamento_data_fechamento),t.apontamento_atividade_data_retroativa&&a.edt_alterar_data_retroativa.val(t.apontamento_atividade_data_retroativa),t.apontamento_atividade_data_futura&&a.edt_alterar_data_futura.val(t.apontamento_atividade_data_futura)})},this.close=function(){close_modal(a.modal.attr("id")),void 0!==a.onclose&&a.onclose&&a.onclose()},this.unload=function(){a.close(),View.unload(this.html_id)},this.chk_permitir_apontamento_retroativo.on("change",function(){a.edt_alterar_data_retroativa.prop("disabled",!$(this).prop("checked"))}),this.chk_permitir_apontamento_futuro.on("change",function(){a.edt_alterar_data_futura.prop("disabled",!$(this).prop("checked"))}),this.btn_cancelar.unbind("click"),this.btn_cancelar.click(function(){a.unload()}),this.btn_salvar.unbind("click"),this.btn_salvar.click(function(){WS.post("apontamento_projeto/salva_config_apontamento",{varios_apontamentos_pendentes:a.chk_apontamento_config.prop("checked")?"S":"N",permitir_apontamento_projeto_concluido:a.chk_apontamento_projeto_concluido.prop("checked")?"S":"N",apontamento_horario_conflitante:a.chk_apontamento_horario_conflitante.prop("checked")?"S":"N",apontamento_data_fechamento:get_datepicker(a.edt_alterar_data_fechamento),apontamento_atividade_data_retroativa:a.edt_alterar_data_retroativa.val(),apontamento_atividade_data_futura:a.edt_alterar_data_futura.val(),permitir_apontamento_retroativo:a.chk_permitir_apontamento_retroativo.prop("checked")?"S":"N",permitir_apontamento_futuro:a.chk_permitir_apontamento_futuro.prop("checked")?"S":"N"},function(t){alert_saved("Configuração salva com sucesso"),a.unload()},[a.btn_salvar,a.btn_cancelar])})}});