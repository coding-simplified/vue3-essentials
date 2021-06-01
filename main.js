const slides = [
    {
        title: 'Business Consulting',
        description: 'We have partnered with Dr. Vivek Bindra and Bada Business to empower youth, small businesses, MSMEs and SMEs with the most affordable and high quality entrepreneurial Skills & Knowledge.',
        images: ['/vb.jpg', '/vb1.jpg', '/vb2.jpg']
    },
    {
        title: '100% Customer Satisfaction',
        description: 'We put customer satisfaction at highest priority and thanks to all our wonderful customers that we are able to maintain 100% 5✯ rating on Upwork so far!',
        images: ['/cs.jpg', '/cs.svg', '/cs1.jpg', '/cs2.jpg']
    },
    {
        title: 'Mobile And Web Development',
        description: 'We deliver high quality Apps, Websites, Softwares and Scripts. Thanks to all our wonderful customers that we are able to maintain 100% 5✯ rating on Upwork so far!',
        images: ['/m.jpg', '/m1.jpg', '/m1.png']
    }
]

const app = Vue.createApp({
    data: function () {
        return {
            showModal: false,
            slides,
            slide_ind: 0,
            cls: 'flx',
            serveices: [
                {
                    title: "Graphics Design & Website",
                    img: "/graphics.gif",
                    details: ['Graphics with your brand logo', 'Presense on Google Map', 'Delight Your Customers'],
                    bg: "#1F75A0",
                },
                {
                    title: "Mobile App Developement",
                    img: "/mobile.gif",
                    details: ['Android app befitting your brand ', 'Troubleshooting and Debugging', 'App Maintanance '],
                    bg: "#fff",
                },
                {
                    title: "Computer Vision And Analytics",
                    img: "/cv1.gif",
                    details: ['Awesome Computer vision projects', 'some other stuff', 'some other stuff', 'bla bla bla'],
                    bg: "#ddd",
                },
                {
                    title: "Business Consulting",
                    img: "/vb.jpg",
                    details: ['Awesome Computer vision projects', 'some other stuff', 'some other stuff', 'bla bla bla'],
                    bg: "#fff",
                },
                {
                    title: "Custom Solutions",
                    img: "/custom-cloud.gif",
                    details: ['Awesome Computer vision projects', 'some other stuff', 'some other stuff', 'bla bla bla'],
                    bg: "#4279E8",
                }
            ]
        }
    },
    components: {
        slide,
        modal,
        navbar,
        service,
        footerInfo,
        footerForm,
        footerServices
    },
    mounted() {
        setInterval(()=>{
            this.slide_ind = (this.slide_ind + 1) % this.slides.length;
        }, 3500)
    },
    methods: {
        sayHi() {
            alert('Hi');
        }
    }
});
