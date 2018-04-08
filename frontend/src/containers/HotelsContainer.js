import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import Hotel from '../components/Hotel';
import ActionHotels from '../actions/ActionHotels';
import HotelsAPI from '../services/HotelsAPi';

const API = new HotelsAPI();

const mapStateToProps = state => ({...state.hotels});

const getHotels = () => dispatch => {
    dispatch(ActionHotels.loadingHotels());
    API.getHotels()
       .then(res => dispatch(ActionHotels.loadingHotelsSuccess(res.data)))
       .catch(err =>  dispatch(ActionHotels.loadingHotelsError(true)));
}

const applyFilter = filters => dispatch => {
  dispatch(ActionHotels.loadingHotels());
  API.getHotelsByFilter(filters)
     .then(res => dispatch(ActionHotels.loadingHotelsSuccess(res.data)))
     .catch(err =>  dispatch(ActionHotels.loadingHotelsError(true)));
}

export default compose(
    withRouter,
    connect(mapStateToProps, { getHotels, applyFilter }),
    lifecycle({
      componentDidMount () {
        this.props.getHotels();
      }
    })
)(Hotel);