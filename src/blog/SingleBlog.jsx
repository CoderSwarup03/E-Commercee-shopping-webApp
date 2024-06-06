import React, { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Tags from '../shop/Tags';
import PopularPost from '../shop/PopularPost';

const socialList = [ 
    { link: "#", iconName: "icofont-facebook", className: "facebook", }, 
    { link: "#", iconName: "icofont-twitter", className: "twitter", }, 
    { link: "#", iconName: "icofont-linkedin", className: "linkedin", }, 
    { link: "#", iconName: "icofont-instagram", className: "instagram", }, 
    { link: "#", iconName: "icofont-pinterest", className: "pinterest", }, 
];


const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList);
    const { id } = useParams();
    // console.log(id)
    const result = blog.filter((b) => b.id === Number(id));
    console.log(result[0]);
    return (
        <div>
            <PageHeader title={"Single Blog Pages"} curPage={"Blog / Blog Details"} />

            <div className="blog-section blog-single padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* left side */}
                        <div className='col-lg-8 col-12'>
                            <article>
                                <div className="section-wrapper">
                                    <div className="row row-cols-1 justify-content-center g-4">
                                        <div className="col">
                                            <div className="post-item style-2">
                                                <div className="post-inner">
                                                    {
                                                        result.map((item) => (
                                                            <div key={item.id}>
                                                                <div className='post-thumb'>
                                                                    <img src={item.imgUrl} alt="" />
                                                                </div>
                                                                <div className="post-content">
                                                                    <h3>{item.title}</h3>
                                                                    <div className="meta-post">
                                                                        <ul className="lab-ul">
                                                                            <ul className="lab-ul">
                                                                                {
                                                                                    item.metaList.map((val, i) => (
                                                                                        <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                                                                    ))
                                                                                }
                                                                            </ul>
                                                                        </ul>
                                                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                                            Magni dolorum laboriosam mollitia corporis, doloremque impedit nisi eius commodi,
                                                                            distinctio voluptas voluptate quidem quo quaerat officiis ullam praesentium dolore repudiandae illo eos in debitis harum. Sequi?
                                                                        </p>
                                                                        <blockquote>
                                                                            <p>Dynamically recaptiualize distruibuted technology is wherecase turnkey channel
                                                                                and Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, non.
                                                                            </p>
                                                                            <cite>
                                                                                <a href="#">...Melissa Hunter</a>
                                                                            </cite>
                                                                        </blockquote>
                                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloribus aspernatur earum quod tempore,
                                                                            similique ratione praesentium obcaecati voluptatibus optio,
                                                                            aperiam quas hic dolor non, explicabo quia at porro deserunt sapiente quisquam beatae.
                                                                            Eum cumque aut incidunt reprehenderit possimus natus.
                                                                        </p>
                                                                        <img src="/src/assets/images/blog/single/01.jpg" alt="" />

                                                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                                            Blanditiis dolorum itaque delectus asperiores sunt numquam perferendis temporibus nostrum! Error cum dolorum eaque magni architecto.
                                                                            Ex magni quis repellat sint aspernatur nam deleniti molestias? Ab, at ad! Perferendis maxime ipsam assumenda.
                                                                        </p>
                                                                        <div className="video-thumb">
                                                                            <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                                                            <a href="https://www.youtube.com/live/DQacCB9tDaw?si=4fuCdimdyAuR-Evz" className='video-button popup'
                                                                            target="_blank"
                                                                            >
                                                                                <i className='icofont-ui-play'></i>
                                                                            </a>
                                                                        </div>
                                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                            Architecto exercitationem in perferendis nemo assumenda tempora aut et quod,
                                                                            inventore consequatur illo ab, maxime officiis cumque non nisi dolore impedit nihil iste voluptatem facilis.
                                                                            Blanditiis sit ex voluptatem at sapiente placeat.
                                                                        </p>
                                                                        <div className="tags-section">
                                                                            <ul className="tags lab-ul">
                                                                                <li>
                                                                                    <a href="#">Agency</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#">Business</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#">Personal</a>
                                                                                </li>
                                                                            </ul>
                                                                            <ul className="lab-ul social-icons">
                                                                                {
                                                                                    socialList.map((val,i) => (
                                                                                        <li key={i}>
                                                                                            <a href="#" className={val.className}>
                                                                                                <i className={val.iconName}></i>
                                                                                            </a>
                                                                                        </li>
                                                                                    ))
                                                                                }
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div className="navigations-part">
                                                <div className="left">
                                                    <a href="#" className='prev'>
                                                        <i className='icofont-double-left'></i> Previous Article
                                                    </a>
                                                    <a href="#" className='title'>
                                                        Evisculate Parallel Process via Technical Sound Models Authoritative
                                                    </a>
                                                </div>
                                                <div className="right">
                                                    <a href="#" className='next'>
                                                        <i className='icofont-double-right'></i> Next Article
                                                    </a>
                                                    <a href="#" className='title'>
                                                        Evisculate Parallel Process via Technical Sound Models Authoritative
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>

                        {/* right side */}
                        <div className='col-lg-4 col-12'>
                            <aside>
                                <Tags/>
                                <PopularPost/>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog


//YT-2.59.00