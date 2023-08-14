import React,{useState} from 'react'

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
    skill:'mobile-app',
    active:false,
  }
]
function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const switchIndex = (id)=>{
    setCurrentIndex(id)
    console.log(id);
  }

 
  console.log(currentIndex);
  return (
    <div className="projects" id="projects">
    <h1>Projects</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore cupiditate iusto mollitia? Obcaecati vero quae maxime unde eum, fuga ipsam?</p>
    <div className="project-list">
        <div className="prject-header">
        <ul>{
          skilList.map((list,id)=>{
            return  (
              <li className={`${currentIndex === id && 'active'}`} onClick={()=>{
                    switchIndex(id)
              }}  key={list.id}>{list.skill.toUpperCase()}</li>
            )
          })
        }</ul>
           
            <div className="sub-projects">
               <img src="https://th.bing.com/th/id/OIG.qmjvkVxRocL7xNc856nJ?pid=ImgGn" alt=""/>
               <img src="https://th.bing.com/th/id/OIG.qmjvkVxRocL7xNc856nJ?pid=ImgGn" alt=""/>
               <img src="https://th.bing.com/th/id/OIG.qmjvkVxRocL7xNc856nJ?pid=ImgGn" alt=""/>
               <img src="https://th.bing.com/th/id/OIG.qmjvkVxRocL7xNc856nJ?pid=ImgGn" alt=""/>
            </div>
           {/* <Swiperjs /> */}
        </div>
    </div>
</div>
  )
}

export default Projects