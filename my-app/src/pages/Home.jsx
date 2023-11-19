import React from 'react'
import Main from '../components/Main'
import Cat from '../components/Cat'

const Home = () => {
  return (
    <div>
      <Main />
      {/* <Cat rowID='1' title='UpComing' fetchURL={requests.requestUpcoming} />
        <Cat rowID='2' title='Popular' fetchURL={requests.requestPopular} />
        <Cat rowID='3' title='Trending' fetchURL={requests.requestTrending} />
        <Cat rowID='4' title='Top Rated' fetchURL={requests.requestTopRated} />
        <Cat rowID='5' title='Horror' fetchURL={requests.requestHorror} /> */}
    </div>
  )
}

export default Home
