import loadingImg from '../../images/loading-skyline.gif'
import './loading.css'

const Loading = () => {
    return (
        <div className='loading'>
            <img src={loadingImg} className='spinner'/>
        </div>
    )
}

export default Loading