define(["react","react-dom","./../componentes_react/CboClientes"],function(o,e,t){return function(i){"use strict";var a=this;this.html_id=i,this.dialog=$("#"+this.html_id),this.modal=this.dialog.find(".modal"),this.modal.attr("id",this.html_id+"_modal"),this.onselect=null,this.onclose=null,this.btn_cancelar=this.dialog.find(".btn_cancelar"),this.cbo_tipo_periodo=this.dialog.find(".cbo_tipo_periodo"),this.cbo_situacao=this.dialog.find(".cbo_situacao"),this.cbo_tipo_oportunidade=this.dialog.find(".cbo_tipo_oportunidade"),this.edt_ini=this.dialog.find(".edt_ini"),this.edt_fim=this.dialog.find(".edt_fim"),this.div_component_cbo_clientes=this.dialog.find(".div_component_cbo_clientes"),this.div_representante=this.dialog.find(".div_representante"),this.btn_limpar_filtro=this.dialog.find(".btn_limpar_filtro"),this.cbo_filtro_representante=this.dialog.find(".cbo_filtro_representante"),this.btn_aplicar_filtro=this.dialog.find(".btn_aplicar_filtro"),this.btn_filtro_personalizado=this.dialog.find(".btn_filtro_personalizado"),this.btn_configurar_filtros=this.dialog.find(".btn_configurar_filtros"),this.div_situacao_orcamento=this.dialog.find(".div_situacao_orcamento"),this.cbo_filtro_situacao_orcamento=this.dialog.find(".cbo_filtro_situacao_orcamento"),this.cboClientes=o.createElement(t,{initial_values:{placeholder:"Filtro por Entidade"}},null),this.main_externo=null,this.formulario_personalizado_id=null,this.exibir_organizacao_efetivada_filtro=!0,this.show=function(o){var e=App.get_parametro_usuario("oportunidade_filtros");a.filtros=spread({},a.filtros,e),a.main_externo=o;var t=o.arr_funil_vendas.filter(function(o,e){return o.id==a.main_externo.funil_vendas_id});t.length>0&&(a.formulario_personalizado_id=t[0].formulario_oportunidade_id,a.exibir_organizacao_efetivada_filtro="S"==t[0].exibir_organizacao_efetivada_filtro),a.initialize(),a.listar_representantes(),a.main_externo.oculta_div_situacao_orcamento||(a.listar_situacao_orcamento(),a.cbo_filtro_situacao_orcamento.selectpicker("val",a.filtros.situacao_orcamento),a.cbo_filtro_situacao_orcamento.selectpicker("refresh")),a.filtros.situacao?a.cbo_situacao.val(a.filtros.situacao):(a.filtros.situacao=OPORTUNIDADE_FILTROS.EM_ABERTO,a.cbo_situacao.val(a.filtros.situacao)),a.filtros.tipo_periodo?a.cbo_tipo_periodo.val(a.filtros.tipo_periodo):(a.filtros.tipo_periodo=OPORTUNIDADE_FILTROS.PERIODO_INCLUSAO,a.cbo_tipo_periodo.val(a.filtros.tipo_periodo)),a.filtros.dt_ini||(a.filtros.dt_ini="2000-01-01"),set_datepicker(a.edt_ini,a.filtros.dt_ini),a.filtros.dt_fim||(a.filtros.dt_fim="2050-12-31"),set_datepicker(a.edt_fim,a.filtros.dt_fim),a.filtros.tipo_responsavel&&a.cbo_tipo_oportunidade.val(a.filtros.tipo_responsavel),a.div_representante.hide(),a.filtros.tipo_responsavel==OPORTUNIDADE_FILTROS.TODAS&&a.div_representante.show(),show_modal(a.modal.attr("id"))},this.initialize=function(){a.renderiza_componentes(),a.cbo_situacao=$(a.cbo_situacao).select_bp({direction:"left",placeholder:"Selecione uma situação"}),a.cbo_tipo_periodo=$(a.cbo_tipo_periodo).select_bp(),$.select_bp.set(a.cbo_tipo_periodo,[{name:"Inclusão",value:7},{name:"Situação",value:11}]),$.select_bp.set(a.cbo_situacao,[{name:"Todas",value:9},{name:"Em Aberto",value:3},{name:"Estagnadas",value:4},{name:"Ganhas",value:5},{name:"Perdidas",value:6},{name:"Atrasadas",value:10}]),a.cbo_tipo_periodo.val(7),a.cbo_tipo_periodo.get().change(function(){a.filtros.tipo_periodo=a.cbo_tipo_periodo.val()}),a.cbo_situacao.get().change(function(){a.filtros.situacao=a.cbo_situacao.val()}),a.edt_ini.change(function(){a.filtros.dt_ini=get_datepicker($(this))}),a.edt_fim.change(function(){a.filtros.dt_fim=get_datepicker($(this))}),a.main_externo.oculta_div_situacao_orcamento?a.div_situacao_orcamento.addClass("hidden"):a.div_situacao_orcamento.removeClass("hidden")},this.renderiza_componentes=function(){a.renderiza_combobox_cliente(),a.cboClientes.props.setCliente(a.filtros),a.cboClientes.props.setFunctionSelect(a.evt_alterar_cliente)},this.renderiza_combobox_cliente=function(){e.render(a.cboClientes,a.div_component_cbo_clientes[0]),a.cboClientes.props.setConfiguracoes={main_externo:a,exibe_tipo_entidade:!0,placeholder:"Filtrar Entidade",WS_params:{desconsiderar_fornecedor:!0,desconsiderar_empresa:!0,limite:0,exibir_organizacao_efetivada_filtro:a.exibir_organizacao_efetivada_filtro,parametro_tela:"oportunidade_filtro"}}},this.evt_alterar_cliente=function(){a.filtros.entidade=a.cboClientes.props.ClienteSelecionado.id,a.filtros.cliente_id=a.cboClientes.props.ClienteSelecionado.id,a.filtros.cliente_nome=a.cboClientes.props.ClienteSelecionado.nome_fantasia,a.filtros.entidade_tipo=a.cboClientes.props.ClienteSelecionado.tipo},this.listar_representantes=function(){a.cbo_filtro_representante.children().remove(),WS.get("supervisor/listar_representantes_supervisionados/",{usuario_id:App.sessao.usuario_id,modulo:MODULOS.RELACIONAMENTO},function(o){for(var e=0;e<o.length;e++){var t=o[e];add_option(a.cbo_filtro_representante,t.usuario_id,t.usuario_nome,a.filtros.representante&&a.filtros.representante.indexOf(t.usuario_id)>-1?"selected":"")}a.cbo_filtro_representante.selectpicker({countSelectedText:function(o,e){return o+" usuarios selecionados"}}),a.cbo_filtro_representante.selectpicker("refresh")})};var r=!1;this.cbo_filtro_situacao_orcamento.unbind("change"),this.cbo_filtro_situacao_orcamento.change(function(){var o=a.cbo_filtro_situacao_orcamento.find(".opt_todos").prop("selected"),e=a.cbo_filtro_situacao_orcamento.find(".option_group_situacao_orcamento"),t=$(e).find("option"),i=$(e).find("option:selected");!0===o?(r?($(a.cbo_filtro_situacao_orcamento.find(".opt_todos")).attr("selected",!1),$(a.cbo_filtro_situacao_orcamento.find(".opt_todos")).prop("selected",!1)):($(t).attr("selected",!0),$(t).prop("selected",!0)),r=!0):!1===o&&(r=!1,t.length==i.length&&($(t).attr("selected",!1),$(t).prop("selected",!1))),a.cbo_filtro_situacao_orcamento.selectpicker("refresh"),a.filtros.situacao_orcamento=a.cbo_filtro_situacao_orcamento.val()}),this.parametros_filtros_usuario=function(o,e){WS.get("filtro_usuario/get_filtros_parametros/",{codigo_tela:TELAS.LISTAGEM_OPORTUNIDADE.codigo},function(t){var i=[],r=0;if(t&&t.length>0){var n='<div class="row">';$(t).each(function(o,e){var t=e.condicao_consulta.split(/AND|OR/g);if(0==t[t.length-1].trim().length&&t.splice(t.length-1,1),null!=e.condicao_consulta.match(/\[\[parametro\]\]/g)){e.condicao_consulta.match(/\[\[parametro\]\]/g).length;for(var _=0;_<t.length;_++){var s=t[0].split("}")[0].split("{")[1]||(null!=t[o].match(/fn_situacao_oportunidade/g)?"estagnado.dias":null),l=a.coletar_alias(s);if(null!=t[_].match(/\[\[parametro\]\]/g)){(A=new PARAMETRO_CLASS).id=md5(new Date+s+Math.round(10*Math.random())+o),A.alias_campo=l.alias_campo,A.tipo_campo=l.tipo_campo,A.ipt_tipo=l.tipo_input,A.nome_campo=s,A.sql_original=t[_];var c=A.gerar_elemento().outerHTML;n+=c;var d={campo_id:s,operador:A.get_elemento_operador(),element_id:A.id,campo_tipo:A.get_elemento_tipo(),tipo_entrada:A.ipt_tipo,parametro_id:r};i.push(d),r++}}}else{s=t[0].split("}")[0].split("{")[1]||(null!=t[o].match(/fn_situacao_oportunidade/g)?"estagnado.dias":null),l=a.coletar_alias(s);for(var p=0;p<t.length;p++){var A;(A=new PARAMETRO_CLASS).id=null,A.alias_campo=l.alias_campo,A.tipo_campo=l.tipo_campo,A.ipt_tipo=PARAMETRO_PERSONALIZADO_IPT.NOINPUT,A.nome_campo=s,A.sql_original=t[p],d={campo_id:s,operador:A.get_elemento_operador(),element_id:A.id,campo_tipo:A.get_elemento_tipo(),tipo_entrada:A.ipt_tipo},a.main_externo.parametros_filtros.push(d),r++}}}),i.length>0?alert_modal("Informe o parâmetro",n,"Ok",function(e,t){$(i).each(function(e,t){var i=$("#"+t.element_id),r=null;switch(t.operador){case"LIKE":r="'%"+i.val()+"%'";break;case"=":case">=":case"<=":case">":case"<":r="'"+i.val()+"'";break;case"NOT IN":case"IN":r="('"+i.val()+"')";break;case"!=":case"<>":r="'"+i.val()+"'"}t.campo_tipo!=PARAMETRO_PERSONALIZADO_TIPO.FLOAT&&t.campo_tipo!=PARAMETRO_PERSONALIZADO_TIPO.INT||""!=r&&null!=r.match(/[\,]/g)&&(r=r.replace(/[\,]/g,"."));var n={campo_id:t.campo_id,valor:r,valor_original:i.val(),campo_tipo:t.campo_tipo,original:t.original,operador:t.operador};App.temp.oportunidade.filtros[t.campo_id+"_"+e]=$("#"+t.element_id).val(),a.main_externo.parametros_filtros.push(n),void 0!==o&&o()})},!0,null,function(o){for(var e=$(o).find("[campo_id]").length,t=($(o).find('[campo_tipo="int"]').length,["STATUS"]),r=["nome"],n=0;n<$(o).find("select").length;n++){var _=$(o).find("select").eq(n);"status_oportunidade.nome"==$(o).find("select").eq(n).attr("campo_id")?_.SelectMultiColumn({route:"status_oportunidade/listar/",params:null,arr_cols:t,arr_campos:r,campo_value:"nome"}):_.SelectMultiColumn()}for(var s=0;s<e;s++)void 0!==App.temp.oportunidade.filtros&&void 0!==App.temp.oportunidade.filtros[$(o).find("[campo_id]").eq(s).attr("campo_id")+"_"+s]&&App.temp.oportunidade.filtros[$(o).find("[campo_id]").eq(s).attr("campo_id")+"_"+s].length>0?"status_oportunidade.nome"==$(o).find("[campo_id]").eq(s).attr("campo_id")?(_.SelectMultiColumn("refresh"),_.SelectMultiColumn("val",App.temp.oportunidade.filtros[$(o).find("[campo_id]").eq(s).attr("campo_id")+"_"+s])):$(o).find("[campo_id]").eq(s).val(App.temp.oportunidade.filtros[$(o).find("[campo_id]").eq(s).attr("campo_id")+"_"+s]):App.temp.oportunidade.filtros[$(o).find("[campo_id]").eq(s).attr("campo_id")+"_"+s]="";for(s=0;s<i.length;s++)i[s].tipo_entrada==PARAMETRO_PERSONALIZADO_IPT.DATE?set_datepicker($(o).find("#"+i[s].element_id)):i[s].tipo_entrada==PARAMETRO_PERSONALIZADO_IPT.INPUT&&(i[s].campo_tipo!=PARAMETRO_PERSONALIZADO_TIPO.INT&&i[s].campo_tipo!=PARAMETRO_PERSONALIZADO_TIPO.FLOAT||$(o).find("#"+i[s].element_id).keyup(function(o){var e=$(this).val();e=e.replace(/[^0-9]/g,""),46==o.which?$(this).val($(this).val().replace(/[\.]/g,",")):$(this).val($(this).val().replace(/([^0-9\.\,])/g,""))}).keypress(function(o){}).blur(function(o){$(this).val($(this).val().replace(/[\.]/g,","))}));a.main_externo.parametros_filtros=[]},function(){}):0==i.length&&(void 0!==o&&o(),e&&alert_fail("Nenhum parâmetro precisa ser informado. Verifique as configurações de filtros do funíl."))}else void 0!==o&&o(),e&&alert_fail("Não existe filtro ativo para o funíl.")})},this.listar_situacao_orcamento=function(){var o=a.cbo_filtro_situacao_orcamento.find(".option_group_situacao_orcamento");o.find("option").remove(),add_option(o,0,"Aguardando Aprovação","selected"),add_option(o,4,"Aguardando envio de e-mail","selected"),add_option(o,1,"Aprovados","selected"),add_option(o,10,"Em Análise","selected"),add_option(o,2,"Reprovados","selected"),a.cbo_filtro_situacao_orcamento.selectpicker("refresh")},this.coletar_alias=function(o){var e="",t="",i="";switch(o){case"oportunidade.id":e="Oportunidade - ID",t=PARAMETRO_PERSONALIZADO_TIPO.INT,i=PARAMETRO_PERSONALIZADO_IPT.INPUT;break;case"oportunidade.nome":e="Oportunidade - Nome",t=PARAMETRO_PERSONALIZADO_TIPO.STRING,i=PARAMETRO_PERSONALIZADO_IPT.INPUT;break;case"oportunidade.Tipo":e="Oportunidade - Tipo",t=PARAMETRO_PERSONALIZADO_TIPO.STRING,i=PARAMETRO_PERSONALIZADO_IPT.INPUT;break;case"oportunidade.valor_negocio":e="Oportunidade - Valor Negocio",t=PARAMETRO_PERSONALIZADO_TIPO.INT,i=PARAMETRO_PERSONALIZADO_IPT.INPUT;break;case"municipio.municipio":e="Municipio - Nome",t=PARAMETRO_PERSONALIZADO_TIPO.STRING,i=PARAMETRO_PERSONALIZADO_IPT.INPUT;break;case"cliente.nome":e="Cliente - Nome Fantasia",t=PARAMETRO_PERSONALIZADO_TIPO.STRING,i=PARAMETRO_PERSONALIZADO_IPT.INPUT;break;case"cliente.razao_social":e="Cliente - Razão Social",t=PARAMETRO_PERSONALIZADO_TIPO.STRING,i=PARAMETRO_PERSONALIZADO_IPT.INPUT;break;case"prospect.nome":e="Organização - Nome Fantasia",t=PARAMETRO_PERSONALIZADO_TIPO.STRING,i=PARAMETRO_PERSONALIZADO_IPT.INPUT;break;case"prospect.razao_social":e="Organização - Razão Social",t=PARAMETRO_PERSONALIZADO_TIPO.STRING,i=PARAMETRO_PERSONALIZADO_IPT.INPUT;break;case"contato.nome":e="Contato - Nome",t=PARAMETRO_PERSONALIZADO_TIPO.STRING,i=PARAMETRO_PERSONALIZADO_IPT.INPUT;break;case"motivo_perda_negocio.nome":e="Motivo da Perda - Nome",t=PARAMETRO_PERSONALIZADO_TIPO.STRING,i=PARAMETRO_PERSONALIZADO_IPT.INPUT;break;case"motivo_perda_negocio.observacao_obrigatoria":e="Motivo da Perda  - Observação",t=PARAMETRO_PERSONALIZADO_TIPO.STRING,i=PARAMETRO_PERSONALIZADO_IPT.INPUT;break;case"usuario.nome":e="Representante - Nome",t=PARAMETRO_PERSONALIZADO_TIPO.STRING,i=PARAMETRO_PERSONALIZADO_IPT.INPUT;break;case"status_oportunidade.nome":e="Oportunidade - Status",t=PARAMETRO_PERSONALIZADO_TIPO.STRING,i=PARAMETRO_PERSONALIZADO_IPT.SMC;break;case"regiao_vendas.descricao":e="Região de Vendas - Nome",t=PARAMETRO_PERSONALIZADO_TIPO.STRING,i=PARAMETRO_PERSONALIZADO_IPT.INPUT;break;case"item.descricao":e="Oportunidade - Item",t=PARAMETRO_PERSONALIZADO_TIPO.STRING,i=PARAMETRO_PERSONALIZADO_IPT.INPUT;break;case"item.codigo":e="Item - Código",t=PARAMETRO_PERSONALIZADO_TIPO.STRING,i=PARAMETRO_PERSONALIZADO_IPT.INPUT;break;case"oportunidade.data_fechamento":e="Oportunidade - Data de Fechamento",t=PARAMETRO_PERSONALIZADO_TIPO.DATE,i=PARAMETRO_PERSONALIZADO_IPT.DATE;break;case"estagnado.dias":e="Estagnado - Dias",t=PARAMETRO_PERSONALIZADO_TIPO.INT,i=PARAMETRO_PERSONALIZADO_IPT.INPUT;break;case"usuario_representante_2.nome":e="Representante 2 - Nome",t=PARAMETRO_PERSONALIZADO_TIPO.STRING,i=PARAMETRO_PERSONALIZADO_IPT.INPUT;break;case"oportunidade_origem.nome":e="Origem - Nome",t=PARAMETRO_PERSONALIZADO_TIPO.STRING,i=PARAMETRO_PERSONALIZADO_IPT.INPUT;break;case"representante.tipo_representante":e="Representante 1 - Tipo",t=PARAMETRO_PERSONALIZADO_TIPO.STRING,i=PARAMETRO_PERSONALIZADO_IPT.INPUT;break;case"oportunidade_observacoes.observacao":e="Oportunidade - Observação",t=PARAMETRO_PERSONALIZADO_TIPO.STRING,i=PARAMETRO_PERSONALIZADO_IPT.INPUT;break;case"oportunidade_orcamento.id":e="Orçamento - ID",t=PARAMETRO_PERSONALIZADO_TIPO.INT,i=PARAMETRO_PERSONALIZADO_IPT.INPUT;break;case"oportunidade.integracao_nextone":e="Oportunidade - Data de Integração",t=PARAMETRO_PERSONALIZADO_TIPO.DATE,i=PARAMETRO_PERSONALIZADO_IPT.DATE;break;default:e="",t=PARAMETRO_PERSONALIZADO_TIPO.STRING,i=PARAMETRO_PERSONALIZADO_IPT.INPUT}return{alias_campo:e,tipo_campo:t,tipo_input:i}},this.close=function(){close_modal(a.modal.attr("id")),void 0!==a.onclose&&a.onclose&&a.onclose()},this.unload=function(){a.close(),View.unload(this.html_id)},this.btn_cancelar.unbind("click"),this.btn_cancelar.click(function(){a.unload()}),this.cbo_tipo_oportunidade.unbind("change").change(function(){$(this).val()==OPORTUNIDADE_FILTROS.TODAS?a.div_representante.show():(a.div_representante.hide(),a.filtros.representante=null)}),this.btn_limpar_filtro.unbind("click").click(function(){a.filtros=spread(a.filtros,{cliente_id:"",cliente_nome:"",tipo_periodo:7,tipo_responsavel:2,situacao:3,representante:null,situacao_orcamento:null,entidade:null,entidade_tipo:null,dt_ini:"2000-01-01",dt_fim:"2050-12-31",situacao_orcamento:null}),App.set_parametro_usuario("oportunidade_filtros",a.filtros),a.main_externo.listar_etapas(),a.cbo_situacao.val(3),a.cbo_tipo_periodo.val(7),a.listar_representantes(),a.cboClientes.props.setCliente(a.filtros),set_datepicker(a.edt_ini,"2000-01-01"),set_datepicker(a.edt_fim,"2050-12-31"),a.main_externo.oculta_div_situacao_orcamento||($(a.cbo_filtro_situacao_orcamento.find(".opt_todos")).attr("selected",!1),$(a.cbo_filtro_situacao_orcamento.find(".opt_todos")).prop("selected",!1))}),this.btn_aplicar_filtro.unbind("click").click(function(){a.filtros.dt_ini>a.filtros.dt_fim?alert_modal("Aviso!","A data de inicio não pode ser maior que a data fim.",["Ok"]):(a.filtros.tipo_responsavel=a.cbo_tipo_oportunidade.val(),a.main_externo.filtros.entidade=a.filtros.entidade,a.main_externo.filtros.entidade_tipo=a.filtros.entidade_tipo,a.main_externo.filtros.tipo_responsavel=a.cbo_tipo_oportunidade.val(),a.main_externo.filtros.representante=a.filtros.representante,a.main_externo.filtros.tipo_responsavel=a.filtros.tipo_responsavel,a.main_externo.filtros.situacao=a.filtros.situacao,a.main_externo.filtros.tipo_periodo=a.filtros.tipo_periodo,a.main_externo.filtros.situacao_orcamento=a.filtros.situacao_orcamento,a.main_externo.filtros.dt_ini=""!=a.filtros.dt_ini?a.filtros.dt_ini:"2000-01-01",a.main_externo.filtros.dt_fim=a.filtros.dt_fim,a.main_externo.get_parametros(!0),App.set_parametro_usuario("oportunidade_filtros",a.filtros),a.main_externo.listar_etapas(),a.unload())}),this.btn_configurar_filtros.unbind("click").click(function(o){a.parametros_filtros_usuario(a.main_externo.construct,!0)}),this.cbo_filtro_representante.unbind("change").change(function(){a.filtros.representante=a.cbo_filtro_representante.selectpicker("val")}),this.btn_filtro_personalizado.unbind("click"),this.btn_filtro_personalizado.click(function(){View.load("filtro_usuario/listar",function(o,e){e.show(TELAS.LISTAGEM_OPORTUNIDADE.codigo,a.formulario_personalizado_id),e.onclose=function(){a.parametros_filtros_usuario(a.main_externo.construct)}})})}});