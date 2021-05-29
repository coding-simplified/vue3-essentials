const slide = {
    template: /*html*/ `
    <div class="slide" :style="{backgroundImage: 'url('+ slide.images[0] + ')'}">
                <span class="spacer"></span>
                <h1>{{slide.title}}</h1>
                <p>{{slide.description}}</p>
                <button class="btn" @click="showModal=true">GET IN TOUCH</button>
                <span class="spacer"></span>
            </div>
    `,
    props: ['slide']
}