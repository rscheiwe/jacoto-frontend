# Jacoto

[Jacoto](http://jacoto.herokuapp.com) is an online-course search engine and syllabus creator, featuring over 20K courses. Currently, a personalized recommendation engine utilizing Python and NumPy is underway to streamline UX.

The API may be found [here](https://github.com/rscheiwe/jacoto-api) as a Rails API.

A demo may be found [here](http://richardscheiwe.com/demos), or simply go to [Jacoto's homepage](http://jacoto.herokuapp.com).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The frontend is currently tied to [Jacoto's API](http://jacoto-api.herokuapp.com/api/v1/courses), so those routes should not be altered.

Since the CSS is custom, the dependencies are minimal; only those built by React and a few Semantic usages are required by install:

```
npm install
```

Live Python functionality is dependent on [Pico](https://github.com/fergalwalsh/pico) ([docs](https://pico.readthedocs.io/en/latest/)), which provides Javascript the ability to engage and implement Python programs through a minimalist API. It is recommended that Pico is installed via pip:

```python
pip install --upgrade pico
```

The project is not holistically dependent on Pico, however, since the [Python scraping algorithms](https://github.com/rscheiwe/jacoto-frontend/tree/master/python) are used as a one-off for data munging.

If gathering original data, please review the seeding process in the `seeds.rb` file in the [backend](https://github.com/rscheiwe/jacoto-api/blob/master/db/seeds.rb).

### Python
