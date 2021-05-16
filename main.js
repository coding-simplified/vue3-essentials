const app = Vue.createApp({
    data: function () {
        return {
            cls: 'flx',
            serveices: [
                {
                    title: "Graphics Design & Website",
                    img: "/assets/graphics.gif",
                    details: ['Graphics with your brand logo', 'Presense on Google Map', 'Delight Your Customers']
                },
                {
                    title: "Mobile App Developement",
                    img: "/assets/mobile.gif",
                    details: ['Android app befitting your brand ', 'Troubleshooting and Debugging', 'App Maintanance ']
                },
                {
                    title: "Computer Vision And Analytics",
                    img: "/assets/cv1.gif",
                    details: ['Awesome Computer vision projects', 'some other stuff', 'some other stuff', 'bla bla bla']
                },
                {
                    title: "Business Consulting",
                    img: "/assets/vb.jpg",
                    details: ['Awesome Computer vision projects', 'some other stuff', 'some other stuff', 'bla bla bla']
                },
                {
                    title: "Custom Solutions",
                    img: "/assets/custom-cloud.gif",
                    details: ['Awesome Computer vision projects', 'some other stuff', 'some other stuff', 'bla bla bla']
                }
            ]
        }
    }
});

const mountedApp = app.mount('#app');
