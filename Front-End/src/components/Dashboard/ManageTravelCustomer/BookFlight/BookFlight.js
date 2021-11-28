import Navigationbar from '../../../Navigationbar/Navigationbar'
import FlightsDetails from './FlightsDetails'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { searchFlightActions } from '../../../../store/searchFlightSlice'
import { bookFlightActions } from '../../../../store/bookFlightSlice'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'

const BookFlight = () => {
    const dispatch = useDispatch()
    const [errorFlag, setErrorFlag] = useState(false)

    const originCode = useSelector(state => state.searchFlightSlice.departureLocation)
    const destinationCode = useSelector(state => state.searchFlightSlice.arrivalLocation)
    const departureDate = useSelector(state => state.searchFlightSlice.departureDate)
    const numOfSeats = useSelector(state => state.searchFlightSlice.numberOfPassengers)

    const addedPassengerFlag = useSelector(state => state.bookFlightSlice.addedPassengerFlag)
    const bookFlightFlag = useSelector(state => state.bookFlightSlice.bookFlightFlag)

    useEffect(() => {
        getFlightDetails()
    })

    const getFlightDetails = async () => {
        try {
            const res = await axios.get(`http://localhost:3001/flights`, { params: { originCode, destinationCode, departureDate, numOfSeats } })
            dispatch(searchFlightActions.setAvailableFlights(res.data))
        } catch {
            setErrorFlag(true)
        }
    }

    const passengerAdded = () => toast.success('Passenger Added Succesfully')
    
    if (addedPassengerFlag) {
        passengerAdded()
        dispatch(bookFlightActions.setAddedPassengerFlag(false))
    }

    
    const passengerFieldsIncomplete = () => toast.error('Please Provide Details Of All Passengers')

    if (bookFlightFlag) {
        passengerFieldsIncomplete()
        dispatch(bookFlightActions.setBookFlightFlag(false))

    }

    return (
        <div>
            <Toaster />
            <Navigationbar />
            {errorFlag && <h1>Flights Not Found</h1>}
            {!errorFlag && <FlightsDetails />}
        </div>
    )
}

export default BookFlight