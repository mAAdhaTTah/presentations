# Server-side rendering is a pain*

\* not node

---

* Need to use server's templating language
* Need manually update DOM
* Or restrict framework usage to particular interactive sections
    - Doesn't that defeat the purpose?
    - Why use a giant lib like React for that?

---

Vue.js is actually quite good at this.

---

# Agenda

* Why Vue.js?
* What are slots and how are they helpful?
* Using Vuex to solve problems posed by slots

---

## Why Vue.js?

---

### It's a solid framework

* Half the size of React (20.9K vs 43K) ([source](https://gist.github.com/Restuta/cda69e50a853aa64912d))
    - Often more performant
* Easy-to-understand, HTML-based templating
* Strong international adoption (Alibaba, Baidu, Tencent)

**...but it's also great for server-rendered environments**

---

## What makes Vue.js so good for this?

* DOM as template
    - Back-end can render components
    - Front-end bootstraps off of it
* App can run from completely static to single-page-app
* SEO benefits of back-end rendering
    - Use slots to render important content

---

```html
<div id="app">
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
</div>
```

---

```javascript
new Vue({
    el: '#app',
});
```

This will use the DOM as its template.

---

Back-end can define page structure for Front-end to bootstrap from

Vue.js doesn't need to take over the whole page

---

No interactivity? Don't use Vue.js

Otherwise, "decorate" content with interactivity

Page can be a mix, depending on needs of the component

---

## Using Slots for Fun and Profit

---

Let's zoom in on this component:

```html
<blog-post url="http://myblog.com/my-post-1/">
    <h2 slot="title">Blog post title 1</h2>
    <img slot="image" src="http://myblog.com/image-1.jpg" alt="Feature image" />
    <p slot="summary">A summary of the blog post.</p>
</blog-post>
```

The actual component does a lot more:

---

```html
<div class="blog-post">
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
</div>
```

---

Pass in content to defined locations

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
* All communication happens through a Vuex store

---

```html
<tab-container id="a">
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
</tab-container>
```

---

Container component registers module

```javascript
// tab-container
export default {
    mounted() {
        this.$store.registerModule('tabContainer', module);
    }
};
```

---

Components dispatch actions/mutations and read info

```javascript
// tab-header
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
};
```

---

Logic lives in the module

```javascript
// store.js
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
};
```

---

* Keep logic centralized and easy to test
* Wire up individual components to store
* Provide context needed and getters to use it

---

# Recap

* Vue.js provides harmony between server-rendered back-ends and JavaScript-based interactivity
* Use slots for performance and SEO benefits
* Run all communication through Vuex store to avoid communication breakdown
