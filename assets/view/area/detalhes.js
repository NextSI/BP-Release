define([],function(){return function(i){"use strict";var t=this;this.html_id=i,this.dialog=$("#"+this.html_id),this.modal=this.dialog.find(".modal"),this.modal.attr("id",this.html_id+"_modal"),this.title=this.modal.find(".modal-title"),this.tipo=null,this.onclose=null,this.onsave=null,this.edt_nome=this.dialog.find(".edt_nome"),this.btn_cancelar=this.dialog.find(".btn_cancelar"),this.btn_salvar=this.dialog.find(".btn_salvar"),this.btn_excluir=this.dialog.find(".btn_excluir"),this.area_id=null,this.show=function(i,a,e){switch(e&&t.edt_nome.val(e),a){case FORMULARIO.NOVO:case FORMULARIO.EDITAR:t.btn_salvar.show(),t.btn_excluir.hide(),t.permite_alterar(!0);break;case FORMULARIO.VISUALIZAR:t.btn_salvar.hide(),t.btn_excluir.hide(),t.permite_alterar(!1);break;case FORMULARIO.EXCLUIR:t.btn_salvar.hide(),t.btn_excluir.show(),t.permite_alterar(!1)}t.tipo=a,void 0!==i&&i&&(t.area_id=i,t.preencher()),show_modal(t.modal.attr("id")),set_focus(t.edt_nome)},this.close=function(){close_modal(t.modal.attr("id")),void 0!==t.onclose&&t.onclose&&t.onclose()},this.unload=function(){t.close(),View.unload(this.html_id)},this.permite_alterar=function(i){t.edt_nome.prop("readonly",!i)},this.preencher=function(){WS.get("area/objeto/",{area_id:t.area_id},function(i){t.edt_nome.val(i.nome)})},this.btn_cancelar.unbind("click"),this.btn_cancelar.click(function(){t.unload()}),this.btn_salvar.unbind("click"),this.btn_salvar.click(function(){WS.post("area/salvar",{area_id:t.area_id,nome:t.edt_nome.val()},function(i){t.area_id=i.id,alert_saved(i.nome+" salvo com sucesso"),void 0!==t.onsave&&t.onsave&&t.onsave(i),t.unload()})}),this.btn_excluir.unbind("click"),this.btn_excluir.click(function(){WS.post("area/excluir",{area_id:t.area_id},function(i){alert_saved(i.nome+" excluido com sucesso"),t.unload()})})}});