const service = {
    template: /*html */ `
    <div class="svcContainer" :style="{background: val.bg}">
            <div :class="{flx: true, flxflip: i%2}">
                <img :src="val.img" :alt="title">
                <div>
                    <h1> {{val.title}} </h1>
                    <ul>
                        <li v-for="(item, ind) in val.details" :key="ind">{{item}}</li>
                    </ul>
                </div>
            </div>
        </div>
    `,
    props: ['val', 'i']
}