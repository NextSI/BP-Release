define([],function(){return function(t){"use strict";var i=this;this.html_id=t,this.dialog=$("#"+this.html_id),this.title="Chamados Interagidos",this.dx_listagem=this.dialog.find(".dx_listagem"),this.dataGrid=null,this.div_dt_ini=this.dialog.find(".div_dt_ini"),this.div_dt_fim=this.dialog.find(".div_dt_fim"),this.dt_ini=null,this.dt_fim=null;var a=new Date;a.setDate(1);var d=pad(a.getMonth()+1,2),n=a.getFullYear(),e=new Date(n,d,1),o=new Date(n,d,0);i.dt_ini=n+"-"+d+"-"+pad(e.getDate(),2),i.dt_fim=n+"-"+d+"-"+pad(o.getDate(),2);var s=function(){i.dt_ini&&i.dt_fim&&i.listar()},_=i.div_dt_ini.dxDateBox({type:"date",showClearButton:!0,displayFormat:"dd/MM/yyyy",value:i.dt_ini,width:"100%",onValueChanged:function(t){l.option("min",t.value),i.dt_ini=formatDate(t.value,!0),s()}}).dxDateBox("instance"),l=i.div_dt_fim.dxDateBox({type:"date",showClearButton:!0,displayFormat:"dd/MM/yyyy",value:i.dt_fim,width:"100%",onValueChanged:function(t){_.option("max",t.value),i.dt_fim=formatDate(t.value,!0),s()}}).dxDateBox("instance");setTimeout(function(){_.option("max",i.dt_fim),l.option("min",i.dt_ini)}),this.listar=function(){WS.get("chamado/listar_interagidos/",{data_inicio:i.dt_ini,data_fim:i.dt_fim},function(t){i.dataGrid=dx_Listagem_Padrao({div_html:i.dx_listagem,coluna_chave:"id",colunas:dx_Chamados_Interagidos_Colunas(i),datasource:t,nome:this.title,nome_parametro_usuario:"listagem_chamados_interagidos",fn_refresh_click:i.listar,summary:dx_Chamados_Interagidos_Summary(),diferenca_altura:82})})},this.unload=function(){View.unload(this.html_id)},this.listar()}});