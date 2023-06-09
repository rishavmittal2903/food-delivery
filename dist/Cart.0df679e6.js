var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire8396;e.register("eQ1kh",(function(t,s){Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=void 0;var l=e("624RI"),r=e("lsn9g"),a=n(e("i6euD")),d=n(e("3yHCr")),i=e("5aRSq");function n(e){return e&&e.__esModule?e:{default:e}}var o=()=>{const e=(0,l.useDispatch)(),t=(0,l.useSelector)((e=>e.cart.cartTotalQuantity)),s=(0,l.useSelector)((e=>e.cart.items));return(0,i.jsxs)("div",{className:"my-2 mx-4 flex justify-center flex-1 flex-wrap sm:flex-nowrap",children:[(0,i.jsxs)("div",{className:"w-full sm:w-[50%]",children:[(0,i.jsxs)("div",{className:"my-4 flex justify-center items-center",children:[(0,i.jsxs)("div",{className:"text-center font-bold text-xl font-serif sm:text-3xl",children:["Cart Items - ",t]}),Object.keys(s).length>0&&(0,i.jsx)("button",{className:"bg-lime-500 p-2 ml-2 text-white rounded-md",onClick:()=>{e((0,r.clearCart)())},children:"Clear Cart"})]}),Object.keys(s).length>0&&(0,i.jsx)("div",{"data-testid":"cart-items",className:"flex flex-col",children:Object.values(s).map((e=>(0,i.jsx)(a.default,{...e},e.id)))})]}),(0,i.jsx)(d.default,{})]})};t.exports.default=o})),e.register("i6euD",(function(t,s){Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=void 0;var l=e("624RI"),r=e("lsn9g"),a=e("1m9Gl"),d=e("5aRSq");var i=e=>{var t;const{id:s,name:i,price:n,defaultPrice:o,imageId:c,isVeg:x}=e,u=(0,l.useDispatch)(),m=(0,l.useSelector)((e=>e.cart.items));return(0,d.jsxs)("div",{className:"flex justify-between mb-6 p-4 rounded-md border-2 border-[#e7e9ed] shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s]",children:[(0,d.jsxs)("div",{className:"w-[calc(100%_-_140px)]",children:[(0,d.jsx)("div",{className:x?"flex justify-center items-center w-4 h-4 border-2 border-green-600":"flex justify-center items-center w-4 h-4 border-2 border-red-600",children:(0,d.jsx)("span",{className:x?"w-2 h-2 rounded-full bg-green-600":"w-2 h-2 rounded-full bg-red-600"})}),(0,d.jsx)("div",{className:"mt-2 font-bold text-base",children:i}),(0,d.jsxs)("div",{className:"mt-2 font-mono",children:["₹",(n||o)/100]})]}),(0,d.jsxs)("div",{className:"ml-2 w-[118px] h-[120px] relative",children:[(0,d.jsx)("div",{className:"w-[118px] h-24",children:""===c?(0,d.jsx)("img",{loading:"lazy",className:"w-[118px] h-24 rounded-lg object-cover",src:"https://t3.ftcdn.net/jpg/00/70/49/52/360_F_70495270_2aJc2punK2LJVhMCU7zxJdjRaKBS6wjy.jpg"}):(0,d.jsx)("img",{loading:"lazy",className:"w-[118px] h-24 rounded-lg object-cover",src:a.MENU_IMG_CDN_URL+c})}),(0,d.jsxs)("div",{className:"absolute top-[72px] left-[50%] w-24 h-9 translate-x-[-50%] flex items-center justify-around bg-lime-500 hover:bg-lime-600 rounded text-sm text-white font-bold",children:[(0,d.jsx)("button",{className:"p-2",onClick:()=>{var t,l;return(null===(t=m[s])||void 0===t?void 0:t.quantity)&&(l={...e},u((0,r.removeItem)(l)),void u((0,r.getTotalAmount)()))},children:(0,d.jsx)("span",{children:"-"})}),(0,d.jsx)("div",{children:(0,d.jsx)("span",{children:(null===(t=m[s])||void 0===t?void 0:t.quantity)||0})}),(0,d.jsx)("button",{className:"p-2 z-30",onClick:()=>{return t={...e},u((0,r.addItem)(t)),void u((0,r.getTotalAmount)());var t},children:(0,d.jsx)("span",{children:"+"})})]})]})]})};t.exports.default=i})),e.register("3yHCr",(function(t,s){Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=void 0;var l=e("624RI"),r=e("5aRSq");var a=()=>{const e=(0,l.useSelector)((e=>e.cart.cartTotalAmount));return(0,r.jsxs)("div",{className:"w-[350px] h-[300px] flex flex-col justify-between p-6 bg-slate-100 border-2 border-[#e7e9ed] shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s] sm:mt-[72px] sm:ml-8",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"text-2xl text-black-800 font-bold",children:"Order Summary"}),(0,r.jsxs)("h1",{className:"text-base mt-2 font-semibold",children:["Price - ₹",e/100]}),(0,r.jsx)("h1",{className:"text-base mt-2 font-semibold",children:"Delivery Charges - Free"}),(0,r.jsxs)("h1",{className:"text-base mt-2 font-semibold",children:["Subtotal - ₹",e/100]})]}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{className:"flex justify-center w-full p-2 uppercase rounded-lg bg-lime-500 mt-2 hover:bg-lime-600",children:(0,r.jsx)("span",{className:"font-medium text-white p-1",children:"Proceed to Checkout"})})})]})};t.exports.default=a}));
//# sourceMappingURL=Cart.0df679e6.js.map