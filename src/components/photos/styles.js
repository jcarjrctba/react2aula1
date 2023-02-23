import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 975px;
  display: flex;
  flex-wrap: wrap;
  padding: 30px 20px 0;
  justify-content: space-between;
`;

export const PhotoItem = styled.div`
  width: 293px;
  height: 293px;
  margin-bottom: 28px;
  cursor: pointer;
`;

export const Photo = styled.img`
  width: 100%;
  height: 293px;
  object-fit: cover;
`;
