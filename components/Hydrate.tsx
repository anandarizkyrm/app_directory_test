"use client";
import React, { ReactNode } from "react";
import {
  HydrationBoundary,
  HydrationBoundaryProps,
} from "@tanstack/react-query";

interface HydrateProps extends HydrationBoundaryProps {
  children: ReactNode;
  // You can add additional props if needed
}

function Hydrate(props: HydrateProps) {
  return <HydrationBoundary {...props} />;
}

export default Hydrate;
