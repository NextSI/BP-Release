define([],function(){return function(t){"use strict";var e=this;this.html_id=t,this.dialog=$("#"+this.html_id),this.modal=this.dialog.find(".modal"),this.modal.attr("id",this.html_id+"_modal"),this.title=this.modal.find(".modal-title"),this.tipo=null,this.onclose=null,this.btn_cancelar=this.dialog.find(".btn_cancelar"),this.btn_salvar=this.dialog.find(".btn_salvar"),this.btn_excluir=this.dialog.find(".btn_excluir"),this.edt_mensagem=this.dialog.find(".edt_mensagem"),this.oportunidade_id=null,this.oportunidade_observacoes_id=null,this.observacao=null,this.show=function(t,i,a,o){switch(e.oportunidade_id=i,e.oportunidade_observacoes_id=a,e.observacao=o,e.edt_mensagem.attr("id","edt_mensagem"+e.html_id),t){case FORMULARIO.NOVO:e.btn_salvar.show(),e.btn_excluir.hide(),set_tinymce(e.edt_mensagem,"");break;case FORMULARIO.EDITAR:e.btn_salvar.show(),e.btn_excluir.hide(),set_tinymce(e.edt_mensagem,e.observacao);break;case FORMULARIO.EXCLUIR:e.btn_salvar.hide(),e.btn_excluir.show(),set_tinymce(e.edt_mensagem,e.observacao,!0)}e.tipo=t,show_modal(e.modal.attr("id")),set_focus(e.edt_mensagem)},this.close=function(){close_modal(e.modal.attr("id")),void 0!==e.onclose&&e.onclose&&e.onclose()},this.unload=function(){e.close(),View.unload(this.html_id)},this.preencher=function(){},this.btn_cancelar.unbind("click"),this.btn_cancelar.click(function(){e.unload()}),this.btn_salvar.unbind("click"),this.btn_salvar.click(function(){var t={oportunidade_id:e.oportunidade_id,observacao:get_tinymce(e.edt_mensagem),oportunidade_observacoes_id:e.oportunidade_observacoes_id};WS.post("oportunidade_observacoes/salvar",t,function(t){alert_saved("Mensagem salva com sucesso"),e.unload()},[e.btn_excluir,e.btn_salvar,e.btn_cancelar])}),this.btn_excluir.click(function(){var t={observacao:get_tinymce(e.edt_mensagem),oportunidade_observacoes_id:e.oportunidade_observacoes_id};WS.post("oportunidade_observacoes/excluir",t,function(t){alert_fail("Mensagem excluida com sucesso"),e.unload()},[e.btn_excluir,e.btn_salvar,e.btn_cancelar])})}});