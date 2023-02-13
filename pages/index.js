import Head from 'next/head'
import Image from 'next/image'

// Components
import Topbar from '../components/topbar/Topbar'

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
            <section className='row'>
              <div className='col-12 col-lg-12'>
                <h5 className='row container'>
                    Ratings
                </h5>
                <div className='row'>
                    {data.length > 0 ? data.map((data, i) => {
                      return (
                        <div className={`col-4 col-lg-4`}>
                          <div className='container'>
                            <div className='col-12 col-lg-12'>
                              <div className='row my-3 mx-1'>
                                <div className='col-l2 col-lg-1 font-bold'>
                                  {i + 1}.
                                </div>
                                <div className='col-12 col-lg-6'>
                                  <Image loading='lazy' src={data.Images[0]} width={150} height={150} alt={`images_${data.Images[0]}`}/>
                                </div>
                                <div className='col-12 col-lg-5'>
                                  <h6 className='col-l2 col-lg-12' style={{cursor:"pointer"}} onClick={()=>{console.log(data)}}>
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
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
