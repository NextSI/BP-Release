define([],function(){return function(e){"use strict";var i=this;this.html_id=e,this.dialog=$("#"+this.html_id),this.modal=this.dialog.find(".modal"),this.modal.attr("id",this.html_id+"_modal"),this.title=this.modal.find(".modal-title"),this.tipo=null,this.onclose=null,this.onsave=null,this.edt_nome=this.dialog.find(".edt_nome"),this.edt_telefone=this.dialog.find(".edt_telefone"),this.edt_observacao=this.dialog.find(".edt_observacao"),this.btn_cancelar=this.dialog.find(".btn_cancelar"),this.btn_salvar=this.dialog.find(".btn_salvar"),this.btn_excluir=this.dialog.find(".btn_excluir"),this.oportunidade_origem_id=null,this.show=function(e,o){switch(o){case FORMULARIO.NOVO:case FORMULARIO.EDITAR:i.btn_salvar.show(),i.btn_excluir.hide(),i.permite_alterar(!0);break;case FORMULARIO.VISUALIZAR:i.btn_salvar.hide(),i.btn_excluir.hide(),i.permite_alterar(!1);break;case FORMULARIO.EXCLUIR:i.btn_salvar.hide(),i.btn_excluir.show(),i.permite_alterar(!1)}i.edt_telefone.mask("(00) 0000-0000"),i.tipo=o,void 0!==e&&e&&(i.oportunidade_origem_id=e,i.preencher()),show_modal(i.modal.attr("id")),set_focus(i.edt_nome)},this.close=function(){close_modal(i.modal.attr("id")),void 0!==i.onclose&&i.onclose&&i.onclose()},this.unload=function(){i.close(),View.unload(this.html_id)},this.permite_alterar=function(e){i.edt_nome.prop("readonly",!e),i.edt_telefone.prop("disabled",!e),i.edt_observacao.prop("readonly",!e)},this.preencher=function(){WS.get("oportunidade_origem/objeto/",{oportunidade_origem_id:i.oportunidade_origem_id},function(e){i.edt_nome.val(e.nome),i.edt_telefone.val(e.telefone),i.edt_observacao.val(e.observacao)})},this.btn_cancelar.unbind("click"),this.btn_cancelar.click(function(){i.unload()}),this.btn_salvar.unbind("click"),this.btn_salvar.click(function(){WS.post("oportunidade_origem/salvar",{oportunidade_origem_id:i.oportunidade_origem_id,nome:i.edt_nome.val(),telefone:i.edt_telefone.val(),observacao:i.edt_observacao.val()},function(e){i.oportunidade_origem_id=e.id,alert_saved(e.nome+" salvo com sucesso"),void 0!==i.onsave&&i.onsave&&i.onsave(e),i.unload()})}),this.btn_excluir.unbind("click"),this.btn_excluir.click(function(){WS.post("oportunidade_origem/excluir",{oportunidade_origem_id:i.oportunidade_origem_id},function(e){alert_saved(e.nome+" excluido com sucesso"),i.unload()})})}});