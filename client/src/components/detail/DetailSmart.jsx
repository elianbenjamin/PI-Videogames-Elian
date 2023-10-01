import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideogamesDetail } from "../../redux/action";
import DetailDumb from "./DetailDumb";

const DetailSmart = () => {
  const { detailId } = useParams();
  const dispatch = useDispatch();
  const { videogamesDetail } = useSelector((state) => state);
  console.log("ssssss", videogamesDetail);

  useEffect(() => {
    dispatch(getVideogamesDetail(detailId));
  }, [dispatch, detailId]);

  return <DetailDumb props={videogamesDetail} />;
};

export default DetailSmart;
