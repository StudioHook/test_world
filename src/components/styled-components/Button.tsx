import styled from 'styled-components';

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return <StyledButton>{text}</StyledButton>;
};

const StyledButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export default Button;
