import './LoadMore.css'

export const LoadMoreButton= ({ onClick }: any) => {
    return <div className='loadBlock'><button onClick={onClick} className="load">LoadMore</button></div>
}