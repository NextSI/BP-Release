define([],function(){return function(i){"use strict";var t=this;this.html_id=i,this.dialog=$("#"+this.html_id),this.modal=this.dialog.find(".modal"),this.modal.attr("id",this.html_id+"_modal"),this.title=this.modal.find(".modal-title"),this.tipo=null,this.onclose=null,this.chk_chamados=this.dialog.find(".chk_chamados"),this.chk_atividades_processos=this.dialog.find(".chk_atividades_processos"),this.chk_agenda=this.dialog.find(".chk_agenda"),this.chk_atividade_projeto_apontamento=this.dialog.find(".chk_atividade_projeto_apontamento"),this.chk_atividade_projeto=this.dialog.find(".chk_atividade_projeto"),this.chk_documentos=this.dialog.find(".chk_documentos"),this.check_sem_evento=this.dialog.find(".check_sem_evento"),this.chk_atividades_pdca=this.dialog.find(".chk_atividades_pdca"),this.chk_tarefa_quadro_lista_cartao=this.dialog.find(".chk_tarefa_quadro_lista_cartao"),this.edt_qtd_dias=this.dialog.find(".edt_qtd_dias"),this.txt_config_gerais=this.dialog.find(".txt_config_gerais"),this.div_admin_config=this.dialog.find(".div_admin_config"),this.btn_cancelar=this.dialog.find(".btn_cancelar"),this.btn_salvar=this.dialog.find(".btn_salvar"),this.chk_previsao_inicio_atividade_projeto=this.dialog.find(".chk_previsao_inicio_atividade_projeto"),this.chk_inicio_real_atividade_projeto=this.dialog.find(".chk_inicio_real_atividade_projeto"),this.show=function(i,a){App.sessao.dados.admin?(t.txt_config_gerais.show(),t.preencher()):(t.txt_config_gerais.hide(),t.div_admin_config.remove()),t.edt_qtd_dias.val(i>0?parseInt(i,10):7).change(),show_modal(t.modal.attr("id")),t.check_sem_evento.bootstrapSwitch("state",void 0===a||a)},this.close=function(){close_modal(t.modal.attr("id")),void 0!==t.onclose&&t.onclose&&t.onclose(parseInt(t.edt_qtd_dias.val(),10),t.check_sem_evento.prop("checked"))},this.unload=function(){t.close(),View.unload(this.html_id)},this.preencher=function(){WS.get("time_line/get_parametros/",null,function(i){var a=t.chk_chamados.bootstrapSwitch("disabled");t.chk_chamados.bootstrapSwitch("disabled",!1),"S"==i.timeline_chamados&&t.chk_chamados.bootstrapSwitch("state",!0),t.chk_chamados.bootstrapSwitch("disabled",a);var e=t.chk_atividades_processos.bootstrapSwitch("disabled");t.chk_atividades_processos.bootstrapSwitch("disabled",!1),"S"==i.timeline_processos&&t.chk_atividades_processos.bootstrapSwitch("state",!0),t.chk_atividades_processos.bootstrapSwitch("disabled",e);var o=t.chk_agenda.bootstrapSwitch("disabled");t.chk_agenda.bootstrapSwitch("disabled",!1),"S"==i.timeline_agenda&&t.chk_agenda.bootstrapSwitch("state",!0),t.chk_agenda.bootstrapSwitch("disabled",o);var d=t.chk_atividade_projeto_apontamento.bootstrapSwitch("disabled");t.chk_atividade_projeto_apontamento.bootstrapSwitch("disabled",!1),"S"==i.timeline_agenda_apontamento_nao_realizado&&t.chk_atividade_projeto_apontamento.bootstrapSwitch("state",!0),t.chk_atividade_projeto_apontamento.bootstrapSwitch("disabled",d);var s=t.chk_atividade_projeto.bootstrapSwitch("disabled");t.chk_atividade_projeto.bootstrapSwitch("disabled",!1),"S"==i.timeline_atividade_projeto&&t.chk_atividade_projeto.bootstrapSwitch("state",!0),t.chk_atividade_projeto.bootstrapSwitch("disabled",s);var _=t.chk_documentos.bootstrapSwitch("disabled");t.chk_documentos.bootstrapSwitch("disabled",!1),"S"==i.timeline_documentos_pendentes&&t.chk_documentos.bootstrapSwitch("state",!0),t.chk_documentos.bootstrapSwitch("disabled",_);var c=t.chk_previsao_inicio_atividade_projeto.bootstrapSwitch("disabled");t.chk_previsao_inicio_atividade_projeto.bootstrapSwitch("disabled",!1),"S"==i.timeline_atividade_projeto_previsao_inicio&&t.chk_previsao_inicio_atividade_projeto.bootstrapSwitch("state",!0),t.chk_previsao_inicio_atividade_projeto.bootstrapSwitch("disabled",c);var h=t.chk_inicio_real_atividade_projeto.bootstrapSwitch("disabled");t.chk_inicio_real_atividade_projeto.bootstrapSwitch("disabled",!1),"S"==i.timeline_atividade_projeto_inicio_real&&t.chk_inicio_real_atividade_projeto.bootstrapSwitch("state",!0),t.chk_inicio_real_atividade_projeto.bootstrapSwitch("disabled",h);var r=t.chk_atividades_pdca.bootstrapSwitch("disabled");t.chk_atividades_pdca.bootstrapSwitch("disabled",!1),"S"==i.timeline_atividades_pdca&&t.chk_atividades_pdca.bootstrapSwitch("state",!0),t.chk_atividades_pdca.bootstrapSwitch("disabled",r);var n=t.chk_tarefa_quadro_lista_cartao.bootstrapSwitch("disabled");t.chk_tarefa_quadro_lista_cartao.bootstrapSwitch("disabled",!1),"S"==i.timeline_tarefa_quadro_lista_cartao&&t.chk_tarefa_quadro_lista_cartao.bootstrapSwitch("state",!0),t.chk_tarefa_quadro_lista_cartao.bootstrapSwitch("disabled",n)})},this.btn_cancelar.unbind("click"),this.btn_cancelar.click(function(){t.unload()}),this.edt_qtd_dias.unbind("change"),this.edt_qtd_dias.change(function(i){t.edt_qtd_dias.val(this.value),parseInt(this.value,10)<7&&t.edt_qtd_dias.val(7),parseInt(this.value,10)>180&&t.edt_qtd_dias.val(180)}),this.edt_qtd_dias.unbind("keypress"),this.edt_qtd_dias.keypress(function(i){t.edt_qtd_dias.val(this.value),this.value.replace(/[^0-9]/g),13==i.which&&(parseInt(this.value,10)<7&&t.edt_qtd_dias.val(7),parseInt(this.value,10)>180&&t.edt_qtd_dias.val(180))}),this.edt_qtd_dias.unbind("keyup"),this.edt_qtd_dias.keyup(function(i){this.value=this.value.replace(/[^0-9]/g,"")}),this.btn_salvar.unbind("click"),this.btn_salvar.click(function(){WS.post("time_line/salva_config_timeline",{timeline_chamados:t.chk_chamados.prop("checked"),timeline_processos:t.chk_atividades_processos.prop("checked"),timeline_agenda:t.chk_agenda.prop("checked"),timeline_atividade_projeto:t.chk_atividade_projeto.prop("checked"),timeline_documentos_pendentes:t.chk_documentos.prop("checked"),timeline_atividade_projeto_previsao_inicio:t.chk_previsao_inicio_atividade_projeto.prop("checked"),timeline_atividade_projeto_inicio_real:t.chk_inicio_real_atividade_projeto.prop("checked"),timeline_usuario_qtd_dias:t.edt_qtd_dias.val(),timeline_usuario_exibir_dias_sem_evento:t.check_sem_evento.prop("checked"),timeline_atividades_pdca:t.chk_atividades_pdca.prop("checked"),timeline_tarefa_quadro_lista_cartao:t.chk_tarefa_quadro_lista_cartao.prop("checked")},function(i){alert_saved("Configurações salvas com sucesso"),t.unload()},[t.btn_salvar,t.btn_cancelar])})}});