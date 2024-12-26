define([],function(){return function(a){"use strict";var i=this;this.html_id=a,this.dialog=$("#"+this.html_id),this.title="Nova Mensagem do Mural",this.tipo=null,this.onclose=null,this.onsave=null,this.edt_mensagem=this.dialog.find(".edt_mensagem"),this.edt_usuario=this.dialog.find(".edt_usuario"),this.div_toolbar=this.dialog.find(".div_toolbar"),this.div_usuario=this.dialog.find(".div_usuario"),this.cbo_tipo=this.dialog.find(".cbo_tipo"),this.btn_anexo=this.dialog.find(".btn_anexo"),this.div_anexos=this.dialog.find(".div_anexos"),this.div_anexos_row=this.dialog.find(".div_anexos_row"),this.panel_anexos=this.dialog.find(".panel_anexos"),this.div_tipo=this.dialog.find(".div_tipo"),this.titulo=this.dialog.find(".titulo"),this.div_mensagem_publica=this.dialog.find(".div_mensagem_publica"),this.chk_mensagem_publica=this.dialog.find(".chk_mensagem_publica"),this.chk_permite_comentario=this.dialog.find(".chk_permite_comentario"),this.chk_votacao=this.dialog.find(".chk_votacao"),this.dx_data_publicacao=this.dialog.find(".dx_data_publicacao"),this.div_votacao=this.dialog.find(".div_votacao"),this.react_component_votacao=null,this.mensagem_id=null,this.numero_anexo=null,this.anexo_array=[],this.administrativo=null,this.data_publicacao=null,this.nova_votacao=null,this.votacao_id=null,this.votacao_pergunta=null,this.votacao_expiracao=null,this.votacao_voto_secreto=null,this.post_params_adicionais={},this.anexo_fotos=[],this.anexo=[],this.grupo_id=null,this.grupo_privacidade="N",this.show=function(a,e,o,t,n){switch(i.edt_mensagem.attr("id","edt_mensagem"+i.html_id),void 0!==t&&null!=t?i.grupo_id=t:t=null,void 0!==n&&null!=n&&(i.grupo_privacidade=n),i.tipo=e,i.render_toolbar(),!0!==App.sessao.dados.admin&&(App.verifica_permissao(App.temp.empresa,"mural_mensagem_clientes")||i.cbo_tipo.find('[value="1"]').remove(),App.verifica_permissao(App.temp.empresa,"mural_mensagem_fornecedores")||i.cbo_tipo.find('[value="4"]').remove()),i.tipo){case FORMULARIO.NOVO:i.div_usuario.addClass("hidden"),i.permite_alterar(!0);break;case FORMULARIO.EDITAR:i.edt_usuario.prop("readonly",!0),i.div_usuario.removeClass("hidden");break;case FORMULARIO.VISUALIZAR:case FORMULARIO.EXCLUIR:i.div_usuario.removeClass("hidden"),i.permite_alterar(!1)}if(i.exibir_div_mensagem_publica(),i.chk_mensagem_publica.dxSwitch({value:!1,css:""}),i.chk_permite_comentario.dxSwitch({value:!0}),i.chk_votacao.dxSwitch({value:!1,onValueChanged(a){i.exibir_div_votacao(a.value)}}),0==o?(i.div_tipo.addClass("hidden"),i.titulo.text("Publicações"),i.administrativo="N"):(i.titulo.text("Mensagem do Mural"),i.administrativo="S"),void 0!==a&&a?(i.mensagem_id=a,i.preencher()):(set_tinymce(i.edt_mensagem,"",!1,null,null,null,"100%"),i.renderDataPublicacao()),set_focus(i.edt_mensagem),App.PE.Mural_Mensagem_Detalhes_Ao_Abrir)try{App.PE.Mural_Mensagem_Detalhes_Ao_Abrir(i)}catch(a){console.log(a)}},this.exibir_div_votacao=function(a){a?i.votacao_id>0?(i.react_component_votacao=React.createElement(window.components.Votacao.default,{votacao_id:i.votacao_id,pergunta:i.votacao_pergunta,expiracao:i.votacao_expiracao,voto_secreto:i.votacao_voto_secreto}),ReactDOM.render(i.react_component_votacao,i.div_votacao[0])):(i.react_component_votacao=React.createElement(window.components.NovaVotacao.default,{aoAlterar:a=>{i.nova_votacao=a}}),ReactDOM.render(i.react_component_votacao,i.div_votacao[0])):(ReactDOM.unmountComponentAtNode(i.div_votacao[0]),i.nova_votacao=null)},this.exibir_div_mensagem_publica=function(){i.grupo_id>0&&"P"===i.grupo_privacidade?i.div_mensagem_publica.show():i.div_mensagem_publica.hide()},this.close=function(){void 0!==i.onclose&&i.onclose&&i.onclose()},this.unload=function(){i.close(),View.unload(this.html_id)},this.render_toolbar=function(){i.div_toolbar.dxToolbar({items:[{locateInMenu:"auto",location:"before",widget:"dxButton",showText:"inMenu",options:{text:"Adicionar Anexo",icon:"fas fa-paperclip",onClick:i.btn_anexo_click}},{locateInMenu:"always",location:"before",widget:"dxButton",options:{text:"Cancelar",onClick:i.cancelar_click}},{locateInMenu:"auto",location:"after",widget:"dxButton",visible:i.tipo==FORMULARIO.EXCLUIR,options:{text:"Excluir",type:"danger",icon:"fa fa-trash",onClick:i.excluir_click}},{locateInMenu:"auto",location:"after",widget:"dxButton",visible:i.tipo==FORMULARIO.NOVO||i.tipo==FORMULARIO.EDITAR,options:{text:"Publicar",type:"default",icon:"far fa-save",stylingMode:"contained",onClick:i.salvar_click}}]})},this.permite_alterar=function(a){i.edt_mensagem.prop("readonly",!a),i.edt_usuario.prop("readonly",!a),i.cbo_tipo.prop("disabled",!a),setTimeout(function(){tinyMCE.get(i.edt_mensagem.attr("id")).getBody().setAttribute("contenteditable",a)},300)},this.preencher=function(){WS.get("mural_mensagem/objeto/",{mural_mensagem_id:i.mensagem_id,administrativo:i.administrativo},function(a){i.mensagem_id=a.id,set_tinymce(i.edt_mensagem,a.mensagem,!1,null,null,null,"100vh"),i.edt_usuario.val(a.autor_nome),i.cbo_tipo.val(a.tipo).trigger("change"),i.chk_mensagem_publica.dxSwitch("instance").option("value","S"===a.publica),i.chk_permite_comentario.dxSwitch("instance").option("value","S"===a.permite_comentario),i.votacao_id=a.votacao_id,i.votacao_pergunta=a.votacao_pergunta,i.votacao_expiracao=a.votacao_expiracao,i.votacao_voto_secreto="S"===a.votacao_voto_secreto,i.chk_votacao.dxSwitch("instance").option("readOnly",!0),i.chk_votacao.dxSwitch("instance").option("value",i.votacao_id>0),!isNaN(i.votacao_id)&&i.votacao_id||i.chk_votacao.parent().hide(),i.exibir_div_votacao(i.votacao_id>0),i.cbo_tipo.selectpicker("refresh"),i.renderDataPublicacao(a.data_publicacao),i.grupo_id=a.grupo_id,i.grupo_privacidade=a.grupo_privacidade,i.exibir_div_mensagem_publica(),i.consultar_anexos()})},this.consultar_anexos=function(){var a=$(".div_anexos_carregados");a.removeClass("hidden");var e=a.find(".anexos");e.find(".line_anexos").remove();var o=$('<div class="form-inline">');WS.get("documento/listar_documentos_mural_mensagem/",{mural_mensagem_id:i.mensagem_id},function(a){$(a).each(function(a,t){!function(a){var t=$('<div class="input-group btn-group" style="margin-top: 0px; margin-right: 0px; width: 100%;">'),n=a.documento_revisao_id,s=a.documento_id;if("application/pdf"==a.mime_type){var c=$("<button>");c.addClass("btn btn-link btn-sm"),c.text(a.revisao_nome),c.unbind("click"),c.click(function(){View.load("central_documentos/visualizar_pdf",function(a,i){i.show(n)})}),(l=$('<a class="anexo_base_input_text" style="padding: 0px; margin-left: 0px; margin-top: 0px;">')).css("padding-left","0px"),l.attr("title",a.revisao_nome),l.attr("value",a.documento_id);var d=$("<span>");d.addClass("glyphicon glyphicon-download-alt"),l.append(d),(_=$("<a>")).attr("value",a.documento_id),(r=$("<span>")).addClass("fas fa-times"),_.append(r),(u=$('<div class="pull-right">')).append(_),t.append(u),t.append(c),t.append(l)}else{var l,_,r,u;(l=$('<a class="anexo_base_input_text" style="padding: 0px; margin-left: 0px; margin-top: 0px;">')).css("padding-left","0px"),l.attr("title",a.revisao_nome),l.text(a.revisao_nome),l.attr("value",a.documento_id),(_=$("<a>")).attr("value",a.documento_id),(r=$("<span>")).addClass("fas fa-times"),_.append(r),(u=$('<div class="pull-right">')).append(_),t.append(u),t.append(l)}l.click(function(){App.obter_token_publico(function(a){App.download(WS_URI+"documento/download/?documento_revisao_id="+n+"&token_publico="+a)})}),_.unbind("click"),_.click(function(){WS.post("mural_mensagem/excluir_anexo_mensagem/",{mural_mensagem_id:i.mensagem_id,documento_id:s},function(a){a&&t.find('[value="'+s+'"]').remove()})}),o.append(t),e.append(o)}(t)})})},this.renderDataPublicacao=function(a){a||(a=agora(!0,!0)),a=a.replace(" ","T"),i.data_publicacao=i.dx_data_publicacao.dxDateBox({type:"datetime",dateSerializationFormat:"yyyy-MM-ddTHH:mm:ss",showClearButton:!0,value:a,readOnly:i.cbo_tipo.prop("disabled")}).dxDateBox("instance")},this.cancelar_click=function(){i.unload()},this.salvar_click=function(){if(!i.data_publicacao.option("value"))return void alertaPopUp("Validação","A data de publicação não pode ser vazia","Ok",()=>{});var a=i.div_anexos.find('input[type="file"]');$.each(a,function(a,e){e.files[0]&&(i.anexo_array[a]=e.files[0])});const e={mural_mensagem_id:i.mensagem_id,mensagem:get_tinymce(i.edt_mensagem),tipo:i.cbo_tipo.val(),documentos:i.anexo_array,mobile:App.is_nativo()?"sim":"nao",administrativo:i.administrativo,grupo_id:i.grupo_id,publica:"P"==i.grupo_privacidade?i.chk_mensagem_publica.dxSwitch("instance").option("value"):null,permite_comentario:i.chk_permite_comentario.dxSwitch("instance").option("value"),data_publicacao:i.data_publicacao.option("value"),votacao:CircularJSON.stringify(i.nova_votacao),...i.post_params_adicionais};WS.post("mural_mensagem/salvar",e,function(a){alert_saved("Mensagem publicada com sucesso"),void 0!==i.onsave&&i.onsave&&i.onsave(a),i.unload()},[],null,!0)},this.excluir_click=function(){WS.post("mural_mensagem/excluir",{mural_mensagem_id:i.mensagem_id,administrativo:i.administrativo,grupo_id:i.grupo_id},function(a){alert_saved("Mensagem excluida com sucesso"),void 0!==i.onsave&&i.onsave&&i.onsave(a),i.unload()})},this.btn_anexo_click=function(){var a=i.div_anexos_row.clone();i.numero_anexo=1+i.numero_anexo;var e=a.find(".anexo_base_input");a.removeClass("hidden"),e.change(function(){if(0===$(this).get(0).files.length)a.remove();else{var e=a.find(".anexo_base_input_text");e.text($(this).get(0).files[0].name),e.attr("title",$(this).get(0).files[0].name),a.find(".btn_remover_anexo").on("click",i.remover_anexo_click),a.appendTo(i.div_anexos)}}),a.find('input[type="file"]').trigger("click")},this.remover_anexo_click=function(){$(this).closest(".div_anexos_row").remove()}}});