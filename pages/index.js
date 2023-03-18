import Head from 'next/head'
import Image from 'next/image'

// Components
import Topbar from '../components/topbar/Topbar'
import Carousels from '../components/carousel/Carousels'

// Example Data
import { ExampleData } from './testData'

// IMDB API
import GetIMDB from '../action/IMDB'

// React
import {useState, useEffect} from 'react'

export default function Home() {

  const [data, setData] = useState([])

  useEffect(()=>{
    setData(ExampleData)
    console.log(data)
  }, [])

  // useEffect(()=>{
  //   GetIMDBS()
  // }, [])

  // async function GetIMDBS(){
  //   const result = await GetIMDB()
  //   if(result){
  //     if(result.status == 200){
  //       setData(result.data)
  //     }
  //     console.log(result.data)
  //   }
  // }

  return (
    <>
      <Head>
        <title>IMDB - Movies Ratings</title>
      </Head>
      <div id='app' className='layout-horizontal'>
        <div>
          <header className='mb-5'>
            <Topbar />
          </header>
        </div>
        <div className='content-wrapper container'>
          <div className='page-content'>
              <div className='col-12 col-lg-12'>
                <h5 className='mx-2 row'>
                    Ratings
                </h5>
                <div className='row container'>
                    {data.length > 0 ? data.map((data, i) => {
                      return (
                            <div className={`col-xs-5 col-sm-6 col-md-4 col-lg-3`}>
                              <div className='container'>
                                <div className='col-12 col-lg-12'>
                                  <div className='row my-3'>
                                    <div className='col-1 col-sm-1 col-md-1 col-lg-1 font-bold'>
                                      {i + 1}.
                                    </div>
                                    <div className='col-10 col-md-10 col-lg-10 text-center'>
                                      <Carousels data={data.Images}/>
                                    </div>
                                    <div className='col-12 col-lg-12 my-3'>
                                      <h6 className='col-l2 col-lg-12 text-center' style={{cursor:"pointer", maxWidth:"500px"}} onClick={()=>{console.log(data)}}>
                                        {data.Title}
                                      </h6>
                                      <div className='col-l2 col-lg-12 text-sm'>
                                        Rates : {data.Rated}
                                      </div>
                                      <div className='col-l2 col-lg-12 text-sm'>
                                        Duration: {data.Runtime}
                                      </div>
                                      <div className='col-l2 col-lg-12 text-sm'>
                                        Released : {data.Released}
                                      </div>
                                      <div className='col-l2 col-lg-12 text-sm'>
                                        Rating : {data.imdbRating}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                      )
                    })
                    :
                    ""
                    }
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
