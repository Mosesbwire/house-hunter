import axios from 'axios'

export async function getPricingPlans(){
    try {
        const res = await axios.get('http://localhost:5000/api/v1/plans')
        return res.data
    } catch (error){
        console.error(error)
    }
}