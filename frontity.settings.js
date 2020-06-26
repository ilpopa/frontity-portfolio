const settings = {
  "name": "portfolio",
  "state": {
    "frontity": {
      "url": "http://frontity.local/",
      "title": "Vilppu Similä",
      "description": "Mun päätön WP Frontity sivusto"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Blogu",
              "/blogu/"
            ],
            [
              "Ota yhteys",
              "/yhteys/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://frontity.local/wp-json",
          "homepage": "/vilppu-simila",
          "postsPage": "/blogu"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
