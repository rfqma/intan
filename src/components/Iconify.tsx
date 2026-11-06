"use client";

import { Icon, type IconProps } from "@iconify/react";

export type IconifyProps = IconProps;

export default function Iconify(props: IconifyProps) {
  return <Icon {...props} />;
}
