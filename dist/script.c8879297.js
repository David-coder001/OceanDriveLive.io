parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mpVp":[function(require,module,exports) {
var e=document.querySelector("#menu-btn"),a=document.querySelector(".header .navbar");e.onclick=function(){e.classList.toggle("fa-times"),a.classList.toggle("active")},window.onscroll=function(){e.classList.remove("fa-times"),a.classList.remove("active")};var i=new Swiper(".home-slider",{grabCursor:!0,loop:!0,centeredSlides:!0,autoplay:{delay:7500,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),n=(i=new Swiper(".room-slider",{spaceBetween:20,grabCursor:!0,loop:!0,centeredSlides:!0,autoplay:{delay:7500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{0:{slidesPerView:1},768:{slidesPerView:2},991:{slidesPerView:3}}}),i=new Swiper(".gallery-slider",{spaceBetween:10,grabCursor:!0,loop:!0,centeredSlides:!0,autoplay:{delay:1500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{0:{slidesPerView:1},768:{slidesPerView:3},991:{slidesPerView:4}}}),i=new Swiper(".review-slider",{spaceBetween:10,grabCursor:!0,loop:!0,centeredSlides:!0,autoplay:{delay:7500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}}),document.querySelectorAll(".faqs .row .content .box"));n.forEach(function(e){e.onclick=function(){n.forEach(function(e){e.classList.remove("active")}),e.classList.add("active")}});var r={apiKey:"AIzaSyDdOWkOvU4yAXWN0s0iXzpxayT9Bt8aabE",authDomain:"ocean-drive-18605.firebaseapp.com",projectId:"ocean-drive-18605",storageBucket:"ocean-drive-18605.appspot.com",messagingSenderId:"405622317033",appId:"1:405622317033:web:90413b559775f96fbd7578",measurementId:"G-S31VCT7BK2"},t=initializeApp(r),s=getAnalytics(t),l=firebase.auth(),o=firebase.database();function c(){fullname=document.getElementById("fullname").value,email=document.getElementById("email").value,password=document.getElementById("password").value,confirmp=document.getElementById("confirmp").value,0!=d(email)&&0!=p(password)||alert(" Email or Password is Outta Line "),0!=u(fullname)?l.createUserWithEmailAndPassword(email,password).then(function(){var e=l.currentUser;alert("user created !!");var a=o.ref,i={email:email,fullname:fullname,password:password,confirmp:confirmp,last_login:Date.now()};a.child("users/"+e.uid).set(i)}).catch(function(e){e.code,e.message;alert("error_message")}):alert("please check fullname")}function d(e){return expression=/^[^@]+@\w+(\.\w+)+\w$/,1==expression.test(e)}function p(e){return!(e<6)}function u(e){return null!=e&&!(e.length<=0)}
},{}]},{},["mpVp"], null)
//# sourceMappingURL=/script.c8879297.js.map