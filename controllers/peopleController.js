
import PeopleRepository from "../repository/PeopleRepository.js";
import { validatePeopleRequest, validatePartialPeopleRequest, validatePartialPeopleGetRequest } from "../requests/peopleRequest.js";
const peopleController = {};

peopleController.getPeople = async (req, res) => {
    const query = req.query;
    const {data} = validatePartialPeopleGetRequest(query);
    const response = await new PeopleRepository().getPeople({query:data});
    res.json(response);
};


peopleController.getPeopleById = async(req, res) => {
  const { id } = req.params;
  const repository = new PeopleRepository();
  const response = await repository.getById({id});
  res.json(response);
};

peopleController.createPeople = async (req, res) => {
  const { data, error } = validatePeopleRequest(req.body);
  const repository =new PeopleRepository();
  const response = await repository.createPeople({name:data.name, status:"PENDING"});
  res.status(201).json(response);
};

peopleController.deletePeople = async (req, res) => {
  const { id } = req.params;
  const repository = new PeopleRepository();
  const response = await repository.deleteById({id});
  res.json(response);
};

peopleController.updatePeople = async (req, res) => {
  const { id } = req.params;
  const { data, error } = validatePartialPeopleRequest(req.body);
  const repository = new PeopleRepository();
  const response = await repository.updateBy({selector:{_id:id}, data});
  res.json(response);
};

export default peopleController;