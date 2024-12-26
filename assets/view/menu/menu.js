define([],function(){return function(){"use strict";var o=this;if(this.menu=[{nome:"Central de Pendências",id:"modulo_central_pendencias",icone:"assets/img/icones_bp/central_pendencias.svg",permissao:["agenda","gestao_tarefas","gestao_chamados","gestao_documentos","gestao_processos","gestao_projetos","pdca","gestao_relacionamento"],click:function(){View.loadReact(window.views.central_pendencias.Listagem.default,{},function(o){},View.ABA.SIM)}},{nome:"Agenda",id:"modulo_agenda",icone:"assets/img/icones_bp/calendar.svg",permissao:"agenda",translate:"home.agenda",click:function(){View.loadReact(views.agendaEvento.Listagem.default,{},function(o){},View.ABA.SIM)},submenus:[{nome:"Agenda",id:"ma_agenda",permissao:"agenda",translate:"home.agenda",click:function(){View.loadReact(views.agendaEvento.Listagem.default,{},function(o){},View.ABA.SIM)}},{nome:"Cadastros",id:"ma_cadastros",translate:"menu_lateral.cadastros",permissao:null,click:null,submenus:[{nome:"Locais",id:"ma_locais_agenda",permissao:"locais_agenda",translate:"local_agenda.local_agenda",click:function(){View.load("local_agenda/listar",function(o){},View.ABA.SIM)}},{nome:"Tipos",id:"ma_tipo_agenda",permissao:"tipo_agenda",translate:"tipo_agenda.tipo_agenda",click:function(){View.loadReact(views.tipo_agenda.Listagem.default,{},function(o){},View.ABA.SIM)}},{nome:"Mensagem padrão do E-mail",id:"ma_mensagem_agenda",permissao:"mensagem_agenda",translate:"mensagem_padrao_email_agenda.mensagem_padrao_email_agenda",click:function(){View.load("mensagem_agenda/detalhes",function(o,i){i.show()})}},{nome:"Histórico da Agenda",id:"ma_historico_agenda",permissao:"agenda",translate:"historico_agenda.historico_agenda",click:function(){View.load("agenda/historico",function(o,i){i.show()},View.ABA.SIM)}},{nome:"Agenda Ativo",id:"ma_agenda_ativo",permissao:"agenda_ativo",translate:"agenda_ativos.agenda_ativos",click:function(){View.loadReact(views.agenda_ativo.Listagem.default,{},function(o){},View.ABA.SIM)}},{nome:"Grupo de Ativos",id:"ma_agenda_grupo_ativo",permissao:"agenda_grupo_ativo",translate:"grupo_agenda_ativos.grupo_agenda_ativos",click:function(){View.loadReact(views.grupo_ativos.Listagem.default,{},function(o){},View.ABA.SIM)}}]}]},{nome:"Tarefas",id:"modulo_tarefas",icone:"assets/img/icones_bp/tarefa.svg",permissao:"gestao_tarefas",translate:"home.gestao_tarefas",click:function(){View.load("tarefa/listar",function(o,i){},View.ABA.SIM)},submenus:[{nome:"Tarefas",id:"mt_tarefas",permissao:"gestao_tarefas",translate:"home.gestao_tarefas",click:function(){View.load("tarefa/listar",function(o,i){},View.ABA.SIM)}},{nome:"Etiquetas",id:"mb_etiqueta_tarefa",permissao:"etiqueta_tarefa",click:function(){View.loadReact(window.views.etiqueta.Listagem.default,{pai_tabela:"tarefa_quadro",titulo:"Todos os Quadros"},o=>{},View.ABA.MULTIPLAS)}}]},{nome:"Chamados",id:"modulo_chamados",icone:"assets/img/icones_bp/comunication.svg",permissao:"gestao_chamados",translate:"home.gestao_chamados",click:function(){View.loadReact(views.chamado.Listagem.default,{},function(o){},View.ABA.SIM)},submenus:[{nome:"Novo Chamado",id:"mc_novo_chamado",permissao:"gestao_chamados",tags:"novo chamado abertura",click:function(){View.loadReact(window.views.chamado.Detalhes.default,{},function(o,i){},View.ABA.MULTIPLAS)}},{nome:"Listagem",id:"mc_listagem_chamados",permissao:"gestao_chamados",click:function(){View.loadReact(views.chamado.Listagem.default,{},function(o){},View.ABA.SIM)}},{nome:"Agenda de Contatos",id:"mc_agenda_contatos",permissao:"agenda_contatos",click:function(){View.loadReact(views.agendaContatos.Listagem.default,{},function(o){},View.ABA.SIM)}},{nome:"Cadastros",id:"mc_cadastros",permissao:null,click:null,submenus:[{nome:"Motivos",id:"mc_chamado_motivo",permissao:"chamado_motivo",click:function(){View.loadReact(views.motivo_chamados.Listagem.default,{},function(o){},View.ABA.SIM)}},{nome:"Grupo de Motivos",id:"mc_grupo_motivo_chamado",permissao:"grupo_motivo_chamado",click:function(){View.loadReact(views.grupoMotivoChamado.Listagem.default,{},function(o){},View.ABA.SIM)}},{nome:"Classificação",id:"mc_chamado_classificacao",permissao:"chamado_classificacao",click:function(){View.loadReact(views.ChamadoClassificacao.Listagem.default,{},function(o){},View.ABA.SIM)}},{nome:"Classificação de Avaliação",id:"mc_nota_avaliacao",permissao:"nota_avaliacao",click:function(){View.loadReact(views.nota_avaliacao.Listagem.default,{},function(o){},View.ABA.SIM)}},{nome:"Prioridades",id:"mc_chamado_prioridades",permissao:"chamado_prioridades",click:function(){View.loadReact(views.ChamadoPrioridade.ChamadoPrioridadeListagem.default,{},function(o){},View.ABA.SIM)}},{nome:"Cores por % de conclusão",id:"mc_chamado_conclusao",permissao:"chamado_percentual_conclusao",click:function(){View.loadReact(views.ChamadoCorPercentualConclusao.ChamadoCorPercentualConclusaoListagem.default,{},function(o){},View.ABA.SIM)}}]},{nome:"Dashboards",id:"mc_dashboards",permissao:null,click:null,submenus:[{nome:"Totalizador Geral",id:"mc_totalizador_geral",permissao:"gestao_chamados",click:function(){View.load("chamado/dashboard",function(o,i){i.show()},View.ABA.SIM)}},{nome:"Grupo de Motivos",id:"mc_dashboard_grupo_motivos",permissao:"chamados_relatorio",click:function(){View.load("chamado/grafico_grupo_motivo",function(o,i){i.show()},View.ABA.SIM)}}]},{nome:"Relatórios",id:"mc_relatorios",permissao:null,click:null,submenus:[{nome:"Indicadores",id:"mc_chamados_relatorio_indicadores",permissao:"chamados_relatorio",click:function(){View.load("relatorios_chamado/relatorio",function(o,i){i.show()},View.ABA.SIM)}},{nome:"Horas Gastas",id:"mc_chamados_relatorio_horas_gastas",permissao:"chamados_relatorio",click:function(){View.load("chamado/relatorio_horas_gastas",function(o,i){i.show()},View.ABA.SIM)}},{nome:"Chamados Interagidos",id:"mc_chamados_interagidos",permissao:"chamados_relatorio",click:function(){View.load("chamado/interagidos",function(o,i){},View.ABA.SIM)}}]}]},{nome:"Documentos",id:"modulo_documentos",icone:"assets/img/icones_bp/folder.svg",permissao:"gestao_documentos",translate:"home.gestao_documentos",click:function(){View.loadReact(views.documentos.Listagem.default,{},function(o){},View.ABA.SIM)},submenus:[{nome:"Central de Documentos",id:"md_central_documentos",permissao:"gestao_documentos",click:function(){View.loadReact(views.documentos.Listagem.default,{},function(o){},View.ABA.SIM)}},{nome:"Pendências de Aprovação",id:"md_pendencias_aprovacoes",permissao:"gestao_documentos",click:function(){View.load("central_documentos/listar_pendencias",function(o,i){i.show(!0)},View.ABA.SIM)}},{nome:"Envios pendentes",id:"md_envios_pendentes",permissao:"gestao_documentos",click:function(){View.load("upload/listar",function(o){},View.ABA.SIM)}},{nome:"Lixeira de Documentos",id:"md_lixeira_documentos",permissao:"lixeira_documentos",click:function(){View.loadReact(window.views.LixeiraDocumentos.ListagemLixeiraDocumentos.default,{},function(o){},View.ABA.SIM)}},{nome:"Cadastros",id:"md_cadastros",permissao:null,click:null,submenus:[{nome:"Assuntos",id:"md_assuntos",permissao:"assunto",click:function(){View.loadReact(window.views.assunto_documento.AssuntoDocumentoListagem.default,{},function(o){},View.ABA.SIM)}},{nome:"Tipos",id:"md_tipo_documento",permissao:"tipo_documento",click:function(){View.loadReact(window.views.tipo_documento.TipoDocumentoListagem.default,{},function(o){},View.ABA.SIM)}},{nome:"Alçada de Aprovadores",id:"md_alcada_aprovadores",permissao:"alcada_aprovadores",click:function(){View.load("alcada_aprovadores/listar",function(o){},View.ABA.SIM)}},{nome:"Motivo de Bloqueio",id:"md_motivo_bloqueio",permissao:"motivo_bloqueio",click:function(){View.load("documento_motivo_bloqueio/listar",function(o){},View.ABA.SIM)}},{nome:"Locais de Distribuição",id:"md_local_distribuicao",permissao:"local_distribuicao",click:function(){View.load("local_distribuicao/listar",function(o,i){i.show()},View.ABA.SIM)}}]},{nome:"Relatórios",id:"md_relatorios",permissao:null,click:null,submenus:[{nome:"Situação e Vigência",id:"md_vigencia",permissao:"relatorio_vigencia",click:function(){View.load("central_documentos/relatorio_vigencia",function(o,i){i.show()},View.ABA.SIM)}}]}]},{nome:"Processos",id:"modulo_processos",icone:"assets/img/icones_bp/processos.svg",permissao:"gestao_processos",translate:"home.gestao_processos",click:function(){View.loadReact(views.solicitacao_processo.Listagem.default,{},function(o){},View.ABA.SIM)},submenus:[{nome:"Solicitações de Processos",id:"mb_solicitacoes_processos",permissao:"gestao_processos",click:function(){View.loadReact(views.solicitacao_processo.Listagem.default,{},function(o){},View.ABA.SIM)}},{nome:"Modelagens",id:"mb_modelagens",permissao:null,click:null,submenus:[{nome:"Modelagem de Processos",id:"mb_modelagem_processos",permissao:["processo","etiqueta_processo"],click:function(){View.loadReact(views.processos.Listagem.default,{},function(o){},View.ABA.SIM)}},{nome:"Modelagem de Formulários",id:"mb_modelagem_formularios",permissao:"formulario",click:function(){View.loadReact(views.modelagemFormulario.Listagem.default,{},function(o){},View.ABA.SIM)}}]},{nome:"Cadastros",id:"mb_cadastros",permissao:null,click:null,submenus:[{nome:"Etiquetas",id:"mb_etiqueta_processo",permissao:"etiqueta_processo",click:function(){View.loadReact(window.views.etiqueta.Listagem.default,{pai_tabela:"processo",titulo:"Todos os Processos"},o=>{},View.ABA.MULTIPLAS)}},{nome:"Categorias de Processos",id:"mb_categoria_processos",permissao:"categoria_processos",click:function(){View.loadReact(window.views.processos.ListagemCategoriaProcessos.default)}},{nome:"Templates Word de Solicitações",id:"mr_templates_word_solicitacao",permissao:"solicitacao_template_word",click:function(){View.loadReact(window.views.solicitacao_template_word.SolicitacaoTemplateWordListagem.default,{},function(o){},View.ABA.SIM)}}]},{nome:"Relatórios",id:"mb_relatorios",permissao:null,click:null,submenus:[{nome:"Indicadores",id:"mb_relatorio_indicadores",permissao:"relatorio_processo",click:function(){View.load("processo_relatorios/relatorio",function(o,i){i.show()},View.ABA.MULTIPLAS)}},{nome:"Produtividade",id:"mb_relatorio_produtividade",permissao:"relatorio_produtividade",click:function(){View.load("processo_relatorios/relatorio_produtividade",function(o,i){i.show()},View.ABA.SIM)}},{nome:"Atividade de Processo",id:"mb_relatorio_atividade_processo",permissao:"relatorio_atividade_processo",click:function(){View.load("processo_relatorios/relatorio_processos",function(o,i){i.show(onselect)})}}]}]},{nome:"Projetos",id:"modulo_projetos",icone:"assets/img/icones_bp/icon_black_project.svg",permissao:"gestao_projetos",translate:"home.gestao_projetos",click:function(){View.load("projeto/listar",function(o,i){i.show()},View.ABA.SIM)},submenus:[{nome:"Listagem",id:"mj_listagem_projetos",permissao:"gestao_projetos",click:function(){View.load("projeto/listar",function(o,i){i.show()},View.ABA.SIM)}},{nome:"Atividades por Usuário",id:"mj_atividades_usuario",permissao:"gestao_projetos",click:function(){View.load("atividade_projeto_usuario/listar",function(o,i){i.show()},View.ABA.MULTIPLAS)}},{nome:"Agenda de Contatos",id:"mj_agenda_contatos",permissao:"agenda_contatos",click:function(){View.loadReact(views.agendaContatos.Listagem.default,{},function(o){},View.ABA.SIM)}},{nome:"Categoria",id:"mj_categoria_projeto",permissao:"categoria_projeto",click:function(){View.load("projeto_categoria/listar",function(o,i){i.show()},View.ABA.SIM)}},{nome:"Status",id:"mj_status_projeto",permissao:"status_projeto",click:function(){View.load("projeto_status/listar",function(o,i){i.show()},View.ABA.SIM)}},{nome:"Movimentação Financeira",id:"mj_movimentacao_financeira",permissao:"projeto_movimentacao_financeira",click:function(){View.loadReact(components.MovimentacaoFinanceira.default,{},function(o){},View.ABA.MULTIPLAS)}},{nome:"Apontamentos",id:"mj_apontamentos",permissao:null,click:null,submenus:[{nome:"Apontamento de Atividades",id:"mj_apontamento_atividade",permissao:"apontamento_atividade",click:function(){View.load("apontamento_projeto/listar",function(o,i){i.show()},View.ABA.SIM)}},{nome:"Apontamento Simples",id:"mj_apontamento_simples",permissao:"apontamento_atividade",click:function(){View.loadReact(window.views.apontamento_simples.Listagem.default,{},o=>{},View.ABA.SIM)}},{nome:"Apontamento de Despesas",id:"mj_apontamento_despesa",permissao:"apontamento_despesa",click:function(){View.load("apontamento_despesas/listar",function(o,i){},View.ABA.SIM)}}]},{nome:"Cadastros",id:"mj_cadastros",permissao:null,click:null,submenus:[{nome:"Assuntos",id:"mj_assunto_projeto",permissao:"assunto_projeto",click:function(){View.load("assunto_projeto/listar",function(o){},View.ABA.SIM)}},{nome:"Classificação de Atividades",id:"mj_projeto_atividade_classificacao",permissao:"projeto_atividade_classificacao",click:function(){View.load("classificacao_projeto_atividades/listar",function(o,i){},View.ABA.SIM)}},{nome:"Classificação de Projetos",id:"mj_projeto_classificacao",permissao:"projeto_classificacao",click:function(){View.load("classificacao_projeto/listar",function(o,i){},View.ABA.SIM)}},{nome:"Classificação de Movimentação Financeira",id:"mj_classificacao_movimentacao_financeira",permissao:"classificacao_movimentacao_financeira",click:function(){View.loadReact(window.views.ClassificacaoMovimentacaoFinanceira.ListagemClassificacaoMovimentacaoFinanceira.default,{},o=>{},View.ABA.SIM)}},{nome:"Técnicos",id:"mj_tecnicos",permissao:"tecnicos",click:function(){View.load("tecnicos/listar",function(o,i){},View.ABA.SIM)}},{nome:"Cores por % de conclusão",id:"mj_cores_atividades_execucao",permissao:"cores_atividades_execucao",click:function(){View.load("cores_atividades_execucao/listar",function(o,i){},View.ABA.SIM)}},{nome:"Cores por % de saldo",id:"mj_cores_atividades_saldo",permissao:"cores_atividades_saldo",click:function(){View.load("cores_atividades_saldo/listar",function(o,i){},View.ABA.SIM)}}]},{nome:"Itens",permissao:null,click:null,submenus:[{nome:"Itens",id:"mr_itens_projeto",permissao:"item",translate:"home.crm_item",click:function(){View.load("itens/listar",function(o,i){i.show()},View.ABA.SIM)}},{nome:"Tipo Itens",id:"mr_tipo_itens_projeto",permissao:"tipo_itens",translate:"home.crm_tipo_item",click:function(){View.load("tipo_itens/listar",function(o,i){},View.ABA.SIM)}},{nome:"Grupo Itens",id:"mr_grupo_itens_projeto",permissao:"grupo_itens",translate:"home.crm_grupo_item",click:function(){View.load("grupo_itens/listar",function(o,i){},View.ABA.SIM)}},{nome:"Familia Itens",id:"mr_familia_itens_projeto",permissao:"familia_itens",translate:"home.crm_familia_item",click:function(){View.load("familia_itens/listar",function(o,i){},View.ABA.SIM)}},{nome:"Unidade de Medida",id:"mr_unidade_medida_projeto",permissao:"unidade_medida",click:function(){View.load("unidade_medida/listar",function(o,i){i.show()},View.ABA.SIM)}}]},{nome:"Relatórios",id:"mj_relatorios",permissao:null,click:null,submenus:[{nome:"Horas Gastas",id:"mj_relatorio_horas_gastas",permissao:"gestao_projetos",click:function(){View.load("projeto/relatorio_horas",function(o,i){i.show()},View.ABA.MULTIPLAS)}},{nome:"Horas Previstas X Realizadas",id:"mj_relatorio_horas_previstas_realizadas",permissao:"gestao_projetos",click:function(){View.load("projeto/relatorio_horas_previstas_x_realizadas",function(o,i){},View.ABA.MULTIPLAS)}},{nome:"Despesas Cliente",id:"mj_relatorio_despesas_cliente",permissao:"despesas_cliente",click:function(){View.load("projeto/despesas_cliente",function(o,i){i.show()},View.ABA.MULTIPLAS)}},{nome:"Posicionamento do Projeto",id:"mj_relatorio_posicionamento_projeto",permissao:"posicionamento_projeto",click:function(){View.load("projeto/posicionamento_projeto",function(o,i){i.show()},View.ABA.MULTIPLAS)}},{nome:"Consulta de Apontamentos",id:"mj_relatorio_apontamento_tecnico",permissao:"relatorio_apontamento_tecnico",click:function(){View.load("projeto/relatorio_apontamento_x_tecnico",function(o,i){},View.ABA.MULTIPLAS)}},{nome:"Alocação de Executores",id:"mj_alocacao_executores_projeto",click:function(){View.loadReact(views.alocacaoExecutoresProjeto.ListagemAlocacoes.default,{},function(o,i){},View.ABA.SIM)}}]}]},{nome:"PDCA - 5W2H",id:"modulo_pdca",icone:"assets/img/icones_bp/list_alt.svg",permissao:"pdca",click:function(){View.loadReact(views.pdca.Listagem.default,{},function(o){},View.ABA.SIM)},submenus:[{nome:"Listagem",id:"mj_listagem_pdca",permissao:"pdca",click:function(){View.loadReact(views.pdca.Listagem.default,{},function(o){},View.ABA.SIM)}},{nome:"Categorias de PDCA",id:"mj_categorias_pdca",permissao:"categorias_pdca",click:function(){View.loadReact(views.pdca.ListagemCategoriasPDCA.default,{},function(o){},View.ABA.SIM)}}]},{nome:"CRM",id:"modulo_crm",icone:"assets/img/icones_bp/people.svg",permissao:"gestao_relacionamento",translate:"home.gestao_relacionamento",click:function(){View.load("oportunidade/listar",function(o,i){i.show()},View.ABA.SIM)},submenus:[{nome:"Oportunidades",id:"mr_oportunidades",permissao:"oportunidade",click:function(){View.load("oportunidade/listar",function(o,i){i.show()},View.ABA.SIM)}},{nome:"Aprovação de Orçamentos",id:"mr_aprovacao_orcamentos",permissao:"aprovacao_orcamentos",click:function(){View.load("orcamento/listar",function(o,i){i.show()},View.ABA.SIM)}},{nome:"Carteira de Entidades do Representantes",id:"mr_carteira_representantes",permissao:"gestao_relacionamento",click:function(){View.load("representante/carteira_entidades",function(o,i){i.show()},View.ABA.SIM)}},{nome:"Itens",permissao:null,click:null,submenus:[{nome:"Itens",id:"mr_itens_crm",permissao:"item",translate:"home.crm_item",click:function(){View.load("itens/listar",function(o,i){i.show(!0)},View.ABA.SIM)}},{nome:"Tipo Itens",id:"mr_tipo_itens_crm",permissao:"tipo_itens",translate:"home.crm_tipo_item",click:function(){View.load("tipo_itens/listar",function(o,i){},View.ABA.SIM)}},{nome:"Grupo Itens",id:"mr_grupo_itens_crm",permissao:"grupo_itens",translate:"home.crm_grupo_item",click:function(){View.load("grupo_itens/listar",function(o,i){},View.ABA.SIM)}},{nome:"Familia Itens",id:"mr_familia_itens_crm",permissao:"familia_itens",translate:"home.crm_familia_item",click:function(){View.load("familia_itens/listar",function(o,i){},View.ABA.SIM)}},{nome:"Cores de itens",id:"mr_cores_itens",permissao:"cores_itens",click:function(){View.load("cores_itens/listar",function(o,i){},View.ABA.SIM)}}]},{nome:"Cadastros",id:"mr_cadastros",permissao:null,click:null,submenus:[{nome:"Organizações",id:"mr_organizacoes",permissao:["prospect","prospect_somente_leitura"],click:function(){View.loadReact(views.prospects.Listagem.default,{},function(o){},View.ABA.SIM)}},{nome:"Contatos",id:"mr_contatos",permissao:"contatos",click:function(){View.load("contato/listar",function(o,i){},View.ABA.SIM)}},{nome:"Funil de Vendas",id:"mr_funil_vendas",permissao:"funil_vendas",click:function(){View.load("funil_vendas/listar",function(o,i){},View.ABA.SIM)}},{nome:"Tabela de Preços",id:"mr_tabela_precos",permissao:"tabela_precos",click:function(){View.load("tabela_precos/listar",function(o,i){i.show()},View.ABA.SIM)}},{nome:"Tipo de Oportunidade",id:"mr_tipo_oportunidade",permissao:"tipo_oportunidade",click:function(){View.load("tipo_oportunidade/listar",function(o,i){i.show()},View.ABA.SIM)}},{nome:"Representantes",id:"mr_representantes",permissao:"representantes",click:function(){View.load("representante/listar",function(o,i){},View.ABA.SIM)}},{nome:"Regiões de Vendas",id:"mr_regioes_vendas",permissao:"regioes_vendas",click:function(){View.load("regiao_vendas/listar",function(o,i){i.show()},View.ABA.SIM)}},{nome:"Segmentos",id:"mr_segmentos",permissao:"segmentos",click:function(){View.load("segmento/listar",function(o,i){},View.ABA.SIM)}},{nome:"Tipo Evento Agenda",id:"mr_tipo_agenda_oportunidade",permissao:"tipo_agenda_oportunidade",click:function(){View.load("tipo_agenda_oportunidade/listar",function(o,i){i.show()},View.ABA.SIM)}},{nome:"Funções do Contato",id:"mr_funcao_contato",permissao:"funcao",click:function(){View.load("funcao/listar",function(o,i){i.show()},View.ABA.SIM)}},{nome:"Condição de Pagamento",id:"mr_condicao_pagamento",permissao:"condicao_pagamento",click:function(){View.load("condicao_pagamento/listar",function(o,i){i.show()},View.ABA.SIM)}},{nome:"Unidade de Medida",id:"mr_unidade_medida_crm",permissao:"unidade_medida",click:function(){View.load("unidade_medida/listar",function(o,i){i.show()},View.ABA.SIM)}},{nome:"Status de Oportunidade",id:"mr_status_oportunidade",permissao:"status_oportunidade",click:function(){View.load("status_oportunidade/listar",function(o,i){i.show()},View.ABA.SIM)}},{nome:"Motivos de perda de negócio",id:"mr_motivo_perda_negocio",permissao:"motivo_perda_negocio",click:function(){View.load("motivo_perda_negocio/listar",function(o,i){i.show()},View.ABA.SIM)}},{nome:"Origem da Oportunidade",id:"mr_oportunidade_origem",permissao:"oportunidade_origem",click:function(){View.load("origem_oportunidade/listar",function(o,i){i.show()},View.ABA.SIM)}},{nome:"Metas",id:"mr_metas_vendas",permissao:"metas_vendas",click:function(){View.load("metas_vendas/listar",function(o,i){i.show()},View.ABA.SIM)}},{nome:"Templates Word de Orçamentos",id:"mr_templates_word_orcamento",permissao:"orcamento_template_word",click:function(){View.loadReact(window.views.orcamento_template_word.OrcamentoTemplateWordListagem.default,{},function(o){},View.ABA.SIM)}},{nome:"Tipo de Moeda",id:"mr_tipo_moeda",permissao:"tipo_moeda",click:function(){View.loadReact(views.tipo_moeda.Listagem.default,{},function(o){},View.ABA.SIM)}}]},{nome:"Dashboards",id:"mr_dashboards",permissao:null,click:null,submenus:[{nome:"Vendas",id:"mr_dashboard_vendas",permissao:"dashboard_vendas",click:function(){View.load("oportunidade/dashboard_vendas",function(o,i){i.show()},View.ABA.SIM)}},{nome:"Representantes",id:"mr_dashboard_representantes",permissao:"dashboard_representantes",click:function(){View.load("oportunidade/dashboard",function(o,i){i.show()},View.ABA.SIM)}},{nome:"Entidades",id:"mr_dashboard_entidades",permissao:"dashboard_clientes",click:function(){View.load("oportunidade/dashboard_entidade",function(o,i){i.show()},View.ABA.SIM)}}]}]},{nome:void 0!==App.lang.home.rede_social?App.lang.home.rede_social:"Social",id:"modulo_social",icone:"assets/img/icones_bp/social.svg",permissao:"rede_social",click:function(){View.load("pagina_inicial/listar",function(o,i){i.show(App.sessao.usuario_id)},View.ABA.SIM)},submenus:[{nome:"Perfil",id:"ms_perfil",permissao:"rede_social",click:function(){View.load("perfil/listar",function(o,i){i.show(App.sessao.usuario_id)},View.ABA.SIM)}},{nome:"Página Inicial",id:"ms_pagina_inicial",permissao:"rede_social",click:function(){View.load("pagina_inicial/listar",function(o,i){i.show(App.sessao.usuario_id)},View.ABA.SIM)}},{nome:"Grupos",id:"ms_grupos",permissao:"grupo_rede_social",click:function(){View.load("grupo_rede_social/listar",function(o){},View.ABA.SIM)}}]},{nome:"Cubo",id:"modulo_cubo",icone:"assets/img/icones_bp/cubo.svg",permissao:"gestao_cubos",click:function(){View.loadReact(window.views.cubo.Listagem.default,{},function(o){},View.ABA.SIM)}}],App.sessao.dados.tipo!=USUARIO_TIPO.ANALISTA)for(var i in o.menu)if("modulo_central_pendencias"==o.menu[i].id){o.menu.splice(i,1);break}if(App.verifica_permissao(App.sessao.dados.empresa_filial_id,"ead_plataforma")&&parseInt(App.sessao.dados.ead_plataforma_aluno_id,10)>0){var e={nome:"EAD Plataforma",icone:"assets/img/icones_bp/ead.svg",permissao:null,click:function(){WS.get({route:"eadplataforma/login/",data:{},func_response:function(o){void 0!==o.link&&o.link&&window.open(o.link)}})},submenus:[{nome:"Credenciais EAD Plataforma",id:"mf_dados_usuario_eadplataforma",permissao:null,click:function(){View.load("ead_plataforma/credenciais_ead_plataforma",function(o,i){i.show()})}}]};o.menu.push(e)}$(App.menu).each(function(i,e){if("S"==e.menu_personalizado_ativo){var a=null!==e.url_menu_img&&""!==e.url_menu_img?e.url_menu_img:"assets/img/integracao.svg",s=e.imagem_id?WS_URI+"documento/midia/?&tamanho=20&documento_id="+e.imagem_id+"&token_midia="+App.sessao.token_midia:a;const i=e.url_menu_personalizado.replace("{usuario_id}",App.sessao.dados.usuario_id).replace("{usuario_email}",App.sessao.dados.email);var n={nome:e.nome,icone:s,permissao:e.permissao_necessaria?e.permissao_necessaria:null,click:function(){"S"==e.aba_navegador?window.open(i):View.navegador(i,e.nome,View.ABA.SIM)},submenus:[]};o.menu.push(n)}}),o.menu.push({nome:"Configurações",id:"modulo_configuracoes",icone:"assets/img/icones_bp/config.svg",permissao:null,translate:"home.configuracoes",click:null,submenus:[{nome:App.sessao.dados.nome,id:"mf_usuario",permissao:null,click:null,submenus:[{nome:"Dados do Usuário",id:"mf_dados_usuario",permissao:null,translate:"home.dados_usuario",click:function(){View.load("opcoes_usuario/detalhes",function(o){},View.ABA.SIM)}},{nome:"Log out  ",id:"mf_logout",permissao:null,click:function(){App.logout()}}]},{nome:"Modelagens",id:"mb_modelagens_configuracao",permissao:null,click:null,submenus:[{nome:"Modelagem de Formulários",id:"mb_modelagem_formularios_configuracao",permissao:"formulario",click:function(){View.loadReact(views.modelagemFormulario.Listagem.default,{},function(o){},View.ABA.SIM)}}]},{nome:"Genéricos",id:"mf_genericos",permissao:null,click:null,submenus:[{nome:"Mural",id:"mf_mural_mensagem",permissao:"mural_mensagem",click:function(){View.load("mural_mensagem/listar",function(o){},View.ABA.SIM)}},{nome:"Clientes",id:"mf_clientes",permissao:["cliente","cliente_somente_leitura"],click:function(){View.loadReact(views.clientes.Listagem.default,{},function(o){},View.ABA.SIM)}},{nome:"Organizações",id:"mf_organizacoes",permissao:["prospect","prospect_somente_leitura"],click:function(){View.loadReact(views.prospects.Listagem.default,{},function(o,i){},View.ABA.SIM)}},{nome:"Fornecedores",id:"mf_fornecedores",permissao:["fornecedor","fornecedor_somente_leitura"],click:function(){View.loadReact(views.fornecedores.Listagem.default,{},function(o){},View.ABA.SIM)}},{nome:"Empresas",id:"mf_empresas",permissao:"empresa",click:function(){View.loadReact(views.empresa.Listagem.default,{},function(o){},View.ABA.SIM)}},{nome:"Municípios",id:"mf_municipios",permissao:"municipio",click:function(){View.load("municipio/listar",function(o){},View.ABA.SIM)}},{nome:"País",id:"mf_pais",permissao:"pais",click:function(){View.load("pais/listar",function(o){},View.ABA.SIM)}},{nome:"Compartilhamento de Tabelas",id:"mf_compartilhamento_tabelas",permissao:"compartilhamento_tabelas",click:function(){View.load("parametro_compartilhado/listar",function(o,i){i.show()},View.ABA.SIM)}}]},{nome:"Usuários",id:"mf_funcoes_usuarios",permissao:null,click:null,submenus:[{nome:"Usuários",id:"mf_usuarios",permissao:"usuario",click:function(){View.load("usuario/listar",function(o){},View.ABA.SIM)}},{nome:"Grupo de Usuários",id:"mf_grupo_usuarios",permissao:"grupo_usuarios",click:function(){View.loadReact(views.grupo_usuarios.Listagem.default,{},function(o){},View.ABA.SIM)}},{nome:"Supervisores",id:"mf_supervisores",permissao:"supervisor",click:function(){View.load("supervisor/listar",function(o){},View.ABA.SIM)}},{nome:"Substituto",id:"mf_substituto",permissao:"substituto",click:function(){View.load("substituto/listar",function(o){},View.ABA.SIM)}},{nome:"Áreas",id:"mf_areas",permissao:"areas",click:function(){View.load("area/listar",function(o){},View.ABA.SIM)}},{nome:"Calendários de trabalho",id:"mf_calendario_trabalho",permissao:"calendario_trabalho",click:function(){View.load("calendario_trabalho/listar",function(o){},View.ABA.SIM)}},{nome:"Feriados",id:"mf_feriado",permissao:"feriados",click:function(){View.load("feriado/listar",function(o){},View.ABA.SIM)}},{nome:"Cargos de Usuários",id:"mf_cargos_usuarios",permissao:"cargos_usuarios",click:function(){View.loadReact(window.views.cargo.ListagemCargo.default,{},function(o){},View.ABA.SIM)}}]},{nome:"Integração",id:"mf_integracao",permissao:null,click:null,submenus:[{nome:"Conexão de Integração",id:"mf_conexao_integracao",permissao:"conexao_integracao",click:function(){View.load("conexao_integracao/listar",function(o){},View.ABA.SIM)}},{nome:"Consulta de Integração",id:"mf_consulta_integracao",permissao:"conexao_integracao",click:function(){View.loadReact(views.consulta_integracao.Listagem.default,{},function(o){},View.ABA.SIM)}},{nome:"Servidor LDAP",id:"mf_servidor_ldap",permissao:"servidor_ldap",click:function(){View.load("servidor_ldap/listar",function(o,i){i.show()},View.ABA.SIM)}},{nome:"Importação de Usuários",id:"mf_importar_servidor_ad",permissao:"importacao_ldap",click:function(){View.load("importar_ad/listar",function(o){},View.ABA.SIM)}},{nome:"Clicksign Assinaturas",id:"mf_clicksign_assinaturas",permissao:"clicksign_configuracoes",click:function(){View.load("clicksign/configuracoes",function(o){},View.ABA.SIM)}},{nome:"Certsign Assinaturas",id:"mf_certsign_assinaturas",permissao:"certsign_configuracoes",click:function(){View.load("certsign/configuracoes",function(o){},View.ABA.SIM)}},{nome:"D4Sign Assinaturas",id:"mf_d4sign_assinaturas",permissao:"d4sign_configuracoes",click:function(){View.load("d4sign/configuracoes",function(o){},View.ABA.SIM)}},{nome:"EAD Plataforma",id:"mf_ead_plataforma",permissao:"ead_plataforma_configuracoes",click:function(){View.load("ead_plataforma/configuracoes",function(o){},View.ABA.SIM)}},{nome:"Menu Personalizado",id:"mf_menu_personalizado",permissao:"menu_personalizado",click:function(){View.loadReact(views.menuPersonalizado.ListagemMenuPersonalizado.default,{},function(o,i){},View.ABA.SIM)}},{nome:"Aplicativos Conectados (OAuth Client)",id:"mf_menu_oauth_client",permissao:"oauth_client",click:()=>{View.loadReact(views.oauth_client.Listagem.default,{},o=>{},View.ABA.SIM)}}]},{nome:"Sistema",id:"mf_sistema",permissao:null,click:null,submenus:[{nome:"Locais de armazenamento",tags:"local armazenamento locais",id:"mf_local_armazenamento",permissao:"local_armazenamento",click:function(){View.load("local_armazenamento/listar",function(o){},View.ABA.SIM)}},{nome:"Saída de e-mails",tags:"saida email mail fila",id:"mf_saida_emails",permissao:"emails",click:function(){View.load("email_job/listar",function(o){},View.ABA.SIM)}},{nome:"Configuração de e-mail",id:"mf_configuracao_email",tags:"configuracao email mail smtp pop imap",permissao:"configuracao_email",click:function(){View.load("configuracao_email/detalhes",function(o,i){i.show()},View.ABA.SIM)}},{nome:"Job Scheduler",tags:"agendador tarefas cron",id:"mf_job_scheduler",permissao:"job_scheduler",click:function(){View.load("job_scheduler/listar",function(o){},View.ABA.SIM)}},{nome:"Temas",id:"mf_temas",permissao:"temas",click:function(){View.loadReact(views.temas.SelecionarTema.default,{},function(o,i){},View.ABA.SIM)}},{nome:"Sessões",id:"mf_sessoes",permissao:"sessoes",click:function(){View.load("sessao/listar",function(o){},View.ABA.SIM)}}]}]})}});