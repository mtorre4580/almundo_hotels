import axios from 'axios';

export default class HotelsAPI {

    constructor() {
        this.axios = axios.create();
        this.starsMap = new Map([['allStars', 5],['five', 5],['four', 4],['three', 3],['two', 2],['one', 1]]);
    }

    getHotels = () => this.axios.get('/hotels/all');

    getHotelsByFilter = (filters) => {
        let params = { name : filters.name, stars: parseStars(filters,this.starsMap) };
        return this.axios.get('/hotels',{ params: params});
    }    

}

const parseStars = (filters,starsMap) => {
    let keys = Object.keys(filters);
    return keys.filter(k => filters[k]).map(k=> starsMap.get(k));
}