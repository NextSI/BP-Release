define(["react","react-dom","./../componentes_react/InputCEP"],function(o,i,e){return function(t){"use strict";var a=this;this.html_id=t,this.dialog=$("#"+this.html_id),this.title="Fornecedor",this.onclose=null,this.onsave=null,this.edt_nome=this.dialog.find(".edt_nome"),this.edt_razao_social=this.dialog.find(".edt_razao_social"),this.edt_email_agenda=this.dialog.find(".edt_email_agenda"),this.edt_dominio_interacao=this.dialog.find(".edt_dominio_interacao"),this.edt_telefone1=this.dialog.find(".edt_telefone1"),this.edt_telefone2=this.dialog.find(".edt_telefone2"),this.edt_telefone3=this.dialog.find(".edt_telefone3"),this.edt_telefone4=this.dialog.find(".edt_telefone4"),this.files=this.dialog.find(".files"),this.carrega_img=this.dialog.find(".carrega_img"),this.edt_codigo=this.dialog.find(".edt_codigo"),this.edt_unidade=this.dialog.find(".edt_unidade"),this.chk_bloqueado=this.dialog.find(".chk_bloqueado"),this.cbo_tipo_pessoa=this.dialog.find(".cbo_tipo_pessoa"),this.cbo_tipo_cadastro=this.dialog.find(".cbo_tipo_cadastro"),this.edt_endereco=this.dialog.find(".edt_endereco"),this.edt_numero=this.dialog.find(".edt_numero"),this.edt_complemento=this.dialog.find(".edt_complemento"),this.edt_bairro=this.dialog.find(".edt_bairro"),this.edt_municipio=this.dialog.find(".edt_municipio"),this.btn_municipio=this.dialog.find(".btn_municipio"),this.edt_pais=this.dialog.find(".edt_pais"),this.btn_pais=this.dialog.find(".btn_pais"),this.div_componente_cnpj=this.dialog.find(".div_componente_cnpj"),this.edt_inscricao_estadual=this.dialog.find(".edt_inscricao_estadual"),this.edt_id_estrangeiro=this.dialog.find(".edt_id_estrangeiro"),this.edt_incricao_municipal=this.dialog.find(".edt_incricao_municipal"),this.cbo_tipo_orgao=this.dialog.find(".cbo_tipo_orgao"),this.edt_data_fundacao=this.dialog.find(".edt_data_fundacao"),this.edt_site=this.dialog.find(".edt_site"),this.edt_email_principal=this.dialog.find(".edt_email_principal"),this.edt_observacoes=this.dialog.find(".edt_observacoes"),this.edt_uf=this.dialog.find(".edt_uf"),this.razao_social_obrig=this.dialog.find(".razao_social_obrig"),this.nome_fantasia_obrig=this.dialog.find(".nome_fantasia_obrig"),this.tipo_obrig=this.dialog.find(".tipo_obrig"),this.endereco_obrig=this.dialog.find(".endereco_obrig"),this.numero_obrig=this.dialog.find(".numero_obrig"),this.bairro_obrig=this.dialog.find(".bairro_obrig"),this.municipio_obrig=this.dialog.find(".municipio_obrig"),this.pais_obrig=this.dialog.find(".pais_obrig"),this.cnpj_obrig=this.dialog.find(".cnpj_obrig"),this.inscricao_estadual_obrig=this.dialog.find(".inscricao_estadual_obrig"),this.menu_geral=this.dialog.find(".menu_geral"),this.menu_contatos=this.dialog.find(".menu_contatos"),this.aba_geral=this.dialog.find(".aba_geral"),this.aba_contatos=this.dialog.find(".aba_contatos"),this.menu_formulario_personalizado=this.dialog.find(".menu_formulario_personalizado"),this.aba_formulario_personalizado=this.dialog.find(".aba_formulario_personalizado"),this.divFormularioPersonalizado=this.dialog.find(".divFormularioPersonalizado"),this.tab_listagem_contato=this.dialog.find(".tab_listagem_contato"),this.btn_incluir_contato=this.dialog.find(".btn_incluir_contato"),this.btn_cancelar=this.dialog.find(".btn_cancelar"),this.btn_salvar=this.dialog.find(".btn_salvar"),this.btn_excluir=this.dialog.find(".btn_excluir"),this.btn_alterar_logo=this.dialog.find(".btn_alterar_logo"),this.btn_remover_logo=this.dialog.find(".btn_remover_logo"),this.cbo_contatos=this.dialog.find(".cbo_contatos"),this.cbo_classificacao=this.dialog.find(".cbo_classificacao"),this.div_componente_cep=this.dialog.find(".div_componente_cep"),this.inputCEP=o.createElement(e,null,null);var n={aoAlterar:(o,i)=>{window.functions.CNPJ.preencherCampos(a,i)}};i.render(o.createElement(window.components.TextBoxCPFCNPJ.default,n),a.div_componente_cnpj[0]),this.btn_historico_entidade=this.dialog.find(".btn_historico_entidade"),this.fornecedor_codigo_automatico=!1,this.logo_id=null,this.fornecedor_id=null,this.tipo=null,this.cod_municipio=null,this.cod_pais=null,this.codigo=null,this.tipo_operacao=null,this.OPERACAO_CRIAR_UNIDADE=4,this.PESSOA_JURIDICA="J",this.arr_listagem_contatos=[],this.arr_contatos=[],this.arr_contatos_filtrados=[],this.formularioGetPostParams=null,this.formularioValidar=null,this.formularioMain={},this.componenteCnpjInstance=a.div_componente_cnpj.children().dxTextBox("instance"),this.show=function(o,e,t,n){a.aba_geral.attr("id","aba_geral"+a.html_id),a.aba_contatos.attr("id","aba_contatos"+a.html_id),a.aba_formulario_personalizado.attr("id","aba_formulario_personalizado"+a.html_id),a.menu_geral.attr("href","#"+a.aba_geral.attr("id")),a.menu_contatos.attr("href","#"+a.aba_contatos.attr("id")),a.menu_formulario_personalizado.attr("href","#"+a.aba_formulario_personalizado.attr("id")),a.get_parametros(),a.tipo=e,a.codigo=t,set_datepicker(a.edt_data_fundacao),i.render(a.inputCEP,a.div_componente_cep[0]),a.inputCEP.props.setCampoEndereco(a.edt_endereco),a.inputCEP.props.setCampoBairro(a.edt_bairro),a.inputCEP.props.setCampoCidade(a.edt_municipio,a.edt_uf,a.alterar_cod_municipio),a.inputCEP.props.setCampoPais(a.edt_pais,a.alterar_cod_pais),a.btn_historico_entidade.tooltip({title:"Histórico do cliente",placement:"auto"}),void 0!==o&&o?(a.fornecedor_id=o,a.preencher()):(App.titulo_aba(a.html_id,"Fornecedor - Novo"),void 0!==n&&"undefined"!=n&&null!=n&&(a.edt_nome.val(n),a.edt_razao_social.val(n),set_focus(a.edt_nome)),a.componenteCnpjInstance.option("value","")),create_combobox(a.cbo_contatos,a.render_select_multi_column),a.btn_novo_cadastro(),a.render_formulario()},this.alterar_cod_municipio=function(){a.cod_municipio=a.inputCEP.props.CodigoMunicipio},this.alterar_cod_pais=function(){a.cod_pais=a.inputCEP.props.CodigoPais},this.btn_novo_cadastro=function(){var o=a.cbo_contatos.parent(),i=o.find(".edt_combobox");i.attr("placeholder","Digite o Nome"),o.find(".btn_novo").click(function(){View.load("contato/detalhes",function(o,e){e.onsave=a.relacionar_novo_contato,e.show(null,FORMULARIO.NOVO,null,i.val(),"F",a.fornecedor_id)},View.ABA.MULTIPLAS)}),i.keypress(function(o){if(13==o.keyCode){var i=a.cbo_contatos.parent().find(".ncbo_scroll").find(".row_selected").attr("id_registro");a.relacionar_contato_existente(i)}})},this.relacionar_novo_contato=function(o){var i=a.cbo_contatos.parent(),e=i.find(".edt_combobox");i.find(".btn_novo").addClass("hidden"),e.val(""),set_focus(e),o.contato_id=o.id,a.arr_contatos.push(o),a.render_contatos()},this.render_select_multi_column=function(o){var i=a.cbo_contatos.parent(),e=i.find(".edt_combobox");WS.get("contato/listar/",{nome:e.val()},function(e){limpar_combobox(a.cbo_contatos),a.arr_listagem_contatos=e,$(e).each(function(o,i){var e=[];e.Nome=i.nome,e.Telefone=i.telefone1,e["Telefone 2"]=i.telefone2,add_option_combobox(a.cbo_contatos,o,i.contato_id,e)}),i.find(".ul_row").click(function(){var o=$(this).parent().attr("id_registro");a.relacionar_contato_existente(o)}),e.length>0?o(!0):o(!1)})},this.relacionar_contato_existente=function(o){var i=a.cbo_contatos.parent(),e=i.find(".edt_combobox");if(1==i.find(".btn_novo").hasClass("hidden")){var t=!1;if($(a.arr_contatos).each(function(i,e){e.contato_id==o&&(t=!0)}),t)e.val(""),set_focus(e);else{var n=new Object;n.contato_id=o,n.removido=!1,$(a.arr_listagem_contatos).each(function(o,i){i.contato_id==n.contato_id&&(n.email=i.email,n.nome=i.nome,n.telefone1=i.telefone1,n.telefone2=i.telefone2,n.telefone3=i.telefone3,n.telefone4=i.telefone4)}),a.arr_contatos.push(n),a.render_contatos(),setTimeout(function(){e.val(""),set_focus(e)},100)}}},this.get_parametros=function(){WS.get("fornecedor/get_parametros/",null,function(o){switch(!App.sessao.dados.admin&&App.verifica_permissao(App.sessao.dados.empresa_filial_id,"fornecedor_somente_leitura")&&(a.tipo=FORMULARIO.VISUALIZAR),a.tipo){case FORMULARIO.NOVO:a.btn_salvar.show(),a.btn_excluir.hide(),a.permite_alterar(!0),a.cod_pais="1058",a.edt_pais.val("BRASIL");break;case FORMULARIO.EDITAR:a.btn_salvar.show(),a.btn_excluir.hide(),a.permite_alterar(!0);break;case FORMULARIO.VISUALIZAR:a.btn_salvar.hide(),a.btn_excluir.hide(),a.permite_alterar(!1);break;case FORMULARIO.EXCLUIR:a.btn_salvar.hide(),a.btn_excluir.show(),a.permite_alterar(!1);break;case FORMULARIO.CRIAR_UNIDADE:a.btn_salvar.show(),a.btn_excluir.hide(),a.permite_alterar(!0),a.tipo_operacao=a.OPERACAO_CRIAR_UNIDADE,a.edt_codigo.val(a.codigo),a.cod_pais="1058",a.edt_pais.val("BRASIL")}a.fornecedor_codigo_automatico="S"==o.fornecedor_codigo_automatico,!1!==o.fornecedor_obrig_nome_fantasia&&"N"!=o.fornecedor_obrig_nome_fantasia||a.nome_fantasia_obrig.remove(),!1!==o.fornecedor_obrig_razao_social&&"N"!=o.fornecedor_obrig_razao_social||a.razao_social_obrig.remove(),!1!==o.fornecedor_obrig_tipo&&"N"!=o.fornecedor_obrig_tipo||a.tipo_obrig.remove(),a.inputCEP.props.set_cepObrigatorio(!0===o.fornecedor_obrig_cep||"S"==o.fornecedor_obrig_cep),!1!==o.fornecedor_obrig_endereco&&"N"!=o.fornecedor_obrig_endereco||a.endereco_obrig.remove(),!1!==o.fornecedor_obrig_numero&&"N"!=o.fornecedor_obrig_numero||a.numero_obrig.remove(),!1!==o.fornecedor_obrig_bairro&&"N"!=o.fornecedor_obrig_bairro||a.bairro_obrig.remove(),!1!==o.fornecedor_obrig_municipio&&"N"!=o.fornecedor_obrig_municipio||a.municipio_obrig.remove(),!1!==o.fornecedor_obrig_pais&&"N"!=o.fornecedor_obrig_pais||a.pais_obrig.remove(),!1!==o.fornecedor_obrig_cnpj&&"N"!=o.fornecedor_obrig_cnpj||a.cnpj_obrig.remove(),!1!==o.fornecedor_obrig_inscricao_estadual&&"N"!=o.fornecedor_obrig_inscricao_estadual||a.inscricao_estadual_obrig.remove(),a.permite_alterar_chave()})},this.close=function(){void 0!==a.onclose&&a.onclose&&a.onclose()},this.unload=function(){a.close(),View.unload(this.html_id)},this.permite_alterar=function(o){a.files.prop("disabled",!o),a.edt_nome.prop("readonly",!o),a.edt_razao_social.prop("readonly",!o),a.edt_email_agenda.prop("readonly",!o),a.edt_dominio_interacao.prop("readonly",!o),a.edt_telefone1.prop("readonly",!o),a.edt_telefone2.prop("readonly",!o),a.edt_telefone3.prop("readonly",!o),a.edt_telefone4.prop("readonly",!o),a.edt_codigo.prop("readonly",!o),a.edt_unidade.prop("readonly",!o),a.chk_bloqueado.prop("readonly",!o),a.cbo_tipo_pessoa.prop("disabled",!o),a.cbo_tipo_cadastro.prop("disabled",!o),a.cbo_classificacao.prop("disabled",!o),a.inputCEP.props.setCampoCepLeitura(!o),a.edt_endereco.prop("readonly",!o),a.edt_numero.prop("readonly",!o),a.edt_complemento.prop("readonly",!o),a.edt_bairro.prop("readonly",!o),a.edt_municipio.prop("readonly",!o),a.btn_municipio.prop("disabled",!o),a.edt_pais.prop("readonly",!o),a.btn_pais.prop("disabled",!o),a.componenteCnpjInstance.option("readOnly",!o),a.edt_inscricao_estadual.prop("readonly",!o),a.edt_id_estrangeiro.prop("readonly",!o),a.edt_incricao_municipal.prop("readonly",!o),a.cbo_tipo_orgao.prop("disabled",!o),a.edt_data_fundacao.prop("readonly",!o),a.edt_site.prop("readonly",!o),a.edt_email_principal.prop("readonly",!o)},this.permite_alterar_chave=function(o){a.tipo==FORMULARIO.NOVO?(a.edt_codigo.prop("readonly",a.fornecedor_codigo_automatico),a.edt_unidade.prop("readonly",a.fornecedor_codigo_automatico)):a.tipo==FORMULARIO.EDITAR?(a.edt_codigo.prop("readonly",!0),a.edt_unidade.prop("readonly",!0),""==a.edt_codigo.val().trim()&&""==a.edt_unidade.val().trim()&&(a.edt_codigo.prop("readonly",!1),a.edt_unidade.prop("readonly",!1))):a.tipo==FORMULARIO.CRIAR_UNIDADE&&(a.edt_codigo.prop("readonly",!0),a.edt_unidade.prop("readonly",a.fornecedor_codigo_automatico))},this.preencher=function(){WS.get("fornecedor/objeto/",{fornecedor_id:a.fornecedor_id},function(o){null!=o.nome_fantasia&&App.titulo_aba(a.html_id,"Fornecedor - "+o.nome_fantasia.substring(0,15)),a.edt_nome.val(o.nome_fantasia),a.edt_razao_social.val(o.razao_social),a.edt_email_agenda.val(o.email_agenda),a.edt_dominio_interacao.val(o.dominio_interacao),a.edt_telefone1.val(o.telefone1),a.edt_telefone2.val(o.telefone2),a.edt_telefone3.val(o.telefone3),a.edt_telefone4.val(o.telefone4),a.edt_codigo.val(o.codigo),a.edt_unidade.val(o.unidade),a.chk_bloqueado.bootstrapSwitch("state","N"!=o.bloqueado),a.cbo_tipo_pessoa.val(o.tipo_pessoa),a.cbo_tipo_cadastro.val(o.tipo_cadastro),a.cbo_classificacao.val(o.classificacao),a.inputCEP.props.setCampoCep(o.cep),a.edt_endereco.val(o.endereco),a.edt_numero.val(o.numero),a.edt_complemento.val(o.complemento),a.edt_bairro.val(o.bairro),a.cod_municipio=o.cod_municipio,a.cod_pais=o.cod_pais,a.edt_municipio.val(o.municipio),a.edt_pais.val(o.pais),a.componenteCnpjInstance.option("value",o.cnpj),a.edt_inscricao_estadual.val(o.inscricao_estadual),a.edt_id_estrangeiro.val(o.id_estrangeiro),a.edt_incricao_municipal.val(o.inscricao_municipal),a.cbo_tipo_orgao.val(o.tipo_orgao),a.edt_uf.text(o.uf_sigla),a.arr_contatos=o.arr_contatos,a.render_contatos(),setTimeout(function(){set_datepicker(a.edt_data_fundacao,o.data_fundacao)},150),a.edt_site.val(o.site),a.edt_email_principal.val(o.email_principal),a.edt_observacoes.val(o.observacoes),null!=o.logo_id&&0==o.logo_id.excluido?"S"==o.logo_id.midia&&(a.logo_id=o.logo_id.id,a.carrega_img.attr("src",WS_URI+"documento/midia/?tipo=v&tamanho=60&documento_id="+o.logo_id.id+"&token_midia="+App.sessao.token_midia+"&considera_excluido=S&anticache="+(new Date).getTime())):a.carrega_img.attr("src","assets/img/img.svg"),a.permite_alterar_chave()})},this.preview_logo=function(o){var i=o.target.files[0],e=new FileReader;e.onload=function(o){a.carrega_img.attr("src",o.target.result)},e.readAsDataURL(i)},this.render_contatos=function(){var o=a.tab_listagem_contato.find("tbody"),i=o.find("tr:first");$(a.arr_contatos).each(function(o,i){void 0===a.arr_contatos[o].removido&&(a.arr_contatos[o].removido=!1)}),a.arr_contatos_filtrados=a.arr_contatos.filter(function(o){var i=!0;return!0===o.removido&&(i=!1),i}),a.tab_listagem_contato.find("tr:gt(1)").remove(),$(a.arr_contatos_filtrados).each(function(e,t){!function(e){var t=i.clone();t.removeAttr("template-row"),t.css("display","");var n=$(t.find("[template-field='nome']"));n.text(e.nome);var r=$(t.find("[template-field='email']"));r.text(e.email);var d=$(t.find("[template-field='telefone1']"));d.text(e.telefone1);var _=$(t.find("[template-field='telefone2']"));_.text(e.telefone2);var c=$(t.find("[template-field='telefone3']"));c.text(e.telefone3);var l=$(t.find("[template-field='telefone4']"));l.text(e.telefone4);var s=$(t.find(".btn_editar_contato")),p=function(){View.load("contato/detalhes",function(o,i){i.show(e.contato_id,FORMULARIO.EDITAR,function(o){n.text(o.nome),r.text(o.email),d.text(o.telefone1),_.text(o.telefone2),c.text(o.telefone3),l.text(o.telefone4)})},View.ABA.MULTIPLAS)};s.unbind("click"),s.click(p),t.dblclick(p);var f=$(t.find(".btn_deletar_contato"));f.unbind("click"),f.click(function(){alert_modal("Contato","Deseja remover o seguimento?","Remover",function(){$(a.arr_contatos).each(function(o,i){i.contato_id==e.contato_id&&(a.arr_contatos[o].removido=!0,a.render_contatos())})},!0)}),t.appendTo(o)}(t)}),App.aplicar_mascaras(o)},this.render_formulario=function(){i.render(o.createElement(window.components.FormularioPersonalizado.default,{main:a.formularioMain,abaFormularioPersonalizado:a.menu_formulario_personalizado,urlGet:"/formulario_fornecedor/get_formulario/",urlGetParams:{fornecedor_id:a.fornecedor_id},readOnly:a.tipo===FORMULARIO.VISUALIZAR,callbackGetPostParams:function(o){a.formularioGetPostParams=o},callbackValidar:function(o){a.formularioValidar=o}}),a.divFormularioPersonalizado[0])},this.btn_municipio.unbind("click"),this.btn_municipio.click(function(){View.load("municipio/selecionar",function(o,i){i.show(function(o){a.cod_municipio=o.cod_municipio,a.edt_municipio.val(o.municipio),a.edt_uf.text(o.uf_sigla)})})}),this.btn_pais.unbind("click"),this.btn_pais.click(function(){View.load("pais/selecionar",function(o,i){i.show(function(o){a.cod_pais=o.cod_pais,a.edt_pais.val(o.nome)})})}),this.btn_cancelar.unbind("click"),this.btn_cancelar.click(function(){a.unload()}),this.btn_salvar.unbind("click"),this.btn_salvar.click(function(){if(a.formularioValidar()){$.each(a.files,function(o,i){i.files.length>0&&(a.logo_id=i.files[0])});var o={fornecedor_id:a.fornecedor_id,nome:a.edt_nome.val(),razao_social:a.edt_razao_social.val(),email_agenda:a.edt_email_agenda.val(),dominio_interacao:a.edt_dominio_interacao.val(),telefone1:a.edt_telefone1.val(),telefone2:a.edt_telefone2.val(),telefone3:a.edt_telefone3.val(),telefone4:a.edt_telefone4.val(),logo_id:a.logo_id,codigo:a.edt_codigo.val(),unidade:a.edt_unidade.val(),bloqueado:a.chk_bloqueado.bootstrapSwitch("state"),tipo_pessoa:a.cbo_tipo_pessoa.val(),tipo_cadastro:a.cbo_tipo_cadastro.val(),classificacao:a.cbo_classificacao.val(),cep:a.inputCEP.props.CampoCep,endereco:a.edt_endereco.val(),numero:a.edt_numero.val(),complemento:a.edt_complemento.val(),bairro:a.edt_bairro.val(),cod_municipio:a.cod_municipio,cod_pais:a.cod_pais,cnpj:a.componenteCnpjInstance.option("value"),inscricao_estadual:a.edt_inscricao_estadual.val(),id_estrangeiro:a.edt_id_estrangeiro.val(),inscricao_municipal:a.edt_incricao_municipal.val(),tipo_orgao:a.cbo_tipo_orgao.val(),data_fundacao:get_datepicker(a.edt_data_fundacao),site:a.edt_site.val(),email_principal:a.edt_email_principal.val(),observacoes:a.edt_observacoes.val(),tipo_operacao:a.tipo_operacao,arr_contatos:JSON.stringify(a.arr_contatos_filtrados)};o=Object.assign(o,a.formularioGetPostParams()),WS.post("fornecedor/salvar",o,function(o){a.fornecedor_id=o.id,alert_saved(o.nome_fantasia+" salvo com sucesso"),void 0!==a.onsave&&a.onsave&&a.onsave(o,"F"),a.unload()},[a.btn_excluir,a.btn_salvar,a.btn_cancelar],null,!0)}}),this.btn_excluir.unbind("click"),this.btn_excluir.click(function(){WS.post("fornecedor/excluir",{fornecedor_id:a.fornecedor_id},function(o){alert_saved(o.nome_fantasia+" excluido com sucesso"),a.unload()})}),this.btn_historico_entidade.unbind("click"),this.btn_historico_entidade.click(function(){a.fornecedor_id&&View.load("entidade_historico/listar",function(o,i){i.show(a.fornecedor_id,"F")},View.ABA.MULTIPLAS)}),this.btn_alterar_logo.unbind("click"),this.btn_alterar_logo.click(function(){a.files.click()}),this.btn_remover_logo.unbind("click"),this.btn_remover_logo.click(function(){alert_modal("Remover Logo","Deseja remover este logo?","Remover",function(){WS.post("documento/excluir",{documento_id:a.logo_id,excluir:!0,excluir_foto_fornecedor:!0,fornecedor_id:a.fornecedor_id},function(o){a.carrega_img.attr("src","assets/img/img.svg"),alert_saved("Logo removido com sucesso")},null,null,!0)},!0)}),this.btn_incluir_contato.unbind("click"),this.btn_incluir_contato.click(function(){View.load("contato/selecionar",function(o,i){i.show(function(o){var i=!1;$(a.arr_contatos).each(function(e,t){t.contato_id==o.contato_id&&(i=!0,a.arr_contatos[e].removido=!1)}),i||a.arr_contatos.push(o),a.render_contatos()})})}),a.files[0].addEventListener("change",a.preview_logo,!1)}});