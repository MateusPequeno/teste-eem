import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { IconsView } from "./styles";
interface IconsProps {
  onLeftIconClick?: (e: any) => void;
  leftIconSize?: number;
  leftIconColor?: string;
  leftIconName?: any;
  onRightIconClick?: (e: any) => void;
  rightIconSize?: number;
  rightIconColor?: string;
  rightIconName?: any;
}

export function IconsHeader({
  onLeftIconClick,
  leftIconSize,
  leftIconColor,
  leftIconName,
  rightIconSize,
  rightIconColor,
  rightIconName,
  onRightIconClick,
}: IconsProps) {
  return (
    <IconsView>
      <Ionicons
        name={leftIconName}
        size={leftIconSize}
        color={leftIconColor}
        onClick={onLeftIconClick}
      />
      <AntDesign
        name={rightIconName}
        size={rightIconSize}
        color={rightIconColor}
        onClick={onRightIconClick}
      />
    </IconsView>
  );
}
