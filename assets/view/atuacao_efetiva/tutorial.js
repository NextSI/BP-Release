define([],function(){return function(i){"use strict";var t=this;this.html_id=i,this.dialog=$("#"+this.html_id),this.modal=this.dialog.find(".modal"),this.modal.attr("id",this.html_id+"_modal"),this.title=this.modal.find(".modal-title"),this.tipo=null,this.onclose=null,this.onsave=null,this.atuacao_efetiva_id=null,this.btn_cancelar=this.dialog.find(".btn_cancelar"),this.chk_exibir=this.dialog.find(".chk_exibir"),this.div_exibir_na_abertura=this.dialog.find(".div_exibir_na_abertura"),this.modal_body=this.dialog.find(".modal-body"),this.tela="",this.show=function(i,e,a){t.title.text(e),t.tela=a;var o=App.get_parametro_usuario("empenho");"competencia"==a?o.exibir_tutorial_competencia&&t.chk_exibir.prop("checked",!!o.exibir_tutorial_competencia).change():o.exibir_tutorial_atuacao_efetiva&&t.chk_exibir.prop("checked",!!o.exibir_tutorial_atuacao_efetiva).change(),"competencia"!=a&&"atuacao"!=a||t.div_exibir_na_abertura.removeClass("hidden"),t.modal_body.append(i),show_modal(t.modal.attr("id")),set_focus(t.edt_nome)},this.close=function(){close_modal(t.modal.attr("id")),void 0!==t.onclose&&t.onclose&&t.onclose()},this.unload=function(i){t.close(i),View.unload(this.html_id)},this.close=function(i){"competencia"==t.tela?App.set_parametro_usuario("empenho",{exibir_tutorial_competencia:t.chk_exibir.prop("checked")}):App.set_parametro_usuario("empenho",{exibir_tutorial_atuacao_efetiva:t.chk_exibir.prop("checked")}),close_modal(t.modal.attr("id")),void 0!==t.onclose&&t.onclose&&t.onclose(i)},this.btn_cancelar.unbind("click"),this.btn_cancelar.click(function(){t.unload()})}});