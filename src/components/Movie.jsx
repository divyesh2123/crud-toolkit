import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showmovie } from '../features/movieAction';

export default function Movie() {

    const dis = useDispatch();
    const data = useSelector(y=>y.movie);

    useEffect(()=>{

        dis(showmovie())

    },[])
  return (
    <div>Movie</div>
  )
}
