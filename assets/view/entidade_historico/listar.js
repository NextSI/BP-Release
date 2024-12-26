define(["react","react-dom","./../componentes_react/CboClientes"],function(e,a,i){return function(o){"use strict";var t=this;this.html_id=o,this.dialog=$("#"+this.html_id),this.title="Timeline",this.template_div=this.dialog.find(".template_div"),this.section_body=this.dialog.find(".section_body"),this.btn_carregar_mais=this.dialog.find(".btn_carregar_mais"),this.btn_carregar_mais_futuro=this.dialog.find(".btn_carregar_mais_futuro"),this.btn_limpar_filtro=this.dialog.find(".btn_limpar_filtro"),this.timeline_block=this.dialog.find(".cd-timeline-block"),this.cbo_modulo=this.dialog.find(".cbo_modulo"),this.div_component_cbo_clientes=this.dialog.find(".div_component_cbo_clientes"),this.btn_detalhes_entidade=this.dialog.find(".btn_detalhes_entidade"),this.div_menu=this.dialog.find(".div_menu"),this.limite=0,this.limite_futuro=0,this.limite_a_cada=50,this.todos_carregados=!1,this.todos_carregados_futuro=!1,this.entidade_id=null,this.endidade_tipo=null,this.entidade_nome=null,this.carregar_mais_futuro=!1,this.show=function(a,d){a&&d&&(t.entidade_id=a,t.entidade_tipo=d,WS.get("agenda_contatos/listar/",{entidade_id:t.entidade_id,entidade_tipo:t.entidade_tipo},function(e){if(void 0===e[0])return!1;t.entidade_nome=e[0].nome_fantasia,t.div_menu.removeClass("hidden"),App.titulo_aba(o,"Timeline "+e[0].nome_fantasia),t.preencher_popover(e[0]),t.renderiza_componentes(),t.preencher_cbo_modulo()})),this.cboClientes=e.createElement(i,{initial_values:{placeholder:"Pesquisar por nome/cnpj"}},null)},this.listar=function(i){t.entidade_id&&t.entidade_tipo&&WS.get("entidade_historico/listar/",{modulo_selecionado:t.cbo_modulo.val(),entidade_id:t.entidade_id,entidade_tipo:t.entidade_tipo,limite:t.carregar_mais_futuro?t.limite_futuro:t.limite,limite_a_cada:t.limite_a_cada,carregar_mais_futuro:t.carregar_mais_futuro},function(o){if(i&&t.section_body.addClass("hidden").find(".cd-timeline-block").not(".template_div").remove(),t.carregar_mais_futuro)var d=t.btn_carregar_mais_futuro;else d=t.btn_carregar_mais,t.todos_carregados_futuro||(t.btn_carregar_mais_futuro.find("span.icn_carregar_mais").remove(),t.btn_carregar_mais_futuro.find("span.txt_carregar_mais").text(App.lang.btn_carregar_mais.carregar_mais_registros),t.btn_carregar_mais_futuro.append('<span class="icn_carregar_mais fa fa-arrow-up"></span>'));if(o){if(t.section_body.removeClass("hidden"),d.find("span.icn_carregar_mais").remove(),o.length<t.limite_a_cada){d.find("span.txt_carregar_mais").text(App.lang.btn_carregar_mais.todos_carregados),d.append('<span class="icn_carregar_mais fa fa-check"></span>');var r=!0}else d.find("span.txt_carregar_mais").text(App.lang.btn_carregar_mais.carregar_mais_registros),d.append('<span class="icn_carregar_mais fa fa-arrow-down"></span>'),r=!1;$(o).each(function(i,o){!function(i){var o=t.template_div.clone();o.removeClass("template_div"),o.css("display","");var d=$(o.find(".cd-timeline-img"));"agenda"==i.modulo_ocorrencia?d.html('<img src="assets/img/icones_bp/calendar.svg">'):"chamado"==i.modulo_ocorrencia?d.html('<img src="assets/img/icones_bp/comunication.svg">'):"documento"==i.modulo_ocorrencia?d.html('<img src="assets/img/icones_bp/folder.svg">'):"projeto"==i.modulo_ocorrencia?d.html('<img src="assets/img/icones_bp/icon_black_project.svg">'):"processo"==i.modulo_ocorrencia?(d.html('<img src="assets/img/icones_bp/processos.svg">'),i.id=i.id.split(",")):"crm"==i.modulo_ocorrencia?d.html('<img src="assets/img/icones_bp/people.svg">'):"cliente"==i.modulo_ocorrencia&&d.html('<img src="assets/img/icones_bp/people.svg">');var r=$(o.find("[template-field='title']"));"evento_dia"==i.tipo_ocorrencia?(r.text("Evento agendado para o usuário "+i.detalhe),d.addClass("cd-info")):"alteracao_cadastral"==i.tipo_ocorrencia?(r.text(i.detalhe),d.addClass("cd-info")):"criacao_agenda"==i.tipo_ocorrencia?(r.text("Evento criado para o usuário "+i.detalhe),d.addClass("cd-success")):i.tipo_ocorrencia==TIPO_MENSAGEM_CHAMADO.MENSAGEM_TIPO_ABERTURA?(r.text("Abertura do chamado #"+i.id+" "+i.detalhe),d.addClass("cd-success")):i.tipo_ocorrencia==TIPO_MENSAGEM_CHAMADO.MENSAGEM_TIPO_NORMAL?(r.text("Nova mensagem no chamado #"+i.id+" "+i.detalhe),d.addClass("cd-info")):i.tipo_ocorrencia==TIPO_MENSAGEM_CHAMADO.MENSAGEM_TIPO_ENCERRAMENTO?(r.text("Encerramento do chamado #"+i.id+" "+i.detalhe),d.addClass("cd-danger")):i.tipo_ocorrencia==TIPO_MENSAGEM_CHAMADO.MENSAGEM_TIPO_REABERTURA?(r.text("Reabertura do chamado #"+i.id+" "+i.detalhe),d.addClass("cd-success")):i.tipo_ocorrencia==TIPO_MENSAGEM_CHAMADO.MENSAGEM_TIPO_RECLASSIFICACAO?(r.text("Reclassificação do chamado #"+i.id),d.addClass("cd-info")):i.tipo_ocorrencia==TIPO_MENSAGEM_CHAMADO.MENSAGEM_TIPO_ENCERRAMENTO_INATIVIDADE?(r.text("Chamado #"+i.id+" encerrado por inatividade"),d.addClass("cd-danger")):i.tipo_ocorrencia==TIPO_MENSAGEM_CHAMADO.MENSAGEM_TIPO_OBSERVACAO_INTERNA?(r.text("Nova observação interna no chamado #"+i.id),d.addClass("cd-info")):"criacao_pasta"==i.tipo_ocorrencia?(r.text("Criação da pasta "+i.detalhe),d.addClass("cd-success")):"criacao_projeto"==i.tipo_ocorrencia?(r.text("Criação do projeto "+i.detalhe),d.addClass("cd-info")):"inicio_projeto"==i.tipo_ocorrencia?(r.text("Inicio do projeto "+i.detalhe),d.addClass("cd-success")):"fim_projeto"==i.tipo_ocorrencia?(r.text("Fim do projeto "+i.detalhe),d.addClass("cd-danger")):"criacao_processo"==i.tipo_ocorrencia?(r.text("Solicitação #"+i.id[1]+" do processo "+i.detalhe+" foi iniciada"),d.addClass("cd-success")):"aprovacao_atividade"==i.tipo_ocorrencia?(r.text("Atividade "+i.detalhe+" da solicitação "+i.id[1]+" foi aprovada"),d.addClass("cd-info")):"retorno_atividade"==i.tipo_ocorrencia?(r.text("Atividade "+i.detalhe+" da solicitação "+i.id[1]+" foi retornada"),d.addClass("cd-warning")):"finalizacao_processo"==i.tipo_ocorrencia?(r.text("Solicitação #"+i.id[1]+" do processo "+i.detalhe+" foi finalizada"),d.addClass("cd-danger")):"criacao_oportunidade"==i.tipo_ocorrencia?(r.text("Criação da oportunidade "+i.detalhe),d.addClass("cd-success")):i.tipo_ocorrencia==OPORTUNIDADE_SITUACAO.GANHA?(r.text("Oportunidade "+i.detalhe+" ganha"),d.addClass("cd-success")):i.tipo_ocorrencia==OPORTUNIDADE_SITUACAO.PERDIDA?(r.text("Oportunidade "+i.detalhe+" perdida"),d.addClass("cd-danger")):i.tipo_ocorrencia==OPORTUNIDADE_SITUACAO.ATRASADA?(r.text("Oportunidade "+i.detalhe+" atrasada"),d.addClass("cd-warning")):i.tipo_ocorrencia==OPORTUNIDADE_SITUACAO.ESTAGNADA&&(r.text("Oportunidade "+i.detalhe+" estagnada"),d.addClass("cd-info")),$(o.find("[template-field='data_ocorrencia']")).append(i.dia_ocorrencia.format_date_time());var s=$(o.find(".btn_editar")),n=function(){if("agenda"==i.modulo_ocorrencia)View.load("agenda/agenda_evento",function(e,a){var o={evento_id:i.id,forcar_evento_dia:!0};a.show(o)});else if("chamado"==i.modulo_ocorrencia)View.loadReact(window.views.chamado.Detalhes.default,{chamadoId:i.id},function(e,a){},View.ABA.MULTIPLAS);else if("documento"==i.modulo_ocorrencia)View.load("central_documentos/pasta",function(e,a){a.show(i.id,FORMULARIO.EDITAR)},View.ABA.MULTIPLAS);else if("projeto"==i.modulo_ocorrencia)View.load("atividade_projeto/listar",function(e,a){a.show(i.id)},View.ABA.MULTIPLAS,null,null,{projetoId:i.id});else if("processo"==i.modulo_ocorrencia)View.load("solicitacao/detalhes",function(e,a){a.show(i.id[0],FORMULARIO.EDITAR)},View.ABA.MULTIPLAS,null,null,{solicitacaoAtividadeId:i.id[0]});else if("crm"==i.modulo_ocorrencia)View.load("oportunidade/detalhes",function(e,a){a.show(i.id,FORMULARIO.VISUALIZAR)},View.ABA.MULTIPLAS,null,null,{oportunidadeId:i.id});else if("cliente"==i.modulo_ocorrencia){let d=o.find(".div_detalhes");void 0!==d.children()[0]?(a.unmountComponentAtNode(d[0]),s.text("Detalhes"),d.hide()):(d.show(),s.text("Fechar Detalhes"),a.render(e.createElement(window.components.EntidadeHistoricoCadastral.default,{entidade_tipo:"C",entidade_id:t.entidade_id,data_hora:i.dia_ocorrencia}),d[0]))}};s.unbind("click").click(n),o.find(".cd-timeline-content").dblclick(n),t.carregar_mais_futuro?o.prependTo(t.section_body):o.appendTo(t.section_body)}(o)})}else t.section_body.find(".cd-timeline-block").not(".template_div").length||t.section_body.addClass("hidden"),d.find("span.icn_carregar_mais").remove(),d.find("span.txt_carregar_mais").text(App.lang.btn_carregar_mais.todos_carregados),d.append('<span class="icn_carregar_mais fa fa-check"></span>'),r=!0;t.carregar_mais_futuro?t.todos_carregados_futuro=r:t.todos_carregados=r})},this.preencher_cbo_modulo=function(){var e=[];App.verifica_permissao(App.sessao.dados.empresa_filial_id,"agenda")&&(add_option(t.cbo_modulo,MODULOS.AGENDA,"Agenda"),e.push(MODULOS.AGENDA)),App.verifica_permissao(App.sessao.dados.empresa_filial_id,"gestao_chamados")&&(add_option(t.cbo_modulo,MODULOS.CHAMADO,"Chamados"),e.push(MODULOS.CHAMADO)),App.verifica_permissao(App.sessao.dados.empresa_filial_id,"gestao_documentos")&&(add_option(t.cbo_modulo,MODULOS.DOCUMENTO,"Documentos"),e.push(MODULOS.DOCUMENTO)),App.verifica_permissao(App.sessao.dados.empresa_filial_id,"gestao_projetos")&&(add_option(t.cbo_modulo,MODULOS.PROJETO,"Projetos"),e.push(MODULOS.PROJETO)),App.verifica_permissao(App.sessao.dados.empresa_filial_id,"gestao_processos")&&(add_option(t.cbo_modulo,MODULOS.PROCESSO,"Processo"),e.push(MODULOS.PROCESSO)),App.verifica_permissao(App.sessao.dados.empresa_filial_id,"gestao_relacionamento")&&(add_option(t.cbo_modulo,MODULOS.RELACIONAMENTO,"CRM"),e.push(MODULOS.RELACIONAMENTO)),t.cbo_modulo.val(e).trigger("change"),t.cbo_modulo.selectpicker({countSelectedText:function(e,a){return e+" módulos selecionados"}}),t.cbo_modulo.selectpicker("refresh")},this.renderiza_componentes=function(){t.renderiza_combobox_cliente(),t.entidade_id&&t.entidade_nome&&t.entidade_tipo&&t.cboClientes.props.setCliente({cliente_id:t.entidade_id,cliente_nome:t.entidade_nome}),t.cboClientes.props.setFunctionSelect(t.evt_alterar_cliente)},this.renderiza_combobox_cliente=function(){a.render(t.cboClientes,t.div_component_cbo_clientes[0]),t.cboClientes.props.setConfiguracoes={main_externo:t,exibe_tipo_entidade:!0,placeholder:"Filtrar Entidade",WS_params:{desconsiderar_empresa:!0,limite:0}}},this.evt_alterar_cliente=function(){t.entidade_id=t.cboClientes.props.ClienteSelecionado.id,t.entidade_tipo=t.cboClientes.props.ClienteSelecionado.tipo,t.limite=0,t.limite_futuro=0,t.carregar_mais_futuro=!1,t.todos_carregados=!1,t.todos_carregados_futuro=!1,t.listar(!0),t.preencher_popover(t.cboClientes.props.ClienteSelecionado),App.titulo_aba(o,"Timeline "+t.cboClientes.props.ClienteSelecionado.nome_fantasia)},this.preencher_popover=function(e){t.btn_detalhes_entidade.popover("destroy"),setTimeout(function(){t.btn_detalhes_entidade.popover({title:"<h4>Detalhes da Entidade</h4>",content:"Nome Fantasia: "+(e.nome_fantasia?e.nome_fantasia:"")+"<br /> <b>Razão Social: </b> "+(e.razao_social?e.razao_social:"")+"<br /> <b>CNPJ: </b> "+(e.cnpj?e.cnpj:"")+"<br /> <b>Endereço: </b> "+(e.endereco?e.endereco:"")+" "+(e.numero?e.numero:"")+"<br /> <b>Complemento: </b> "+(e.complemento?e.complemento:"")+"<br /> <b>Bairro: </b> "+(e.bairro?e.bairro:"")+"<br /> <b>Cidade: </b> "+(e.cidade?e.cidade:"")+"<br /> <b>Estado: </b> "+(e.uf_sigla?e.uf_sigla:"")+"<br /> <b>Tipo Entidade: </b> "+("C"==e.tipo?"Cliente":"O"==e.tipo?"Organização":"Fornecedor"),html:!0,width:"300px",container:"body",placement:"bottom",trigger:"focus"})},1e3)},this.btn_carregar_mais.unbind("click").click(function(){if(t.todos_carregados)return!1;t.limite+=t.limite_a_cada,t.btn_carregar_mais.find("span.txt_carregar_mais").text(App.lang.btn_carregar_mais.aguarde),$(this).find("span.icn_carregar_mais").remove(),$(this).append('<span class="icn_carregar_mais fa fa-spinner fa-spin"></span>'),t.carregar_mais_futuro=!1,t.listar(!1)}),this.btn_carregar_mais_futuro.unbind("click").click(function(){if(t.todos_carregados_futuro)return!1;t.btn_carregar_mais_futuro.find("span.txt_carregar_mais").text(App.lang.btn_carregar_mais.aguarde),$(this).find("span.icn_carregar_mais").remove(),$(this).append('<span class="icn_carregar_mais fa fa-spinner fa-spin"></span>'),t.carregar_mais_futuro=!0,t.listar(!1),t.limite_futuro+=t.limite_a_cada}),t.cbo_modulo.unbind("change").change(function(e){t.limite=0,t.limite_futuro=0,t.carregar_mais_futuro=!1,t.todos_carregados=!1,t.todos_carregados_futuro=!1,t.listar(!0)}),this.unload=function(){View.unload(this.html_id)}}});