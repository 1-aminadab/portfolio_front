import React,{useState} from 'react'
import data from './projects'
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
const skilList = [
    {
        skill:'all',
        active:true,
      },
      {
        skill:'fullstack',
        active:true,
      },
      {
        skill:'frontend',
        active:false,
      },
      {
        skill:'mobile_app',
        active:false,
      }
    ]
function Review() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [reviewIndex, setReviewIndex] = useState()
  const [openReview, setOpenReview] = useState(false)
  const [filteredData, setFilteredData] = useState(data)
  const switchIndex = (id)=>{
    setCurrentIndex(id)
    console.log(id);
  }
  
  const setReview = (id)=>{
    setReviewIndex(id)
    setOpenReview(true)
  }
 
  const filterproject = (title)=>{
    console.log('the title'+title);
    if(title=== 'all'){
        setFilteredData(data)
        return 
    }
    const filtered_data = data.filter((project)=>{
        return project.projectTitle === title
    })
    setFilteredData(filtered_data)
  }
  return (
    <div className="projects" id="projects">
    <h1>Projects</h1>
    <p>Experience the perfect blend of captivating frontend, robust backend, and cutting-edge mobile app. Delightful user experience, seamless integration, and limitless possibilities await</p>
    <div className="project-list">
        <div className="prject-header">
        <ul>{
          skilList.map((list,id)=>{
            
            return  (
              <li  className={`${currentIndex === id && 'active'}`} onClick={()=>{
                    switchIndex(id)
                    filterproject(list.skill)
              }}  key={list.id}>{list.skill}</li>
            )
          })
        }</ul>
           <div className='scroll-projects'>
            <div className="sub-projects">
                
              {
                filteredData.map((project, id)=>{
                    if(!project){
                        return (
                            <h1>Not Uploaded Yet</h1>
                        )
                    }
                    return (
                        <div  className="project-list" key= {id}>
                            <img onClick={()=> setReview(id)} src={project.projectThumbnail} alt="" />
                            <div className="project-desc">
                                <h3>{project.description}</h3>
                                <a href={project.githubLink}><GitHubIcon /></a>
                            </div>
                            
                            <div  className="project-preview-img" style={{display:`${(reviewIndex === id && openReview) ? 'flex' : 'none'}`}}>
                            <div onClick={()=>{
                                setOpenReview(false)
                                setReviewIndex()
                            }} className="close-review"><CloseIcon fontSize="large"/></div>
                                {
                                    project.projectPath.map((path, id)=>{
                                        return (
                                            <img key = {id} src={path} alt="" />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
              }
            </div>
            </div>
           {/* <Swiperjs /> */}
        </div>
    </div>
</div>
  )
}

export default Review