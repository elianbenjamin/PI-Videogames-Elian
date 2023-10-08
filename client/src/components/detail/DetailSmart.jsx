import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cleanDetail, getVideogamesDetail } from "../../redux/action";
import DetailDumb from "./DetailDumb";

const DetailSmart = () => {
  const { detailId } = useParams();
  const dispatch = useDispatch();
  const  videogamesDetail  = useSelector((state) => state.videogamesDetail);
  console.log("soy Detail", videogamesDetail);

  useEffect(() => {
    dispatch(getVideogamesDetail(detailId));
  }, [dispatch, detailId]);

  useEffect(()=>{
    dispatch(cleanDetail())
  },[dispatch])

  return <DetailDumb props={videogamesDetail} />;
};

export default DetailSmart;
