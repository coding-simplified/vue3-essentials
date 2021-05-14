const app = Vue.createApp({
    data: function() {
        return {
           title: "Graphics Design & Website",
           img: "/assets/graphics.gif" 
        }
    }
});

const mountedApp = app.mount('#app');
