
import PeopleRepository from "../repository/PeopleRepository.js";
import { validateStatisticsRequest } from "../requests/statisticsRequest.js";

const statisticsController = {};
statisticsController.getStatistics = async (req, res) => {
    const query = req.query;
    const {data} = validateStatisticsRequest(query);
    if (data.status) {
        const people= await statisticsController.getStatisticsByStatus ({status:data.status})
        res.json({
            total:people.total,
            list:people.list
        });
    }
    const pending= await statisticsController.getStatisticsByStatus ({status:"PENDING"})
    const accepted= await statisticsController.getStatisticsByStatus ({status:"ACCEPTED"})
    const rejected= await statisticsController.getStatisticsByStatus ({status:"REJECTED"})
    res.json({
        pending:{
            total:pending.total,
            list:pending.list
        },
        accepted:{
            total:accepted.total,
            list:accepted.list
        },
        rejected:{
            total:rejected.total,
            list:rejected.list
        }
    });
};

statisticsController.arrayToNumber =  (array) => {
    const arrayLength = array.length;
    if (arrayLength< 2) {
        return arrayLength;
    }
    return arrayLength +1
};
statisticsController.getStatisticsByStatus =   async ({status}) => {
    const array= await new PeopleRepository().getPeople({query:{status}});
    const total=statisticsController.arrayToNumber(array);
    return {
        total,
        list:array  
    };
};
export default statisticsController;