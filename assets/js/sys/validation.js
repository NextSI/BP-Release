function valid_onunload(n){window.onbeforeunload=n&&1==n?valid_onunload_alert:null}function valid_onunload_alert(){return"Deseja realmente sair do Next BP?"}var Validation=function(n){Validation.CODES={NOTICE:-2,ERR:-1,ERR_FIELD:0,ERR_NOT_EXISTS:1,ERR_TOKEN:2,ERR_PERMISSION:3,ERR_CON_DB:4,ERR_CON_DB_LIMIT_EXCEEDED:5},this.messages=[],this.add=function(){var n=Array.prototype.slice.call(arguments,0),e=null,a=Validation.CODES.ERR,i="";1==n.length&&(e=n[0]),2==n.length&&(a=n[0],i=n[1],a&&i&&(e=new ValidationMessage(a,i))),e&&this.messages.push(e)},this.is_valid=function(){return 0==this.messages.length}},ValidationMessage=function(n,e,a){this.code=null,this.message=null,this.ref=null,this.code=n,this.message=e,this.ref=a||""};