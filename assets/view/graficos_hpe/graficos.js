define([],function(){return function(e){"use strict";var a=this;this.html_id=e,this.dialog=$("#"+this.html_id),this.modal=this.dialog.find(".modal"),this.modal.attr("id",this.html_id+"_modal"),this.title="Gráficos",this.tipo=null,this.onclose=null,this.onsave=null,this.profit_ability=this.dialog.find(".profit_ability"),this.nine_box=this.dialog.find(".nine_box"),this.cbo_versao=this.dialog.find(".cbo_versao"),this.kpi=this.dialog.find(".kpi"),this.responsabilidade=this.dialog.find(".responsabilidade"),this.competencia=this.dialog.find(".competencia"),this.comparar=this.dialog.find(".comparar"),this.ae_desejado=this.dialog.find(".ae_desejado"),this.ae_atual=this.dialog.find(".ae_atual"),this.ce_atual=this.dialog.find(".ce_atual"),this.ce_desejado=this.dialog.find(".ce_desejado"),this.area_id=null,this.efetividade_atuacao=0,this.efetividade_competencias=0,this.desejado_atuacao_efetiva=0,this.desejado_competencias_essenciais=0,this.responsabilidade_id=0,this.atuacao_efetiva_id=0,this.id_versao="",this.show=function(e,t,i){a.responsabilidade_id=t,a.atuacao_efetiva_id=i,1!=App.sessao.dados.admin&&"S"!=App.sessao.dados.supervisor_empenho||(a.nine_box.removeClass("hidden"),a.comparar.removeClass("hidden")),WS.get("competencias_essenciais/gerar_graficos/",{responsabilidade_id:t,atuacao_efetiva_id:i},function(e){if(e.length>0)a.kpi.text(e[0].nome),a.responsabilidade.text(e[0].descricao),a.ae_desejado.text(e[0].desejado_atuacao),a.ae_atual.text(e[0].efetividade_atuacao),a.ce_atual.text(e[0].efetividade_competencias),a.ce_desejado.text(e[0].desejado_competencias),$.each(e,function(e,t){var i={efetividade_atuacao:t.efetividade_atuacao,efetividade_competencias:t.efetividade_competencias,desejado_atuacao_efetiva:t.desejado_atuacao,desejado_competencias_essenciais:t.desejado_competencias,versao:t.versao_controle};if(0==e)a.gera_grafico(i,$(".grafico_nine_box")),a.gera_grafico(i,$(".grafico_profit_ability"));else{var o="N. #"+t.versao_base+" - Ver. #"+t.versao_controle;add_option(a.cbo_versao,t.competencias_essenciais_id,o)}}),a.cbo_versao.selectpicker("refresh");else{var t=new Validation;t.add(new ValidationMessage(Validation.CODES.ERR_FIELD,"Dados insuficientes para gerar o gráfico")),alert_modal("Validação",t),a.unload()}})},a.cbo_versao.change(function(e){$.each($.find("[versao]"),function(e,a){1!=$(a).attr("versao")&&a.remove()}),$(this).val()>0&&WS.get("competencias_essenciais/gerar_graficos/",{competencias_essenciais_id:$(this).val(),responsabilidade_id:a.responsabilidade_id,atuacao_efetiva_id:a.atuacao_efetiva_id},function(e){var t=e[0];$.each($.find("[versao='"+t.versao_controle+"']"),function(e,a){a.remove()});var i={efetividade_atuacao:t.efetividade_atuacao,efetividade_competencias:t.efetividade_competencias,desejado_atuacao_efetiva:t.desejado_atuacao,desejado_competencias_essenciais:t.desejado_competencias,versao:t.versao_controle};a.gera_grafico(i,$(".grafico_nine_box")),a.gera_grafico(i,$(".grafico_profit_ability"))})}),this.gera_grafico=function(e,a){var t=e.efetividade_atuacao,i=e.efetividade_competencias,o=e.desejado_atuacao_efetiva,s=e.desejado_competencias_essenciais,d=t/100*400,c=i/100*420,n=o/100*400,r=s/100*420;d=420-d,c=90+c,n=420-n,r=90+r;var l=a,_=l.find("[template-pontos]"),p=l.find("[template-pontos]").find(".ponto_atual").clone(),f=l.find("[template-pontos]").find(".ponto_desejado").clone();_.removeAttr("template-pontos"),p.css("display","").attr("versao",e.versao),f.css("display","").attr("versao",e.versao),p.attr({cx:Math.ceil(c),cy:Math.ceil(d)}),f.attr({cx:Math.ceil(r),cy:Math.ceil(n)}),p.appendTo(_),f.appendTo(_);var v=l.find("[template-ae-desejado]").clone(),h=l.find("[template-ae-atual]").clone(),m=l.find("[template-ce-desejado]").clone(),u=l.find("[template-ce-atual]").clone();v.removeAttr("template-ae-desejado").attr("versao",e.versao).css("display",""),h.removeAttr("template-ae-atual").attr("versao",e.versao).css("display",""),m.removeAttr("template-ce-desejado").attr("versao",e.versao).css("display",""),u.removeAttr("template-ce-atual").attr("versao",e.versao).css("display",""),v.attr({"font-size":15,x:r,y:n-20}).text("AE: "+o+"%"),m.attr({"font-size":15,x:r,y:n-8}).text("CE: "+s+"%"),h.attr({"font-size":15,x:c+55,y:d+15}).text("AE: "+t+"%"),u.attr({"font-size":15,x:c+55,y:d+25}).text("CE: "+i+"%");var g=l.find("[template-fundo-atual]").clone(),j=l.find("[template-fundo-desejado]").clone();g.removeAttr("template-fundo-atual").attr("versao",e.versao).css("display",""),j.removeAttr("template-fundo-desejado").attr("versao",e.versao).css("display",""),g.attr({x:c,y:d}),j.attr({x:r-55,y:n-35});var y=l.find("[template-linha-competencia-atual]").clone(),x=l.find("[template-linha-atuacao-atual]").clone(),b=l.find("[template-linha-competencia-desejado]").clone(),M=l.find("[template-linha-atuacao-desejado]").clone();y.removeAttr("template-linha-competencia-atual").attr("versao",e.versao).css("display",""),x.removeAttr("template-linha-atuacao-atual").attr("versao",e.versao).css("display",""),b.removeAttr("template-linha-competencia-desejado").attr("versao",e.versao).css("display",""),M.removeAttr("template-linha-atuacao-desejado").attr("versao",e.versao).css("display",""),y.attr({x1:90,x2:Math.ceil(c),y1:Math.ceil(d),y2:Math.ceil(d),stroke:"red"}),x.attr({x1:Math.ceil(c),x2:Math.ceil(c),y1:420,y2:Math.ceil(d),stroke:"red"}),b.attr({x1:90,x2:Math.ceil(r),y1:Math.ceil(n),y2:Math.ceil(n),stroke:"blue"}),M.attr({x1:Math.ceil(r),x2:Math.ceil(r),y1:420,y2:Math.ceil(n),stroke:"blue"}),l.find(".content_data").append(g,j,y,x,b,M,v,h,m,u)},this.unload=function(){a.close(),View.unload(this.html_id)},this.close=function(){close_modal(a.modal.attr("id")),void 0!==a.onclose&&a.onclose&&a.onclose(this.fechar_janela_pai)}}});