(this["webpackJsonpcrypto-app"]=this["webpackJsonpcrypto-app"]||[]).push([[0],{290:function(e,t,c){},292:function(e,t,c){"use strict";c.r(t);var a,n=c(0),s=c(31),i=c.n(s),r=c(35),l=c(42),j=c(23),o=c(294),d=c(296),h=c(303),b=c(33),u=c.n(b),O=c(90),x=c(54),p=c(297),m=c(109),v=c(47),g={"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"b0bd31a06fmsh844a904705c4802p1ea837jsn0c32631e3d77"},y=function(e){return{url:e,headers:g}},f=Object(m.a)({reducerPath:"cryptoApi",baseQuery:Object(v.d)({baseUrl:"https://coinranking1.p.rapidapi.com"}),endpoints:function(e){return{getCryptos:e.query({query:function(e){return y("/coins?limit=".concat(e))}}),getExchanges:e.query({query:function(){return y("/exchanges")}}),getCryptoDetails:e.query({query:function(e){return y("/coin/".concat(e))}}),getCryptoHistory:e.query({query:function(e){var t=e.coinId,c=e.timePeriod;return y("/coin/".concat(t,"/history/").concat(c))}})}}}),N=f.useGetCryptosQuery,w=f.useGetCryptoDetailsQuery,C=f.useGetCryptoHistoryQuery,k=f.useGetExchangesQuery,S=c(32),T=c(299),P=c(295),E=c(293),q=c(3),I=function(){return Object(q.jsx)("div",{className:"loader",children:Object(q.jsx)(E.a,{})})},F=function(e){var t=e.simplified,c=N(t?10:100),a=c.data,s=c.isFetching,i=Object(n.useState)(),l=Object(S.a)(i,2),j=l[0],o=l[1],d=Object(n.useState)(""),h=Object(S.a)(d,2),b=h[0],p=h[1];return Object(n.useEffect)((function(){var e,t;o(null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.coins);var c=null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.coins.filter((function(e){return e.name.toLowerCase().includes(b)}));o(c)}),[a,b]),s?Object(q.jsx)(I,{}):Object(q.jsxs)(q.Fragment,{children:[!t&&Object(q.jsx)("div",{className:"search-crypto",children:Object(q.jsx)(T.a,{placeholder:"Search Cryptocurrency",onChange:function(e){return p(e.target.value.toLowerCase())}})}),Object(q.jsx)(O.a,{gutter:[32,32],className:"crypto-card-container",children:null===j||void 0===j?void 0:j.map((function(e){return Object(q.jsx)(x.a,{xs:24,sm:12,lg:6,className:"crypto-card",children:Object(q.jsx)(r.b,{to:"/crypto/".concat(e.id),children:Object(q.jsxs)(P.a,{title:"".concat(e.rank,". ").concat(e.name),extra:Object(q.jsx)("img",{className:"crypto-image",src:e.iconUrl}),hoverable:!0,children:[Object(q.jsxs)("p",{children:["Price: ",u()(e.price)]}),Object(q.jsxs)("p",{children:["Market Cap: ",u()(e.marketCap)]}),Object(q.jsxs)("p",{children:["Daily Change: ",e.change,"%"]})]})},e.id)},e.id)}))})]})},A=c(298),M=c(300),D=c(164),U=c.n(D),$={"x-bingapis-sdk":"true","x-rapidapi-host":"bing-news-search1.p.rapidapi.com","x-rapidapi-key":"b0bd31a06fmsh844a904705c4802p1ea837jsn0c32631e3d77"},L=Object(m.a)({reducerPath:"cryptoNewsApi",baseQuery:Object(v.d)({baseUrl:"https://bing-news-search1.p.rapidapi.com"}),endpoints:function(e){return{getCryptoNews:e.query({query:function(e){var t=e.newsCategory,c=e.count;return{url:"/news/search?q=".concat(t,"&safeSearch=Off&textFormat=Raw&freshness=Day&count=").concat(c),headers:$}}})}}}),V=L.useGetCryptoNewsQuery,Q="https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News",G=d.a.Text,H=d.a.Title,R=A.a.Option,z=function(e){var t,c,a=e.simplified,s=Object(n.useState)("Cryptocurrency"),i=Object(S.a)(s,2),r=i[0],l=i[1],j=N(100).data,o=V({newsCategory:r,count:a?6:12}).data;return(null===o||void 0===o?void 0:o.value)?Object(q.jsxs)(O.a,{gutter:[24,24],children:[!a&&Object(q.jsx)(x.a,{span:24,children:Object(q.jsxs)(A.a,{showSearch:!0,className:"select-news",placeholder:"Select a Crypto",optionFilterProp:"children",onChange:function(e){return l(e)},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:[Object(q.jsx)(R,{value:"Cryptocurency",children:"Cryptocurrency"}),null===j||void 0===j||null===(t=j.data)||void 0===t||null===(c=t.coins)||void 0===c?void 0:c.map((function(e){return Object(q.jsx)(R,{value:e.name,children:e.name})}))]})}),o.value.map((function(e,t){var c,a,n,s,i,r;return Object(q.jsx)(x.a,{xs:24,sm:12,lg:8,children:Object(q.jsx)(P.a,{hoverable:!0,className:"news-card",children:Object(q.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[Object(q.jsxs)("div",{className:"news-image-container",children:[Object(q.jsx)(H,{className:"news-title",level:4,children:e.name}),Object(q.jsx)("img",{src:(null===e||void 0===e||null===(c=e.image)||void 0===c||null===(a=c.thumbnail)||void 0===a?void 0:a.contentUrl)||Q,alt:""})]}),Object(q.jsx)("p",{children:e.description.length>100?"".concat(e.description.substring(0,100),"..."):e.description}),Object(q.jsxs)("div",{className:"provider-container",children:[Object(q.jsxs)("div",{children:[Object(q.jsx)(M.a,{src:(null===(n=e.provider[0])||void 0===n||null===(s=n.image)||void 0===s||null===(i=s.thumbnail)||void 0===i?void 0:i.contentUrl)||Q,alt:""}),Object(q.jsx)(G,{className:"provider-name",children:null===(r=e.provider[0])||void 0===r?void 0:r.name})]}),Object(q.jsx)(G,{children:U()(e.datePublished).startOf("ss").fromNow()})]})]})})},t)}))]}):Object(q.jsx)(I,{})},W=d.a.Title,J=function(){var e,t=N(10),c=t.data,a=t.isFetching,n=null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.stats;return a?Object(q.jsx)(I,{}):Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(W,{level:2,className:"heading",children:"Global Crypto Stats"}),Object(q.jsxs)(O.a,{gutter:[32,32],children:[Object(q.jsx)(x.a,{span:12,children:Object(q.jsx)(p.a,{title:"Total Cryptocurrencies",value:n.total})}),Object(q.jsx)(x.a,{span:12,children:Object(q.jsx)(p.a,{title:"Total Exchanges",value:u()(n.totalExchanges)})}),Object(q.jsx)(x.a,{span:12,children:Object(q.jsx)(p.a,{title:"Total Market Cap:",value:"$".concat(u()(n.totalMarketCap))})}),Object(q.jsx)(x.a,{span:12,children:Object(q.jsx)(p.a,{title:"Total 24h Volume",value:"$".concat(u()(n.total24hVolume))})}),Object(q.jsx)(x.a,{span:12,children:Object(q.jsx)(p.a,{title:"Total Cryptocurrencies",value:n.total})}),Object(q.jsx)(x.a,{span:12,children:Object(q.jsx)(p.a,{title:"Total Markets",value:u()(n.totalMarkets)})})]}),Object(q.jsxs)("div",{className:"home-heading-container",children:[Object(q.jsx)(W,{level:2,className:"home-title",children:"Top 10 Cryptos In The World"}),Object(q.jsx)(W,{level:3,className:"show-more",children:Object(q.jsx)(r.b,{to:"/cryptocurrencies",children:"Show more"})})]}),Object(q.jsx)(F,{simplified:!0}),Object(q.jsxs)("div",{className:"home-heading-container",children:[Object(q.jsx)(W,{level:2,className:"home-title",children:"Latest Crypto News"}),Object(q.jsx)(W,{level:3,children:Object(q.jsx)(r.b,{to:"/news",children:"Show more"})})]}),Object(q.jsx)(z,{simplified:!0})]})},Z=c(173),_=c(302),B=c(304),K=c(305),X=c(306),Y=c(307),ee=c(308),te=c.p+"static/media/cryptocurrency.1548aced.png",ce=function(){var e=Object(n.useState)(!0),t=Object(S.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(void 0),i=Object(S.a)(s,2),l=i[0],j=i[1];return Object(n.useEffect)((function(){var e=function(){return j(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),Object(n.useEffect)((function(){a(!(l<=800))}),[l]),Object(q.jsxs)("div",{className:"nav-container",children:[Object(q.jsxs)("div",{className:"logo-container",children:[Object(q.jsx)(M.a,{src:te,size:"large"}),Object(q.jsx)(d.a.Title,{level:2,className:"logo",children:Object(q.jsx)(r.b,{to:"/",children:"Cryptoverse"})}),Object(q.jsx)(Z.a,{className:"menu-control-container",onClick:function(){return a(!c)},children:Object(q.jsx)(B.a,{})})]}),c&&Object(q.jsxs)(_.a,{theme:"dark",children:[Object(q.jsx)(_.a.Item,{icon:Object(q.jsx)(K.a,{}),children:Object(q.jsx)(r.b,{to:"/",children:"Home"})}),Object(q.jsx)(_.a.Item,{icon:Object(q.jsx)(X.a,{}),children:Object(q.jsx)(r.b,{to:"/cryptocurrencies",children:"Cryptocurrencies"})}),Object(q.jsx)(_.a.Item,{icon:Object(q.jsx)(Y.a,{}),children:Object(q.jsx)(r.b,{to:"/exchanges",children:"Exchanges"})}),Object(q.jsx)(_.a.Item,{icon:Object(q.jsx)(ee.a,{}),children:Object(q.jsx)(r.b,{to:"/news",children:"News"})})]})]})},ae=c(301),ne=c(123),se=d.a.Text,ie=ae.a.Panel,re=function(){var e,t=k(),c=t.data,a=t.isFetching,n=null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.exchanges;return a?Object(q.jsx)(I,{}):Object(q.jsxs)(q.Fragment,{children:[Object(q.jsxs)(O.a,{children:[Object(q.jsx)(x.a,{span:6,children:"Exchanges"}),Object(q.jsx)(x.a,{span:6,children:"24h Trade Volume"}),Object(q.jsx)(x.a,{span:6,children:"Markets"}),Object(q.jsx)(x.a,{span:6,children:"Change"})]}),Object(q.jsx)(O.a,{children:n.map((function(e){return Object(q.jsx)(x.a,{span:24,children:Object(q.jsx)(ae.a,{children:Object(q.jsx)(ie,{showArrow:!1,header:Object(q.jsxs)(O.a,{style:{width:"100%"},children:[Object(q.jsxs)(x.a,{span:6,children:[Object(q.jsx)(se,{children:Object(q.jsxs)("strong",{children:[e.rank,"."]})}),Object(q.jsx)(M.a,{className:"exchange-image",src:e.iconUrl}),Object(q.jsx)(se,{children:Object(q.jsx)("strong",{children:e.name})})]}),Object(q.jsxs)(x.a,{span:6,children:["$",u()(e.volume)]}),Object(q.jsx)(x.a,{span:6,children:u()(e.numberOfMarkets)}),Object(q.jsxs)(x.a,{span:6,children:[u()(e.marketShare),"%"]})]},e.id),children:Object(ne.a)(e.description||"")},e.id)})})}))})]})},le=c(309),je=c(310),oe=c(311),de=c(312),he=c(125),be=c(313),ue=c(176),Oe=c(175),xe=(c(289),d.a.Title),pe=function(e){for(var t,c=e.coinHistory,a=e.currentPrice,n=e.coinName,s=[],i=[],r=0;r<(null===c||void 0===c||null===(l=c.data)||void 0===l||null===(j=l.history)||void 0===j?void 0:j.length);r+=1){var l,j,o;s.push(null===c||void 0===c||null===(o=c.data)||void 0===o?void 0:o.history[r].price)}for(var d=0;d<(null===c||void 0===c||null===(h=c.data)||void 0===h||null===(b=h.history)||void 0===b?void 0:b.length);d+=1){var h,b,u;i.push(new Date(null===c||void 0===c||null===(u=c.data)||void 0===u?void 0:u.history[d].timestamp).toLocaleDateString())}var p={labels:i,datasets:[{label:"Price In USD",data:s,fill:!1,backgroundColor:"#0071bd",borderColor:"#0071bd"}]};return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsxs)(O.a,{className:"chart-header",children:[Object(q.jsxs)(xe,{level:2,className:"chart-title",children:[n," Price Chart"," "]}),Object(q.jsxs)(x.a,{className:"price-container",children:[Object(q.jsxs)(xe,{level:5,className:"price-change",children:["Change: ",null===c||void 0===c||null===(t=c.data)||void 0===t?void 0:t.change,"%"]}),Object(q.jsxs)(xe,{level:5,className:"current-price",children:["Current ",n," Price: $ ",a]})]})]}),Object(q.jsx)(Oe.a,{data:p,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})},me=d.a.Title,ve=d.a.Text,ge=A.a.Option,ye=function(){var e,t,c,a,s=Object(j.g)().coinId,i=Object(n.useState)("7d"),r=Object(S.a)(i,2),l=r[0],o=r[1],d=w(s),h=d.data,b=d.isFetching,p=C({coinId:s,timePeriod:l}),m=p.data,v=p.isFetching,g=null===h||void 0===h||null===(e=h.data)||void 0===e?void 0:e.coin;if(b||v)return Object(q.jsx)(I,{});var y=[{title:"Price to USD",value:"$ ".concat(g.price&&u()(g.price)),icon:Object(q.jsx)(le.a,{})},{title:"Rank",value:g.rank,icon:Object(q.jsx)(je.a,{})},{title:"24h Volume",value:"$ ".concat(g.volume&&u()(g.volume)),icon:Object(q.jsx)(oe.a,{})},{title:"Market Cap",value:"$ ".concat(g.marketCap&&u()(g.marketCap)),icon:Object(q.jsx)(le.a,{})},{title:"All-time-high(daily avg.)",value:"$ ".concat(u()(g.allTimeHigh.price)),icon:Object(q.jsx)(de.a,{})}],f=[{title:"Number Of Markets",value:g.numberOfMarkets,icon:Object(q.jsx)(X.a,{})},{title:"Number Of Exchanges",value:g.numberOfExchanges,icon:Object(q.jsx)(Y.a,{})},{title:"Aprroved Supply",value:g.approvedSupply?Object(q.jsx)(he.a,{}):Object(q.jsx)(be.a,{}),icon:Object(q.jsx)(ue.a,{})},{title:"Total Supply",value:"$ ".concat(u()(g.totalSupply)),icon:Object(q.jsx)(ue.a,{})},{title:"Circulating Supply",value:"$ ".concat(u()(g.circulatingSupply)),icon:Object(q.jsx)(ue.a,{})}];return Object(q.jsxs)(x.a,{className:"coin-detail-container",children:[Object(q.jsxs)(x.a,{className:"coin-heading-container",children:[Object(q.jsxs)(me,{level:2,className:"coin-name",children:[null===h||void 0===h||null===(t=h.data)||void 0===t?void 0:t.coin.name," (",null===h||void 0===h||null===(c=h.data)||void 0===c?void 0:c.coin.slug,") Price"]}),Object(q.jsxs)("p",{children:[g.name," live price in US Dollar (USD). View value statistics, market cap and supply."]})]}),Object(q.jsx)(A.a,{defaultValue:"7d",className:"select-timeperiod",placeholder:"Select Timeperiod",onChange:function(e){return o(e)},children:["3h","24h","7d","30d","1y","3m","3y","5y"].map((function(e){return Object(q.jsx)(ge,{children:e},e)}))}),Object(q.jsx)(pe,{coinHistory:m,currentPrice:u()(g.price),coinName:g.name}),Object(q.jsxs)(x.a,{className:"stats-container",children:[Object(q.jsxs)(x.a,{className:"coin-value-statistics",children:[Object(q.jsxs)(x.a,{className:"coin-value-statistics-heading",children:[Object(q.jsxs)(me,{level:3,className:"coin-details-heading",children:[g.name," Value Statistics"]}),Object(q.jsxs)("p",{children:["An overview showing the statistics of ",g.name,", such as the base and quote currency, the rank, and trading volume."]})]}),y.map((function(e){var t=e.icon,c=e.title,a=e.value;return Object(q.jsxs)(x.a,{className:"coin-stats",children:[Object(q.jsxs)(x.a,{className:"coin-stats-name",children:[Object(q.jsx)(ve,{children:t}),Object(q.jsx)(ve,{children:c})]}),Object(q.jsx)(ve,{className:"stats",children:a})]})}))]}),Object(q.jsxs)(x.a,{className:"other-stats-info",children:[Object(q.jsxs)(x.a,{className:"coin-value-statistics-heading",children:[Object(q.jsx)(me,{level:3,className:"coin-details-heading",children:"Other Stats Info"}),Object(q.jsxs)("p",{children:["An overview showing the statistics of ",g.name,", such as the base and quote currency, the rank, and trading volume."]})]}),f.map((function(e){var t=e.icon,c=e.title,a=e.value;return Object(q.jsxs)(x.a,{className:"coin-stats",children:[Object(q.jsxs)(x.a,{className:"coin-stats-name",children:[Object(q.jsx)(ve,{children:t}),Object(q.jsx)(ve,{children:c})]}),Object(q.jsx)(ve,{className:"stats",children:a})]})}))]})]}),Object(q.jsxs)(x.a,{className:"coin-desc-link",children:[Object(q.jsxs)(O.a,{className:"coin-desc",children:[Object(q.jsxs)(me,{level:3,className:"coin-details-heading",children:["What is ",g.name,"?"]}),Object(ne.a)(g.description)]}),Object(q.jsxs)(x.a,{className:"coin-links",children:[Object(q.jsxs)(me,{level:3,className:"coin-details-heading",children:[g.name," Links"]}),null===(a=g.links)||void 0===a?void 0:a.map((function(e){return Object(q.jsxs)(O.a,{className:"coin-link",children:[Object(q.jsx)(me,{level:5,className:"link-name",children:e.type}),Object(q.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name})]},e.name)}))]})]})]})},fe=(c(290),c(291),function(){return Object(q.jsxs)("div",{className:"app",children:[Object(q.jsx)("div",{className:"navbar",children:Object(q.jsx)(ce,{})}),Object(q.jsxs)("div",{className:"main",children:[Object(q.jsx)(o.a,{children:Object(q.jsxs)("div",{className:"routes",children:[Object(q.jsx)(j.c,{children:Object(q.jsx)(j.a,{path:"/",element:Object(q.jsx)(J,{})})}),Object(q.jsx)(j.c,{children:Object(q.jsx)(j.a,{path:"/exchanges",element:Object(q.jsx)(re,{})})}),Object(q.jsx)(j.c,{children:Object(q.jsx)(j.a,{path:"/cryptocurrencies",element:Object(q.jsx)(F,{})})}),Object(q.jsx)(j.c,{children:Object(q.jsx)(j.a,{path:"/crypto/:coinId",element:Object(q.jsx)(ye,{})})}),Object(q.jsx)(j.c,{children:Object(q.jsx)(j.a,{path:"/news",element:Object(q.jsx)(z,{})})})]})}),Object(q.jsxs)("div",{className:"footer",children:[Object(q.jsxs)(d.a.Title,{level:5,style:{color:"white",textAlign:"center"},children:["Cryptoverse ",Object(q.jsx)("br",{}),"All Rights Reserved"]}),Object(q.jsxs)(h.b,{children:[Object(q.jsx)(r.b,{to:"/",children:"Home"}),Object(q.jsx)(r.b,{to:"/exchanges",children:"Exchanges"}),Object(q.jsx)(r.b,{to:"/news",children:"News"})]})]})]})]})}),Ne=c(34),we=c(9),Ce=Object(we.a)({reducer:(a={},Object(Ne.a)(a,f.reducerPath,f.reducer),Object(Ne.a)(a,L.reducerPath,L.reducer),a),middleware:function(e){return e().concat(f.middleware,L.middleware)}});i.a.render(Object(q.jsx)(r.a,{children:Object(q.jsx)(l.a,{store:Ce,children:Object(q.jsx)(fe,{})})}),document.getElementById("root"))}},[[292,1,2]]]);
//# sourceMappingURL=main.a58e4275.chunk.js.map