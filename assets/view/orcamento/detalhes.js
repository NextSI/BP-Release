define([],function(){return function(t){"use strict";var i=this;this.html_id=t,this.dialog=$("#"+this.html_id),this.title="Detalhes Orçamento",this.modal=this.dialog.find(".modal"),this.modal.attr("id",this.html_id+"_modal"),this.tipo=null,this.onclose=null,this.p_cliente=this.dialog.find(".p_cliente"),this.p_representante=this.dialog.find(".p_representante"),this.p_valor=this.dialog.find(".p_valor"),this.p_condicao_pagamento=this.dialog.find(".p_condicao_pagamento"),this.p_frete=this.dialog.find(".p_frete"),this.p_entrega=this.dialog.find(".p_entrega"),this.div_numero_orcamento=this.dialog.find(".div_numero_orcamento"),this.tab_listagem_orcamento=this.dialog.find(".tab_listagem_orcamento"),this.total=this.dialog.find(".total"),this.desconto=this.dialog.find(".desconto"),this.ipi=this.dialog.find(".ipi"),this.valor_ipi=this.dialog.find(".valor_ipi"),this.lb_subtotal=this.dialog.find(".lb_subtotal"),this.lb_valor_desconto=this.dialog.find(".lb_valor_desconto"),this.lb_valor_ipi=this.dialog.find(".lb_valor_ipi"),this.lb_valor_total=this.dialog.find(".lb_valor_total"),this.lb_entidade=this.dialog.find(".lb_entidade"),this.btn_imprimir=this.dialog.find(".btn_imprimir"),this.btn_visualizar_email=this.dialog.find(".btn_visualizar_email"),this.btn_excluir=this.dialog.find(".btn_excluir"),this.btn_aprovar=this.dialog.find(".btn_aprovar"),this.btn_reprovar=this.dialog.find(".btn_reprovar"),this.lbl_valor_lucro_bruto=this.dialog.find(".lbl_valor_lucro_bruto"),this.lbl_percentual_lucro=this.dialog.find(".lbl_percentual_lucro"),this.oportunidade_orcamento_id=null,this.arr_itens=null,this.parametros_item=null,this.show=function(t,o,e){switch(i.configuracoes_item(),t){case FORMULARIO.NOVO:case FORMULARIO.EDITAR:case FORMULARIO.VISUALIZAR:case FORMULARIO.EXCLUIR:}i.tipo=t,void 0!==o&&o&&(i.oportunidade_orcamento_id=o,i.preencher()),i.btn_visualizar_email.addClass("hidden"),App.titulo_aba(i.html_id,"Orçamento #"+o),show_modal(i.modal.attr("id"))},this.close=function(){close_modal(i.modal.attr("id")),void 0!==i.onclose&&i.onclose&&i.onclose()},this.unload=function(){i.close(),View.unload(this.html_id)},this.permite_alterar=function(t){},this.configuracoes_item=function(){WS.get("itens/get_parametros/",null,function(t){i.parametros_item=t,"N"==i.parametros_item.item_desconto&&i.lb_valor_desconto.addClass("hidden"),"N"==i.parametros_item.imposto_ipi&&i.lb_valor_ipi.addClass("hidden"),"N"==i.parametros_item.item_desconto&&"N"==i.parametros_item.imposto_ipi&&i.lb_subtotal.addClass("hidden")})},this.preencher=function(){var t={oportunidade_orcamento_id:i.oportunidade_orcamento_id};WS.get("oportunidade_orcamento/objeto/",t,function(t){i.div_numero_orcamento.text("Orçamento #"+i.oportunidade_orcamento_id+" - "+t.insert_hora.format_date_time()),i.p_cliente.text(t.entidade_nome),i.p_representante.text(t.entidade_nome),i.p_valor.text(t.valor_total>0?t.valor_total.format_number(2,!0):"0,00"),i.p_condicao_pagamento.text(null!=t.condicao_pagamento_descricao?t.condicao_pagamento_descricao:""),i.p_frete.text(t.frete_descricao),i.p_entrega.text(""!=t.data_entrega.trim()?t.data_entrega.format_date():""),"O"==t.entidade_tipo&&i.lb_entidade.text("Organização"),i.exibir_divs_codigo_entidade(t.tabela_preco_entidade_id),i.arr_itens=t.itens,i.listar_itens(),i.parametros_item.imposto_ipi})},this.exibir_divs_codigo_entidade=function(t){parseInt(t,10)>0?i.dialog.find(".divs_edt_codigo_entidade").removeClass("hidden"):i.dialog.find(".divs_edt_codigo_entidade").addClass("hidden")},this.listar_itens=function(){var t=i.tab_listagem_orcamento.find("tbody"),o=t.find("tr:first");i.tab_listagem_orcamento.find("tr:gt(1)").remove(),$(i.arr_itens).each(function(e,a){!function(e){var a=o.clone();a.removeAttr("template-row"),a.css("display",""),$(a.find("[template-field='codigo']")).text(void 0!==e.item_codigo?e.item_codigo:""),$(a.find("[template-field='codigo_entidade']")).text(void 0!==e.tabela_preco_item_codigo_entidade?e.tabela_preco_item_codigo_entidade:""),$(a.find("[template-field='item_descricao']")).text(e.item_descricao),$(a.find("[template-field='preco']")).text(e.preco>0?e.preco.format_number(2,!0):"0,00"),$(a.find("[template-field='custo']")).text(e.custo>0?e.custo.format_number(2,!0):"0,00");var d=$(a.find("[template-field='margem_lucro']")),r="0,00";e.preco>0&&e.custo>0&&(r=(e.preco-e.custo)/e.preco*100),r&&(r=r.format_number(2,!0)),-1!=r.toString().indexOf("-")&&d.css("color","red");var n=$(a.find("[template-field='lucro']")),l=e.preco,_=e.custo;d.text(((l-_)/l*100).format_number(2,!0));var s=parseFloat(e.custo)*parseFloat(e.quantidade),c=parseFloat(e.preco)*parseFloat(e.quantidade)-s;n.text(c.format_number(2,!0)),$(a.find("[template-field='quantidade']")).text(e.quantidade>0?e.quantidade.format_number(2,!0):"0,00");var p=$(a.find("[template-field='desconto']"));p.text(e.perc_desconto>0?e.perc_desconto.format_number(2,!0):"0,00"),$(a.find("[template-field='total']")).text(e.total>0?e.total.format_number(2,!0):"0,00");var m=$(a.find("[template-field='ipi']"));m.text(e.perc_ipi>0?e.perc_ipi.format_number(2,!0):"0,00");var u=$(a.find("[template-field='valor_ipi']"));u.text(e.valor_ipi>0?e.valor_ipi.format_number(2,!0):"0,00"),"N"==i.parametros_item.item_desconto&&(i.desconto.addClass("hidden"),p.addClass("hidden")),"N"==i.parametros_item.imposto_ipi&&(i.ipi.addClass("hidden"),i.valor_ipi.addClass("hidden"),m.addClass("hidden"),u.addClass("hidden")),a.appendTo(t)}(a)}),i.totalizar_itens()},this.totalizar_itens=function(){var t=0,o=0,e=0,a=0,d=0,r=0;$(i.arr_itens).each(function(i,r){if("N"==r.excluido){t+=parseFloat(r.preco)*parseFloat(r.quantidade);var n=parseFloat(r.preco)*parseFloat(r.quantidade);o+=n*parseFloat(r.perc_desconto)/100,e=parseFloat(e)+parseFloat(r.valor_ipi),a=parseFloat(a)+parseFloat(r.total),d+=parseFloat(r.preco*r.quantidade)-parseFloat(r.custo*r.quantidade)}}),r=d/a*100,i.lb_subtotal.text("SubTotal: R$"+t.format_number(2,!0)),i.lb_valor_desconto.text("Desconto: R$"+o.format_number(2,!0)),i.lb_valor_ipi.text("I.P.I.: R$"+e.format_number(2,!0)),i.lb_valor_total.text("Total: R$"+a.format_number(2,!0)),i.lbl_valor_lucro_bruto.text("Lucro Bruto R$ "+d.format_number(2,!0)).removeClass("hidden"),i.lbl_percentual_lucro.text("Margem de lucro (%) "+r.format_number(2,!0)).removeClass("hidden")},this.btn_imprimir.unbind("click"),this.btn_imprimir.click(function(){var t=1;App.temp.empresa&&(t=App.temp.empresa),App.obter_token_publico(function(o){App.download(WS_URI+"oportunidade/gerar_pdf/?empresa_id="+t+"&oportunidade_orcamento_id="+i.oportunidade_orcamento_id+"&token_publico="+o)})}),this.btn_visualizar_email.unbind("click"),this.btn_visualizar_email.click(function(){View.load("oportunidade/email_orcamento",function(t,o){o.show(FORMULARIO.VISUALIZAR,null,null,i.oportunidade_orcamento_id)},View.ABA.SIM)}),this.btn_excluir.unbind("click"),this.btn_excluir.click(function(){var t={oportunidade_orcamento_id:i.oportunidade_orcamento_id};WS.post("oportunidade_orcamento/excluir",t,function(t){alert_saved("Orçamento #"+t.id+" excluido com sucesso"),i.unload()},[i.btn_excluir])}),this.btn_aprovar.unbind("click"),this.btn_aprovar.click(function(){var t={oportunidade_orcamento_id:i.oportunidade_orcamento_id,situacao:ORCAMENTO_FILTROS.APROVADO};WS.post("oportunidade_orcamento/alterar_situacao",t,function(t){alert_saved("Orçamento #"+t.id+" aprovado com sucesso"),i.unload()},[i.btn_aprovar])}),this.btn_reprovar.unbind("click"),this.btn_reprovar.click(function(){View.load("orcamento/justificativa",function(t,o){o.onsave=function(t){var o={oportunidade_orcamento_id:i.oportunidade_orcamento_id,situacao:ORCAMENTO_FILTROS.REPROVADO,justificativa:t};WS.post("oportunidade_orcamento/alterar_situacao",o,function(t){alert_saved("Orçamento #"+t.id+" reprovado com sucesso"),i.unload()},[i.btn_aprovar])},o.show(i.oportunidade_orcamento_id,FORMULARIO.NOVO)})})}});