define([],function(){return function(i){"use strict";var t=this;this.html_id=i,this.dialog=$("#"+this.html_id),this.modal=this.dialog.find(".modal"),this.modal.attr("id",this.html_id+"_modal"),this.title=this.modal.find(".modal-title"),this.tipo=null,this.onclose=null,this.onsave=null,this.lista_eventos=this.modal.find(".lista_eventos"),this.btn_cancelar=this.dialog.find(".btn_cancelar"),this.show=function(i){$.each(i.chamados,function(i,a){t.add_row(a,"chamado")}),$.each(i.agenda,function(i,a){t.add_row(a,"agenda")}),show_modal(t.modal.attr("id"))},this.add_row=function(i,a){var o=t.lista_eventos.find("[template-row]").clone();o.removeAttr("template-row"),o.css("display",""),"agenda"==a?(o.text("Evento da Agenda #"+i.oportunidade_agenda_id),o.click(function(a){View.load("oportunidade/atividade",function(a,o){t.unload(),o.show(i.oportunidade_agenda_id,FORMULARIO.EDITAR)})})):"chamado"==a&&(o.unbind("click"),o.click(function(t){View.loadReact(window.views.chamado.Detalhes.default,{chamadoId:i.chamado_id},function(i,t){},View.ABA.MULTIPLAS)}),o.text("Chamado #"+i.chamado_id)),t.lista_eventos.append(o)},this.close=function(){close_modal(t.modal.attr("id")),void 0!==t.onclose&&t.onclose&&t.onclose()},this.btn_cancelar.unbind("click"),this.btn_cancelar.click(function(){t.unload()}),this.unload=function(){t.close(),View.unload(this.html_id)}}});