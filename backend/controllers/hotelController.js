import hotelService from '../services/HotelService';

const get = (req, res) => res.json(hotelService.getAll());

const getByFilter = (req, res) => {
    let filters = hotelService.normalizeRequest(req.query);
    res.json(hotelService.filterBy(filters));
}

const save = (req, res) => res.json(hotelService.save(req.body));

const del = (req, res) => res.json(hotelService.delete(req.params.id));

const update = (req,res) => res.json(hotelService.update(req.params.id,req.body));

export default { get, getByFilter, save, del, update };

