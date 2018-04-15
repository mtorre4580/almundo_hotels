import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import Hotel from '../components/Hotel/Hotel';
import ActionHotels from '../actions/ActionHotels';

const mapStateToProps = state => ({...state.hotels});

const getHotels = () => dispatch => dispatch(ActionHotels.loadingHotels());

const applyFilter = filters => dispatch => dispatch(ActionHotels.filterHotels(filters));

export default compose(
    withRouter,
    connect(mapStateToProps, { getHotels, applyFilter }),
    lifecycle({
      componentDidMount () {
        this.props.getHotels();
      }
    })
)(Hotel);