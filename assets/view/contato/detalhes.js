var isMobile=!1;(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(isMobile=!0),define(["react","react-dom","./../componentes_react/CboClientes"],function(e,o,a){return function(t){"use strict";var i=this;this.html_id=t,this.dialog=$("#"+this.html_id),this.title="Detalhes Contato",this.onclose=null,this.onselect=null,this.onsave=null,this.btn_salvar=this.dialog.find(".btn_salvar"),this.btn_excluir=this.dialog.find(".btn_excluir"),this.btn_cancelar=this.dialog.find(".btn_cancelar"),this.edt_nome=this.dialog.find(".edt_nome"),this.edt_email=this.dialog.find(".edt_email"),this.edt_telefone1=this.dialog.find(".edt_telefone1"),this.edt_telefone2=this.dialog.find(".edt_telefone2"),this.edt_telefone3=this.dialog.find(".edt_telefone3"),this.edt_telefone4=this.dialog.find(".edt_telefone4"),this.div_pessoa=this.dialog.find(".div_pessoa"),this.cbo_area=this.dialog.find(".cbo_area"),this.cbo_funcao=this.dialog.find(".cbo_funcao"),this.edt_observacoes=this.dialog.find(".edt_observacoes"),this.aba_personalizado=this.dialog.find(".aba_personalizado"),this.menu_personalizado=this.dialog.find(".menu_personalizado"),this.lbl_nome=this.dialog.find(".lbl_nome"),this.div_component_cbo_clientes=this.dialog.find(".div_component_cbo_clientes"),this.form_editor=this.dialog.find(".form-editor"),this.form_grupos=this.dialog.find(".form-grupos"),this.campos_personalizados=null,this.tab_listagem_pessoa=this.dialog.find(".tab_listagem_pessoa"),this.cbo_pessoas=this.dialog.find(".cbo_pessoas"),this.arr_listagem_pessoas=[],this.template_campo=this.dialog.find("[template-campo]"),this.template_grupo=this.dialog.find("[template-grupo]"),this.contato_id=null,this.arr_pessoas=[],this.arr_pessoas_filtrados=[],this.total_records=0,this.cboClientes=e.createElement(a,{initial_values:{placeholder:"Digite a Entidade"}},null),this.show=function(e,o,a,t,n,s){switch(a&&(i.onselect=a),o){case FORMULARIO.NOVO:i.btn_salvar.show(),i.btn_excluir.hide(),App.titulo_aba(i.html_id,"Novo - Contato"),i.permite_alterar(!0),s&&i.sugerir_entidade(n,s);break;case FORMULARIO.EDITAR:i.btn_salvar.show(),i.btn_excluir.hide(),i.permite_alterar(!0);break;case FORMULARIO.VISUALIZAR:i.btn_salvar.hide(),i.btn_excluir.hide(),i.permite_alterar(!1);break;case FORMULARIO.EXCLUIR:i.btn_salvar.hide(),i.btn_excluir.show(),i.permite_alterar(!1);break;case FORMULARIO.CRIAR_UNIDADE:i.btn_salvar.show(),i.btn_excluir.hide(),i.permite_alterar(!0)}void 0!==e&&e?(i.contato_id=e,i.preencher()):void 0!==t&&"undefined"!=t&&null!=t&&(i.edt_nome.val(t),set_focus(i.edt_nome)),i.renderiza_componentes(),create_combobox(i.cbo_area,i.listar_area),create_combobox(i.cbo_funcao,i.listar_funcao),i.btn_nova_area(),i.btn_nova_funcao(),i.aba_personalizado.attr("id","aba_personalizado"+i.html_id),i.menu_personalizado.attr("href","#"+i.aba_personalizado.attr("id")),i.render_formulario(),set_focus(i.edt_nome)},this.close=function(){void 0!==i.onclose&&i.onclose&&i.onclose()},this.unload=function(){i.close(),View.unload(this.html_id)},this.renderiza_componentes=function(){i.renderiza_combobox_cliente(),i.cboClientes.props.setCliente(null),i.cboClientes.props.setFunctionSelect(i.evt_alterar_cliente)},this.renderiza_combobox_cliente=function(){o.render(i.cboClientes,i.div_component_cbo_clientes[0]),i.cboClientes.props.setConfiguracoes={main_externo:i,exibe_tipo_entidade:!0,WS_params:{limite:0}}},this.evt_alterar_cliente=function(){var e=i.cboClientes.props.ClienteSelecionado.id,o=i.cboClientes.props.ClienteSelecionado.tipo;i.arr_listagem_pessoas=i.cboClientes.props.ClienteSelecionado,i.relacionar_pessoa_existente(e,o)},this.permite_alterar=function(e){i.edt_nome.prop("readonly",!e),i.edt_email.prop("readonly",!e),i.edt_telefone1.prop("readonly",!e),i.edt_telefone2.prop("readonly",!e),i.edt_telefone3.prop("readonly",!e),i.edt_telefone4.prop("readonly",!e),i.edt_observacoes.prop("readonly",!e),i.cbo_funcao.prop("disabled",!e),i.cbo_area.prop("disabled",!e),i.cbo_pessoas.prop("disabled",!e),i.cboClientes.props.initial_values.disabled=!e},this.preencher=function(){WS.get("contato/objeto/",{contato_id:i.contato_id},function(e){App.titulo_aba(i.html_id,"#"+e.id+" - Contato"),i.edt_nome.val(e.nome),i.edt_email.val(e.email),i.edt_telefone1.val(e.telefone1),i.edt_telefone2.val(e.telefone2),i.edt_telefone3.val(e.telefone3),i.edt_telefone4.val(e.telefone4),i.edt_observacoes.val(e.observacoes),set_value_combobox(i.cbo_area,e.area_id,e.area_nome),set_value_combobox(i.cbo_funcao,e.funcao_id,e.funcao_descricao),i.arr_pessoas=e.arr_pessoas,i.render_pessoas()})},this.relacionar_pessoa_existente=function(e,o){var a=!1;if(null==i.cboClientes.props.ClienteSelecionado.id?a=!0:$(i.arr_pessoas).each(function(t,i){i.pessoa_id==e&&i.tipo_pessoa==o&&(a=!0)}),a)i.div_component_cbo_clientes.find(".edt_combobox").val(""),set_focus(i.div_component_cbo_clientes.find(".edt_combobox"));else{var t=new Object;t.contato_id=null,t.pessoa_id=e,t.removido=!1,t.tipo_pessoa=o,$(i.arr_listagem_pessoas).each(function(e,o){o.id==t.pessoa_id&&o.tipo==t.tipo_pessoa&&(t.email_principal=o.email_principal,t.nome_fantasia=o.nome_fantasia,t.razao_social=o.razao_social,t.telefone1=o.telefone1,t.telefone2=o.telefone2,t.telefone3=o.telefone3,t.telefone4=o.telefone4)}),i.arr_pessoas.push(t),i.render_pessoas(),setTimeout(function(){i.div_component_cbo_clientes.find(".edt_combobox").val(""),set_focus(i.div_component_cbo_clientes.find(".edt_combobox"))},100)}},this.relacionar_pessoa_nova=function(e,o){var a=i.cbo_pessoas.parent(),t=a.find(".edt_combobox");a.find(".btn_novo").addClass("hidden"),t.val(""),set_focus(t),e.tipo_pessoa=o,e.pessoa_id=e.id,i.arr_pessoas.push(e),i.render_pessoas()},this.alerta_campo_obrigatorio=function(e,o){e.tooltip({title:"Campo obrigatorio",placement:void 0!==o?o:"auto"}),e.tooltip("show")},this.listar_area=function(e){var o=i.cbo_area.parent().find(".edt_combobox");WS.get("area/listar/",{filter:JSON.stringify(["nome","contains",o.val()])},function(o){$(o.data).each(function(e,o){var a=[];a.Nome=o.nome,add_option_combobox(i.cbo_area,e,o.id,a)}),o.data.length>0?e(!0):e(!1)})},this.btn_nova_funcao=function(){var e=i.cbo_funcao.parent(),o=e.find(".edt_combobox"),a=e.find(".btn_novo");a.unbind("click"),a.click(function(){View.load("funcao/detalhes",function(e,t){t.onsave=function(e){set_value_combobox(i.cbo_funcao,e.id,e.descricao),$(a).addClass("hidden")},t.show(null,FORMULARIO.NOVO,o.val())})})},this.btn_nova_area=function(){var e=i.cbo_area.parent(),o=e.find(".edt_combobox"),a=e.find(".btn_novo");a.unbind("click"),a.click(function(){View.load("area/detalhes",function(e,t){t.onsave=function(e){set_value_combobox(i.cbo_area,e.id,e.nome),$(a).addClass("hidden")},t.show(null,FORMULARIO.NOVO,o.val())})})},this.listar_funcao=function(e){var o=i.cbo_funcao.parent().find(".edt_combobox");WS.get("funcao/listar/",{descricao:o.val()},function(o){$(o).each(function(e,o){var a=[];a["Descrição"]=o.descricao,add_option_combobox(i.cbo_funcao,e,o.funcao_id,a)}),o.length>0?e(!0):e(!1)})},this.render_select_multi_column=function(e){var o=i.cbo_pessoas.parent(),a=o.find(".edt_combobox");WS.get("agenda_contatos/listar/",{campo_pesquisa_varias_colunas:a.val(),limite:0},function(t){limpar_combobox(a),i.arr_listagem_pessoas=t,$(t).each(function(e,o){var a=[];a["Nome Fantasia"]=o.nome_fantasia,a["Razão Social"]=o.razao_social;var t=$('<span class="label lb_tipo" title="Organização" data-original-title="Organização" style="margin-right: 5px;"></span>');"C"==o.tipo?(t.addClass("label-info"),t.attr("title","Cliente")):"F"==o.tipo?(t.addClass("label-warning"),t.attr("title","Fornecedor")):"O"==o.tipo&&(t.addClass("label-primary"),t.attr("title","Organização")),t.tooltip(),t.text(o.tipo),add_option_combobox(i.cbo_pessoas,e,o.id,a,t)}),o.find(".ul_row").click(function(){var e=$(this).parent().attr("id_registro"),o=$(this).find(".detalhe_col").find(".lb_tipo").text();i.relacionar_pessoa_existente(e,o)}),t.length>0?e(!0):e(!1)})},this.render_pessoas=function(){var e=i.tab_listagem_pessoa.find("tbody"),o=e.find("tr:first");$(i.arr_pessoas).each(function(e,o){void 0===i.arr_pessoas[e].removido&&(i.arr_pessoas[e].removido=!1)}),i.arr_pessoas_filtrados=i.arr_pessoas.filter(function(e){var o=!0;return!0===e.removido&&(o=!1),o}),i.tab_listagem_pessoa.find("tr:gt(1)").remove(),$(i.arr_pessoas_filtrados).each(function(a,t){!function(a){var t=o.clone();t.removeAttr("template-row"),t.css("display","");var n=$(t.find(".lb_tipo"));"C"==a.tipo_pessoa?(n.addClass("label-info"),n.attr("title","Cliente")):"F"==a.tipo_pessoa?(n.addClass("label-warning"),n.attr("title","Fornecedor")):"O"==a.tipo_pessoa&&(n.addClass("label-primary"),n.attr("title","Organização")),n.tooltip(),n.text(a.tipo_pessoa),$(t.find("[template-field='nome_fantasia']")).text(a.nome_fantasia),$(t.find("[template-field='razao_social']")).text(a.razao_social),$(t.find("[template-field='email']")).text(null!=a.email_principal?a.email_principal:""),$(t.find("[template-field='telefone1']")).text(null!=a.telefone1?a.telefone1:""),$(t.find("[template-field='telefone2']")).text(null!=a.telefone2?a.telefone2:""),$(t.find("[template-field='telefone3']")).text(null!=a.telefone3?a.telefone3:""),$(t.find("[template-field='telefone4']")).text(null!=a.telefone4?a.telefone4:"");var s=$(t.find(".btn_deletar_pessoa"));s.unbind("click"),s.click(function(){var e="";e="C"==a.tipo_pessoa?"Cliente":"F"==a.tipo_pessoa?"Fornecedor":"Organização",alert_modal(e,"Deseja remover?","Remover",function(){$(i.arr_pessoas).each(function(e,o){o.pessoa_id==a.pessoa_id&&(i.arr_pessoas[e].removido=!0,i.render_pessoas())})},!0)}),t.appendTo(e)}(t)}),App.aplicar_mascaras(e)},this.render_formulario=function(){WS.get("formulario_contato/get_formulario/",{contato_id:i.contato_id},function(e){e&&(i.campos_personalizados=e,i.menu_personalizado.removeClass("hidden"),i.menu_personalizado.html(e.nome),i.campos_personalizados.registros&&$.each(i.campos_personalizados.registros,function(e,o){"campo_anexo"==e?o&&$.each(o,function(e,o){if(o){var a=o.split(";"),t=parseInt(a[0]),n=a[1];$.each(i.campos_personalizados.grupos,function(o,a){$.each(a.elementos,function(o,a){e==a.id_elemento&&(a.valor=t,a.documento_revisao=new Object,a.documento_revisao.nome_arquivo=n,a.documento_revisao.mime_type=extensao_to_mimetype(n.substring(n.lastIndexOf(".")+1,n.length)))})})}}):"selecao_documento"==e?$.each(o,function(e,o){$.each(i.campos_personalizados.grupos,function(a,t){$.each(t.elementos,function(a,t){e==t.id_elemento&&(t.valor=o)})})}):"campo_tabela"==e&&$.each(o,function(e,o){if("string"==typeof o)try{o=JSON.parse(o.replace(/(\"{2})(\w.+?)\"{2}/gm,'"$2"').replace(/(\r\n|\n|\r)/gm," "))}catch(e){console.warn(o,o.replace(/(\"{2})(\w.+?)\"{2}/gm,'"$2"').replace(/(\r\n|\n|\r)/gm," "))}o&&$.each(i.campos_personalizados.grupos,function(a,t){$.each(t.elementos,function(a,t){e==t.id_elemento&&(t.tamanho_render=o.tamanho_render,t.valor=o.valor,void 0!==t.valor&&$.each(t.valor,function(e,o){if(null!=o.revisao){var a=o.revisao.split(";"),t=parseInt(a[0]),i=a[1];o.valor=t,o.documento_revisao=new Object,o.documento_revisao.nome_arquivo=i,o.documento_revisao.mime_type=extensao_to_mimetype(i.substring(i.lastIndexOf(".")+1,i.length))}}))})})})}),require(["./assets/view/formulario/util"],function(o){(new o).render_previsao(i,i.template_campo,i.template_grupo,i.campos_personalizados),e.registros&&$.each(e.registros,function(o,a){"campo_geral"==o?Object.keys(e.registros.campo_geral).map(function(o,a){i.aba_personalizado.find("[id_elemento="+o+"]").val(e.registros.campo_geral[o]),i.aba_personalizado.find("[id_elemento="+o+"]").change(),i.aba_personalizado.find("[id_elemento="+o+"]").blur()}):"campo_decimal"==o?Object.keys(e.registros.campo_decimal).map(function(o,a){e.registros.campo_decimal[o]&&(i.aba_personalizado.find("[id_elemento="+o+"]").val(e.registros.campo_decimal[o].replace(".",",")),i.aba_personalizado.find("[id_elemento="+o+"]").change(),i.aba_personalizado.find("[id_elemento="+o+"]").blur())}):"lista_opcoes"==o?Object.keys(e.registros.lista_opcoes).map(function(o,a){var t=i.aba_personalizado.find("[id_elemento="+o+"]").find("option"),n=e.registros.lista_opcoes[o];null!=n&&(n=n.split(";"));var s=0;t&&n&&$.each(t,function(e,o){$.each(n,function(e,a){o.value==a&&(o.selected=!0,$(o).change(),$(o).blur(),s=$(o).index(),$(o).parent().parent().find("[data-original-index='"+s+"']").addClass("selected"))})})}):"radio"==o?Object.keys(e.registros.radio).map(function(o,a){var t=i.aba_personalizado.find("[id_elemento="+o+"]");t.parent().find("input[value='"+e.registros.radio[o]+"']").prop("checked",!0),t.parent().find("input[value='"+e.registros.radio[o]+"']").change()}):"checkbox"==o?Object.keys(e.registros.checkbox).map(function(o,a){var t=e.registros.checkbox[o];null!=t&&(t=t.split(";"));var n=i.aba_personalizado.find("[id_elemento="+o+"]");t&&$.each(t,function(e,o){n.parent().find("input[value='"+o+"']").prop("checked",!0)})}):"'caixa_verificacao'"==o?$.each(e.registros.caixa_verificacao,function(e,o){"S"==o&&i.aba_personalizado.find("[id_elemento="+e+"]").prop("checked",!0)}):"editor_texto"==o?setTimeout(function(){Object.keys(e.registros.editor_texto).map(function(o,a){tinyMCE.get(i.aba_personalizado.find("[id_elemento="+o+"]").attr("id")).setContent(e.registros.editor_texto[o])})},500):"campo_integracao"==o&&Object.keys(e.registros.campo_integracao).map(function(o,a){i.aba_personalizado.find("[id_elemento="+o+"]").find(".dx-dropdownbox").dxDropDownBox("instance").option("value",e.registros.campo_integracao[o])})})}))})},this.sugerir_entidade=function(e,o){"C"==e&&WS.get("cliente/objeto/",{cliente_id:o},function(a){a.tipo_pessoa=e,a.pessoa_id=o,i.arr_pessoas.push(a),i.render_pessoas()}),"O"==e&&WS.get("prospect/objeto/",{prospect_id:o},function(a){a.tipo_pessoa=e,a.pessoa_id=o,i.arr_pessoas.push(a),i.render_pessoas()}),"F"==e&&WS.get("fornecedor/objeto/",{fornecedor_id:o},function(a){a.tipo_pessoa=e,a.pessoa_id=o,i.arr_pessoas.push(a),i.render_pessoas()})},this.btn_salvar.unbind("click"),this.btn_salvar.click(function(){if(i.campos_personalizados&&(!i.validar_campos_obrigatorios()||!i.validar_data_form()))return!1;var e={contato_id:i.contato_id,nome:i.edt_nome.val(),email:i.edt_email.val(),telefone1:i.edt_telefone1.val(),telefone2:i.edt_telefone2.val(),telefone3:i.edt_telefone3.val(),telefone4:i.edt_telefone4.val(),arr_pessoas:JSON.stringify(i.arr_pessoas_filtrados),area_id:get_value_combobox(i.cbo_area),funcao_id:get_value_combobox(i.cbo_funcao),observacoes:i.edt_observacoes.val(),campos_personalizados:JSON.stringify(i.campos_personalizados)};i.campos_personalizados&&$(i.campos_personalizados.grupos).each(function(o,a){$(a.elementos).each(function(o,a){a.tipo==ELEMENTO_TIPO.ANEXO&&a.anexo?e[a.elem_key]=a.anexo:a.tipo==ELEMENTO_TIPO.TABELA&&a.valor&&$(a).each(function(o,a){a.valor&&$(a.valor).each(function(o,a){e[a.elem_key+"_linha_"+a.linha]=a.anexo})})})}),WS.post("contato/salvar",e,function(o){null!=i.onselect&&i.onselect(e),i.contato_id=o.id,alert_saved("Contato salvo com sucesso"),void 0!==i.onsave&&i.onsave&&i.onsave(o),i.unload()},[i.btn_salvar,i.btn_cancelar],null,!0)}),this.btn_cancelar.unbind("click"),this.btn_cancelar.click(function(){i.unload()}),this.btn_excluir.unbind("click"),this.btn_excluir.click(function(){WS.post("contato/excluir",{contato_id:i.contato_id},function(e){alert_saved("Contato excluido com sucesso"),i.unload()},[i.btn_excluir])}),this.validar_campos_obrigatorios=function(){var e="";return i.form_editor.find("[required]").not(".selectpicker").each(function(o,a){var t=$(a);"text"==t.attr("type")&&void 0===t.attr("maskmoney")?void 0===t.attr("readonly")&&"none"!=$(a).css("display")||$(a).hasClass("input_consulta_integracao")?void 0!==t.attr("maskmoney")?""!=a.value.trim()&&0!=t.maskMoney("unmasked")[0]||(e+=$(a).attr("id_elemento")+"<br />",i.alerta_campo_obrigatorio(t)):""==a.value.trim()&&(e+=$(a).attr("id_elemento")+"<br />",i.alerta_campo_obrigatorio(t)):t.tooltip("destroy"):void 0===t.attr("disabled")&&"none"!=$(a).css("display")?void 0!==t.attr("maskmoney")?""===a.value.trim()&&(e+=$(a).attr("id_elemento")+"<br />",i.alerta_campo_obrigatorio(t)):"date"==t.attr("type")&&void 0===t.attr("disabled")&&void 0===t.attr("readonly")?""==a.value.trim()&&(e+=$(a).attr("id_elemento")+"<br />",i.alerta_campo_obrigatorio(t)):""==a.value.trim()&&"date"!=t.attr("type")&&(e+=$(a).attr("id_elemento")+"<br />",i.alerta_campo_obrigatorio(t)):t.tooltip("destroy")}),i.form_editor.find(".vld_lista_check").each(function(o,a){var t=$(a);if(!t[0].children[0].disabled&&"none"!==t[0].children[0].style.display){var n=t.find("input:checked"),s=t.parent().find(".lbl_nome");n&&0!=n.length?s.tooltip("destroy"):(e+=$(a).attr("id_elemento")+"<br />",i.alerta_campo_obrigatorio(s))}}),i.form_editor.find(".vld_lista_radio").each(function(o,a){var t=$(a);if(!t[0].children[0].disabled&&"none"!==t[0].children[0].style.display){var n=t.find("input:checked"),s=t.parent().find(".lbl_nome");n&&0!=n.length?s.tooltip("destroy"):(e+=$(a).attr("id_elemento")+"<br />",i.alerta_campo_obrigatorio(s))}}),i.form_editor.find("select.selectpicker[required]").each(function(o,a){var t=$(a);if(!t[0].disabled&&"none"!==t[0].style.display){var n=t.val(),s=t.parent().find(".lbl_nome");n&&0!=n.length?s.tooltip("destroy"):(e+=$(a).attr("id_elemento")+"<br />",i.alerta_campo_obrigatorio(s))}}),""==e||(alert_modal('<i class="fa fa-exclamation-triangle pull-left" aria-hidden="true"></i> Campos Obrigatórios !'," Por gentileza, preencha os campos abaixo: <br /><br /> "+e),!1)},this.validar_data_form=function(){var e=new Date,o=("0"+e.getDate()).slice(-2),a=("0"+(e.getMonth()+1)).slice(-2),t=e.getFullYear()+"-"+a+"-"+o,n="";return i.form_editor.find('[type="date"]').each(function(e,o){var a=$(o);void 0===(a.attr("disabled")||a.attr("readonly"))&&"none"!=$(o).css("display")&&""!=o.value&&null!=o.value&&("S"==a.attr("data_retroativa")&&(get_datepicker(a)<t?(a.tooltip({title:"Data Inválida",placement:"auto"}),a.tooltip("show"),n+=$(o).attr("id_elemento")+"<br />"):a.tooltip("destroy")),"S"==a.attr("data_retroativa_igual")&&(get_datepicker(a)<=t?(a.tooltip({title:"Data Inválida",placement:"auto"}),a.tooltip("show"),n+=$(o).attr("id_elemento")+"<br />"):a.tooltip("destroy")))}),""==n||(alert_modal('<i class="fa fa-exclamation-triangle pull-left" aria-hidden="true"></i> Data Inválida !'," Data informada fora do período válido, informe corretamente para os campos abaixo: <br /><br /> "+n),!1)}}});