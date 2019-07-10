# Authoring Gatsby Themes followed by jlengstorf egghead tutorial

This repo is intended to teach developers how to author Gatsby themes.

## Installation

**IMPORTANT:** To set this site up, you’ll need to make director named `data` in your root folder and make a file named `events.yml`

Example `events.yml`
```
- name: React Rally
  location: salt Late City, UT
  start_date: 2019-08-22
  end_date: 2019-08-23
  url: https://www.reactrally.com/

- name: React Rally 2
  location: salt Late City, UT
  start_date: 2019-08-22
  end_date: 2019-08-23
  url: https://www.reactrally.com/
```
###Install theme:
```sh
yarn add @mnuworld/gatsby-theme-events
or
npm install @mnuworld/gatsby-theme-events
```

In your `gatsby-config.js`:

```sh
  module.exports = {
    plugins: [
     {
       resolve: '@mnuworld/gatsby-theme-events',
    ]
  }
```