import hoteles from './data.json';

export default class HotelService {

    static getAll() {
        return hoteles;
    }

    static filterBy(filters) {
       return hoteles.filter(h => filters.name && includesIgnoreCase(h.name,filters.name) || filters.stars && (filters.stars.includes(h.stars)));
    } 

    static normalizeRequest(request) {
        let { name, stars } = request;
        return {
            name: name ? name : null,
            stars : stars ? stars.map(s => parseInt(s)) : null,
        };
    }

    static save(request) {
        return {
            id: Math.random(),
            date: new Date()
        };
    }

    static delete(id) {
        return {
            msg: 'Hotel eliminado correctamente'
        };
    }

    static update(id,request) {
        return {
            msg: 'Se actualizo la info del hotel...'
        };
    }

}

const includesIgnoreCase = (name1,name2) => name1.toLowerCase().includes(name2.toLowerCase());