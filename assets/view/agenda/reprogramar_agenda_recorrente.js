define([],function(){return function(i){"use strict";var t=this;this.html_id=i,this.dialog=$("#"+this.html_id),this.modal=this.dialog.find(".modal"),this.modal.attr("id",this.html_id+"_modal"),this.title=this.modal.find(".modal-title"),this.tipo=null,this.onclose=null,this.onsave=null,this.btn_confirmar=this.dialog.find(".btn_confirmar"),this.btn_cancelar=this.dialog.find(".btn_cancelar"),this.btn_excluir=this.dialog.find(".btn_excluir"),this.div_reprogramacao=this.dialog.find(".div_reprogramacao"),this.show=function(){show_modal(t.modal.attr("id"))},this.close=function(){close_modal(t.modal.attr("id")),void 0!==t.onclose&&t.onclose&&t.onclose()},this.unload=function(){t.close(),View.unload(this.html_id)},this.permite_alterar=function(i){},this.preencher=function(){},this.btn_cancelar.unbind("click"),this.btn_cancelar.click(function(){t.unload()}),this.btn_confirmar.unbind("click"),this.btn_confirmar.click(function(){var i=t.div_reprogramacao.find('input[name="opt_tipo_reprogramacao"]:checked').val();t.onsave(i)}),this.btn_excluir.unbind("click"),this.btn_excluir.click(function(){})}});