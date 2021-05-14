const app = Vue.createApp({
    data: function() {
        return {
           title: "Graphics Design & Website",
           img: "/assets/graphics.gif",
           showImg: 2 
        }
    }
});

const mountedApp = app.mount('#app');
