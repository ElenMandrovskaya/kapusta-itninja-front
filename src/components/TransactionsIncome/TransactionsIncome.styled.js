import styled from "@emotion/styled";

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
export const Table = styled.div`
  border-radius: 30px 30px 0px 0px;
  margin-bottom: 0;
  background: #f5f6fb;
`;
export const TableHead = styled.div`
  display: grid;
  align-items: center;
  height: 38px;
  font-size: 13px;
  font-weight: normal;
  color: #52555f;
  grid-template-columns: 170px 248px 164px 116px 50px;
  & :nth-child(1) {
    padding-left: 25px;
  }
`;
export const TableTitle = styled.div`
  font-size: 11px;
  font-weight: 700;
  color: #000;
  padding: 0 8px;
  text-transform: uppercase;
`;
export const TableList = styled.ul`
  margin: 0;
  padding: 0;
  height: 342px;
  overflow: scroll;
  border-left: 1px solid #f4f6fb;
  border-right: 1px solid #f4f6fb;
  background-size: 2px 74px;
`;