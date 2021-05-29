const slides = [
    {
        title: 'Business Consulting',
        description: 'We have partnered with Dr. Vivek Bindra and Bada Business to empower youth, small businesses, MSMEs and SMEs with the most affordable and high quality entrepreneurial Skills & Knowledge.',
        images: ['/assets/vb.jpg', '/assets/vb1.jpg', '/assets/vb2.jpg',]
    },
    {
        title: '100% Customer Satisfaction',
        description: 'We put customer satisfaction at highest priority and thanks to all our wonderful customers that we are able to maintain 100% 5✯ rating on Upwork so far!',
        images: ['/assets/cs.jpg', '/assets/cs.svg', '/assets/cs1.jpg', '/assets/cs2.jpg']
    },
    {
        title: 'Mobile And Web Development',
        description: 'We deliver high quality Apps, Websites, Softwares and Scripts. Thanks to all our wonderful customers that we are able to maintain 100% 5✯ rating on Upwork so far!',
        images: ['/assets/m.jpg', '/assets/m1.jpg', '/assets/m1.png']
    }
]

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
