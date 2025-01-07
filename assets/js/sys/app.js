var App=function(){"use strict";var e=this;function a(e){e?setTimeout(function(){$("html").css("cursor","wait"),$(".btn_confirmar, .btn_salvar, .btn_aprovar, .btn_reprovar, .btn_carregar_mais, .btn_submenu, .btn_autenticar, .btn_nova_agenda, .btn_disable_wait, .btn_carregar_prev, .btn_carregar_next, .btn_aprovar_gerar_agenda").attr("disabled",!0).css("pointer-events","none"),$(".nav.nav-bp.steps").find("li").css("pointer-events","none")}):setTimeout(function(){$("html").css("cursor","auto"),$(window).trigger("mousemove"),$(".btn_confirmar, .btn_salvar, .btn_aprovar, .btn_reprovar, .btn_carregar_mais, .btn_submenu, .btn_autenticar, .btn_nova_agenda, .btn_disable_wait, .btn_carregar_prev, .btn_carregar_next, .btn_aprovar_gerar_agenda").attr("disabled",!1).css("pointer-events","auto"),$(".nav.nav-bp.steps").find("li").css("pointer-events","")})}App.version="24.64.2",App.commit_version="53b123f05413173f2b59eb9becb6f7e795a45525",App.temp={},App.PE={},App.sessao=null,App.sessao_expirada=!1,App.sessao_anonima_expirada=!1,App.logado=!1,App.fila=[],App.idioma=null,App.lang={},App.localhost=document.location&&document.location.hostname&&"localhost"==document.location.hostname,App.menu=null,App.menu_lateral=null,App.altura_menu=null,App.embedded=!1,App.form_debugger=!1,App.pressKeys={ctrl:!1,shift:!1,alt:!1},App.url_css_bootstrap="assets/css/sys/libs/bootstrap.min.css",this.ico_user_name=$(".ico_user_name"),this.lbl_user_name=$(".lbl_user_name"),this.carrega_img_perfil=$(".carrega_img_perfil"),this.lista_notificacoes=$(".lista_notificacoes"),this.ul_notificacoes=$(".ul_notificacoes"),this.count_notificacao_ler=$(".count_notificacao_ler"),App.img_perfil=e.carrega_img_perfil,App.require_paths={react:"assets/js/sys/libs/react.min","react-dom":"assets/js/sys/libs/react-dom.min","react-input-mask":"assets/js/sys/libs/react-input-mask.min","file-saver":"assets/js/sys/libs/file-saver.min"},App.requirejsConfig=function(){App.localhost?require.config({urlArgs:"v="+(new Date).getTime(),paths:App.require_paths,waitSeconds:30}):require.config({urlArgs:"v="+App.commit_version,paths:App.require_paths,waitSeconds:15})},App.requirejsConfig(),valid_onunload(!0),App.construct=function(){App.console_splash(),App.verificar_tema(),App.ajax_loader();var e="pt-BR";"undefined"!=typeof Storage&&localStorage.getItem("idioma")&&"undefined"!=localStorage.getItem("idioma")&&(e=localStorage.getItem("idioma")),new View;var a=App.hash_init();App.scroll_abas(),App.controle_teclas(),App.load_idioma(e,function(){a?View.load("login/entrar",function(e){$("#loaderInicial").remove(),$("#drawer").show()}):($("#loaderInicial").remove(),$("#drawer").show())})},App.bloqueio_navegacao_abas=function(){let e={pointerEvents:"",color:""};void 0!==App.temp.requisicoes&&Object.keys(App.temp.requisicoes).length>0&&(e={pointerEvents:"none",color:"rgba(0,0,0,0.3)"}),$("[aba-id-md5]").css(e)},App.ajax_loader=function(){var e=[];$(window).on("load",function(){a(!1)}),$(document).bind("ajaxSend",function(o,t,i){0!=Object.keys(e).length||document.hidden||(a(!0),$(".loader_bp").show(),$(".img_ajax_loader").show()),e[t.requestId]=i.url,App.temp.requisicoes=e,App.bloqueio_navegacao_abas()}).bind("ajaxComplete",function(o,t,i){delete e[t.requestId],App.temp.requisicoes=e,0==Object.keys(e).length&&(a(!1),$(".loader_bp").hide(),$(".img_ajax_loader").hide()),App.bloqueio_navegacao_abas()}),$.ajaxPrefilter(function(e,a,o){o.requestId="request"+Math.floor(99999999*Math.random()+1)})},App.renovar_sessao=function(e){App.logado=!0,WS.token=e.token,App.sessao=e,App.sessao_expirada=!1,e.app&&(document.title=e.app),App.sessao.dados.parametro_usuario=convert_parameter_to_json(App.sessao.dados.parametro_usuario),App.renovar_foto_usuario(),App.fila.map(function(e,a){WS[e.type](e.route,e.data,e.func_response,e.disable_buttons,e.final_route,e.ignore_error,e.uploadProgress,e.html_id)}),App.fila=[]},App.renovar_foto_usuario=function(){null!=App.sessao.dados.foto_id?e.carrega_img_perfil.attr("src",WS_URI+"documento/midia_imagens_menores/?documento_id="+App.sessao.dados.foto_id+"&tamanho=30&token_midia="+App.sessao.token_midia+"&anticache="+(new Date).getTime()).on("error",function(){$(this).css("padding","4px"),$(this).attr("src","assets/img/icones_bp/user.svg")}):(e.carrega_img_perfil.css("padding","4px"),e.carrega_img_perfil.attr("src","assets/img/icones_bp/user.svg"))},App.get_parametro_usuario=function(e){return App.sessao.dados&&App.sessao.dados.parametro_usuario?void 0===e&&null!==e?void 0===App.sessao.dados.parametro_usuario?{}:App.sessao.dados.parametro_usuario:void 0===App.sessao.dados.parametro_usuario[e]?{}:App.sessao.dados.parametro_usuario[e]:{}},App.remove_parametro_usuario=function(e,a){if(void 0!==App.sessao.dados.parametro_usuario&&null!=e&&void 0!==a){var o=App.sessao.dados.parametro_usuario[e];if(a instanceof Array&&a.length>0)for(var t=0;t<a.length;t++)void 0!==o&&void 0!==o[a[t]]&&delete o[a[t]];else void 0!==o[a]&&delete o[a];App.sessao.dados.parametro_usuario[e]=o,WS.post("parametro_usuario/set/",{nome:e,valor:JSON.stringify(o)},function(e){})}},App.set_parametro_usuario=function(e,a,o,t){if(void 0!==App.sessao.dados.parametro_usuario&&null!=e&&void 0!==a){if(void 0===t||!0===t){var i=""!=a&&" "!=a?spread({},App.sessao.dados.parametro_usuario[e],a):{};App.sessao.dados.parametro_usuario[e]=spread({},App.sessao.dados.parametro_usuario[e],i)}else App.sessao.dados.parametro_usuario[e]=""!=a&&" "!=a?spread({},a):{};WS.post("parametro_usuario/set/",{nome:e,valor:JSON.stringify(spread({},App.sessao.dados.parametro_usuario[e]))},function(a){App.sessao.dados.parametro_usuario[e]=a.valor,o&&"function"==typeof o&&o()})}},App.login=function(e){App.temp={},App.logado=!0,WS.token=e.token,App.sessao=e,App.temp.abertura_inicial_agenda=!0,App.sessao.dados.parametro_usuario=convert_parameter_to_json(App.sessao.dados.parametro_usuario);View.loadPEEspecificos(function(){e.app&&(document.title=e.app),App.verifica_licencas()&&(App.insertTab("home-empty","Home"),App.load_idioma(e.dados.idioma,function(){App.aplicar_menu_lateral(),App.hash_login()&&!LOGOUT||(App.removeTab("home-empty"),App.abrir_home())}),traduzir_devextreme(),App.load_menu(),DevExpress.localization.locale(navigator.language),DevExpress.config.default({defaultCurrency:"BRL",editorStylingMode:"filled"}),App.PE.Login_depois&&App.PE.Login_depois());$("#header").removeClass("hidden")})},App.login_anonimo=function(e){App.temp={},App.logado=!0,App.sessao=e,WS.login_anonimo=!0,WS.token=e.token,e.app&&(document.title=e.app),App.load_idioma("pt-BR"),traduzir_devextreme(),App.load_menu_anonimo(),DevExpress.localization.locale(navigator.language),DevExpress.config.default({defaultCurrency:"BRL",editorStylingMode:"filled"}),$("#header").removeClass("hidden")},App.aplicar_menu_lateral=function(){!0===App.embedded?App.PE.Menu_Lateral_destruir_depois&&App.PE.Menu_Lateral_destruir_depois():App.sessao.dados.menu_lateral&&require(["./assets/view/menu/menu_lateral"],function(e){App.menu_lateral=new e,App.menu_lateral.show()})},App.menu_add=function(e,a,o){if(!function e(a){if(void 0===o.id)return!1;for(var t=a.length;t--;){if(a[t].id==o.id)return!0;if(a[t].submenus&&e(a[t].submenus))return!0}return!1}(App.menu))for(var t=0;t<App.menu.length;t++)if(App.menu[t].id==e){if(void 0===a||!a)return void 0===App.menu[t].submenus&&(App.menu[t].submenus=[]),void App.menu[t].submenus.push(o);for(var i=0;i<App.menu[t].submenus.length;i++)if(App.menu[t].submenus[i].id==a)return void 0===App.menu[t].submenus[i].submenus&&(App.menu[t].submenus[i].submenus=[]),void App.menu[t].submenus[i].submenus.push(o)}},App.logout=function(){WS.abort_requests(),window.onbeforeunload=null,AUTH_TOKEN=!1,WS.post("logout/",null,function(){window.location.href=window.location.href+("#"==window.location.href.substr(-1)?"":"#")+"logout",location.reload()})},App.logout_anonimo=function(){WS.abort_requests(),window.onbeforeunload=null,WS.post("/logout_anonimo/",null,function(){location.reload()})},App.obter_token_publico=function(e,a){WS.post("login/obter_token_publico/",{documento_revisao_id:void 0!==a?a:null},function(a){var o=a.token_publico;e(o)})},App.manual=function(e){if(null!=App.idioma&&""!=App.idioma){var a=null;a=void 0===e?$("[manual]"):"string"==typeof e?$("#"+e+" [manual]"):$(e).find("[manual]"),$.each(a,function(e,a){if("string"==typeof(o=$(a).attr("manual"))){var o=App.manual_link(o);try{$(a).attr("href",o).attr("target","_blank").attr("role","button")}catch(e){console.log("Manual não encontrado: "+o)}}})}},App.manual_link=function(e){return WS_URI+"manual/?i="+App.idioma+"&p="+e},App.translate=function(e){if(null!=App.idioma&&""!=App.idioma){var a=null;a=void 0===e?$("[translate]"):"string"==typeof e?$("#"+e+" [translate]"):$(e).find("[translate]"),$.each(a,function(e,a){if("string"==typeof $(a).attr("translate")){var o="App.lang."+$(a).attr("translate");try{var t=$(a).attr("translate"),i=App.lang,n=t.split("."),s=function(e){if(n.length>0){if(i=i[e],n.splice(0,1),"string"==typeof i)return i;var a=s(n[0]);if(null!=a)return a}},r=s(n[0]);$(a).text(r)}catch(e){console.log("Tradução não encontrada: "+o)}}}),a=null,a=void 0===e?$("[translate-placeholder]"):"string"==typeof e?$("#"+e+" [translate-placeholder]"):$(e).find("[translate-placeholder]"),$.each(a,function(e,a){if("string"==typeof $(a).attr("translate-placeholder")){var o="App.lang."+$(a).attr("translate-placeholder");try{var t=$(a).attr("translate-placeholder"),i=App.lang,n=t.split("."),s=function(e){if(n.length>0){if(i=i[e],n.splice(0,1),"string"==typeof i)return i;var a=s(n[0]);if(null!=a)return a}},r=s(n[0]);$(a).attr("placeholder",r)}catch(e){console.log("Tradução não encontrada: "+o)}}}),a=null,a=void 0===e?$("[translate-title]"):"string"==typeof e?$("#"+e+" [translate-title]"):$(e).find("[translate-title]"),$.each(a,function(e,a){if("string"==typeof $(a).attr("translate-title")){var o="App.lang."+$(a).attr("translate-title");try{var t=$(a).attr("translate-title"),i=App.lang,n=t.split("."),s=function(e){if(n.length>0){if(i=i[e],n.splice(0,1),"string"==typeof i)return i;var a=s(n[0]);if(null!=a)return a}},r=s(n[0]);$(a).attr("title",r)}catch(e){console.log("Tradução não encontrada: "+o)}}}),a=null,a=void 0===e?$("[translate-label]"):"string"==typeof e?$("#"+e+" [translate-label]"):$(e).find("[translate-label]"),$.each(a,function(e,a){if("string"==typeof $(a).attr("translate-label")){var o="App.lang."+$(a).attr("translate-label");try{var t=$(a).attr("translate-label"),i=App.lang,n=t.split("."),s=function(e){if(n.length>0){if(i=i[e],n.splice(0,1),"string"==typeof i)return i;var a=s(n[0]);if(null!=a)return a}},r=s(n[0]);$(a).attr("label",r)}catch(e){console.log("Tradução não encontrada: "+o)}}}),a=null,a=void 0===e?$("[data-bp-column-header-translate]"):"string"==typeof e?$("#"+e+" [data-bp-column-header-translate]"):$(e).find("[data-bp-column-header-translate]"),$.each(a,function(e,a){if("string"==typeof $(a).attr("data-bp-column-header-translate")){var o="App.lang."+$(a).attr("data-bp-column-header-translate");try{var t=$(a).attr("data-bp-column-header-translate"),i=App.lang,n=t.split("."),s=function(e){if(n.length>0){if(i=i[e],n.splice(0,1),"string"==typeof i)return i;var a=s(n[0]);if(null!=a)return a}},r=s(n[0]);$(a).attr("data-bp-column-header",r)}catch(e){console.log("Tradução não encontrada: "+o)}}})}},App.abrir_home=function(){View.hide(),View.load("menu/home",function(e){1!=App.sessao.dados.admin&&App.sessao.dados.tipo!=USUARIO_TIPO.ANALISTA||App.listar_empresas()},View.ABA.SIM)},App.notificacao_celular=function(){View.load("notificacao_celular/listar",function(e,a){a.show()},View.ABA.SIM)},App.listar_empresas=function(){WS.get("empresa/listar/",null,function(e){for(var a=!1,o=0,t=function(e){App.temp.empresa=e.empresa_id,App.temp.nome_empresa=e.nome_fantasia,App.temp.logo_id=e.logo_id,App.identificar_representante(),App.sessao.dados.empresa_filial_id=e.empresa_id},i=0;i<e.length;i++){var n=e[i];e[i].visible=n.licenca_valida,e[i].icon=n.logo_id?WS_URI+"documento/midia/?tipo=sq&tamanho=30&documento_id="+n.logo_id.id+"&token_midia="+App.sessao.token_midia+"&anticache="+(new Date).getTime():"assets/img/icones_bp/empresa.svg",n.licenca_valida||(a=!0),"S"==n.padrao&&t(n),n.licenca_valida&&o++}!App.temp.empresa&&e.length>0&&t(e[0]),o>1&&$("#empresas").dxDropDownButton({items:e,onItemClick:function(e){if(e.itemData.empresa_id!=App.temp.empresa){for(t(e.itemData),alert_info("Empresa "+e.itemData.nome_fantasia+" selecionada"),e.component.option("text",e.itemData.nome_fantasia),e.component.option("icon",e.itemData.logo_id?WS_URI+"documento/midia/?tipo=sq&tamanho=30&documento_id="+e.itemData.logo_id.id+"&token_midia="+App.sessao.token_midia+"&anticache="+(new Date).getTime():"assets/img/icones_bp/empresa.svg");App.tabsInstance._$element.find(".dx-icon-close").length>0;)$(App.tabsInstance._$element.find(".dx-icon-close")[0]).trigger("click");$("#"+$(".tab-home").attr("aba-id-md5")).find(".btn_refresh").trigger("click")}},text:App.temp.nome_empresa,icon:App.temp.logo_id?WS_URI+"documento/midia/?tipo=sq&tamanho=30&documento_id="+App.temp.logo_id.id+"&token_midia="+App.sessao.token_midia+"&anticache="+(new Date).getTime():"assets/img/icones_bp/empresa.svg",displayExpr:"nome_fantasia",keyExpr:"empresa_id",useSelectMode:!1}),a&&App.verifica_permissao(App.temp.empresa,"empresa")&&View.loadReact(views.empresa.Listagem.default,{},function(e){},View.ABA.SIM)})},App.identificar_representante=function(){if(App.sessao.dados.representante_compartilhado==TIPO_TABELA_COMPARTILHADA.NAO_COMPARTILHADO)for(var e=0;e<App.sessao.dados.lista_representantes.length;e++){if((a=App.sessao.dados.lista_representantes[e]).empresa_filial_id==App.temp.empresa){App.sessao.dados.representante_id=a.id,App.sessao.dados.tipo_representante=a.tipo_representante;break}}else if(App.sessao.dados.lista_representantes.length>0)for(e=0;e<App.sessao.dados.lista_representantes.length;e++){var a;if(null==(a=App.sessao.dados.lista_representantes[e]).empresa_filial_id){App.sessao.dados.representante_id=a.id,App.sessao.dados.tipo_representante=a.tipo_representante;break}}},App.count_notificacao=function(){},App.listar_notificacoes=function(){var a=$(".template-item_notificacoes"),o=($(".imagem_notificacoes"),$(".btn_mais_notificacao")),t=999999999999999;e.ul_notificacoes.css("overflow-y","");var i=function(n,s){var r=a.clone(),p=null;r.removeAttr("template-item_notificacoes"),r.css("display",""),r.addClass("class-rows-notificacoes"),$(r).attr("notificacao_id",n.notificacao_id),parseInt(n.notificacao_id,10)<parseInt(t,10)&&(t=n.notificacao_id);var l=$(r.find("[template-field='notificacoes']")),c=$(r.find(".carrega_img_notificacoes")),d=$(r.find(".check_notificacao"));n.tipo==NOTIFICACAO.MARCACAO_COMENTARIO&&(p="<b>"+n.nome_usuario_inicio+"</b> citou você em um comentário.",$(r).attr("mensagem_id",n.id_origem),r.unbind("click"),r.click(function(){View.load("pagina_inicial/mensagem",function(e,a){a.show(n.id_origem,n.id_origem_opcional,NOTIFICACAO.MARCACAO_COMENTARIO,n.grupo_nome)},View.ABA.MULTIPLAS),u()})),l.html(p),null!=n.foto_id?c.attr("src",WS_URI+"documento/midia_imagens_menores/?documento_id="+n.foto_id+"&tamanho=50&token_midia="+App.sessao.token_midia):c.attr("src","assets/img/icones_bp/user.svg"),"S"!=n.lido&&1!=n.lido||(r.css("opacity","0.6"),r.css("filter","alpha(opacity=60)"),d.hasClass("hidden")&&d.removeClass("hidden")),n.count_notificacao>1&&s<n.count_notificacao-1&&r.append('<li role="separator" class="divider"></li>'),n.count_notificacao>6?o.hasClass("hidden")&&o.removeClass("hidden"):o.hasClass("hidden")||o.addClass("hidden"),r.appendTo(e.ul_notificacoes).after(o),o.unbind("click"),o.click(function(a){a.stopPropagation(),WS.post("notificacoes/listar/",{parametro_limitador:!0,menor_id:t},function(a){e.ul_notificacoes.css("overflow-y","scroll"),$(a).each(function(e,a){i(a,e)})})});var u=function(){WS.post("notificacoes/salvar",{notificacao_id:n.notificacao_id},function(a){a&&(e.ul_notificacoes.find(".class-rows-notificacoes").remove(),$(a).each(function(e,a){i(a,e)}))})}};e.ul_notificacoes.find("a").remove(),App.logado&&1==App.logado&&WS.post("notificacoes/listar/",{parametro_limitador:!0},function(e){$(e).each(function(e,a){i(a,e)})})},App.load_menu_anonimo=function(){$("#perfil").dxDropDownButton({items:[{id:4,name:"Sair",icon:"fas fa-sign-out-alt",onClick:function(){App.logout_anonimo()}}],text:App.sessao.email?App.sessao.email:"Anônimo",icon:"user",elementAttr:{class:"border-radius0"},displayExpr:"name",keyExpr:"id",useSelectMode:!1,stylingMode:"text",height:"36px",showArrowIcon:!1})},App.load_menu=function(){if(App.sessao){if(App.sessao.dados.versao_bp!==App.version){const e=$("#notificacao").parent();e.removeClass("hidden"),$("#notificacao").dxButton({icon:"fa fa-bell",elementAttr:{class:"border-radius0"},stylingMode:"contained",height:"36px",visible:App.sessao.dados.versao_bp!==App.version,onClick(a){if(App.sessao.dados.versao_bp!==App.version){let o=()=>{WS.post("usuario/registrar_versao_bp/",{},o=>{e.addClass("hidden"),a.component.option("visible",!1)})};alertaPopUp("Notificação","<b>O Next BP foi atualizado!</b><br><br>Recomendamos a limpeza do cache do seu navegador para evitar falhas.","Conferir Novidades",()=>{View.load("menu/versoes",function(e){},View.ABA.SIM),o()},"OK",()=>{o()},500)}}})}$("#perfil").dxDropDownButton({items:[{id:1,name:"Meu Perfil",icon:"user",visible:App.verifica_permissao(App.temp.empresa,"rede_social"),onClick:function(){View.load("pagina_inicial/listar",function(e,a){a.show(App.sessao.usuario_id)},View.ABA.SIM)}},{id:2,name:"Preferências",icon:"preferences",onClick:function(){View.load("opcoes_usuario/detalhes",function(e){},View.ABA.SIM)}},{id:3,name:"Histórico de versões",icon:"fas fa-code-branch",onClick:function(){View.load("menu/versoes",function(e){},View.ABA.SIM)}},{id:4,name:"Sair",icon:"runner",onClick:function(){App.logout()}},{id:5,name:"Manual",icon:"fa fa-question-circle",onClick:function(){window.open(WS_URI+"manual/?i="+App.idioma+"&p=")}}],onOptionChanged:function(e){e.component.option("opened")?(e.component.option("text",App.sessao.dados.nome),e.element.css("min-width","180px")):(e.component.option("text",""),e.element.css("min-width","50px"))},icon:App.sessao.dados.foto_id?WS_URI+"documento/midia_imagens_menores/?documento_id="+App.sessao.dados.foto_id+"&tamanho=30&token_midia="+App.sessao.token_midia:"assets/img/icones_bp/user.svg",elementAttr:{class:"border-radius0"},displayExpr:"name",keyExpr:"id",useSelectMode:!1,stylingMode:"text",height:"36px",showArrowIcon:!1});var a=$(".menu_guias");if(a.unbind("click"),a.click(function(){View.hide(),View.load("menu/guias",function(e,a){},View.ABA.SIM)}),!0===App.logado){a.css("display",""),a.addClass("visible-xs"),e.lbl_user_name=$(".lbl_user_name"),e.ico_user_name.show(),e.lbl_user_name.text(App.sessao.dados.nome);var o=$("body");App.translate(o)}else a.css("display","none"),a.removeClass("visible-xs"),e.ico_user_name.hide(),e.lbl_user_name.text("")}},App.aplicar_mascaras=function(e){var a=null;a=void 0===e?$:"string"==typeof e?$("#"+e):$(e),Modernizr.inputtypes.date||(a.find("input[type='date']").datepicker(),a.find("input[type='date']").datepicker("option","dateFormat","dd/mm/yy")),a.find("input[type='time']").attr("type","text").mask("00:00"),a.find(".cep").mask("00000-000"),a.find(".cpf").mask("000.000.000-00",{reverse:!0}),a.find(".cnpj").mask("00.000.000/0000-00",{reverse:!0})},App.aplicar_switchs=function(e){var a=null;a=void 0===e?$:"string"==typeof e?$("#"+e):$(e),$.fn.bootstrapSwitch.defaults.onColor="success",$.fn.bootstrapSwitch.defaults.offColor="default",$.fn.bootstrapSwitch.defaults.onText=null!=App.lang?App.lang.bootstrap_checkbox.sim:"SIM",$.fn.bootstrapSwitch.defaults.offText=null!=App.lang?App.lang.bootstrap_checkbox.nao:"NÃO",a.find("input[type='checkbox']").not(".template_switch").not(".checkbox_bootstrap_toggle").bootstrapSwitch(!0)},App.aplicar_checkbox=function(e){(void 0===e?$:"string"==typeof e?$("#"+e):$(e)).find(".checkbox_bootstrap_toggle").not(".template_switch").bootstrapToggle({on:null!=App.lang?App.lang.bootstrap_checkbox.sim:"SIM",off:null!=App.lang?App.lang.bootstrap_checkbox.nao:"NÃO",onstyle:"success"})},App.aplicar_selectpicker=function(e){(void 0===e?$:"string"==typeof e?$("#"+e):$(e)).find("select.selectpicker").selectpicker("refresh")},App.aplicar_permissoes=function(e){var a=null;(a=void 0===e?$("[permissao]"):"string"==typeof e?$("#"+e+" [permissao]"):$(e).find("[permissao]")).css("display","none"),a.each(function(e,a){a=$(a);App.verifica_permissao(App.temp.empresa,a.attr("permissao"))&&a.css("display","")})},App.verificar_tema=function(){var e="preto";"undefined"!=typeof Storage&&localStorage.getItem("tema")&&"undefined"!=localStorage.getItem("tema")&&(e=localStorage.getItem("tema")),App.aplicar_tema(e),WS.get("tema/obter_parametros_iniciais/",null,function(a){e=a.tema,App.aplicar_tema(e),App.temp.usuario_cliente_cadastrese=a.usuario_cliente_cadastrese||!1;try{$("#dxButtonCadastrarse").dxButton("instance").option("visible",App.temp.usuario_cliente_cadastrese)}catch(e){}})},App.aplicar_tema=function(e){localStorage.setItem("tema",e),App.url_css_bootstrap="assets/css/sys/temas/"+e+".min.css",App.url_css_devextreme="assets/css/sys/temas/"+e+".dx.css",$("link").eq(0).attr("href",App.url_css_bootstrap),$("link").eq(1).attr("href",App.url_css_devextreme),$("link").eq(2).attr("href",WS_ROOT+"webservice/especificos/css/especifico.css?anticache="+(new Date).getTime())},App.verifica_licencas=function(){if(1==App.sessao.dados.permissoes.length&&"empresa"==App.sessao.dados.permissoes[0].chave){return View.loadReact(views.empresa.Listagem.default,{onClose:function(){App.logout()}},function(e){},View.ABA.SIM),!1}return!0},App.verifica_permissao=function(e,a){return App.sessao.dados.permissoes.filter(o=>o.chave==a&&(1==App.sessao.dados.admin||App.sessao.dados.tipo!=USUARIO_TIPO.ANALISTA||o.empresa_filial_id==(e||App.sessao.dados.empresa_filial_id)||"S"==o.origem_grupo_usuarios)).length>0},App.pg_getManyFiles=function(e){var a=[],o=0;function t(t,i){window.resolveLocalFileSystemURL(t,function(t){var n={};t.file(function(t){n.lastModified=t.lastModified,n.lastModifiedDate=t.lastModifiedDate,n.localURL=t.localURL,n.name=t.localURL.substring(t.localURL.lastIndexOf("tmp_")+4),n.size=t.size,n.mimeType=t.type,n.type=t.type,a[i]=n,a.length==o&&e(a)})},function(e){console.log(e)})}window.imagePicker.getPictures(function(e){o=e.length;for(var i=0;i<e.length;i++){t(e[i],i),i==e.length-1&&!0&&(console.log("metadata:"),console.log(a))}},function(e){console.log("Error: "+e)},{quality:50})},App.download=function(e){this.is_nativo()?(valid_onunload(!1),PhoneGapFile.download(e)):(valid_onunload(!1),window.open(e,"_blank"),setTimeout(function(){valid_onunload(!0)},1e3))},App.hash_init=function(){var e=window.location.hash.substr(window.location.hash.indexOf("/")+1).split("/"),a=!0;if(e.length>0&&""!=e[0].trim()&&"#"!=e[0].trim()){switch(e[0]){case"instalar":alert("instalar");break;case"auth":AUTH_TOKEN=e[1];break;case"#admin":$("link").eq(1).attr("href","assets/css/sys/temas/vermelho_escuro_arr-theme.min.css?v="+App.version),$("link").eq(0).attr("href","assets/css/sys/temas/vermelho_escuro_arr.min.css?v="+App.version),SYS_ADMIN=!0;break;case"social":"grupo"==e[1]&&""!=e[2]&&WS.get("grupos_rede_social/obter_privacidade_por_link/",{link_sufixo:e[2]},function(o){"P"==o.privacidade&&(View.load("grupo_rede_social_pagina/listar",function(a,o){o.show(null,e[2])},View.ABA.MULTIPLAS),a=!1)});break;case"#logout":LOGOUT=!0}for(var o=0;o<e.length;o++){"embedded"==e[o]&&(App.embedded=!0)}}return a},App.hash_login=function(){var e=window.location.hash;e.indexOf("/auth/"+AUTH_TOKEN)&&(e=e.replace("/auth/"+AUTH_TOKEN,""));var a=e.substr(window.location.hash.indexOf("/")+1).split("/");if(a.length>0&&""!=a[0].trim()&&"#"!=a[0].trim()){var o=a[0];switch(View.unload(),o){case"chamado":if("novo"==a[1])setTimeout(function(){View.loadReact(window.views.chamado.Detalhes.default,{onClose:function(){App.abrir_home()}},function(e,a){},View.ABA.SIM)},2e3);else if("listar"==a[1])setTimeout(function(){View.load("chamado/listar",function(e,a){a.show()},View.ABA.SIM)},2e3);else{View.loadReact(window.views.chamado.Detalhes.default,{chamadoId:a[1],onClose:function(){App.abrir_home()}},function(e,a){},View.ABA.MULTIPLAS)}break;case"processo":"novo"==a[1]?WS.post("solicitacao/nova/",{processo_id:a[2]},function(e){var a=e;View.load("solicitacao/detalhes",function(e,o){o.show(a,FORMULARIO.NOVO),o.onclose=function(){App.abrir_home()}},View.ABA.MULTIPLAS)}):"listar"==a[1]?"todas"==a[2]?View.loadReact(views.solicitacao_processo.Listagem.default,{filtro_tipo_listagem:SOLICITACAO_FILTROS.TODAS},function(e){},View.ABA.SIM):View.loadReact(views.solicitacao_processo.Listagem.default,{filtro_solicitacao_numero:a[2]},function(e){},View.ABA.SIM):View.load("solicitacao/detalhes",function(e,o){o.show(a[1])},View.ABA.MULTIPLAS,null,null,{solicitacaoId:a[1]});break;case"solicitacao":View.load("solicitacao/detalhes",function(e,o){o.show(a[1],SOLICITACAO_TIPO_VISUALIZACAO.PROCESSO)},View.ABA.MULTIPLAS,null,null,{solicitacaoId:a[1]});break;case"solicitacao_atividade":View.load("solicitacao/detalhes",function(e,o){o.show(a[1],SOLICITACAO_TIPO_VISUALIZACAO.ATIVIDADE)},View.ABA.MULTIPLAS,null,null,{solicitacaoAtividadeId:a[1]});break;case"agenda":var t=a[1];t>0?View.load("agenda/agenda_evento",function(e,a){a.show(t),a.onclose=function(){App.abrir_home()}},View.ABA.MULTIPLAS):View.load("agenda/listar",function(e,a){a.show()},View.ABA.MULTIPLAS);break;case"documento":if("aprovacao"==a[1])View.load("central_documentos/listar",function(e,a){a.btn_pendente_func()},View.ABA.MULTIPLAS);else if("pasta"==a[1]){var i=a[2];View.loadReact(views.documentos.Listagem.default,{documentoPastaId:i},e=>{},View.ABA.SIM)}else if("detalhe"==a[1]){if(a[2]>0){var n=a[2];View.load("central_documentos/documento",function(e,o){"revisoes"==a[3]&&(o.tab_foco_inicial="revisoes"),o.show(n,FORMULARIO.EDITAR),o.onclose=function(){App.abrir_home()}},View.ABA.MULTIPLAS)}"pasta"==a[2]&&(i=a[3],View.load("central_documentos/pasta",function(e,a){a.show(i,FORMULARIO.EDITAR),a.onclose=function(){App.abrir_home()}},View.ABA.MULTIPLAS))}break;case"projeto":if("listar"==a[1])View.load("projeto/listar",function(e,a){a.show()},View.ABA.MULTIPLAS);else if("atividades"==a[1]){var s=a[2];s>0&&View.load("atividade_projeto/listar",function(e,a){a.show(s)},View.ABA.MULTIPLAS,null,null,{projetoId:s})}else if("atividade"==a[1]){var r=a[2];r>0&&View.load("atividade_projeto/detalhes",function(e,a){a.show({projeto_atividade_id:r,tipo:FORMULARIO.EDITAR})},View.ABA.MULTIPLAS,null,null,{projetoAtividadeId:r})}break;case"oportunidade":if("nova"==a[1]){var p=a[2];View.load("oportunidade/detalhes",function(e,a){a.show(null,FORMULARIO.NOVO,p),a.onclose=function(){App.abrir_home()}},View.ABA.MULTIPLAS)}else if("aprovacao"==a[1])View.load("orcamento/listar",function(e,a){a.show()},View.ABA.SIM);else if("detalhes"==a[1]){var l=a[2];View.load("oportunidade/detalhes",function(e,a){a.show(l,FORMULARIO.VISUALIZAR),a.onclose=function(){App.abrir_home()}},View.ABA.MULTIPLAS,null,null,{oportunidadeId:l})}else setTimeout(function(){View.load("oportunidade/listar",function(e,a){a.show()},View.ABA.SIM)},2e3);break;case"hpe_atuacao_efetiva":View.load("atuacao_efetiva/listar",function(e,a){},View.ABA.SIM);break;case"hpe_competencias_essenciais":View.load("competencias_essenciais/listar",function(e,a){a.listar()},View.ABA.SIM);break;case"hpe_possibilidades":View.load("possibilidades/listar",function(e,a){a.show()},View.ABA.SIM);break;case"social":"grupo"==a[1]&&""!=a[2]&&View.load("grupo_rede_social_pagina/listar",function(e,o){o.show(null,a[2])},View.ABA.MULTIPLAS);break;case"pdca":""!=a[1]?View.load("pdca/atividades",function(e,o){o.show({pdca_id:a[1],dados_atividade:{pdca_atividade_id:a[2]?a[2]:null}},!0)},View.ABA.MULTIPLAS,null,null,{pdcaId:a[1]}):View.loadReact(views.pdca.Listagem.default,{},function(e){},View.ABA.SIM)}return window.history.pushState({},document.title,"#"),!0}return!1},App.recuperar_sessao=function(e){},App.is_nativo=function(){return!(-1!==document.URL.indexOf("http://")||-1!==document.URL.indexOf("https://"))},App.tabPanel=$("#tabpanel").dxTabPanel({dataSource:[],deferRendering:!1,repaintChangesOnly:!0,noDataText:""}).dxTabPanel("instance"),App.tabsInstance=$("#abas").dxTabs({dataSource:[],scrollByContent:!0,showNavButtons:!0,noDataText:"",itemTemplate:function(e,a,o){o.parent().attr("aba-id-md5",e.id);var t=$("<div>").css({display:"flex",alignItems:"center",maxWidth:"175px"});return"Home"==e.text?(t.append('<i style="font-size: 18px; margin-right: 10px" class="fas fa-home"></i>'),t.append(e.text),o.parent().addClass("tab-home")):(t.attr("title",e.text),t.addClass("tab_title"),o.parent().addClass("dx-tab-draggable"),t.append($('<div class="tab_title_text" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">').text(e.text)),t.append($("<i>").addClass("dx-icon").addClass("dx-icon-close").css({"margin-right":"0px","margin-left":"10px"}).click(function(a){View.unload(e.id)}))),t},onSelectionChanged:function(e){if(e.component.option("selectedItem"))for(var a=App.tabPanel.option("dataSource"),o=0;o<a.length;o++){var t=a[o];t.id===e.component.option("selectedItem").id&&(App.tabPanel.option("selectedIndex",o),View.show(t.id,!0))}},onItemClick:function(e){"home-empty"==e.itemData.id&&(App.removeTab("home-empty"),App.abrir_home())},onItemContextMenu:function(e){if("Home"!=e.itemData.text){var a=[{text:"Fechar",onClick:function(){View.unload(e.itemData.id)}},{text:"Fechar todas as abas",onClick:function(){for(;App.tabsInstance._$element.find(".dx-icon-close").length>0;)$(App.tabsInstance._$element.find(".dx-icon-close")[0]).trigger("click")}}];$("#context-menu").dxContextMenu({dataSource:a,width:200,target:e.itemElement[0]}).dxContextMenu("instance").show()}e.event.preventDefault()}}).dxTabs("instance"),App.tabsInstance.element().dxSortable({moveItemOnDrop:!0,filter:".dx-tab-draggable",itemOrientation:"horizontal",dragDirection:"horizontal",onReorder:function(e){var a=App.tabsInstance.option("dataSource"),o=a.splice(e.fromIndex+1,1)[0];a.splice(e.toIndex+1,0,o),App.tabsInstance.option("dataSource",[]),App.tabsInstance.option("dataSource",a),App.tabsInstance.repaint(),App.tabsInstance.option("selectedIndex",e.toIndex+1)}}),$("#header").css("background-color",App.tabsInstance.element().css("background-color")),App.insertTab=function(e,a,o,t){var i={id:e,text:a,rota:o,icon:t},n=App.tabPanel.option("dataSource");n.push(i),App.tabPanel.option("dataSource",n);var s=App.tabsInstance.option("dataSource");"Home"==a?s.unshift(i):s.push(i),App.tabsInstance.option("dataSource",s),App.tabsInstance.option("selectedIndex",s.length-1)},App.removeTab=function(e){for(var a=App.tabPanel.option("dataSource"),o=0;o<a.length;o++)if(a[o].id==e){a.splice(o,1),App.tabPanel.option("dataSource",a);break}var t=App.tabsInstance.option("dataSource");for(o=0;o<t.length;o++)if(t[o].id==e){t.splice(o,1),App.tabsInstance.option("dataSource",t);break}},App.gerenciar_abas=function(e,a,o){switch(o){case View.TYPE_CHANGE.LOAD:App.insertTab(a.id_md5,a.view.title?a.view.title:"Nova Aba"),View.show(a.id_md5);break;case View.TYPE_CHANGE.UNLOAD:var t=$('.app-aba[aba-id-md5="'+a.id_md5+'"]');if(t.hasClass("dx-tab-selected"))for(var i=View.janelas_mdi(),n=i.length-1;n>=0;n--)i[n].id_md5!=a.id_md5&&"menu/sistema"!=i[n].view_str&&"menu/guias"!=i[n].view_str&&(View.show(i[n].id_md5),n=0);t.remove()}},App.scrollView=$("#scrollview").dxScrollView().dxScrollView("instance"),App.foco_aba=function(e){jQuery('[aba-id-md5="'+e+'"]')[0].click()},App.scroll_abas=function(){$(document).scroll(function(){$("[aba-id-md5].active").attr("scroll",$(this).scrollTop())})},App.controle_teclas=function(){var e=function(e){App.pressKeys.ctrl&&(App.pressKeys.ctrl=!1),App.pressKeys.shift&&(App.pressKeys.shift=!1),App.pressKeys.alt&&(App.pressKeys.alt=!1)};$("body").keydown(function(a){a||(a=window.event),17==(a.keyCode||a.which)&&(App.pressKeys.ctrl=!0),16==(a.keyCode||a.which)&&(App.pressKeys.shift=!0),18==(a.keyCode||a.which)&&(App.pressKeys.alt=!0),[16,17,18].indexOf(a.keyCode||a.which)<0&&e()}).keyup(e)},App.titulo_aba=function(e,a){for(var o=App.tabsInstance.option("dataSource"),t=0;t<o.length;t++){o[t].id===e&&(o[t].text=a)}App.tabsInstance.repaint()},App.console_splash=function(){if("undefined"!=typeof console){var e="\t\t\t\tcolor: "+(window.matchMedia("(prefers-color-scheme: dark)").matches?"aqua":"blue")+";\t\t\t\tfont-size: 13px;\t\t\t\tfont-weight:bold;\t\t\t\t",a="                  _     _            \n                 | |   | |           \n  _ __   _____  _| |_  | |__  _ __  \n | '_ \\ / _ \\ \\/ / __| | '_ \\| '_ \\ \n | | | |  __/>  <| |_  | |_) | |_) |\n |_| |_|\\___/_/\\_\\\\__| |_.__/| .__/ \n                             | |    \n "+("v. "+App.version).padStart(26," ")+"  |_|    \n\n",o="Libs: RequireJS "+require.version+", Modernizr "+Modernizr._version+", jQuery "+$().jquery+", DevExtreme "+DevExpress.VERSION+", TinyMCE "+tinyMCE.majorVersion+"."+tinyMCE.minorVersion+", React "+React.version;console.log("%c"+a,e),console.log("%cpowered by Next SI (http://www.nextsi.com.br)","\t\t\t\tcolor: red;\t\t\t\tfont-size: 13px;\t\t\t\tfont-weight:bold;\t\t\t\t"),console.log("%c"+o,"\t\t\t\tcolor: gray;\t\t\t\tfont-size: 10px;\t\t\t\tfont-weight:normal;\t\t\t\t"),console.log(" ")}},App.load_idioma=function(a,o){a||(a="pt-BR");var t,i=function(){WS.get({route:"langs/"+a+".txt",final_route:!0,func_response:function(e){!function(e){e&&(spread(App.lang,e),App.idioma=App.lang.nome,"undefined"!=typeof Storage&&void 0!==App.lang.nome&&localStorage.setItem("idioma",App.lang.nome),App.PE.Lang_load_depois&&App.PE.Lang_load_depois(),o&&o())}(e.lang)},html_id:e.html_id})};"pt-BR"==a?i():(t=i,WS.get({route:"langs/pt-BR.txt",final_route:!0,func_response:function(e){App.PE.Lang_load_depois&&App.PE.Lang_load_depois(),t()},html_id:e.html_id}))},App.definir_cor_background=function(){try{var e=App.get_parametro_usuario("tema_utilizado");DevExpress.ui.themes.current(e.nome||"generic.light"),"generic.dark"!=e.nome&&"material.blue.dark"!=e.nome?($(document).find("html").css("background-color","#ddd"),$(document.body).css("background-color","#ddd")):($(document).find("html").css("background-color","#2a2a2a"),$(document.body).css("background-color","#2a2a2a"))}catch(e){console.log(e)}},App.construct()};