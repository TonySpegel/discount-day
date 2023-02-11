import{s as h,h as d,g as l,y as p,t as u,e as _}from"./index.11615475.js";var f=Object.defineProperty,g=Object.getOwnPropertyDescriptor,c=(e,r,n,t)=>{for(var s=t>1?void 0:t?g(r,n):r,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(t?a(r,n,s):a(s))||s);return t&&s&&f(r,n,s),s};let i=class extends h{constructor(){super();this.response="",this._apiTask=new d(this,()=>l("https://api.discountday.duckdns.org/test"),()=>[this.response]),console.log("https://api.discountday.duckdns.org/test")}render(){return p`
      <h2>stats</h2>
      <main>
        ${this._apiTask.render({pending:()=>p`<sl-spinner></sl-spinner>`,error:()=>p`error`,complete:e=>p`${e}`})}
      </main>
    `}};c([u()],i.prototype,"response",2);i=c([_("app-stats")],i);export{i as AppStats};
//# sourceMappingURL=app-stats.61ec3162.js.map
