const app = Vue.createApp({
    data: function () {
        return {
            serveices: {
                graphics: {
                    title: "Graphics Design & Website",
                    img: "/assets/graphics.gif",
                    details: ['Graphics with your brand logo', 'Presense on Google Map', 'Delight Your Customers']
                },
                mobile: {
                    title: "Mobile App Developement",
                    img: "/assets/mobile.gif",
                    details: ['Android app befitting your brand ', 'Troubleshooting and Debugging', 'App Maintanance ']
                },
                cv: {
                    title: "Computer Vision And Analytics",
                    img: "/assets/cv1.gif",
                    details: ['Awesome Computer vision projects', 'some other stuff', 'some other stuff', 'bla bla bla']
                },
                consulting: {
                    title: "Business Consulting",
                    img: "/assets/vb.jpg",
                    details: ['Awesome Computer vision projects', 'some other stuff', 'some other stuff', 'bla bla bla']
                },
                custom: {
                    title: "Custom Solutions",
                    img: "/assets/vb.jpg",
                    details: ['Awesome Computer vision projects', 'some other stuff', 'some other stuff', 'bla bla bla']
                }
            }
        }
    }
});

const mountedApp = app.mount('#app');
