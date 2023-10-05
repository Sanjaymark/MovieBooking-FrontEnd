import {Route, Routes} from "react-router-dom";
import './App.css';
import { Dashboard } from "./Pages/Dashboard";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import {  MovieDetails } from "./Pages/Movies/GetMovieByID";
import { AllMovies } from "./Pages/Movies/GetAllMovies";
import ShowtimesOfAMovie from "./Pages/Showtime/GetAllShowtimeofMovie";
import { AddBooking } from "./Pages/Booking/AddBooking";
import { UserBookings } from "./Pages/Booking/BookingsOfAUser";
import { BookingDetails } from "./Pages/Booking/GetBookingByID";








function App() 
{
  return (
        
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route exact path="/user/login" element={<Login/>} />
          <Route exact path="/user/signup" element={<Signup/>} />
          <Route exact path="/movie/all" element={<AllMovies/>} />
          <Route exact path="/movie/:id" element={<MovieDetails/>} />
          <Route exact path="/showtime/all/:movieId" element={<ShowtimesOfAMovie/>}/>
          <Route exact path="/booking/add/:showtimeId" element={<AddBooking/>}/>
          <Route exact path="/booking/user/bookings/:userId" element={<UserBookings/>}/>
          <Route exact path="/booking/:bookingId" element={<BookingDetails/>}/>
        </Routes>
      </div>
  ); 
}


export default App;







