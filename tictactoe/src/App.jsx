import Box from './components/Box';
import './App.css';

const Square = () => {
  return (
    <div className="container">
      <h1>Tic-Tac-Toe</h1>
      <div className="arena">
        <div className='board-row'>
          <Box value="1"/>
          <Box value="2"/>
          <Box value="3"/>
        </div>
        <div className='board-row'>
          <Box value="4"/>
          <Box value="5"/>
          <Box value="6"/>
        </div>
        <div className='board-row'>
          <Box value="7"/>
          <Box value="8"/>
          <Box value="9"/>
        </div>
      </div>
    </div>
  )
}

export default Square;