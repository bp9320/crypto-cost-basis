(this["webpackJsonpcrypto-cost-basis"]=this["webpackJsonpcrypto-cost-basis"]||[]).push([[0],{23:function(e,t,a){e.exports=a(32)},28:function(e,t){e.exports.isAlphanumeric=function(e){return"string"===typeof e&&!!e.match(/^[0-9a-z]+$/i)},e.exports.isPositiveNumber=function(e){return"number"===typeof e&&!isNaN(e)&&e>0},e.exports.isNumberWithMaxTwoDecimals=function(e){if("number"!==typeof e||isNaN(e))return!1;var t=e.toString().split(".")[1];return!t||t.length<=2}},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),s=a.n(l),c=a(8),i=a(18),o=a(9),u=a(12),m=a(2),p=a(11),d=a(1),f=a(5),E=Object(n.createContext)(),y=a(19),v=a.n(y),h=function(){var e=Object(n.useContext)(E).addTransaction;Object(n.useEffect)((function(){var e=document.querySelector("#type");M.FormSelect.init(e)}));var t=Object(n.useState)({service:"",type:"sell",asset:"",transDate:"",qty:"",amount:"",fee:""}),a=Object(f.a)(t,2),l=a[0],s=a[1],c=l.service,i=l.type,o=l.asset,u=l.transDate,y=l.qty,h=l.amount,b=l.fee,g=function(e){s(Object(d.a)(Object(d.a)({},l),{},Object(p.a)({},e.target.name,e.target.value)))};return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"row section"},r.a.createElement("form",{className:"col s12",onSubmit:function(t){t.preventDefault(),e(l),s({service:"",type:"sell",asset:"",transDate:"",qty:"",amount:"",fee:""})}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s2"},r.a.createElement("input",{type:"text",name:"service",id:"service",value:c,placeholder:"e.g. Coinbase",className:"validate",onChange:g}),r.a.createElement("label",{htmlFor:"service"},"Trading Service")),r.a.createElement("div",{className:"input-field col s2"},r.a.createElement("select",{name:"type",id:"type",value:i,onChange:g},r.a.createElement("option",{value:"buy"},"Buy"),r.a.createElement("option",{value:"sell"},"Sell")),r.a.createElement("label",{htmlFor:"type"},"Transaction Type")),r.a.createElement("div",{className:"input-field col s1"},r.a.createElement("input",{type:"text",name:"asset",id:"asset",placeholder:"e.g. BTC, ETH, LTC",className:"validate",value:o,onChange:g}),r.a.createElement("label",{htmlFor:"asset"},"Asset")),r.a.createElement("div",{className:"input-field col s2"},r.a.createElement("input",{type:"text",name:"transDate",id:"transDate",placeholder:"ISO 8601 Format",className:"datepicker",value:u,onChange:g}),r.a.createElement("label",{htmlFor:"transdate"},"Transaction Date")),r.a.createElement("div",{className:"input-field col s1"},r.a.createElement("input",{type:"text",name:"qty",id:"qty",placeholder:"Quantity",value:y,onChange:g}),r.a.createElement("label",{htmlFor:"qty"},"Quantity")),r.a.createElement("div",{className:"input-field col s2"},r.a.createElement("input",{type:"text",name:"amount",id:"amount",placeholder:"Dollar Amount",value:h,onChange:g}),r.a.createElement("label",{htmlFor:"amount"},"Transaction Amount")),r.a.createElement("div",{className:"input-field col s2"},r.a.createElement("input",{type:"text",name:"fee",id:"fee",placeholder:"Fees",value:b,onChange:g}),r.a.createElement("label",{htmlFor:"fee"},"Transaction Fee"))),r.a.createElement("div",{className:"row center-align"},r.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit",name:"submit"},"Add Transaction",r.a.createElement("i",{className:"material-icons right"},"send"))))),r.a.createElement("div",{className:"row section"},r.a.createElement("form",{className:"col s4 push-s4",onSubmit:function(t){t.preventDefault();var a=document.getElementById("fileUpload");console.log(a,a.files.length),a.files.length>0&&v.a.parse(a.files[0],{header:!0,complete:function(t){console.log(t);var a,n=Object(m.a)(t.data);try{for(n.s();!(a=n.n()).done;){var r=a.value;e(r)}}catch(l){n.e(l)}finally{n.f()}}}),a.value="",document.getElementById("filePathText").value=""}},r.a.createElement("div",{className:"file-field input-field"},r.a.createElement("div",{className:"btn"},r.a.createElement("span",null,"Select File"),r.a.createElement("input",{type:"file",id:"fileUpload"})),r.a.createElement("div",{className:"file-path-wrapper"},r.a.createElement("input",{type:"text",className:"file-path validate",id:"filePathText"}))),r.a.createElement("div",{className:"row center-align"},r.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit",name:"submit"},"Parse Transactions",r.a.createElement("i",{className:"material-icons right"},"insert_drive_file"))))))},b=Object(n.createContext)(),g=function(e){var t=e.transaction;console.log(t);var a=t.service,n=t.type,l=t.asset,s=t.displayDate,c=t.qty,i=t.amount,o=t.fee;return console.log("pre-return"),r.a.createElement("tr",null,r.a.createElement("td",null,a),r.a.createElement("td",null,n),r.a.createElement("td",null,l),r.a.createElement("td",null,s),r.a.createElement("td",null,c),r.a.createElement("td",null,"$ ",i),r.a.createElement("td",null,"$ ",o))},N=a(28),D=function(e){var t=Object(n.useContext)(E).transactions,a=Object(n.useContext)(b).setAssetTypes;if(0===t.length)return r.a.createElement("div",{className:"container center-align"},r.a.createElement("h4",null,"Enter a transaction!"));console.log(t);return r.a.createElement("div",{className:"container"},r.a.createElement("table",{className:"striped centered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Service"),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Asset"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Fee"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement(g,{transaction:e,key:e.id})})))),r.a.createElement("div",{className:"row center-align"},r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(){var n=function(e){var t,a=Object(m.a)(e);try{for(a.s();!(t=a.n()).done;){var n=t.value;if(!N.isAlphanumeric(n.service))return n.displayDate;if(!N.isAlphanumeric(n.asset))return n.displayDate;if(!n.transDate.isValid())return n.displayDate;if(!N.isPositiveNumber(n.qty))return n.displayDate;if(n.amount<=0||!N.isNumberWithMaxTwoDecimals(n.amount))return n.displayDate;if(n.fee<0||!N.isNumberWithMaxTwoDecimals(n.fee))return n.displayDate}}catch(r){a.e(r)}finally{a.f()}return null}(t);if(n){var r="Your transaction dated ".concat(n," has invalid input.");e.setErrorMessage(r)}else try{a(t)}catch(s){if("SellMoreThanOwnError"!==s.name)throw s;var l="Your transaction dated ".concat(s.transactionErrorDate," is attempting to sell more assets than you currently own.");e.setErrorMessage(l)}}},r.a.createElement("i",{className:"material-icons right"},"attach_money"),"Calculate!")))},T=function(e){var t=e.transaction;console.log(t);var a=t.service,n=t.asset,l=t.purchaseDate,s=t.costBasis,c=t.sellDate,i=t.capitalGain;return console.log("pre-return"),r.a.createElement("tr",null,r.a.createElement("td",null,a),r.a.createElement("td",null,n),r.a.createElement("td",null,l.format("LLLL")),r.a.createElement("td",null,s.toFixed(2)),r.a.createElement("td",null,c.format("LLLL")),r.a.createElement("td",null,"$ ",i.toFixed(2)))},O=function(){var e=Object(n.useContext)(b),t=e.assetTypes,a=e.exportByAsset;return Object(n.useEffect)((function(){$(".calculation-table").DataTable({paging:!1,ordering:!1,info:!1,searching:!1,dom:"Bfrtip",buttons:["csv"]})})),console.log("exportByAsset: ",a),console.log("assetTypes: ",t),t?r.a.createElement(n.Fragment,null,t.map((function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,e),r.a.createElement("table",{className:"striped centered calculation-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Service"),r.a.createElement("th",null,"Asset"),r.a.createElement("th",null,"Date of Purchase"),r.a.createElement("th",null,"Cost Basis"),r.a.createElement("th",null,"Date of Sale"),r.a.createElement("th",null,"Sale Proceeds"))),r.a.createElement("tbody",null,a[e].map((function(e){return r.a.createElement(T,{transaction:e,key:e.id})})))))}))):null},x=function(e){return e.errorMessage?r.a.createElement("h4",{className:"red-text text-darken-3 center-align"},e.errorMessage):null},A=a(20),C=a.n(A),j=a(21),w=a.n(j),S=a(13),B=function(e,t){switch(t.type){case"ADD_TRANSACTION":return Object(d.a)(Object(d.a)({},e),{},{transactions:[].concat(Object(S.a)(e.transactions),[t.payload])});default:return e}},q=function(e){var t=Object(n.useReducer)(B,{transactions:[],sorted:{}}),a=Object(f.a)(t,2),l=a[0],s=a[1];return r.a.createElement(E.Provider,{value:{transactions:l.transactions,sorted:l.sorted,addTransaction:function(e){e.id=C.a.v4(),e.transDate=w()(e.transDate),e.qty=parseFloat(e.qty),e.amount=parseFloat(e.amount),e.fee=parseFloat(e.fee),e.displayDate=e.transDate.format("llll"),s({type:"ADD_TRANSACTION",payload:e})}}},e.children)},F=function(e,t){switch(t.type){case"GET_ASSET_TYPES":return Object(d.a)(Object(d.a)({},e),{},{assetTypes:t.payload});case"ADD_ASSET_TRANSACTIONS":return{transByAsset:t.payload.assets,exportByAsset:t.payload.export,assetTypes:t.payload.types};default:return e}},L=a(22),_=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e,n){var r;return Object(c.a)(this,a),(r=t.call(this,e)).name="SellMoreThanOwnError",r.transactionErrorDate=n,r}return a}(Object(L.a)(Error));var k=function(e){var t=Object(n.useReducer)(F,{assetTypes:null,transByAsset:null,exportByAsset:null}),a=Object(f.a)(t,2),l=a[0],s=a[1];return r.a.createElement(b.Provider,{value:{assetTypes:l.assetTypes,transByAsset:l.transByAsset,exportByAsset:l.exportByAsset,setAssetTypes:function(e){var t=[],a={},n=null,r={},l=Object(S.a)(e);l.sort((function(e,t){return e.transDate-t.transDate}));var c,i=Object(m.a)(l);try{for(i.s();!(c=i.n()).done;){var o=c.value;-1===t.indexOf(o.asset)&&t.push(o.asset.toUpperCase())}}catch(f){i.e(f)}finally{i.f()}for(var u=function(){var e=d[p];n=l.filter((function(t){return t.asset.toUpperCase()===e})),r[e]=function(e){var t,a=[],n=[],r=Object(m.a)(e);try{for(r.s();!(t=r.n()).done;){var l=t.value;if("buy"===l.type.toLowerCase())l.costBasis=l.amount+l.fee,l.averageCost=l.costBasis/l.qty,a.push({transDate:l.transDate,service:l.service,qtyLeft:l.qty,avgCost:l.averageCost}),console.log(a);else if("sell"===l.type.toLowerCase()){var s={},c=l.qty,i=0;s.id=l.id,s.service=a[0].service,s.purchaseDate=a[0].transDate,s.asset=l.asset,s.sellDate=l.transDate,s.displayDate=l.displayDate;do{if(0===a.length){var o="Transaction dated ".concat(s.displayDate," is selling more assets than are currently owned.");throw new _(o,s.displayDate)}a[0].qtyLeft>=c?(i+=a[0].avgCost*c,a[0].qtyLeft===c?a.shift():a[0].qtyLeft-=c,c=0):(i+=a[0].avgCost*a[0].qtyLeft,c-=a[0].qtyLeft,a.shift())}while(c>0);i+=l.fee,s.capitalGain=l.amount-i,s.costBasis=i,n.push(s),l.costBasis=i,l.capitalGain=l.amount-i}}}catch(f){r.e(f)}finally{r.f()}return n}(n),a[e]=n},p=0,d=t;p<d.length;p++)u();s({type:"ADD_ASSET_TRANSACTIONS",payload:{types:t,assets:a,export:r}})}}},e.children)},I=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).setErrorMessage=function(e){return n.setState({errorMessage:e})},n.state={errorMessage:null},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(q,null,r.a.createElement(k,null,r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"center-align"},"Crypto Capital Gains Calculator"),r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"flow-text center"},"This app was built mainly to get practice designing and building React apps. I am not an accountant and make no guarantees that the calculations performed within this app are accurate. I encourage you to seek the help of an accountant or tax expert with any questions regarding tax obligations for crypto transactions.")),r.a.createElement("div",{className:"divider"}),r.a.createElement(h,null),r.a.createElement(D,{setErrorMessage:this.setErrorMessage}),r.a.createElement(x,{errorMessage:this.state.errorMessage}),r.a.createElement(O,null))))}}]),a}(n.Component);s.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.e02786ca.chunk.js.map