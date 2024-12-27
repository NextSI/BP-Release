define([],function(){return function(e){"use strict";var a=this;this.filtro_atividades_removidas=function(e){return void 0!==e.filter?e.filter(function(e){var a=!0;return!0===e.removido&&(a=!1),a}):[]},this.processar_sequencia=function(e,o,t){if(void 0===e.versao_processo_id){o&&(o=o.toString()+".");for(var i=0;i<e.elementos.length;i++)!0===e.elementos[i].removido&&(e.elementos[i].sequencia="x");for(var s=0,n=0;n<t.length;n++)for(var l=t[n],d=0;d<e.elementos.length;d++){var r=e.elementos[d];l.elem_key!=r.elem_key||e.elementos[d].sequencia||(s++,e.elementos[d].sequencia=o.toString()+s,t[n].sequencia=e.elementos[d].sequencia)}for(n=0;n<t.length;n++){l=t[n];for(var c=[],_=0;_<l.destinos.length;_++){var m=l.destinos[_];for(d=0;d<e.elementos.length;d++)r=e.elementos[d],m.removido||m.elem_key!=r.elem_key||r.sequencia||c.push(r)}a.processar_sequencia(e,l.sequencia,c)}}},this.proc_qtde_atividades_gateway=function(e,a){var o=0,t=[],i=[];$(e.destinos).each(function(e,a){parseInt(a.elemento_tipo,10)!=PROCESSO_ELEMENTO_TIPO.GATEWAY||a.removido&&0!=a.removido||(parseInt(a.tipo,10)==PROCESSO_GATEWAY_TIPO.PARALELO?t.push(a):parseInt(a.tipo,10)==PROCESSO_GATEWAY_TIPO.INCLUSIVO&&i.push(a))}),$(t).each(function(e,t){o=0,$(a.elementos).each(function(e,a){$(a.destinos).each(function(e,i){i.elem_key!=t.elem_key||a.removido&&0!=a.removido||(o+=1)})}),t.qtde_origens_gateway_paralelo=o}),$(t).each(function(e,o){$(a.elementos).each(function(e,a){o.elem_key!=a.elem_key||a.removido&&0!=a.removido||(a.qtde_origens_gateway_paralelo=o.qtde_origens_gateway_paralelo)})})},this.excluir_elemento=function(e,a,o){for(var t=0;t<a.elementos.length;t++)if(a.elementos[t].elem_key==e.elem_key){for(a.elementos[t].removido=!0,t=0;t<a.elementos.length;t++)for(var i=a.elementos[t],s=0;s<i.destinos.length;s++){var n=i.destinos[s],l=!1;void 0!==n.elem_key&&n.elem_key==e.elem_key?l=!0:n.elemento_tipo==e.elemento_tipo&&n.id==e.id&&(l=!0),l&&(a.elementos[t].destinos[s].removido=!0)}o();break}},this.atribuir_dados_elementos=function(e){$(e.elementos).each(function(a,o){$(o.destinos).each(function(o,t){$(e.elementos).each(function(i,s){t.elemento_tipo==s.elemento_tipo&&(parseInt(t.id)&&t.id==s.id||t.elem_key&&t.elem_key==s.elem_key)&&(e.elementos[a].destinos[o].elem_key=s.elem_key,e.elementos[a].destinos[o].descricao=s.descricao,e.elementos[a].destinos[o].tipo=s.tipo)})})})},this.gerar_elem_key=function(e,o,t){if($(e.elementos).each(function(a,o){void 0!==o.elem_key&&o.elem_key||(e.elementos[a].elem_key=String((new Date).getTime())+String(Math.round(1e4*Math.random()))+String((new Date).getTime())+String(Math.round(1e4*Math.random()))),void 0===o.destinos&&(e.elementos[a].destinos=[]),void 0===e.elementos[a].removido&&(e.elementos[a].removido=!1)}),a.atribuir_dados_elementos(e),void 0!==o&&void 0!==t)for(var i=0;i<e.elementos.length;i++){var s=e.elementos[i];if(!s.removido){o.push({id:parseInt(s.id)?(s.elemento_tipo==PROCESSO_ELEMENTO_TIPO.ATIVIDADE?"atividade_":"gateway_")+s.id:s.elem_key,type:str_processo_elemento_tipo(s.elemento_tipo,s.tipo),text:s.descricao});for(var n=0;n<s.destinos.length;n++){var l=s.destinos[n];l.removido||(s.key=s.id?s.id:s.elem_key,l.key=l.id?l.id:l.elem_key,t.push({id:(s.elemento_tipo==PROCESSO_ELEMENTO_TIPO.ATIVIDADE?"atividade_":"gateway_")+s.key+"_"+(l.elemento_tipo==PROCESSO_ELEMENTO_TIPO.ATIVIDADE?"atividade_":"gateway_")+l.key,from:(s.elemento_tipo==PROCESSO_ELEMENTO_TIPO.ATIVIDADE?"atividade_":"gateway_")+s.key,to:(l.elemento_tipo==PROCESSO_ELEMENTO_TIPO.ATIVIDADE?"atividade_":"gateway_")+l.key}))}}}},this.render_atividades=function(e,o,t,i,s){a.gerar_elem_key(o),void 0===o.versao_processo_id&&$(o.elementos).each(function(e,a){o.elementos[e].sequencia=""});var n,l=(n=a.filtro_atividades_removidas(o.elementos)).filter(function(e){return parseInt(e.elemento_tipo,10)==PROCESSO_ELEMENTO_TIPO.ATIVIDADE&&parseInt(e.tipo,10)==PROCESSO_ATIVIDADE_TIPO.INICIO});a.processar_sequencia(o,"",l),$(o.elementos).each(function(e,a){$(a.destinos).each(function(a,t){$(o.elementos).each(function(i,s){s.elem_key==t.elem_key&&(o.elementos[e].destinos[a].sequencia=s.sequencia)})})}),n=(n=a.filtro_atividades_removidas(o.elementos)).sort(function(e,a){return e.sequencia>a.sequencia?1:e.sequencia<a.sequencia?-1:0}),$(n).each(function(e,t){$(o.elementos).each(function(e,i){i.elem_key==t.elem_key&&a.proc_qtde_atividades_gateway(t,o)})});for(var d=0;d<n.length;d++){var r=n[d],c=r.sequencia.substr(0,r.sequencia.lastIndexOf("."));r.sequencia=r.sequencia?r.sequencia:r.elem_key,r.sequencia_pai=c||0}var _=document.createElement("div");_.className="div_listagem_atividades",_.style="min-width: 100%;",e.find(".div_listagem_atividades").remove(),e[0].appendChild(_);var m=detectmob()?"select":"dragAndDrop",v=get_icon_class(),u=function(e){switch(e.elemento_tipo){case PROCESSO_ELEMENTO_TIPO.ATIVIDADE:View.load("processo/atividade",function(a,s){s.onsave=i,s.show(e,FORMULARIO.EDITAR,o,t)});break;case PROCESSO_ELEMENTO_TIPO.GATEWAY:View.load("processo/gateway",function(a,s){s.onsave=i,s.show(e,FORMULARIO.EDITAR,o,null,null,t)})}},p=function(e){View.load("processo/atividade",function(a,s){s.onsave=i,s.show(null,FORMULARIO.NOVO,o,t,e)})},E=function(e){View.load("processo/gateway",function(a,s){s.onsave=i,s.show(null,FORMULARIO.NOVO,o,e,null,t)})},O=void 0!==i&&i?{type:"buttons",buttons:[{hint:"Editar registro",icon:"fa fa-pencil-alt",cssClass:v,onClick:function(e){u(e.row.data)}},{hint:"Apagar registro",icon:"fa fa-trash",cssClass:v,onClick:function(e){var t=e.row.data,s="";switch(t.elemento_tipo){case PROCESSO_ELEMENTO_TIPO.ATIVIDADE:s="Deseja remover esta atividade? Ela será removida automaticamente do fluxo de outras atividades e gateways, caso exista.";break;case PROCESSO_ELEMENTO_TIPO.GATEWAY:s="Deseja remover este gateway? Ele será removido automaticamente do fluxo de outras atividades e gateways, caso exista."}$(function(){DevExpress.ui.dialog.confirm("<i>"+s+"</i>",App.lang.generico.apagar_registro).done(function(e){e&&a.excluir_elemento(t,o,i)})})}}]}:null;e.find(".div_listagem_atividades").dxTreeList({dataSource:n,keyExpr:"sequencia",parentIdExpr:"sequencia_pai",showBorders:!0,autoExpandAll:!0,columnResizingMode:"widget",rowAlternationEnabled:!1,searchPanel:{visible:!detectmob(),width:200,placeholder:"Pesquisa geral"},scrolling:{mode:"standard"},filterRow:{visible:!0,applyFilter:"auto"},headerFilter:{visible:!0},filterPanel:{visible:!0},sorting:{mode:"multiple"},allowColumnReordering:!0,allowColumnResizing:!0,columnChooser:{enabled:!0,allowSearch:!0,mode:m},onToolbarPreparing:function(e){if(void 0!==i&&i){var a=[{widget:"dxButton",options:{icon:"assets/img/processo/atividade.svg",hint:"Nova atividade",text:"Nova atividade",onClick:function(){p()}},location:"after",name:"BtnNovaAtividade",locateInMenu:"auto"},{widget:"dxButton",options:{icon:"assets/img/processo/gateway.svg",hint:"Novo gateway",text:"Novo gateway",onClick:function(){E()}},location:"after",name:"BtnNovoGateway",locateInMenu:"auto"}];e.toolbarOptions.items=add_botao_dx_toolbar(a,e.toolbarOptions.items)}},columns:[{caption:"Tipo atividade",cellTemplate:function(e,a){var o=null,t=null,i=str_processo_elemento_tipo(a.data.elemento_tipo,a.data.tipo);if(a.data.elemento_tipo==PROCESSO_ELEMENTO_TIPO.ATIVIDADE)switch(parseInt(a.data.tipo)){case PROCESSO_ATIVIDADE_TIPO.NORMAL:o="info",t="assets/img/processo/atividade.svg";break;case PROCESSO_ATIVIDADE_TIPO.INICIO:o="success",t="assets/img/processo/atividade_inicio.svg";break;case PROCESSO_ATIVIDADE_TIPO.FIM:o="danger",t="assets/img/processo/atividade_fim.svg"}else if(a.data.elemento_tipo==PROCESSO_ELEMENTO_TIPO.GATEWAY)switch(o="warning",parseInt(a.data.tipo)){case PROCESSO_GATEWAY_TIPO.EXCLUSIVO:t="assets/img/processo/gateway_exclusivo.svg";break;case PROCESSO_GATEWAY_TIPO.PARALELO:t="assets/img/processo/gateway_paralelo.svg";break;case PROCESSO_GATEWAY_TIPO.INCLUSIVO:t="assets/img/processo/gateway_inclusivo.svg"}e.html('<div style="margin: 3px;"><img style="height: 20px; width: 20px" class="imagem_responsavel" src="'+t+'"><span class="label label-'+o+'" style="margin-left: 10px;">'+i+"</span></div>")}},{dataField:"descricao",caption:"Atividade"},{caption:"Responsáveis",cellTemplate:function(e,a){var t="";if(parseInt(a.data.tipo,10)!=PROCESSO_ATIVIDADE_TIPO.FIM)if("S"==a.data.tornar_superior_imediato_responsavel||1==a.data.tornar_superior_imediato_responsavel)(i=o.elementos.filter(function(e,o){return e.processo_atividade_id>0?e.processo_atividade_id==a.data.atividade_superior_imediato_responsavel_id:e.elem_key==a.data.atividade_superior_imediato_responsavel_elem_key}))&&void 0!==i[0]&&(t='<span class="label label-primary" style="vertical-align: middle;">S</span> Supervisor do executor da atividade: '+i[0].descricao);else if("S"==a.data.executor_responsavel_automatico||1==a.data.executor_responsavel_automatico){var i;(i=o.elementos.filter(function(e,o){return e.processo_atividade_id>0?e.processo_atividade_id==a.data.atividade_responsavel_automatico_id:e.elem_key==a.data.atividade_responsavel_automatico_elem_key}))&&void 0!==i[0]&&(t='<span class="label label-default" style="vertical-align: middle;">E</span> Executor da atividade: '+i[0].descricao)}else $(a.data.usuarios_responsaveis).each(function(e,a){if(!a.removido){var o='<span class="label label-info" style="vertical-align: middle;">U</span>';""!=t?-1==t.indexOf(a.nome)&&(t=t+", "+o+" "+a.nome):t=o+" "+a.nome}}),$(a.data.grupos_usuarios_responsaveis).each(function(e,a){if(!a.removido){var o='<span class="label label-warning" style="vertical-align: middle;">GU</span>';""!=t?-1==t.indexOf(a.nome)&&(t=t+", "+o+" "+a.nome):t=o+" "+a.nome}});e.html("<div>"+t+"</div>")}},{caption:"Destino",cellTemplate:function(e,a){for(var o="",t=0;t<a.data.destinos.length;t++){var i=a.data.destinos[t];i.removido||(o+='<i class="fa fa-arrow-right" aria-hidden="true"></i><span class="text-muted"> '+i.descricao+"</span>",o+=t==a.data.destinos.length?"":"<br />")}e.html("<div>"+o+"</div>")}},O],onRowPrepared:function(e){if("data"==e.rowType&&s&&e.data.elemento_tipo==PROCESSO_ELEMENTO_TIPO.ATIVIDADE)if(1==s.length&&e.data.id==s[0])e.rowElement.addClass("bg-info");else if(s.length>1){for(var a=!1,o=0;o<s.length;o++)s[o].versao_processo_atividade_id==e.data.id&&(a=!0,"concluido"==s[o].status?e.rowElement.addClass("bg-success"):"andamento"==s[o].status&&e.rowElement.addClass("bg-info"));a||e.rowElement.addClass("bg-warning")}},onRowClick:function(e){void 0!==i&&i&&onDoubleClick(e,function(){u(e.data)})},onContextMenuPreparing:function(e){"data"===e.row.rowType&&void 0!==i&&i&&(e.row.data.elemento_tipo==PROCESSO_ELEMENTO_TIPO.ATIVIDADE&&parseInt(e.row.data.tipo,10)!=PROCESSO_ATIVIDADE_TIPO.FIM||e.row.data.elemento_tipo==PROCESSO_ELEMENTO_TIPO.GATEWAY)&&(e.items=[{text:"Nova atividade como destino",onItemClick:function(){p(e.row.data)}},{text:"Novo gateway como destino",onItemClick:function(){E(e.row.data)}},{text:"Escolher atividade/gateway como destino",onItemClick:function(){switch(e.row.data.elemento_tipo){case PROCESSO_ELEMENTO_TIPO.ATIVIDADE:View.load("processo/atividade",function(a,s){s.onsave=i,s.show(e.row.data,FORMULARIO.EDITAR,o,t,null,s.lbl_tab_fluxo)});break;case PROCESSO_ELEMENTO_TIPO.GATEWAY:View.load("processo/gateway",function(a,s){s.onsave=i,s.show(e.row.data,FORMULARIO.EDITAR,o,null,s.lbl_tab_fluxo,t)})}}}])}})}}});