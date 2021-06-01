const footerInfo = {
    template: /*html*/ `
    <div class="ft">
                        <img src="/logo-inverse.png" alt="logo">
                        <p>
                            I have been offering high-quality and reliable solutions for corporate needs since 2019. I put customer satisfaction as top most priority and have been able to maintain 100% Job Success Rate with 100% 5 star feedback.
                        </p>
                        <p>
                            Recently I have partnered with BadaBusiness.Com - An Initiative by Dr. Vivek Bindra. We offer world's most affordable Entrepreneurship Training Programs. We also offer Business Consulting and 1-On-1 Session with Dr. Vivek Bindra as well as offer tailor
                            made programs specifically designed for your organization's unique needs.
                        </p>
                        <table class="tbl">
                            <tr v-for="(link, key) in links">
                                <td>{{key}}</td>
                                <td><a :href="link[1]" target="_blank" rel="noopener noreferrer">{{link[0]}}</a></td>
                            </tr>
                        </table>
                    </div>
    `,
    data() {
        return {
            links: {
                email: ['mayank.srmu@gmail.com', 'mailto:mayank.srmu@gmail.com'],
                'Digital Dukan': ['www.badabusiness.com', 'https://www.badabusiness.com/dd/BIMK003866']
            }
        }
    }
}