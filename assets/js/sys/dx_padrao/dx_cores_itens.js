var dx_Cores_Itens_Colunas=function(n){return[dx_Cores_Itens_Coluna_Nome(),dx_Cores_Itens_Coluna_Cor_Fundo(n),dx_Cores_Itens_Coluna_Cor_Fonte(n),dx_Cores_Itens_Coluna_Botoes(n)]},dx_Cores_Itens_Coluna_Nome=function(){return{dataField:"nome",caption:"Nome"}},dx_Cores_Itens_Coluna_Cor_Fundo=function(n){return{dataField:"cor_fundo",caption:"Cor de fundo",cellTemplate:function(o,e){$("<div>").dxColorBox({onInitialized:function(n){n.component.option("value",e.data.cor_fundo)},onValueChanged:function(o){n.dataGrid.cellValue(e.rowIndex,"cor_fundo",o.value)}}).appendTo(o)},allowEditing:!1}},dx_Cores_Itens_Coluna_Cor_Fonte=function(n){return{dataField:"cor_fonte",caption:"Cor da fonte",cellTemplate:function(o,e){$("<div>").dxColorBox({onInitialized:function(n){n.component.option("value",e.data.cor_fonte)},onValueChanged:function(o){n.dataGrid.cellValue(e.rowIndex,"cor_fonte",o.value)}}).appendTo(o)},allowEditing:!1}},dx_Cores_Itens_Coluna_Botoes=function(n){var o=get_icon_class();return{type:"buttons",buttons:[{hint:App.lang.generico.apagar_registro,icon:"fa fa-trash",cssClass:o,visible:function(n){return!n.row.removed},onClick:function(o){n.dataGrid.deleteRow(o.row.rowIndex),o.event.preventDefault()}},{hint:App.lang.generico.recuperar_registro,icon:"fa fa-undo",cssClass:o,visible:function(n){return n.row.removed},onClick:function(o){n.dataGrid.undeleteRow(o.row.rowIndex),o.event.preventDefault()}}]}},dx_Cores_Itens_Btn_Novo=function(n){return{widget:"dxButton",options:{icon:"fa fa-plus",hint:App.lang.generico.adicionar,text:App.lang.generico.adicionar,onClick:function(){n.dataGrid.addRow()}},location:"after",name:"btnNovo",locateInMenu:"auto"}},dx_Cores_Itens_Editing_Mode=function(){return{mode:"batch",allowUpdating:!0,useIcons:!0}},dx_Cores_Itens_Funcao_Salvar=function(n){return function(){WS.post("cores_itens/salvar/",{data:CircularJSON.stringify(n.dataGrid.getController("editing").getChanges())},function(o){alert_saved("Registros salvos com sucesso"),n.listar()})}},dx_Cores_Itens_OnLoaded=function(n){return function(o){n.dataGrid.repaint()}};