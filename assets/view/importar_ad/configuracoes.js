define([],function(){return function(a){"use strict";var i=this;this.html_id=a,this.dialog=$("#"+this.html_id),this.modal=this.dialog.find(".modal"),this.modal.attr("id",this.html_id+"_modal"),this.title=this.modal.find(".modal-title"),this.tipo=null,this.onclose=null,this.onsave=null,this.cbo_areas_colaborador=this.dialog.find(".cbo_areas_colaborador"),this.cbo_calendario_trabalho=this.dialog.find(".cbo_calendario_trabalho"),this.edt_nivel_colaborador=this.dialog.find(".edt_nivel_colaborador"),this.btn_permissoes_colaborador=this.dialog.find(".btn_permissoes_colaborador"),this.btn_incluir_empresa=this.dialog.find(".btn_incluir_empresa"),this.tab_listagem_empresa=this.dialog.find(".tab_listagem_empresa"),this.btn_cancelar=this.dialog.find(".btn_cancelar"),this.btn_confirmar=this.dialog.find(".btn_confirmar"),this.arr_empresa=[],this.arr_empresa_filtrados=[],this.permissoes=[],this.main_pai=null,this.show=function(a){i.edt_nivel_colaborador.val(10),i.preencher_combobox(),show_modal(i.modal.attr("id")),i.main_pai=a},this.listar_areas=function(){WS.get("area/listar/",null,function(a){add_option(i.cbo_areas_colaborador,"","Nenhum");for(var r=0;r<a.data.length;r++){var e=a.data[r];add_option(i.cbo_areas_colaborador,e.id,e.nome)}})},this.listar_calendario_trabalho=function(){WS.get("calendario_trabalho/listar/",null,function(a){add_option(i.cbo_calendario_trabalho,"","Nenhum");for(var r=0;r<a.length;r++){var e=a[r];add_option(i.cbo_calendario_trabalho,e.calendario_trabalho_id,e.nome)}})},this.preencher_combobox=function(){i.listar_areas(),i.listar_calendario_trabalho()},this.close=function(){close_modal(i.modal.attr("id")),void 0!==i.onclose&&i.onclose&&i.onclose()},this.unload=function(){i.close(),View.unload(this.html_id)},i.btn_cancelar.unbind("click"),i.btn_cancelar.click(function(a){i.unload()}),i.btn_confirmar.unbind("click"),i.btn_confirmar.click(function(a){i.arr_empresa_filtrados.length?(i.main_pai.configuracoes_area_id=i.cbo_areas_colaborador.val(),i.main_pai.configuracoes_calendario_trabalho_id=i.cbo_calendario_trabalho.val(),i.main_pai.configuracoes_nivel=i.edt_nivel_colaborador.val(),i.main_pai.configuracoes_permissoes=i.permissoes,i.main_pai.configuracoes_empresas=i.arr_empresa_filtrados,alert_modal('<i class="fa fa-exclamation-triangle pull-left" aria-hidden="true"></i> Atenção !','<div class="alert alert-info" style="text-align: center"> <span href="#" class="alert-link"><strong>Deseja aplicar as alterações à todos os usuários?</strong></span></div>','<i class="fa fa-check-square" aria-hidden="true"></i> Sim',function(){i.main_pai.atualizar_perfil()},!0,'<i class="fa fa-undo" aria-hidden="true"></i> Não'),i.unload()):alert_fail("Informe ao menos uma empresa antes de continuar")}),i.btn_permissoes_colaborador.click(function(){View.load("usuario/permissoes",function(a,r){r.show_permissoes_importacao(i)})}),this.btn_incluir_empresa.unbind("click"),this.btn_incluir_empresa.click(function(){View.load("importar_ad/selecionar",function(a,r){r.show(function(a){var r=!1;$(i.arr_empresa).each(function(e,o){o.empresa_id==a.empresa_id&&(r=!0,i.arr_empresa[e].removido=!1)}),r||i.arr_empresa.push(a),i.render_empresa()})})}),this.render_empresa=function(){var a=i.tab_listagem_empresa.find("tbody"),r=a.find("tr:first");$(i.arr_empresa).each(function(a,r){void 0===i.arr_empresa[a].removido&&(i.arr_empresa[a].removido=!1)}),i.arr_empresa_filtrados=i.arr_empresa.filter(function(a){var i=!0;return!0===a.removido&&(i=!1),i}),i.tab_listagem_empresa.find("tr:gt(1)").remove(),$(i.arr_empresa_filtrados).each(function(e,o){!function(e){var o=r.clone();o.removeAttr("template-row"),o.css("display",""),$(o.find("[template-field='nome_fantasia']")).text(e.nome_fantasia),$(o.find("[template-field='razao_social']")).text(e.razao_social);var t=$(o.find(".btn_deletar_empresa"));switch(t.unbind("click"),t.click(function(){alert_modal("Empresa","Deseja remover a empresa?","Remover",function(){$(i.arr_empresa).each(function(a,r){r.empresa_id==e.empresa_id&&(i.arr_empresa[a].removido=!0,i.render_empresa())})},!0)}),i.tipo){case FORMULARIO.VISUALIZAR:case FORMULARIO.EXCLUIR:t.prop("disabled",!0)}o.appendTo(a)}(o)}),App.aplicar_mascaras(a)}}});