import React from 'react'
// Styles
import {StyledBackIcon, StyledHeader, StyledTitle, StyledWrapper} from "./Header.style";
// Icons
import {HiArrowNarrowRight, HiDotsHorizontal, HiSearch} from "react-icons/hi";

interface PropsInterface {
    title: string,
}

const Header: React.FC<PropsInterface> = (props) => {

    function goBack() {
        console.log("NOT_MENTIONED_TO_HANDLE")
    }

    function onSearch() {
        console.log("NOT_MENTIONED_TO_HANDLE")
    }

    function onMenu() {
        console.log("NOT_MENTIONED_TO_HANDLE")
    }

    return (
        <StyledHeader>
            <StyledWrapper>
                <span onClick={onMenu}>
                   <HiDotsHorizontal/>
                </span>
                <span onClick={onSearch}>
                    <HiSearch/>
                </span>
            </StyledWrapper>

            <StyledTitle>{props.title}</StyledTitle>

            <StyledBackIcon onClick={goBack}>
                <HiArrowNarrowRight/>
            </StyledBackIcon>


        </StyledHeader>
    )
}

export default Header