import styled from "styled-components";

export const Title = styled.h1`
  width: 100vw;
  height: 40px;
  background-color: red;
  margin-bottom: 20px;
`;

export const FormContainer = styled.form`
  width: 100vw;
  height: ${(props) => props.size};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 40px;

  background-color: blue;
`;

export const Label = styled.label`
  width: 90vw;
  height: 50px;
  display: flex;
  flex-wrap: wrap;

  background-color: purple;
`;

export const FieldName = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  height: 20px;
  line-height: 20px;
`;
export const Input = styled.input`
  display: block;
  width: 200px;
  margin: 0 auto;
  text-align: center;
  height: 30px;
`;

export const SubmitButton = styled.input`
  margin-top: 30px;
  width: 50px;
  height: 50px;
`;

export const Errors = styled.div`
  width: 100%;
`;
export const Error = styled.span`
  display: block;
  width: 100%;
  padding: 10px;
  height: 20px;
  margin: auto;
  color: red;
`;

export const StyledLink = styled.span`
  display: block;
  width: 100%;
  padding: 0 10px;
  margin-top: 20px;
  & a {
    color: ${({ theme }) => theme.font};
    &:visited {
      color: ${({ theme }) => theme.font};
    }
  }
`;

export const Footer = styled.footer`
  width: 100vw;
  height: 20px;
  position: absolute;
  bottom: 0;
  left: 0;

  background-color: black;
  color: white;
`;
