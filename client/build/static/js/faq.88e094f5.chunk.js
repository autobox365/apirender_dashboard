(this["webpackJsonpapirender-dashboard"]=this["webpackJsonpapirender-dashboard"]||[]).push([[10],{109:function(e,a,t){"use strict";var r=t(9),o=t(13),n=t(3),i=t.n(n),s=t(38),l=t.n(s),c=t(85),u=t.n(c),d=t(88),m={tag:d.q,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},h=function(e){var a=e.className,t=e.cssModule,n=e.color,s=e.body,l=e.inverse,c=e.outline,m=e.tag,h=e.innerRef,p=Object(o.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(d.m)(u()(a,"card",!!l&&"text-white",!!s&&"card-body",!!n&&(c?"border":"bg")+"-"+n),t);return i.a.createElement(m,Object(r.a)({},p,{className:g,ref:h}))};h.propTypes=m,h.defaultProps={tag:"div"},a.a=h},132:function(e,a,t){"use strict";var r=t(3),o=t.n(r),n=t(9),i=t(13),s=t(38),l=t.n(s),c=t(85),u=t.n(c),d=t(88),m={tag:d.q,listTag:d.q,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,children:l.a.node,"aria-label":l.a.string},h=function(e){var a=e.className,t=e.listClassName,r=e.cssModule,s=e.children,l=e.tag,c=e.listTag,m=e["aria-label"],h=Object(i.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(d.m)(u()(a),r),g=Object(d.m)(u()("breadcrumb",t),r);return o.a.createElement(l,Object(n.a)({},h,{className:p,"aria-label":m}),o.a.createElement(c,{className:g},s))};h.propTypes=m,h.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"};var p=h,g={tag:d.q,active:l.a.bool,className:l.a.string,cssModule:l.a.object},f=function(e){var a=e.className,t=e.cssModule,r=e.active,s=e.tag,l=Object(i.a)(e,["className","cssModule","active","tag"]),c=Object(d.m)(u()(a,!!r&&"active","breadcrumb-item"),t);return o.a.createElement(s,Object(n.a)({},l,{className:c,"aria-current":r?"page":void 0}))};f.propTypes=g,f.defaultProps={tag:"li"};var y=f,v=t(87),b=t(84),w=function(e){return o.a.createElement(b.a,{id:"menu.".concat(e)})},q=function(e,a,t){return 0===t?"":e.split(a)[0]+a},k=function(e){var a=e.match.path.substr(1),t=a.split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter((function(e){return-1===e.indexOf(":")}))),o.a.createElement(o.a.Fragment,null,o.a.createElement(p,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},t.map((function(e,r){return o.a.createElement(y,{key:r,active:t.length===r+1},t.length!==r+1?o.a.createElement(v.b,{to:"/".concat(q(a,e,r))},w(e)):w(e))}))))};a.a=function(e){var a=e.heading,t=e.match;return o.a.createElement(o.a.Fragment,null,a&&o.a.createElement("h1",null,o.a.createElement(b.a,{id:a})),o.a.createElement(k,{match:t}))}},430:function(e,a,t){"use strict";t.r(a);var r=t(82),o=t(3),n=t.n(o),i=t(214),s=t(109),l=t(154),c=t(398),u=t(132),d=t(83),m=[{question:"How do I obtain a brochure outlining all of your services and prices?",answer:"Please send an email to hello@propertyrender.com or fill out our contact form here, and we will send you a copy of our brochure."},{question:"Do you have any discounts or promotional offers?",answer:"Occasionally we advertise promotional offers and discounts for our services. Please register your business on our platform to receive email updates on our latest promotions and discounts."},{question:"Do we have to sign a contract?",answer:"We may ask you to sign a contract outlining services, fees and schedule for very large 3D rendering projects, however, all orders submitted via phone, email or directly through the client dashboard are bound to our terms and conditions. Please click here to view our terms and conditions."},{question:"What currency are your prices in?",answer:"Our default pricing is in US Dollars, however, the currency can easily be changed in the currency tab on the website and client dashboard."},{question:"Can I change the language on the website?",answer:"You can change the language of the text on the website and dashboard by clicking on the language tab and selecting from 8 different languages including English, Spanish, French, Japanese, German, Chinese, Arabic and Swedish."},{question:"I would like to get a quote for my large 3D rendering project. How do I do this?",answer:"If you would like a quote for a large project, please contact us and provide an overview of the project requirements. Alternatively, you can proceed with ordering your required 3D rendering service via our client dashboard and we will provide you with a quote after you have submitted your order. We will get in touch with you shortly with a quote for your project. You can also use our online chat feature to discuss your project with someone from our customer service team."},{question:"Do you offer residential and commercial virtual staging services?",answer:"We sure do! Virtual Staging is one of the most popular services on our platform. Starting from only $35AUD per image, we provide dozens of interior styles for both commercial and residential interior and exterior spaces. Turn-around time is only 24 hours. "},{question:"Can you tell me how to photograph a room for virtual staging orders?",answer:"We provide many guides and useful tips on how to photography spaces for virtual staging on the Tools section of our client dashboard. Please register your company to access these free resources. The tools sections also provides detailed guides on photographing real estate using all types of cameras and techniques to achieve the best results."},{question:"I only have photos of the property taken on my phone. Are these enough to work with?",answer:"Yes :) Our team do a fantastic job editing photos and video footage from all types of camera phones and digital cameras."},{question:"I am interested in your interactive 360 virtual tours. Can you tell me the about pricing and how the process works?",answer:"To create a 360 Virtual Tour, all you need to do is upload the 360 image files straight from your 360 camera to our platform. We can stitch and edit each of the spherical images and then create a Virtual Tour of the residential or commercial space. Once complete, we provide you with a branded web link to your virtual tour. \n          Pricing is only 9AUD per room which includes professional stitching and editing, tour creation, and online hosting for 12 months. The turnaround time is approximately 48-72 hours depending on the size of the property.\n          "},{question:"I would like to order virtual staging, but my photos have furniture in them already. Is virtual staging still possible?",answer:"It sure is! If your existing photos have furniture in them, simply select the Item Removal option when placing your order for Virtual Staging. Pricing is from $5AUD for Item Removal. This will allow us to work with a blank slate when we add Virtual Staging to the room or spaces."},{question:"Can you add virtual furniture to 360 images?",answer:"Yes, we can add Virtual Staging to 360 images of residential and commercial properties. Virtual staging for residential properties is priced at $85, and $120 for commercial properties. Turnaround time is 24 hours for residential properties and 48 hours for commercial properties."},{question:"Do you provide a white label service for property portals?",answer:"Whether you are an online property portal, real estate agency, or marketing service provider we can provide a white label solution for your cmpany using our API technology. Your customers will be able to order any of the services you wish to be available to them from our client dashboard. Our most popular services for real estate portals are virtual tours, virtual staging, image enhancement, floor plans and item removal."},{question:"Do you provide discounts to resellers?",answer:"We have a Reseller program available to online property portals and large real estate agencies and advertising agencies to access many of our popular services at a wholesale price. Please submit an inquiry on our Reseller Page, and we will be in touch with more information. "},{question:"Do your services cater to real estate photographers?",answer:"Providing services to real estate photographers is a core part of the image enhancement business. We are happy to be able to provide real estate photographers a reliable and affordable outsourcing solution for image enhancement, floor plans, item removal, video editing, virtual staging, and many more services."},{question:"What if I don\u2019t like the final image you provide?",answer:"If you are unsatisfied with the final image you have received, we are happy to provide unlimited revisions until you or your client are 100% happy. Please check the sample images and videos provided for the service you wish to order so that you have a solid understanding of what the final result will look like."},{question:"Is the virtual stage pricing per room?",answer:"Our Virtual Staging service is priced per image. For example, if you would like Virtual Staging added to two separate photos of a living room to show different angles, this would count as two Virtual Staging orders."},{question:"Can I see some more photos for the virtual staging residential by any chance?",answer:"Samples of our residential and commercial virtual staging products can be seen on the Product Page. If you would like to see a specific room or style that is not displayed on our website, please Contact Us. "},{question:"How do I make payment?",answer:"Payment is made at the time of ordering the services for your project through the client dashboard. Payments are accepted through two trusted payment gateways; Stripe and PayPal."},{question:"When do I need to pay for my order?",answer:"Full payment is required for all services prior to commencement of the services, except for 3D Rendering Services which may require a quote to be provided to the client by us before proceeding with an initial deposit prior to commencement of rendering service. "}];a.default=function(e){var a=e.match,t=Object(o.useState)(0),h=Object(r.a)(t,2),p=h[0],g=h[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,null,n.a.createElement(d.a,{xxs:"12"},n.a.createElement(u.a,{heading:"menu.faq",match:a}),n.a.createElement(d.b,{className:"mb-5"})),n.a.createElement(d.a,{xxs:"12",className:"mb-4"},n.a.createElement(n.a.Fragment,null,m.map((function(e,a){return n.a.createElement(s.a,{className:"d-flex mb-3",key:"faqItem_".concat(a)},n.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},n.a.createElement(l.a,{color:"link",className:"card-body  btn-empty btn-link list-item-heading text-left text-one",onClick:function(){return g(a)},"aria-expanded":p===a},e.question)),n.a.createElement(c.a,{isOpen:p===a},n.a.createElement("div",{className:"card-body accordion-content pt-0",dangerouslySetInnerHTML:{__html:e.answer}})))}))))))}}}]);
//# sourceMappingURL=faq.88e094f5.chunk.js.map