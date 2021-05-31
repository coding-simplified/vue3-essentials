const footerServices = {
    template: /*html*/`
    <div class="ft">
        <h1>What We Offer</h1>
            <hr />
            <div class="offering" v-for="(val, ind) in serveices" :key="'offering' + ind">
                <div>
                    {{ val.title }}
                    <span class="spacer"></span>
                    <span>&#8249;</span>
                    <div></div>
                </div>
                <hr style="color: #aaa5; transform: scaleY(0.5)" />
            </div>
    </div>
    `,
    props: ['serveices']
}