import{a as t,j as e}from"./index.a4b006ef.js";import{S as c,a as o}from"./swiper-slide.67b09a36.js";import{N as r}from"./navigation.93b02eaa.js";import{m as n}from"./motion.1890b24c.js";const d="/assets/private_offices.944e3e33.jpg",p="/assets/hot_desk.5ac81f96.jpg",l="/assets/executive_cabins.777d3e3d.jpg",m="/assets/meeting_rooms.ae6d9ead.jpg",g="/assets/large_managed_office.9233ce16.jpg",f="/assets/event_dining_space.e75e2349.jpeg",S=[{id:1,src:d,title:"Private offices"},{id:2,src:p,title:"Hot Desk"},{id:3,src:l,title:"Executive Cabins"},{id:4,src:m,title:"Meeting Rooms"},{id:5,src:g,title:"Large managed office space"},{id:6,src:f,title:"Event & dining space"}],_=({item:s})=>t(n.div,{className:"space_box",whileHover:{y:-5},children:[e("div",{className:"img_wrap",children:e("img",{src:s.src,alt:"sdsd"})}),e("div",{className:"space_info",children:e("h4",{children:s.title})})]}),u=({list:s,rows:a})=>e(c,{modules:[r],navigation:!0,spaceBetween:10,slidesPerView:a,children:s.map(i=>e(o,{children:e(_,{item:i})},i.id))});export{S as A,u as P};
