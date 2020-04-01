import styled from "styled-components";
import { ReactComponent as LoaderSVG } from "./../../public/images/loader.svg";

export const StyledLoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2em;
`
export const StyledText = styled.span`
  font-weight: bold;
  margin: 1em 0 0 0;
  text-transform: uppercase;
`
export const StyledLoader = styled(LoaderSVG)`
  width: 24px;
  display: inline-block;
  animation: infinitespin 1s 2s infinite linear;
  margin-left: 0.5em;

@keyframes infinitespin {
  0% {
    transform: scale(1);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(scale);
    opacity: 0;
  }
};
`