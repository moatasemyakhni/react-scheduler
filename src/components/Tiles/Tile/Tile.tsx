import { FC } from "react";
import { useCalendar } from "@/context/CalendarProvider";
import { getDatesRange } from "@/utils/getDatesRange";
import { getTileProperties } from "@/utils/getTileProperties";
import { tileDefaultBgColor } from "@/constants";
import { getTileTextColor } from "@/utils/getTileTextColor";
import {
  StyledDescription,
  StyledStickyWrapper,
  StyledText,
  StyledTextWrapper,
  StyledTileWrapper
} from "./styles";
import { TileProps } from "./types";

const Tile: FC<TileProps> = ({ row, data, zoom, onTileClick }) => {
  const { date } = useCalendar();
  const datesRange = getDatesRange(date, zoom);
  const { y, x, width } = getTileProperties(
    row,
    datesRange.startDate,
    datesRange.endDate,
    data.startDate,
    data.endDate,
    zoom
  );

  return (
    <StyledTileWrapper
      style={{
        left: `${x}px`,
        top: `${y}px`,
        backgroundColor: `${data.bgColor ?? tileDefaultBgColor}`,
        width: `${width}px`,
        color: getTileTextColor(data.bgColor ?? "")
      }}
      onClick={() => onTileClick?.(data)}>
      <StyledTextWrapper>
        <StyledStickyWrapper
          style={{
            overflow: "visible",
            background: data.bgColor ?? tileDefaultBgColor,
            padding: "4px 2px 4px 0px",
            borderRadius: "0px 4px 4px 0px"
          }}>
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <StyledText bold>{data.title}</StyledText>
            {data.subtitleIcon && (
              <img src={data.subtitleIcon} style={{ width: 14, height: 14 }} alt="Icon" />
            )}
            <StyledText>{data.subtitle}</StyledText>
          </div>
          <StyledDescription style={{ paddingTop: data.description ? 4 : 0 }}>
            {data.description}
          </StyledDescription>
        </StyledStickyWrapper>
      </StyledTextWrapper>
    </StyledTileWrapper>
  );
};

export default Tile;
