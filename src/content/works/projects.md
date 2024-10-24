---
title: "Projects"
description: "I developed a few personal projects and packages for a variety of use cases."
pubDate: "Oct 18 2024"
heroImage: "/projects.webp"
badge: ""
tags: ["projects"]
---

I developed a few personal projects and packages for a variety of use cases. Here's a collection of my projects:

  - [Cintia's personal website](#cintias-personal-website)
  - [My personal website](#my-personal-website)
  - [npm package: marionette-vdom](#npm-package-marionette-vdom)
  - [npm package: jasmine-precondition](#npm-package-jasmine-precondition)
  - [Tasker](#tasker)

---

### Cintia's personal website
![image](/projects-cintia-personal-website.webp)
  - **Date:** Oct 2024
  - **Description:** My wife Cintia's personal website, redone in 2024. Powered by Astro, Tailwind, UnoCSS using the Brutal theme.
  - **Link:** [cintiaromero.com](https://cintiaromero.com/)
  - **Source code:** [github.com/themindfuldev/cintia-personal-site](https://github.com/themindfuldev/cintia-personal-site).

---

### My personal website
![image](/projects-my-personal-website.webp)
  - **Date:** Oct 2024
  - **Description:** My personal website you're browsing right now, redone in 2024. Powered by Astro, Tailwind, DaisyUI using the Astrofy Template.
  - **Link:** [tiagoromero.me](https://tiagoromero.me/)
  - **Source code:** [github.com/themindfuldev/personal-site](https://github.com/themindfuldev/personal-site).

---

### npm package: marionette-vdom
  - **Date:** Jan 2015
  - **Description:** This project aims to implement Marionette.js views with virtual-dom, in a React similar fashion.
  - **Motivation:** One among React’s top-notch features, virtual DOM is gaining momentum in the front-end development community. Since Marionette.js is a formidable and constantly evolving library, why not adding one good thing to another?\
A key concern here is ensuring that whatever code implementing virtual DOM features won’t break any existing functionality. That is why we have incorporated the whole test suite from Backbone.js and Marionette.js for the related classes, and all the 163 specs are passing.
  - **Current status:** To the date, its version 0.1.2 is implementing VDOM versions for **Marionette.ItemView** and **Marionette.CollectionView**.
  - **Usage:** This module exposes **VDOMItemView** as the VDOM implementation for **Marionette.ItemView** and **VDOMCollectionView** for **Marionette.CollectionView**:
```
var VDOMItemView = require('marionette-vdom').VDOMItemView;
var VDOMCollectionView = require('marionette-vdom').VDOMCollectionView;

var MyItemView = VDOMItemView.extend({
  template: _.template('<p><a><b>w<%= content %></b></a></p>'),
  modelEvents: {
    "change": "render"
  }
});
```
  - **Link:** [npmjs.com/package/marionette-vdom](https://www.npmjs.com/package/marionette-vdom)
  - **Source code:** [github.com/themindfuldev/marionette-vdom](https://github.com/themindfuldev/marionette-vdom).

---

### npm package: jasmine-precondition
  - **Date:** Jan 2015
  - **Description:** This project aims to implement a Jasmine instruction to ease setting up asynchronous pre-conditions before, during and after tests.
  - **Motivation:** Since Jasmine 2.0, the runs, waits, and waitsFor methods have been removed in favor of allowing functions run as part of the spec to receive and invoke a done callback.\
The done callback works great for asynchronous features with a callback (such as AJAX, jQuery animations or anything else with promises). However, there are yet other asynchronous features that will complete on their own and would be using waitsFor before Jasmine 2.0, like rendering Google Maps, images or anything else that can change both the DOM and the CSSOM.\
While it is utterly possible to [re-implement waitsFor](https://gist.github.com/abreckner/110e28897d42126a3bb9) I believe that Jasmine 2.0 direction is more towards stepping away from this idea and instead taking more advantage of done callbacks, like putting one it block as a pre-condition for another.\
Thus, the preCondition instruction defined here will simply poll a given conditional function at a certain time interval, and once its condition is met the callback done will be fired off.
  - **Current status:** To the date, its version 0.1.0 can be used either standalone or through node.js.
  - **Usage:** **preCondition(condition, done, interval);** where:
    - **condition**: a conditional function that shall only return true when the condition you are expecting for is met.
    - **done**: the done callback from beforeEach, it or afterEach must be passed here.
    - **interval** (optional): a time interval in milliseconds between two condition executions. Default is 100.
```
describe('the preCondition instruction', function () {

  var counter1 = 0,
      counter2 = 0,
      interval;

  beforeEach(function(done) {
    interval = setInterval(function(){
      counter1 += 100;
    }, 100);

    preCondition(function() {
      return counter1 >= 500;
    }, done, 100);
  });

  it('should only get executed when counter1 is 500', function (done) {
    expect(counter1).toBe(500);

    preCondition(function() {
      counter2 += 200;
      return counter2 === 1000;
    }, done, 100);
  });

  it('should only get executed when counter2 is 1000', function () {
    expect(counter2).toBe(1000);
  });

  afterEach(function(){
    clearInterval(interval);
  });
});
```
  - **Link:** [npmjs.com/package/jasmine-precondition](https://www.npmjs.com/package/jasmine-precondition)
  - **Source code:** [github.com/themindfuldev/jasmine-precondition](https://github.com/themindfuldev/jasmine-precondition).

---

### Tasker
  - **Date:** Aug 2013
  - **Description:** This project is meant to illustrate the article I wrote for Java Magazine #123: [Turbinando aplicações Java com REST e Backbone.js (pt, 2014)](/works/articles/#turbinando-aplica%C3%A7%C3%B5es-java-com-rest-e-backbonejs-pt-2014)
  - **Motivation:** Tasker is a web application using Backbone.js and Handlebars.js on the client-side and Play! over Java on the server-side. This application simulates a very simple Kanban board based on Agile methodologies. Basically, the board can have multiple projects, each project can have multiple stories and each story can have multiple issues, which can be either task, bug or enhancement.\
The user can create and remove projects, stories and issues, and also move issues around 4 lanes representing its possible status: Backlog, In Progress, Verify and Signed Off.
  - **Concepts:** The main purpose of Tasker is to demonstrate important front-end concepts of nowadays about smart client-side applications, such as:
    - **Client-side:**
      - MV* on the client-side with Backbone.js
        - REST-based models
        - views
        - routers
        - events
        - validation
      - Templating with Handlebars.js
        - Custom helpers
      - Using Bootstrap components
      - Using Font Awesome fonts
      - Writing LESS css
      - UI-level i18n
      - Responsive/adaptive layout
    - **Server-side:**
      - Play! Framework as a modern, simple yet powerful back-end
        - models
        - views
        - controllers
        - REST-based routers
        - Google Clojure compilation and minification
      - Ebean as a simple ORM approach
        - JPA-based mapping
        - simple query language
        - evolutions
      - JSON manipulation with Flexjson
      - Unit testing with TestNG
      - Code coverage
      - Setting production profile
      - Deploying to Heroku
  - **Source code:** [github.com/themindfuldev/tasker](https://github.com/themindfuldev/tasker).
