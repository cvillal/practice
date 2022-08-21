import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='container'>
      <DashboardComponent/>
      <ReviewComponent/>
      <AvgRatingComponent/>
      <AnalysisComponent/>
      <VisitorComponent/>
    </div>
  );
}
const DashboardComponent = () => {
  return (
    <div className='dashboard'>
      <h3>Dashboard</h3>
      <h3>Widget</h3>
      <h3>Reviews</h3>
      <h3>Customers</h3>
      <h3>Online Analysis</h3>
      <h3>Settings</h3>
    </div>
  )
}


const ReviewComponent = () => {
  return (
    <div className='reviews'>
      <h5>REVIEWS</h5>
      <h1>1,282</h1>
      <p>You got +23.5% more reviews than last week</p>
    </div>
  )
}
const AvgRatingComponent = () => {
  return (
    <div className='ratings'>
      <h5>AV. RATING</h5>
      <h1>4.6</h1>
      <p>-.3 points from last week</p>
    </div>
  )
}
const AnalysisComponent = () => {
  return (
    <div className='analysis'>
      <h5>SENTIMENT ANALYSIS</h5>
      <h1>960</h1>
      <h1>122</h1>
      <h1>321</h1>
    </div>
  )
}

const VisitorComponent = () => {
  return (
    <div className='visitors'>
      <h3>Website visitors</h3>
      <h1>821</h1>
      <div className='bottom'>
        cahrt w todays visitors
      </div>
    </div>
  )
}
export default App;
