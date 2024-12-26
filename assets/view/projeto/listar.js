define([],function(){return function(a){"use strict";var t=this;this.html_id=a,this.dialog=$("#"+this.html_id),this.title="Projetos",this.dx_listagem_projeto=this.dialog.find(".dx_listagem_projeto");const e=App.get_parametro_usuario("projeto");this.dataGrid=null,this.template=e.template?e.template:"N",this.clearState=!1,this.show=async function(){t.listar()},this.listar_categorias=async function(){const a=await WS.get({route:"/projeto_categoria/listar/",data:null,awaitReturn:!0});return(a.length||Object.keys(a).length)&&a.data?a.data:[]},this.listar_classificacoes=async function(){return await WS.get({route:"/projeto_classificacao/listar/",data:null,awaitReturn:!0})},this.listar_cores_atividades=async function(){return await WS.get({route:"/cores_atividades_execucao/listar/",data:null,awaitReturn:!0})},this.listar_cores_atividades_saldo=async function(){return await WS.get({route:"/cores_atividades_saldo/listar/",data:null,awaitReturn:!0})},this.listar_projeto_status=async function(){return await WS.get({route:"/projeto_status/listar/",data:null,awaitReturn:!0})},this.get_objeto_formulario=async function(){return+App.sessao.dados.parametro_projeto.projeto_formulario_id>0?await WS.get({route:"/formulario_projeto/get_formulario/",awaitReturn:!0}):[]},this.get_projeto_colunas_formulario=async function(){return await WS.get({route:"/projeto/get_projeto_colunas_formulario/",awaitReturn:!0})},this.listar=async function(){t.dataGrid&&t.dataGrid.beginCustomLoading();const a={categorias:await t.listar_categorias(),classificacoes:await t.listar_classificacoes(),cores_atividades:await t.listar_cores_atividades(),cores_atividades_saldo:await t.listar_cores_atividades_saldo(),projeto_status:await t.listar_projeto_status(),formulario_customizado:await t.get_objeto_formulario(),colunas_formulario:await t.get_projeto_colunas_formulario()};t.preencher(a)},this.preencher=function(a){var e=document.createElement("div");e.className="div_listagem_projeto",e.style="min-width: 100%;",t.dx_listagem_projeto.find(".div_listagem_projeto").remove(),t.dx_listagem_projeto[0].appendChild(e);var o=detectmob()?"select":"dragAndDrop",r=get_icon_class();t.dx_listagem_projeto.find(".div_listagem_projeto").css("height","calc(100vh - 42px)");var i=a.colunas_formulario,n=a.projeto_status,l=function(t){for(var e=0;e<a.cores_atividades.length;e++){var o=a.cores_atividades[e];if(parseInt(t)>=parseInt(o.inicio)&&parseInt(t)<=parseInt(o.fim))return o}return!1},s=[{dataField:"codigo",width:"100px"},{dataField:"nome",caption:"Nome do projeto",width:"100px"},{dataField:"projeto_categoria_id",caption:"Categoria",lookup:{dataSource:a.categorias,displayExpr:"descricao",valueExpr:"id"},groupIndex:0,allowSearch:!1},{dataField:"projeto_status_id",caption:"Status",dataType:"number",format:"fixedPoint",precision:0,lookup:{dataSource:n,displayExpr:"descricao",valueExpr:"projeto_status_id"},width:"100px",allowSearch:!1},{dataField:"status_atividades",dataType:"number",format:"fixedPoint",precision:0,lookup:{dataSource:[{id:"1",descricao:"Programado"},{id:"2",descricao:"Andamento"},{id:"3",descricao:"Concluído"},{id:"4",descricao:"Não iniciado"},{id:"5",descricao:"Atrasado"},{id:"6",descricao:"Cancelado"}],displayExpr:"descricao",valueExpr:"id"},width:"100px",allowSearch:!1},{dataField:"classificacao_projeto_id",caption:"Classificação",dataType:"number",format:"fixedPoint",precision:0,lookup:{dataSource:a.classificacoes,displayExpr:"nome",valueExpr:"projeto_classificacao_id"},width:"100px",allowSearch:!1},{dataField:"inicio",caption:"Ínicio Previsto",dataType:"date",format:"dd/MM/yyyy",width:"100px",allowSearch:!1,allowHeaderFiltering:!1},{dataField:"fim",caption:"Término Previsto",dataType:"date",format:"dd/MM/yyyy",width:"100px",allowSearch:!1,allowHeaderFiltering:!1},{dataField:"horas_previstas",calculateSortValue:function(a){return a.horas_previstas?fn_converter_horas_para_segundos(a.horas_previstas):null},calculateDisplayValue:function(a){return a.horas_previstas?format_time(a.horas_previstas):""},width:"80px",allowSearch:!1},{dataField:"horas_trabalhadas",calculateSortValue:function(a){return a.horas_trabalhadas?fn_converter_horas_para_segundos(a.horas_trabalhadas):null},calculateDisplayValue:function(a){return a.horas_trabalhadas?format_time(a.horas_trabalhadas):""},width:"80px",allowSearch:!1},{dataField:"saldo_horas",calculateSortValue:function(a){return a.saldo_horas?fn_converter_horas_para_segundos(a.saldo_horas):null},calculateDisplayValue:function(a){return a.saldo_horas?format_time(a.saldo_horas,!0):""},width:"80px",allowSearch:!1},{dataField:"percentual_horas_trabalhadas",caption:"% Trabalhado",dataType:"number",calculateSortValue:function(a){return a.percentual_horas_trabalhadas?parseInt(a.percentual_horas_trabalhadas):null},calculateDisplayValue:function(a){return a.percentual_horas_trabalhadas?a.percentual_horas_trabalhadas+" %":null},width:"80px",allowSearch:!1},{dataField:"percentual_saldo_horas",caption:"% Saldo",dataType:"number",calculateSortValue:function(a){return a.percentual_saldo_horas?parseInt(a.percentual_saldo_horas):null},calculateDisplayValue:function(a){return a.percentual_saldo_horas?a.percentual_saldo_horas+" %":null},width:"80px",allowSearch:!1},{dataField:"porcentagem_concluido",caption:"% Conclusão",dataType:"number",calculateSortValue:function(a){return a.porcentagem_concluido?parseInt(a.porcentagem_concluido):null},calculateDisplayValue:function(a){return a.porcentagem_concluido?a.porcentagem_concluido+" %":null},width:"80px",allowSearch:!1},{dataField:"percentual_estimado",caption:"% Estimado",dataType:"number",calculateSortValue:function(a){return a.percentual_estimado?parseInt(a.percentual_estimado):null},calculateDisplayValue:function(a){return a.percentual_estimado?a.percentual_estimado+" %":null},allowFiltering:!1,allowSorting:!1,width:"80px",allowSearch:!1},{dataField:"cliente_nome",caption:"Cliente",width:"100px"},{dataField:"tipo_nome",caption:"Tipo Projeto",width:"80px",allowSearch:!1,allowFiltering:!1,allowHeaderFiltering:!0},{dataField:"entrada_previsto",dataType:"number",width:"100px",format:{type:"currency",precision:2},editorOptions:{format:"R$ #,##0.##",showClearButton:!0},allowSearch:!1},{dataField:"entrada_realizado",dataType:"number",width:"100px",format:{type:"currency",precision:2},editorOptions:{format:"R$ #,##0.##",showClearButton:!0},allowSearch:!1},{dataField:"saida_previsto",dataType:"number",width:"100px",format:{type:"currency",precision:2},editorOptions:{format:"R$ #,##0.##",showClearButton:!0},allowSearch:!1},{dataField:"saida_realizado",dataType:"number",width:"100px",format:{type:"currency",precision:2},editorOptions:{format:"R$ #,##0.##",showClearButton:!0},allowSearch:!1},{dataField:"saldo_previsto",dataType:"number",width:"100px",format:{type:"currency",precision:2},editorOptions:{format:"R$ #,##0.##",showClearButton:!0},allowSearch:!1},{dataField:"saldo_realizado",dataType:"number",width:"100px",format:{type:"currency",precision:2},editorOptions:{format:"R$ #,##0.##",showClearButton:!0},allowSearch:!1},{type:"buttons",buttons:[{hint:"Visualizar atividades",icon:"fa fa-tasks",cssClass:r,onClick:function(a){View.load("atividade_projeto/listar",function(t,e){e.show(a.row.data.projeto_id,a.row.data.template,a.row.data.cliente_nome)},View.ABA.MULTIPLAS,null,null,{projetoId:a.row.data.projeto_id}),a.event.preventDefault()}},{hint:"Visualizar projeto",icon:"fa fa-eye",cssClass:r,onClick:function(a){View.load("projeto/detalhes",function(t,e){e.show(a.row.data.projeto_id,FORMULARIO.VISUALIZAR)},View.ABA.MULTIPLAS,null,null,{projetoId:a.row.data.projeto_id}),a.event.preventDefault()}},{hint:"Editar projeto",icon:"fa fa-pencil-alt",cssClass:r,visible:function(a){return"S"==a.row.data.gerente_projeto||"S"==a.row.data.planejamento_formulario||App.sessao.dados.admin},onClick:function(a){View.load("projeto/detalhes",function(e,o){o.onclose=function(){setTimeout(function(){View.get_md5_tela_ativa()==t.html_id&&t.listar()})},o.show(a.row.data.projeto_id,FORMULARIO.EDITAR,null,null,"S"==a.row.data.gerente_projeto,"S"==a.row.data.planejamento_formulario)},View.ABA.MULTIPLAS,null,null,{projetoId:a.row.data.projeto_id}),a.event.preventDefault()}},{hint:"Visualizar gantt",icon:"fa fa-chart-bar",cssClass:r,onClick:function(a){View.loadReact(window.views.projeto.ProjetoGantt.default,{abaTitulo:`Gantt - ${a.row.data.nome}`,projeto_id:a.row.data.projeto_id,projeto_nome:a.row.data.nome},a=>{},View.ABA.MULTIPLAS),a.event.preventDefault()}},{hint:"Relatório de posicionamento do projeto",icon:"fa fa-file-pdf",cssClass:r,visible:function(a){return"S"==a.row.data.planejamento_relatorio||"S"==a.row.data.gerente_projeto||App.sessao.dados.admin},onClick:function(a){View.load("projeto/parametros_relatorio",function(t,e){e.show(a.row.data.projeto_id,a.row.data.projeto_atividade_id)}),a.event.preventDefault()}},{hint:"Resumo do Projeto",icon:"far fa-calendar-alt",cssClass:r,visible:function(a){return"S"==a.row.data.planejamento_relatorio||"S"==a.row.data.gerente_projeto||App.sessao.dados.admin},onClick:function(a){alert_info("Gerando seu relatório em PDF. Aguarde."),App.obter_token_publico(function(t){View.navegador(WS_URI+"projeto/gerar_resumo_projeto/?projeto_id="+a.row.data.projeto_id+"&token_publico="+t,`Posicionamento - ${a.row.data.nome}`,View.ABA.MULTIPLAS,!0,`Posicionamento - ${a.row.data.nome}`)})}},{hint:"Excluir projeto",icon:"fa fa-trash",cssClass:r,visible:function(a){return"S"==a.row.data.gerente_projeto||App.sessao.dados.admin},onClick:function(a){View.load("projeto/detalhes",function(e,o){o.onclose=function(){setTimeout(function(){View.get_md5_tela_ativa()==t.html_id&&t.listar()})},o.show(a.row.data.projeto_id,FORMULARIO.EXCLUIR)},View.ABA.MULTIPLAS),a.event.preventDefault()}},{hint:"Favoritar",icon:"far fa-star",cssClass:r,visible:function(a){return!verifica_favorito("projetos",a.row.data.projeto_id)},onClick:function(a){favoritar_item("projetos",a.row.data.projeto_id,!0),t.listar()}},{hint:"Desfavoritar",icon:"fas fa-star",cssClass:r,visible:function(a){return verifica_favorito("projetos",a.row.data.projeto_id)},onClick:function(a){favoritar_item("projetos",a.row.data.projeto_id,!1),t.listar()}}]}];i&&ColumnsFormularioCustomizado(i,s,a.formulario_customizado),t.dataGrid=t.dx_listagem_projeto.find(".div_listagem_projeto").dxDataGrid({dataSource:t.listar_projetos(),showBorders:!0,columnResizingMode:"widget",rowAlternationEnabled:!1,grouping:{autoExpandAll:!0},searchPanel:{visible:!detectmob(),width:200,placeholder:"Pesquisa geral"},remoteOperations:!0,pager:{showPageSizeSelector:!0,allowedPageSizes:[20,50,100],showInfo:!0},allowColumnReordering:!0,allowColumnResizing:!0,columnChooser:{enabled:!0,allowSearch:!0,mode:o},stateStoring:{enabled:!0,type:"custom",customLoad:function(){var a=App.get_parametro_usuario("projeto");return t.template=a.template?a.template:"N",a},customSave:function(a){App.set_parametro_usuario("projeto",a)}},selection:{mode:"multiple"},export:{enabled:!0,fileName:"Relatório de projetos "+agora(),allowExportSelectedData:!0,customizeExcelCell:a=>{var t=a.gridCell;if(t&&"data"===t.rowType&&["horas_previstas","horas_trabalhadas","saldo_horas"].includes(t.column.dataField)&&(t.column.dataType="number",a.numberFormat="[h]:mm",a.value)&&window.fn_converter_horas_para_segundos(a.value)>0){var e=new Date("1900-01-01 00:00:00");e.setSeconds(window.fn_converter_horas_para_segundos(a.value)-86400),a.value=e}}},filterRow:{visible:!0,applyFilter:"auto"},headerFilter:{visible:!0},filterPanel:{visible:!0},sorting:{mode:"multiple"},columnFixing:{enabled:!0},groupPanel:{visible:!0},onRowPrepared:function(e){setTimeout(function(){if("data"==e.rowType){var o=function(t){for(var e=0;e<a.cores_atividades_saldo.length;e++){var o=a.cores_atividades_saldo[e];if(parseInt(t)>=parseInt(o.inicio)&&parseInt(t)<=parseInt(o.fim))return o}return!1}(e.data.percentual_saldo_horas);if(o&&t.dataGrid.getCellElement(e.rowIndex,"percentual_saldo_horas")){var r=t.dataGrid.getCellElement(e.rowIndex,"percentual_saldo_horas");o.cor_fonte&&r.css("color",o.cor_fonte),o.cor&&r.css("background-color",o.cor)}var i=l(e.data.porcentagem_concluido);i&&t.dataGrid.getCellElement(e.rowIndex,"porcentagem_concluido")&&(r=t.dataGrid.getCellElement(e.rowIndex,"porcentagem_concluido"),i.cor_fonte&&r.css("color",i.cor_fonte),i.cor&&r.css("background-color",i.cor));var n,s=l(e.data.percentual_estimado);if(s&&t.dataGrid.getCellElement(e.rowIndex,"percentual_estimado")&&t.dataGrid.getCellElement(e.rowIndex,"percentual_estimado").css("color",s.cor_fonte).css("background-color",s.cor),t.dataGrid.getCellElement(e.rowIndex,"projeto_status_id")){var d="Andamento"==(n=t.dataGrid.getCellElement(e.rowIndex,"projeto_status_id").text())?"info":"Concluído"==n?"success":"Não iniciado"==n?"warning":"danger";t.dataGrid.getCellElement(e.rowIndex,"projeto_status_id").html('<span class="label" style="background-color: '+e.data.cor+"; color:"+e.data.cor_fonte+'">'+t.dataGrid.getCellElement(e.rowIndex,"projeto_status_id").text()+"</span>")}if(t.dataGrid.getCellElement(e.rowIndex,"status_atividades"))d="Andamento"==(n=t.dataGrid.getCellElement(e.rowIndex,"status_atividades").text())?"info":"Concluído"==n?"success":"Não iniciado"==n?"warning":"danger",t.dataGrid.getCellElement(e.rowIndex,"status_atividades").html('<span class="label label-'+d+'">'+t.dataGrid.getCellElement(e.rowIndex,"status_atividades").text()+"</span>")}})},onToolbarPreparing:function(a){var e=[{widget:"dxButton",options:{icon:"fa fa-plus",hint:"Novo projeto",text:"Novo projeto",visible:App.verifica_permissao(App.temp.empresa,"criacao_projetos"),onClick:function(){View.load("projeto/detalhes",function(a,e){e.onclose=function(){setTimeout(function(){View.get_md5_tela_ativa()==t.html_id&&t.listar()})},e.show(null,FORMULARIO.NOVO)},View.ABA.MULTIPLAS)}},location:"after",name:"BtnNovoProjeto",locateInMenu:"auto"},{widget:"dxButton",options:{icon:"fa fa-sync",hint:"Recarregar listagem de projetos",text:"Recarregar listagem de projetos",onClick:function(){t.listar()}},showText:"inMenu",location:"after",name:"BtnRefresh",locateInMenu:"auto"},{widget:"dxButton",options:{icon:"fa fa-cog",hint:"Configurar preferências",text:"Configurar preferências",onClick:function(){View.load("projeto/configuracoes",function(a,t){t.show()})},visible:App.sessao.dados.admin||App.verifica_permissao(App.sessao.dados.empresa_filial_id,"config_modulo_projetos")},showText:"inMenu",location:"after",name:"BtnConfiguracoes",locateInMenu:"auto"},{widget:"dxButton",options:{icon:"assets/img/icones_bp/"+r+"_project.svg",hint:"Listar projetos",text:"Listar projetos",onClick:function(){t.template="N",App.set_parametro_usuario("projeto",{template:t.template}),t.listar()},onInitialized:function(a){"N"==t.template&&a.component.element().addClass("dx-state-active")}},showText:"inMenu",location:"after",name:"BtnProjetos",locateInMenu:"auto"},{widget:"dxButton",options:{icon:"fa fa-clone",hint:"Listar template",text:"Listar template",onClick:function(){t.template="S",App.set_parametro_usuario("projeto",{template:t.template}),t.listar()},onInitialized:function(a){"S"==t.template&&a.component.element().addClass("dx-state-active")}},showText:"inMenu",location:"after",name:"BtnModoTeste",locateInMenu:"auto"}];a.toolbarOptions.items=add_botao_dx_toolbar(e,a.toolbarOptions.items)},onContentReady:function(a){add_filtro_cor_tema(a),t.clearState&&(t.dataGrid.state({}),t.clearState=!1)},columns:s,onRowClick:function(a){var t=a.component;function e(){t.clickCount=1,t.clickKey=a.key,t.clickDate=new Date}t.clickCount&&1==t.clickCount&&t.clickKey==a.key?t.clickKey==a.key&&(new Date-t.clickDate<=300?(t.clickCount=0,t.clickKey=0,t.clickDate=null,View.load("atividade_projeto/listar",function(t,e){e.show(a.data.projeto_id,a.data.template,a.data.cliente_nome)},View.ABA.MULTIPLAS,null,null,{projetoId:a.data.projeto_id}),a.event.preventDefault()):e()):e()},onContextMenuPreparing:function(a){"header"==a.target&&Array.isArray(a.items)&&a.items.push({text:"Restaurar estado das colunas",visible:!0,beginGroup:!0,onItemClick:function(a){DevExpress.ui.dialog.confirm("Os filtros, ordenações, agrupamentos, posição, tamanho, e visibilidade das colunas desta listagem serão restauradas ao estado padrão. <b>Deseja continuar?</b>","Restaurar estado das colunas").done(function(a){a&&(t.clearState=!0,t.listar())})}})}}).dxDataGrid("instance"),t.dataGrid.endCustomLoading()},this.listar_projetos=(()=>new DevExpress.data.DataSource.default({paginate:!0,pageSize:20,key:"projeto_id",load:a=>{let e=window.loadOptionsToActionParams(a);return new Promise((a,o)=>{WS.get({route:"/projeto/listar/",data:{template:t.template,dx_grid:!0,...e},func_response:t=>{let e=window.createLoadExtra(t);a({...e,data:t.data})},func_fail:a=>{a.validation&&o(new Error(a.validation.messages.map(function(a){return a.message}).join("<br/>")))}})})}})),this.unload=function(){View.unload(this.html_id)}}});