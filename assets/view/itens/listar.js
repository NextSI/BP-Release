define([],function(){return function(i){"use strict";var t=this;this.html_id=i,this.dialog=$("#"+this.html_id),this.title=App.lang.item.aba_listar,this.tab_listagem=this.dialog.find(".tab_listagem"),this.btn_novo=this.dialog.find(".btn_novo"),this.btn_listar=this.dialog.find(".btn_listar"),this.btn_filtrar=this.dialog.find(".btn_filtrar"),this.btn_pesquisar=this.dialog.find(".btn_pesquisar"),this.btn_limpar_filtros=this.dialog.find(".btn_limpar_filtros"),this.btn_configuracao=this.dialog.find(".btn_configuracao"),this.somente_leitura=this.dialog.find(".somente_leitura"),this.somente_visualizar=this.dialog.find(".somente_visualizar"),this.div_filtros=this.dialog.find(".div_filtros"),this.edt_codigo=this.dialog.find(".edt_codigo"),this.edt_nome=this.dialog.find(".edt_nome"),this.div_carregar_mais=this.dialog.find(".div_carregar_mais"),this.btn_carregar_mais=this.dialog.find(".btn_carregar_mais"),this.somente_consulta_item="N",this.limite=0,this.codigo_item=null,this.nome_item=null,this.auxiliar=!1,this.existe_mais=!0,this.modulo_crm=!1,this.show=function(i){void 0!==i&&(t.modulo_crm=i),t.listar(),t.verifica_config()},this.verifica_config=function(){!0===App.sessao.dados.admin?t.btn_configuracao.removeClass("hidden"):t.btn_configuracao.addClass("hidden"),WS.get("itens/get_parametros/",null,function(i){t.somente_consulta_item=i.somente_consulta_item,"S"==t.somente_consulta_item?(t.somente_leitura.addClass("hidden"),t.somente_visualizar.removeClass("hidden")):(t.somente_leitura.removeClass("hidden"),t.somente_visualizar.addClass("hidden"))})},this.listar=function(){var i=t.tab_listagem.find("tbody"),a=i.find("tr:first");t.existe_mais&&WS.get("itens/listar/",{limite:t.limite,codigo:t.codigo_item,item_descricao:t.nome_item,considerar_bloqueados:!0},function(n){t.div_carregar_mais.removeClass("hidden"),t.btn_carregar_mais.find("span.txt_carregar_mais").text(App.lang.btn_carregar_mais.carregar_mais_registros),t.btn_carregar_mais.find("span.icn_carregar_mais").remove(),t.btn_carregar_mais.append('<span class="icn_carregar_mais fa fa-arrow-down"></span>'),n.length>0?(0==t.limite&&t.tab_listagem.find("tr:gt(1)").remove(),$(n).each(function(n,e){!function(n){var e=a.clone();e.removeAttr("template-row"),e.css("display","");var s=$(e.find("[template-field='logo']"));null!=n.foto_id&&n.foto_id>0?s.attr("src",WS_URI+"documento/midia/?documento_id="+n.foto_id+"&token_midia="+App.sessao.token_midia+"&anticache="+(new Date).getTime()):s.attr("src","assets/img/img.svg"),s.bind("error",function(){$(this).attr("src","assets/img/img.svg")}),$(e.find("[template-field='codigo']")).text(n.codigo),$(e.find("[template-field='nickname']")).text(n.nickname),$(e.find("[template-field='descricao']")).text(n.descricao);var o=$(e.find("[template-field='preco']"));null!=n.preco?o.text(n.preco.replace(".",",")):o.text("0,00");var r=$(e.find("[template-field='preco_minimo']"));null!=n.preco_minimo?r.text(n.preco_minimo.replace(".",",")):r.text("0,00"),$(e.find(".btn_editar")).click(function(){"N"==t.somente_consulta_item&&View.load("itens/detalhes",function(i,a){a.onclose=t.listar,a.show(n.item_id,FORMULARIO.EDITAR,null,t.modulo_crm)},View.ABA.MULTIPLAS)}),$(e.find(".btn_visualizar")).click(function(){View.load("itens/detalhes",function(i,a){a.onclose=t.listar,a.show(n.item_id,FORMULARIO.VISUALIZAR,null,t.modulo_crm)},View.ABA.MULTIPLAS)}),$(e.find(".btn_excluir")).click(function(){"N"==t.somente_consulta_item&&View.load("itens/detalhes",function(i,a){a.onclose=t.listar,a.show(n.item_id,FORMULARIO.EXCLUIR,null,t.modulo_crm)},View.ABA.MULTIPLAS)});var l=e.find(".btn_alterar_foto");l.find("span").tooltip(),l.click(function(i){View.load("itens/alterar_foto",function(i,a){a.onclose=function(){t.listar()},a.show({item_id:n.item_id,tipo:FORMULARIO.EDITAR})})}),e.appendTo(i)}(e)})):(t.btn_carregar_mais.find("span.txt_carregar_mais").text(App.lang.btn_carregar_mais.todos_carregados),t.btn_carregar_mais.find("span.icn_carregar_mais").remove(),t.btn_carregar_mais.append('<span class="icn_carregar_mais fa fa-check"></span>'),t.existe_mais=!1)})},this.btn_novo.unbind("click"),this.btn_novo.click(function(){"N"==t.somente_consulta_item&&View.load("itens/detalhes",function(i,a){a.onclose=function(){t.listar()},a.show(null,FORMULARIO.NOVO,null,t.modulo_crm)},View.ABA.MULTIPLAS)}),this.btn_filtrar.unbind("click"),this.btn_filtrar.click(function(){0==t.auxiliar?(t.div_filtros.fadeIn(500),t.auxiliar=!0,t.btn_pesquisar.removeClass("hidden"),t.btn_limpar_filtros.removeClass("hidden")):(t.div_filtros.fadeOut(300),t.auxiliar=!1,t.btn_pesquisar.addClass("hidden"),t.btn_limpar_filtros.addClass("hidden"))}),this.btn_pesquisar.unbind("click"),this.btn_pesquisar.click(function(){t.codigo_item=t.edt_codigo.val(),t.nome_item=t.edt_nome.val(),t.listar()}),this.btn_limpar_filtros.unbind("click"),this.btn_limpar_filtros.click(function(){t.edt_codigo.val(""),t.edt_nome.val(""),t.btn_pesquisar.click()}),this.btn_listar.unbind("click"),this.btn_listar.click(function(){t.tab_listagem.find("tr:gt(1)").remove(),t.limpa_limite(),t.listar()}),this.limpa_limite=function(){t.tab_listagem.find("tr:gt(1)").remove(),t.existe_mais=!0,t.limite=0},this.btn_configuracao.unbind("click"),this.btn_configuracao.click(function(){View.load("itens/configuracoes",function(i,a){a.onclose=function(){t.verifica_config(),t.listar()},a.show(null,FORMULARIO.NOVO)})}),this.btn_carregar_mais.unbind("click").click(function(){t.btn_carregar_mais.find("span.txt_carregar_mais").text(App.lang.btn_carregar_mais.aguarde),t.btn_carregar_mais.find("span.icn_carregar_mais").remove(),t.btn_carregar_mais.append('<span class="icn_carregar_mais fa fa-spinner fa-spin">'),t.existe_mais&&(t.limite=t.limite+100),t.listar()}),this.unload=function(){View.unload(this.html_id)}}});