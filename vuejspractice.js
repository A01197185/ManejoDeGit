var wmsg = new Vue({ 
    el: '#wmsg',
    data: {
        wmsg: 'Welcome to this page, in this page we will test the capabilities of VueJS'
    }
});

var counter = new Vue({
    el: '#counter',
    data: {
        bucl:[
            { cntr:"num 1" },
            { cntr:"num 2" },
            { cntr:'num 3' },
            { cntr:"num 4" },
            { cntr:"num 5" },
            { cntr:"num 6" },
            { cntr:"num 7" },
            { cntr:"V, W, X" },
            { cntr:"Y, Z" },
        ]
    }
  });

 var inputs = new Vue({
    el:'#inputs',
    data:{
        message: ''
    }
 });

 var imag = new Vue({
    el: '#imag',
    data:{
        desc: 'Created with VueJS',
        alabel: '15 mar 2022',
        imag:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png'
    },

});