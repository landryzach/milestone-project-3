const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/HomePageCar.jpg" alt="Volkswagon Van"/>
                <div>
                  Photo by <a href="https://unsplash.com/@dinoreichmuth?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dino Reichmuth</a> on <a href="https://unsplash.com/s/photos/free-car?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
              </div>
              <a href="/marketplace">
                 <button className="button">Marketplace</button>
              </a>

          </main>
      </Def>
    )
  }  

module.exports = home
