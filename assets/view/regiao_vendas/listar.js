define([],function(){return function(i){"use strict";var e=this;this.html_id=i,this.dialog=$("#"+this.html_id),this.title="Região de Vendas",this.btn_novo=this.dialog.find(".btn_novo"),this.btn_listar=this.dialog.find(".btn_listar"),this.div_sinteticas=this.dialog.find(".div_sinteticas"),this.template_sintetica=this.dialog.find("[template-sintetica]"),this.tab_listagem=this.dialog.find(".tab_listagem"),this.arr_regiao_vendas=[];var a=null,t=null,n=null,r=[],d=[];this.show=function(){e.listar()},this.listar=function(){var i=e.tab_listagem.find("tbody"),s=i.find("tr:first");$(i).sortable({start:function(i,e){},change:function(i,e){},update:function(i,e){}}),t=function(i,e){var a="vermelho_mini.png";switch(i){case 1:a="amarelo_mini.png";break;case 2:a="azul_mini.png";break;case 3:a="branco_mini.png";break;case 4:a="ciano_mini.png";break;case 5:a="cinza_mini.png";break;case 6:a="laranja_mini.png";break;case 7:a="lilas_mini.png";break;case 8:a="marrom_mini.png";break;case 9:a="musgo_mini.png";break;case 10:a="preto_mini.png";break;case 11:a="rosa_mini.png";break;case 12:a="verde_mini.png"}e.attr("src","assets/img/legenda/"+a)},n=function(l,c,_,f,p,g){var v=s.clone();v.removeAttr("template-row"),v.css("display",""),v.droppable({drop:function(e,a){var n=$(e.target),d=n.attr("id_registro"),s=$(a.draggable);s.attr("id_pai",d);var o={id_registro:s.attr("id_registro"),id_registro_pai:d};WS.post("regiao_vendas/alterar_pai/",o,function(e){var a=$(n.children()[0]).css("padding-left");a=parseInt(a);var o=((a+=50)-8)/50,l=$(s.find("[template-button='btn_detalhe']"));t(o,l),$(s.children()[0]).css("padding-left",a+"px"),s.attr("id_pai",d),r=[];var c=s.attr("id_registro");u(c);var _=null;$(r).each(function(e,a){var n=i.find('[id_registro="'+a.attr("id_pai")+'"]');n=$(n);var r=$(n.children()[0]).css("padding-left");r=parseInt(r);var d=((r+=50)-8)/50,s=$(a.find("[template-button='btn_detalhe']"));t(d,s),$(a.find("[template-field='col_descricao']")).css("padding-left",r+"px"),a.attr("id_pai",n.attr("id_registro")),null!=_?$(_).after(a):$(n).after(a),_=a})})}});var u=function(e){var a=i.find('[id_pai="'+e+'"]');$(a).each(function(i,e){var a=(e=$(e)).clone(!0);r.push(a),e.remove(),u(e.attr("id_registro"))})},b=function(e){var a=i.find('[id_pai="'+e+'"]');$(a).each(function(i,e){e=$(e);var a=new Object;a.regiao_vendas_id=e.attr("id_registro"),d.push(a),b(a.regiao_vendas_id)})},h=$(v.find("[template-field='descricao']"));h.text(l.descricao);var m=$(v.find("[template-field='col_descricao']")),k=$(v.find("[template-button='btn_detalhe']"));v.attr("id_registro",l.regiao_vendas_id),1==c?(t(((f+=50)-8)/50,k),m.css("padding-left",f+"px"),v.attr("id_pai",_)):(t(99,k),m.css("padding-left",""),v.attr("id_pai","")),h.unbind("click"),h.click(function(i){a(2,v)});var C=$(v.find(".btn_insert"));C.unbind("click"),C.click(function(i){v=$("[id_registro='"+v.attr("id_registro")+"']");var r=new Object,d=v.attr("id_registro");r.bloqueado="N",r.descricao="",r.excluido="N",r.observacoes=null,r.regiao_vendas_id=null,r.regiao_vendas_pai_id=d,e.arr_regiao_vendas=[];var s=$(v.children()[0]).css("padding-left");s=parseInt(s);var o=n(r,!0,d,s+=50,!1,!0),l=(s-8)/50,c=$(o.find("[template-button='btn_detalhe']"));t(l,c),$(o.find("[template-field='col_descricao']")).css("padding-left",s+"px"),o.attr("id_pai",v.attr("id_registro")),a(2,o),$(v).after(o)});var x=$(v.find(".btn_editar"));x.unbind("click"),x.click(function(a){v=$("[id_registro='"+v.attr("id_registro")+"']"),l.regiao_vendas_id=v.attr("id_registro"),View.load("regiao_vendas/detalhes",function(a,n){n.onsave=function(a){l.descricao=a.descricao,$(v.find("[template-field='descricao']")).text(l.descricao);var n=i.find('[id_registro="'+a.regiao_vendas_pai_id+'"]');n=$(n);var d=$(v),s=$(n.children()[0]).css("padding-left");s=parseInt(s);var o=((s+=50)-8)/50,c=$(d.find("[template-button='btn_detalhe']"));t(o,c),$(d.children()[0]).css("padding-left",s+"px"),d.attr("id_pai",_);var f=d.clone(!0);d.remove(),n.after(f),r=[],d.attr("id_registro"),u(a.id);var p=null;$(r).each(function(e,a){var n=i.find('[id_registro="'+a.attr("id_pai")+'"]');n=$(n);var r=$(n.children()[0]).css("padding-left");r=parseInt(r);var d=((r+=50)-8)/50,s=$(a.find("[template-button='btn_detalhe']"));t(d,s),$(a.find("[template-field='col_descricao']")).css("padding-left",r+"px"),a.attr("id_pai",n.attr("id_registro")),null!=p?$(p).after(a):$(n).after(a),p=a}),e.listar()},n.show(l.regiao_vendas_id,FORMULARIO.EDITAR)},View.ABA.MULTIPLAS)});var w=$(v.find(".btn_excluir"));w.unbind("click"),w.click(function(e){v=$("[id_registro='"+v.attr("id_registro")+"']"),l.regiao_vendas_id=v.attr("id_registro");var a=$(v.find("[template-field='descricao']")),t=new Validation;t.add(new ValidationMessage(Validation.CODES.ERR_FIELD,"Deseja remover a região de vendas "+a.text()+" e suas sub-regiões?")),alert_modal("Atenção",t,"Remover",function(){d=[];var e=new Object;e.regiao_vendas_id=l.regiao_vendas_id,d.push(e),b(l.regiao_vendas_id),WS.post("regiao_vendas/excluir",{arr_itens:JSON.stringify(d)},function(e){alert_saved("Operação realizada com sucesso!"),$(d).each(function(e,a){i.find('[id_registro="'+a.regiao_vendas_id+'"]').remove()})},[w])},!0)});var y=$(v.find("[template-button='btn_efect']"));if(y.unbind("click"),y.click(function(i){var e=$(this);e.hasClass("glyphicon-plus")?(e.removeClass("glyphicon-plus"),e.addClass("glyphicon-minus")):(e.removeClass("glyphicon-minus"),e.addClass("glyphicon-plus")),v=$("[id_registro='"+v.attr("id_registro")+"']"),l.regiao_vendas_id=v.attr("id_registro"),o(l.regiao_vendas_id,!0)}),1==p)s.after(v),a(2,v);else{if(1==g)return v;v.appendTo(i)}$(e.arr_regiao_vendas).each(function(e,a){if(a.regiao_vendas_pai_id==l.regiao_vendas_id){var t=$(i.find('[id_registro="'+l.regiao_vendas_id+'"]').children()[0]).css("padding-left");t=parseInt(t),n(a,!0,l.regiao_vendas_id,t)}})},a=function(t,n){if(2==t){(o=$(n.find("[template-field='descricao']"))).addClass("hidden");var r=$(n.find("[template-field='input_descricao']"));"{descricao}"!=o.text()&&r.val(o.text()),r.removeClass("hidden"),set_focus(r),$(n.find(".btns_normal")).addClass("hidden"),$(n.find(".btns_insert_update")).removeClass("hidden"),i.find(".btn_insert").prop("disabled",!0),i.find(".btn_editar").prop("disabled",!0),i.find(".btn_excluir").prop("disabled",!0),e.btn_novo.prop("disabled",!0),e.btn_listar.prop("disabled",!0),$(i).sortable("disable");var d=$(n.find(".btn_confirmar"));d.unbind("click"),d.click(function(i){var e=n.attr("id_pai"),t={regiao_vendas_id:n.attr("id_registro"),descricao:r.val(),observacoes:null,bloqueado:"N",regiao_vendas_pai_id:e,arr_representante:null};WS.post("regiao_vendas/salvar",t,function(i){n.attr("id_registro",i.id),a(1,n),alert_saved("Operação realizada com sucesso!")})});var s=$(n.find(".btn_cancelar"));s.unbind("click"),s.click(function(i){a(3,n)}),r.keypress(function(i){13==i.keyCode&&d.click()})}else if(1==t||3==t){var o;(r=$(n.find("[template-field='input_descricao']"))).addClass("hidden"),(o=$(n.find("[template-field='descricao']"))).removeClass("hidden"),1==t&&o.text(r.val()),$(n.find(".btns_normal")).removeClass("hidden"),$(n.find(".btns_insert_update")).addClass("hidden"),i.find(".btn_insert").prop("disabled",!1),i.find(".btn_editar").prop("disabled",!1),i.find(".btn_excluir").prop("disabled",!1),e.btn_novo.prop("disabled",!1),e.btn_listar.prop("disabled",!1),$(i).sortable("enable"),3!=t||void 0!==n.attr("id_registro")&&"undefined"!=n.attr("id_registro")&&null!=n.attr("id_registro")||n.remove()}};var o=function(e,a){var t=i.find('[id_registro="'+e+'"]'),n=i.find('[id_pai="'+e+'"]');$(n).each(function(i,e){e=$(e),t.find("[template-button='btn_efect']").hasClass("glyphicon-minus")&&1==a||t.find("[template-button='btn_efect']").hasClass("glyphicon-minus")&&0==t.hasClass("hidden")&&0==a?e.removeClass("hidden"):e.addClass("hidden"),o(e.attr("id_registro"),!1)})};e.tab_listagem.find("tr:gt(1)").remove(),WS.get("regiao_vendas/listar/",null,function(i){e.tab_listagem.find("tr:gt(1)").remove(),e.arr_regiao_vendas=i,$(i).each(function(i,e){null!=e.regiao_vendas_pai_id&&""!=e.regiao_vendas_pai_id||n(e,!1)})})},this.unload=function(){View.unload(this.html_id)},this.btn_novo.unbind("click"),this.btn_novo.click(function(){var i=new Object;i.bloqueado="N",i.descricao="",i.excluido="N",i.observacoes=null,i.regiao_vendas_id=null,i.regiao_vendas_pai_id=null,e.arr_regiao_vendas=[],n(i,!1,null,null,!0)}),this.btn_listar.unbind("click"),this.btn_listar.click(function(){e.listar()})}});