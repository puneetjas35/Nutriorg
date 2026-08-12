import Axios from "./Axios"
import SummaryApi from "../common/SummaryApi"

const fetchUserDetails = async()=>{
        const response = await Axios({
            ...SummaryApi.userDetails
        })
        return response
 
}

export default fetchUserDetails
