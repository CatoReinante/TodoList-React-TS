import type React from "react";
import { FILTER_BUTTONS } from "../const";
import { type FilterValue } from "../types";

interface Props {
  onFilterChange: (filter: FilterValue) => void;
  filterSelected: FilterValue;
}

const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  const handleClick = (key: FilterValue) => {
    onFilterChange(key);
  };
  return (
    <ul className="filters">
      {Object.entries(FILTER_BUTTONS).map(([key, { label, value }]) => (
        <li key={key}>
          <a
            className={`${filterSelected === value ? "selected" : ""}`}
            onClick={() => handleClick(key as FilterValue)}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Filters;
