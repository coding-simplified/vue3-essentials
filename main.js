const app = Vue.createApp({
    data: function () {
        return {
            showModal: false,
            cls: 'flx',
            serveices: [
                {
                    title: "Graphics Design & Website",
                    img: "/assets/graphics.gif",
                    details: ['Graphics with your brand logo', 'Presense on Google Map', 'Delight Your Customers'],
                    bg: "#1F75A0",
                },
                {
                    title: "Mobile App Developement",
                    img: "/assets/mobile.gif",
                    details: ['Android app befitting your brand ', 'Troubleshooting and Debugging', 'App Maintanance '],
                    bg: "#fff",
                },
                {
                    title: "Computer Vision And Analytics",
                    img: "/assets/cv1.gif",
                    details: ['Awesome Computer vision projects', 'some other stuff', 'some other stuff', 'bla bla bla'],
                    bg: "#aaa5",
                },
                {
                    title: "Business Consulting",
                    img: "/assets/vb.jpg",
                    details: ['Awesome Computer vision projects', 'some other stuff', 'some other stuff', 'bla bla bla'],
                    bg: "#fff",
                },
                {
                    title: "Custom Solutions",
                    img: "/assets/custom-cloud.gif",
                    details: ['Awesome Computer vision projects', 'some other stuff', 'some other stuff', 'bla bla bla'],
                    bg: "#4279E8",
                }
            ]
        }
    },
    components: {
        modal,
        navbar
    },
    methods: {
        sayHi() {
            alert('Hi');
        }
    }
});
