const customInput = {
    template: /*html*/`
    <p class="form-el">
        <input :id="placeholder" type="text" v-model="val" @input="oninput()" @change="onchange()"/>
        <label  :htmlFor="placeholder" :class="{active:val}">{{placeholder}}</label>
        <span className="form-validation">{{error}}</span>
    </p>
    `,
    props: ['value', 'placeholder', 'validator'],
    data() {
        return {
            val: this.value,
            error: ''
        }
    },
    methods: {
        oninput() {
            this.$emit('update:value', this.val)
        },
        onchange() {
            if (this.validator)
                this.error = this.validator(this.val);
        }
    }
}

const footerForm = {
    template: /*html*/`
    <div class="ft">
        <form @submit.prevent="onSubmit()">
            <custom-input v-model:value="name" placeholder="Name" :validator="(v) => v.length<3 ? '* Name must be at least 3 characters long' : ''"></custom-input>
            <custom-input v-model:value="phone" placeholder="Phone"></custom-input>
            <custom-input v-model:value="email" placeholder="Email" :validator="validateEmail"></custom-input>
            <p class="form-el">
                <textarea cols="30" rows="10" v-model="message"></textarea>
            </p>
            <p class="form-el">
                <input type="submit" value="Submit" />
            </p>
        </form>
    </div>
    `,
    data() {
        return {
            name: '',
            phone: '',
            email: '',
            message: ''
        }
    },
    methods: {
        validateEmail(email) {
            if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
                return '';
            } else {
                return '* Please enter a valid email'
            }
        },
        onSubmit() {
            if(this.name && this.email && ~this.validateEmail(this.email) && this.message)
                console.log(`${this.name}\n${this.phone}\n${this.email}\n${this.message}`);
            else {
                window.alert('Please fill the form!')
            }
        }
    },
    components: {
        customInput
    }
}