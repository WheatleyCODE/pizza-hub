import React from 'react';
import './DashBoard.scss';

interface IDashcBoardProps {
  children: React.ReactNode;
}
const DashBoard: React.FC<IDashcBoardProps> = ({ children }) => (
  <div className="DashBoard">
    <div className="DashBoard__triangle" />
    {children}
  </div>
);

export default DashBoard;
