import { FC } from "react";
import { Icon } from "@/components";
import {
  StyledImage,
  StyledImageWrapper,
  StyledInnerWrapper,
  StyledText,
  StyledTextWrapper,
  StyledWrapper
} from "./styles";
import { LeftColumnItemProps } from "./types";

const LeftColumnItem: FC<LeftColumnItemProps> = ({ id, item, rows, onItemClick }) => {
  return (
    <StyledWrapper
      style={{
        backgroundColor: "#19277E"
      }}
      title={item.title + " | " + item.subtitle}
      clickable={typeof onItemClick === "function"}
      rows={rows}
      onClick={() => onItemClick?.({ id, label: item })}>
      <StyledInnerWrapper
        style={{
          flexDirection: "column",
          gap: 8
        }}>
        <StyledImageWrapper
          style={{
            alignSelf: "flex-start"
          }}>
          {item.icon ? (
            <StyledImage src={item.icon} alt="Icon"></StyledImage>
          ) : (
            <Icon iconName="defaultAvatar" />
          )}
        </StyledImageWrapper>
        <StyledTextWrapper>
          <StyledText
            isMain
            style={{
              color: "white"
            }}>
            {item.title}
          </StyledText>
          <StyledText
            style={{
              color: "#ffffffbb"
            }}>
            {item.subtitle}
          </StyledText>
        </StyledTextWrapper>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

export default LeftColumnItem;
