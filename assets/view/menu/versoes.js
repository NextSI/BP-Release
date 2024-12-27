define([],function(){return function(e){"use strict";var o=this;this.html_id=e,this.dialog=$("#"+this.html_id),this.title="Histórico de Versões",this.onclose=null,this.img_qrcode=this.dialog.find(".img_qrcode"),this.lbl_versao=this.dialog.find(".lbl_versao"),this.lbl_commit=this.dialog.find(".lbl_commit"),this.dx_listagem_versoes=this.dialog.find(".dx_listagem_versoes"),this.lbl_ano=this.dialog.find(".lbl_ano"),this.clearState=!1,this.show=function(){o.lbl_versao.text(App.version),o.lbl_commit.text(App.commit_version.substr(0,8)),o.lbl_ano.text((new Date).getFullYear()),WS.get({route:"versoes.txt",final_route:!0,func_response:function(e){for(var i=[],t=0;t<e.length;t++)for(var a=e[t],s=0;s<a.itens.length;s++){var r=a.itens[s],n={versao:a.versao,descricao:r.descricao,hash:r.hash,tipo:r.tipo,referencia:r.referencia?r.referencia.toString():null,link:r.link,modulo:r.modulo};i.push(n)}o.preencher_versoes(i)},html_id:o.html_id}),App.is_nativo()?o.img_qrcode.hide():(o.img_qrcode.attr("src",WS_URI+"qrcode/webservice"),o.img_qrcode.show())},this.preencher_versoes=function(e){var i=document.createElement("div");i.className="div_versoes",i.style="min-width: 100%;",o.dx_listagem_versoes.find(".div_versoes").remove(),o.dx_listagem_versoes[0].appendChild(i);var t=detectmob()?"select":"dragAndDrop",a=App.sessao?get_icon_class():"icon_black";o.dx_listagem_versoes.find(".div_versoes").css("height","calc(100vh - 330px)");var s=o.dx_listagem_versoes.find(".div_versoes").dxDataGrid({dataSource:e,showBorders:!0,columnResizingMode:"widget",rowAlternationEnabled:!1,grouping:{autoExpandAll:!0},searchPanel:{visible:!0,width:200,placeholder:"Pesquisa geral"},paging:{pageSize:20},pager:{showPageSizeSelector:!0,allowedPageSizes:[20,50,100],showInfo:!0},allowColumnReordering:!0,allowColumnResizing:!0,columnChooser:{enabled:!0,allowSearch:!0,mode:t},stateStoring:{enabled:!0,type:"custom",customLoad:function(){if(App.sessao)return App.get_parametro_usuario("versoes")},customSave:function(e){App.sessao&&App.set_parametro_usuario("versoes",e)}},export:{enabled:!0,fileName:"Relatório de versões "+agora()},filterRow:{visible:!0,applyFilter:"auto"},headerFilter:{visible:!0},filterPanel:{visible:!0},sorting:{mode:"multiple"},columns:[{dataField:"versao",groupIndex:0,sortOrder:"desc",groupCellTemplate:function(e,o){for(var i=o.displayValue.split("."),t=0;t<i.length;t++)i[t]=parseInt(i[t]);e.append(i.join("."))},calculateGroupValue:function(e){for(var o=e.versao.split("."),i=0;i<o.length;i++)o[i]=pad(o[i],2);return o.join(".")}},{dataField:"tipo",width:100,lookup:{dataSource:[{id:"C",descricao:"Correção"},{id:"M",descricao:"Melhoria"}],valueExpr:"id",displayExpr:"descricao"}},"descricao",{dataField:"referencia",width:200},{dataField:"modulo",width:200},{type:"buttons",buttons:[{hint:"Visualizar descrição detalhada",icon:"fa fa-book",cssClass:a,visible:function(e){return!!e.row.data.link},onClick:function(e){var o=e.row.data.link.replace("webservice/index.php/",WS_URI);console.log(e.row.data.link),console.log(o),window.open(o,"_blank"),e.event.preventDefault()}}]}],onRowPrepared:function(e){setTimeout(function(){if("data"==e.rowType){var o=s.getCellElement(e.rowIndex,"descricao").text();if(o.trim().length){var i="fa fa-"+("C"==e.data.tipo?"bug":"plus");s.getCellElement(e.rowIndex,"descricao").html("<i class='"+i+"' aria-hidden='true'></i> "+o)}}})},onRowClick:function(e){onDoubleClick(e,function(){e.data.link&&window.open(e.data.link,"_blank")})},onContentReady:function(e){add_filtro_cor_tema(e),o.clearState&&(o.dx_listagem_versoes.find(".div_versoes").dxDataGrid("instance").state({}),o.clearState=!1)},onContextMenuPreparing:function(e){"header"==e.target&&Array.isArray(e.items)&&e.items.push({text:"Restaurar estado das colunas",visible:!0,beginGroup:!0,onItemClick:function(e){DevExpress.ui.dialog.confirm("Os filtros, ordenações, agrupamentos, posição, tamanho, e visibilidade das colunas desta listagem serão restauradas ao estado padrão. <b>Deseja continuar?</b>","Restaurar estado das colunas").done(function(e){e&&(o.clearState=!0,o.show())})}})},onToolbarPreparing:function(e){e.toolbarOptions.items.unshift({location:"before",template:function(){return"<h4>Histórico de Versões</h4>"}})}}).dxDataGrid("instance")},this.close=function(){void 0!==o.onclose&&o.onclose&&o.onclose()},this.unload=function(){o.close(),View.unload(this.html_id)},this.show()}});