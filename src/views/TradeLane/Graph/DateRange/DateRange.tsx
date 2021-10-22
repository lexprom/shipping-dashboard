import React from "react";
import { Container, DateText, Line } from "./DateRange.styles";

interface DateRangeProps {
  startDate?: string | number | null;
  endDate?: string | number | null;
}

const DateRange = ({ startDate, endDate }: DateRangeProps) => {
  return (
    <Container>
      <DateText>{startDate}</DateText>
      <Line />
      <DateText>{endDate}</DateText>
    </Container>
  );
};

export default DateRange;
