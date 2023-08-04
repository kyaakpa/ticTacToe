import Box from './components/Box';
import './App.css';

const Square = () => {
  return (
    <div className="container">
      <h1>Tic-Tac-Toe</h1>
      <div className="arena">
        <div className='board-row'>
          <Box/>
          <Box/>
          <Box/>
        </div>
        <div className='board-row'>
          <Box/>
          <Box/>
          <Box/>
        </div>
        <div className='board-row'>
          <Box/>
          <Box/>
          <Box/>
        </div>
      </div>
    </div>
  )
}

export default Square;