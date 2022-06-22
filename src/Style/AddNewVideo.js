import styled from "styled-components";
import "./color.css";
import StyledBtn from "./StyledBtn";
import {hover} from "@testing-library/user-event/dist/hover";

export const PreInform = styled.div`
  width: 65%;
  margin: 2% auto;
  background-color: #E0BFE6;
  display: flex;
  flex-direction: column;
  & > b {
    text-align: center;
    margin-top: 2%;
  }
`

export const PreInformContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2% 10%;
  & > #agree {
    align-self: self-end;
    & > input {
      transform: scale(1.5);
    }
  }
`

export const AddVideoForm = styled.form`
  width: 65%;
  margin: 0 auto 10% auto;
  display: flex;
  flex-direction: column;
`

export const NewUrlForm = styled.div`
  & > input {
    background: var(--tag-select);
    border-radius: 17px;
    border: 0;
    padding: 5px 5px 5px 10px;
    width: 90%;
  }
  & > #verify-btn {
    width: 79px;
    background: var(--sub-color);
    border-radius: 17px;
    padding: 3px;
    margin-left: 3px;
    text-align: center;
    color: white;
  }
`

export const Series = styled.div`
  width: 40%;
  & > input {
    width: 60%;
    background: var(--tag-select);
    border: 0;
    border-radius: 17px;
    padding: 5px 5px 5px 10px;
  }
`

export const AutoFrame = styled.div`
  display: ${props => props.display? "flex" : "none"};
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  width: 170px;
  height: 182px;
  background: var(--main-color);
  border-radius: 12px;
  padding: 5px;
  overflow-y: scroll;
  position: absolute;
  z-index: 2;
  :hover{
    display: flex
  }
`

export const OneSeries = styled(StyledBtn)`
  background-color: transparent;
  margin: 2px;
  color: white;
  text-align: left;
`

export const Introduce = styled.div`
  width: 100%;
  & > input {
    width: 100%;
    background: var(--sub-color);
    border-radius: 17px;
    border: 0;
    padding: 5px 5px 5px 10px;
  }
`

export const Round = styled.div`
  width: 30%;
  & > input {
    width: 60%;
    background: var(--sub-color);
    border-radius: 17px;
    border: 0;
    padding: 5px 5px 5px 10px;
  }
`

export const HashTag = styled.div`
  width: 30%;
  margin-right: 5%;
  & > input {
    width: 90%;
    background: var(--tag-select);
    border-radius: 17px;
    border: 0;
    padding: 5px 5px 5px 10px;
  }
`

export const AddToPlayList = styled.div`
  width: 30%;
  & > input {
    width: 60%;
    background: var(--sub-color);
    border-radius: 17px;
    border: 0;
    padding: 5px 5px 5px 10px;
  }
`

export const AddVideoBtn = styled(StyledBtn)`
  font-size: 20px;
  display: flex;
  flex-direction: row-reverse;
`