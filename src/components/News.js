import PropTypes from 'prop-types'
import React, { Component,useEffect,useState } from 'react'
import Navbar from './Navbar'
import Newsitem from './Newsitem'
import Spinner from './Spinner'

//import PropTypes from 'prop-types'
const News =(props)=> {

  
 let{ar}=props;

 {ar.map((el)=>{
 console.log();
})}
    return (<>  
    <Navbar toggleMode={props.toggleMode} mode={props.mode}/>
  
      <h1 className={`text-center my-5 mg-3  text-${props.mode=='dark'?'light':'dark'}`}>RealNews - Top HeadLine on {ar[0].source.name} </h1>
      {/* <h1 className='text-center'>{this.state.loading && <Spinner/>}</h1> */}
     
        {/* <InfiniteScroll
        dataLength={this.state.article?.length}
        next={this.fetchMoreData}
        hasMore={this.state.article?.length !== this.state.totalResults}
        loader={<h4><Spinner/></h4>}
        > */}
        <div className='container my-3'>
       <div className='row my-4 container'>
       {ar.map((el)=>{
             return <div className='col-md-4'><Newsitem  key={el.url} title={el.title} description={el.description} url={el.urlToImage} newsurl={el.url} author={el.author} date={el.publishedAt}/></div>
       
       })}
              {/* <div className='col-md-4'><Newsitem  key={url} title={title} description={description} url={urlM} newsurl={url} author={author} date={publish}/></div> */}
          
        
            
    </div>
    </div>
    {/* </InfiniteScroll> */}
    
 
   
    {/* <div className='container mx-3 d-flex justify-content-between'>
        <button disabled={} type='button' className={`btn btn-${props.mode==='light'?'dark':'light'} mx-3`} onClick={handlepre}> &larr; previous</button>
        <button disabled={page+1> Math.ceil(totalResults/props.pageno)} type='button' className={`btn btn-${props.mode==='light'?'dark':'light'} mx-3`} onClick={handlenext}>next &rarr;</button>
    </div> */}
    </>
    
    )
  }


News.defaultProps={
  country:'in',
  pageno:8,
  category:'general'
}

News.propTypes={
  country:PropTypes.string,
  pageno:PropTypes.number,
  category:PropTypes.string
}
export default News