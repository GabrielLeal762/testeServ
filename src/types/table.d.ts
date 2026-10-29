import React from "react";

export interface Table {
  headers: string[];
  rows: React.ReactNode[][];
}
