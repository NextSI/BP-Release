define([],function(){return function(o){"use strict";var e=this;this.html_id=o,this.dialog=$("#"+this.html_id),this.modal=this.dialog.find(".modal"),this.modal.attr("id",this.html_id+"_modal"),this.onselect=null,this.onclose=null,this.btn_cancelar=this.dialog.find(".btn_cancelar"),this.btn_excel=this.dialog.find(".btn_excel"),this.cbo_processo=this.dialog.find(".cbo_processo"),this.btn_refresh_cbo_processo=this.dialog.find(".btn_refresh_cbo_processo"),this.cbo_versao=this.dialog.find(".cbo_versao"),this.btn_refresh_cbo_versao=this.dialog.find(".btn_refresh_cbo_versao"),this.cbo_atividades=this.dialog.find(".cbo_atividades"),this.cbo_campos=this.dialog.find(".cbo_campos"),this.div_versao_processo=this.dialog.find(".div_versao_processo"),this.table_condicao_integracao=this.dialog.find(".table_condicao_integracao"),this.btn_add_filtro=this.dialog.find(".btn_add_filtro"),this.btn_excluir_condicao=this.dialog.find(".btn_excluir_condicao"),this.processo_id=null,this.versao_processo_id=null,this.atividades=null,this.campos=null,this.grupos_versao_processo=null,this.campos_versao_processo=new Array,this.filtros_personalizados=new Array,this.show=function(){show_modal(e.modal.attr("id")),e.listar_processos()},this.close=function(){close_modal(e.modal.attr("id")),void 0!==e.onclose&&e.onclose&&e.onclose()},this.unload=function(){e.close(),View.unload(this.html_id)},this.listar_processos=function(){WS.get("processo/listar/",null,function(o){e.cbo_processo.find("option").remove();for(var i=0,s=o.length;i<s;i++){var a=o[i];add_option(e.cbo_processo,a.processo_id,a.nome)}e.cbo_processo.selectpicker("refresh")})},e.cbo_processo.change(function(o){var i=$(this);""!=i.val()&&(e.processo_id=i.val(),e.listar_versoes())}),this.btn_refresh_cbo_processo.unbind("click"),this.btn_refresh_cbo_processo.click(function(){e.listar_processos(),e.cbo_versao.find("option").remove(),e.cbo_versao.selectpicker("refresh")}),this.listar_versoes=function(){e.versao_processo_id=null,e.listar_atividade_campos(),WS.get("processo/listar_versoes/",{processo_id:e.processo_id},function(o){e.cbo_versao.find("option").remove();for(var i=0,s=o.length;i<s;i++){var a=o[i];add_option(e.cbo_versao,a.versao_processo_id,"Versão "+a.sequencia+" -  Publicação: "+a.publicacao.format_date_time())}e.cbo_versao.selectpicker({countSelectedText:function(o,e){return o+" versões selecionadas"}}),e.cbo_versao.selectpicker("refresh")})},e.cbo_versao.change(function(o){var i=$(this);""!=i.val()&&(e.versao_processo_id=i.val(),e.listar_atividade_campos())}),this.btn_refresh_cbo_versao.unbind("click"),this.btn_refresh_cbo_versao.click(function(){e.listar_versoes()}),this.listar_atividade_campos=function(){WS.get("processo/listar_atividade_campos/",{versao_processo_id:JSON.stringify(e.versao_processo_id)},function(o){if(null!=o){e.atividades=null,e.campos=null,e.campos_versao_processo.solicitacao_id={tipo_campo:window.ELEMENTO_TIPO.INTEIRO,nome_campo:"Nº solicitação"},e.campos_versao_processo.data_solicitacao={tipo_campo:window.ELEMENTO_TIPO.DATA,nome_campo:"Data solicitação"},e.campos_versao_processo.usuario_solicitacao_nome={tipo_campo:window.ELEMENTO_TIPO.TEXTO,nome_campo:"Solicitante"},e.campos_versao_processo.atividade_descricao={tipo_campo:window.ELEMENTO_TIPO.TEXTO,nome_campo:"Nome da atividade"},e.campos_versao_processo.data_etapa={tipo_campo:window.ELEMENTO_TIPO.DATA,nome_campo:"Data criação da atividade"},e.campos_versao_processo.data_aprovacao_etapa={tipo_campo:window.ELEMENTO_TIPO.DATA,nome_campo:"Data entrega da atividade"},e.campos_versao_processo.data_retorno_etapa={tipo_campo:window.ELEMENTO_TIPO.DATA,nome_campo:"Data retorno da atividade"},e.campos_versao_processo.retorno_motivo={tipo_campo:window.ELEMENTO_TIPO.TEXTO,nome_campo:"Motivo do retorno"},e.campos_versao_processo.usuario_grupos_responsavel_atividade={tipo_campo:window.ELEMENTO_TIPO.TEXTO,nome_campo:"Responsável"},e.campos_versao_processo.situacao={tipo_campo:window.ELEMENTO_TIPO.OPCOES,nome_campo:"Situação da Atividade"},e.cbo_atividades.children().remove();for(var i=0;i<o.atividades.length;i++){var s=o.atividades[i];add_option(e.cbo_atividades,s.id,s.descricao)}for(e.cbo_atividades.selectpicker({countSelectedText:function(o,e){return o+" atividades selecionadas"}}),e.cbo_atividades.selectpicker("refresh"),e.cbo_campos.children().remove(),e.grupos_versao_processo=o.grupos,i=0;i<o.grupos.length;i++){var a=JSON.parse(o.grupos[i].elementos);e.cbo_campos.add_group_opt("optgrp_"+o.grupos[i].formulario_grupo_id,o.grupos[i].nome,80);for(var t=0;t<a.length;t++){var c=a[t];e.cbo_campos.add_opt_to_group("optgrp_"+o.grupos[i].formulario_grupo_id,c.elem_key+" - "+c.nome,c.nome,"","",80),c.tipo!=ELEMENTO_TIPO.TEXTO&&c.tipo!=ELEMENTO_TIPO.OPCOES&&c.tipo!=ELEMENTO_TIPO.MASCARA&&c.tipo!=ELEMENTO_TIPO.INTEIRO&&c.tipo!=ELEMENTO_TIPO.DECIMAL&&c.tipo!=ELEMENTO_TIPO.DATA&&c.tipo!=ELEMENTO_TIPO.INTEGRACAO||(e.campos_versao_processo[c.elem_key+" - "+c.nome]={tipo_campo:c.tipo,nome_campo:c.nome})}}e.cbo_campos.selectpicker({countSelectedText:function(o,e){return o+" campos selecionados"}}),e.cbo_campos.selectpicker("refresh"),e.div_versao_processo.removeClass("hidden")}})},this.adicionar_filtro=function(){var o=e.table_condicao_integracao.find("tbody"),i=$(o.find("[template-row]")),s=function(o){for(var i in o.children().remove(),e.campos_versao_processo)e.campos_versao_processo.hasOwnProperty(i)&&add_option(o,i,e.campos_versao_processo[i].nome_campo)};!function(){let a=i.clone();a.addClass("rows").css("display","").removeAttr("template-row");let t=$(a.find(".cbo_campos_filtro")),c=$(a.find(".cbo_expressao")),r=$(a.find(".edt_filtro")),n=$(a).find(".edt_filtro_situacao");s(t),t.addClass("selectpicker").selectpicker("refresh"),t.change(function(){!function(o,e,i,s){o.children().remove(),i.removeAttr("type"),add_option(o,"","Selecione","selected"),add_option(o,"0","Igual A"),add_option(o,"1","Diferente De");let a=[window.ELEMENTO_TIPO.TEXTO,window.ELEMENTO_TIPO.MASCARA],t=[window.ELEMENTO_TIPO.DATA],c=[window.ELEMENTO_TIPO.INTEIRO,window.ELEMENTO_TIPO.DECIMAL,window.ELEMENTO_TIPO.DATA],r=[window.ELEMENTO_TIPO.OPCOES];i.removeClass("hidden"),s.closest(".div_filtro_situacao").addClass("hidden"),a.includes(e.tipo_campo)?(add_option(o,"6","Contem o Trecho"),i.attr("type","text")):t.includes(e.tipo_campo)||c.includes(e.tipo_campo)?(add_option(o,"2","Maior Que"),add_option(o,"3","Menor Que"),add_option(o,"4","Maior ou Igual A"),add_option(o,"5","Menor ou Igual A"),t.includes(e.tipo_campo)?i.attr("type","date"):i.attr("type","number")):r.includes(e.tipo_campo)&&(i.addClass("hidden"),s.closest(".div_filtro_situacao").removeClass("hidden"))}(c,e.campos_versao_processo[t.val()],r,n),c.addClass("selectpicker").selectpicker("refresh"),n.addClass("selectpicker").selectpicker("refresh")});let _=$(a.find(".btn_excluir_condicao"));_.unbind("click"),_.click(function(){s(t),a.remove()}),e.cbo_processo.change(function(){a.remove()}),e.cbo_versao.change(function(){a.remove()}),a.appendTo(o)}()},e.cbo_atividades.change(function(o){var i=$(this);if(""!=i.val()){var s=[];$(i.val()).each(function(o,e){$(e.split(",")).each(function(o,e){s.push(e)})}),e.atividades=s}}),this.btn_add_filtro.unbind("click"),this.btn_add_filtro.click(function(){e.adicionar_filtro()}),e.cbo_campos.change(function(o){var i=$(this);""!=i.val()&&(e.campos=i.val())}),this.btn_excel.unbind("click"),this.btn_excel.click(function(){let o=clone_obj(e.campos),i=e.table_condicao_integracao.find(".rows");e.filtros_personalizados=[];for(let o=0,s=i.length;o<s;o++){let s=i[o],a=$(s).find(".cbo_campos_filtro").find("select").val(),t=$(s).find(".edt_filtro").val(),c=$(s).find(".edt_filtro_situacao").find("select").val();e.filtros_personalizados[o]={cbo_campos_filtro:a,cbo_expressao:$(s).find(".cbo_expressao").find("select").val(),edt_filtro:"situacao"===a?c:t}}return null!=o&&(o.push("solicitacao_id"),o.push("data_solicitacao"),o.push("usuario_solicitacao_nome"),o.push("atividade_descricao"),o.push("data_etapa"),o.push("usuario_grupos_responsavel_atividade"),o.push("entrega")),e.processo_id?e.versao_processo_id?e.atividades?void App.obter_token_publico(function(i){WS.post("processo/gerar_excel_dados_processo",{processo_id:e.processo_id,versao_processo_id:JSON.stringify(e.versao_processo_id),atividades:JSON.stringify(e.atividades),campos:JSON.stringify(o),filtros_personalizados:JSON.stringify(e.filtros_personalizados),token_publico:i},function(o){download_arquivo(o.file,o.name)})}):(alert_modal('<i class="fa fa-exclamation-triangle pull-left" aria-hidden="true"></i> Atenção !',"Informe quais atividades deseja exportar"),!1):(alert_modal('<i class="fa fa-exclamation-triangle pull-left" aria-hidden="true"></i> Atenção !',"Informe a Versão do Processo"),!1):(alert_modal('<i class="fa fa-exclamation-triangle pull-left" aria-hidden="true"></i> Atenção !',"Informe o Processo"),!1)}),this.btn_cancelar.unbind("click"),this.btn_cancelar.click(function(){e.unload()})}});