import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

import Add_Reserv from "../../Assets/Add_Reserv.png";
import Temp from "../../Assets/Temp_gif.png";
import preURL from "../../preURL/preURL";
import StyledBtn from "../../Style/StyledBtn";
import { StyledDiv } from "../../Style/StyledDiv";

const AddReserv = () => {
  const [title, setTitle] = useState("");
  const [sTitle, setSTitle] = useState("");
  const [result, setResult] = useState([]);
  const [sResult, setSResult] = useState(false);
  const [results, setResults] = useState([]);
  // 검색 후, 선택된 제목
  const [rItem, setRItem] = useState({});
  const [rTitle, setRTitle] = useState("");

  const WhiteBoxStyle = {
    borderStyle: "none",
    backgroundColor: "white",
    width: 393,
    height: 33,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    paddingLeft: 10,
    margin: 0,
  };

  // 영상 제목 조회
  const searchTitle = () => {
    axios
      .get(preURL.preURL + `/run/reservations/title/search?q=${sTitle}`)
      .then((res) => {
        console.log("❕영상 제목 조회❕ ", res.data);
        setResults(res.data);
        let newResult = [];
        for (let i = 0; i < results.length; i++) {
          newResult.push(results[i].title);
        }
        // 한 번에 작동하지 않음 <- 수정 필요
        setResult(newResult);
        console.log("연관 검색어 리스트 : ", result);
        setSResult(true);
      })
      .catch((err) => {
        console.error("⚠️ 영상 제목 조회 ⚠️ ", err);
      });
  };

  // 연관 검색어 드롭 다운 리스트
  const ArrayData = result.map((item, i) => {
    return (
      <li
        key={i}
        style={{ listStyle: "none", backgroundColor: "white", padding: 3 }}
      >
        <StyledBtn
          type="button"
          onClick={() => {
            setRTitle(item);
            setRItem(results[i]);
            // 한 번에 작동하지 않음 <- 수정 필요
            console.log("선택된 제목의 정보 :", rItem);
            setSResult(false);
          }}
        >
          <span>{item}</span>
        </StyledBtn>
      </li>
    );
  });

  // 날짜 구하기
  let now = new Date();
  let year = now.getFullYear();
  let todayMonth = now.getMonth() + 1;
  let todayDate = now.getDate();

  let body = {
    id: rItem.id,
    reservationDate: `${year}-${todayMonth}-${todayDate}`,
    startTime: 0,
    endTime: 0,
  };

  const reservations = () => {
    axios
      .post(preURL.preURL + "/run/reservations", body)
      .then((res) => {
        console.log("❕예약 등록❕ ", res.data);
      })
      .catch((err) => {
        console.error("⚠️ 예약 등록 ⚠️ ", err);
      });
  };

  const onChange = (e) => {
    setTitle(e.target.value);
    if (title.length > 0) {
      searchTitle();
    } else if (title.length == 0) {
      setSResult(false);
    }
  };

  return (
    <>
      <StyledDiv>
        <Modal>
          <AddCatWrapper>
            <AddCat>영상 가져오기</AddCat>
            <AddCat default>영상 등록하기</AddCat>
          </AddCatWrapper>
          <StyledDiv
            style={{
              flexDirection: "column",
              position: "absolute",
              top: 100,
              left: 60,
              justifyContent: "flex-start",
            }}
          >
            <StyledDiv>
              <div style={{ position: "relative" }}>
                <p>영상 제목</p>
                <input
                  type="text"
                  name="title"
                  onChange={onChange}
                  value={title}
                  style={WhiteBoxStyle}
                />
                {sResult ? (
                  <ul
                    style={{
                      width: 393,
                      textAlign: "start",
                      paddingLeft: 10,
                      zIndex: 10,
                      backgroundColor: "white",
                      margin: 0,
                      position: "absolute",
                    }}
                  >
                    {ArrayData}
                  </ul>
                ) : (
                  <></>
                )}
                <p>영상 URL</p>
                <p style={WhiteBoxStyle}>{rItem.thumbnailUrl}</p>
                <div>
                  <p>영상 예약 날짜</p>
                  <StyledDiv
                    style={{ width: 403, justifyContent: "space-between" }}
                  >
                    <WhiteBoxBtn>
                      오늘 ({todayMonth}/{todayDate})
                    </WhiteBoxBtn>
                    {/* 다음달로 넘어가는 경우 처리 필요 */}
                    <WhiteBoxBtn>
                      내일 ({todayMonth}/{todayDate + 1})
                    </WhiteBoxBtn>
                    <WhiteBoxBtn>
                      모레 ({todayMonth}/{todayDate + 2})
                    </WhiteBoxBtn>
                    {/* 처리 필요 */}
                  </StyledDiv>
                  <p>영상 예약 시간</p>
                  <p>시간 들어갈 예정</p>
                </div>
              </div>
              <StyledDiv
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  marginLeft: 77,
                }}
              >
                <img src={Temp} style={{ width: 188, height: 106 }} />
                <div>
                  <p>총 재생 시간</p>
                  <p>시간 들어갈 예정</p>
                  <StyledBtn
                    style={{
                      color: "white",
                      backgroundColor: "#E37958",
                      borderRadius: 8,
                      width: 201,
                      height: 50,
                      fontSize: 16,
                      marginTop: 50,
                    }}
                  >
                    영상 등록 완료(수정 불가)
                  </StyledBtn>
                </div>
              </StyledDiv>
            </StyledDiv>
            <StyledDiv
              style={{ flexDirection: "column", alignItems: "flex-start" }}
            >
              <p>영상을 간단하게 소개해주세요!(10글자 내외)</p>
              <input
                type="text"
                name="introduction"
                style={{
                  borderStyle: "none",
                  backgroundColor: "white",
                  width: 674,
                  height: 33,
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 10,
                }}
              />
            </StyledDiv>
          </StyledDiv>
        </Modal>
      </StyledDiv>
    </>
  );
};

export default AddReserv;

const Modal = styled.div`
  background-image: url(${Add_Reserv});
  position: fixed;
  top: 15%;
  bottom: 0;
  height: auto;
  width: 75%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 100;
  display: flex;
  padding-top: 2%;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

const WhiteBoxBtn = styled(StyledBtn)`
  background-color: white;
  width: 125px;
  height: 33px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddCatWrapper = styled.div`
  flex-direction: row;
  position: relative;
  top: -15px;
  left: -320px;
`;

const AddCat = styled(StyledBtn)`
  font-size: 25px;
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
  font-weight: bold;
  background-color: ${(props) => (props.default ? "#EFE8CC" : "#E37958")};
`;
