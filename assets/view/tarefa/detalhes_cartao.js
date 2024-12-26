define([],function(){return function(a){"use strict";var o=this;this.html_id=a,this.dialog=$("#"+this.html_id),this.onclose=null,this.btn_salvar=this.dialog.find(".btn_salvar"),this.btn_salvar_sair=this.dialog.find(".btn_salvar_sair"),this.btn_excluir=this.dialog.find(".btn_excluir"),this.aba_geral=this.dialog.find(".aba_geral"),this.aba_historico=this.dialog.find(".aba_historico"),this.aba_referencias=this.dialog.find(".aba_referencias"),this.aba_formulario_personalizado=this.dialog.find(".aba_formulario_personalizado"),this.conteudo_aba_geral=this.dialog.find(".conteudo_aba_geral"),this.conteudo_aba_historico=this.dialog.find(".conteudo_aba_historico"),this.conteudo_aba_referencias=this.dialog.find(".conteudo_aba_referencias"),this.conteudo_aba_formulario_personalizado=this.dialog.find(".conteudo_aba_formulario_personalizado"),this.dx_textbox_titulo_cartao=this.dialog.find(".dx_textbox_titulo_cartao"),this.dx_dropdown_responsavel=this.dialog.find(".dx_dropdown_responsavel"),this.dx_dropdown_etiqueta=this.dialog.find(".dx_dropdown_etiqueta"),this.dx_date_prazo=this.dialog.find(".dx_date_prazo"),this.dx_date_conclusao=this.dialog.find(".dx_date_conclusao"),this.dx_selectbox_lista=this.dialog.find(".dx_selectbox_lista"),this.dx_selectbox_ordem=this.dialog.find(".dx_selectbox_ordem"),this.dx_html_editor_descricao=this.dialog.find(".dx_html_editor_descricao"),this.dx_listagem_historico=this.dialog.find(".dx_listagem_historico"),this.lbl_nome=this.dialog.find(".lbl_nome"),this.form_editor=this.dialog.find(".form-editor"),this.form_grupos=this.dialog.find(".form-grupos"),this.template_grupo=this.dialog.find("[template-grupo]"),this.template_campo=this.dialog.find("[template-campo]"),this.divs_informativo_prazo=[],this.div_componente_referencias=this.dialog.find(".div_componente_referencias"),this.dados_modificados=!1,this.nao_fechar_aba=!1,this.cartao_id=null,this.titulo_cartao=null,this.responsavel=null,this.etiqueta=null,this.data_prazo=null,this.data_conclusao=null,this.lista=null,this.ordem=null,this.descricao=null,this.listagem_historico=null,this.flag_renderizar_historico=!0,this.tipo_permissao=null,this.usuario_responsavel=null,this.valores_antigos={},this.campos_personalizados=null,this.verificar_alteracoes=null,this.show=function(a,e){o.conteudo_aba_geral.attr("id","aba_geral"+o.html_id),o.conteudo_aba_historico.attr("id","aba_historico"+o.html_id),o.conteudo_aba_referencias.attr("id","aba_referencias"+o.html_id),o.conteudo_aba_formulario_personalizado.attr("id","aba_formulario_personalizado"+o.html_id),o.aba_geral.attr("href","#"+o.conteudo_aba_geral.attr("id")),o.aba_historico.attr("href","#"+o.conteudo_aba_historico.attr("id")),o.aba_referencias.attr("href","#"+o.conteudo_aba_referencias.attr("id")),o.aba_formulario_personalizado.attr("href","#"+o.conteudo_aba_formulario_personalizado.attr("id")),o.cartao_id=a,o.verificar_alteracoes=e,o.listar()},this.listar=function(){WS.get("tarefa_quadro_lista_cartao/objeto/",{cartao_id:o.cartao_id},function(a){a?o.preencher(a):alert_modal("Validação","Sem permissão para visualizar o cartão","Ok",function(){o.unload()})})},this.preencher=function(a){o.title=a.nome.substr(0,45),App.titulo_aba(o.html_id,o.title),o.tipo_permissao=a.tipo_permissao,o.usuario_responsavel=!1;for(var e=0;e<a.arr_responsavel.length;e++)if(a.arr_responsavel[e]==App.sessao.dados.usuario_id&&o.tipo_permissao!=TAREFA_QUADRO_TIPO_PERMISSAO.ACOMPANHAMENTO){o.usuario_responsavel=!0;break}(App.sessao.dados.admin||o.tipo_permissao==TAREFA_QUADRO_TIPO_PERMISSAO.GERENTE||o.usuario_responsavel)&&(o.btn_salvar.removeClass("hidden"),o.btn_salvar_sair.removeClass("hidden"),o.btn_excluir.removeClass("hidden")),o.titulo_cartao=o.dx_textbox_titulo_cartao.dxTextBox({value:a.nome,readOnly:!(App.sessao.dados.admin||o.tipo_permissao==TAREFA_QUADRO_TIPO_PERMISSAO.GERENTE||o.usuario_responsavel)}).dxTextBox("instance"),o.data_prazo=o.dx_date_prazo.dxDateBox({type:"datetime",dateSerializationFormat:"yyyy-MM-ddTHH:mm:ss",showClearButton:!0,value:"string"==typeof a.data_prazo?a.data_prazo.replace(" ","T"):a.data_prazo,readOnly:!(App.sessao.dados.admin||o.tipo_permissao==TAREFA_QUADRO_TIPO_PERMISSAO.GERENTE||o.usuario_responsavel)}).dxDateBox("instance"),o.data_conclusao=o.dx_date_conclusao.dxDateBox({type:"datetime",dateSerializationFormat:"yyyy-MM-ddTHH:mm:ss",showClearButton:!0,value:"string"==typeof a.data_conclusao?a.data_conclusao.replace(" ","T"):a.data_conclusao,readOnly:!(App.sessao.dados.admin||o.tipo_permissao==TAREFA_QUADRO_TIPO_PERMISSAO.GERENTE||o.usuario_responsavel)}).dxDateBox("instance"),o.responsavel=o.dx_dropdown_responsavel.dxDropDownBox({value:a.arr_responsavel,readOnly:!(App.sessao.dados.admin||o.tipo_permissao==TAREFA_QUADRO_TIPO_PERMISSAO.GERENTE),valueExpr:"id",placeholder:"Select a value...",displayExpr:"nome",showClearButton:!0,dataSource:new DevExpress.data.CustomStore.default({loadMode:"raw",key:"id",load:function(){return a.arr_usuarios_equipe.filter(function(a){return"N"===a.bloqueado})}}),contentTemplate:function(a){var o=a.component.option("value"),e=$("<div>").dxDataGrid({dataSource:a.component.getDataSource(),columns:[{dataField:"nome",width:200},{dataField:"tipo_permissao",lookup:{dataSource:TAREFA_QUADRO_TIPO_PERMISSAO_LOOKUP,displayExpr:"descricao",valueExpr:"id"},width:200}],hoverStateEnabled:!0,paging:{enabled:!0,pageSize:10},filterRow:{visible:!0},scrolling:{mode:"infinite"},height:345,selection:{mode:"multiple"},selectedRowKeys:o,onSelectionChanged:function(o){var e=o.selectedRowKeys;a.component.option("value",e)}}),t=e.dxDataGrid("instance");return a.component.on("valueChanged",function(a){var o=a.value;t.selectRows(o,!1)}),e}}).dxDropDownBox("instance"),o.etiqueta=o.dx_dropdown_etiqueta.dxDropDownBox({value:a.arr_etiqueta,readOnly:!(App.sessao.dados.admin||o.tipo_permissao==TAREFA_QUADRO_TIPO_PERMISSAO.GERENTE||o.usuario_responsavel),valueExpr:"id",placeholder:"Select a value...",displayExpr:"nome",showClearButton:!0,dataSource:DevExpress.data.AspNet.createStore({key:"id",loadUrl:`${WS_URI}/etiqueta/listar/tarefa_quadro/${a.tarefa_quadro_id}`,onBeforeSend:function(a,o){o.xhrFields={withCredentials:XHR_WITH_CREDENTIALS},o.headers=WS.dxHeaders()}}),contentTemplate:function(a){var o=a.component.option("value"),e=$("<div>").dxDataGrid({dataSource:a.component.getDataSource(),columns:[{dataField:"nome",width:200}],hoverStateEnabled:!0,paging:{enabled:!0,pageSize:10},filterRow:{visible:!0},scrolling:{mode:"infinite"},height:345,selection:{mode:"multiple"},selectedRowKeys:o,onSelectionChanged:function(o){var e=o.selectedRowKeys;a.component.option("value",e)},onRowPrepared:function(a){"data"==a.rowType&&(a.rowElement.find("td").css("background-color",a.data.cor_fundo),a.rowElement.find("td").css("color",a.data.cor_fonte))}}),t=e.dxDataGrid("instance");return a.component.on("valueChanged",function(a){var o=a.value;t.selectRows(o,!1)}),e}}).dxDropDownBox("instance"),o.lista=o.dx_selectbox_lista.dxSelectBox({dataSource:DevExpress.data.AspNet.createStore({key:"id",loadUrl:WS_URI+"tarefa_quadro_lista/listar/",onBeforeSend:function(o,e){e.xhrFields={withCredentials:XHR_WITH_CREDENTIALS},e.headers=WS.dxHeaders(),e.data.tarefa_quadro_id=a.tarefa_quadro_id}}),searchEnabled:!0,onOpened:function(a){a.component.getDataSource().isLoaded()&&a.component.getDataSource().reload()},onValueChanged:function(a){o.ordem.option("value",null)},displayExpr:"nome",valueExpr:function(a){return a?parseInt(a.id):null},value:a.tarefa_quadro_lista_id,readOnly:!(App.sessao.dados.admin||o.tipo_permissao==TAREFA_QUADRO_TIPO_PERMISSAO.GERENTE||o.usuario_responsavel)}).dxSelectBox("instance"),o.ordem=o.dx_selectbox_ordem.dxSelectBox({dataSource:DevExpress.data.AspNet.createStore({key:"ordem",loadUrl:WS_URI+"tarefa_quadro_lista/listar_posicoes/",onBeforeSend:function(e,t){t.xhrFields={withCredentials:XHR_WITH_CREDENTIALS},t.headers=WS.dxHeaders(),t.data.tarefa_quadro_lista_id=o.lista.option("value"),t.data.tarefa_quadro_lista_id_origem=a.tarefa_quadro_lista_id}}),searchEnabled:!0,onOpened:function(a){a.component.getDataSource().isLoaded()&&a.component.getDataSource().reload()},displayExpr:"ordem",valueExpr:function(a){return a?parseInt(a.ordem):null},value:a.ordem,readOnly:!(App.sessao.dados.admin||o.tipo_permissao==TAREFA_QUADRO_TIPO_PERMISSAO.GERENTE||o.usuario_responsavel)}).dxSelectBox("instance"),o.descricao=o.dx_html_editor_descricao.dxHtmlEditor({height:550,value:a.descricao,placeholder:App.lang.generico.observacoes,onInitialized:function(a){const o=a.component,e=o.get("formats/link");o.register({"formats/link":class extends e{static create(a){const o=super.create(a);return o.setAttribute("contenteditable","false"),o}}})},readOnly:!(App.sessao.dados.admin||o.tipo_permissao==TAREFA_QUADRO_TIPO_PERMISSAO.GERENTE||o.usuario_responsavel),toolbar:{items:["undo","redo","separator",{name:"size",acceptedValues:["8pt","10pt","12pt","14pt","18pt","24pt","36pt"],options:{inputAttr:{"aria-label":"Font size"}}},{name:"font",acceptedValues:["Arial","Courier New","Georgia","Impact","Lucida Console","Tahoma","Times New Roman","Verdana"],options:{inputAttr:{"aria-label":"Font family"}}},"separator","bold","italic","strike","underline","separator","alignLeft","alignCenter","alignRight","alignJustify","separator","orderedList","bulletList","separator",{name:"header",acceptedValues:[!1,1,2,3,4,5],options:{inputAttr:{"aria-label":"Header"}}},"separator","color","background","separator","link","image","separator","clear","codeBlock","blockquote","separator","insertTable","deleteTable","insertRowAbove","insertRowBelow","deleteRow","insertColumnLeft","insertColumnRight","deleteColumn"]},mediaResizing:{enabled:!0}}).dxHtmlEditor("instance"),o.render_formulario(a.tarefa_quadro_id),o.atualizar_valores_antigos()},this.atualizar_valores_antigos=function(){o.valores_antigos.titulo_cartao=o.titulo_cartao.option("value"),o.valores_antigos.lista=o.lista.option("value"),o.valores_antigos.data_prazo=o.data_prazo.option("value"),o.valores_antigos.data_conclusao=o.data_conclusao.option("value"),o.valores_antigos.descricao=o.descricao.option("value"),o.valores_antigos.responsavel=o.responsavel.option("value"),o.valores_antigos.etiqueta=o.etiqueta.option("value"),o.valores_antigos.ordem=o.ordem.option("value"),o.valores_antigos.lista=o.lista.option("value")},this.salvar=function(a){if(o.campos_personalizados&&!o.validar_campos_obrigatorios())return!1;var e={editar_detalhes:!0,nome:o.titulo_cartao.option("value"),cartao_id:o.cartao_id,tarefa_quadro_lista_id:o.lista.option("value"),data_prazo:o.data_prazo.option("value"),data_conclusao:o.data_conclusao.option("value"),descricao:o.descricao.option("value"),arr_responsavel:JSON.stringify(o.responsavel.option("value")),arr_etiqueta:JSON.stringify(o.etiqueta.option("value")),ordem:o.ordem.option("value"),tarefa_quadro_lista_id:o.lista.option("value"),campos_personalizados:JSON.stringify(o.campos_personalizados)};o.campos_personalizados&&$(o.campos_personalizados.grupos).each(function(a,o){$(o.elementos).each(function(a,o){o.tipo==ELEMENTO_TIPO.ANEXO&&o.anexo?e[o.elem_key]=o.anexo:o.tipo==ELEMENTO_TIPO.TABELA&&o.valor&&$(o).each(function(a,o){o.valor&&$(o.valor).each(function(a,o){e[o.elem_key+"_linha_"+o.linha]=o.anexo})})})}),WS.post("tarefa_quadro_lista_cartao/salvar/",e,function(e){alert_saved(e.nome+App.lang.alert_saved.salvo),o.dados_modificados=!1,o.atualizar_valores_antigos(),"function"==typeof a&&a(e)},null,null,!0)},this.render_formulario=function(a){WS.get("formulario_tarefa_quadro_lista_cartao/get_formulario/",{tarefa_quadro_id:a,cartao_id:o.cartao_id},function(a){a?(o.campos_personalizados=a,o.aba_formulario_personalizado.removeClass("hidden"),o.aba_formulario_personalizado.html(a.nome),o.campos_personalizados.registros&&$.each(o.campos_personalizados.registros,function(a,e){"campo_anexo"==a?e&&$.each(e,function(a,e){if(e){var t=e.split(";"),i=parseInt(t[0]),r=t[1];$.each(o.campos_personalizados.grupos,function(o,e){$.each(e.elementos,function(o,e){a==e.id_elemento&&(e.valor=i,e.documento_revisao=new Object,e.documento_revisao.nome_arquivo=r,e.documento_revisao.mime_type=extensao_to_mimetype(r.substring(r.lastIndexOf(".")+1,r.length)))})})}}):"selecao_documento"==a?$.each(e,function(a,e){$.each(o.campos_personalizados.grupos,function(o,t){$.each(t.elementos,function(o,t){a==t.id_elemento&&(t.valor=e)})})}):"campo_tabela"==a&&$.each(e,function(a,e){if("string"==typeof e)try{e=JSON.parse(e.replace(/(\"{2})(\w.+?)\"{2}/gm,'"$2"').replace(/(\r\n|\n|\r)/gm," "))}catch(a){console.warn(e,e.replace(/(\"{2})(\w.+?)\"{2}/gm,'"$2"').replace(/(\r\n|\n|\r)/gm," "))}e&&$.each(o.campos_personalizados.grupos,function(o,t){$.each(t.elementos,function(o,t){a==t.id_elemento&&(t.tamanho_render=e.tamanho_render,t.valor=e.valor,void 0!==t.valor&&$.each(t.valor,function(a,o){if(null!=o.revisao){var e=o.revisao.split(";"),t=parseInt(e[0]),i=e[1];o.valor=t,o.documento_revisao=new Object,o.documento_revisao.nome_arquivo=i,o.documento_revisao.mime_type=extensao_to_mimetype(i.substring(i.lastIndexOf(".")+1,i.length))}}))})})})}),require(["./assets/view/formulario/util"],function(e){var t=new e,i=null;if(!App.sessao.dados.admin&&o.tipo_permissao!=TAREFA_QUADRO_TIPO_PERMISSAO.GERENTE&&!o.usuario_responsavel){i=[];for(var r=0;r<o.campos_personalizados.grupos.length;r++){var n=o.campos_personalizados.grupos[r];i.push({formulario_grupo_id:n.versao_formulario_grupo_id,nome:n.nome,permissao:PROCESSO_ATIVIDADE_FORMULARIO_PERMISSAO.VISUALIZAR.toString()})}}t.render_previsao(o,o.template_campo,o.template_grupo,o.campos_personalizados,i,void 0),a.registros&&$.each(a.registros,function(e,t){"campo_geral"==e?Object.keys(a.registros.campo_geral).map(function(e,t){o.conteudo_aba_formulario_personalizado.find("[id_elemento="+e+"]").val(a.registros.campo_geral[e]),o.conteudo_aba_formulario_personalizado.find("[id_elemento="+e+"]").change(),o.conteudo_aba_formulario_personalizado.find("[id_elemento="+e+"]").blur()}):"campo_decimal"==e?Object.keys(a.registros.campo_decimal).map(function(e,t){a.registros.campo_decimal[e]&&(o.conteudo_aba_formulario_personalizado.find("[id_elemento="+e+"]").val(a.registros.campo_decimal[e].replace(".",",")),o.conteudo_aba_formulario_personalizado.find("[id_elemento="+e+"]").change(),o.conteudo_aba_formulario_personalizado.find("[id_elemento="+e+"]").blur())}):"lista_opcoes"==e?Object.keys(a.registros.lista_opcoes).map(function(e,t){var i=o.conteudo_aba_formulario_personalizado.find("[id_elemento="+e+"]").find("option"),r=a.registros.lista_opcoes[e];null!=r&&(r=r.split(";"));var n=0;i&&r&&$.each(i,function(a,o){$.each(r,function(a,e){o.value==e&&(o.selected=!0,$(o).change(),$(o).blur(),n=$(o).index(),$(o).parent().parent().find("[data-original-index='"+n+"']").addClass("selected"))})})}):"radio"==e?Object.keys(a.registros.radio).map(function(e,t){var i=o.conteudo_aba_formulario_personalizado.find("[id_elemento="+e+"]");i.parent().find("input[value='"+a.registros.radio[e]+"']").prop("checked",!0),i.parent().find("input[value='"+a.registros.radio[e]+"']").change()}):"checkbox"==e?Object.keys(a.registros.checkbox).map(function(e,t){var i=a.registros.checkbox[e];null!=i&&(i=i.split(";"));var r=o.conteudo_aba_formulario_personalizado.find("[id_elemento="+e+"]");i&&$.each(i,function(a,o){r.parent().find("input[value='"+o+"']").prop("checked",!0)})}):"'caixa_verificacao'"==e?$.each(a.registros.caixa_verificacao,function(a,e){"S"==e&&o.conteudo_aba_formulario_personalizado.find("[id_elemento="+a+"]").prop("checked",!0)}):"editor_texto"==e?setTimeout(function(){Object.keys(a.registros.editor_texto).map(function(e,t){tinyMCE.get(o.conteudo_aba_formulario_personalizado.find("[id_elemento="+e+"]").attr("id")).setContent(a.registros.editor_texto[e])})},500):"campo_integracao"==e&&Object.keys(a.registros.campo_integracao).map(function(e,t){o.aba_personalizado.find("[id_elemento="+e+"]").find(".dx-dropdownbox").dxDropDownBox("instance").option("value",a.registros.campo_integracao[e])})})})):o.aba_formulario_personalizado.addClass("hidden")})},this.validar_campos_obrigatorios=function(){var a="";return o.form_editor.find("[required]").not(".selectpicker").each(function(e,t){var i=$(t);"text"==i.attr("type")&&void 0===i.attr("maskmoney")?void 0===i.attr("readonly")&&"none"!=$(t).css("display")||$(t).hasClass("input_consulta_integracao")?void 0!==i.attr("maskmoney")?""!=t.value.trim()&&0!=i.maskMoney("unmasked")[0]||(a+=$(t).attr("id_elemento")+"<br />",o.alerta_campo_obrigatorio(i)):""==t.value.trim()&&(a+=$(t).attr("id_elemento")+"<br />",o.alerta_campo_obrigatorio(i)):i.tooltip("destroy"):void 0===i.attr("disabled")&&"none"!=$(t).css("display")?void 0!==i.attr("maskmoney")?""===t.value.trim()&&(a+=$(t).attr("id_elemento")+"<br />",o.alerta_campo_obrigatorio(i)):"date"==i.attr("type")&&void 0===i.attr("disabled")&&void 0===i.attr("readonly")?""==t.value.trim()&&(a+=$(t).attr("id_elemento")+"<br />",o.alerta_campo_obrigatorio(i)):""==t.value.trim()&&"date"!=i.attr("type")&&(a+=$(t).attr("id_elemento")+"<br />",o.alerta_campo_obrigatorio(i)):i.tooltip("destroy")}),o.form_editor.find(".vld_lista_check").each(function(e,t){var i=$(t);if(!i[0].children[0].disabled&&"none"!==i[0].children[0].style.display){var r=i.find("input:checked"),n=i.parent().find(".lbl_nome");r&&0!=r.length?n.tooltip("destroy"):(a+=$(t).attr("id_elemento")+"<br />",o.alerta_campo_obrigatorio(n))}}),o.form_editor.find(".vld_lista_radio").each(function(e,t){var i=$(t);if(!i[0].children[0].disabled&&"none"!==i[0].children[0].style.display){var r=i.find("input:checked"),n=i.parent().find(".lbl_nome");r&&0!=r.length?n.tooltip("destroy"):(a+=$(t).attr("id_elemento")+"<br />",o.alerta_campo_obrigatorio(n))}}),o.form_editor.find("select.selectpicker[required]").each(function(e,t){var i=$(t);if(!i[0].disabled&&"none"!==i[0].style.display){var r=i.val(),n=i.parent().find(".lbl_nome");r&&0!=r.length?n.tooltip("destroy"):(a+=$(t).attr("id_elemento")+"<br />",o.alerta_campo_obrigatorio(n))}}),""==a||(alert_modal('<i class="fa fa-exclamation-triangle pull-left" aria-hidden="true"></i> Campos Obrigatórios !'," Por gentileza, preencha os campos abaixo: <br /><br /> "+a),!1)},this.alerta_campo_obrigatorio=function(a,o){a.tooltip({title:"Campo obrigatorio",placement:void 0!==o?o:"auto"}),a.tooltip("show")},this.btn_salvar.unbind("click").click(function(){o.salvar(function(a){o.render_formulario(a.tarefa_quadro_id)})}),this.btn_salvar_sair.unbind("click").click(function(){o.salvar(function(){o.unload()})}),this.btn_excluir.unbind("click").click(function(){DevExpress.ui.dialog.confirm("<i>"+App.lang.generico.questionar_apagar_registro+"</i>",App.lang.generico.apagar_registro).done(function(a){a&&WS.post("tarefa_quadro_lista_cartao/excluir/",{cartao_id:o.cartao_id},function(a){alert_saved(a.nome+App.lang.alert_saved.registro_excluido),o.unload()})})}),this.aba_historico.unbind("click").click(function(){!o.aba_historico.hasClass("active")&&o.flag_renderizar_historico&&(o.flag_renderizar_historico=!1,o.listagem_historico=dx_Listagem_Padrao({div_html:o.dx_listagem_historico,coluna_chave:"id",colunas:dx_Tarefa_Quadro_Lista_Cartao_Historico_Colunas(o),datasource:WS_URI+"tarefa_quadro_lista_cartao/listar_historico/",nome:this.title,nome_parametro_usuario:"listagem_tarefa_quadro_lista_cartao_historico",url_params:{cartao_id:o.cartao_id},diferenca_altura:201}))}),this.aba_referencias.unbind("click").click(function(){o.aba_referencias.parent().hasClass("active")||(ReactDOM.unmountComponentAtNode(o.div_componente_referencias[0]),ReactDOM.render(React.createElement(window.components.Referencias.default,{tabela:"tarefa_quadro_lista_cartao",id:o.cartao_id}),o.div_componente_referencias[0]))}),this.unload=function(){if(o.nao_fechar_aba)return!1;var a=function(){View.canCloseTab=!0;for(var a=0;a<o.divs_informativo_prazo.length;a++)o.divs_informativo_prazo[a].props.desativarRefreshAutomatico();o.verificar_alteracoes&&o.verificar_alteracoes(),o.onclose&&o.onclose(),View.unload(o.html_id)};o.valores_antigos&&o.titulo_cartao&&o.lista&&o.data_prazo&&o.data_conclusao&&o.descricao&&o.responsavel&&o.etiqueta&&o.ordem&&o.lista&&(o.valores_antigos.titulo_cartao!=o.titulo_cartao.option("value")||o.valores_antigos.lista!=o.lista.option("value")||o.valores_antigos.data_prazo!=o.data_prazo.option("value")||o.valores_antigos.data_conclusao!=o.data_conclusao.option("value")||o.valores_antigos.descricao!=o.descricao.option("value")||o.valores_antigos.responsavel!=o.responsavel.option("value")||o.valores_antigos.etiqueta!=o.etiqueta.option("value")||o.valores_antigos.ordem!=o.ordem.option("value")||o.valores_antigos.lista!=o.lista.option("value"))||o.dados_modificados?(o.nao_fechar_aba=!0,View.canCloseTab=!1,DevExpress.ui.dialog.confirm("<i>"+App.lang.generico.questionar_sair_sem_salvar_registro+"</i>",App.lang.generico.salvar_registro).done(function(e){e?a():o.nao_fechar_aba=!1})):a()}}});