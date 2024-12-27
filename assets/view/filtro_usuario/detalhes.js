define([],function(){return function(o){"use strict";var a=this;this.html_id=o,this.dialog=$("#"+this.html_id),this.modal=this.dialog.find(".modal"),this.modal.attr("id",this.html_id+"_modal"),this.title=this.modal.find(".modal-title"),this.tipo=null,this.onclose=null,this.onsave=null,this.edt_descricao=this.dialog.find(".edt_descricao"),this.cbo_campos=this.dialog.find(".cbo_campos"),this.cbo_operador=this.dialog.find(".cbo_operador"),this.btn_e=this.dialog.find(".btn_e"),this.btn_ou=this.dialog.find(".btn_ou"),this.btn_prtE=this.dialog.find(".btn_prtE"),this.btn_prtD=this.dialog.find(".btn_prtD"),this.btn_add_condicao=this.dialog.find(".btn_add_condicao"),this.edt_condicao=this.dialog.find(".edt_condicao"),this.chk_campo=this.dialog.find(".chk_campo"),this.chk_parametros=this.dialog.find(".chk_parametros"),this.chk_valor=this.dialog.find(".chk_valor"),this.chk_modo_especialista=this.dialog.find(".chk_modo_especialista"),this.chk_executar_filtro=this.dialog.find(".chk_executar_filtro"),this.edt_valor=this.dialog.find(".edt_valor"),this.cbo_valor=this.dialog.find(".cbo_valor"),this.cbo_campos_escolha=this.dialog.find(".cbo_campos_escolha"),this.cbo_campos_valor=this.dialog.find(".cbo_campos_valor"),this.chk_opcoes=this.dialog.find(".chk_opcoes"),this.edt_parametro=this.dialog.find(".edt_parametro"),this.div_esconder=this.dialog.find(".div_esconder"),this.btn_cancelar=this.dialog.find(".btn_cancelar"),this.btn_salvar=this.dialog.find(".btn_salvar"),this.btn_excluir=this.dialog.find(".btn_excluir"),this.btn_limpa_condicao=this.dialog.find(".btn_limpa_condicao"),this.grupo_sugestao=this.dialog.find("[sugestoes-grupo]"),this.edt_cbo_valor=null,this.filtro_usuario_id=null,this.codigo_tela=null,this.arr_campos=[],this.tabela_utilizada=null,this.campo_utilizado=null,this.grupo_campos=[],this.buscador=[],this.campos_publicos=[],this.buscador_ativo=!1,this.sugestao_ativo=!1,this.input_temp="",this.formulario_personalizado_id=null,this.show=function(o,e,t,i){switch($(a.cbo_valor).SelectMultiColumn({route:"status_oportunidade/listar/",params:null,arr_cols:["STATUS"],arr_campos:["nome"],campo_value:"nome",OnHide:function(){},OnShow:function(){}}),$(a.cbo_valor).SelectMultiColumn("hide"),a.func_validacao(),a.codigo_tela=t,a.formulario_personalizado_id=i,a.edt_parametro.val("[[parametro]]"),a.edt_parametro.prop("readonly",!0),a.chk_valor.prop("checked",!0).trigger("click"),a.chk_modo_especialista.bootstrapSwitch("state",!1),a.chk_modo_especialista.trigger("switchChange.bootstrapSwitch"),a.codigo_tela==TELAS.LISTAGEM_SOLICITACAO.codigo?a.div_esconder.addClass("hidden"):a.div_esconder.removeClass("hidden"),e){case FORMULARIO.NOVO:a.listar_campos(),a.btn_salvar.show(),a.btn_excluir.hide(),a.permite_alterar(!0);break;case FORMULARIO.EDITAR:a.btn_salvar.show(),a.btn_excluir.hide(),a.permite_alterar(!0);break;case FORMULARIO.VISUALIZAR:a.btn_salvar.hide(),a.btn_excluir.hide(),a.permite_alterar(!1);break;case FORMULARIO.EXCLUIR:a.btn_salvar.hide(),a.btn_excluir.show(),a.permite_alterar(!1)}a.tipo=e,void 0!==o&&o&&(a.filtro_usuario_id=o,a.preencher()),show_modal(a.modal.attr("id")),set_focus(a.edt_nome)},this.listar_campos=function(o){a.cbo_campos.find("option").remove(),a.cbo_campos.find("optgroup").remove(),add_option(a.cbo_campos,"","Nenhum"),a.cbo_campos.find('option:contains("Nenhum")').attr("data-icon","fa fa-database"),a.codigo_tela!=TELAS.LISTAGEM_SOLICITACAO.codigo&&a.codigo_tela!=TELAS.LISTAGEM_OPORTUNIDADE.codigo||WS.get("formulario/listar_campos_filtros/",{formulario_id:a.codigo_tela==TELAS.LISTAGEM_OPORTUNIDADE.codigo?a.formulario_personalizado_id:null},function(e){a.arr_campos=e;for(var t=e.map(function(o){return{formulario_grupo_id:o.formulario_grupo_id,formulario_grupo_nome:o.formulario_grupo_nome,formulario_nome:o.formulario_nome}}),i=e.map(function(o){return{formulario_grupo_id:o.formulario_grupo_id,campo_id:o.campo_id,campo_nome:void 0!==o.nome&&o.nome.length>0?o.nome:o.campo_id,campo_tipo:o.campo_tipo}}),c=null,s=null,d=null,l=0;l<t.length;l++)if(!(a.cbo_campos.find("optgroup.grupo_id_"+t[l].formulario_grupo_id).length>0)){s=t[l].formulario_nome.replace(/"/g,"'"),d=t[l].formulario_grupo_nome.replace(/"/g,"'"),a.cbo_campos.add_group_opt("grupo_id_"+t[l].formulario_grupo_id,"[F] "+s+" / [G] "+d);for(var r=0;r<i.length;r++)i[r].formulario_grupo_id===t[l].formulario_grupo_id&&(c=void 0!==i[r].nome&&i[r].nome.length>0?i[r].nome:i[r].campo_id,a.cbo_campos.add_opt_to_group("grupo_id_"+t[l].formulario_grupo_id,i[r].campo_id,c),a.cbo_campos.find('[value="'+i[r].campo_id+'"]').attr("formulario_oportunidade",!0).attr("nome","{filtro_formulario_oportunidade."+c+"}").attr("campo_type",i[r].campo_tipo))}a.cbo_campos.selectpicker("refresh"),o&&a.cbo_campos_escolha.val(o).selectpicker("refresh")}),a.codigo_tela!==TELAS.LISTAGEM_SOLICITACAO.codigo&&WS.get("filtro_usuario/get_campos_table/",{tabela:a.codigo_tela},function(e){a.arr_campos=e;var t=[],i="",c=[];for(var s in $(e).each(function(o,e){var i="";a.campos_publicos.push(e.nome),0!==e.alias.toString().length?e.alias.toString().indexOf("-")>-1?(i=e.alias.toString().split("-")[0],c[i.trim()]+='<option title="'+i.trim().substr(0,15)+(i.trim().length>15?"... ":" ")+"("+(0==e.alias.toString().length?e.nome:e.alias.toString().split("-")[1])+')" value="'+e.nome+'" nome="{'+e.nome+'}" campo_type="'+e.tipo+'">'+(0==e.alias.toString().length?e.nome:e.alias.toString().split("-")[1])+"</option>",t[i.trim()]+='<option value="'+e.nome+'" nome="{'+e.nome+'}" campo_type="'+e.tipo+'">'+(0==e.alias.toString().length?e.nome:e.alias.toString().split("-")[1])+"</option>"):(c.solo='<option value="'+e.nome+'" nome="{'+e.nome+'}" campo_type="'+e.tipo+'">'+(0==e.alias.toString().length?e.nome:-1===e.alias.toString().indexOf("-")?e.alias.toString():e.alias.toString().split("-")[1])+"</option>",t.solo='<option value="'+e.nome+'" nome="{'+e.nome+'}" campo_type="'+e.tipo+'">'+(0==e.alias.toString().length?e.nome:-1===e.alias.toString().indexOf("-")?e.alias.toString():e.alias.toString().split("-")[1])+"</option>"):(c.solo='<option value="'+e.nome+'" nome="{'+e.nome+'}" campo_type="'+e.tipo+'">'+(0==e.alias.toString().length?e.nome:e.alias.toString().split("-")[1])+"</option>",t.solo='<option value="'+e.nome+'" nome="{'+e.nome+'}" campo_type="'+e.tipo+'">'+(0==e.alias.toString().length?e.nome:e.alias.toString().split("-")[1])+"</option>")}),t)"solo"!=s&&(i+='<optgroup label="'+s+'">',i+=c[s],i+="</optgroup>");void 0!==c.solo&&c.solo.length>0&&a.cbo_campos.append(c.solo),a.cbo_campos.append(i),a.cbo_campos.selectpicker("refresh"),o&&a.cbo_campos_escolha.val(o).selectpicker("refresh")})},this.definir_tipo_valor=function(){!0===a.chk_valor.prop("checked")?(a.edt_valor.show(),a.cbo_campos_valor.addClass("hidden"),$(".cbo_campos_valor").addClass("hidden"),a.func_validacao(),a.edt_parametro.hide()):!0===a.chk_campo.prop("checked")&&a.codigo_tela!==TELAS.LISTAGEM_SOLICITACAO.codigo?(a.edt_valor.hide(),a.cbo_campos_valor.removeClass("hidden"),$(".cbo_campos_valor").removeClass("hidden"),a.edt_parametro.hide(),a.func_validacao()):!0===a.chk_parametros.prop("checked")&&(a.edt_valor.hide(),a.cbo_campos_valor.addClass("hidden"),$(".cbo_campos_valor").addClass("hidden"),a.edt_parametro.show(),a.func_validacao())},this.add_opcoes=function(){var o=a.edt_condicao.val().trim(),e=o.toUpperCase().lastIndexOf("AND"),t=o.toUpperCase().lastIndexOf("OR"),i=get_cod_by_operador(a.cbo_operador.val()),c=a.cbo_campos.val(),s=a.cbo_campos.find('[value="'+c+'"]').attr("nome"),d="";if(null==a.cbo_operador.val()||""==a.cbo_operador.val())return(r=new Validation).add(new ValidationMessage(Validation.CODES.ERR_FIELD,"É Necessário informar um operador!")),alert_modal("Validação",r),!1;if(!0===a.chk_valor.prop("checked"))if("status_oportunidade.nome"==a.cbo_campos_escolha.val())d+="'"+a.cbo_valor.val()+"'";else if("oportunidade.data_fechamento"==a.cbo_campos_escolha.val()||"oportunidade.integracao_nextone"==a.cbo_campos_escolha.val())d+="'"+get_datepicker($(a.input_temp))+"'";else if("estagnado.dias"==a.cbo_campos_escolha.val())d="fn_situacao_oportunidade(oportunidade.id, "+a.edt_valor.val()+", null, null) = 'E'";else{var l=parseInt(a.cbo_campos_escolha.find('[value="'+a.cbo_campos_escolha.val()+'"]').attr("campo_type"),10);switch(a.edt_valor.attr("type","text"),l){case ELEMENTO_TIPO.TEXTO:d+="'"+a.edt_valor.val()+"'";break;case ELEMENTO_TIPO.INTEIRO:case ELEMENTO_TIPO.DECIMAL:d=a.edt_valor.maskMoney("unmasked")[0];break;case ELEMENTO_TIPO.DATA:d="'"+get_datepicker(a.edt_valor)+"'";break;default:d+="'"+a.edt_valor.val()+"'"}}else!0===a.chk_campo.prop("checked")&&a.codigo_tela!==TELAS.LISTAGEM_SOLICITACAO.codigo?d=(d=(d=""!=a.cbo_campos_valor.val()?a.cbo_campos_valor.find('[value="'+a.cbo_campos_valor.val()+'"]').attr("nome"):"").replace("{","[")).replace("}","]"):!0===a.chk_parametros.prop("checked")&&(d="estagnado.dias"==a.cbo_campos_escolha.val()?"fn_situacao_oportunidade(oportunidade.id, "+a.edt_parametro.val()+", null, null) = 'E'":a.edt_parametro.val());if(null!=c&&""!=c)if("{estagnado.dias}"!=s.trim())if(o.length>0)if(e>0&&3==parseInt(o.length-e,10))a.edt_condicao.val(a.edt_condicao.val()+" "+s+" "+i+" "+d);else if(t>0&&2==parseInt(o.length-t,10))a.edt_condicao.val(a.edt_condicao.val()+" "+s+" "+i+" "+d);else{var r;(r=new Validation).add(new ValidationMessage(Validation.CODES.ERR_FIELD,"Para unir duas condições é necessário escolher um conector.")),alert_modal("Validação",r)}else a.edt_condicao.val(a.edt_condicao.val()+" "+s+" "+i+" "+d);else a.edt_condicao.val(a.edt_condicao.val()+" "+d)},this.close=function(){close_modal(a.modal.attr("id")),void 0!==a.onclose&&a.onclose&&a.onclose()},this.unload=function(){a.close(),View.unload(this.html_id)},this.permite_alterar=function(o){a.edt_descricao.prop("readonly",!o),a.edt_condicao.prop("readonly",!o),a.btn_e.prop("disabled",!o),a.btn_ou.prop("disabled",!o),a.btn_prtE.prop("disabled",!o),a.btn_prtD.prop("disabled",!o),a.btn_add_condicao.prop("disabled",!o),a.btn_limpa_condicao.prop("disabled",!o),a.edt_valor.prop("readonly",!o),a.cbo_campos.prop("disabled",!o),a.cbo_operador.prop("disabled",!o),a.cbo_campos_escolha.prop("disabled",!o),a.chk_opcoes.prop("disabled",!o)},this.preencher=function(){WS.get({route:"filtro_usuario/objeto/",data:{filtro_usuario_id:a.filtro_usuario_id},func_response:function(o){a.listar_campos(o.campo_id),a.edt_descricao.val(o.descricao),a.chk_executar_filtro.bootstrapSwitch("state","S"==o.ativo_permanentemente),a.codigo_tela=o.codigo_tela;var e=o.condicao_consulta;if($(a.arr_campos).each(function(o,a){e.indexOf(a.campo_id)>-1&&(e=e.split("{"+a.campo_id+"}").join("{"+a.nome+"}")),e.indexOf(a.campo_id)>-1&&(e=e.split("["+a.campo_id+"]").join("["+a.nome+"]"))}),a.cbo_operador.val(get_cod_by_operador(null,o.operador)),$('.chk_opcoes[value="'+o.tipo_valor+'"]').prop("checked",!0).trigger("click"),parseInt(o.tipo_valor,10)==TIPO_FILTRO.CAMPO)a.cbo_campos_valor.val(o.valor).selectpicker("refresh");else if(parseInt(o.tipo_valor,10)==TIPO_FILTRO.VALOR)switch(parseInt(a.cbo_campos_escolha.find('[value="'+a.cbo_campos_escolha.val()+'"]').attr("campo_type"),10)){case ELEMENTO_TIPO.TEXTO:a.edt_valor.val(o.valor);break;case ELEMENTO_TIPO.INTEIRO:case ELEMENTO_TIPO.DECIMAL:a.edt_valor.maskMoney("mask",o.valor);break;case ELEMENTO_TIPO.OPCOES:case ELEMENTO_TIPO.MASCARA:a.edt_valor.val(o.valor);break;case ELEMENTO_TIPO.DATA:set_datepicker(a.edt_valor,o.valor);break;case ELEMENTO_TIPO.INTEGRACAO:case ELEMENTO_TIPO.SELECAO_DOCUMENTO:default:a.edt_valor.val(o.valor)}a.edt_condicao.val(e)}})},this.btn_cancelar.unbind("click"),this.btn_cancelar.click(function(){a.unload()}),this.btn_e.unbind("click"),this.btn_e.click(function(){a.edt_condicao.val(a.edt_condicao.val()+" AND")}),this.btn_ou.unbind("click"),this.btn_ou.click(function(){a.edt_condicao.val(a.edt_condicao.val()+" OR")}),this.btn_prtE.unbind("click"),this.btn_prtE.click(function(){a.edt_condicao.val(a.edt_condicao.val()+"(")}),this.btn_prtD.unbind("click"),this.btn_prtD.click(function(){a.edt_condicao.val(a.edt_condicao.val()+")")}),this.btn_add_condicao.unbind("click"),this.btn_add_condicao.click(function(){a.add_opcoes()}),this.btn_limpa_condicao.unbind("click"),this.btn_limpa_condicao.click(function(){a.edt_condicao.val("")}),this.chk_modo_especialista.bootstrapSwitch("onSwitchChange",function(o,e){1==a.chk_modo_especialista.prop("checked")?a.edt_condicao.prop("disabled",!1):a.edt_condicao.prop("disabled",!0)}),this.cbo_valor.unbind("unbind").bind("change",function(){}),this.func_validacao=function(){a.cbo_operador.removeAttr("disabled"),a.cbo_operador.removeClass("disabled").selectpicker("refresh"),"status_oportunidade.nome"==a.cbo_campos_escolha.val()&&a.codigo_tela!==TELAS.LISTAGEM_SOLICITACAO.codigo&&a.chk_valor.is(":checked")?(a.edt_valor.addClass("hidden"),a.cbo_valor.SelectMultiColumn("show")):"oportunidade.data_fechamento"!=a.cbo_campos_escolha.val()&&"oportunidade.integracao_nextone"!=a.cbo_campos_escolha.val()||a.codigo_tela===TELAS.LISTAGEM_SOLICITACAO.codigo||!a.chk_valor.is(":checked")?"estagnado.dias"==a.cbo_campos_escolha.val()&&a.codigo_tela!==TELAS.LISTAGEM_SOLICITACAO.codigo?(a.cbo_operador.attr("disabled","disabled"),a.cbo_operador.addClass("disabled"),a.cbo_operador.val(0).selectpicker("refresh")):a.edt_valor.hasClass("hidden")&&(a.cbo_valor.SelectMultiColumn("hide"),a.edt_valor.removeClass("hidden"),a.input_temp&&($(a.input_temp).remove(),a.input_temp=null)):(a.edt_valor.addClass("hidden"),a.input_temp&&($(a.input_temp).remove(),a.input_temp=null),a.gerar_input(PARAMETRO_PERSONALIZADO_TIPO.DATE))},this.cbo_campos_escolha.unbind("change"),this.cbo_campos_escolha.change(function(){if("status_oportunidade.nome"!=a.cbo_campos_escolha.val()||a.codigo_tela===TELAS.LISTAGEM_SOLICITACAO.codigo){a.func_validacao();var o=parseInt(a.cbo_campos_escolha.find('[value="'+a.cbo_campos_escolha.val()+'"]').attr("campo_type"),10);switch(a.edt_valor.attr("type","text"),a.edt_valor.val(""),o){case ELEMENTO_TIPO.TEXTO:a.edt_valor.removeClass("edt_mask"),a.edt_valor.maskMoney("destroy");break;case ELEMENTO_TIPO.INTEIRO:a.edt_valor.addClass("edt_mask"),a.edt_valor.maskMoney({allowNegative:!0,thousands:".",affixesStay:!1});break;case ELEMENTO_TIPO.DECIMAL:a.edt_valor.addClass("edt_mask"),a.edt_valor.maskMoney({allowNegative:!0,thousands:".",decimal:",",affixesStay:!1});break;case ELEMENTO_TIPO.OPCOES:case ELEMENTO_TIPO.MASCARA:a.edt_valor.removeClass("edt_mask");break;case ELEMENTO_TIPO.DATA:a.edt_valor.removeClass("edt_mask"),a.edt_valor.maskMoney("destroy"),a.edt_valor.attr("type","date"),setTimeout(function(){set_datepicker(a.edt_valor)},150);break;case ELEMENTO_TIPO.INTEGRACAO:case ELEMENTO_TIPO.SELECAO_DOCUMENTO:a.edt_valor.removeClass("edt_mask")}}else a.func_validacao()}),this.chk_opcoes.unbind("click"),this.chk_opcoes.click(function(){a.definir_tipo_valor()}),this.btn_salvar.unbind("click"),this.btn_salvar.click(function(){var o=!1,e=a.edt_condicao.val(),t=null;if(1==a.chk_modo_especialista.prop("checked"))o=!0;else{$(a.arr_campos).each(function(o,a){if(e.indexOf("{"+a.nome+"}")>-1)e=e.split("{"+a.nome+"}").join("{"+a.campo_id+"}");else{if(!(e.indexOf("["+a.nome+"]")>-1))return;e=e.split("["+a.nome+"]").join("["+a.campo_id+"]")}});var i=null;switch(parseInt($(".chk_opcoes:checked").val(),10)){case TIPO_FILTRO.VALOR:i="date"==a.edt_valor.attr("type")?get_datepicker(a.edt_valor):a.edt_valor.hasClass("edt_mask")?a.edt_valor.maskMoney("unmasked")[0]:a.edt_valor.val();break;case TIPO_FILTRO.PARAMETRO:i=a.edt_parametro.val();break;case TIPO_FILTRO.CAMPO:i=a.cbo_campos_valor.val()}t=parseInt(a.cbo_campos_escolha.find('[value="'+a.cbo_campos_escolha.val()+'"]').attr("campo_type"),10)}var c={filtro_usuario_id:a.filtro_usuario_id,descricao:a.edt_descricao.val(),codigo_tela:a.codigo_tela,condicao_consulta:e,ativo:a.chk_executar_filtro.prop("checked"),ativo_permanentemente:a.chk_executar_filtro.prop("checked"),valor:o?null:i,tipo_valor:o?null:$(".chk_opcoes:checked").val(),operador:o?null:get_cod_by_operador(a.cbo_operador.val()),campo_id:o?null:a.cbo_campos.val(),campo_tipo:o?null:t};a.request_save(c)}),this.request_save=function(o){WS.post("filtro_usuario/salvar",o,function(o){a.filtro_usuario_id=o.id,alert_saved(o.descricao+" salvo com sucesso"),void 0!==a.onsave&&a.onsave&&a.onsave(o),a.unload()})},this.btn_excluir.unbind("click"),this.btn_excluir.click(function(){WS.post("filtro_usuario/excluir",{filtro_usuario_id:a.filtro_usuario_id},function(o){alert_saved(o.descricao+" excluido com sucesso"),a.unload()})}),this.edt_condicao.unbind("keypress").unbind("keydown").keypress(function(o){a.sugestao_ativo?(a.buscador_ativo||123!=o.which||(a.buscador=[],a.buscador_ativo=!0),a.buscador_ativo&&125==o.which&&(a.buscador=[],a.buscador_ativo=!1),32!=o.which&&125!=o.which&&123!=o.which&&a.buscador_ativo&&(a.buscador.push(o.key),a.evento_buscar())):a.edt_condicao.unbind("keypress").unbind("keydown")}).keydown(function(o){a.sugestao_ativo?8==o.which&&(a.buscador.splice(a.buscador.length-1,1),a.evento_buscar()):a.edt_condicao.unbind("keypress").unbind("keydown")}),this.evento_buscar=function(){var o=a.procurar_dados(a.buscador);if(a.grupo_sugestao.find(".container_sugestoes").html(""),o.length>0)if(a.grupo_sugestao.hasClass("hidden"))a.grupo_sugestao.removeClass("hidden");else for(var e=0,t=0;t<o.length;t++){c="<span class='label label-success' style='margin:5px;'>"+a.campos_publicos[o[t]]+"</span>";var i="";e>=2&&(i="<div class='clearfix'></div><br><br>",e=0),a.grupo_sugestao.find(".container_sugestoes").append(c+i),e++}else{if(!a.grupo_sugestao.hasClass("hidden")){var c="";a.grupo_sugestao.addClass("hidden")}a.grupo_sugestao.find(".container_sugestoes").html("")}},this.procurar_dados=function(o){o=o.join("");for(var e=[],t=0;t<a.campos_publicos.length;t++)-1!=a.campos_publicos[t].search(o)&&e.push(t);return e},this.gerar_input=function(o){o==PARAMETRO_PERSONALIZADO_TIPO.DATE&&(a.input_temp=document.createElement("input"),a.input_temp.classList.add("form-control"),a.input_temp.setAttribute("type","date"),a.input_temp.setAttribute("id",md5(new Date+"_ipt_tmp")),set_datepicker($(a.input_temp)),$(a.edt_parametro).after(a.input_temp))}}});