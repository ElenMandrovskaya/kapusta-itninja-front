import styled from "@emotion/styled";

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media screen and (min-width: 768px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1280px) {
  flex-direction: row;
  }
`;
export const Table = styled.div`
  border-radius: 30px 30px 0px 0px;

  @media screen and (min-width: 768px) {
    margin-bottom: 55px;
    background: #f5f6fb;
  }

  @media screen and (min-width: 1280px) {
  margin-bottom: 0;
  }
`;

export const TableHead = styled.div`
  display: none;
  align-items: center;
  height: 38px;
  font-size: 13px;
  font-weight: normal;
  color: #52555f;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 120px 196px 152px 100px 50px;
  }

  @media screen and (min-width: 1280px) {
  grid-template-columns: 170px 248px 164px 116px 50px;
  }
`;

export const TableTitle = styled.div`
  font-size: 11px;
  font-weight: 700;
  color: #000;
  padding: 0 10px;
  text-transform: uppercase;
`;

export const TableDate = styled.div`
padding-left: 20px;
  font-size: 11px;
  font-weight: 700;
  color: #000;
  text-transform: uppercase;
`;

export const TableList = styled.ul`
  margin: 0;
  padding: 0;
  
  &::-webkit-scrollbar {
    width: 6px;
    height: 0;
    overflow-x: scroll;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
      background-color: #FF751D;
      border-radius: 4px;
    }

  @media screen and (max-width: 767px) {
    overflow: auto;
    height: 170px;
    width: 320px;
  }

  @media screen and (min-width: 768px) {
  overflow-x: scroll;
  scroll-behavior: smooth;
  height: 346px;
  border-left: 1px solid #f4f6fb;
  border-right: 1px solid #f4f6fb;
  background-size: 2px 74px;

  }

  @media screen and (min-width: 1280px) {
  height: 344px;
  }
`;