define([],function(){return function(a){"use strict";var i=this;this.html_id=a,this.dialog=$("#"+this.html_id),this.title="Feriados",this.tab_listagem=this.dialog.find(".tab_listagem"),this.btn_novo=this.dialog.find(".btn_novo"),this.btn_listar=this.dialog.find(".btn_listar"),this.btn_filtrar=this.dialog.find(".btn_filtrar"),this.div_carregar_mais=this.dialog.find(".div_carregar_mais"),this.btn_carregar_mais=this.dialog.find(".btn_carregar_mais"),this.btn_limpar_filtro=this.dialog.find(".btn_limpar_filtro"),this.nome_feriado=null,this.calendario_trabalho=null,this.data_feriado=null,this.limite=0,this.limite_a_cada=50,this.todos_carregados=null,this.listar=function(a){var t=i.tab_listagem.find("tbody"),r=t.find("tr:first");WS.get("feriado/listar/",{nome_feriado:i.nome_feriado,calendario_trabalho:i.calendario_trabalho,data_feriado:i.data_feriado,limite:i.limite,limite_a_cada:i.limite_a_cada},function(n){i.div_carregar_mais.removeClass("hidden"),i.btn_carregar_mais.find("span.icn_carregar_mais").remove(),a&&(i.tab_listagem.find("tr:gt(1)").remove(),i.tab_listagem.find("tbody > tr:not([template-row])").remove()),n.length?(n.length<i.limite_a_cada?(i.btn_carregar_mais.find("span.txt_carregar_mais").text(App.lang.btn_carregar_mais.todos_carregados),i.btn_carregar_mais.append('<span class="icn_carregar_mais fa fa-check"></span>'),i.todos_carregados=!0):(i.btn_carregar_mais.find("span.txt_carregar_mais").text(App.lang.btn_carregar_mais.carregar_mais_registros),i.btn_carregar_mais.append('<span class="icn_carregar_mais fa fa-arrow-down"></span>'),i.todos_carregados=!1),$(n).each(function(a,n){!function(a){var n=r.clone();n.removeAttr("template-row"),n.css("display",""),$(n.find("[template-field='nome']")).text(a.nome),$(n.find("[template-field='data_feriado']")).text(a.data_feriado.format_date()),$(n.find("[template-field='hora_inicio']")).text(a.hora_inicio),$(n.find("[template-field='hora_fim']")).text(a.hora_fim),$(n.find("[template-field='calendario_trabalho']")).text(a.calendario_trabalho);var e=$(n.find(".btn_visualizar"));e.unbind("click"),e.click(function(){View.load("feriado/detalhes",function(i,t){t.show(a.id,FORMULARIO.VISUALIZAR)})});var o=$(n.find(".btn_editar")),s=function(){View.load("feriado/detalhes",function(t,r){r.onclose=function(){i.listar(!0)},r.show(a.id,FORMULARIO.EDITAR)})};o.unbind("click"),o.click(s),n.dblclick(s);var l=$(n.find(".btn_excluir"));l.unbind("click"),l.click(function(){View.load("feriado/detalhes",function(t,r){r.onclose=function(){i.listar(!0)},r.show(a.id,FORMULARIO.EXCLUIR)})}),n.appendTo(t)}(n)})):(i.btn_carregar_mais.find("span.txt_carregar_mais").text(App.lang.btn_carregar_mais.todos_carregados),i.btn_carregar_mais.append('<span class="icn_carregar_mais fa fa-check"></span>'),i.todos_carregados=!0)})},this.btn_novo.unbind("click"),this.btn_novo.click(function(){View.load("feriado/detalhes",function(a,t){t.onclose=function(){i.listar(!0)},t.show(null,FORMULARIO.NOVO)})}),this.btn_listar.unbind("click"),this.btn_listar.click(function(){i.listar(!0)}),this.btn_filtrar.unbind("click"),this.btn_filtrar.click(function(){View.load("feriado/parametros",function(a,t){t.onclose=function(){i.listar(!0)},t.show(function(a){i.nome_feriado=a.nome_feriado,i.calendario_trabalho=a.calendario_trabalho,i.data_feriado=a.data_feriado},i.nome_feriado,i.calendario_trabalho,i.data_feriado)})}),this.btn_carregar_mais.unbind("click").click(function(){if(i.todos_carregados)return!1;i.limite+=i.limite_a_cada,i.btn_carregar_mais.find("span.txt_carregar_mais").text(App.lang.btn_carregar_mais.aguarde),$(this).find("span.icn_carregar_mais").remove(),$(this).append('<span class="icn_carregar_mais fa fa-spinner fa-spin"></span>'),i.listar(!1)}),this.btn_limpar_filtro.unbind("click").click(function(){i.nome_feriado=null,i.url_feriado=null,i.limite=0,i.listar(!0)}),this.unload=function(){View.unload(this.html_id)},i.limite=0,i.listar(!0)}});