(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{196:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return h}),t.d(a,"pageQuery",function(){return g});t(33),t(216),t(70),t(214),t(23);var l=t(0),c=t.n(l),r=t(203),s=t(318),n=t(207),i=t(220),m=t(323),o=t(320),u=t(321),N=t(322),p=t(211),d=t(215),E=t(221);function h(e,a){var t=e.data.markdownRemark.frontmatter,h=Object(l.useState)({setID:null,productName:"",description:"",price:"",qtty:"1",image1024:"",cartPressed:!1,totalPrice:null}),g=h[0],f=h[1],k=a.className,b=c.a.useState()[1],S=Object(l.useCallback)(function(){return b({})},[]),v=Object(l.useState)(!1),j=v[0],w=v[1],y=function(){return w(!j)},A=[],P=0,H=function(e,a){return e.reduce(function(e,t){return"string"==typeof t[a]?e+Number(t[a]):e+t[a]},0)};return"undefined"!=typeof window&&null!==(A=JSON.parse(localStorage.getItem("cartList")))&&(P=H(A,"totalPrice").toFixed(2),H(A,"qtty"),localStorage.setItem("total",JSON.stringify(P))),Object(l.useEffect)(function(){if(""===g.productName||!1===g.cartPressed)console.log("blank state");else{var e=JSON.parse(localStorage.getItem("cartList"))||[],a=e.findIndex(function(e){return e.setID===g.setID});a>=0?(e[a].qtty=parseFloat(e[a].qtty)+parseFloat(g.qtty),e[a].totalPrice=parseFloat(e[a].qtty)*parseFloat(e[a].price)):e.push(g),localStorage.setItem("cartList",JSON.stringify(e)),f(Object.assign({},g,{cartPressed:!1}))}},[g]),c.a.createElement("div",null,c.a.createElement(E.Helmet,null,c.a.createElement("title",null,t.title),c.a.createElement("meta",{name:"description",content:""})),c.a.createElement(p.a,null),c.a.createElement("main",{className:"product-details"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"section-product"},c.a.createElement("div",{className:"product-wrapper"},c.a.createElement("div",{className:"image-holder"},c.a.createElement("img",{className:"product-image",src:t.image1024,alt:t.altText})),c.a.createElement("div",{className:"details-holder"},c.a.createElement("h1",{className:"name"},t.title),c.a.createElement("h2",{className:"price"},"PHP",t.price),c.a.createElement("div",{className:"desc-holder"},c.a.createElement("h2",{className:"label"},"Description"),c.a.createElement("p",null,t.description)),c.a.createElement("div",{className:"add-cart-holder"},c.a.createElement("select",{name:"qtty",className:"quantity-select",onChange:function(e){var a=e.target.value;f(Object.assign({},g,{qtty:a}))}},c.a.createElement("option",null,"1"),c.a.createElement("option",null,"2"),c.a.createElement("option",null,"3")),c.a.createElement("button",{className:"btn-swipe-black hover-swipe-right",onClick:function(){var e;e=t,f(Object.assign({},g,{setID:e.setID,productName:e.title,description:e.description,price:e.price,image1024:e.image1024,cartPressed:!0,totalPrice:parseFloat(g.qtty)*parseFloat(e.price)})),y()}},"Add to Cart")),c.a.createElement("div",{className:"social-holder"},c.a.createElement(r.a,{to:"#",className:"icon-link twitter"},c.a.createElement(n.a,{icon:i.f,className:"icon"}),c.a.createElement("span",{className:"tooltip"},"Share on twitter")),c.a.createElement(r.a,{to:"#",className:"icon-link facebook"},c.a.createElement(n.a,{icon:i.b,className:"icon"})),c.a.createElement(r.a,{to:"#",className:"icon-link linkedin"},c.a.createElement(n.a,{icon:i.e,className:"icon"}))))),c.a.createElement(s.d,{className:"tabs-wrapper"},c.a.createElement(s.b,{className:"nav-tabs"},c.a.createElement(s.a,{className:"nav-link"},"Additional Information")),c.a.createElement(s.c,{className:"tab-content"},c.a.createElement("ul",{className:"info-list"},c.a.createElement("li",{className:"list-item"},c.a.createElement("span",null,"Weight"),t.weight),c.a.createElement("li",{className:"list-item"},c.a.createElement("span",null,"Dimensions"),t.dimensions),c.a.createElement("li",{className:"list-item"},c.a.createElement("span",null,"Materials"),t.materials),c.a.createElement("li",{className:"list-item"},c.a.createElement("span",null,"Other info"),t.OtherInfo))))),c.a.createElement("div",{className:"section-related-products product-catalog"},c.a.createElement("h2",null,"You may also like"),c.a.createElement("div",{className:"grid"},c.a.createElement("div",{className:"product-listing"},c.a.createElement("div",{className:"product-item"},c.a.createElement("div",{className:"image-holder"},c.a.createElement(r.a,{to:"/product/fshq-poster-happy"},c.a.createElement("div",{className:"thumbnail"},c.a.createElement("img",{src:"https://psdwizard.github.io/gatsby-paymongo-demo-store/assets/FSHQPoster-Happy-300.png",className:"image-thumbnail",alt:" FSHQ Poster - Happy"})),c.a.createElement(r.a,{to:"/product/fshq-poster-happy",className:"btn-swipe-black hover-swipe-right"},"View Details"))),c.a.createElement("div",{className:"text-holder"},c.a.createElement("h2",{className:"title"},"FSHQ Poster - Helpful"),c.a.createElement("p",{className:"price"},"PHP 400"))),c.a.createElement("div",{className:"product-item"},c.a.createElement("div",{className:"image-holder"},c.a.createElement(r.a,{to:"/product/fshq-poster-honest"},c.a.createElement("div",{className:"thumbnail"},c.a.createElement("img",{src:"https://psdwizard.github.io/gatsby-paymongo-demo-store/assets/FSHQPoster-Honest-300.png",className:"image-thumbnail",alt:" FSHQ Poster - Honestl"})),c.a.createElement(r.a,{to:"/product/fshq-poster-honest",className:"btn-swipe-black hover-swipe-right"},"View Details"))),c.a.createElement("div",{className:"text-holder"},c.a.createElement("h2",{className:"title"},"FSHQ Poster - Honest"),c.a.createElement("p",{className:"price"},"PHP 400"))),c.a.createElement("div",{className:"product-item"},c.a.createElement("div",{className:"image-holder"},c.a.createElement(r.a,{to:"/product/fshq-poster-hungry"},c.a.createElement("div",{className:"thumbnail"},c.a.createElement("img",{src:"https://psdwizard.github.io/gatsby-paymongo-demo-store/assets/FSHQPoster-Hungry-300.png",className:"image-thumbnail",alt:" FSHQ Poster - Helpful"})),c.a.createElement(r.a,{to:"/product/fshq-poster-hungry",className:"btn-swipe-black hover-swipe-right"},"View Details"))),c.a.createElement("div",{className:"text-holder"},c.a.createElement("h2",{className:"title"},"FSHQ Poster - Hungry"),c.a.createElement("p",{className:"price"},"PHP 400"))))))),c.a.createElement(m.a,{isOpen:j,toggle:y,className:k},c.a.createElement(o.a,{toggle:y},"Your Cart"),c.a.createElement(u.a,null,c.a.createElement("ul",{className:"cart-product-listing"},A?A.map(function(e,a){return c.a.createElement("li",{key:a,className:"cart-product-item"},c.a.createElement("div",{className:"image-wrapper"},c.a.createElement("div",{className:"thumbnail-holder"},c.a.createElement("img",{src:e.image1024,className:"product-image",alt:e.productName})),c.a.createElement(N.a,{color:"link",onClick:function(){return function(e){var a=A.findIndex(function(a){return a.setID===e.setID});a>-1&&(A.splice(a,1),localStorage.setItem("cartList",JSON.stringify(A))),S()}(e)}},"Remove")),c.a.createElement("div",{className:"text-wrapper"},c.a.createElement("h4",{className:"product-name"},e.productName),c.a.createElement("p",{className:"computation"},e.qtty," x PHP ",e.price," = PHP ",e.totalPrice.toFixed(2))))}):"Your cart is empty")),A?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"total-holder"},c.a.createElement("h3",{className:"total"},"Total: ","PHP "," ",P)),c.a.createElement("div",{className:"btn-holder"},c.a.createElement(r.a,{to:"/checkout",className:"btn-swipe-black hover-swipe-right btn-checkout"},"Checkout"),c.a.createElement(r.a,{to:"/products",className:"btn-swipe-black hover-swipe-right"},"Continue Shopping"))):"")),c.a.createElement(d.a,null))}var g="3189638469"},203:function(e,a,t){"use strict";var l=t(0),c=t.n(l),r=t(69),s=t.n(r);t.d(a,"a",function(){return s.a});t(204),t(9).default.enqueue,c.a.createContext({})},204:function(e,a,t){var l;e.exports=(l=t(210))&&l.default||l},206:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAAmCAMAAACGRDV/AAAAwFBMVEUAAAASku0Sku0Sku0jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4Sku0Sku0jNz4Sku0Sku0iO0cjNz4jNz4jNz4Sku0jNz4jNz4jNz4jNz4Sku0Sku0jNz4Sku0jNz4jNz4hPk0jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4Sku0jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4Sku0Sku0Sku0Sku0Sku0jNz4Sku1llcFHAAAAPnRSTlMA6PhAMGDwkHBQQOAP7NAgrATAgCDwV0kQNeS+oTD7OwfmZyi39nqJ0pd0JBoM8tbOxavrzNyEFa6kZX9wWEOx3tIAAAP/SURBVFjD7Zhre5owFICPLd6wdYtogNUJiHdF531X+///1ZITJIZrN/thdn0/mHCeEPKS5IRH6JSK+AY3Rum5iI9wYzCluzxuUunu5302X25T6R6yeVf6J/jflfyGyhjilHnYhHqTUYcrmDUZC4hDGxwcS5PjY5TUu7vGbmrHlD58TPAtrqSdVLoQp8bDdSjzogxJY4YJL6HKe2in9M+RY9GwujqPx1WU7u+e45ReXYmHW6+tZC+jAQ3Im1By9yfJKKbUeVJhMj+enr4rSuqY/gUlEep5WAyPqlLpAfJJKo2r1aoBjHqVMU9RssyaYfQdwqqBxcNri8EuiUZnhjGjGkQQuzxibd1LJVpljEm20gTXiwX+CqfpaqUKu25Eb1VPKC26vRNSqQI0RVW0pL1zvRFOp2t4IrCcBpGSg8362bO0wNfElee86eSvlFb1EL1Qyd9GEpWYUi22A2AxkQHtrBQ0xJ7NVjJ5QYGz4VVLVfr8QSWppNAsVMJRDieTYbrStlERG2EBQHbhFClKXXyHQUzp0r3PCx84+FRHUbp7VOk8XKmkib0D4NIdU7J1vEtnWNAflBfAYs1wYfXRrRaA1fciJYqvRIMcpRm/jQDHxofnJ/Frlep4VrjigM/IeLhwDICJ3DPH7jzsbyn6yVMy2K8HiB9X6sTIVPKqIbMiJV0k1sFMS0virnnYrBtDVBK7fEvUJL4XG6lQqXcxPFMqPXxW+a6ki8KMd0hTcr1TiDciMSVihIe+UHJwQkFVQuZJpTbDDJVGIidwcFHYUinO/Z8pGWlKYOIcIF9jSl/PmVAo6TghaUrd3KM2zAnyHus1lLxsJfC70VyYipKJC83QLV0o2WmztOrheHOVsJwCA9fEHl5DqUeylDiufljjbQdFaSoaAoRKFs6YqyrZ2GpC8pTI9vy+qkJOKrkfVH69SGkf9hcM0pToOAAOJuhxqOTJY9GWSrCLzlxot/wwiR9xWc7ylGAq1rXRwtKGy4z3qPL8EiXsZ7jZ4KMTSn2WFjSAdvd8wlfQTbNrcxxI90j0CSqhNmPqtO3DUh612N9yka2E30ESr15wLhUrjWRvSaVwACJFNPiiGkQtqbxLKJGWvJRKZMXLTZ4SHraS/YXS46c4j8VKVvgRN1xnKyGeDQynd1Yi67C2C5XAGqQogSlSS54SjC+VxlKJPCSBuFKFM1BCK0xV81GF4UCfFyZQXlA4HvYnZDu2ANGFydAGayO+wh3eVOwh2hLGqxmBMQ8zJdjwyo6AgDY58f8e9IFcfHOhdBU2rbchk6NDqekTGQg03W7jddukNgGFwKFlcwF/jutrmq7rjjYHofS2eFe6Bd6VboF3pVvgDSp1Sp03pvQbFxPHO+Flvh4AAAAASUVORK5CYII="},210:function(e,a,t){"use strict";t.r(a);t(23);var l=t(0),c=t.n(l),r=t(97);a.default=function(e){var a=e.location,t=e.pageResources;return t?c.a.createElement(r.a,Object.assign({location:a,pageResources:t},t.json)):null}},211:function(e,a,t){"use strict";t(33),t(216),t(70),t(214);var l=t(0),c=t.n(l),r=t(203),s=t(207),n=t(209),i=t(323),m=t(320),o=t(321),u=t(322);a.a=function(e){var a=e.className,N=e.checkout,p=c.a.useState()[1],d=Object(l.useCallback)(function(){return p({})},[]),E=Object(l.useState)(!1),h=E[0],g=E[1],f=function(){return g(!h)},k=[],b=0,S=0,v=function(e,a){return e.reduce(function(e,t){return"string"==typeof t[a]?e+Number(t[a]):e+t[a]},0)};return"undefined"!=typeof window&&null!==(k=JSON.parse(localStorage.getItem("cartList")))&&(b=v(k,"totalPrice").toFixed(2),S=v(k,"qtty"),localStorage.setItem("total",JSON.stringify(b))),c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"container"},c.a.createElement("nav",null,c.a.createElement("ul",{className:"link-listing"},c.a.createElement("li",{className:"link-item"},N?c.a.createElement(r.a,{to:"/products",className:"link"},"RETURN TO SHOPPING"):c.a.createElement(r.a,{to:"/products",className:"link"},"Products"))),c.a.createElement("div",{className:"brand-icon-holder"},c.a.createElement(r.a,{to:"/"},c.a.createElement("img",{className:"brand-icon",src:t(206),alt:"fullstackhq-logo"}))),N?"":c.a.createElement("ul",{className:"icon-listing"},c.a.createElement("li",{className:"icon-item",onClick:f},c.a.createElement("div",{className:"icon-link"},c.a.createElement(s.a,{icon:n.b,className:"icon icon-shopping-bag"}),k?c.a.createElement("span",{className:"cart-quantity"},S):""))))),c.a.createElement(i.a,{isOpen:h,toggle:f,className:a},c.a.createElement(m.a,{toggle:f},"Your Cart"),c.a.createElement(o.a,null,c.a.createElement("ul",{className:"cart-product-listing"},k?k.map(function(e,a){return c.a.createElement("li",{key:a,className:"cart-product-item"},c.a.createElement("div",{className:"image-wrapper"},c.a.createElement("div",{className:"thumbnail-holder"},c.a.createElement("img",{src:e.image1024,className:"product-image",alt:e.productName})),c.a.createElement(u.a,{color:"link",onClick:function(){return function(e){var a=k.findIndex(function(a){return a.setID===e.setID});a>-1&&(k.splice(a,1),localStorage.setItem("cartList",JSON.stringify(k))),d()}(e)}},"Remove")),c.a.createElement("div",{className:"text-wrapper"},c.a.createElement("h4",{className:"product-name"},e.productName),c.a.createElement("p",{className:"computation"},e.qtty," x PHP ",e.price," = PHP ",e.totalPrice.toFixed(2))))}):"Your cart is empty")),k?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"total-holder"},c.a.createElement("h3",{className:"total"},"Total: ","PHP "," ",b)),c.a.createElement("div",{className:"btn-holder"},c.a.createElement(r.a,{to:"/checkout",className:"btn-swipe-black hover-swipe-right btn-checkout"},"Checkout"),c.a.createElement(r.a,{to:"/products",className:"btn-swipe-black hover-swipe-right"},"Continue Shopping"))):""))}},215:function(e,a,t){"use strict";var l=t(0),c=t.n(l),r=t(203),s=t(207),n=t(220);a.a=function(){return c.a.createElement("footer",null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"footer-wrapper"},c.a.createElement("div",{className:"logo-holder"},c.a.createElement("div",{className:"brand-holder"},c.a.createElement(r.a,{to:"/"},c.a.createElement("img",{className:"brand-icon",src:t(206),alt:"paymongo-logo"})),c.a.createElement("p",null,"Built with 💙 by ",c.a.createElement("a",{href:"https://fullstackhq.com/",target:"_blank",rel:"noopener noreferrer"},"Fullstack HQ"),". Powered by Gatsby + PayMongo API"))),c.a.createElement("div",{className:"links-holder"},c.a.createElement("h2",{className:"title"},"CATEGORIES"),c.a.createElement("ul",{className:"list-holder"},c.a.createElement("li",{className:"list-item"},c.a.createElement(r.a,{to:"/products",className:"link"},"Clothing")),c.a.createElement("li",{className:"list-item"},c.a.createElement(r.a,{to:"/products",className:"link"},"Accessories")),c.a.createElement("li",{className:"list-item"},c.a.createElement(r.a,{to:"/products",className:"link"},"Home Decor")))),c.a.createElement("div",{className:"links-holder"},c.a.createElement("h2",{className:"title"},"INFORMATION"),c.a.createElement("ul",{className:"list-holder"},c.a.createElement("li",{className:"list-item"},c.a.createElement(r.a,{to:"#",className:"link"},"About")),c.a.createElement("li",{className:"list-item"},c.a.createElement(r.a,{to:"#",className:"link"},"Shipping & Returns")),c.a.createElement("li",{className:"list-item"},c.a.createElement(r.a,{to:"#",className:"link"},"Privacy Policy")),c.a.createElement("li",{className:"list-item"},c.a.createElement(r.a,{to:"#",className:"link"},"Terms & Conditions")))),c.a.createElement("div",{className:"links-holder"},c.a.createElement("h2",{className:"title"},"SOCIAL"),c.a.createElement("ul",{className:"list-holder"},c.a.createElement("li",{className:"list-item"},c.a.createElement("a",{href:"https://facebook.com/fullstackhq/",target:"blank",className:"link"},c.a.createElement(s.a,{icon:n.c,className:"icon"}),"Facebook")),c.a.createElement("li",{className:"list-item"},c.a.createElement("a",{href:"https://dribbble.com/fullstackhq",target:"blank",className:"link"},c.a.createElement(s.a,{icon:n.a,className:"icon"}),"Dribbble")),c.a.createElement("li",{className:"list-item"},c.a.createElement("a",{href:"https://www.instagram.com/fullstackhq/",target:"blank",className:"link"},c.a.createElement(s.a,{icon:n.d,className:"icon"}),"Instagram")),c.a.createElement("li",{className:"list-item"},c.a.createElement("a",{href:"https://twitter.com/fullstackhq",target:"blank",className:"link"},c.a.createElement(s.a,{icon:n.f,className:"icon"}),"Twitter")))))))}}}]);
//# sourceMappingURL=component---src-templates-product-template-js-fe0bbd7b2b7b823d6742.js.map