define([],function(){return function(t){"use strict";var i=this;this.html_id=t,this.dialog=$("#"+this.html_id),this.modal=this.dialog.find(".modal"),this.modal.attr("id",this.html_id+"_modal"),this.onselect=null,this.onclose=null,this.tab_listagem=this.dialog.find(".tab_listagem"),this.edt_razao_social=this.dialog.find(".edt_razao_social"),this.edt_nome_fantasia=this.dialog.find(".edt_nome_fantasia"),this.btn_cancelar=this.dialog.find(".btn_cancelar"),this.btn_novo_empresa=this.dialog.find(".btn_novo_empresa"),this.usuario_id=null,this.arr_prospects=[],this.show=function(t,a){i.onselect=t,show_modal(i.modal.attr("id")),set_focus(i.edt_nome_fantasia),i.listar()},this.close=function(){close_modal(i.modal.attr("id")),void 0!==i.onclose&&i.onclose&&i.onclose()},this.unload=function(){i.close(),View.unload(this.html_id)},this.listar=function(t){i.arr_prospects=[];var a={razao_social:i.edt_razao_social.val(),nome_fantasia:i.edt_nome_fantasia.val()};WS.get("empresa/listar/",a,function(t){i.arr_prospects=t,i.render_lista()})},this.render_lista=function(){var t=i.tab_listagem.find("tbody"),a=t.find("tr:first");i.tab_listagem.find("tr:gt(1)").remove(),$(i.arr_prospects).each(function(n,s){!function(n){var s=a.clone();s.removeAttr("template-row"),s.css("display",""),$(s.find("[template-field='nome_fantasia']")).text(n.nome_fantasia),$(s.find("[template-field='razao_social']")).text(n.razao_social);var o=$(s.find(".btn_selecionar")),e=function(){i.onselect(n),i.unload()};o.unbind("click"),o.click(e),s.dblclick(e),s.appendTo(t)}(s)})},this.btn_cancelar.unbind("click"),this.btn_cancelar.click(function(){i.unload()}),this.btn_novo_empresa.unbind("click"),this.btn_novo_empresa.click(function(){View.load("empresa/detalhes",function(t,a){i.unload(),a.onclose=i.listar,a.show(null,FORMULARIO.NOVO)},View.ABA.MULTIPLAS)}),this.edt_razao_social.unbind("keyup"),this.edt_razao_social.keyup($.debounce(500,i.listar)),this.edt_nome_fantasia.unbind("keyup"),this.edt_nome_fantasia.keyup($.debounce(500,i.listar))}});