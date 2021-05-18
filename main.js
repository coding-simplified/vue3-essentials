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
    methods: {
        sayHi() {
            alert('Hi');
        }
    }
});


app.component('modal-dialogue', {
    template: `
    <div class="modal-dialogue">
                <h1>Let us contact you</h1>
                <hr>
                <form>
                    <fieldset>
                        <legend>Name</legend>
                        <p>
                            <select v-model="prefix">
                                <option value="Dr">Dr</option>
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Miss">Miss</option>
                            </select>
                        </p>
                        <p>
                            <input v-model="firstName" type="text" placeholder="First Name">
                        </p>
                        <p>
                            <input v-model="lastName" type="text" placeholder="Last Name">
                        </p>
                        <p>
                            {{fullName}}
                        </p>
                    </fieldset>
                    <fieldset>
                        <legend>Contact Details</legend>
                        <p>
                            <input type="email" placeholder="Email">
                        </p>
                        <p>
                            <input type="tel" placeholder="Phone Number">
                        </p>
                    </fieldset>

                    <fieldset>
                        <legend>Message</legend>
                        <p>
                            <textarea id="message" cols="35" rows="3"></textarea>
                        </p>
                    </fieldset>
                    <p>
                        <input type="submit" value="Submit">
                    </p>
                </form>
            </div>
    `,
    data() {
        return {
            // for form
            prefix: 'Dr',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
            // ----
        }
    },
    computed: {
        fullName() {
            return this.prefix + " " + this.firstName + " " + this.lastName;
        }
    }
})

const mountedApp = app.mount('#app');
