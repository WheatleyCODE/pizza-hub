import React from 'react';
import './DashBoard.scss';

interface IDashcBoardProps {
  children: React.ReactNode,
}
const DashBoard = ({ children }: IDashcBoardProps) => (
  <div className="DashBoard">
    <div className="DashBoard__triangle" />
    {children}
  </div>
);

export default DashBoard;
