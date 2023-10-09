import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {  getVideogamesDetail } from "../../redux/action";
import DetailDumb from "./DetailDumb";
import { CLEAN_DETAIL } from "../../redux/action-types";


const DetailSmart = () => {
  const { detailId } = useParams();
  const dispatch = useDispatch();
  const  videogamesDetail  = useSelector((state) => state.videogamesDetail);


  useEffect(() => {
    dispatch(getVideogamesDetail(detailId))
    dispatch({type: CLEAN_DETAIL})
  }, [dispatch, detailId]);



  return <DetailDumb props={videogamesDetail} />;
};

export default DetailSmart;
