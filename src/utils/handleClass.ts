import { useAppDispatch, useAppSelector } from "@/lib";
import {
  resetDataClass,
  setDataClass,
  setDataClassById,
  setQueryClass,
} from "@/lib/redux/app/class.slice";
import { setLoadingApp } from "@/lib/redux/system/settingSys";
import { useEffect, useRef } from "react";
import { getAllClasses, getClassById } from "./api";
import { GenderStudent, StatusClass } from "@/constants";

export const useClass = (waitFetchData = false) => {
  const {
    classes,
    total,
    isFetchData,
    page,
    limit,
    eduLevelId,
    locationId,
    require,
    subjectId,
  } = useAppSelector((state) => state.class);

  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("🚀 ~ fetchData ~ waitFetchData:", waitFetchData, subjectId);
    async function fetchData() {
      if (waitFetchData) {
        return;
      }

      if (isFetchData) {
        dispatch(setLoadingApp({ loading: true }));
        const res = await getAllClasses(
          page,
          limit,
          subjectId,
          eduLevelId,
          require,
          locationId
        );
        if (res?.data) {
          const { data, pagination } = res?.data;
          dispatch(setDataClass({ data, ...pagination }));
        }
        dispatch(setLoadingApp({ loading: false }));
      }
    }

    fetchData();
  }, [waitFetchData, isFetchData, eduLevelId, require, locationId]);

  return {
    data:
      classes.map((i) => {
        let statusClassText = "Chưa có gia sư nhận";
        switch (i.statusClass) {
          case StatusClass.assignedClass:
            statusClassText = "Đã giao gia sư";
            break;
          case StatusClass.received:
            statusClassText = "Đã có gia sư nhận";
            break;
          case StatusClass.cancelClass:
            statusClassText = "Lớp đã hủy";
            break;
          default:
            break;
        }

        return {
          id: i.id,
          statusClass: statusClassText,
          subject: i.subject.name,
          className: i.class,
          genderStudent: GenderStudent.Female == i.genderStudent ? "Nữ" : "Nam",
          price: i.price.toLocaleString(),
          numberSessions: i.numberSessions,
          timeLearn: i.timeLearn,
          studentStatus: i.studentStatus,
          locationNear: i.locationNear,
          image: i.image,
        };
      }) || [],
    total,
    limit,
    page,
  };
};

export const useClassDetail = (classId: number) => {
  const { classById, subjectId } = useAppSelector((state) => state.class);

  const dispatch = useAppDispatch();
  const classIdRef = useRef<number>();

  useEffect(() => {
    if (!subjectId) {
      classById &&
        dispatch(
          setQueryClass({
            subjectId: [classById?.subject.id],
          })
        );
    }

    async function fetchData() {
      if (classId && classId != classIdRef.current) {
        classIdRef.current = classId;
        dispatch(setLoadingApp({ loading: true }));
        const res = await getClassById(classId);
        if (res.data) {
          dispatch(setDataClassById({ data: res?.data }));
        }
        dispatch(setLoadingApp({ loading: false }));
      }
    }

    fetchData();
  }, [classById]);

  return {
    data: classById,
  };
};
