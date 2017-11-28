import React from 'react'
import { Deck, Heading, Slide, MarkdownSlides,
    Markdown, CodePane, Text } from 'spectacle'
import { AboutMe, ThankYou } from '../../slides'
import { DarkTheme } from '../../themes'

export default () => (
    <Deck transitionDuration={500} theme={DarkTheme} transition={['slide']}>
        <Slide transition={['slide']} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="secondary">
                Using Vue.js in Server Rendered Environments
            </Heading>
        </Slide>
        {AboutMe()}
        <Slide>
            <Heading size={1}>Server-side rendering is a pain*</Heading>
            <Text>*not node</Text>
        </Slide>
        <Slide>
            <Markdown>{`* Need to use server's templating language
* Need manually update DOM
* Or restrict framework usage to particular interactive sections
    - Doesn't that defeat the purpose?
    - Why use a giant lib like React for that?`}</Markdown>
        </Slide>
        <Slide>
            <Text>Vue.js is actually quite good for this.</Text>
        </Slide>
        <Slide>
            <Heading size={1}>Agenda</Heading>
            <Markdown>{`* Why Vue.js?
* What are slots and how are they helpful?
* Using Vuex to solve problems posed by slots`}</Markdown>
        </Slide>
        <Slide>
            <Heading size={2}>Why Vue.js?</Heading>
        </Slide>
        <Slide>
            <Heading size={3}>It's a solid framework</Heading>
            <Markdown>{`* Half the size of React (20.9K vs 43K) ([source](https://gist.github.com/Restuta/cda69e50a853aa64912d))
    - Often more performant
* Easy-to-understand, HTML-based templating
* Strong international adoption (Alibaba, Baidu, Tencent)

**...but it's also great for server-rendered environments**`}</Markdown>
        </Slide>
        <Slide>
            <Markdown>{`## What makes Vue.js so good for this?

* DOM as template
    - Back-end can render components
    - Front-end bootstraps off of it
* App can run from completely static to single-page-app
* SEO benefits of back-end rendering
    - Use slots to render important content`}</Markdown>
        </Slide>
        <Slide>
            <CodePane lang={'markup'} source={`<div id="app">
    <h1>My blog</h1>
    <blog-post-list>
        <blog-post url="http://myblog.com/my-post-1/">
            <h2 slot="title">Blog post title 1</h2>
            <img src="http://myblog.com/image-1.jpg" alt="Feature image" slot="image" />
            <p slot="summary">A summary of the blog post.</p>
        </blog-post>
        <blog-post url="http://myblog.com/my-post-2/">
            <h2 slot="title">Blog post title 2</h2>
            <img src="http://myblog.com/image-2.jpg" alt="Feature image" slot="image" />
            <p slot="summary">A summary of the blog post.</p>
        </blog-post>
    </blog-post-list>
</div>`} />
        </Slide>
        <Slide>
            <CodePane lang={'js'} source={`new Vue({
    el: '#app',
});`} />
            <Text>This will use the DOM as its template.</Text>
        </Slide>
        <Slide>
            <Text>Back-end can define page structure for Front-end to bootstrap from</Text>
            <Text>Vue.js doesn't need to take over the whole page</Text>
        </Slide>
        <Slide>
            <Markdown>{`No interactivity? Don't use Vue.js

Otherwise, "decorate" content with interactivity

Page can be a mix, depending on needs of the component`}</Markdown>
        </Slide>
        <Slide>
            <Heading size={2}>Using Slots for Fun and Profit</Heading>
        </Slide>
        <Slide>
            <Text>Let's zoom in on this compoennt:</Text>
            <CodePane lang={'markup'} source={`<blog-post url="http://myblog.com/my-post-1/">
    <h2 slot="title">Blog post title 1</h2>
    <img slot="image" src="http://myblog.com/image-1.jpg" alt="Feature image" />
    <p slot="summary">A summary of the blog post.</p>
</blog-post>`} />
            <Text>The actual component does a lot more...</Text>
        </Slide>
        <Slide>
            <CodePane lang={'markup'} source={`<div class="blog-post">
    <div class="blog-post__title">
        <slot name="title"></slot>
    </div>

    <div class="blog-post__image">
        <slot name="image"></slot>
    </div>

    <div class="blog-post__summary">
        <slot name="summary"></slot>
    </div>

    <div class="blog-post__view">
        <a :href="url">View post</a>
    </div>
</div>`} />
        </Slide>
        {MarkdownSlides(`Pass in content to defined locations

* Back-end renders important content
* Front-end structures content

---

### Benefits of Slots

* Faster perceived performance
    - Browser can request images before getting JavaScript
* Improved SEO
    - Important content doesn't need JavaScript to render

---

### Difficulties with Slots

* Cut off from parent-child communication
* Indirection caused by coupling not visible in template

---

## "Registering Module" Pattern

* Solves the problem of parent-child communication
* All communication happens through a Vuex store`)}
        <Slide>
            <CodePane lang={'markup'} source={`<tab-container id="a">
    <tab-header slot="header" id="0">
        Tab 1
    </tab-header>
    <tab-content slot="content" id="0">
        Tab 1 content
    </tab-content>
    <tab-header slot="header" id="1">
        Tab 2
    </tab-header>
    <tab-content slot="content" id="1">
        Tab 2 content
    </tab-content>
</tab-container>`} />
        </Slide>
        <Slide>
            <Text>Container component registers module</Text>
            <CodePane lang={'js'} source={`// tab-container
export default {
    mounted() {
        this.$store.registerModule('tabContainer', module);
    }
};`} />
        </Slide>
        <Slide>
            <Text>Components dispatch actions/mutations and read info</Text>
            <CodePane lang={'js'} source={`// tab-header
export default {
    prop: {
        id: {
            type: String,
            required: true
        }
    },
    computed: {
        isVisible: () => this.$store.getters.tabIsVisible(this.id)
    },
    methods: {
        onClick: () => this.$store.commit('headerClick', this.id)
    }
};`} />
        </Slide>
        <Slide>
            <Text>Logic lives in the module</Text>
            <CodePane lang={'js'} source={`// store.js
export default {
    state: {
        visibleTab: 0
    },
    getters: {
        tabIsVisible: state => id => state.visibleTab === id
    },
    mutations: {
        headerClick: (state, id) => {
            state.visibleTab = id;
        }
    }
};`} />
        </Slide>
        {MarkdownSlides(`* Keep logic centralized and easy to test
* Wire up individual components to store
* Provide context needed and getters to use it

---

# Recap

* Vue.js provides harmony between server-rendered back-ends and JavaScript-based interactivity
* Use slots for performance and SEO benefits
* Run all communication through Vuex store to avoid communication breakdown
`)}
        {ThankYou()}
    </Deck>
)
