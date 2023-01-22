const React = require('react')

function error404 () {
    return (
      <main>
          <h1>404: PAGE NOT FOUND</h1>
          <p>Oops, sorry, we can't find this page!</p>
          <div>
              <img src="/images/404-u-turn-sign.png" alt="U-Turn"/>
              <div>
                Photo by <a href="https://www.roadtrafficsigns.com/u-turn-signs">www.roadtrafficsigns.com</a>
              </div>
            </div>
        </main>
    );
};
  

module.exports = error404;