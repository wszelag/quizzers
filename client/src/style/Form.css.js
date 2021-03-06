import styled from "styled-components";

export const Title = styled.h1`
  width: 100vw;
  height: 40px;
  margin-bottom: 20px;

  font-size: 24px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.font};
  text-align: center;
`;

export const FormContainer = styled.form`
  width: 100vw;
  height: ${(props) => props.size};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 40px;
`;

export const Label = styled.label`
  width: 90vw;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const FieldName = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  height: 20px;
  line-height: 20px;

  font-size: 18px;
  color: ${({ theme }) => theme.font};
`;
export const Input = styled.input`
  display: block;
  width: 260px;
  margin: 0 auto;
  text-align: center;
  height: 30px;

  font-size: 18px;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.secondaryBackground};
  color: ${({ theme }) => theme.secondaryFont};
`;

export const SubmitButton = styled.input`
  margin-top: 30px;
  width: 150px;
  height: 50px;

  font-size: 20px;
  outline: none;
  border: none;
  border-radius: 30px;
  color: ${({ theme }) => theme.font};
  background-color: ${({ theme }) => theme.correct};
`;

export const Errors = styled.div`
  width: 100%;
`;
export const Error = styled.span`
  display: block;
  width: 100%;
  padding: 10px;
  text-align: center;
  height: 20px;
  margin: auto;
  color: ${({ theme }) => theme.wrong};
`;

export const StyledLink = styled.span`
  display: block;
  width: 100%;
  padding: 0 10px;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.font};
  & a {
    color: ${({ theme }) => theme.link};
    &:visited {
      color: ${({ theme }) => theme.link};
    }
  }
`;

export const Footer = styled.footer`
  width: 100vw;
  height: 30px;
  line-height: 30px;
  position: absolute;
  bottom: 0;
  left: 0;

  background-color: black;
  color: white;
`;
